/*:
 * @plugindesc Gives more options for one's Game Over scene. Common Events can be called and a Retry function has been added.
 * @author SumRndmDde
 *
 * @param Default Image
 * @desc Default image used for the "Game Over" scene from 
 * /img/SumRndmDde/gameover/. Leave blank for default.
 * @default
 *
 * @param == Command Window ==
 * @default
 *
 * @param Use Command Window
 * @desc If 'true', then the Game Over Command Window will be displayed at the end of the Game Over scene.
 * @default true
 *
 * @param Command Window Phase
 * @desc This is when the Command Window opens. Choices are:
 *  start  |  middle  |  end
 * @default end
 *
 * @param Allow Retry Command
 * @desc If 'true', then players will be able to select the "Retry" command and restart the battle from the beginning.
 * @default true
 *
 * @param Command Window X
 * @desc The X position of the Game Over Command Window. This can be a number or JavaScript code.
 * @default (Graphics.boxWidth - this._commandWindow.width) / 2
 *
 * @param Command Window Y
 * @desc The Y position of the Game Over Command Window. This can be a number or JavaScript code.
 * @default (Graphics.boxHeight - this._commandWindow.height) / 2
 *
 * @param == Command Texts ==
 * @default
 *
 * @param Retry Command Text
 * @desc The text used for the Retry Command on the Game Over Command Window.
 * @default Retry Battle
 *
 * @param Load Command Text
 * @desc The text used for the Load Command on the Game Over Command Window.
 * @default Load Game
 *
 * @param Title Command Text
 * @desc The text used for the Title Command on the Game Over Command Window.
 * @default Return to Title
 *
 * @param == Command Events ==
 * @default
 *
 * @param Start Common Event
 * @desc Enter the ID of the Common Event intended to play at the start of the Game Over scene. Input 0 to disallow.
 * @default 0
 *
 * @param Middle Common Event
 * @desc Enter the ID of the Common Event intended to play in the middle of the Game Over scene. Input 0 to disallow.
 * @default 0
 *
 * @param End Common Event
 * @desc Enter the ID of the Common Event intended to play at the end of the Game Over scene. Input 0 to disallow.
 * @default 0
 *
 * @help
 *
 * Game Over Core
 * Version 1.07
 * SumRndmDde
 *
 *
 * This plugin gives more options for one's Game Over scene. Common Events can 
 * be called and a command window has been added, allowing players to load the 
 * game, retry, or return the title screen.
 *
 *
 * ==============================================================================
 *  Plugin Commands
 * ==============================================================================
 *
 * Various properties of the Game Over scene can be manipulated through
 * certain Plugin Commands. Here is a list of them:
 *
 *
 *   SetGameOverImage [filename]
 *
 * This sets the Game Over image to a specific file stored in:
 * /img/SumRndmDde/gameover/
 *
 *
 *   SetGameOverstartCommonEvent [id]
 *
 * This sets the Common Event ID of the Game Over Start Common Event.
 * Set to 0 in order to disallow.
 *
 *
 *   SetGameOverMiddleCommonEvent [id]
 *
 * This sets the Common Event ID of the Game Over Middle Common Event.
 * Set to 0 in order to disallow.
 *
 *
 *   SetGameOverEndCommonEvent [id]
 *
 * This sets the Common Event ID of the Game Over End Common Event.
 * Set to 0 in order to disallow.
 *
 *
 *   ResetGameOverImage
 *
 * Resets the Game Over Image to the default specified in the Parameters.
 *
 *
 *   ResetGameOverCommonEvents
 *
 * Resets all of the Game Over Common Events back to their defaults specified
 * within the Parameters.
 *
 *
 * ==============================================================================
 *  Force Retry Battle
 * ==============================================================================
 *
 * If you wish to have a battle retry evented, use the following Plugin Command
 * to force a battle retry:
 *
 *   RetryBattle
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
SRD.GameOverCore = SRD.GameOverCore || {};

var Imported = Imported || {};
Imported["SumRndmDde Game Over Core"] = 1.07;

function Window_GameOverCommand() {
	this.initialize.apply(this, arguments);
}

(function(_) {
	
"use strict";

//-----------------------------------------------------------------------------
// SRD.GameOverCore
//-----------------------------------------------------------------------------

const params = PluginManager.parameters('SRD_GameOverCore');

_.image = String(params['Default Image']);
_.command = String(params['Use Command Window']).trim().toLowerCase() === 'true';
_.allowRetry = String(params['Allow Retry Command']).trim().toLowerCase() === 'true';
_.comX = String(params['Command Window X']);
_.comY = String(params['Command Window Y']);

_.retryText = String(params['Retry Command Text']);
_.loadText = String(params['Load Command Text']);
_.titleText = String(params['Title Command Text']);

_.start = parseInt(params['Start Common Event']);
_.middle = parseInt(params['Middle Common Event']);
_.end = parseInt(params['End Common Event']);

_.comPhaseText = String(params['Command Window Phase']).trim().toLowerCase();
_.comPhase = 2;
switch(_.comPhaseText) {
	case 'start':
		_.comPhase = 0;
		break;
	case 'middle':
		_.comPhase = 1;
		break;
	default:
		_.comPhase = 2;
}

_.loadImage = function(filename, hue) {
	return ImageManager.loadBitmap('img/SumRndmDde/gameover/', filename, hue, false);
};

_.loadBackgroundImage = function() {
	return this.loadImage($gameSystem._GOCGameOver);
};

_.retryBattle = function() {
	if($gameTemp._setUpRetry) {
		BattleManager.playBattleBgm();
		BattleManager.setup($gameTemp._setUpRetry[0], $gameTemp._setUpRetry[1], $gameTemp._setUpRetry[2]);
		$gameParty = JsonEx.makeDeepCopy($gameTemp._setUpRetry[3]);
		$gameActors = JsonEx.makeDeepCopy($gameTemp._setUpRetry[4]);
		$gamePlayer.makeEncounterCount();
		SceneManager.goto(Scene_Battle);
	}
};

_.informInvalidCommonEvent = [
	{"code":355,"indent":0,"parameters":["$gameMessage.add('\\\\>SumRndmDde:');"]},
	{"code":655,"indent":0,"parameters":["$gameMessage.add('Yo.\\\\! You\\\\..\\\\..\\\\..\\\\. inputted an invalid');"]},
	{"code":655,"indent":0,"parameters":["$gameMessage.add('Common Event in the SRD_GameOverCore.');"]},
	{"code":655,"indent":0,"parameters":["$gameMessage.add('\\\\!Please fix! :D');"]},
	{"code":655,"indent":0,"parameters":["$gameMessage.add('\\\\>SumRndmDde:');"]},
	{"code":655,"indent":0,"parameters":["$gameMessage.add('Otherwise\\\\..\\\\..\\\\..\\\\. I\\'ll crash your game!');"]},
	{"code":655,"indent":0,"parameters":["this.setWaitMode('message');"]},
	{"code":108,"indent":0,"parameters":["yo"]},
	{"code":355,"indent":0,"parameters":["SceneManager.stop();"]},
	{"code":655,"indent":0,"parameters":["Graphics.printError('LOL', 'I crashed your game!\\nMwahahahaha!!!');"]},
	{"code":655,"indent":0,"parameters":["AudioManager.stopAll();"]},{"code":0,"indent":0,"parameters":[]}
];

_.specialCommand201 = function() {
	if (!$gameMessage.isBusy()) {
		SceneManager.goto(Scene_Map);
		var mapId, x, y;
		if (this._params[0] === 0) {  // Direct designation
			mapId = this._params[1];
			x = this._params[2];
			y = this._params[3];
		} else {  // Designation with variables
			mapId = $gameVariables.value(this._params[1]);
			x = $gameVariables.value(this._params[2]);
			y = $gameVariables.value(this._params[3]);
		}
		$gamePlayer.reserveTransfer(mapId, x, y, this._params[4], this._params[5]);
		this.setWaitMode('transfer');
		this._index++;
	}
	return false;
};

//-----------------------------------------------------------------------------
// BattleManager
//-----------------------------------------------------------------------------

_.Game_Interpreter_command301 = Game_Interpreter.prototype.command301;
Game_Interpreter.prototype.command301 = function() {
	if(!$gameParty.inBattle() && SceneManager._scene.constructor !== Scene_Gameover) {
		$gameTemp._setUpRetry = null;
	}
	return _.Game_Interpreter_command301.apply(this, arguments);
};

_.BattleManager_setup = BattleManager.setup;
BattleManager.setup = function(troopId, canEscape, canLose) {
	if(!$gameTemp._setUpRetry) {
		$gameTemp._setUpRetry = [
			troopId,
			canEscape,
			canLose,
			JsonEx.makeDeepCopy($gameParty),
			JsonEx.makeDeepCopy($gameActors)
		];
	}
	_.BattleManager_setup.apply(this, arguments);
};

_.BattleManager_saveBgmAndBgs = BattleManager.saveBgmAndBgs;
BattleManager.saveBgmAndBgs = function() {
    _.BattleManager_saveBgmAndBgs.apply(this, arguments);
    this._superMapBgm = this._mapBgm;
    this._superMapBgs = this._mapBgs;
};

_.BattleManager_processVictory = BattleManager.processVictory;
BattleManager.processVictory = function() {
	_.BattleManager_processVictory.apply(this, arguments);
	$gameTemp._setUpRetry = null;
};

_.BattleManager_processAbort = BattleManager.processAbort;
BattleManager.processAbort = function() {
	_.BattleManager_processAbort.apply(this, arguments);
	$gameTemp._setUpRetry = null;
};

_.BattleManager_processDefeat = BattleManager.processDefeat;
BattleManager.processDefeat = function() {
	_.BattleManager_processDefeat.apply(this, arguments);
	if(this._canLose) $gameTemp._setUpRetry = null;
};

_.BattleManager_replayBgmAndBgs = BattleManager.replayBgmAndBgs;
BattleManager.replayBgmAndBgs = function() {
	if($gameTemp._setUpRetry) {
		if(this._superMapBgm) {
			AudioManager.replayBgm(this._superMapBgm);
			this._superMapBgm = null;
		} else {
			AudioManager.stopBgm();
		}
		if(this._superMapBgs) {
			AudioManager.replayBgs(this._superMapBgs);
			this._superMapBgs = null;
		}
	} else {
		_.BattleManager_replayBgmAndBgs.apply(this, arguments);
	}
};

//-----------------------------------------------------------------------------
// Game_Temp
//-----------------------------------------------------------------------------

_.Game_Temp_initialize = Game_Temp.prototype.initialize;
Game_Temp.prototype.initialize = function() {
	_.Game_Temp_initialize.apply(this, arguments);
	this._setUpRetry = null;
};

//-----------------------------------------------------------------------------
// Game_System
//-----------------------------------------------------------------------------

_.Game_System_initialize = Game_System.prototype.initialize;
Game_System.prototype.initialize = function() {
	_.Game_System_initialize.apply(this, arguments);
	this.resetGameOverImage();
	this.resetGameOverCommonEvents();
};

Game_System.prototype.resetGameOverImage = function() {
	this._GOCGameOver = _.image;
};

Game_System.prototype.resetGameOverCommonEvents = function() {
	this._GOCCommonEvents = [_.start, _.middle, _.end];
};

//-----------------------------------------------------------------------------
// Game_Interpreter
//-----------------------------------------------------------------------------

_.Game_Interpreter_pluginCommand = Game_Interpreter.prototype.pluginCommand;
Game_Interpreter.prototype.pluginCommand = function(command, args) {
	_.Game_Interpreter_pluginCommand.apply(this, arguments);
	const com = command.trim().toLowerCase();
	if(com === 'setgameoverimage') {
		$gameSystem._GOCGameOver = String(args[0]).trim();
	} else if(com === 'setgameoverstartcommonevent') {
		$gameSystem._GOCCommonEvents[0] = parseInt(args[0]);
	} else if(com === 'setgameovermiddlecommonevent') {
		$gameSystem._GOCCommonEvents[1] = parseInt(args[0]);
	} else if(com === 'setgameoverendcommonevent') {
		$gameSystem._GOCCommonEvents[2] = parseInt(args[0]);
	} else if(com === 'resetgameoverimage') {
		$gameSystem.resetGameOverImage();
	} else if(com === 'resetgameovercommonevents') {
		$gameSystem.resetGameOverCommonEvents();
	} else if(com === 'retrybattle') {
		_.retryBattle();
	}
};

//-----------------------------------------------------------------------------
// Scene_File
//-----------------------------------------------------------------------------

if(Imported.YEP_SaveCore) {

_.Scene_File_createBackground = Scene_File.prototype.createBackground;
Scene_File.prototype.createBackground = function() {
	_.Scene_File_createBackground.apply(this, arguments);
	if($gameTemp._forceSceneLoadBackBlack) {
		this._backgroundSprite.bitmap = new Bitmap(Graphics.boxWidth, Graphics.boxHeight);
		this._backgroundSprite.bitmap.fillRect(0, 0, Graphics.boxWidth, Graphics.boxHeight, "#000000");
		$gameTemp._forceSceneLoadBackBlack = false;
	}
};

}

//-----------------------------------------------------------------------------
// Scene_Gameover
//-----------------------------------------------------------------------------

_.Scene_Gameover_initialize = Scene_Gameover.prototype.initialize;
Scene_Gameover.prototype.initialize = function() {
	_.Scene_Gameover_initialize.apply(this, arguments);
	this._GOCInterpreter = new Game_Interpreter();
	this._GOCInterpreter.command201 = _.specialCommand201;
	this._GOCCommonEvent = 0;
	this._GOCPhase = 0;
	this._GOCOpacitySpeed = 3;
	this._GOCStartGameOver = false;
};

_.Scene_Gameover_create = Scene_Gameover.prototype.create;
Scene_Gameover.prototype.create = function() {
	_.Scene_Gameover_create.apply(this, arguments);
	this.createWindowLayer();
	this.createMessageWindow();
	this.createScrollTextWindow();
	this.createCommandWindow();
	this.createPictures();
	DataManager.loadAllSavefileImages();
	this.createHelpWindow();
	this.createListWindow();
};

_.Scene_Gameover_start = Scene_Gameover.prototype.start;
Scene_Gameover.prototype.start = function() {
	_.Scene_Gameover_start.apply(this, arguments);
	this._listWindow.refresh();
};

//If you're reading this, please don't ask why I made things so confusing
//Let's just say... I wanted to take things a step further... but couldn't T-T
Scene_Gameover.prototype.update = function() {
	if(this.isActive() && !this.isBusy() && this.isTriggered() && this._GOCPhase === 6) {
		this.updatePhase6();
	}
	if(this._fadeSprite.opacity === 0 && this._GOCPhase === 0) {
		this.updatePhase0();
	}
	if(this._GOCPhase === 2) {
		this.updatePhase2();
	}
	if(this._GOCPhase === 3 || this._GOCStartGameOver) {
		this.updatePhase3();
	}
	if(this._GOCPhase === 5) {
		this.updatePhase5();
	}
	this.updateGOCInterpreter();
	Scene_MenuBase.prototype.update.call(this);
};

Scene_Gameover.prototype.updatePhase0 = function() {
	this._GOCPhase = 1;
	this.playCommonEvent($gameSystem._GOCCommonEvents[0]);
};

Scene_Gameover.prototype.updatePhase2 = function() {
	const id = $gameSystem._GOCCommonEvents[1];
	this._GOCPhase = 3;
	AudioManager.playMe($dataSystem.gameoverMe);
};

Scene_Gameover.prototype.updatePhase3 = function() {
	this._backSprite.opacity += this._GOCOpacitySpeed;
	if(this._backSprite.opacity >= 255) {
		if(this._GOCPhase < 4) this._GOCPhase = 4;
		this._GOCStartGameOver = false;
		this.playCommonEvent($gameSystem._GOCCommonEvents[1]);
	}
};

Scene_Gameover.prototype.updatePhase5 = function() {
	this._backSprite.opacity -= this._GOCOpacitySpeed;
	if(this._backSprite.opacity <= 0) {
		AudioManager.stopAll();
		this._GOCPhase = 7;
		this.playCommonEvent($gameSystem._GOCCommonEvents[2]);
	}
};

Scene_Gameover.prototype.updatePhase6 = function() {
	this._GOCPhase = 5;
};

Scene_Gameover.prototype.playGameoverMusic = function() {
	AudioManager.stopBgm();
	AudioManager.stopBgs();
};

Scene_Gameover.prototype.createBackground = function() {
	this._backSprite = new Sprite();
	if(!$gameSystem._GOCCommonEvents) $gameSystem.resetGameOverCommonEvents();
	this._backSprite.opacity = ($gameSystem._GOCCommonEvents[0] === 0) ? 255 : 0;
	this._backSprite.bitmap = ($gameSystem._GOCGameOver) ? _.loadBackgroundImage() : ImageManager.loadSystem("GameOver");
	this.addChild(this._backSprite);
};

Scene_Gameover.prototype.createMessageWindow = function() {
	this._messageWindow = new Window_Message();
	this.addWindow(this._messageWindow);
	this._messageWindow.subWindows().forEach(function(window) {
		this.addWindow(window);
	}, this);
};

Scene_Gameover.prototype.createScrollTextWindow = function() {
	this._scrollTextWindow = new Window_ScrollText();
	this.addWindow(this._scrollTextWindow);
};

Scene_Gameover.prototype.createPictures = function() {
	var width = Graphics.boxWidth;
	var height = Graphics.boxHeight;
	var x = (Graphics.width - width) / 2;
	var y = (Graphics.height - height) / 2;
	this._pictureContainer = new Sprite();
	this._pictureContainer.setFrame(x, y, width, height);
	for (var i = 1; i <= $gameScreen.maxPictures(); i++) {
		this._pictureContainer.addChild(new Sprite_Picture(i));
	}
	this.addChild(this._pictureContainer);
};

Scene_Gameover.prototype.createCommandWindow = function() {
	this._commandWindow = new Window_GameOverCommand(0, 0);
	this._commandWindow.x = eval(_.comX);
	this._commandWindow.y = eval(_.comY);
	this._commandWindow.setHandler('retry', this.retryCommand.bind(this));
	this._commandWindow.setHandler('load', this.loadCommand.bind(this));
	this._commandWindow.setHandler('title', this.titleCommand.bind(this));
	this._commandWindow.deactivate();
	this.addWindow(this._commandWindow);
};

Scene_Gameover.prototype.terminate = function() {
	Scene_MenuBase.prototype.terminate.call(this);
	if (this._loadSuccess) {
		$gameSystem.onAfterLoad();
	}
};

Scene_Gameover.prototype.helpWindowText = Scene_Load.prototype.helpWindowText;
Scene_Gameover.prototype.firstSavefileIndex = Scene_Load.prototype.firstSavefileIndex;
Scene_Gameover.prototype.onSavefileOk = Scene_Load.prototype.onSavefileOk;
Scene_Gameover.prototype.onLoadSuccess = function() {
	$gameTemp._setUpRetry = null;
	Scene_Load.prototype.onLoadSuccess.apply(this, arguments);
};
Scene_Gameover.prototype.onLoadFailure = Scene_Load.prototype.onLoadFailure;
Scene_Gameover.prototype.reloadMapIfUpdated = Scene_Load.prototype.reloadMapIfUpdated;
Scene_Gameover.prototype.savefileId = Scene_File.prototype.savefileId;
Scene_Gameover.prototype.createHelpWindow = function() {
	Scene_File.prototype.createHelpWindow.apply(this, arguments);
	this._helpWindow.openness = 0;
};

Scene_Gameover.prototype.createListWindow = function() {
	var x = 0;
	var y = this._helpWindow.height;
	var width = Graphics.boxWidth;
	var height = Graphics.boxHeight - y;
	this._listWindow = new Window_SavefileList(x, y, width, height);
	this._listWindow.setHandler('ok',     this.onSavefileOk.bind(this));
	this._listWindow.setHandler('cancel', this.cancelLoad.bind(this));
	this._listWindow.select(this.firstSavefileIndex());
	this._listWindow.setTopRow(this.firstSavefileIndex() - 2);
	this._listWindow.setMode('load');
	this._listWindow.refresh();
	this._listWindow.openness = 0;
	this.addWindow(this._listWindow);
};

Scene_Gameover.prototype.retryCommand = function() {
	_.retryBattle();
};

Scene_Gameover.prototype.loadCommand = function() {
	if(Imported.YEP_SaveCore) {
		$gameTemp._forceSceneLoadBackBlack = true;
		SceneManager.push(Scene_Load);
	} else {
		this._helpWindow.open();
		this._listWindow.activate();
		this._listWindow.open();
	}
};

Scene_Gameover.prototype.cancelLoad = function() {
	this._helpWindow.close();
	this._listWindow.close();
	this._listWindow.deactivate();
	this._commandWindow.activate();
};

Scene_Gameover.prototype.titleCommand = function() {
	$gameTemp._setUpRetry = null;
	SceneManager.goto(Scene_Title);
};

Scene_Gameover.prototype.openCommandWindow = function() {
	this._commandWindow.open();
	this._commandWindow.activate();
};

Scene_Gameover.prototype.gotoTitle = function() {
	if(_.command) {
		this.openCommandWindow();
	} else {
		this.titleCommand();
	}
};

Scene_Gameover.prototype.playCommonEvent = function(ceID) {
	this._GOCCommonEvent = ceID;
	if(ceID === 0) {
		this.onGOCInterpreterEnd();
	}
};

Scene_Gameover.prototype.updateGOCInterpreter = function() {
	if(this._GOCInterpreter && this._GOCCommonEvent !== 0) {
		if(!this._GOCInterpreter.isRunning()) {
			if(this._GOCCommonEvent > -1) {
				const event = $dataCommonEvents[this._GOCCommonEvent];
				if(event) {
					this._GOCInterpreter.setup(event.list, this._eventId);
					this._GOCCommonEvent = -1;
				} else {
					this._GOCInterpreter.setup(_.informInvalidCommonEvent, this._eventId);
					this._GOCCommonEvent = -1;
				}
			} else {
				this._GOCCommonEvent = 0;
				this.onGOCInterpreterEnd();
				return;
			}
		}
		this._GOCInterpreter.update();
	}
};

Scene_Gameover.prototype.onGOCInterpreterEnd = function() {
	if(this._GOCPhase === 1) {
		if(_.comPhase === 0) {
			this.gotoTitle();
		} else {
			this._GOCPhase = 2;
		}
	}
	if(this._GOCPhase === 7 || this._GOCPhase === 6) {
		this.gotoTitle();
	}
	if(this._GOCPhase === 4) {
		if(_.comPhase === 1) {
			this.gotoTitle();
		} else {
			this._GOCPhase = 6;
		}
	}
};

//-----------------------------------------------------------------------------
// Window_GameOverCommand
//-----------------------------------------------------------------------------

Window_GameOverCommand.prototype = Object.create(Window_Command.prototype);
Window_GameOverCommand.prototype.constructor = Window_GameOverCommand;

Window_GameOverCommand.prototype.initialize = function(x, y) {
	Window_Command.prototype.initialize.call(this, x, y);
	this.openness = 0;
};

Window_GameOverCommand.prototype.windowWidth = function() {
	return 420;
};

Window_GameOverCommand.prototype.numVisibleRows = function() {
	return this.maxItems();
};

Window_GameOverCommand.prototype.itemTextAlign = function() {
	return 'center';
};

Window_GameOverCommand.prototype.makeCommandList = function() {
	if(_.allowRetry) this.addCommand(_.retryText, 'retry', !!$gameTemp._setUpRetry);
	this.addCommand(_.loadText, 'load');
	this.addCommand(_.titleText, 'title');
};

})(SRD.GameOverCore);