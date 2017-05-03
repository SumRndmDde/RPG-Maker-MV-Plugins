/*:
 * @plugindesc Allows players to have the ability to select from a collection of pictures.
 * @author SumRndmDde
 *
 * @param Min Scale
 * @desc The scale of the picture when it is not selected.
 * @default 1
 *
 * @param Max Scale
 * @desc The scale of the picture when it is selected.
 * @default 1.5
 *
 * @param Scaling Speed
 * @desc The speed in which the pictures zoom when selecting them.
 * @default 0.04
 *
 * @param Confirm Speed
 * @desc The speed of the animation of a picture when it is chosen.
 * @default 0.2
 *
 * @param Close Speed
 * @desc The speed of the animation of a picture when it closes.
 * @default 0.4
 *
 * @help
 *
 * Picture Choices
 * Version 1.00
 * SumRndmDde
 *
 *
 * This is a plugin that allows players to have the ability to select from 
 * a collection of pictures.
 *
 *
 * ==========================================================================
 *  Where to Store the Pictures
 * ==========================================================================
 *
 * All of the image files need to be stored in:
 *
 *   /img/SumRndmDde/choices/
 *
 *
 * ==========================================================================
 *  How to Set up Picture Choices
 * ==========================================================================
 *
 * Within one of the slots for a Choice in a "Show Choices" event, use:
 *
 *   \picture[image-name]
 *
 * For example, if you had an image called "Happy.png", then you could do:
 *
 *   \picture[Happy]
 *
 *
 * Using this, you can assign pictures to each choice.
 * Keep in mind if even one choice is set up like this, the entire choice
 * window will use the Picture Choices format.
 * I would HIGHLY recommend making every choice have an picture assigned to it.
 *
 *
 * ==========================================================================
 *  Picture Choices Grid
 * ==========================================================================
 *
 * By default, the grid used for the Picture Choices is based on the amount
 * of choices that are used. 
 *
 * For example:
 *
 *   2 Choices   -   2 Columns | 1 Rows
 *   3 Choices   -   3 Columns | 1 Rows
 *   4 Choices   -   2 Columns | 2 Rows
 *   5 Choices   -   5 Columns | 1 Rows
 *   6 Choices   -   3 Columns | 2 Rows
 *
 *
 * However, say for example, you wish to set up a custom grid (like you may
 * wish to have 3 Rows for 3 Choices), you can use the Plugin Command:
 *
 *   SetPictureChoicesGrid [cols] [rows]
 *
 * For example:
 *
 *   SetPictureChoicesGrid 1 3
 *
 *
 * If you wish to set it back to automatic mode, use the Plugin Command:
 *
 *   SetPictureChoicesGrid auto
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
 *
 */

var SRD = SRD || {};
SRD.PictureChoices = SRD.PictureChoices || {};

var Imported = Imported || {};
Imported["SumRndmDde Picture Choices"] = 1.00;

function Window_PictureChoiceList() {
	this.initialize.apply(this, arguments);
}

function Sprite_PictureChoice() {
	this.initialize.apply(this, arguments);
}

