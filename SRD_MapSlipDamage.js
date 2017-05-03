/*:
 * @plugindesc Replaces the default map Slip Damage system with a new system that gives more control over State damage on the map.
 * @author SumRndmDde
 *
 * @param Default Slip Damage
 * @desc If this is 'true', states will have Slip Damage turned on by default
 * @default false
 *
 * @param Default Slip Steps
 * @desc The default amount of steps that determine the frequency of the Slip Damage.
 * @default 20
 *
 * @param Default Use Flash
 * @desc If 'true', then States will use screen flashes to indicate Slip Damage.
 * @default true
 *
 * @param Default Flash Color
 * @desc The default color of the flash that indicates Slip Damage. 
 * Use the format: red, green, blue, intensity
 * @default 255, 0, 0, 125
 *
 * @param Default Flash Duration
 * @desc The default duration of the flash that indicates Slip Damage. 
 * @default 8
 *
 * @param Default Sound Effect
 * @desc The default Sound Effect called upon to indicate the Slip Damage. Leave blank to disallow.
 * @default Slash5
 *
 * @param Default Common Event
 * @desc The default Common Event called upon to indicate the Slip Damage. Set this to 0 to disallow.
 * @default 0
 *
 * @help
 *
 * Map Slip Damage
 * Version 1.01
 * SumRndmDde
 *
 *
 * This plugin replaces the default Slip Damage system with a new system that 
 * gives more control over State damage that occurs on the map.
 *
 *
 * ==============================================================================
 *  State Notetags
 * ==============================================================================
 *
 * If you wish for a State to have Slip Damage, use the following notetag:
 *
 *   <Allow Slip Damage>
 *
 * ==============================================================================
 *
 * In order to set the frequency in which Slip Damage occurs through steps,
 * use the following notetag:
 *
 *   <Slip Steps: [steps]>
 *
 * Example: <Slip Steps: 20>
 *
 * ==============================================================================
 *
 * In order to customize Slip Damage, use the following notetags:
 *
 *   <Slip HP Damage: [damage]>
 *   <Slip HP Damage: [damage]%>
 *   <Slip MP Damage: [damage]>
 *   <Slip MP Damage: [damage]%>
 *   <Slip TP Damage: [damage]>
 *   <Slip TP Damage: [damage]%>
 *
 * Example: <Slip HP Damage: 5>
 *          <Slip MP Damage 20%>
 *          <Slip TP Damage: -50>
 *
 * ==============================================================================
 *
 * In order to use a screen flash to indicate Slip Damage, use the following
 * notetag:
 *
 *   <Use Screen Flash for Slip Damage>
 *
 * ==============================================================================
 *
 * In order to customize the color of the screen flash, use the following
 * notetag:
 *
 *   <Slip Damage Flash Color: [red], [green], [blue], [intensity]>
 *
 * Example: <Slip Damage Flash Color: 255, 0, 0, 125>
 *
 * ==============================================================================
 *
 * In order to customize the duration of the screen flash, use the following
 * notetag:
 *
 *   <Slip Damage Flash Duration: [duration]>
 *
 * Example: <Slip Damage Flash Duration: 8>
 *
 * ==============================================================================
 *
 * In order to use a sound effect to indicate Slip Damage, use the following
 * notetag:
 *
 *   <Slip Damage Sound Effect: [sound-effect]>
 *
 * Example: <Slip Damage Sound Effect: Damage1>
 *
 * ==============================================================================
 *
 * In order to select a Common Event to be used to indicate Slip Damage
 * use the following notetag:
 *
 *   <Slip Damage Common Event: [common-event-id]>
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
SRD.MapSlipDamage = SRD.MapSlipDamage || {};
SRD.HelpfulFunctions = SRD.HelpfulFunctions || {};

if(SRD.HelpfulFunctions.AllArrayToInt === undefined) {
	SRD.HelpfulFunctions.AllArrayToInt = function(array) {
		"use strict";
		for(let i = 0; i < array.length; i++) {
			if(array[i]) array[i] = parseInt(array[i]);
		}
	};
}

var Imported = Imported || {};
Imported["SumRndmDde Map Slip Damage"] = 1.01;

(function(_, help) {

"use strict";

//-----------------------------------------------------------------------------
// SRD.MapSlipDamage
//-----------------------------------------------------------------------------

const params = PluginManager.parameters('SRD_MapSlipDamage');

_.defaultSlipDamage = String(params['Default Slip Damage']).trim().toLowerCase() === 'true';
_.defaultSlipSteps = parseInt(params['Default Slip Steps']);
_.defaultUseFlash = String(params['Default Use Flash']).trim().toLowerCase() === 'true';
_.defaultFlashColor = String(params['Default Flash Color']).split(/\s*,\s*/);
_.defaultFlashDuration = parseInt(params['Default Flash Duration']);
_.defaultSoundEffect = String(params['Default Sound Effect']);
_.defaultCommonEvent = parseInt(params['Default Common Event']);

help.AllArrayToInt(_.defaultFlashColor);

