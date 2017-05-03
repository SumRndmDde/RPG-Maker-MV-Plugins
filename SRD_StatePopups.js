/*:
 * @plugindesc An extension to the Battle Popup Customizer that adds popups that display the addition or removal of States and Buffs.
 * @author SumRndmDde
 *
 * @param == States Defaults ==
 * @default
 *
 * @param Default Add Text
 * @desc The format used for the State Popup when a State is added.
 * Use "%1" to represent the name of the State.
 * @default +%1
 *
 * @param Default Remove Text
 * @desc The format used for the State Popup when a State is removed.
 * Use "%1" to represent the name of the State.
 * @default -%1
 *
 * @param Default X Pos
 * @desc The default initial x-position of the State Popup.
 * @default 24
 *
 * @param Default Y Pos
 * @desc The default initial y-position of the State Popup.
 * @default this._sprite.height * (-1/3)
 *
 * @param Default Color
 * @desc The default color used by the popup text.
 * @default #FFFFFF
 *
 * @param Default Outline
 * @desc The default outline color of the popup text.
 * @default #000000
 *
 * @param Default Duration
 * @desc The default duration of the popup.
 * @default 90
 *
 * @param Default Animations
 * @desc The default animations used by popups.
 * @default rotation, float
 *
 * @param Default Flash Color
 * @desc The default flash color used by the popups.
 * @default 0, 0, 0, 0
 *
 * @param Default Flash Duration
 * @desc The default duration of the flash used by the popups.
 * @default 0
 *
 * @param == Param 0 ==
 * @default
 *
 * @param Param 0 Pos Text
 * @desc The format used for the Param 0 Popup when Param 0 is added.
 * @default MHP Boost!
 *
 * @param Param 0 Neg Text
 * @desc The format used for the Param 0 Popup when Param 0 is added.
 * @default MHP Loss!
 *
 * @param Param 0 Remove Text
 * @desc The format used for the Param 0 Popup when Param 0 is removed.
 * @default Buff Ended!
 *
 * @param Param 0 X Pos
 * @desc The default initial x-position of the Param 0 Popup.
 * @default 24
 *
 * @param Param 0 Y Pos
 * @desc The default initial y-position of the Param 0 Popup.
 * @default this._sprite.height * (-1/3)
 *
 * @param Param 0 Color
 * @desc The default color used by the popup text.
 * @default #FFFFFF
 *
 * @param Param 0 Outline
 * @desc The default outline color of the popup text.
 * @default #000000
 *
 * @param Param 0 Duration
 * @desc The default duration of the popup.
 * @default 90
 *
 * @param Param 0 Animations
 * @desc The default animations used by popups.
 * @default rotation, float
 *
 * @param Param 0 Flash Color
 * @desc The default flash color used by the popups.
 * @default 0, 0, 0, 0
 *
 * @param Param 0 Flash Duration
 * @desc The default duration of the flash used by the popups.
 * @default 0
 *
 * @param == Param 1 ==
 * @default
 *
 * @param Param 1 Pos Text
 * @desc The format used for the Param 1 Popup when Param 1 is added.
 * @default MMP Boost!
 *
 * @param Param 1 Neg Text
 * @desc The format used for the Param 1 Popup when Param 1 is added.
 * @default MMP Loss!
 *
 * @param Param 1 Remove Text
 * @desc The format used for the Param 1 Popup when Param 1 is removed.
 * @default Buff Ended!
 *
 * @param Param 1 X Pos
 * @desc The default initial x-position of the Param 1 Popup.
 * @default 24
 *
 * @param Param 1 Y Pos
 * @desc The default initial y-position of the Param 1 Popup.
 * @default this._sprite.height * (-1/3)
 *
 * @param Param 1 Color
 * @desc The default color used by the popup text.
 * @default #FFFFFF
 *
 * @param Param 1 Outline
 * @desc The default outline color of the popup text.
 * @default #000000
 *
 * @param Param 1 Duration
 * @desc The default duration of the popup.
 * @default 90
 *
 * @param Param 1 Animations
 * @desc The default animations used by popups.
 * @default rotation, float
 *
 * @param Param 1 Flash Color
 * @desc The default flash color used by the popups.
 * @default 0, 0, 0, 0
 *
 * @param Param 1 Flash Duration
 * @desc The default duration of the flash used by the popups.
 * @default 0
 *
 * @param == Param 2 ==
 * @default
 *
 * @param Param 2 Pos Text
 * @desc The format used for the Param 2 Popup when Param 2 is added.
 * @default ATK Boost!
 *
 * @param Param 2 Neg Text
 * @desc The format used for the Param 2 Popup when Param 2 is added.
 * @default ATK Loss!
 *
 * @param Param 2 Remove Text
 * @desc The format used for the Param 2 Popup when Param 2 is removed.
 * @default Buff Ended!
 *
 * @param Param 2 X Pos
 * @desc The default initial x-position of the Param 2 Popup.
 * @default 24
 *
 * @param Param 2 Y Pos
 * @desc The default initial y-position of the Param 2 Popup.
 * @default this._sprite.height * (-1/3)
 *
 * @param Param 2 Color
 * @desc The default color used by the popup text.
 * @default #ff6666
 *
 * @param Param 2 Outline
 * @desc The default outline color of the popup text.
 * @default #000000
 *
 * @param Param 2 Duration
 * @desc The default duration of the popup.
 * @default 90
 *
 * @param Param 2 Animations
 * @desc The default animations used by popups.
 * @default rotation, float
 *
 * @param Param 2 Flash Color
 * @desc The default flash color used by the popups.
 * @default 0, 0, 0, 0
 *
 * @param Param 2 Flash Duration
 * @desc The default duration of the flash used by the popups.
 * @default 0
 *
 * @param == Param 3 ==
 * @default
 *
 * @param Param 3 Pos Text
 * @desc The format used for the Param 3 Popup when Param 3 is added.
 * @default DEF Boost!
 *
 * @param Param 3 Neg Text
 * @desc The format used for the Param 3 Popup when Param 3 is added.
 * @default DEF Loss!
 *
 * @param Param 3 Remove Text
 * @desc The format used for the Param 3 Popup when Param 3 is removed.
 * @default Buff Ended!
 *
 * @param Param 3 X Pos
 * @desc The default initial x-position of the Param 3 Popup.
 * @default 24
 *
 * @param Param 3 Y Pos
 * @desc The default initial y-position of the Param 3 Popup.
 * @default this._sprite.height * (-1/3)
 *
 * @param Param 3 Color
 * @desc The default color used by the popup text.
 * @default #6666ff
 *
 * @param Param 3 Outline
 * @desc The default outline color of the popup text.
 * @default #000000
 *
 * @param Param 3 Duration
 * @desc The default duration of the popup.
 * @default 90
 *
 * @param Param 3 Animations
 * @desc The default animations used by popups.
 * @default rotation, float
 *
 * @param Param 3 Flash Color
 * @desc The default flash color used by the popups.
 * @default 0, 0, 0, 0
 *
 * @param Param 3 Flash Duration
 * @desc The default duration of the flash used by the popups.
 * @default 0
 *
 * @param == Param 4 ==
 * @default
 *
 * @param Param 4 Pos Text
 * @desc The format used for the Param 4 Popup when Param 4 is added.
 * @default MAT Boost!
 *
 * @param Param 4 Neg Text
 * @desc The format used for the Param 4 Popup when Param 4 is added.
 * @default MAT Loss!
 *
 * @param Param 4 Remove Text
 * @desc The format used for the Param 4 Popup when Param 4 is removed.
 * @default Buff Ended!
 *
 * @param Param 4 X Pos
 * @desc The default initial x-position of the Param 4 Popup.
 * @default 24
 *
 * @param Param 4 Y Pos
 * @desc The default initial y-position of the Param 4 Popup.
 * @default this._sprite.height * (-1/3)
 *
 * @param Param 4 Color
 * @desc The default color used by the popup text.
 * @default #ff66db
 *
 * @param Param 4 Outline
 * @desc The default outline color of the popup text.
 * @default #000000
 *
 * @param Param 4 Duration
 * @desc The default duration of the popup.
 * @default 90
 *
 * @param Param 4 Animations
 * @desc The default animations used by popups.
 * @default rotation, float
 *
 * @param Param 4 Flash Color
 * @desc The default flash color used by the popups.
 * @default 0, 0, 0, 0
 *
 * @param Param 4 Flash Duration
 * @desc The default duration of the flash used by the popups.
 * @default 0
 *
 * @param == Param 5 ==
 * @default
 *
 * @param Param 5 Pos Text
 * @desc The format used for the Param 5 Popup when Param 5 is added.
 * @default M-DEF Boost!
 *
 * @param Param 5 Neg Text
 * @desc The format used for the Param 5 Popup when Param 5 is added.
 * @default M-DEF Loss!
 *
 * @param Param 5 Remove Text
 * @desc The format used for the Param 5 Popup when Param 5 is removed.
 * @default Buff Ended!
 *
 * @param Param 5 X Pos
 * @desc The default initial x-position of the Param 5 Popup.
 * @default 24
 *
 * @param Param 5 Y Pos
 * @desc The default initial y-position of the Param 5 Popup.
 * @default this._sprite.height * (-1/3)
 *
 * @param Param 5 Color
 * @desc The default color used by the popup text.
 * @default #bf66ff
 *
 * @param Param 5 Outline
 * @desc The default outline color of the popup text.
 * @default #000000
 *
 * @param Param 5 Duration
 * @desc The default duration of the popup.
 * @default 90
 *
 * @param Param 5 Animations
 * @desc The default animations used by popups.
 * @default rotation, float
 *
 * @param Param 5 Flash Color
 * @desc The default flash color used by the popups.
 * @default 0, 0, 0, 0
 *
 * @param Param 5 Flash Duration
 * @desc The default duration of the flash used by the popups.
 * @default 0
 *
 * @param == Param 6 ==
 * @default
 *
 * @param Param 6 Pos Text
 * @desc The format used for the Param 6 Popup when Param 6 is added.
 * @default AGI Boost!
 *
 * @param Param 6 Neg Text
 * @desc The format used for the Param 6 Popup when Param 6 is added.
 * @default AGI Loss!
 *
 * @param Param 6 Remove Text
 * @desc The format used for the Param 6 Popup when Param 6 is removed.
 * @default Buff Ended!
 *
 * @param Param 6 X Pos
 * @desc The default initial x-position of the Param 6 Popup.
 * @default 24
 *
 * @param Param 6 Y Pos
 * @desc The default initial y-position of the Param 6 Popup.
 * @default this._sprite.height * (-1/3)
 *
 * @param Param 6 Color
 * @desc The default color used by the popup text.
 * @default #66ff7a
 *
 * @param Param 6 Outline
 * @desc The default outline color of the popup text.
 * @default #000000
 *
 * @param Param 6 Duration
 * @desc The default duration of the popup.
 * @default 90
 *
 * @param Param 6 Animations
 * @desc The default animations used by popups.
 * @default rotation, float
 *
 * @param Param 6 Flash Color
 * @desc The default flash color used by the popups.
 * @default 0, 0, 0, 0
 *
 * @param Param 6 Flash Duration
 * @desc The default duration of the flash used by the popups.
 * @default 0
 *
 * @param == Param 7 ==
 * @default
 *
 * @param Param 7 Pos Text
 * @desc The format used for the Param 7 Popup when Param 7 is added.
 * @default LUK Boost!
 *
 * @param Param 7 Neg Text
 * @desc The format used for the Param 7 Popup when Param 7 is added.
 * @default LUK Loss!
 *
 * @param Param 7 Remove Text
 * @desc The format used for the Param 7 Popup when Param 7 is removed.
 * @default Buff Ended!
 *
 * @param Param 7 X Pos
 * @desc The default initial x-position of the Param 7 Popup.
 * @default 24
 *
 * @param Param 7 Y Pos
 * @desc The default initial y-position of the Param 7 Popup.
 * @default this._sprite.height * (-1/3)
 *
 * @param Param 7 Color
 * @desc The default color used by the popup text.
 * @default #fffc66
 *
 * @param Param 7 Outline
 * @desc The default outline color of the popup text.
 * @default #000000
 *
 * @param Param 7 Duration
 * @desc The default duration of the popup.
 * @default 90
 *
 * @param Param 7 Animations
 * @desc The default animations used by popups.
 * @default rotation, float
 *
 * @param Param 7 Flash Color
 * @desc The default flash color used by the popups.
 * @default 0, 0, 0, 0
 *
 * @param Param 7 Flash Duration
 * @desc The default duration of the flash used by the popups.
 * @default 0
 *
 *
 *
 * @help
 *
 * State Popups
 * Version 1.02
 * SumRndmDde
 *
 *
 * This plugin requires the Battle Popup Customizer plugin:
 * http://sumrndm.site/battle-popup-customizer/
 *
 * This is an extension to the Battle Popup Customizer that adds popups that 
 * display the addition or removal of States and Buffs during battles.
 *
 *
 * ==============================================================================
 *  List of State Notetags
 * ==============================================================================
 *
 * This is a list of notetags that can be used to customize the various 
 * properties of a State's popup:
 *
 *   <Popup Add Text: [text]>
 *   <Popup Remove Text: [text]>
 *   <Popup X Offset: [number]>
 *   <Popup Y Offset: [number]>
 *   <Popup Color: [color]>
 *   <Popup Outline: [color]>
 *   <Popup Duration: [number]>
 *   <Popup Animations: [animations]>
 *   <Popup Flash Color: [red, green, blue, intensity]>
 *   <Popup Flash Duration: [number]>
 *
 * Use these to manipulate the default variables that are set up in the 
 * Parameters for each individual State.
 *
 *
 *  Example:
 *   <Popup Add Text:    Poison Was Added!>
 *   <Popup Outline:     #0FF0FF>
 *   <Popup Flash Color: 120, 100, 50, 160>
 *
 *
 * ==============================================================================
 *  Buff Explanation
 * ==============================================================================
 *
 * You can also use Buff/Debuff Popups with this plugin.
 * The Param IDs represent the default stats:
 *
 *  0  -  Max HP
 *  1  -  Max MP
 *  2  -  Attack
 *  3  -  Defense
 *  4  -  Magic Attack
 *  5  -  Magic Defense
 *  6  -  Agility
 *  7  -  Luck
 *
 * Use these as a guide to manipulate the various properties of the Buffs or
 * Debuffs in the Parameters!
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
 */

