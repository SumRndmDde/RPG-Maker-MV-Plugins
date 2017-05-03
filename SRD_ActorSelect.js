/*:
 * @plugindesc Allows you to call a screen to select an Actor
 * @author SumRndmDde
 *
 * @param Num of Visible Rows
 * @desc The number of rows on the window. Can be JavaScript eval.
 * It is OK to have less rows than Actors in Party.
 * @default 4
 *
 * @param X Position
 * @desc The x-position of the Actor Select window. 
 * Can be a JavaScript eval. Default is 0. 
 * @default 0
 *
 * @param Y Position
 * @desc The y-position of the Actor Select window.
 * Can be a JavaScript eval. Default is 0. 
 * @default 0
 *
 * @param Window Width
 * @desc The width of the Actor Select window.
 * Can be a JavaScript eval. Default is Graphics.boxWidth.
 * @default Graphics.boxWidth
 *
 * @param Window Height
 * @desc The width of the Actor Select window.
 * Can be a JavaScript eval. Default is Graphics.boxHeight.
 * @default Graphics.boxHeight
 *
 * @param Draw Face?
 * @desc Input 'true' or 'false' to select whether or not the Actor face will be drawn in the Actor Select Window.
 * @default true
 *
 * @param Draw Name?
 * @desc Input 'true' or 'false' to select whether or not the Actor name will be drawn in the Actor Select Window.
 * @default true
 *
 * @param Draw Icons?
 * @desc Input 'true' or 'false' to select whether or not the Actor icons will be drawn in the Actor Select Window.
 * @default true
 *
 * @param Draw Level?
 * @desc Input 'true' or 'false' to select whether or not the Actor level will be drawn in the Actor Select Window.
 * @default true
 *
 * @param Draw Class?
 * @desc Input 'true' or 'false' to select whether or not the Actor class will be drawn in the Actor Select Window.
 * @default true
 *
 * @param Draw HP?
 * @desc Input 'true' or 'false' to select whether or not the Actor hp will be drawn in the Actor Select Window.
 * @default true
 *
 * @param Draw MP?
 * @desc Input 'true' or 'false' to select whether or not the Actor mp will be drawn in the Actor Select Window.
 * @default true
 *
 * @help
 *
 * Actor Select
 * Version 1.00
 * SumRndmDde
 *
 *
 * Allows you to call a screen to select an Actor.
 *
 *
 * ==========================================================================
 * Plugin Commands
 * ==========================================================================
 *
 *
 *    OpenActorSelect x
 * =======================
 *
 * This command opens the Actor Select screen.
 * The ID of the Actor selected will be stored in Variable ID x.
 *
 * For example, OpenActorSelect 2 will open the Actor Select screen and store
 * the result in Variable ID 2.
 *
 *
 *
 *    OpenActorSelect skill
 * ===========================
 *
 * This command opens the Actor Select screen.
 * Once an Actor is selected, the Player will be brought to 
 * that Actor's Skill menu.
 *
 *
 *
 *    OpenActorSelect equip
 * ===========================
 *
 * This command opens the Actor Select screen.
 * Once an Actor is selected, the Player will be brought to 
 * that Actor's Equip menu.
 *
 *
 *
 *    OpenActorSelect status
 * ============================
 *
 * This command opens the Actor Select screen.
 * Once an Actor is selected, the Player will be brought to 
 * that Actor's Status menu.
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
SRD.ActorSelect = SRD.ActorSelect || {};

var Imported = Imported || {};
Imported["SumRndmDde Actor Select"] = true;

(function(_) {

	_.rows = String(PluginManager.parameters('SRD_ActorSelect')['Num of Visible Rows']);
	_.x = String(PluginManager.parameters('SRD_ActorSelect')['X Position']);
	_.y = String(PluginManager.parameters('SRD_ActorSelect')['Y Position']);
	_.width = String(PluginManager.parameters('SRD_ActorSelect')['Window Width']);
	_.height = String(PluginManager.parameters('SRD_ActorSelect')['Window Height']);

	_.drawFace = String(PluginManager.parameters('SRD_ActorSelect')['Draw Face?']).trim().toLowerCase() === 'true';
	_.drawName = String(PluginManager.parameters('SRD_ActorSelect')['Draw Name?']).trim().toLowerCase() === 'true';
	_.drawIcons = String(PluginManager.parameters('SRD_ActorSelect')['Draw Icons?']).trim().toLowerCase() === 'true';
	_.drawLevel = String(PluginManager.parameters('SRD_ActorSelect')['Draw Level?']).trim().toLowerCase() === 'true';
	_.drawClass = String(PluginManager.parameters('SRD_ActorSelect')['Draw Class?']).trim().toLowerCase() === 'true';
	_.drawHP = String(PluginManager.parameters('SRD_ActorSelect')['Draw HP?']).trim().toLowerCase() === 'true';
	_.drawMP = String(PluginManager.parameters('SRD_ActorSelect')['Draw MP?']).trim().toLowerCase() === 'true';

	//-----------------------------------------------------------------------------
	// Game_Temp
	//-----------------------------------------------------------------------------

	var _Game_Temp_initialize = Game_Temp.prototype.initialize;
	Game_Temp.prototype.initialize = function() {
	    _Game_Temp_initialize.call(this);
	    this._tempVariableStorageforActorId = 0;
	};

	Game_Temp.prototype.getTempVariableStorageforActorId = function() {
		return this._tempVariableStorageforActorId;
	};

	Game_Temp.prototype.setTempVariableStorageforActorId = function(id) {
		this._tempVariableStorageforActorId = id;
	};

	//-----------------------------------------------------------------------------
	// Game_Interpreter
	//-----------------------------------------------------------------------------

	var _Game_Interpreter_pluginCommand = Game_Interpreter.prototype.pluginCommand;
	Game_Interpreter.prototype.pluginCommand = function(command, args) {
	    _Game_Interpreter_pluginCommand.call(this);

	    if(command.trim().toLowerCase() === 'openactorselect') {
	    	if(args.length === 1) {
	    		$gameTemp.setTempVariableStorageforActorId(String(args[0]));
	    		SceneManager.push(Scene_ActorSelect);
	    	}
	    }
	};

	//-----------------------------------------------------------------------------
	// Scene_ActorSelect
	//-----------------------------------------------------------------------------

	function Scene_ActorSelect() {
	    this.initialize.apply(this, arguments);
	}

	Scene_ActorSelect.prototype = Object.create(Scene_MenuBase.prototype);
	Scene_ActorSelect.prototype.constructor = Scene_ActorSelect;

	Scene_ActorSelect.prototype.initialize = function() {
	    Scene_MenuBase.prototype.initialize.call(this);
	};

	Scene_ActorSelect.prototype.create = function() {
	    Scene_MenuBase.prototype.create.call(this);
	    this.createStatusWindow();
	};

	Scene_ActorSelect.prototype.start = function() {
	    Scene_MenuBase.prototype.start.call(this);
	    this._statusWindow.refresh();
	    this._statusWindow.select(0);
	    this.commandPersonal();
	};

	Scene_ActorSelect.prototype.createStatusWindow = function() {
	    this._statusWindow = new Window_ActorSelect(eval(_.x), eval(_.y));
	    this.addWindow(this._statusWindow);
	};

	Scene_ActorSelect.prototype.commandPersonal = function() {
	    this._statusWindow.selectLast();
	    this._statusWindow.activate();
	    this._statusWindow.setHandler('ok',     this.onPersonalOk.bind(this));
	    this._statusWindow.setHandler('cancel', this.onPersonalCancel.bind(this));
	};

	Scene_ActorSelect.prototype.onPersonalOk = function() {
		var id = $gameParty.members()[this._statusWindow.index()].actorId();
		var varId = $gameTemp.getTempVariableStorageforActorId();
		if(varId.match(/\s*skill\s*/i)) {
			$gameParty.setMenuActor($gameActors.actor(Number(id)));
			SceneManager.goto(Scene_Skill);
		} else if(varId.match(/\s*equip\s*/i)) {
			$gameParty.setMenuActor($gameActors.actor(Number(id)));
			SceneManager.goto(Scene_Equip);
		} else if(varId.match(/\s*status\s*/i)) {
			$gameParty.setMenuActor($gameActors.actor(Number(id)));
			SceneManager.goto(Scene_Status);
		} else if(varId.match(/\d+/)) {
			$gameVariables.setValue(Number(varId), id);
			this.popScene();
		}
	};

	Scene_ActorSelect.prototype.onPersonalCancel = function() {
		this.popScene();
	};
	
	//-----------------------------------------------------------------------------
	// Window_ActorSelect
	//-----------------------------------------------------------------------------

	function Window_ActorSelect() {
	    this.initialize.apply(this, arguments);
	}

	Window_ActorSelect.prototype = Object.create(Window_Selectable.prototype);
	Window_ActorSelect.prototype.constructor = Window_ActorSelect;

	Window_ActorSelect.prototype.initialize = function(x, y) {
	    var width = this.windowWidth();
	    var height = this.windowHeight();
	    Window_Selectable.prototype.initialize.call(this, x, y, width, height);
	    this._formationMode = false;
	    this._pendingIndex = -1;
	    this.loadImages();
	    this.refresh();
	};

	Window_ActorSelect.prototype.windowWidth = function() {
	    return eval(_.width);
	};

	Window_ActorSelect.prototype.windowHeight = function() {
	    return eval(_.height);
	};

	Window_ActorSelect.prototype.maxItems = function() {
	    return $gameParty.size();
	};

	Window_ActorSelect.prototype.itemHeight = function() {
	    var clientHeight = this.height - this.padding * 2;
	    return Math.floor(clientHeight / this.numVisibleRows());
	};

	Window_ActorSelect.prototype.numVisibleRows = function() {
	    return eval(_.rows);
	};

	Window_ActorSelect.prototype.loadImages = function() {
	    $gameParty.members().forEach(function(actor) {
	        ImageManager.loadFace(actor.faceName());
	    }, this);
	};

	Window_ActorSelect.prototype.drawItem = function(index) {
	    this.drawItemBackground(index);
	    if(_.drawFace) this.drawItemImage(index);
	    this.drawItemStatus(index);
	};

	Window_ActorSelect.prototype.drawItemBackground = function(index) {
	    if (index === this._pendingIndex) {
	        var rect = this.itemRect(index);
	        var color = this.pendingColor();
	        this.changePaintOpacity(false);
	        this.contents.fillRect(rect.x, rect.y, rect.width, rect.height, color);
	        this.changePaintOpacity(true);
	    }
	};

	Window_ActorSelect.prototype.drawItemImage = function(index) {
	    var actor = $gameParty.members()[index];
	    var rect = this.itemRect(index);
	    this.changePaintOpacity(actor.isBattleMember());
	    this.drawActorFace(actor, rect.x + 1, rect.y + 1, Window_Base._faceWidth, Window_Base._faceHeight);
	    this.changePaintOpacity(true);
	};

	Window_ActorSelect.prototype.drawItemStatus = function(index) {
	    var actor = $gameParty.members()[index];
	    var rect = this.itemRect(index);
	    var x = rect.x + 162;
	    var y = rect.y + rect.height / 2 - this.lineHeight() * 1.5;
	    var width = rect.width - x - this.textPadding();
	    var lineHeight = this.lineHeight();
	    var x2 = x + 180;
	    var width2 = Math.min(200, width - 180 - this.textPadding());
	    if(_.drawName) this.drawActorName(actor, x, y);
	    if(_.drawLevel) this.drawActorLevel(actor, x, y + lineHeight * 1);
	    if(_.drawIcons) this.drawActorIcons(actor, x, y + lineHeight * 2);
	    if(_.drawClass) this.drawActorClass(actor, x2, y);
	    if(_.drawHP) this.drawActorHp(actor, x2, y + lineHeight * 1, width2);
	    if(_.drawMP) this.drawActorMp(actor, x2, y + lineHeight * 2, width2);
	};

	Window_ActorSelect.prototype.isCurrentItemEnabled = function() {
	    if (this._formationMode) {
	        var actor = $gameParty.members()[this.index()];
	        return actor && actor.isFormationChangeOk();
	    } else {
	        return true;
	    }
	};

	Window_ActorSelect.prototype.selectLast = function() {
	    this.select($gameParty.menuActor().index() || 0);
	};

	Window_ActorSelect.prototype.pendingIndex = function() {
	    return this._pendingIndex;
	};

	Window_ActorSelect.prototype.setPendingIndex = function(index) {
	    var lastPendingIndex = this._pendingIndex;
	    this._pendingIndex = index;
	    this.redrawItem(this._pendingIndex);
	    this.redrawItem(lastPendingIndex);
	};

})(SRD.ActorSelect)