_.loadNotetags = function() {
	const tagBool = /<Allow\s*Slip\s*Damage>/im;
	const tagSteps = /<Slip\s*Steps\s*:\s*(\d+)\s*>/im;
	const tagHp = /<Slip\s*HP\s*Damage\s*:\s*(-?\d+)\s*>/im;
	const tagHpP = /<Slip\s*HP\s*Damage\s*:\s*(-?\d+)%\s*>/im;
	const tagMp = /<Slip\s*MP\s*Damage\s*:\s*(-?\d+)\s*>/im;
	const tagMpP = /<Slip\s*MP\s*Damage\s*:\s*(-?\d+)%\s*>/im;
	const tagTp = /<Slip\s*TP\s*Damage\s*:\s*(-?\d+)\s*>/im;
	const tagTpP = /<Slip\s*TP\s*Damage\s*:\s*(-?\d+)%\s*>/im;
	const tagFlash = /<Use\s*Screen\s*Flash\s*for\s*Slip\s*Damage>/im;
	const tagColor = /<Slip\s*Damage\s*Flash\s*Color\s*:\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*>/im;
	const tagDur = /<Slip\s*Damage\s*Flash\s*Duration\s*:\s*(\d+)\s*>/im;
	const tagSe = /<Slip\s*Damage\s*Sound\s*Effect\s*:\s*(.+)\s*>/im;
	const tagCe = /<Slip\s*Damage\s*Common\s*Event\s*:\s*(\d+)\s*>/im;
	for(let i = 1; i < $dataStates.length; i++) {
		const state = $dataStates[i];
		if(state) {
			const note = state.note;
			if(note.match(tagBool)) {
				state._sdu_active = true;
			} else {
				state._sdu_active = _.defaultSlipDamage;
			}
			if(note.match(tagSteps)) {
				state._sdu_slipSteps = parseInt(RegExp.$1);
			} else {
				state._sdu_slipSteps = _.defaultSlipSteps;
			}
			if(note.match(tagHp)) {
				state._sdu_hpDam = parseInt(RegExp.$1);
			}
			if(note.match(tagHpP)) {
				state._sdu_hpDamPer = parseFloat(RegExp.$1) / 100;
			}
			if(note.match(tagMp)) {
				state._sdu_mpDam = parseInt(RegExp.$1);
			}
			if(note.match(tagMpP)) {
				state._sdu_mpDamPer = parseFloat(RegExp.$1) / 100;
			}
			if(note.match(tagTp)) {
				state._sdu_tpDam = parseInt(RegExp.$1);
			}
			if(note.match(tagTpP)) {
				state._sdu_tpDamPer = parseFloat(RegExp.$1) / 100;
			}
			if(note.match(tagFlash)) {
				state._sdu_isFlash = true;
			} else {
				state._sdu_isFlash = _.defaultUseFlash;
			}
			if(note.match(tagColor)) {
				const red = parseInt(RegExp.$1);
				const green = parseInt(RegExp.$2);
				const blue = parseInt(RegExp.$3);
				const intensity = parseInt(RegExp.$4);
				state._sdu_flashColor = [red, green, blue, intensity];
			} else {
				state._sdu_flashColor = _.defaultFlashColor;
			}
			if(note.match(tagDur)) {
				state._sdu_Dur = parseInt(RegExp.$1);
			} else {
				state._sdu_Dur = _.defaultFlashDuration;
			}
			if(note.match(tagSe)) {
				state._sdu_Se = String(RegExp.$1);
			} else {
				state._sdu_Se = _.defaultSoundEffect;
			}
			if(note.match(tagCe)) {
				state._sdu_commonEvent = parseInt(RegExp.$1);
			} else {
				state._sdu_commonEvent = _.defaultCommonEvent;
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
// Game_Actor
//-----------------------------------------------------------------------------

Game_Actor.prototype.turnEndOnMap = function() {};
Game_Actor.prototype.performMapDamage = function() {};

const _Game_Actor_updateStateSteps = Game_Actor.prototype.updateStateSteps;
Game_Actor.prototype.updateStateSteps = function(state) {
	if(state._sdu_active) {
		const steps = state._sdu_slipSteps;
		if($gameParty.steps() % steps === 0) {
			this.updateSlipDamage(state);
		}
	}
	_Game_Actor_updateStateSteps.apply(this, arguments);
};

Game_Actor.prototype.updateSlipDamage = function(state) {
	this.clearResult();
	if(state._sdu_hpDam) this.gainHp(-state._sdu_hpDam);
	if(state._sdu_mpDam) this.gainMp(-state._sdu_mpDam);
	if(state._sdu_tpDam) this.gainTp(-state._sdu_tpDam);
	if(state._sdu_hpDamPer) this.gainHp(state._sdu_hpDamPer * -this.mhp);
	if(state._sdu_mpDamPer) this.gainMp(state._sdu_mpDamPer * -this.mmp);
	if(state._sdu_tpDamPer) this.gainTp(state._sdu_tpDamPer * -this.maxTp());

	this._hp = Math.round(this._hp);
	this._mp = Math.round(this._mp);
	this._tp = Math.round(this._tp);
	this.refresh();

	if(state._sdu_isFlash) {
		if (this.result().hpDamage !== 0 || 
			this.result().mpDamage !== 0 || 
			this.result().tpDamage !== 0) {
			if(!$gameParty.inBattle()) {
				$gameScreen.startFlash(state._sdu_flashColor, state._sdu_Dur);
				AudioManager.playSe({name: state._sdu_Se, volume: 90, pitch: 100, pan: 0});
			}
		}
	}
	if(state._sdu_commonEvent !== 0) {
		$gameTemp.reserveCommonEvent(state._sdu_commonEvent);
	}
};

})(SRD.MapSlipDamage, SRD.HelpfulFunctions);