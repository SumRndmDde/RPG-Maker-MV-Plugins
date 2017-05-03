/*:
 * @plugindesc Gives the camera of your game smoother motion during gameplay and specific camera motions.
 * @author SumRndmDde
 *
 * @param Delay Power
 * @desc A numerical value used to create the delay of the camera to the target's movement. The higher the value, the greater the delay.
 * @default 5
 *
 * @param Cut Off Value
 * @desc Once the camera reaches this distance, it jumps straight to the target; reduces stuttering.
 * @default 0.02
 *
 * @help
 *
 * Smooth Camera
 * Version 1.02
 * SumRndmDde
 *
 *
 * This plugin requires the Camera Core plugin:
 * http://sumrndm.site/camera-core/
 *
 * This plugin gives the camera of your game smoother motion during gameplay 
 * and specific camera motions.
 *
 *
 * ==============================================================================
 *  Plugin Commands
 * ==============================================================================
 *
 * The following plugin command can be used to change the "Delay Power" of the
 * camera:
 *
 *
 *   SetDelayPower [value]
 *
 * Set "value" to a number (preferably around 1 to 10) to customize the delay
 * of the camera.
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
SRD.SmoothCamera = SRD.SmoothCamera || {};

var Imported = Imported || {};
Imported["SumRndmDde Smooth Camera"] = 1.02;

(function(_) {

"use strict";

//-----------------------------------------------------------------------------
// SRD.SmoothCamera
//-----------------------------------------------------------------------------

const params = PluginManager.parameters('SRD_SmoothCamera');

_.meetsRequirements = Imported["SumRndmDde Camera Core"];
_.cutOff = parseFloat(params['Cut Off Value']);
_.power = parseFloat(0.01 / parseFloat(params['Delay Power']));

_.alertNeedCameraCore = function() {
	alert("The 'SRD_CameraCore' plugin is required for using the 'SRD_SmoothCamera' plugin.");
	if(confirm("Do you want to open the download page to 'SRD_CameraCore'?")) {
		window.open('http://sumrndm.site/camera-core/');
	}
};

if(!_.meetsRequirements) {
	_.alertNeedCameraCore();
}

//-----------------------------------------------------------------------------
// Game_Map
//-----------------------------------------------------------------------------

_.Game_Map_initialize = Game_Map.prototype.initialize;
Game_Map.prototype.initialize = function() {
	_.Game_Map_initialize.apply(this, arguments);
	this._currentFocusEvent = $gameScreen.focusEvent;
	this.shiftX = 0;
	this.shiftY = 0;
};

_.Game_Map_setDisplayPosStart = Game_Map.prototype.setDisplayPosStart;
Game_Map.prototype.setDisplayPosStart = function(x, y, dur) {
	if(this._currentFocusEvent !== $gameScreen.focusEvent || this._currentFocusEvent === null) {
		this._currentFocusEvent = $gameScreen.focusEvent;
		_.Game_Map_setDisplayPosStart.apply(this, arguments);
	}
};

_.Game_Map_updateScroll = Game_Map.prototype.updateScroll;
Game_Map.prototype.updateScroll = function() {
	if($gameMap.isCameraScrolling()) {
		_.Game_Map_updateScroll.apply(this, arguments);
	}
};

_.Game_CharacterBase_centerCamera = Game_CharacterBase.prototype.centerCamera;
Game_CharacterBase.prototype.centerCamera = function(dur) {
	$gameMap.shiftX = 0;
	$gameMap.shiftY = 0;
	return _.Game_CharacterBase_centerCamera.apply(this, arguments);
};

Game_Map.prototype.shiftCameraPosition = function(x, y, dur) {
	$gameMap.shiftX = x;
	$gameMap.shiftY = y;
};

//-----------------------------------------------------------------------------
// Game_Character
//-----------------------------------------------------------------------------

_.Game_Character_updateScroll = Game_Character.prototype.updateScroll;
Game_Character.prototype.updateScroll = function() {
	if(!$gameMap.isCameraScrolling()) {
		const cut = _.cutOff;
		const xSpeed = Math.floor(this.screenX() + ($gameMap.shiftX * 48) - $gameScreen.zoomX()) * _.power;
		const ySpeed = Math.floor(this.screenY() + ($gameMap.shiftY * 48) - $gameScreen.zoomY()) * _.power;
		if(xSpeed < -cut) {
			$gameMap.scrollLeft(-xSpeed);
		} else if(xSpeed > cut) {
			$gameMap.scrollRight(xSpeed);
		}
		if(ySpeed < -cut) {
			$gameMap.scrollUp(-ySpeed);
		} else if(ySpeed > cut) {
			$gameMap.scrollDown(ySpeed);
		}
		if(Math.abs(xSpeed) < cut && Math.abs(ySpeed) < cut) {
			this.centerCamera(0);
		}
	} else {
		_.Game_Character_updateScroll.apply(this, arguments);
	}
};

//-----------------------------------------------------------------------------
// Game_Interpreter
//-----------------------------------------------------------------------------

_.Game_Interpreter_pluginCommand = Game_Interpreter.prototype.pluginCommand;
Game_Interpreter.prototype.pluginCommand = function(command, args) {
	_.Game_Interpreter_pluginCommand.apply(this, arguments);
	const com = command.trim().toLowerCase();
	if(com === 'setdelaypower') {
		_.power = parseInt(0.01 / parseFloat(args[0]));
	}
};

})(SRD.SmoothCamera);