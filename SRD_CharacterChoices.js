/*:
 * @plugindesc Allows the use of the "Show Choices" event to have the Player to select an animated Character.
 * @author SumRndmDde
 *
 * @param Walking Speed
 * @desc The rate of the Character walking animation for the Characters shown. Lower numbers are faster; higher, slower.
 * @default 15
 *
 * @param Character Padding
 * @desc The space around the Character sprites.
 * Default is 18.
 * @default 18
 *
 * @param Sprite Width
 * @desc If you are using Character sprites that are different than the normal size, input their width here.
 * @default 48
 *
 * @param Sprite Height
 * @desc If you are using Character sprites that are different than the normal size, input their height here.
 * @default 48
 *
 * @param X Offset
 * @desc This value is added to the x position of the Character sprites.
 * @default 12
 *
 * @param Y Offset
 * @desc This value is added to the y position of the Character sprites.
 * @default 14
 *
 * @help
 *
 * Character Choices
 * Version 1.00
 * SumRndmDde
 *
 *
 * Using this Plugin, you can allow the player to select a Character
 * from a list of available characters.
 *
 * You can set an image file that contains Characters and the index of the
 * Character you wish to use within that file.
 *
 * For example, a choice can be set to "Actor1" and index 0.
 * Then Harold's walking sprite will be shown on the choice.
 *
 *
 * ==========================================================================
 *  How to Use the Plugin
 * ==========================================================================
 *
 * To start off, use the Plugin Command:
 *
 *  StartCharacterChoices
 *
 *
 * Next, create a "Show Choices" event.
 * Within each "choice" you wish to use, input the following:
 *
 *  filename index
 *
 *
 * This will make it so that specific choice will display a walking 
 * Character sprite.
 *
 * filename = name of file you wish to use
 * index = index of the Character in the file (input number from 0 to 7)
 * 
 * The file must be in /img/characters/ with all the other Characte image
 * files.
 *
 * Examples:
 *
 *  Actor1 0
 *  Actor3 2
 *  People1 4
 *  Monster 7
 *  
 *
 * ==========================================================================
 *  Parameters
 * ==========================================================================
 *
 * You can also use Parameters to set the walking speed of the walking 
 * Character sprites show on the choices.
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
SRD.CharacterChoices = SRD.CharacterChoices || {};

var Imported = Imported || {};
Imported["SumRndmDde Character Choices"] = true;

(function(_) {

 	_.speed = Number(PluginManager.parameters('SRD_CharacterChoices')['Walking Speed']);
 	_.pad = Number(PluginManager.parameters('SRD_CharacterChoices')['Character Padding']);
 	_.width = Number(PluginManager.parameters('SRD_CharacterChoices')['Sprite Width']);
 	_.height = Number(PluginManager.parameters('SRD_CharacterChoices')['Sprite Height']);
 	_.x = Number(PluginManager.parameters('SRD_CharacterChoices')['X Offset']);
 	_.y = Number(PluginManager.parameters('SRD_CharacterChoices')['Y Offset']);

	//-----------------------------------------------------------------------------
	// Game_Message
	//-----------------------------------------------------------------------------

	var _Game_Message_clear = Game_Message.prototype.clear;
	Game_Message.prototype.clear = function() {
	    _Game_Message_clear.call(this);
	    this._isCharacterChoices = false;
	};

	Game_Message.prototype.setCharacterChoices = function(boolean) {
	    this._isCharacterChoices = boolean;
	};

	Game_Message.prototype.getCharacterChoices = function() {
	    return this._isCharacterChoices;
	};

	//-----------------------------------------------------------------------------
	// Game_Interpreter
	//-----------------------------------------------------------------------------

	var _Game_Interpreter_pluginCommand = Game_Interpreter.prototype.pluginCommand;
	Game_Interpreter.prototype.pluginCommand = function(command, args) {
	    _Game_Interpreter_pluginCommand.call(this, command, args);
	    if(command.trim().toLowerCase() === 'startcharacterchoices') {
	    	$gameMessage.setCharacterChoices(true);
	    } else if(command.trim().toLowerCase() === 'cancelcharacterchoices') {
	    	$gameMessage.setCharacterChoices(false);
	    }
	};

	//-----------------------------------------------------------------------------
	// Window_Message
	//-----------------------------------------------------------------------------

	var _Window_Message_subWindows = Window_Message.prototype.subWindows;
	Window_Message.prototype.subWindows = function() {
		var temp = _Window_Message_subWindows.call(this);
	    temp.push(this._characterChoiceWindow);
	    return temp;
	};

	var _Window_Message_createSubWindows = Window_Message.prototype.createSubWindows;
	Window_Message.prototype.createSubWindows = function() {
	    _Window_Message_createSubWindows.call(this);
	    this._characterChoiceWindow = new Window_CharacterChoiceList(this);
	};

	var _Window_Message_isAnySubWindowActive = Window_Message.prototype.isAnySubWindowActive;
	Window_Message.prototype.isAnySubWindowActive = function() {
	    return (_Window_Message_isAnySubWindowActive.call(this) || this._characterChoiceWindow.active);
	};

	var _Window_Message_startInput = Window_Message.prototype.startInput;
	Window_Message.prototype.startInput = function() {
		if($gameMessage.isChoice() && $gameMessage.getCharacterChoices()) {
			this._characterChoiceWindow.start();
			return true;
		} else {
			return _Window_Message_startInput.call(this);
		}
	};

	//-----------------------------------------------------------------------------
	// Window_CharacterChoiceList
	//-----------------------------------------------------------------------------

	function Window_CharacterChoiceList() {
	    this.initialize.apply(this, arguments);
	}

	Window_CharacterChoiceList.prototype = Object.create(Window_HorzCommand.prototype);
	Window_CharacterChoiceList.prototype.constructor = Window_CharacterChoiceList;

	Window_CharacterChoiceList.prototype.initialize = function(messageWindow) {
	    this._messageWindow = messageWindow;
	    Window_HorzCommand.prototype.initialize.call(this, 0, 0);
	    this.openness = 0;
	    this.deactivate();
	    this._background = 0;
	    this._animationIndex = 1;
	    this._frameIndex = 0;
	};

	Window_CharacterChoiceList.prototype.start = function() {
		this.updatePlacement();
	    this.updateBackground();
	    this.refresh();
	    this.selectDefault();
	    this.open();
	    this.activate();
	};

	var _Window_CharacterChoiceList_update = Window_CharacterChoiceList.prototype.update;
	Window_CharacterChoiceList.prototype.update = function() {
	    _Window_CharacterChoiceList_update.call(this);
	    if(this._frameIndex === _.speed) {
	    	this._animationIndex++;
	    	if(this._animationIndex > 2) this._animationIndex = -1;
	    	this._frameIndex = 0;
	    }
	    this._frameIndex++;
	    this.drawAllItems();
	};

	Window_CharacterChoiceList.prototype.updatePlacement = function() {
	    var positionType = $gameMessage.choicePositionType();
	    var messageY = this._messageWindow.y;
	    this.width = this.windowWidth();
	    this.height = this.windowHeight();
	    switch (positionType) {
	    case 0:
	        this.x = 0;
	        break;
	    case 1:
	        this.x = (Graphics.boxWidth - this.width) / 2;
	        break;
	    case 2:
	        this.x = Graphics.boxWidth - this.width;
	        break;
	    }
	    if (messageY >= Graphics.boxHeight / 2) {
	        this.y = messageY - this.height;
	    } else {
	        this.y = messageY + this._messageWindow.height;
	    }
	};

	Window_HorzCommand.prototype.maxCols = function() {
	    return 6;
	};

	Window_CharacterChoiceList.prototype.windowWidth = function() {
	    return (this.itemWidth() * $gameMessage.choices().length) + (this.standardPadding() * 2) + 
	    	(this.spacing() * ($gameMessage.choices().length - 1));
	};

	Window_CharacterChoiceList.prototype.windowHeight = function() {
	    return this.itemHeight() + (this.standardPadding() * 2);
	};

	Window_CharacterChoiceList.prototype.itemHeight = function() {
		return _.height + (this.characterPadding() * 2);
	};

	Window_CharacterChoiceList.prototype.itemWidth = function() {
		return _.width + (this.characterPadding() * 2);
	};

	Window_CharacterChoiceList.prototype.characterPadding = function() {
		return _.pad;
	};

	Window_CharacterChoiceList.prototype.selectDefault = function() {
	    this.select($gameMessage.choiceDefaultType());
	};

	Window_CharacterChoiceList.prototype.updateBackground = function() {
	    this._background = $gameMessage.choiceBackground();
	    this.setBackgroundType(this._background);
	};

	Window_CharacterChoiceList.prototype.textWidthEx = function(text) {
	    return this.drawTextEx(text, 0, this.contents.height);
	};

	Window_CharacterChoiceList.prototype.makeCommandList = function() {
	    var choices = $gameMessage.choices();
	    for (var i = 0; i < choices.length; i++) {
	        this.addCommand(choices[i], 'choice');
	    }
	    //this.width = this.windowWidth;
	};

	var _Window_CharacterChoiceList_drawAllItems = Window_CharacterChoiceList.prototype.drawAllItems;
	Window_CharacterChoiceList.prototype.drawAllItems = function() {
		this.contents.clear();
	    _Window_CharacterChoiceList_drawAllItems.call(this);
	};

	Window_CharacterChoiceList.prototype.drawItem = function(index) {
	    var rect = this.itemRectForText(index);
	    var name = this.commandName(index);
	    var data = name.match(/(.*)[ ](\d+)/im);
	    if(data) this.drawCharacter(data[1], data[2], rect.x + _.x, rect.y + _.y);
	};

	Window_CharacterChoiceList.prototype.drawCharacter = function(characterName, characterIndex, x, y) {
	    var bitmap = ImageManager.loadCharacter(characterName);
	    var big = ImageManager.isBigCharacter(characterName);
	    var pw = bitmap.width / (big ? 3 : 12);
	    var ph = bitmap.height / (big ? 4 : 8);
	    var n = characterIndex;
	    var index = (this._animationIndex === 2) ? 0 : this._animationIndex;
	    var sx = (n % 4 * 3 + 1) * pw + (index * _.width);
	    var sy = (Math.floor(n / 4) * 4) * ph;
	    this.contents.blt(bitmap, sx, sy, pw, ph, x, y);
	};

	Window_CharacterChoiceList.prototype.isCancelEnabled = function() {
	    return $gameMessage.choiceCancelType() !== -1;
	};

	Window_CharacterChoiceList.prototype.isOkTriggered = function() {
	    return Input.isTriggered('ok');
	};

	Window_CharacterChoiceList.prototype.callOkHandler = function() {
	    $gameMessage.onChoice(this.index());
	    this._messageWindow.terminateMessage();
	    this.close();
	};

	Window_CharacterChoiceList.prototype.callCancelHandler = function() {
	    $gameMessage.onChoice($gameMessage.choiceCancelType());
	    this._messageWindow.terminateMessage();
	    this.close();
	};

	var _Window_CharacterChoiceList_close = Window_CharacterChoiceList.prototype.close;
	Window_CharacterChoiceList.prototype.close = function() {
	    _Window_CharacterChoiceList_close.call(this);
	    $gameMessage.setCharacterChoices(false);
	};

})(SRD.CharacterChoices);