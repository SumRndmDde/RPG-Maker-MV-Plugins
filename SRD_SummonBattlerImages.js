/*:
 * @plugindesc Allows summoned Actors to use static battler images as opposed to side-view Actor battler images.
 * @author SumRndmDde
 * @help
 *
 * Summon Battler Images
 * Version 1.00
 * SumRndmDde
 *
 *
 * This plugin requires the Summon Core plugin:
 * http://sumrndm.site/summon-core/
 *
 * This plugin allows summoned Actors to use static battler images as opposed 
 * to side-view Actor battler images.
 *
 *
 * ==============================================================================
 *  Actor Notetags
 * ==============================================================================
 *
 * Place these notetags into the Actors you wish to summon. Once one of 
 * those Actors is summoned, it will use the static images settings setup
 * using these notetags.
 *
 *
 *   <Summon Battler Image: filename>
 *
 * Replace "filename" with the name of an image file stored within:
 *   /img/SumRndmDde/summon/
 * This Actor will now use this image as a battler when summoned.
 *
 *
 *   <Summon Battler Scale: scale>
 *
 * Set this to the scale of the battler if you wish to change it from the
 * default. By default, it is 1. For example, by setting it to 0.5, one can 
 * set the size of the battler to 50%.
 *
 *
 *   <Summon Battler Hue: hue>
 *
 * Set this to the hue of the battler. By default, it will use 0.
 *
 *
 * ==============================================================================
 *  End of Help File
 * ==============================================================================
 * 
 * Welcome to the bottom of the Help file.
 *
 *
 * Thanks for reading!
 * If you have questions, or if you enjoyed this Plugin, please check
 * out my YouTube channel!
 *
 * https://www.youtube.com/c/SumRndmDde
 *
 *
 * Until next time,
 *   ~ SumRndmDde
 *
 */

var SRD = SRD || {};
SRD.SummonBattlerImages = SRD.SummonBattlerImages || {};
SRD.NotetagGetters = SRD.NotetagGetters || [];

var Imported = Imported || {};
Imported["SumRndmDde Summon Battler Images"] = 1.00;

