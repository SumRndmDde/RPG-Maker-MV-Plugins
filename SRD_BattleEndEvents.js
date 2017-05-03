/*:
 * @plugindesc Allows Common Events to be played at the end of the battle depending on the results.
 * @author SumRndmDde
 *
 * @param Win Common Event
 * @desc This is the Common Event that plays at the end of a battle that the party wins. Set to 0 to disallow.
 * @default 0
 *
 * @param Lose Common Event
 * @desc This is the Common Event that plays at the end of a battle that the party loses. Set to 0 to disallow.
 * @default 0
 *
 * @param Escape Common Event
 * @desc This is the Common Event that plays at the end of a battle that the party escapes. Set to 0 to disallow.
 * @default 0
 *
 * @param Abort Common Event
 * @desc This is the Common Event that plays at the end of a battle when it is aborted. Set to 0 to disallow.
 * @default 0
 *
 * @param Troop ID Variable
 * @desc If set to a Variable ID, that Game Variable will store the ID of the troop that was fought at the end of the battle.
 * @default 0
 *
 * @help
 *
 * Battle End Events
 * Version 1.00
 * SumRndmDde
 *
 *
 * This plugin allows Common Events to be played at the end of the battle 
 * depending on the results.
 *
 *
 * ==============================================================================
 *  Plugin Commands
 * ==============================================================================
 *
 * The following Plugin Commands can be used throughout your game to change the 
 * Common Events called at the end of the battle. These can even be used in
 * troop events to dynamically change what Common Event will be played at the 
 * end of the battle.
 *
 *
 *   SetWinCommonEvent [id]
 *   SetLoseCommonEvent [id]
 *   SetEscapeCommonEvent [id]
 *   SetAbortCommonEvent [id]
 *
 * These change the win, lose, escape, and abort Common Events respectively.
 *
 *
 * For example:
 *
 *   SetWinCommonEvent 5
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
SRD.BattleEndEvents = SRD.BattleEndEvents || {};

var Imported = Imported || {};
Imported["SumRndmDde Battle End Events"] = 1.00;

(function(_) {

"use strict";

//-----------------------------------------------------------------------------
// SRD.BattleEndEvents
//-----------------------------------------------------------------------------

const params = PluginManager.parameters('SRD_BattleEndEvents');

_.win = parseInt(params['Win Common Event']);
_.lose = parseInt(params['Lose Common Event']);
_.escape = parseInt(params['Escape Common Event']);
_.abort = parseInt(params['Abort Common Event']);
_.var = parseInt(params['Troop ID Variable']);

//-----------------------------------------------------------------------------
// BattleManager
//-----------------------------------------------------------------------------

_.BattleManager_initMembers = BattleManager.initMembers;
BattleManager.initMembers = function() {
    _.BattleManager_initMembers.apply(this, arguments);
    this._endEventsInterpreter = new Game_Interpreter();
};

_.BattleManager_endBattle = BattleManager.endBattle;
BattleManager.endBattle = function(result) {
	if(_.var !== 0) {
		$gameVariables.setValue(_.var, $gameTroop._troopId);
	}
	this.checkBattleEndCommonEvent(result);
	_.BattleManager_endBattle.apply(this, arguments);
};

BattleManager.checkBattleEndCommonEvent = function(result) {
	switch(result) {
		case 0:
			if(_.win !== 0) this._endEventsInterpreter.setup($dataCommonEvents[_.win].list);
			break;
		case 1:
			if(this._escaped) {
				if(_.escape !== 0) this._endEventsInterpreter.setup($dataCommonEvents[_.escape].list);
			} else {
				if(_.abort !== 0) this._endEventsInterpreter.setup($dataCommonEvents[_.abort].list);
			}
			break;
		case 2:
			if(_.lose !== 0) this._endEventsInterpreter.setup($dataCommonEvents[_.lose].list);
			break;
	}
};

_.BattleManager_updateBattleEnd = BattleManager.updateBattleEnd;
BattleManager.updateBattleEnd = function() {
	if(this._endEventsInterpreter.isRunning()) {
		this._endEventsInterpreter.update();
		return;
	}
    _.BattleManager_updateBattleEnd.apply(this, arguments);
};

//-----------------------------------------------------------------------------
// Game_Interpreter
//-----------------------------------------------------------------------------

_.Game_Interpreter_pluginCommand = Game_Interpreter.prototype.pluginCommand;
Game_Interpreter.prototype.pluginCommand = function(command, args) {
	_.Game_Interpreter_pluginCommand.apply(this, arguments);
	const com = command.trim().toLowerCase();
	if(com === 'setwincommonevent') {
		_.win = parseInt(args[0]);
	} else if(com === 'setlosecommonevent') {
		_.lose = parseInt(args[0]);
	} else if(com === 'setescapecommonevent') {
		_.escape = parseInt(args[0]);
	} else if(com === 'setabortcommonevent') {
		_.abort = parseInt(args[0]);
	}
};

})(SRD.BattleEndEvents);