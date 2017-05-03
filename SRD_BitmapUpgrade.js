/*:
 * @plugindesc Adds various Bitmap functions to allow color transformations to characters, battlers, and weapons.
 * @author SumRndmDde
 *
 * @param Default Font
 * @desc The default font face that Bitmaps initialize with.
 * @default GameFont
 *
 * @param Default Font Size
 * @desc The default font size that Bitmaps initialize with.
 * @default 28
 *
 * @param Default Font Italic
 * @desc The default font italic that Bitmaps initialize with.
 * @default false
 *
 * @param Default Text Color
 * @desc The default text color that Bitmaps initialize with.
 * @default #FFFFFF
 *
 * @param Default Outline Color
 * @desc The default outline color that Bitmaps initialize with.
 * @default rgba(0, 0, 0, 0.5)
 *
 * @param Default Outline Width
 * @desc The default outline width that Bitmaps initialize with.
 * @default 4
 *
 * @help
 *
 * Bitmap Upgrade
 * Version 1.01
 * SumRndmDde
 *
 *
 * This plugin adds various Bitmap functions to allow color transformations to 
 * characters, battlers, and weapons.
 *
 *
 * ==============================================================================
 *  Battler Notetags
 * ==============================================================================
 *
 * The following notetags can be used within the noteboxes of Enemies to shift
 * their tone, saturation, and/or lightness within battle.
 *
 *
 *   <Battler Tone: [red], [green], [blue]>
 *
 * Sets the tone shift for the Enemy in battle.
 *
 *
 *   <Battler Saturation: [shift]>
 *
 * Sets the saturation shift for the Enemy in battle.
 *
 *
 *   <Battler Lightness: [shift]>
 *
 * Sets the lightness shift for the Enemy in battle.
 *
 *
 * ==============================================================================
 *  Weapon Notetags
 * ==============================================================================
 *
 * Weapons can also have their tone, hue, saturation, and lightness manipulated 
 * through the following notetags:
 *
 *
 *   <Weapon Tone: [red], [green], [blue]>
 *   <Weapon Hue: [shift]>
 *   <Weapon Saturation: [shift]>
 *   <Weapon Lightness: [shift]>
 *
 * These will shift the tone, hue, saturation, or lightness of the weapon's 
 * bitmap respectively.
 *
 *
 * ==============================================================================
 *  Event Notetags
 * ==============================================================================
 *
 * Events can also have their tone, hue, saturation, and lightness manipulated 
 * through the following notetags:
 *
 *
 *   <Tone: [red], [green], [blue]>
 *   <Hue: [shift]>
 *   <Saturation: [shift]>
 *   <Lightness: [shift]>
 *
 * These will shift the tone, hue, saturation, or lightness of the event's bitmap
 * respectively.
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
SRD.BitmapUpgrade = SRD.BitmapUpgrade || {};

var Imported = Imported || {};
Imported["SumRndmDde Bitmap Upgrade"] = 1.01;

(function(_) {

"use strict";

//-----------------------------------------------------------------------------
// SRD.BitmapUpgrade
//-----------------------------------------------------------------------------

const params = PluginManager.parameters('SRD_BitmapUpgrade');

_.fontFace = String(params['Default Font']);
_.fontSize = parseInt(params['Default Font Size']);
_.fontItalic = String(params['Default Font Italic']).trim().toLowerCase() === 'true';
_.textColor = String(params['Default Text Color']);
_.outlineColor = String(params['Default Outline Color']);
_.outlineWidth = parseInt(params['Default Outline Width']);

_.loadNotetagsBattlers = function(data) {
	const rgb = /<\s*Battler\s*Tone\s*:\s*(.*)\s*,\s*(.*)\s*,\s*(.*)\s*>/im;
	const hue = /<\s*Battler\s*Hue\s*:\s*(.*)\s*>/im;
	const sat = /<\s*Battler\s*Saturation\s*:\s*(.*)\s*>/im;
	const lig = /<\s*Battler\s*Lightness\s*:\s*(.*)\s*>/im;
	for(let i = 1; i < data.length; i++) {
		const battler = data[i];
		if(battler) {
			if(battler.note.match(rgb)) {
				battler._bu_rgb = [];
				battler._bu_rgb[0] = parseInt(RegExp.$1);
				battler._bu_rgb[1] = parseInt(RegExp.$2);
				battler._bu_rgb[2] = parseInt(RegExp.$3);
			}
			if(battler.note.match(hue)) {
				battler._bu_hue = parseInt(RegExp.$1);
			}
			if(battler.note.match(sat)) {
				battler._bu_sat = parseInt(RegExp.$1);
			}
			if(battler.note.match(lig)) {
				battler._bu_lig = parseInt(RegExp.$1);
			}
		}
	}
};

_.loadNotetagsWeapons = function(data) {
	const rgb = /<\s*Weapon\s*Tone\s*:\s*(.*)\s*,\s*(.*)\s*,\s*(.*)\s*>/im;
	const hue = /<\s*Weapon\s*Hue\s*:\s*(.*)\s*>/im;
	const sat = /<\s*Weapon\s*Saturation\s*:\s*(.*)\s*>/im;
	const lig = /<\s*Weapon\s*Lightness\s*:\s*(.*)\s*>/im;
	for(let i = 1; i < data.length; i++) {
		const weapon = data[i];
		if(weapon) {
			if(weapon.note.match(rgb)) {
				weapon._bu_rgb = [];
				weapon._bu_rgb[0] = parseInt(RegExp.$1);
				weapon._bu_rgb[1] = parseInt(RegExp.$2);
				weapon._bu_rgb[2] = parseInt(RegExp.$3);
			}
			if(weapon.note.match(hue)) {
				weapon._bu_hue = parseInt(RegExp.$1);
			}
			if(weapon.note.match(sat)) {
				weapon._bu_sat = parseInt(RegExp.$1);
			}
			if(weapon.note.match(lig)) {
				weapon._bu_lig = parseInt(RegExp.$1);
			}
		}
	}
};

//-----------------------------------------------------------------------------
// Bitmap
//-----------------------------------------------------------------------------

const _Bitmap_initialize = Bitmap.prototype.initialize;
Bitmap.prototype.initialize = function(width, height) {
	_Bitmap_initialize.apply(this, arguments);
	this.fontFace = _.fontFace;
	this.fontSize = _.fontSize;
	this.fontItalic = _.fontItalic;
	this.textColor = _.textColor;
	this.outlineColor = _.outlineColor;
	this.outlineWidth = _.outlineWidth;
};

const _Bitmap__onLoad = Bitmap.prototype._onLoad;
Bitmap.prototype._onLoad = function() {
	_Bitmap__onLoad.apply(this, arguments);
	this.updateOriginalPixels();
};

Bitmap.prototype.hasOriginalPixels = function() {
	return !!this._originalPixels;
};

Bitmap.prototype.updateOriginalPixels = function() {
	if(this.width > 0 && this.height > 0) {
		this._originalPixels = this._context.getImageData(0, 0, this.width, this.height).data;
	}
};

Bitmap.prototype.forceTone = function(r, g, b) {
	if(this._originalPixels && this.width > 0 && this.height > 0) {
		const originalPixels = this._originalPixels;
		const context = this._context;
		const imageData = context.getImageData(0, 0, this.width, this.height);
		const pixels = imageData.data;
		for (let i = 0; i < pixels.length; i += 4) {
			pixels[i + 0] = originalPixels[i + 0] + r;
			pixels[i + 1] = originalPixels[i + 1] + g;
			pixels[i + 2] = originalPixels[i + 2] + b;
		}
		context.putImageData(imageData, 0, 0);
		this._setDirty();
	}
};

Bitmap.prototype.forceToneWShape = function(r, g, b, x, y, w, h) {
	if(this._originalPixels && this.width > 0 && this.height > 0) {
		const originalPixels = this._originalPixels;
		const context = this._context;
		const imageData = context.getImageData(x, y, w, h);
		const pixels = imageData.data;
		for (let i = 0; i < pixels.length; i += 4) {
			pixels[i + 0] = originalPixels[i + 0] + r;
			pixels[i + 1] = originalPixels[i + 1] + g;
			pixels[i + 2] = originalPixels[i + 2] + b;
		}
		context.putImageData(imageData, 0, 0);
		this._setDirty();
	}
};

//-----------------------------------------------------------------------------
// Code based off of functions from:
// http://stackoverflow.com/questions/2353211/hsl-to-rgb-color-conversion

Bitmap.prototype.rgbToHsl = function(r, g, b) {
	r /= 255, g /= 255, b /= 255;
	const max = Math.max(r, g, b), min = Math.min(r, g, b);
	let h, s, l = (max + min) / 2;

	if(max == min){
		h = s = 0; // achromatic
	}else{
		var d = max - min;
		s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
		switch(max){
			case r: h = (g - b) / d + (g < b ? 6 : 0); break;
			case g: h = (b - r) / d + 2; break;
			case b: h = (r - g) / d + 4; break;
		}
		h /= 6;
	}

	return [h * 360, s * 100, l * 100];
};

Bitmap.prototype.hslToRgb = function(h, s, l) {
	h /= 360, s /= 100, l /= 100;
	let r, g, b;

	if(s == 0) {
		r = g = b = l; // achromatic
	} else {
		const q = l < 0.5 ? l * (1 + s) : l + s - l * s;
		const p = 2 * l - q;
		r = this._hue2rgb(p, q, h + 1/3);
		g = this._hue2rgb(p, q, h);
		b = this._hue2rgb(p, q, h - 1/3);
	}

	return [Math.round(r * 255), Math.round(g * 255), Math.round(b * 255)];
};

Bitmap.prototype._hue2rgb = function(p, q, t) {
	if(t < 0) t += 1;
	if(t > 1) t -= 1;
	if(t < 1/6) return p + (q - p) * 6 * t;
	if(t < 1/2) return q;
	if(t < 2/3) return p + (q - p) * (2/3 - t) * 6;
	return p;
};

// End of credit
//-----------------------------------------------------------------------------

Bitmap.prototype.rotateHue = function(offset) {
	if(offset && this.width > 0 && this.height > 0) {
		offset = ((offset % 360) + 360) % 360;
		const context = this._context;
		const imageData = context.getImageData(0, 0, this.width, this.height);
		const pixels = imageData.data;
		for (let i = 0; i < pixels.length; i += 4) {
			const hsl = this.rgbToHsl(pixels[i + 0], pixels[i + 1], pixels[i + 2]);
			const h = (hsl[0] + offset) % 360;
			const s = hsl[1];
			const l = hsl[2];
			const rgb = this.hslToRgb(h, s, l);
			pixels[i + 0] = rgb[0];
			pixels[i + 1] = rgb[1];
			pixels[i + 2] = rgb[2];
		}
		context.putImageData(imageData, 0, 0);
		this._setDirty();
	}
};

Bitmap.prototype.rotateHueWShape = function(offset, x, y, w, h) {
	if(offset && w > 0 && h > 0) {
		offset = ((offset % 360) + 360) % 360;
		const context = this._context;
		const imageData = context.getImageData(x, y, w, h);
		const pixels = imageData.data;
		for (let i = 0; i < pixels.length; i += 4) {
			const hsl = this.rgbToHsl(pixels[i + 0], pixels[i + 1], pixels[i + 2]);
			const h = (hsl[0] + offset) % 360;
			const s = hsl[1];
			const l = hsl[2];
			const rgb = this.hslToRgb(h, s, l);
			pixels[i + 0] = rgb[0];
			pixels[i + 1] = rgb[1];
			pixels[i + 2] = rgb[2];
		}
		context.putImageData(imageData, 0, 0);
		this._setDirty();
	}
};

Bitmap.prototype.shiftHsl = function(nh, ns, nl) {
	if(this.width > 0 && this.height > 0) {
		const context = this._context;
		const imageData = context.getImageData(0, 0, this.width, this.height);
		const pixels = imageData.data;
		for (let i = 0; i < pixels.length; i += 4) {
			const hsl = this.rgbToHsl(pixels[i + 0], pixels[i + 1], pixels[i + 2]);
			const h = (hsl[0] + nh) % 360;
			const s = (hsl[1] + ns).clamp(0, 100);
			const l = (hsl[2] + nl).clamp(0, 100);
			const rgb = this.hslToRgb(h, s, l);
			pixels[i + 0] = rgb[0];
			pixels[i + 1] = rgb[1];
			pixels[i + 2] = rgb[2];
		}
		context.putImageData(imageData, 0, 0);
		this._setDirty();
	}
};

Bitmap.prototype.shiftHslWShape = function(nh, ns, nl, x, y, w, h) {
	if(w > 0 && h > 0) {
		const context = this._context;
		const imageData = context.getImageData(x, y, w, h);
		const pixels = imageData.data;
		for (let i = 0; i < pixels.length; i += 4) {
			const hsl = this.rgbToHsl(pixels[i + 0], pixels[i + 1], pixels[i + 2]);
			const h = (hsl[0] + nh) % 360;
			const s = (hsl[1] + ns).clamp(0, 100);
			const l = (hsl[2] + nl).clamp(0, 100);
			const rgb = this.hslToRgb(h, s, l);
			pixels[i + 0] = rgb[0];
			pixels[i + 1] = rgb[1];
			pixels[i + 2] = rgb[2];
		}
		context.putImageData(imageData, 0, 0);
		this._setDirty();
	}
};

Bitmap.prototype.forceHsl = function(nh, ns, nl) {
	if(this._originalPixels && this.width > 0 && this.height > 0) {
		const originalPixels = this._originalPixels;
		const context = this._context;
		const imageData = context.getImageData(0, 0, this.width, this.height);
		const pixels = imageData.data;
		for (let i = 0; i < pixels.length; i += 4) {
			const hsl = this.rgbToHsl(originalPixels[i + 0], originalPixels[i + 1], originalPixels[i + 2]);
			const h = (hsl[0] + nh) % 360;
			const s = (hsl[1] + ns).clamp(0, 100);
			const l = (hsl[2] + nl).clamp(0, 100);
			const rgb = this.hslToRgb(h, s, l);
			pixels[i + 0] = rgb[0];
			pixels[i + 1] = rgb[1];
			pixels[i + 2] = rgb[2];
		}
		context.putImageData(imageData, 0, 0);
		this._setDirty();
	}
};

Bitmap.prototype.forceHslWShape = function(nh, ns, nl, x, y, w, h) {
	if(this._originalPixels && w > 0 && h > 0) {
		const originalPixels = this._originalPixels;
		const context = this._context;
		const imageData = context.getImageData(x, y, w, h);
		const pixels = imageData.data;
		for (let i = 0; i < pixels.length; i += 4) {
			const hsl = this.rgbToHsl(originalPixels[i + 0], originalPixels[i + 1], originalPixels[i + 2]);
			const h = (hsl[0] + nh) % 360;
			const s = (hsl[1] + ns).clamp(0, 100);
			const l = (hsl[2] + nl).clamp(0, 100);
			const rgb = this.hslToRgb(h, s, l);
			pixels[i + 0] = rgb[0];
			pixels[i + 1] = rgb[1];
			pixels[i + 2] = rgb[2];
		}
		context.putImageData(imageData, 0, 0);
		this._setDirty();
	}
};

//-----------------------------------------------------------------------------
// DataManager
//-----------------------------------------------------------------------------

const _DataManager_isDatabaseLoaded = DataManager.isDatabaseLoaded;
let notetagsLoaded = false;
DataManager.isDatabaseLoaded = function() {
	if(!_DataManager_isDatabaseLoaded.apply(this, arguments)) return false;
	if(!notetagsLoaded) {
		_.loadNotetagsBattlers($dataEnemies);
		_.loadNotetagsWeapons($dataWeapons);
		notetagsLoaded = true;
	}
	return true;
};

//-----------------------------------------------------------------------------
// ImageManager
//-----------------------------------------------------------------------------

ImageManager.loadAnimationUpgrade = function(filename, rgb, hsl) {
	return this.loadBitmapUpgrade('img/animations/', filename, rgb, hsl, true);
};

ImageManager.loadBattleback1Upgrade = function(filename, rgb, hsl) {
	return this.loadBitmapUpgrade('img/battlebacks1/', filename, rgb, hsl, true);
};

ImageManager.loadBattleback2Upgrade = function(filename, rgb, hsl) {
	return this.loadBitmapUpgrade('img/battlebacks2/', filename, rgb, hsl, true);
};

ImageManager.loadEnemyUpgrade = function(filename, rgb, hsl) {
	return this.loadBitmapUpgrade('img/enemies/', filename, rgb, hsl, true);
};

ImageManager.loadCharacterUpgrade = function(filename, rgb, hsl) {
	return this.loadBitmapUpgrade('img/characters/', filename, rgb, hsl, false);
};

ImageManager.loadFaceUpgrade = function(filename, rgb, hsl) {
	return this.loadBitmapUpgrade('img/faces/', filename, rgb, hsl, true);
};

ImageManager.loadParallaxUpgrade = function(filename, rgb, hsl) {
	return this.loadBitmapUpgrade('img/parallaxes/', filename, rgb, hsl, true);
};

ImageManager.loadPictureUpgrade = function(filename, rgb, hsl) {
	return this.loadBitmapUpgrade('img/pictures/', filename, rgb, hsl, true);
};

ImageManager.loadSvActorUpgrade = function(filename, rgb, hsl) {
	return this.loadBitmapUpgrade('img/sv_actors/', filename, rgb, hsl, false);
};

ImageManager.loadSvEnemyUpgrade = function(filename, rgb, hsl) {
	return this.loadBitmapUpgrade('img/sv_enemies/', filename, rgb, hsl, true);
};

ImageManager.loadSystemUpgrade = function(filename, rgb, hsl) {
	return this.loadBitmapUpgrade('img/system/', filename, rgb, hsl, false);
};

ImageManager.loadTilesetUpgrade = function(filename, rgb, hsl) {
	return this.loadBitmapUpgrade('img/tilesets/', filename, rgb, hsl, false);
};

ImageManager.loadTitle1Upgrade = function(filename, rgb, hsl) {
	return this.loadBitmapUpgrade('img/titles1/', filename, rgb, hsl, true);
};

ImageManager.loadTitle2Upgrade = function(filename, rgb, hsl) {
	return this.loadBitmapUpgrade('img/titles2/', filename, rgb, hsl, true);
};

ImageManager.loadBitmapUpgrade = function(folder, filename, rgb, hsl, smooth) {
	if (filename) {
		var path = folder + encodeURIComponent(filename) + '.png';
		var bitmap = this.loadNormalBitmapUpgrade(path, rgb, hsl);
		bitmap.smooth = smooth;
		return bitmap;
	} else {
		return this.loadEmptyBitmap();
	}
};

ImageManager.loadNormalBitmapUpgrade = function(path, rgb, hsl) {
	var key = path + ': r' + rgb[0] + ': g' + rgb[1] + ': b' + rgb[2] + ': h' + hsl[0] + ': s' + hsl[1] + ': l' + hsl[2];
	var bitmap = this.cache.getItem(key);
	if (!bitmap) {
		bitmap = Bitmap.load(path);
		bitmap.addLoadListener(function() {
			bitmap.adjustTone(rgb[0], rgb[1], rgb[2]);
			bitmap.shiftHsl(hsl[0], hsl[1], hsl[2]);
		});
		this.cache.setItem(key, bitmap);
	}
	return bitmap;
};

//-----------------------------------------------------------------------------
// Scene_Boot
//-----------------------------------------------------------------------------

if(Utils.RPGMAKER_VERSION >= '1.3.0') {

const _Scene_Boot_loadSystemImages = Scene_Boot.loadSystemImages;
Scene_Boot.loadSystemImages = function() {
	_Scene_Boot_loadSystemImages.apply(this, arguments);
	ImageManager.loadSystemUpgrade('Weapons1', [0, 0, 0], [0, 0, 0]);
	ImageManager.loadSystemUpgrade('Weapons2', [0, 0, 0], [0, 0, 0]);
	ImageManager.loadSystemUpgrade('Weapons3', [0, 0, 0], [0, 0, 0]);
};

} else {

const _Scene_Boot_loadSystemImages = Scene_Boot.prototype.loadSystemImages;
Scene_Boot.prototype.loadSystemImages = function() {
	_Scene_Boot_loadSystemImages.apply(this, arguments);
	ImageManager.loadSystemUpgrade('Weapons1', [0, 0, 0], [0, 0, 0]);
	ImageManager.loadSystemUpgrade('Weapons2', [0, 0, 0], [0, 0, 0]);
	ImageManager.loadSystemUpgrade('Weapons3', [0, 0, 0], [0, 0, 0]);
};

}

//-----------------------------------------------------------------------------
// Game_Enemy
//-----------------------------------------------------------------------------

const _Game_Enemy_initialize = Game_Enemy.prototype.initialize;
Game_Enemy.prototype.initialize = function(enemyId, x, y) {
	_Game_Enemy_initialize.apply(this, arguments);
	this.setupBitmapNotetags();
};

Game_Enemy.prototype.setupBitmapNotetags = function() {
	const enemy = this.enemy();
	this._battlerRGB = enemy._bu_rgb || [0, 0, 0];
	this._battlerHSL = [0, 0, 0];
	if(enemy._bu_hue) this._battlerHSL[0] = enemy.battlerHue;
	if(enemy._bu_sat) this._battlerHSL[1] = enemy._bu_sat;
	if(enemy._bu_lig) this._battlerHSL[2] = enemy._bu_lig;
};

Game_Enemy.prototype.getCharacterRgb = function() {
	return this._battlerRGB;
};

Game_Enemy.prototype.getCharacterHsl = function() {
	return this._battlerHSL;
};

//-----------------------------------------------------------------------------
// Game_Character
//-----------------------------------------------------------------------------

Game_Character.prototype.isEvent = function() {
	return false;
};

//-----------------------------------------------------------------------------
// Game_Event
//-----------------------------------------------------------------------------

Game_Event.prototype.isEvent = function() {
	return true;
};

const _Game_Event_initialize = Game_Event.prototype.initialize;
Game_Event.prototype.initialize = function(mapId, eventId) {
	_Game_Event_initialize.apply(this, arguments);
	this.setupBitmapNotetags();
};

Game_Event.prototype.setupBitmapNotetags = function() {
	const note = this.event().note;
	this._charRGB = [0, 0, 0];
	this._charHSL = [0, 0, 0];
	if(note.match(/<Tone\s*:\s*(.+)\s*,\s*(.+)\s*,\s*(.+)\s*>/i)) {
		this._charRGB[0] = parseInt(RegExp.$1);
		this._charRGB[1] = parseInt(RegExp.$2);
		this._charRGB[2] = parseInt(RegExp.$3);
	}
	if(note.match(/<Hue\s*:\s*(.+)\s*>/i)) {
		this._charHSL[0] = parseInt(RegExp.$1);
		this._hasHSL = true;
	}
	if(note.match(/<Saturation\s*:\s*(.+)\s*>/i)) {
		this._charHSL[1] = parseInt(RegExp.$1);
		this._hasHSL = true;
	}
	if(note.match(/<Lightness\s*:\s*(.+)\s*>/i)) {
		this._charHSL[2] = parseInt(RegExp.$1);
		this._hasHSL = true;
	}
};

Game_Event.prototype.getCharacterRgb = function() {
	return this._charRGB;
};

Game_Event.prototype.getCharacterHsl = function() {
	return this._charHSL;
};

//-----------------------------------------------------------------------------
// Sprite_Character
//-----------------------------------------------------------------------------

const _Sprite_Character_tilesetBitmap = Sprite_Character.prototype.tilesetBitmap;
Sprite_Character.prototype.tilesetBitmap = function(tileId) {
	if(this._character.isEvent()) {
		const tileset = $gameMap.tileset();
		const setNumber = 5 + Math.floor(tileId / 256);
		const rgb = this._character.getCharacterRgb();
		const hsl = this._character.getCharacterHsl();
		return ImageManager.loadTilesetUpgrade(tileset.tilesetNames[setNumber], rgb, hsl);
	} else {
		return _Sprite_Character_tilesetBitmap.apply(this, arguments);
	}
};

const _Sprite_Character_setCharacterBitmap = Sprite_Character.prototype.setCharacterBitmap;
Sprite_Character.prototype.setCharacterBitmap = function() {
	if(this._character.isEvent()) {
		const rgb = this._character.getCharacterRgb();
		const hsl = this._character.getCharacterHsl();
		this.bitmap = ImageManager.loadCharacterUpgrade(this._characterName, rgb, hsl);
		this._isBigCharacter = ImageManager.isBigCharacter(this._characterName);
	} else {
		_Sprite_Character_setCharacterBitmap.apply(this, arguments);
	}
};

//-----------------------------------------------------------------------------
// Sprite_Enemy
//-----------------------------------------------------------------------------

const _Sprite_Enemy_loadBitmap = Sprite_Enemy.prototype.loadBitmap;
Sprite_Enemy.prototype.loadBitmap = function(name, hue) {
	_Sprite_Enemy_loadBitmap.apply(this, arguments);
	const enemy = this._battler;
	if ($gameSystem.isSideView()) {
		this.bitmap = ImageManager.loadSvEnemyUpgrade(name, enemy.getCharacterRgb(), enemy.getCharacterHsl());
	} else {
		this.bitmap = ImageManager.loadEnemyUpgrade(name, enemy.getCharacterRgb(), enemy.getCharacterHsl());
	}
};

//-----------------------------------------------------------------------------
// Sprite_Actor
//-----------------------------------------------------------------------------

const _Sprite_Actor_setupWeaponAnimation = Sprite_Actor.prototype.setupWeaponAnimation;
Sprite_Actor.prototype.setupWeaponAnimation = function() {
	if(this._actor.isWeaponAnimationRequested()) {
		this._weaponSprite.setDataWeapon(this._actor.weapons()[0])
	}
	_Sprite_Actor_setupWeaponAnimation.apply(this, arguments);
};

//-----------------------------------------------------------------------------
// Sprite_Weapon
//-----------------------------------------------------------------------------

const _Sprite_Weapon_initMembers = Sprite_Weapon.prototype.initMembers;
Sprite_Weapon.prototype.initMembers = function() {
	_Sprite_Weapon_initMembers.apply(this, arguments);
	this._dataWeapon = null;
};

Sprite_Weapon.prototype.setDataWeapon = function(weapon) {
	this._dataWeapon = weapon;
};

const _Sprite_Weapon_loadBitmap = Sprite_Weapon.prototype.loadBitmap;
Sprite_Weapon.prototype.loadBitmap = function() {
	_Sprite_Weapon_loadBitmap.apply(this, arguments);
	const pageId = Math.floor((this._weaponImageId - 1) / 12) + 1;
	if (pageId >= 1) {
		const rgb = this._dataWeapon._bu_rgb || [0, 0, 0];
		const hsl = [];
		hsl[0] = this._dataWeapon._bu_hue || 0;
		hsl[1] = this._dataWeapon._bu_sat || 0;
		hsl[2] = this._dataWeapon._bu_lig || 0;
		this.bitmap = ImageManager.loadSystemUpgrade('Weapons' + pageId, rgb, hsl);
	}
};

})(SRD.BitmapUpgrade);