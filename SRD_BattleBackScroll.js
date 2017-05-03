/*:
 * @plugindesc Allows developers to add movement to the two backgrounds within battles.
 * @author SumRndmDde
 * @help
 *
 * Battle Background Scroll
 * Version 1.00
 * SumRndmDde
 *
 *
 * This plugin allows the backgrounds within battles to scroll in both the 
 * X and Y directions during a battle.
 *
 *
 * ==============================================================================
 *  Troop Notetags
 * ==============================================================================
 *
 * In order to set scrolling to a troop's battle backgrounds, you can use
 * the following notetags within the Troop's NAME section:
 *
 *   <back1-speed: [xspeed], [yspeed]>
 *   <back2-speed: [xspeed], [yspeed]>
 *
 * Using these, you can set both X and Y Speeds to the Backgrounds 1 and 2
 * of the battle.
 *
 *
 * For example:
 *
 *   Bat*2  <back1-speed: 4, 0> <back1-speed: 0, -3>
 *
 *
 * ==============================================================================
 *  Plugin Commands
 * ==============================================================================
 *
 * You can also use the following Plugin Command to change the speed of
 * the battle backgrounds in the middle of the background:
 *
 *   SetBattleBack1ScrollSpeed [xspeed] [yspeed]
 *   SetBattleBack2ScrollSpeed [xspeed] [yspeed]
 *
 * These Plugin Commands are pretty simple. You can use them to manipulate
 * the Battle Backgrounds 1 and 2 respectively. Simply set "xspeed" and
 * "yspeed" to the X and Y Speeds you wish to use.
 *
 *
 * For example:
 *
 *   SetBattleBack1ScrollSpeed 3 6
 *   SetBattleBack2ScrollSpeed 0 -10
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
SRD.BattleBackScroll = SRD.BattleBackScroll || {};

var Imported = Imported || {};
Imported["SumRndmDde Battle Back Scroll"] = 1.00;

(function(_) {

"use strict";

//-----------------------------------------------------------------------------
// SRD.BattleBackScroll
//-----------------------------------------------------------------------------

_.loadNotetags = function() {
	const back1 = /<back1-speed\s*:\s*(.+)\s*,\s*(.+)\s*>/i;
	const back2 = /<back2-speed\s*:\s*(.+)\s*,\s*(.+)\s*>/i;
	for(let i = 1; i < $dataTroops.length; i++) {
		const troop = $dataTroops[i];
		if(!troop) continue;
		if(troop.name.match(back1)) {
			const xSpeed = parseInt(RegExp.$1);
			const ySpeed = parseInt(RegExp.$2);
			troop._battleBack1XSpeed = xSpeed;
			troop._battleBack1YSpeed = ySpeed;
		} else {
			troop._battleBack1XSpeed = 0;
			troop._battleBack1YSpeed = 0;
		}
		if(troop.name.match(back2)) {
			const xSpeed = parseInt(RegExp.$1);
			const ySpeed = parseInt(RegExp.$2);
			troop._battleBack2XSpeed = xSpeed;
			troop._battleBack2YSpeed = ySpeed;
		} else {
			troop._battleBack2XSpeed = 0;
			troop._battleBack2YSpeed = 0;
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
// Game_Temp
//-----------------------------------------------------------------------------

const _Game_Temp_initialize = Game_Temp.prototype.initialize;
Game_Temp.prototype.initialize = function() {
	_Game_Temp_initialize.apply(this, arguments);
	this._battleBack1XSpeed = 0;
	this._battleBack1YSpeed = 0;
	this._battleBack2XSpeed = 0;
	this._battleBack2YSpeed = 0;
};

Game_Temp.prototype.hasBattleBackgroundSpeed = function(id) {
	if(id === 1) {
		return !(this._battleBack1XSpeed === 0 && this._battleBack1YSpeed === 0);
	} else if(id === 2) {
		return !(this._battleBack2XSpeed === 0 && this._battleBack2YSpeed === 0);
	}
};

Game_Temp.prototype.getBattleBackXSpeed = function(id) {
	return (id === 1) ? this._battleBack1XSpeed : this._battleBack2XSpeed;
};

Game_Temp.prototype.getBattleBackYSpeed = function(id) {
	return (id === 1) ? this._battleBack1YSpeed : this._battleBack2YSpeed;
};

//-----------------------------------------------------------------------------
// Game_Troop
//-----------------------------------------------------------------------------

const _Game_Troop_setup = Game_Troop.prototype.setup;
Game_Troop.prototype.setup = function(troopId) {
	_Game_Troop_setup.apply(this, arguments);
	const troop = this.troop();
	$gameTemp._battleBack1XSpeed = troop._battleBack1XSpeed;
	$gameTemp._battleBack1YSpeed = troop._battleBack1YSpeed;
	$gameTemp._battleBack2XSpeed = troop._battleBack2XSpeed;
	$gameTemp._battleBack2YSpeed = troop._battleBack2YSpeed;
};

//-----------------------------------------------------------------------------
// Game_Interpreter
//-----------------------------------------------------------------------------

const _Game_Interpreter_pluginCommand = Game_Interpreter.prototype.pluginCommand;
Game_Interpreter.prototype.pluginCommand = function(command, args) {
	_Game_Interpreter_pluginCommand.apply(this, arguments);
	if(command.trim().toLowerCase() === 'setbattleback1scrollspeed') {
		const xSpeed = parseInt(args[0]);
		const ySpeed = parseInt(args[1]);
		$gameTemp._battleBack1XSpeed = xSpeed;
		$gameTemp._battleBack1YSpeed = ySpeed;
	}
	if(command.trim().toLowerCase() === 'setbattleback2scrollspeed') {
		const xSpeed = parseInt(args[0]);
		const ySpeed = parseInt(args[1]);
		$gameTemp._battleBack2XSpeed = xSpeed;
		$gameTemp._battleBack2YSpeed = ySpeed;
	}
};

//-----------------------------------------------------------------------------
// Spriteset_Battle
//-----------------------------------------------------------------------------

const _Spriteset_Battle_update = Spriteset_Battle.prototype.update;
Spriteset_Battle.prototype.update = function() {
	_Spriteset_Battle_update.apply(this, arguments);
	if($gameTemp.hasBattleBackgroundSpeed(1)) {
		this._back1Sprite.origin.x += $gameTemp.getBattleBackXSpeed(1);
		this._back1Sprite.origin.y += $gameTemp.getBattleBackYSpeed(1);
	}
	if($gameTemp.hasBattleBackgroundSpeed(2)) {
		this._back2Sprite.origin.x += $gameTemp.getBattleBackXSpeed(2);
		this._back2Sprite.origin.y += $gameTemp.getBattleBackYSpeed(2);
	}
};

})(SRD.BattleBackScroll);