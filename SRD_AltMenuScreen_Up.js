/*:
 * @plugindesc Alternative Menu Screen: has a command menu on the bottom and a 2 by 2 Actor selector.
 * @author SumRndmDde
 *
 * @param Gold Position
 * @desc The position of the gold window. 
 * You can choose: 'top' or 'bottom' 
 * @default top
 *
 * @param Command Columns
 * @desc The max amount of columns in the command selector within the menu. 
 * @default 4
 *
 * @param Command Rows
 * @desc The amount of visible rows in the command selector within the menu. 
 * @default 2
 *
 * @param Face Position
 * @desc The position of the face images in the menu. 
 * You can choose: 'top', 'middle', or 'bottom'.
 * @default middle
 *
 * @param Y Offset
 * @desc The distance between each row of information within the Actor Menu Status thingies.
 * @default 30
 *
 * @help
 *
 *
 * Alternative Menu Screen: Up
 * Version 1.01
 * SumRndmDde
 *
 *
 * Changelog (v1.01): Fixed Shop Choices
 *
 *
 * Gives your game an alternative menu screen.
 * 
 * This one has a command menu on the top and a 
 * 2 by 2 Actor selector.
 *
 *
 * Until next time,
 *   ~ SumRndmDde
 */

(function() {
	var sumGoldPos = String(PluginManager.parameters('SRD_AltMenuScreen_Up')['Gold Position']).trim().toLowerCase();
	var sumColumns = Number(PluginManager.parameters('SRD_AltMenuScreen_Up')['Command Columns']);
	var sumRows = Number(PluginManager.parameters('SRD_AltMenuScreen_Up')['Command Rows']);
	var sumFacePos = String(PluginManager.parameters('SRD_AltMenuScreen_Up')['Face Position']).trim().toLowerCase();
	var sumYOffset = Number(PluginManager.parameters('SRD_AltMenuScreen_Up')['Y Offset']);

	var _Scene_Menu_create = Scene_Menu.prototype.create;
	Scene_Menu.prototype.create = function() {
	    _Scene_Menu_create.call(this);
	    if(sumGoldPos === 'bottom') {
		    this._statusWindow.x = 0;
		    this._statusWindow.y = this._commandWindow.height;
		    this._goldWindow.y = this._statusWindow.y + this._statusWindow.height;
		} else {
		    this._goldWindow.y = this._commandWindow.height;
		    this._statusWindow.x = 0;
		    this._statusWindow.y = this._goldWindow.y + this._goldWindow.height;
		}
	};
	Scene_Menu.prototype.createGoldWindow = function() {
	    this._goldWindow = new Window_Gold2(0, 0);
	    this._goldWindow.y = Graphics.boxHeight - this._goldWindow.height;
	    this.addWindow(this._goldWindow);
	};
	Window_MenuCommand.prototype.windowWidth = function() {
	    return Graphics.width;
	};
	Window_MenuCommand.prototype.maxCols = function() {
	    return sumColumns;
	};
	Window_MenuCommand.prototype.numVisibleRows = function() {
	    return sumRows;
	};
	Window_MenuStatus.prototype.windowWidth = function() {
	    return Graphics.width;
	};
	Window_MenuStatus.prototype.windowHeight = function() {
	    return Graphics.height - 180;
	};
	Window_MenuStatus.prototype.numVisibleRows = function() {
	    return 2;
	};
	Window_MenuStatus.prototype.maxCols = function() {
	    return 2;
	};
	Window_MenuStatus.prototype.drawItemImage = function(index) {
	    var actor = $gameParty.members()[index];
	    var rect = this.itemRect(index);
	    this.changePaintOpacity(actor.isBattleMember());
	    if(sumFacePos === 'top') {
	    	this.drawActorFace(actor, rect.x + 1, rect.y + 1, Window_Base._faceWidth, Window_Base._faceHeight);
	    } else if(sumFacePos === 'bottom') {
	    	this.drawActorFace(actor, rect.x + 1, rect.y + (rect.height / 4) + 8, Window_Base._faceWidth, Window_Base._faceHeight);
	    } else {
	    	this.drawActorFace(actor, rect.x + 1, rect.y + rect.height / 8, Window_Base._faceWidth, Window_Base._faceHeight);
	    }
	    this.changePaintOpacity(true);
	};
	Window_MenuStatus.prototype.drawItemStatus = function(index) {
	    var actor = $gameParty.members()[index];
	    var rect = this.itemRect(index);
	    var x = rect.x + 162;
	    var y = rect.y;
	    var yOffset = sumYOffset;
	    var width = rect.width - (Window_Base._faceWidth + 30);
	    this.drawActorName(actor, x, y, width);
	    this.drawActorLevel(actor, x, y + yOffset, width);
	    this.drawActorIcons(actor, x, y + (yOffset * 2), width);
	    this.drawActorClass(actor, x, y + (yOffset * 3), width);
	    this.drawActorHp(actor, x, y + (yOffset * 4), width);
	    this.drawActorMp(actor, x, y + (yOffset * 5), width);
	};

	function Window_Gold2() {
	    this.initialize.apply(this, arguments);
	}
	Window_Gold2.prototype = Object.create(Window_Base.prototype);
	Window_Gold2.prototype.constructor = Window_Gold2;
	Window_Gold2.prototype.initialize = function(x, y) {
	    var width = this.windowWidth();
	    var height = this.windowHeight();
	    Window_Base.prototype.initialize.call(this, x, y, width, height);
	    this.refresh();
	};
	Window_Gold2.prototype.windowWidth = function() {
	    return Graphics.width;
	};
	Window_Gold2.prototype.windowHeight = function() {
	    return this.fittingHeight(1);
	};
	Window_Gold2.prototype.refresh = function() {
	    var x = this.textPadding();
	    var width = this.contents.width - this.textPadding() * 2;
	    this.contents.clear();
	    this.drawCurrencyValue(this.value(), this.currencyUnit(), x, 0, width);
	};

	Window_Gold2.prototype.value = function() {
	    return $gameParty.gold();
	};
	Window_Gold2.prototype.currencyUnit = function() {
	    return TextManager.currencyUnit;
	};
	Window_Gold2.prototype.open = function() {
	    this.refresh();
	    Window_Base.prototype.open.call(this);
	};
})();