(function(_) {
	
"use strict";

var params = PluginManager.parameters('SRD_PictureChoices');

//-----------------------------------------------------------------------------
// SRD.PictureChoices
//-----------------------------------------------------------------------------

_.min = parseFloat(params['Min Scale']);
_.max = parseFloat(params['Max Scale']);
_.speed = parseFloat(params['Scaling Speed']);
_.confirm = parseFloat(params['Confirm Speed']);
_.close = parseFloat(params['Close Speed']);

_.loadPicture = function(filename, hue) {
	return ImageManager.loadBitmap('img/SumRndmDde/choices/', filename, hue, true);
};

_.matchesAny = function(name) {
	return !!name.match(/\\picture\[(.*)\]/i);
};

//-----------------------------------------------------------------------------
// Game_Message
//-----------------------------------------------------------------------------

var _Game_Message_clear = Game_Message.prototype.clear;
Game_Message.prototype.clear = function() {
	_Game_Message_clear.apply(this, arguments);
	this.isPictureChoices = false;
	this.pictureChoiceSize = [Graphics.boxWidth, Graphics.boxHeight];
	this.pictureChoiceGrid = [1, 1];
	this.customizedPictureChoiceGrid = false;
};

var _Game_Message_setChoices = Game_Message.prototype.setChoices;
Game_Message.prototype.setChoices = function(choices, defaultType, cancelType) {
	this.pictureChoicesCheck(choices);
	_Game_Message_setChoices.apply(this, arguments);
};

Game_Message.prototype.pictureChoicesCheck = function(choices) {
	this.isPictureChoices = false;
	for(var i = 0; i < choices.length; i++) {
		if(_.matchesAny(choices[i])) {
			this.isPictureChoices = true;
			break;
		}
	}
	if(!this.customizedPictureChoiceGrid) {
		var amount = choices.length;
		if(amount === 1) this.pictureChoiceGrid = [1, 1];
		else if(amount === 2) this.pictureChoiceGrid = [2, 1];
		else if(amount === 3) this.pictureChoiceGrid = [3, 1];
		else if(amount === 4) this.pictureChoiceGrid = [2, 2];
		else if(amount === 5) this.pictureChoiceGrid = [5, 1];
		else if(amount === 6) this.pictureChoiceGrid = [6, 2];
	}
};

Game_Message.prototype.setPictureChoicesGrid = function(cols, rows) {
	this.customizedPictureChoiceGrid = true;
	this.pictureChoiceGrid = [cols, rows];
};

Game_Message.prototype.disablePictureChoicesGrid = function() {
	this.customizedPictureChoiceGrid = false;
};

//-----------------------------------------------------------------------------
// Game_Interpreter
//-----------------------------------------------------------------------------

var _Game_Interpreter_pluginCommand = Game_Interpreter.prototype.pluginCommand;
Game_Interpreter.prototype.pluginCommand = function(command, args) {
	_Game_Interpreter_pluginCommand.apply(this, arguments);
	if(command.trim().toLowerCase() === 'setpicturechoicesgrid') {
		if(String(args[0]).trim().toLowerCase() === 'auto') {
			$gameMessage.disablePictureChoicesGrid();
		} else {
			var cols = parseInt(args[0]);
			var rows = parseInt(args[1]);
			$gameMessage.setPictureChoicesGrid(cols, rows);
		}
	}
};

//-----------------------------------------------------------------------------
// Window_Message
//-----------------------------------------------------------------------------

var _Window_Message_subWindows = Window_Message.prototype.subWindows;
Window_Message.prototype.subWindows = function() {
	var result = _Window_Message_subWindows.apply(this, arguments);
	result.push(this._pictureChoiceWindow);
	return result;
};

var _Window_Message_createSubWindows = Window_Message.prototype.createSubWindows;
Window_Message.prototype.createSubWindows = function() {
	_Window_Message_createSubWindows.apply(this, arguments);
	this._pictureChoiceWindow = new Window_PictureChoiceList(this);
};

var _Window_Message_isAnySubWindowActive = Window_Message.prototype.isAnySubWindowActive;
Window_Message.prototype.isAnySubWindowActive = function() {
	return _Window_Message_isAnySubWindowActive.apply(this, arguments) || this._pictureChoiceWindow.active;
};

var _Window_Message_startInput = Window_Message.prototype.startInput;
Window_Message.prototype.startInput = function() {
	if($gameMessage.isPictureChoices && $gameMessage.isChoice()) {
		this._pictureChoiceWindow.start();
		return true;
	}
	return _Window_Message_startInput.apply(this, arguments);
};

var _Scene_Map_createMessageWindow = Scene_Map.prototype.createMessageWindow;
Scene_Map.prototype.createMessageWindow = function() {
	_Scene_Map_createMessageWindow.apply(this, arguments);
	if(this._messageWindow._pictureChoiceWindow) {
		this._windowLayer.removeChild(this._messageWindow._pictureChoiceWindow);
		this.addChild(this._messageWindow._pictureChoiceWindow);
	}
};

//-----------------------------------------------------------------------------
// Window_PictureChoiceList
//-----------------------------------------------------------------------------

Window_PictureChoiceList.prototype = Object.create(Window_ChoiceList.prototype);
Window_PictureChoiceList.prototype.constructor = Window_PictureChoiceList;

Window_PictureChoiceList.prototype._refreshAllParts = function() {};
Window_PictureChoiceList.prototype._refreshCursor = function() {};

var _Window_PictureChoiceList_initialize = Window_PictureChoiceList.prototype.initialize;
Window_PictureChoiceList.prototype.initialize = function(messageWindow) {
	Window_ChoiceList.prototype.initialize.apply(this, arguments);
	this._spriteChoices = [];
};

Window_PictureChoiceList.prototype.updatePlacement = function() {
	this.width = this.windowWidth();
	this.height = this.windowHeight();
	this.x = (Graphics.boxWidth - this.width) / 2;
	this.y = (Graphics.boxHeight - this.height) / 2;
	if(!this._messageWindow.isClosed()) {
		if(this._messageWindow.y > Graphics.boxHeight/2) this.y -= this._messageWindow.height / 2;
		else if(this._messageWindow.y <= 0) this.y += this._messageWindow.height / 2;
	}
};

var _Window_PictureChoiceList_start = Window_PictureChoiceList.prototype.start;
Window_PictureChoiceList.prototype.start = function() {
	this._spriteChoices.forEach(function(sprite) {
		if(sprite) {
			this.removeChild(sprite);
		}
	}, this);
	_Window_PictureChoiceList_start.apply(this, arguments);
};

Window_PictureChoiceList.prototype.windowWidth = function() {
	return $gameMessage.pictureChoiceSize[0];
};

Window_PictureChoiceList.prototype.windowHeight = function() {
	if(!this._messageWindow.isClosed()) {
		return $gameMessage.pictureChoiceSize[1] - this._messageWindow.height;
	}
	return $gameMessage.pictureChoiceSize[1];
};

Window_PictureChoiceList.prototype.maxCols = function() {
	return $gameMessage.pictureChoiceGrid[0];
};

Window_PictureChoiceList.prototype.numVisibleRows = function() {
	return $gameMessage.pictureChoiceGrid[1];
};

Window_PictureChoiceList.prototype.itemHeight = function() {
	return (this.contentsHeight() / this.numVisibleRows());
};

Window_PictureChoiceList.prototype.contentsHeight = Window_Base.prototype.contentsHeight;

var _Window_PictureChoiceList_drawItem = Window_PictureChoiceList.prototype.drawItem;
Window_PictureChoiceList.prototype.drawItem = function(index) {
	var name = this.commandName(index);
	var rect = this.itemRectForText(index);
	if(name.match(/\\picture\[(.*)\]/i)) {
		if(this._spriteChoices[index]) this.removeChild(this._spriteChoices[index]);
		var imageName = String(RegExp.$1);
		var bit = _.loadPicture(imageName);
		var sprite = new Sprite_PictureChoice(bit);
		sprite.x = rect.x + (rect.width/2);
		sprite.y = rect.y + (rect.height/2);
		this._spriteChoices[index] = sprite;
		this.addChild(sprite);
	} else {
		var width = this.textWidthEx(name);
		var bit = new Bitmap(width, this.contents.fontSize + 4);
		var tempCont = this.contents;
		this.contents = bit;
		this.drawTextEx(name, 0, 0);
		this.contents = tempCont;
		var sprite = new Sprite_PictureChoice(bit);
		sprite.x = rect.x + (rect.width/2);
		sprite.y = rect.y + (rect.height/2);
		this._spriteChoices[index] = sprite;
		this.addChild(sprite);
	}
};

Window_PictureChoiceList.prototype.itemTextAlign = function() {
	return 'center';
};

var _Window_PictureChoiceList_update = Window_PictureChoiceList.prototype.update;
Window_PictureChoiceList.prototype.update = function() {
	_Window_PictureChoiceList_update.apply(this, arguments);
	var length = this._spriteChoices.length;
	for(var i = 0; i < length; i++) {
		if(this._spriteChoices[i]) {
			if(this.index() === i) {
				this._spriteChoices[i].updateIncrease();
			} else {
				this._spriteChoices[i].updateDecrease();
			}
		}
	}
};

Window_PictureChoiceList.prototype.close = function() {
	for(var i = 0; i < this._spriteChoices.length; i++) {
		if(this._spriteChoices[i]) {
			if(i === this.index()) {
				this._spriteChoices[i].startConfirm();
			} else {
				this._spriteChoices[i].startDecline();
			}
		}
	}
	Window_ChoiceList.prototype.close.apply(this, arguments);
};

//-----------------------------------------------------------------------------
// Sprite_PictureChoice
//-----------------------------------------------------------------------------

Sprite_PictureChoice.prototype = Object.create(Sprite.prototype);
Sprite_PictureChoice.prototype.constructor = Sprite_PictureChoice;

Sprite_PictureChoice.prototype.initialize = function() {
	Sprite.prototype.initialize.apply(this, arguments);
	this.anchor.x = 0.5;
	this.anchor.y = 0.5;
	this._breath = 1;
	this._direction = 0;
};

Sprite_PictureChoice.prototype.update = function() {
	Sprite.prototype.update.apply(this, arguments);
	if(this._direction) {
		if(this._direction === 1) {
			this.opacity -= (_.close * 100);
			this._breath += _.close;
			this.scale.x = this._breath;
			this.scale.y = this._breath;
			if(this.opacity <= 0) {
				this._direction = 0;
				this.parent.removeChild(this);
			}
		} else if(this._direction === 2) {
			this._breath -= _.confirm;
			this.scale.x = this._breath;
			this.scale.y = this._breath;
			if(this._breath <= 0) {
				this._direction = 0;
				this.parent.removeChild(this);
			}
		}
	}
};

Sprite_PictureChoice.prototype.startConfirm = function() {
	this._direction = 1;
};

Sprite_PictureChoice.prototype.startDecline = function() {
	this._direction = 2;
};

Sprite_PictureChoice.prototype.updateIncrease = function() {
	if(this._breath < _.max) {
		this._breath += _.speed;
		this.scale.x = this._breath;
		this.scale.y = this._breath;
	}
};

Sprite_PictureChoice.prototype.updateDecrease = function() {
	if(this._breath > _.min) {
		this._breath -= _.speed;
		this.scale.x = this._breath;
		this.scale.y = this._breath;
	}
};

})(SRD.PictureChoices);