/*:
 * @plugindesc Gives developers the capability to add animated pictures as choice commands for the title command window.
 * @author SumRndmDde
 *
 * @param Highlight Frame
 * @desc If 'true', command images will be split into two halfs: 
 * the left for unselected, and the right for selected.
 * @default true
 *
 * @param Disable Opacity
 * @desc This is the opacity of commands that are disabled.
 * @default 170
 *
 * @param Animation Duration
 * @desc The duration, in frames, it takes for the highlight animation to occur.
 * @default 7
 *
 * @param Scale Animation
 * @desc The scale growth that occurs on highlighted commands.
 * 0 = no growth  |  0.2 = 20% growth  |  0.5 = 50% growth
 * @default 0.2
 *
 * @param X Animation
 * @desc The X shift that occurs on highlighted commands.
 * Positive numbers move it to the right; negative to the left.
 * @default 0
 *
 * @param Y Animation
 * @desc The Y shift that occurs on highlighted commands.
 * Positive numbers move it down; negative move it up.
 * @default 0
 *
 * @param Line Height
 * @desc This is the line height of the Title Command. Increase this if the commands seem too close together or vise versa.
 * @default 60
 *
 * @param == Command 1 ==
 * @default
 *
 * @param Com. 1 Image
 * @desc The image used for Command 1.
 * Place in /img/SumRndmDde/title/
 * @default NewGame
 *
 * @param Com. 1 X
 * @desc The X position of Command 1.
 * Leave blank for the default position.
 * @default
 *
 * @param Com. 1 Y
 * @desc The Y position of Command 1.
 * Leave blank for the default position.
 * @default
 *
 * @param == Command 2 ==
 * @default
 *
 * @param Com. 2 Image
 * @desc The image used for Command 2.
 * Place in /img/SumRndmDde/title/
 * @default Continue
 *
 * @param Com. 2 X
 * @desc The X position of Command 2.
 * Leave blank for the default position.
 * @default
 *
 * @param Com. 2 Y
 * @desc The Y position of Command 2.
 * Leave blank for the default position.
 * @default
 *
 * @param == Command 3 ==
 * @default
 *
 * @param Com. 3 Image
 * @desc The image used for Command 3.
 * Place in /img/SumRndmDde/title/
 * @default Options
 *
 * @param Com. 3 X
 * @desc The X position of Command 3.
 * Leave blank for the default position.
 * @default
 *
 * @param Com. 3 Y
 * @desc The Y position of Command 3.
 * Leave blank for the default position.
 * @default
 *
 * @param == Command 4 ==
 * @default
 *
 * @param Com. 4 Image
 * @desc The image used for Command 4.
 * Place in /img/SumRndmDde/title/
 * @default Shutdown
 *
 * @param Com. 4 X
 * @desc The X position of Command 4.
 * Leave blank for the default position.
 * @default
 *
 * @param Com. 4 Y
 * @desc The Y position of Command 4.
 * Leave blank for the default position.
 * @default
 *
 * @param == Command 5 ==
 * @default
 *
 * @param Com. 5 Image
 * @desc The image used for Command 5.
 * Place in /img/SumRndmDde/title/
 * @default
 *
 * @param Com. 5 X
 * @desc The X position of Command 5.
 * Leave blank for the default position.
 * @default
 *
 * @param Com. 5 Y
 * @desc The Y position of Command 5.
 * Leave blank for the default position.
 * @default
 *
 * @param == Command 6 ==
 * @default
 *
 * @param Com. 6 Image
 * @desc The image used for Command 6.
 * Place in /img/SumRndmDde/title/
 * @default
 *
 * @param Com. 6 X
 * @desc The X position of Command 6.
 * Leave blank for the default position.
 * @default
 *
 * @param Com. 6 Y
 * @desc The Y position of Command 6.
 * Leave blank for the default position.
 * @default
 *
 * @param == Command 7 ==
 * @default
 *
 * @param Com. 7 Image
 * @desc The image used for Command 7.
 * Place in /img/SumRndmDde/title/
 * @default
 *
 * @param Com. 7 X
 * @desc The X position of Command 7.
 * Leave blank for the default position.
 * @default
 *
 * @param Com. 7 Y
 * @desc The Y position of Command 7.
 * Leave blank for the default position.
 * @default
 *
 * @param == Command 8 ==
 * @default
 *
 * @param Com. 8 Image
 * @desc The image used for Command 8.
 * Place in /img/SumRndmDde/title/
 * @default
 *
 * @param Com. 8 X
 * @desc The X position of Command 8.
 * Leave blank for the default position.
 * @default
 *
 * @param Com. 8 Y
 * @desc The Y position of Command 8.
 * Leave blank for the default position.
 * @default
 *
 * @param == Command 9 ==
 * @default
 *
 * @param Com. 9 Image
 * @desc The image used for Command 9.
 * Place in /img/SumRndmDde/title/
 * @default
 *
 * @param Com. 9 X
 * @desc The X position of Command 9.
 * Leave blank for the default position.
 * @default
 *
 * @param Com. 9 Y
 * @desc The Y position of Command 9.
 * Leave blank for the default position.
 * @default
 *
 * @param == Command 10 ==
 * @default
 *
 * @param Com. 10 Image
 * @desc The image used for Command 10.
 * Place in /img/SumRndmDde/title/
 * @default
 *
 * @param Com. 10 X
 * @desc The X position of Command 10.
 * Leave blank for the default position.
 * @default
 *
 * @param Com. 10 Y
 * @desc The Y position of Command 10.
 * Leave blank for the default position.
 * @default
 *
 * @param == Command 11 ==
 * @default
 *
 * @param Com. 11 Image
 * @desc The image used for Command 11.
 * Place in /img/SumRndmDde/title/
 * @default
 *
 * @param Com. 11 X
 * @desc The X position of Command 11.
 * Leave blank for the default position.
 * @default
 *
 * @param Com. 11 Y
 * @desc The Y position of Command 11.
 * Leave blank for the default position.
 * @default
 *
 * @param == Command 12 ==
 * @default
 *
 * @param Com. 12 Image
 * @desc The image used for Command 12.
 * Place in /img/SumRndmDde/title/
 * @default
 *
 * @param Com. 12 X
 * @desc The X position of Command 12.
 * Leave blank for the default position.
 * @default
 *
 * @param Com. 12 Y
 * @desc The Y position of Command 12.
 * Leave blank for the default position.
 * @default
 *
 * @param == Command 13 ==
 * @default
 *
 * @param Com. 13 Image
 * @desc The image used for Command 13.
 * Place in /img/SumRndmDde/title/
 * @default
 *
 * @param Com. 13 X
 * @desc The X position of Command 13.
 * Leave blank for the default position.
 * @default
 *
 * @param Com. 13 Y
 * @desc The Y position of Command 13.
 * Leave blank for the default position.
 * @default
 *
 * @param == Command 14 ==
 * @default
 *
 * @param Com. 14 Image
 * @desc The image used for Command 14.
 * Place in /img/SumRndmDde/title/
 * @default
 *
 * @param Com. 14 X
 * @desc The X position of Command 14.
 * Leave blank for the default position.
 * @default
 *
 * @param Com. 14 Y
 * @desc The Y position of Command 14.
 * Leave blank for the default position.
 * @default
 *
 * @param == Command 15 ==
 * @default
 *
 * @param Com. 15 Image
 * @desc The image used for Command 15.
 * Place in /img/SumRndmDde/title/
 * @default
 *
 * @param Com. 15 X
 * @desc The X position of Command 15.
 * Leave blank for the default position.
 * @default
 *
 * @param Com. 15 Y
 * @desc The Y position of Command 15.
 * Leave blank for the default position.
 * @default
 *
 * @param == Command 16 ==
 * @default
 *
 * @param Com. 16 Image
 * @desc The image used for Command 16.
 * Place in /img/SumRndmDde/title/
 * @default
 *
 * @param Com. 16 X
 * @desc The X position of Command 16.
 * Leave blank for the default position.
 * @default
 *
 * @param Com. 16 Y
 * @desc The Y position of Command 16.
 * Leave blank for the default position.
 * @default
 *
 * @param == Command 17 ==
 * @default
 *
 * @param Com. 17 Image
 * @desc The image used for Command 17.
 * Place in /img/SumRndmDde/title/
 * @default
 *
 * @param Com. 17 X
 * @desc The X position of Command 17.
 * Leave blank for the default position.
 * @default
 *
 * @param Com. 17 Y
 * @desc The Y position of Command 17.
 * Leave blank for the default position.
 * @default
 *
 * @param == Command 18 ==
 * @default
 *
 * @param Com. 18 Image
 * @desc The image used for Command 18.
 * Place in /img/SumRndmDde/title/
 * @default
 *
 * @param Com. 18 X
 * @desc The X position of Command 18.
 * Leave blank for the default position.
 * @default
 *
 * @param Com. 18 Y
 * @desc The Y position of Command 18.
 * Leave blank for the default position.
 * @default
 *
 * @param == Command 19 ==
 * @default
 *
 * @param Com. 19 Image
 * @desc The image used for Command 19.
 * Place in /img/SumRndmDde/title/
 * @default
 *
 * @param Com. 19 X
 * @desc The X position of Command 19.
 * Leave blank for the default position.
 * @default
 *
 * @param Com. 19 Y
 * @desc The Y position of Command 19.
 * Leave blank for the default position.
 * @default
 *
 * @param == Command 20 ==
 * @default
 *
 * @param Com. 20 Image
 * @desc The image used for Command 20.
 * Place in /img/SumRndmDde/title/
 * @default
 *
 * @param Com. 20 X
 * @desc The X position of Command 20.
 * Leave blank for the default position.
 * @default
 *
 * @param Com. 20 Y
 * @desc The Y position of Command 20.
 * Leave blank for the default position.
 * @default
 *
 * @param == Command 21 ==
 * @default
 *
 * @param Com. 21 Image
 * @desc The image used for Command 21.
 * Place in /img/SumRndmDde/title/
 * @default
 *
 * @param Com. 21 X
 * @desc The X position of Command 21.
 * Leave blank for the default position.
 * @default
 *
 * @param Com. 21 Y
 * @desc The Y position of Command 21.
 * Leave blank for the default position.
 * @default
 *
 * @param == Command 22 ==
 * @default
 *
 * @param Com. 22 Image
 * @desc The image used for Command 22.
 * Place in /img/SumRndmDde/title/
 * @default
 *
 * @param Com. 22 X
 * @desc The X position of Command 22.
 * Leave blank for the default position.
 * @default
 *
 * @param Com. 22 Y
 * @desc The Y position of Command 22.
 * Leave blank for the default position.
 * @default
 *
 * @param == Command 23 ==
 * @default
 *
 * @param Com. 23 Image
 * @desc The image used for Command 23.
 * Place in /img/SumRndmDde/title/
 * @default
 *
 * @param Com. 23 X
 * @desc The X position of Command 23.
 * Leave blank for the default position.
 * @default
 *
 * @param Com. 23 Y
 * @desc The Y position of Command 23.
 * Leave blank for the default position.
 * @default
 *
 * @param == Command 24 ==
 * @default
 *
 * @param Com. 24 Image
 * @desc The image used for Command 24.
 * Place in /img/SumRndmDde/title/
 * @default
 *
 * @param Com. 24 X
 * @desc The X position of Command 24.
 * Leave blank for the default position.
 * @default
 *
 * @param Com. 24 Y
 * @desc The Y position of Command 24.
 * Leave blank for the default position.
 * @default
 *
 * @param == Command 25 ==
 * @default
 *
 * @param Com. 25 Image
 * @desc The image used for Command 25.
 * Place in /img/SumRndmDde/title/
 * @default
 *
 * @param Com. 25 X
 * @desc The X position of Command 25.
 * Leave blank for the default position.
 * @default
 *
 * @param Com. 25 Y
 * @desc The Y position of Command 25.
 * Leave blank for the default position.
 * @default
 *
 * @param == Command 26 ==
 * @default
 *
 * @param Com. 26 Image
 * @desc The image used for Command 26.
 * Place in /img/SumRndmDde/title/
 * @default
 *
 * @param Com. 26 X
 * @desc The X position of Command 26.
 * Leave blank for the default position.
 * @default
 *
 * @param Com. 26 Y
 * @desc The Y position of Command 26.
 * Leave blank for the default position.
 * @default
 *
 * @param == Command 27 ==
 * @default
 *
 * @param Com. 27 Image
 * @desc The image used for Command 27.
 * Place in /img/SumRndmDde/title/
 * @default
 *
 * @param Com. 27 X
 * @desc The X position of Command 27.
 * Leave blank for the default position.
 * @default
 *
 * @param Com. 27 Y
 * @desc The Y position of Command 27.
 * Leave blank for the default position.
 * @default
 *
 * @param == Command 28 ==
 * @default
 *
 * @param Com. 28 Image
 * @desc The image used for Command 28.
 * Place in /img/SumRndmDde/title/
 * @default
 *
 * @param Com. 28 X
 * @desc The X position of Command 28.
 * Leave blank for the default position.
 * @default
 *
 * @param Com. 28 Y
 * @desc The Y position of Command 28.
 * Leave blank for the default position.
 * @default
 *
 * @param == Command 29 ==
 * @default
 *
 * @param Com. 29 Image
 * @desc The image used for Command 29.
 * Place in /img/SumRndmDde/title/
 * @default
 *
 * @param Com. 29 X
 * @desc The X position of Command 29.
 * Leave blank for the default position.
 * @default
 *
 * @param Com. 29 Y
 * @desc The Y position of Command 29.
 * Leave blank for the default position.
 * @default
 *
 * @param == Command 30 ==
 * @default
 *
 * @param Com. 30 Image
 * @desc The image used for Command 30.
 * Place in /img/SumRndmDde/title/
 * @default
 *
 * @param Com. 30 X
 * @desc The X position of Command 30.
 * Leave blank for the default position.
 * @default
 *
 * @param Com. 30 Y
 * @desc The Y position of Command 30.
 * Leave blank for the default position.
 * @default
 *
 * @help
 *
 * Title Picture Choices
 * Version 1.01
 * SumRndmDde
 *
 *
 * This Plugin requires the Title Command Customizer (SRD_TitleCommandCustomizer)
 * http://sumrndm.site/title-command-customizer/
 *
 * This plugin gives developers the capability to add animated pictures as 
 * choice commands for the title command window.
 *
 *
 * ==============================================================================
 *  How to Set Images
 * ==============================================================================
 *
 * If you wish to set an command to use a certain picture, first place the 
 * picture within /img/SumRndmDde/title/. Next go to the "Command X" within
 * SRD_TitlePictureChoices that corresponds to the "Command X" from
 * SRD_TitleCommandCustomizer. Finally, input the file's name within the 
 * parameter.
 *
 * If you wish to set a specific X or Y coordinate for the picture choice, 
 * input it in the corresponding "Com. [ ] X" and "Com. [ ] Y" parameters.
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
SRD.TitlePictureChoices = SRD.TitlePictureChoices || {};

var Imported = Imported || {};
Imported["SumRndmDde Title Picture Choices"] = 1.01;

function Sprite_TitlePictureChoice() {
	this.initialize.apply(this, arguments);
}

(function(_, __) {

"use strict";

//-----------------------------------------------------------------------------
// SRD.TitlePictureChoices
//-----------------------------------------------------------------------------

const params = PluginManager.parameters('SRD_TitlePictureChoices');

_.meetsRequirements = !!Imported["SumRndmDde Title Command Customizer"];

_.comImages = {};
_.comPositions = {};

_.highlight = String(params['Highlight Frame']).trim().toLowerCase() === 'true';
_.opacity = parseInt(params['Disable Opacity']);
_.duration = parseInt(params['Animation Duration']);
_.scale = parseFloat(params['Scale Animation']);
_.xGoal = parseInt(params['X Animation']);
_.yGoal = parseInt(params['Y Animation']);
_.lineHeight = parseInt(params['Line Height']);

_.min = 1;
_.max = 1 + _.scale;
_.speed = (_.max - _.min) / _.duration;
_.xSpd = (_.xGoal) / _.duration;
_.ySpd = (_.yGoal) / _.duration;
_.confirm = 0.05;
_.close = 0.1;

_.loadImage = function(filename, hue) {
	return ImageManager.loadBitmap('img/SumRndmDde/title/', filename, hue, true);
};

_.setup = function() {
	const tempImages = []
	const tempPositions = [];
	for(let i = 1; i <= 30; i++) {
		const img = String(params['Com. ' + i + ' Image']);
		const x   = String(params['Com. ' + i + ' X']);
		const y   = String(params['Com. ' + i + ' Y']);
		if(img.trim().length > 0) {
			tempImages.push(img);
			if(x.trim().length > 0 && y.trim().length > 0) {
				tempPositions.push([parseInt(x), parseInt(y)]);
			} else {
				tempPositions.push(null);
			}
		}
	}

	for(let i = 0; i < __.commands.length; i++) {
		_.comImages[__.commands[i].symbol] = tempImages[i];
		if(tempPositions[i]) {
			_.comPositions[__.commands[i].symbol] = tempPositions[i];
		}
	}
};

_.alertNeedTitleCommandCustomizer = function() {
	alert("The 'SRD_TitleCommandCustomizer' plugin is required for using the 'SRD_TitlePictureChoices' plugin.");
	if(confirm("Do you want to open the download page to 'SRD_TitleCommandCustomizer'?")) {
		window.open('http://sumrndm.site/title-command-customizer/');
	}
};

_.setup();

if(!_.meetsRequirements) {
	_.alertNeedTitleCommandCustomizer();
}

//-----------------------------------------------------------------------------
// Window_TitleCommand
//-----------------------------------------------------------------------------

Window_TitleCommand.prototype._refreshAllParts = function() {};
Window_TitleCommand.prototype._refreshCursor = function() {};

_.Window_TitleCommand_initialize = Window_TitleCommand.prototype.initialize;
Window_TitleCommand.prototype.initialize = function(messageWindow) {
	this._spriteChoices = [];
	_.Window_TitleCommand_initialize.apply(this, arguments);
};

_.Window_TitleCommand_start = Window_TitleCommand.prototype.start;
Window_TitleCommand.prototype.start = function() {
	this._spriteChoices.forEach(function(sprite) {
		if(sprite) {
			this.removeChild(sprite);
		}
	}, this);
	_.Window_TitleCommand_start.apply(this, arguments);
};

Window_TitleCommand.prototype.lineHeight = function() {
	return _.lineHeight;
};

Window_TitleCommand.prototype.drawItem = function(index) {
	const name = this.commandName(index);
	const rect = this.itemRectForText(index);
	const symbol = this.commandSymbol(index);
    const enabled = this.isCommandEnabled(index);
	const image = _.comImages[symbol];
	const position = _.comPositions[symbol];
    if(this._spriteChoices[index]) this.removeChild(this._spriteChoices[index]);
    let sprite;
	if(image) {
		const bit = _.loadImage(image);
		sprite = new Sprite_TitlePictureChoice(bit);
		if(position) {
			sprite.mainX = position[0] - eval(__.x);
			sprite.mainY = position[1] - eval(__.y);
		} else {
			sprite.mainX = rect.x + (rect.width/2);
			sprite.mainY = rect.y + (rect.height/2);
		}
	} else {
		const width = this.textWidthEx(name);
		const bit = new Bitmap(width, this.contents.fontSize + 4);
		const tempCont = this.contents;
		this.contents = bit;
		if(__.textCodes) {
			this.drawTextEx(this.commandName(index), 0, 0);
		} else {
			this.drawText(this.commandName(index), 0, 0, bit.width, 'center');
		}
		this.contents = tempCont;
		sprite = new Sprite_TitlePictureChoice(bit);
		sprite.mainX = rect.x + (rect.width/2);
		sprite.mainY = rect.y + (rect.height/2);
	}
    if(!enabled) sprite._realOpa = (_.opacity / 255);
    else sprite._realOpa = 1;
    this._spriteChoices[index] = sprite;
    this.addChild(sprite);
};

Window_TitleCommand.prototype.itemTextAlign = function() {
	return 'center';
};

_.Window_TitleCommand_update = Window_TitleCommand.prototype.update;
Window_TitleCommand.prototype.update = function() {
	_.Window_TitleCommand_update.apply(this, arguments);
	var length = this._spriteChoices.length;
	for(var i = 0; i < length; i++) {
        const sprite = this._spriteChoices[i];
		if(sprite) {
			sprite.opacity = this.openness * (sprite._realOpa);
			if(this.index() === i) {
				sprite.updateIncrease();
			} else {
				sprite.updateDecrease();
			}
		}
	}
};
_.opacity
_.Window_TitleCommand_close = Window_TitleCommand.prototype.close;
Window_TitleCommand.prototype.close = function() {
	for(var i = 0; i < this._spriteChoices.length; i++) {
		if(this._spriteChoices[i]) {
			if(i === this.index()) {
				this._spriteChoices[i].startConfirm();
			} else {
				this._spriteChoices[i].startDecline();
			}
		}
	}
	_.Window_TitleCommand_close.apply(this, arguments);
};

//-----------------------------------------------------------------------------
// Sprite_TitlePictureChoice
//-----------------------------------------------------------------------------

Sprite_TitlePictureChoice.prototype = Object.create(Sprite.prototype);
Sprite_TitlePictureChoice.prototype.constructor = Sprite_TitlePictureChoice;

Sprite_TitlePictureChoice.prototype.initialize = function() {
	Sprite.prototype.initialize.apply(this, arguments);
	this.anchor.x = 0.5;
	this.anchor.y = 0.5;
	this.mainX = 0;
	this.mainY = 0;
	this.offsetX = 0;
	this.offsetY = 0;
	this._duration = _.duration;
	this._breath = 1;
	this._direction = 0;
	this._frameMode = false;
	this._ready = false;
	this.bitmap.addLoadListener(function() {
		if(_.highlight) {
			this.setFrame(0, 0, this.bitmap.width / 2, this.bitmap.height);
			this._ready = true;
		}
	}.bind(this));
};

Sprite_TitlePictureChoice.prototype.update = function() {
	Sprite.prototype.update.apply(this, arguments);
	this.updatePosition();
	this.updateFinish();
};

Sprite_TitlePictureChoice.prototype.updatePosition = function() {
	this.x = this.mainX + this.offsetX;
	this.y = this.mainY + this.offsetY;
};

Sprite_TitlePictureChoice.prototype.startConfirm = function() {
	this._direction = 1;
};

Sprite_TitlePictureChoice.prototype.startDecline = function() {
	this._direction = 2;
};

Sprite_TitlePictureChoice.prototype.updateIncrease = function() {
	if(this._ready) {
		this.updateFrame(true);
	}
	if(this._breath < this._duration) {
		this._breath++;
		this.updateAnimation();
	}
};

Sprite_TitlePictureChoice.prototype.updateDecrease = function() {
	if(this._ready) {
		this.updateFrame(false);
	}
	if(this._breath > 0) {
		this._breath--;
		this.updateAnimation();
	}
};

Sprite_TitlePictureChoice.prototype.updateAnimation = function() {
	this.scale.x = 1 + ((this._breath / this._duration) * _.scale);
	this.scale.y = 1 + ((this._breath / this._duration) * _.scale);
	this.offsetX = ((this._breath / this._duration) * _.xGoal);
	this.offsetY = ((this._breath / this._duration) * _.yGoal);
};

Sprite_TitlePictureChoice.prototype.updateFrame = function(on) {
	if(this._frameMode !== on) {
		this._frameMode = on;
		if(this._frameMode) {
			this.setFrame(this.bitmap.width / 2, 0, this.bitmap.width / 2, this.bitmap.height);
		} else {
			this.setFrame(0, 0, this.bitmap.width / 2, this.bitmap.height);
		}
	}
};

Sprite_TitlePictureChoice.prototype.updateFinish = function(on) {
	if(this._direction) {
		if(this._direction === 1) {
			this.opacity -= (_.close * 100);
			this.scale.x += _.close;
			this.scale.y += _.close;
			if(this.opacity <= 0) {
				this._direction = 0;
				this.parent.removeChild(this);
			}
		} else if(this._direction === 2) {
			this.scale.x -= _.confirm;
			this.scale.y -= _.confirm;
			if(this._breath <= 0) {
				this._direction = 0;
				this.parent.removeChild(this);
			}
		}
	}
};

})(SRD.TitlePictureChoices, SRD.TitleCommandCustomizer);