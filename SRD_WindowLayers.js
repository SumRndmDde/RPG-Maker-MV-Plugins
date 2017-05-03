/*:
 * @plugindesc Separates all Windows on to different drawing layers as opposed to having them overwrite each other.
 * @author SumRndmDde
 *
 * @help
 *
 * Window Layers
 * Version 2.10
 * SumRndmDde
 *
 * Make sure you are using RPG Maker MV 1.3.1 or above!
 *
 * Separates all Windows on to different drawing layers as 
 * opposed to having them overwrite each other.
 *
 * It's plug-in and play!
 *
 *
 * ==========================================================================
 *  End of Help File
 * ==========================================================================
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
SRD.WindowLayers = SRD.WindowLayers || {};

var Imported = Imported || {};
Imported["SumRndmDde Window Layers"] = 2.10;

(function(_) {

"use strict";

if(PIXI.Container) {

WindowLayer.prototype.initialize = function() {
	PIXI.Container.call(this);
	this._width = 0;
	this._height = 0;
	this.interactive = false;
};

WindowLayer.prototype.renderCanvas = PIXI.Container.prototype.renderCanvas;
WindowLayer.prototype._canvasClearWindowRect = PIXI.Container.prototype._canvasClearWindowRect;
WindowLayer.prototype.renderWebGL = PIXI.Container.prototype.renderWebGL;
WindowLayer.prototype._maskWindow = PIXI.Container.prototype._maskWindow;

} else {

WindowLayer.prototype.initialize = function() {
	PIXI.DisplayObjectContainer.call(this);
	this._width = 0;
	this._height = 0;
	this.interactive = false;
};

WindowLayer.prototype._renderCanvas = PIXI.DisplayObjectContainer.prototype._renderCanvas;
WindowLayer.prototype._canvasClearWindowRect = PIXI.DisplayObjectContainer.prototype._canvasClearWindowRect;
WindowLayer.prototype._renderWebGL = PIXI.DisplayObjectContainer.prototype._renderWebGL;
WindowLayer.prototype._maskWindow = PIXI.DisplayObjectContainer.prototype._maskWindow;

}

})(SRD.WindowLayers);