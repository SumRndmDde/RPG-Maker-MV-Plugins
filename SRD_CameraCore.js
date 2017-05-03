/*:
 * @plugindesc Allows developers to preform various camera motions including focusing and zooming.
 * @author SumRndmDde
 *
 * @param Default Zoom
 * @desc The default zoom used by your RPG Maker game.
 * @default 1
 *
 * @param Zoom Pictures?
 * @desc If 'true', then Pictures created with the "Show Pictures" event will zoom with the camera.
 * @default true
 *
 * @param Margin Formula
 * @desc The formula used to determine the rendering margin when zooming out.
 * @default (Graphics.width / scale) - Graphics.width
 *
 * @param Fix Black Lines
 * @desc Yanfly's Core Engine may cause black lines to appear when zooming. Set this to 'true' to fix.
 * @default false
 *
 * @help
 *
 * Camera Core
 * Version 1.05
 * SumRndmDde
 *
 *
 * This plugin allows developers to preform various camera motions including 
 * focusing and zooming.
 *
 *
 * ==============================================================================
 *  Camera Focusing
 * ==============================================================================
 *
 * If you wish for the camera to focus on something, use the following
 * Plugin Commands:
 *
 *
 *   FocusCamera [x] [y] [duration]
 *
 * Insert an X and Y coordinate on the map to have the camera focus on it.
 * The duration determines how many frames it takes the camera to transition.
 *
 *
 *   FocusCamera event [id] [duration]
 *
 * Replace "id" with an Event's ID on the current map to have the camera focus
 * on that specific event. The duration determines how many frames it takes the 
 * camera to transition.
 *
 *
 *   FocusCamera follower [id] [duration]
 *
 * Replace "id" with a Follower's index in the current party to have the camera 
 * focus on that specific follower. The duration determines how many frames it 
 * takes the camera to transition.
 *
 *
 *   FocusCamera player [duration]
 *
 * Focues the camera onto the player. 
 * The duration determines how many frames it takes the camera to transition.
 *
 *
 *   ResetFocus [duration]
 *
 * Resets the focus on the camera back to the player.
 * The duration determines how many frames it takes the camera to transition.
 *
 *
 * ==============================================================================
 *  Zooming
 * ==============================================================================
 *
 * In order to zoom the camera in and out, use the following commands:
 *
 *
 *   ZoomIn [scale] [duration]
 *
 * Set "scale" to the scale you wish the camera to zoom in.
 * Setting scale to 1 would be the normal scale, greater than 1 would zoom in.
 * The duration determines how many frames it takes the camera to transition.
 *
 *
 *   ZoomOut [scale] [duration]
 *
 * Set "scale" to the scale you wish the camera to zoom in.
 * Setting scale to 1 would be the normal scale, greater than 1 would zoom out.
 * The duration determines how many frames it takes the camera to transition.
 *
 *
 *   ResetZoom [duration]
 *
 * Resets the zoom back to its default.
 * The duration determines how many frames it takes the camera to transition.
 *
 *
 * ==============================================================================
 *  Camera Shifting
 * ==============================================================================
 *
 * If you wish to shift the camera, use the following Plugin Command:
 *
 *   ShiftCamera [x-shift] [y-shift] [duration]
 *
 * This shifts the camera a certain x and/or y blocks.
 * This does NOT change the camera's focus. If the camera's focused on the
 * player, for example, and the camera is shifted upward 2 squares, the camera
 * will continue to follow the player, only it will be shifted up two squares.
 *
 *
 * ==============================================================================
 *  Camera Waiting
 * ==============================================================================
 *
 * If you wish to have an event "wait" before a camera is done moving, use the 
 * following Plugin Commands:
 *
 *
 *   WaitForCamera
 *
 * This will stop the event processing until the camera has completed its focus
 * and zooming.
 *
 *
 *   WaitForCameraFocus
 *
 * This will wait for the camera to complete its movement to a new focus.
 *
 *
 *   WaitForCameraZoom
 *
 * This will wait for the camera to finish its zoom motion.
 *
 *
 * ==============================================================================
 *  Examples
 * ==============================================================================
 *
 * Here are some examples of the Plugin Commands:
 *
 *
 * ==============================================================================
 *
 *   FocusCamera 5 7 60
 *
 *   FocusCamera event 2 60
 *
 *   FocusCamera follower 1 60
 *
 *   FocusCamera player 60
 *
 *   ResetFocus 60
 *
 *
 * ==============================================================================
 *
 *   ZoomIn 1.2 60
 *
 *   ZoomOut 1.2 60
 *
 *   ResetZoom 60
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
SRD.CameraCore = SRD.CameraCore || {};

var Imported = Imported || {};
Imported["SumRndmDde Camera Core"] = 1.05;

(function(_) {

"use strict";

//-----------------------------------------------------------------------------
// SRD.CameraCore
//-----------------------------------------------------------------------------

const params = PluginManager.parameters('SRD_CameraCore');

_.zoom = parseFloat(params['Default Zoom']);
_.pics = String(params['Zoom Pictures?']).trim().toLowerCase() === 'true';
_.margin = String(params['Margin Formula']);
_.fixYan1 = String(params['Fix Black Lines']).trim().toLowerCase() === 'true';

//-----------------------------------------------------------------------------
// Game_Screen
//-----------------------------------------------------------------------------

const _Game_Screen_clear = Game_Screen.prototype.clear;
Game_Screen.prototype.clear = function() {
	_Game_Screen_clear.apply(this, arguments);
	this._playerRegionId = 0;
	this._playerZoomInfo = null;
	this._completeZoomIn = 0;
	this._zoomXTarget = this._zoomX;
	this._zoomYTarget = this._zoomY;
	this._zoomXSpeed = 0;
	this._zoomYSpeed = 0;
	this.focusEvent = 0;
};

const _Game_Screen_updateZoom = Game_Screen.prototype.updateZoom;
Game_Screen.prototype.updateZoom = function() {
	_Game_Screen_updateZoom.apply(this, arguments);
	this.updateTilemapMargin();
};

//NO ONE ELSE BETTER OVERWRITE THIS!!!! >:D
Game_Screen.prototype.clearZoom = function() {
	//Overwrite
	this._zoomX = Graphics.boxWidth/2;
	this._zoomY = Graphics.boxHeight/2;
	this._zoomScale = _.zoom;
	this._zoomScaleTarget = _.zoom;
	this._zoomDuration = 0;
	//Overwrite

	this.refreshZoomInfo();
	this.refreshTilemapMargin(this._zoomScale);
	if(SceneManager.isNextScene(Scene_Battle)) {
		this.ultraClearZoom();
	}
};

Game_Screen.prototype.refreshZoomInfo = function() {
	if(this._playerZoomInfo) {
		this._zoomX = this._playerZoomInfo.x;
		this._zoomY = this._playerZoomInfo.y;
		this._zoomScale = this._playerZoomInfo.scale;
		this._zoomScaleTarget = this._playerZoomInfo.scale;
		this._zoomDuration = this._playerZoomInfo.duration;
	}
};

Game_Screen.prototype.ultraClearZoom = function() {
	this._zoomX = 0;
	this._zoomY = 0;
	this._zoomScale = 1;
	this._zoomScaleTarget = 1;
	this._zoomDuration = 0;
};

const _Game_Screen_onBattleStart = Game_Screen.prototype.onBattleStart;
Game_Screen.prototype.onBattleStart = function() {
	_Game_Screen_onBattleStart.apply(this, arguments);
	this.ultraClearZoom();
};

Game_Screen.prototype.setCameraFocus = function(scale, duration, nullify) {
	this.setupZoomInfo(scale, duration);
	this.setupZoomStuff();
	if(duration === 0) {
		this._zoomScale = this._zoomScaleTarget;
		this._zoomDuration = 0;
	}
	if(nullify) this._playerZoomInfo = null;
	this.setupTilemapMargin();
};

Game_Screen.prototype.setupZoomInfo = function(scale, duration) {
	this._playerZoomInfo = {};
	this._playerZoomInfo.x = Graphics.boxWidth/2;
	this._playerZoomInfo.y = Graphics.boxHeight/2;
	this._playerZoomInfo.scale = eval(scale) * _.zoom;
	this._playerZoomInfo.duration = eval(duration);
};

Game_Screen.prototype.setupZoomStuff = function() {
	this._zoomX = this._playerZoomInfo.x;
	this._zoomY = this._playerZoomInfo.y;
	this._zoomScaleTarget = this._playerZoomInfo.scale;
	this._zoomDuration = this._playerZoomInfo.duration;
};

Game_Screen.prototype.resetCameraFocus = function(duration) {
	this.setCameraFocus(_.zoom, duration, true);
};

Game_Screen.prototype.setupTilemapMargin = function() {
	if(this._zoomScaleTarget < this._zoomScale) {
		this.refreshTilemapMargin(this._zoomScaleTarget);
		this._completeZoomIn = 2;
	} else {
		this._completeZoomIn = 1;
	}
};

Game_Screen.prototype.updateTilemapMargin = function() {
	if(this._zoomDuration === 0 && this._completeZoomIn) {
		this.refreshTilemapMargin(this._zoomScale);
		this._completeZoomIn = 0;
	} else if(this._zoomDuration === 0 && this._completeZoomIn) {
		this.refreshTilemapMargin(this._zoomScaleTarget);
		this._completeZoomIn = 0;
	}
};

Game_Screen.prototype.refreshTilemapMargin = function(scale) {
	if(SceneManager._scene.constructor === Scene_Map) {
		const margin = (this._zoomScaleTarget < 1) ? eval(_.margin) : 1;
		const tilemap = SceneManager._scene._spriteset._tilemap;
		tilemap._margin = margin;
		tilemap.width = Graphics.width + (margin * 2);
		tilemap.height = Graphics.height + (margin * 2);
	}
};

Game_Screen.prototype.isCameraZooming = function() {
	return Boolean(this._zoomDuration > 0);
};

//-----------------------------------------------------------------------------
// Game_CharacterBase
//-----------------------------------------------------------------------------

Game_CharacterBase.prototype.centerX = function() {
	return (Graphics.width / $gameMap.tileWidth() - 1) / 2.0;
};

Game_CharacterBase.prototype.centerY = function() {
	return (Graphics.height / $gameMap.tileHeight() - 1) / 2.0;
};

Game_CharacterBase.prototype.centerCamera = function(dur) {
	return $gameMap.setDisplayPosStart(this.x - this.centerX(), this.y - this.centerY(), dur);
};

Game_CharacterBase.prototype.centerCameraOnPos = function(x, y, dur) {
	return $gameMap.setDisplayPosStart(x - this.centerX(), y - this.centerY(), dur);
};

//-----------------------------------------------------------------------------
// Game_Character
//-----------------------------------------------------------------------------

Game_Character.prototype.updateScroll = Game_Player.prototype.updateScroll;

//-----------------------------------------------------------------------------
// Game_Player
//-----------------------------------------------------------------------------

Game_Player.prototype.updateScroll = function(lastScrolledX, lastScrolledY) {
	if($gameScreen.focusEvent === 0) {
		Game_Character.prototype.updateScroll.apply(this, arguments);
	}
};

//-----------------------------------------------------------------------------
// Game_Event
//-----------------------------------------------------------------------------

const _Game_Event_update = Game_Event.prototype.update;
Game_Event.prototype.update = function() {
	var lastScrolledX = this.scrolledX();
	var lastScrolledY = this.scrolledY();
	_Game_Event_update.apply(this, arguments);
	this.updateScroll(lastScrolledX, lastScrolledY);
};

Game_Event.prototype.updateScroll = function(lastScrolledX, lastScrolledY) {
	if($gameScreen.focusEvent === this._eventId) {
		Game_Character.prototype.updateScroll.apply(this, arguments);
	}
};

//-----------------------------------------------------------------------------
// Game_Event
//-----------------------------------------------------------------------------

const _Game_Follower_update = Game_Follower.prototype.update;
Game_Follower.prototype.update = function() {
	var lastScrolledX = this.scrolledX();
	var lastScrolledY = this.scrolledY();
	_Game_Follower_update.apply(this, arguments);
	this.updateScroll(lastScrolledX, lastScrolledY);
};

Game_Follower.prototype.updateScroll = function(lastScrolledX, lastScrolledY) {
	if($gameScreen.focusEvent === this._memberIndex * (-1)) {
		Game_Character.prototype.updateScroll.apply(this, arguments);
	}
};

//-----------------------------------------------------------------------------
// Game_Map
//-----------------------------------------------------------------------------

const _Game_Map_initialize = Game_Map.prototype.initialize;
Game_Map.prototype.initialize = function() {
	_Game_Map_initialize.apply(this, arguments);
	this._newDisplayX = 0;
	this._newDisplayY = 0;
	this._newParallaxX = 0;
	this._newParallaxY = 0;
	this._scrollDuration = 0;
	this._displayXSpeed = 0;
	this._displayYSpeed = 0;
	this._parallaxXSpeed = 0;
	this._parallaxYSpeed = 0;
};

const _Game_Map_setup = Game_Map.prototype.setup;
Game_Map.prototype.setup = function(mapId) {
	this._newDisplayX = 0;
	this._newDisplayY = 0;
	this._scrollDuration = 0;
	$gameScreen.focusEvent = 0;
	$gameScreen.resetCameraFocus(0);
	_Game_Map_setup.apply(this, arguments);
};

Game_Map.prototype.setDisplayPosStart = function(x, y, dur) {
	if(dur === 0) {
		this.setDisplayPos.call(this, x, y);
	} else {
		this.setDisplayPosInfo(x, y);
		this.setDisplayPosSpeeds(dur);
	}
};

Game_Map.prototype.shiftCameraPosition = function(x, y, dur) {
	this.setDisplayPosStart(this._displayX + x, this._displayY + y, dur);
};

Game_Map.prototype.setDisplayPosInfo = function(x, y) {
	if (this.isLoopHorizontal()) {
		this._newDisplayX = x.mod(this.width());
		this._newParallaxX = x;
	} else {
		var endX = this.width() - this.screenTileX();
		this._newDisplayX = endX < 0 ? endX / 2 : x.clamp(0, endX);
		this._newParallaxX = this._newDisplayX;
	}
	if (this.isLoopVertical()) {
		this._newDisplayY = y.mod(this.height());
		this._newParallaxY = y;
	} else {
		var endY = this.height() - this.screenTileY();
		this._newDisplayY = endY < 0 ? endY / 2 : y.clamp(0, endY);
		this._newParallaxY = this._newDisplayY;
	}
};

Game_Map.prototype.setDisplayPosSpeeds = function(dur) {
	this._scrollDuration = dur;
	this._displayXSpeed = (this._newDisplayX - this._displayX) / this._scrollDuration;
	this._displayYSpeed = (this._newDisplayY - this._displayY) / this._scrollDuration;
	this._parallaxXSpeed = (this._newParallaxX - this._parallaxX) / this._scrollDuration;
	this._parallaxYSpeed = (this._newParallaxY - this._parallaxY) / this._scrollDuration;
};

const _Game_Map_updateScroll = Game_Map.prototype.updateScroll;
Game_Map.prototype.updateScroll = function() {
	_Game_Map_updateScroll.apply(this, arguments);
	this.updateCameraScroll();
};

Game_Map.prototype.updateCameraScroll = function() {
	if(this._scrollDuration > 0) {
		this._scrollDuration--;
		this._displayX += this._displayXSpeed;
		this._displayY += this._displayYSpeed;
		this._parallaxX += this._parallaxXSpeed;
		this._parallaxY += this._parallaxYSpeed;
	}
};

Game_Map.prototype.isCameraScrolling = function() {
	return Boolean(this._scrollDuration > 0);
};

//-----------------------------------------------------------------------------
// Game_Interpreter
//-----------------------------------------------------------------------------

const _Game_Interpreter_pluginCommand = Game_Interpreter.prototype.pluginCommand;
Game_Interpreter.prototype.pluginCommand = function(command, args) {
	_Game_Interpreter_pluginCommand.apply(this, arguments);
	const com = command.trim().toLowerCase();
	const checkDur = function(i) {
		return (args[i]) ? eval(args[i]) : 0;
	};
	if(com === 'zoomin') {
		$gameScreen.setCameraFocus(String(args[0]), checkDur(1));
	} else if(com === 'zoomout') {
		$gameScreen.setCameraFocus("1/(" + String(args[0]) + ")", checkDur(1));
	} else if(com === 'focuscamera') {
		const com2 = String(args[0]).trim().toLowerCase();
		if(com2 === 'event') {
			const eventId = eval(args[1]);
			if($gameMap.event(eventId)) {
				$gameScreen.focusEvent = eventId;
				$gameMap.event(eventId).centerCamera(checkDur(2));
			}
		} else if(com2 === 'follower') {
			const followerId = eval(args[1]);
			if($gamePlayer.followers().follower(followerId - 1)) {
				$gameScreen.focusEvent = (followerId * (-1));
				$gamePlayer.followers().follower(followerId - 1).centerCamera(checkDur(2));
			}
		} else if(com2 === 'player') {
			$gameScreen.focusEvent = 0;
			$gamePlayer.centerCamera(checkDur(1));
		} else {
			$gameScreen.focusEvent = null;
			$gamePlayer.centerCameraOnPos(eval(args[0]), eval(args[1]), checkDur(2));
		}
	} else if(com === 'resetfocus') {
		$gameScreen.focusEvent = 0;
		$gamePlayer.centerCamera(checkDur(0));
	} else if(com === 'resetzoom') {
		$gameScreen.resetCameraFocus(checkDur(0));
	} else if(com === 'setdefaultzoom') {
		_.zoom = eval(args[0]);
	} else if(com === 'shiftcamera') {
		$gameMap.shiftCameraPosition(eval(args[0]), eval(args[1]), checkDur(2));
	} else if(com === 'waitforcamera') {
		this.setWaitMode('camera')
	} else if(com === 'waitforcamerafocus') {
		this.setWaitMode('camera-focus')
	} else if(com === 'waitforcamerazoom') {
		this.setWaitMode('camera-zoom')
	}
};

const _Game_Interpreter_updateWaitMode = Game_Interpreter.prototype.updateWaitMode;
Game_Interpreter.prototype.updateWaitMode = function() {
	let waiting = null;
	if(this._waitMode === 'camera') {
		waiting = ($gameMap.isCameraScrolling() || $gameScreen.isCameraZooming());
	} else if(this._waitMode === 'camera-focus') {
		waiting = $gameMap.isCameraScrolling();
	} else if(this._waitMode === 'camera-zoom') {
		waiting = $gameScreen.isCameraZooming();
	}
	if(waiting) {
		return true;
	} else if(waiting === false) {
		this._waitMode = '';
		return false;
	}
	return _Game_Interpreter_updateWaitMode.apply(this, arguments);
};

//-----------------------------------------------------------------------------
// Scene_Map
//-----------------------------------------------------------------------------

const _Scene_Map_start = Scene_Map.prototype.start;
Scene_Map.prototype.start = function() {
	_Scene_Map_start.apply(this, arguments);
	$gameScreen.clearZoom();
};

//-----------------------------------------------------------------------------
// SRD.CameraCore.pics Compatibility
//-----------------------------------------------------------------------------

if(_.pics) {

Scene_Base.prototype.createPicturesForCameraCore = Spriteset_Base.prototype.createPictures;

const _Scene_Map_createSpriteset = Scene_Map.prototype.createSpriteset;
Scene_Map.prototype.createSpriteset = function() {
	_Scene_Map_createSpriteset.apply(this, arguments);
	this.createPicturesForCameraCore();
};

const _Scene_Battle_createSpriteset = Scene_Battle.prototype.createSpriteset;
Scene_Battle.prototype.createSpriteset = function() {
	_Scene_Battle_createSpriteset.apply(this, arguments);
	this.createPicturesForCameraCore();
};

Spriteset_Base.prototype.createPictures = function() {};

}

//-----------------------------------------------------------------------------
// Yanfly Engine Core Compatibility
//-----------------------------------------------------------------------------

if(Imported.YEP_CoreEngine && _.fixYan1) {

Sprite.prototype.updateTransform = function() {
	PIXI.Sprite.prototype.updateTransform.call(this);
	this.worldTransform.tx += this._offset.x;
	this.worldTransform.ty += this._offset.y;
};

}

})(SRD.CameraCore);