var SRD = SRD || {};
SRD.StatePopups = SRD.StatePopups || {};

var Imported = Imported || {};
Imported["SumRndmDde State Popups"] = 1.02;

if(Imported["SumRndmDde Battle Popup Customizer"]) {

if(Imported["SumRndmDde Battle Popup Customizer"] < 1.10) {
	alert("Your 'SRD_BattlePopupCustomizer' plugin is out of date. It is highly recommended that you update it.");
}

(function(_, __) {

"use strict";

//-----------------------------------------------------------------------------
// SRD.StatePopups
//-----------------------------------------------------------------------------

const params = PluginManager.parameters('SRD_StatePopups');

_.defaultAdd = String(params['Default Add Text']);
_.defaultRem = String(params['Default Remove Text']);
_.defaultX = String(params['Default X Pos']);
_.defaultY = String(params['Default Y Pos']);
_.defaultColor = String(params['Default Color']);
_.defaultOutline = String(params['Default Outline']);
_.defaultDuration = parseInt(params['Default Duration']);
_.defaultAnimations = String(params['Default Animations']).split(/\s*,\s*/);
_.defaultFlashColor = eval(`[${String(params['Default Flash Color'])}]`);
_.defaultFlashDuration = parseInt(params['Default Flash Duration']);

_.buffInfo = [];
for(let i = 0; i <= 7; i++) {
	_.buffInfo[i] = {};
	_.buffInfo[i].posText = String(params['Param '+i+' Pos Text']);
	_.buffInfo[i].negText = String(params['Param '+i+' Neg Text']);
	_.buffInfo[i].remText = String(params['Param '+i+' Remove Text']);
	_.buffInfo[i].x = String(params['Param '+i+' X Pos']);
	_.buffInfo[i].y = String(params['Param '+i+' Y Pos']);
	_.buffInfo[i].color = String(params['Param '+i+' Color']);
	_.buffInfo[i].outline = String(params['Param '+i+' Outline']);
	_.buffInfo[i].duration = parseInt(params['Param '+i+' Duration']);
	_.buffInfo[i].animations = String(params['Param '+i+' Animations']).split(/\s*,\s*/);
	_.buffInfo[i].flashColor = eval(`[${String(params['Param '+i+' Flash Color'])}]`);
	_.buffInfo[i].flashDuration = parseInt(params['Param '+i+' Flash Duration']);
}

_.loadNotetags = function() {
	const addNote = /<Popup\s*Add\s*Text\s*:\s*(.*)\s*>/im;
	const removeNote = /<Popup\s*Remove\s*Text\s*:\s*(.*)\s*>/im;
	const xNote = /<Popup\s*X\s*:\s*(.*)\s*>/im;
	const yNote = /<Popup\s*Y\s*:\s*(.*)\s*>/im;
	const colorNote = /<Popup\s*Color\s*:\s*(.*)\s*>/im;
	const outlineNote = /<Popup\s*Outline\s*:\s*(.*)\s*>/im;
	const durationNote = /<Popup\s*Duration\s*:\s*(.*)\s*>/im;
	const animatesNote = /<Popup\s*Animations\s*:\s*(.*)\s*>/im;
	const flashColorNote = /<Popup\s*Flash\s*Color\s*:\s*(.*)\s*>/im;
	const flashDurationNote = /<Popup\s*Flash\s*Duration\s*:\s*(.*)\s*>/im;
	for(let i = 1; i < $dataStates.length; i++) {
		const state = $dataStates[i];
		if(state) {
			const note = state.note;
			state._sp_popupInfo = {};
			if(note.match(addNote)) {
				state._sp_popupInfo.addText = String(RegExp.$1);
			} else {
				state._sp_popupInfo.addText = _.defaultAdd;
			}
			if(note.match(removeNote)) {
				state._sp_popupInfo.remText = String(RegExp.$1);
			} else {
				state._sp_popupInfo.remText = _.defaultRem;
			}
			if(note.match(xNote)) {
				state._sp_popupInfo.x = String(RegExp.$1);
			} else {
				state._sp_popupInfo.x = _.defaultX;
			}
			if(note.match(yNote)) {
				state._sp_popupInfo.y = String(RegExp.$1);
			} else {
				state._sp_popupInfo.y = _.defaultY;
			}
			if(note.match(colorNote)) {
				state._sp_popupInfo.color = String(RegExp.$1);
			} else {
				state._sp_popupInfo.color = _.defaultColor;
			}
			if(note.match(outlineNote)) {
				state._sp_popupInfo.outline = String(RegExp.$1);
			} else {
				state._sp_popupInfo.outline = _.defaultOutline;
			}
			if(note.match(durationNote)) {
				state._sp_popupInfo.duration = parseInt(RegExp.$1);
			} else {
				state._sp_popupInfo.duration = _.defaultDuration;
			}
			if(note.match(animatesNote)) {
				state._sp_popupInfo.animations = String(RegExp.$1).split(/\s*,\s*/);
			} else {
				state._sp_popupInfo.animations = _.defaultAnimations.clone();
			}
			if(note.match(flashColorNote)) {
				state._sp_popupInfo.flashColor = eval(`[${String(RegExp.$1)}]`);
			} else {
				state._sp_popupInfo.flashColor = _.defaultFlashColor.clone();
			}
			if(note.match(flashDurationNote)) {
				state._sp_popupInfo.flashDuration = parseInt(RegExp.$1);
			} else {
				state._sp_popupInfo.flashDuration = _.defaultFlashDuration;
			}
		}
	}
};

//-----------------------------------------------------------------------------
// DataManager
//-----------------------------------------------------------------------------

let notetagsLoaded = false;
const _DataManager_isDatabaseLoaded = DataManager.isDatabaseLoaded;
DataManager.isDatabaseLoaded = function() {
	if(!_DataManager_isDatabaseLoaded.apply(this, arguments)) return false;
	if(!notetagsLoaded) {
		_.loadNotetags();
		notetagsLoaded = true;
	}
	return true;
};

//-----------------------------------------------------------------------------
// Game_Battler
//-----------------------------------------------------------------------------

const _Game_Battler_addState = Game_Battler.prototype.addState;
Game_Battler.prototype.addState = function(stateId) {
	if (this.isStateAddable(stateId) && !this.isStateAffected(stateId)) {
		this._result.pushNewAddedState(stateId);
	}
	_Game_Battler_addState.apply(this, arguments);
};

//-----------------------------------------------------------------------------
// Game_ActionResult
//-----------------------------------------------------------------------------

const _Game_ActionResult_clear = Game_ActionResult.prototype.clear;
Game_ActionResult.prototype.clear = function() {
	_Game_ActionResult_clear.apply(this, arguments);
	this.newAddedStates = [];
};

Game_ActionResult.prototype.addedNewStateObjects = function() {
	return this.newAddedStates.map(function(id) {
		return $dataStates[id];
	});
};

Game_ActionResult.prototype.isNewStateAdded = function(stateId) {
	return this.newAddedStates.contains(stateId);
};

Game_ActionResult.prototype.pushNewAddedState = function(stateId) {
	if (!this.isNewStateAdded(stateId)) {
		this.newAddedStates.push(stateId);
	}
};

//-----------------------------------------------------------------------------
// Sprite_Damage
//-----------------------------------------------------------------------------

const _Sprite_Damage_setup = Sprite_Damage.prototype.setup;
Sprite_Damage.prototype.setup = function(target) {
	_Sprite_Damage_setup.apply(this, arguments);

	if(!eval(__.condition)) return;

	if(this._result.isStatusAffected()) {
		const addStates = this._result.addedNewStateObjects();
		const remStates = this._result.removedStateObjects();
		const posBuffs = this._result.addedBuffs;
		const negBuffs = this._result.addedDebuffs;
		const remBuffs = this._result.removedBuffs;
		for(let i = 0; i < addStates.length; i++) {
			const state = addStates[i];
			const info = state._sp_popupInfo;
			info.text = info.addText.replace(/%1/, state.name);
			this.createSpecialStateInfo(info);
			this.incrementSpecial(__.xShift, __.yShift);
		}
		for(let i = 0; i < remStates.length; i++) {
			const state = remStates[i];
			const info = state._sp_popupInfo;
			info.text = info.remText.replace(/%1/, state.name);
			this.createSpecialStateInfo(info);
			this.incrementSpecial(__.xShift, __.yShift);
		}
		for(let i = 0; i < posBuffs.length; i++) {
			const info = _.buffInfo[posBuffs[i]];
			info.text = info.posText;
			this.createSpecialStateInfo(info);
			this.incrementSpecial(__.xShift, __.yShift);
		}
		for(let i = 0; i < negBuffs.length; i++) {
			const info = _.buffInfo[negBuffs[i]];
			info.text = info.negText;
			this.createSpecialStateInfo(info);
			this.incrementSpecial(__.xShift, __.yShift);
		}
		for(let i = 0; i < remBuffs.length; i++) {
			const info = _.buffInfo[remBuffs[i]];
			info.text = info.remText;
			this.createSpecialStateInfo(info);
			this.incrementSpecial(__.xShift, __.yShift);
		}
	}
};

Sprite_Damage.prototype.createSpecialStateInfo = function(info) {
	var bitmap = this.createChildBitmap(info, info.text.length);
	var sprite = this.createChildSprite(bitmap);
	sprite.bitmap.drawText(info.text, 0, 0, bitmap.width, bitmap.height, 'left');
	sprite.dy = 0;
	sprite.x = eval(info.x);
	sprite.y = eval(info.y);
	sprite.xBase = this._xOffsetSpecial;
	sprite.yBase = this._yOffsetSpecial;
	sprite.animations = info.animations.clone();
	sprite.duration = info.duration;
	sprite.oriDuration = sprite.duration;
	sprite.flashColor = info.flashColor.clone();
	sprite.flashDuration = info.flashDuration;
	sprite.oriX = sprite.x;
	sprite.oriY = sprite.y;
};

})(SRD.StatePopups, SRD.BattlePopupCustomizer);

} else {
	alert("Please install 'SRD_BattlePopupCustomizer' in order to use 'SRD_StatePopups'!");
	window.close();
}