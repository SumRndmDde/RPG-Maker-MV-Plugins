/*:
 * @plugindesc Alternative Menu Screen Bust Select. Uses busts to select Actors in the menu. It also displays Side View Battlers.
 * @author SumRndmDde
 *
 * @param Show Gold Window
 * @desc Set this to 'true' and the menu will contain the gold window.
 * @default true
 *
 * @param Show SV Window
 * @desc Set this to 'true' and the Side-View Battler window will be visible.
 * @default true
 *
 * @param == Bust Position ==
 * @default
 *
 * @param Bust X Pos
 * @desc By default, the busts are positioned at (0, 0). Using this Parameter, all the busts' default X positions can be set.
 * @default 0
 *
 * @param Bust Y Pos
 * @desc By default, the busts are positioned at (0, 0). Using this Parameter, all the busts' default X positions can be set.
 * @default 0
 *
 * @param == Bust Window ==
 * @default
 *
 * @param Bust Window Rows
 * @desc The amount of rows the Bust Window has.
 * @default 1
 *
 * @param Bust Window Cols
 * @desc The amount of columns the Bust Window has.
 * @default 1
 *
 * @param Bust Window X
 * @desc The X position of the Bust Window.
 * Can be a Number or JavaScript eval.
 * @default 20
 *
 * @param Bust Window Y
 * @desc The Y position of the Bust Window.
 * Can be a Number or JavaScript eval.
 * @default (Graphics.height / 2) - (this._statusWindow.height / 2)
 *
 * @param Bust Window Width
 * @desc The width of the Bust Window.
 * Can be a Number or JavaScript eval.
 * @default (Graphics.width / 2) - 40
 *
 * @param Bust Window Height
 * @desc The height of the Bust Window.
 * Can be a Number or JavaScript eval.
 * @default Graphics.height - 120
 *
 * @param == Command Window ==
 * @default
 *
 * @param Command Window X
 * @desc This is the x position of the Command Window.
 * Can be a Number or JavaScript eval.
 * @default Graphics.width - this._commandWindow.width - 20
 *
 * @param Command Window Y
 * @desc This is the x position of the Command Window.
 * Can be a Number or JavaScript eval.
 * @default (this._statusWindow.y + this._statusWindow.height) - this._commandWindow.height
 * @help
 *
 * @param Max Columns
 * @desc The maximum amount of columns the command window can have.
 * @default 1
 *
 * @param Visible Rows
 * @desc The visible amount of rows the command window will show at once.
 * @default 5
 *
 * @param == HP Window ==
 * @default
 *
 * @param Draw MP Bar
 * @desc Set this to 'true' and the HP Window will also have an MP bar displayed underneath the HP.
 * @default false
 *
 * @param Draw TP Bar
 * @desc Set this to 'true' and the HP Window will also have a TP bar displayed underneath the HP.
 * @default false
 *
 * @param HP Window X
 * @desc This is the x position of the HP Window.
 * Can be a Number or JavaScript eval.
 * @default this._commandWindow.x
 *
 * @param HP Window Y
 * @desc This is the x position of the HP Window.
 * Can be a Number or JavaScript eval.
 * @default ((this._commandWindow.y - (this._goldWindow.y + this._goldWindow.height)) / 2) - (this._hpWindow.height / 2) + (this._goldWindow.y + this._goldWindow.height)
 *
 * @param HP Window Width
 * @desc This is the width of the HP Window. Set this to be larger or smaller depending on screen size. Default is 256.
 * @default 256
 *
 * @param == Battler Window ==
 * @default
 *
 * @param Battler X Pos
 * @desc The X position of the Side-View Battler in the window.
 * @default 6
 *
 * @param Battler Y Pos
 * @desc The Y position of the Side-View Battler in the window.
 * @default 6
 *
 * @param B. Window X
 * @desc The x position of the Battler Window.
 * Can be a Number or JavaScript eval.
 * @default Graphics.width - 128
 *
 * @param B. Window Y
 * @desc The y position of the Battler Window.
 * Can be a Number or JavaScript eval.
 * @default this._hpWindow.y
 *
 * @param B. Window Width
 * @desc The width of the Battler Window.
 * Can be a Number or JavaScript eval.
 * @default this.fittingHeight(2)
 *
 * @param B. Window Height
 * @desc The height of the Battler Window.
 * Can be a Number or JavaScript eval.
 * @default this.fittingHeight(2)
 *
 * @param == Gold Window ==
 * @default
 *
 * @param Gold Window X
 * @desc This is the x position of the HP Window.
 * Can be a Number or JavaScript eval.
 * @default this._commandWindow.x
 *
 * @param Gold Window Y
 * @desc This is the x position of the HP Window.
 * Can be a Number or JavaScript eval.
 * @default this._statusWindow.y
 * @help
 *
 * Alternative Menu Screen: Bust Select
 * Version 1.01
 * SumRndmDde
 *
 *
 * Changelog: Version 1.01 
 *            - Allowed customization of positions for Gold, 
 *              Command, and HP windows.
 *            - Can customize rows and columns for Bust Window
 *
 *
 * Gives your game an alternative menu screen.
 * 
 * This was a special request that features the Actor's bust
 * and Side-View Battler.
 *
 * 
 * ==========================================================================
 *  How to Set Up Bust Images
 * ==========================================================================
 *
 * In order to set the Bust Image for each Actor,
 * use the following Notetags in the Notebox of the Actor:
 *
 *  <Menu Bust: filename>
 *
 * Input the filename of the image file you wish to use
 * for this Actor's Bust Image.
 *
 * The image MUST be stored in:
 * img/SumRndmDde/menu
 *
 *
 * ==========================================================================
 *  How to Set Custom Positions for Bust Images
 * ==========================================================================
 *
 * The following are optional notetags.
 * Use the following to set the X and Y of the Bust (inside Actor Note):
 *
 *  <Menu Bust X: number>
 *  <Menu Bust Y: number>
 *
 * By default, the bust image is set to the coordinates in the Parameters,
 * but these Notetags can set the specific bust image of the Actor to a 
 * different position if it looks a little off center.
 *
 *
 * ==========================================================================
 *  How to Stretch Bust Images to Certain Width and Height
 * ==========================================================================
 *
 * The following are optional notetags.
 * Use the following to stretch the width and height of the Bust to
 * the specified width and height (inside Actor Note):
 *
 *  <Menu Bust Width: number>
 *  <Menu Bust Height: number>
 *
 * By default, the bust image is the same width and height of the image
 * from the file, but using this, you can set a custom width and height
 * the bust will be stretched to.
 *
 * Example:
 *  <Menu Bust Width: 128>
 *  <Menu Bust Height: 160>
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

(function() {

	var gold = String(PluginManager.parameters('SRD_AltMenuScreen_BustSelect')['Show Gold Window']).trim().toLowerCase() === 'true';
	var sv = String(PluginManager.parameters('SRD_AltMenuScreen_BustSelect')['Show SV Window']).trim().toLowerCase() === 'true';
	var bustX = Number(PluginManager.parameters('SRD_AltMenuScreen_BustSelect')['Bust X Pos']);
	var bustY = Number(PluginManager.parameters('SRD_AltMenuScreen_BustSelect')['Bust Y Pos']);
	var bustRows = Number(PluginManager.parameters('SRD_AltMenuScreen_BustSelect')['Bust Window Rows']);
	var bustCols = Number(PluginManager.parameters('SRD_AltMenuScreen_BustSelect')['Bust Window Cols']);
	var bwX = String(PluginManager.parameters('SRD_AltMenuScreen_BustSelect')['Bust Window X']);
	var bwY = String(PluginManager.parameters('SRD_AltMenuScreen_BustSelect')['Bust Window Y']);
	var bwW = String(PluginManager.parameters('SRD_AltMenuScreen_BustSelect')['Bust Window Width']);
	var bwH = String(PluginManager.parameters('SRD_AltMenuScreen_BustSelect')['Bust Window Height']);
	var col = Number(PluginManager.parameters('SRD_AltMenuScreen_BustSelect')['Max Columns']);
	var row = Number(PluginManager.parameters('SRD_AltMenuScreen_BustSelect')['Visible Rows']);
	var mpBar = String(PluginManager.parameters('SRD_AltMenuScreen_BustSelect')['Draw MP Bar']).trim().toLowerCase() === 'true';
	var tpBar = String(PluginManager.parameters('SRD_AltMenuScreen_BustSelect')['Draw TP Bar']).trim().toLowerCase() === 'true';
	var hpWidth = Number(PluginManager.parameters('SRD_AltMenuScreen_BustSelect')['HP Window Width']);
	var batX = String(PluginManager.parameters('SRD_AltMenuScreen_BustSelect')['Battler X Pos']);
	var batY = String(PluginManager.parameters('SRD_AltMenuScreen_BustSelect')['Battler Y Pos']);
	var batXW = String(PluginManager.parameters('SRD_AltMenuScreen_BustSelect')['B. Window X']);
	var batYH = String(PluginManager.parameters('SRD_AltMenuScreen_BustSelect')['B. Window Y']);
	var batW = String(PluginManager.parameters('SRD_AltMenuScreen_BustSelect')['B. Window Width']);
	var batH = String(PluginManager.parameters('SRD_AltMenuScreen_BustSelect')['B. Window Height']);
	var hpX = String(PluginManager.parameters('SRD_AltMenuScreen_BustSelect')['HP Window X']);
	var hpY = String(PluginManager.parameters('SRD_AltMenuScreen_BustSelect')['HP Window Y']);
	var goldX = String(PluginManager.parameters('SRD_AltMenuScreen_BustSelect')['Gold Window X']);
	var goldY = String(PluginManager.parameters('SRD_AltMenuScreen_BustSelect')['Gold Window Y']);
	var comX = String(PluginManager.parameters('SRD_AltMenuScreen_BustSelect')['Command Window X']);
	var comY = String(PluginManager.parameters('SRD_AltMenuScreen_BustSelect')['Command Window Y']);

	var notetagsLoaded = false;
	var _DataManager_isDatabaseLoaded = DataManager.isDatabaseLoaded;
	DataManager.isDatabaseLoaded = function() {
	    if(!_DataManager_isDatabaseLoaded.call(this)) return false;
	    if(!notetagsLoaded) {
	    	for(var i = 1; i < $dataActors.length; i++) {
	    		if($dataActors[i].note.match(/<Menu\s*Bust\s*:\s*(.*)\s*>/im)) {
	    			$dataActors[i].ams_bs_bust = RegExp.$1;
	    		}
	    		if($dataActors[i].note.match(/<Menu\s*Bust\s*X\s*:\s*(.*)\s*>/im)) {
	    			$dataActors[i].ams_bs_x = parseInt(RegExp.$1);
	    		}
	    		if($dataActors[i].note.match(/<Menu\s*Bust\s*Y\s*:\s*(.*)\s*>/im)) {
	    			$dataActors[i].ams_bs_y = parseInt(RegExp.$1);
	    		}
	    		if($dataActors[i].note.match(/<Menu\s*Bust\s*Width\s*:\s*(.*)\s*>/im)) {
	    			$dataActors[i].ams_bs_w = parseInt(RegExp.$1);
	    		}
	    		if($dataActors[i].note.match(/<Menu\s*Bust\s*Height\s*:\s*(.*)\s*>/im)) {
	    			$dataActors[i].ams_bs_h = parseInt(RegExp.$1);
	    		}
	    	}
	    	notetagsLoaded = true;
	    }
	    return true;
	};
	if(!ImageManager.loadSumRndmDdeMB) {
		ImageManager.loadSumRndmDdeMB = function(filename, hue) {
	        return this.loadBitmap('img/SumRndmDde/menu/', filename, hue, true);
	    };
	}
	var _Scene_Menu_create = Scene_Menu.prototype.create;
	Scene_Menu.prototype.create = function() {
	    _Scene_Menu_create.call(this);
	    this.createHPWindow(this._statusWindow);
	    this.createSVBattler(this._statusWindow);
	    this._statusWindow.x = eval(bwX);
		this._statusWindow.y = eval(bwY);
		this._commandWindow.x = eval(comX);
		this._commandWindow.y = eval(comY);
		this._goldWindow.x = eval(goldX);//this._hpWindow.x;
	    this._goldWindow.y = eval(goldY);//this._statusWindow.y;
	    this._hpWindow.x = eval(hpX);//this._commandWindow.x;
	    this._hpWindow.y = eval(hpY);
	    //var distance = (this._commandWindow.y - (this._goldWindow.y + this._goldWindow.height));
		//this._hpWindow.y = (distance / 2) - (this._hpWindow.height / 2) + (this._goldWindow.y + this._goldWindow.height);
		//this._hpWindow.y = ((this._commandWindow.y - (this._goldWindow.y + this._goldWindow.height)) / 2) - (this._hpWindow.height / 2) + (this._goldWindow.y + this._goldWindow.height);
		//this._svWindow.x = Graphics.width - 128;
		//this._svWindow.y = this._hpWindow.y;
		this._svWindow.x = eval(batXW);
		this._svWindow.y = eval(batYH);
	};
	var _Scene_Menu_createGoldWindow = Scene_Menu.prototype.createGoldWindow;
	Scene_Menu.prototype.createGoldWindow = function() {
		if(gold) {
			_Scene_Menu_createGoldWindow.call(this);
		} else {
			this._goldWindow = {x: 0, y: 0, height: 72};
		}
	};
	Scene_Menu.prototype.createHPWindow = function(window) {
	    this._hpWindow = new Window_HPWindow(0, 0, window);
	    this.addWindow(this._hpWindow);
	};
	Scene_Menu.prototype.createSVBattler = function(window) {
	    this._svWindow = new Window_SVBattler(0, 0, window);
	    if(sv) this.addWindow(this._svWindow);
	};
	Window_MenuCommand.prototype.windowWidth = function() {
	    return (Graphics.width / 2) - 40;
	};
	Window_MenuCommand.prototype.maxCols = function() {
	    return col;
	};
	Window_MenuCommand.prototype.numVisibleRows = function() {
	    return row;
	};
	Window_MenuCommand.prototype.itemTextAlign = function() {
	    return 'center';
	};
	var _Window_MenuStatus_loadImages = Window_MenuStatus.prototype.loadImages;
	Window_MenuStatus.prototype.loadImages = function() {
	    _Window_MenuStatus_loadImages.call(this);
	    $gameParty.members().forEach(function(actor) {
	    	if(actor.actor().ams_bs_bust) {
	        	ImageManager.loadSumRndmDdeMB(actor.actor().ams_bs_bust);
	        }
	    }, this);
	};
	Window_MenuStatus.prototype.windowWidth = function() {
		return eval(bwW);
	};
	Window_MenuStatus.prototype.windowHeight = function() {
	    return eval(bwH);
	};
	Window_MenuStatus.prototype.numVisibleRows = function() {
		return bustRows;
	};
	Window_MenuStatus.prototype.maxCols = function() {
	    return bustCols;
	};
	Window_MenuStatus.prototype.drawItem = function(index) {
	    this.drawItemBackground(index);
	    this.drawItemImage(index);
	    //this.drawItemStatus(index);
	};
	Window_MenuStatus.prototype.drawItemImage = function(index) {
	    var actor = $gameParty.members()[index];
	    var rect = this.itemRect(index);
	    this.changePaintOpacity(actor.isBattleMember());
	    var x = (actor.actor().ams_bs_x) ? actor.actor().ams_bs_x : bustX;
	    var y = (actor.actor().ams_bs_y) ? actor.actor().ams_bs_y : bustY;
	    var w = (actor.actor().ams_bs_w) ? actor.actor().ams_bs_w : -1;
	    var h = (actor.actor().ams_bs_h) ? actor.actor().ams_bs_h : -1;
	    this.drawBust(actor, rect.x + x, rect.y + y, w, h);
	    this.changePaintOpacity(true);
	};
	Window_MenuStatus.prototype.drawBust = function(actor, x, y, width, height) {
	    var bitmap = ImageManager.loadSumRndmDdeMB(actor.actor().ams_bs_bust);
	    width = (width < 0) ? bitmap.width : width;
	    height = (height < 0) ? bitmap.height : height;
	    this.contents.blt(bitmap, 0, 0, bitmap.width, bitmap.height, x, y, width, height);
	};
	var _Window_MenuStatus_deselect = Window_MenuStatus.prototype.deselect;
	Window_MenuStatus.prototype.deselect = function() {
	    _Window_MenuStatus_deselect.call(this);
	    this._index = 0;
	};
	function Window_HPWindow() {
	    this.initialize.apply(this, arguments);
	}
	Window_HPWindow.prototype = Object.create(Window_Base.prototype);
	Window_HPWindow.prototype.constructor = Window_HPWindow;
	Window_HPWindow.prototype.initialize = function(x, y, win) {
	    var width = this.windowWidth();
	    var height = this.windowHeight();
	    Window_Base.prototype.initialize.call(this, x, y, width, height);
	    this._window = win;
	    this._index = 0;
	    this._name = '';
	    this._actor = $gameParty.members()[this._index];
	    this.refresh();
	};
	Window_HPWindow.prototype.windowWidth = function() {
	    return hpWidth;
	};
	Window_HPWindow.prototype.windowHeight = function() {
		if(mpBar && tpBar) return this.fittingHeight(4);
		if(mpBar || tpBar) return this.fittingHeight(3);
	    return this.fittingHeight(2);
	};
	Window_HPWindow.prototype.refresh = function() {
	    var x = this.textPadding();
	    var y = 0;
	    var width = this.contents.width - this.textPadding() * 2;
	    var actor = $gameParty.members()[this._index];
	    this._name = actor.name();
	    this.contents.clear();
	    this.drawActorName(actor, x, y);
		this.drawActorHp(actor, x, y + this.lineHeight(), width);
		var i = 2;
		if(mpBar) {
			this.drawActorMp(actor, x, y + (this.lineHeight() * i), width);
			i += 1;
		}
		if(tpBar) this.drawActorTp(actor, x, y + (this.lineHeight() * i), width);
		this._double = true;
	};
	var _Window_HPWindow_update = Window_HPWindow.prototype.update;
	Window_HPWindow.prototype.update = function() {
	    _Window_HPWindow_update.call(this);
	    if(this._window.index() >= 0 && this._index != this._window.index()) {
	    	this._index = this._window.index();
	    	this.refresh();
	    }
	    if(this._name != $gameParty.members()[this._index]) {
	    	this.refresh();
	    }
	};
	Window_HPWindow.prototype.open = function() {
	    this.refresh();
	    Window_Base.prototype.open.call(this);
	};
	function Window_SVBattler() {
	    this.initialize.apply(this, arguments);
	}
	Window_SVBattler.prototype = Object.create(Window_Base.prototype);
	Window_SVBattler.prototype.constructor = Window_SVBattler;
	Window_SVBattler.prototype.initialize = function(x, y, win) {
	    var width = this.windowWidth();
	    var height = this.windowHeight();
	    Window_Base.prototype.initialize.call(this, x, y, width, height);
	    this._window = win;
	    this._index = 0;
	    this._frame = 0;
	    this._timer = 0;
	    this.refresh();
	};
	Window_SVBattler.prototype.windowWidth = function() {
	    return eval(batW);
	};
	Window_SVBattler.prototype.windowHeight = function() {
	    return eval(batH);
	};
	Window_SVBattler.prototype.refresh = function() {
	    var x = this.textPadding();
	    var y = 0;
	    var width = this.contents.width - this.textPadding() * 2;
	    var actor = $gameParty.members()[this._index];
	    this.contents.clear();
	    var pic = ImageManager.loadSvActor(actor.battlerName());
        var a = this._frame * (pic.width / 9);
        this.contents.blt(pic, a, 0, pic.width / 9, pic.height / 6, eval(batX), eval(batY));
	};
	var _Window_SVBattler_update = Window_SVBattler.prototype.update;
	Window_SVBattler.prototype.update = function() {
		_Window_SVBattler_update.call(this);
		this._timer += 1;
		if(this._timer === 10) this._frame = 1;
		if(this._timer === 20) this._frame = 2;
		if(this._timer === 30) this._frame = 1;
		if(this._timer === 40) {
			this._frame = 0;
			this._timer = 0;
		}
		if(this._window.index() >= 0 && this._index != this._window.index()) {
	    	this._index = this._window.index();
	    }
		this.refresh();
    }
	Window_SVBattler.prototype.open = function() {
	    this.refresh();
	    Window_Base.prototype.open.call(this);
	};
})();