(function(_, N) {

"use strict";

//-----------------------------------------------------------------------------
// SRD.SummonBattlerImages
//-----------------------------------------------------------------------------

_.meetsRequirements = Imported["SumRndmDde Summon Core"];

_.loadImage = function(filename, hue) {
	return ImageManager.loadBitmap('img/SumRndmDde/summon/', filename, hue, false);
};

_.loadNotetags = function() {
	const data = $dataActors;
	const regex = /<Summon\s*Battler\s*Image\s*:\s*(.*)\s*>/im;
	const regex1 = /<Summon\s*Battler\s*Scale\s*:\s*(.*)\s*>/im;
	const regex2 = /<Summon\s*Battler\s*Hue\s*:\s*(.*)\s*>/im;
	for(let i = 1; i < data.length; i++) {
		const note = data[i].note;
		if(note.match(regex)) {
			data[i]._sei_image = String(RegExp.$1);
		}
		if(note.match(regex1)) {
			data[i]._sei_scale = parseFloat(RegExp.$1);
		}
		if(note.match(regex2)) {
			data[i]._sei_hue = parseInt(RegExp.$1);
		}
	}
};

SRD.NotetagGetters.push(_.loadNotetags);

_.alertNeedSummonCore = function() {
	alert("The 'SRD_SummonCore' plugin is required for using the 'SRD_SummonBattlerImages' plugin.");
	if(confirm("Do you want to open the download page to 'SRD_SummonCore'?")) {
		window.open('http://sumrndm.site/summon-core/');
	}
};

if(!_.meetsRequirements) {
	_.alertNeedSummonCore();
}

//-----------------------------------------------------------------------------
// DataManager
//-----------------------------------------------------------------------------

if(!SRD.DataManager_isDatabaseLoaded) {

SRD.notetagsLoaded = false;
SRD.DataManager_isDatabaseLoaded = DataManager.isDatabaseLoaded;
DataManager.isDatabaseLoaded = function() {
	if(!SRD.DataManager_isDatabaseLoaded.apply(this, arguments)) return false;
	if(!SRD.notetagsLoaded) {
		N.forEach(function(func) {
			func.call(this);
		}, this);
		SRD.notetagsLoaded = true;
	}
	return true;
};

}

//-----------------------------------------------------------------------------
// Game_Summon
//-----------------------------------------------------------------------------

_.Game_Summon_setup = Game_Summon.prototype.setup;
Game_Summon.prototype.setup = function() {
	_.Game_Summon_setup.apply(this, arguments);
	this._staticSummonImage = this.actor()._sei_image || null;
};

Game_Summon.prototype.staticSummonImage = function() {
	return this._staticSummonImage;
};

Game_Summon.prototype.hasStaticSummonImage = function() {
	return !!this._staticSummonImage;
};

Game_Summon.prototype.staticSummonImageScale = function() {
	return this.actor()._sei_scale || 1;
};

Game_Summon.prototype.staticSummonImageHue = function() {
	return this.actor()._sei_hue || 0;
};

//-----------------------------------------------------------------------------
// Sprite_Summon
//-----------------------------------------------------------------------------

_.Sprite_Summon_initialize = Sprite_Summon.prototype.initialize;
Sprite_Summon.prototype.initialize = function() {
	_.Sprite_Summon_initialize.apply(this, arguments);
	this._actionStartStuffs = ['thrust', 'swing', 'missile', 'skill', 'spell', 'item'];
};

Sprite_Summon.prototype.hasStaticSummonImage = function() {
	return this._actor && this._actor.hasStaticSummonImage();
};

_.Sprite_Summon_updateBitmap = Sprite_Summon.prototype.updateBitmap;
Sprite_Summon.prototype.updateBitmap = function() {
	if(this.hasStaticSummonImage()) {
		if(this._staticSpriteName !== this._actor.staticSummonImage()) {
			this._staticSpriteName = this._actor.staticSummonImage();
			this._mainSprite.bitmap = _.loadImage(this._staticSpriteName, this._actor.staticSummonImageHue());
			this._mainSprite.scale.set(this._actor.staticSummonImageScale());
			this._shadowSprite.opacity = 0;
			this._stateSprite.opacity = 0;
		}
	} else {
		if(this._battlerName !== name) {
			this._shadowSprite.opacity = 255;
			this._stateSprite.opacity = 255;
			this._mainSprite.scale.set(1);
			this._stateSprite.y = 0;
		};
		_.Sprite_Summon_updateBitmap.apply(this, arguments);
	}
};

_.Sprite_Summon_updateFrame = Sprite_Summon.prototype.updateFrame;
Sprite_Summon.prototype.updateFrame = function() {
	if(this.hasStaticSummonImage()) {
		const bit = this._mainSprite.bitmap;
		this.setFrame(0, 0, bit.width, bit.height);
	} else {
		_.Sprite_Summon_updateFrame.apply(this, arguments);
	}
};

_.Sprite_Summon_setupWeaponAnimation = Sprite_Summon.prototype.setupWeaponAnimation;
Sprite_Summon.prototype.setupWeaponAnimation = function() {
	if(!this.hasStaticSummonImage()) {
		_.Sprite_Summon_setupWeaponAnimation.apply(this, arguments);
	};
};

Sprite_Summon.prototype.startWhiten = function() {
	this._effectType = 'white';
	this._effectDuration = 16;
};

Sprite_Summon.prototype.startBlink = function() {
	this._effectType = 'blink';
	this._effectDuration = 20;
};

_.Sprite_Summon_update = Sprite_Summon.prototype.update;
Sprite_Summon.prototype.update = function() {
	_.Sprite_Summon_update.apply(this, arguments);
	if(this.hasStaticSummonImage()) {
		this.updateStaticEffect();
	}
};

Sprite_Summon.prototype.updateStaticEffect = function() {
	if(this._effectType && this._effectDuration > 0) {
		this._effectDuration--;
		if(this._effectType === 'white') this.updateWhiten();
		else if(this._effectType === 'blink') this.updateBlink();
		if(this._effectDuration === 0) {
			this._effectType = null;
		}
	}
};

Sprite_Summon.prototype.updateWhiten = function() {
	var alpha = 128 - (16 - this._effectDuration) * 10;
	this._mainSprite.setBlendColor([255, 255, 255, alpha]);
};

Sprite_Summon.prototype.updateBlink = function() {
	this.opacity = (this._effectDuration % 10 < 5) ? 255 : 0;
};

_.Sprite_Summon_startMotion = Sprite_Summon.prototype.startMotion;
Sprite_Summon.prototype.startMotion = function(motionType) {
    _.Sprite_Summon_startMotion.apply(this, arguments);
    if(this.hasStaticSummonImage()) {
		if(motionType === 'damage') {
			this.startBlink();
		} else if(this._actionStartStuffs.contains(motionType)) {
			this.startWhiten();
		}
	}
};

})(SRD.SummonBattlerImages, SRD.NotetagGetters);