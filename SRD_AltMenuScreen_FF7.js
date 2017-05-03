/*:
 * @plugindesc An alternative menu based off of the menu from Final Fantasy 7.
 * @author SumRndmDde
 *
 * @param "To Next Level" Text
 * @desc The text used for the "To Next Level" in the menu.
 * @default To Next Level
 *
 * @param "Play Time" Text
 * @desc The text used for the "Play Time" in the menu.
 * @default Time
 *
 * @param Squish "Play Time"
 * @desc If 'true', the Play Time texted will be stretched to fit the size of the area it's restricted to.
 * @default false
 *
 * @param Use Display Name
 * @desc If 'true' then the "Location" will display the "Display Name" of the map. Otherwise, it will use the normal name.
 * @default true
 *
 * @param EXP Color 1
 * @desc The first EXP Color.
 * Input a JavaScript or HTML Color.
 * @default #800080
 *
 * @param EXP Color 2
 * @desc The first EXP Color.
 * Input a JavaScript or HTML Color.
 * @default #FF1AFF
 *
 * @param == Menu Status ==
 * @default
 *
 * @param Number of Rows
 * @desc The amount of visible rows.
 * @default 3
 *
 * @param X Offset
 * @desc This value is added to the X-position of the Status Window.
 * @default 0
 *
 * @param Y Offset
 * @desc This value is added to the Y-position of the Status Window.
 * @default 0
 *
 * @param Show Class
 * @desc If 'false', the Classes will not be shown.
 * @default true
 *
 * @param Show Icons
 * @desc If 'false', the Icons will not be shown.
 * @default true
 *
 * @param == Gold/Time ==
 * @default
 *
 * @param G/T Window Width
 * @desc The width of the Gold/Time Window
 * @default 240
 *
 * @param == Location ==
 * @default
 *
 * @param L Window Width
 * @desc The width of the Location Window
 * @default 480 
 *
 * @help
 *
 *
 * Alternative Menu Screen: Final Fantasy 7
 * Version 1.02
 * SumRndmDde
 *
 *
 * Gives your game an alternative menu screen.
 * 
 * This Alt Menu Screen is an alternative menu based
 * off of the menu from Final Fantasy 7. 
 * In addition to the default things that RPG Maker MV
 * menus have, there is also a "Play Time" and 
 * "Location" infomation section.
 *
 *
 * Until next time,
 *   ~ SumRndmDde
 *
 * 
 */

(function() {
	
	"use strict";

	var params = PluginManager.parameters('SRD_AltMenuScreen_FF7');

	var toNextLevel = String(params['"To Next Level" Text']);
	var playTimeText = String(params['"Play Time" Text']);
	var squishPlayTime = String(params['Squish "Play Time"']).trim().toLowerCase() === 'true';
	var useDisplayName = String(params['Use Display Name']).trim().toLowerCase() === 'true';
	var expColor1 = String(params['EXP Color 1']);
	var expColor2 = String(params['EXP Color 2']);

	var rows = parseInt(params['Number of Rows']);
	var x = parseInt(params['X Offset']);
	var y = parseInt(params['Y Offset']);
	var clas = String(params['Show Class']).trim().toLowerCase() === 'true';
	var icon = String(params['Show Icons']).trim().toLowerCase() === 'true';

	var gtWidth = parseInt(params['G/T Window Width']);
	var lWidth = parseInt(params['L Window Width']);

	var _Scene_Menu_create = Scene_Menu.prototype.create;
	Scene_Menu.prototype.create = function() {
	    _Scene_Menu_create.call(this);
	    this._goldAndTime = new Window_GoldAndTime(0, 0);
	    this._locationWindow = new Window_Location(0, 0);
	    this._windowLayer.removeChild(this._goldWindow);
	    this._windowLayer.removeChild(this._commandWindow);
	    this.addWindow(this._commandWindow);
	    this.addWindow(this._goldAndTime);
	    this.addWindow(this._locationWindow)
	    this._statusWindow.x = 0;
	    this._statusWindow.y = (Graphics.height / 2) - (this._statusWindow.height / 2);
	    this._commandWindow.x = Graphics.width - this._commandWindow.width - 25;
	    this._commandWindow.y = 25;
	    this._locationWindow.x = Graphics.width - this._locationWindow.width - 25;
	    this._locationWindow.y = Graphics.height - this._locationWindow.height - 10;
	    this._goldAndTime.x = Graphics.width - this._goldAndTime.width - 25;
	    this._goldAndTime.y = this._locationWindow.y - this._goldAndTime.height;

	    this._statusWindow.x += x;
	    this._statusWindow.y += y;
	};
	Window_MenuStatus.prototype.windowHeight = function() {
	    return Graphics.boxHeight * (rows/4) + 60;
	};
	Window_MenuStatus.prototype.numVisibleRows = function() {
	    return rows;
	};
	Window_MenuStatus.prototype.drawItemStatus = function(index) {
	    var actor = $gameParty.members()[index];
	    var rect = this.itemRect(index);
	    var x = rect.x + 162;
	    var y = rect.y + (rect.height/2) - (Window_Base._faceHeight/2);
	    var width = rect.width - x - this.textPadding();
	    this.drawActorSimpleStatus(actor, x, y, width);
	};
	Window_MenuStatus.prototype.drawItemImage = function(index) {
	    var actor = $gameParty.members()[index];
	    var rect = this.itemRect(index);
	    this.changePaintOpacity(actor.isBattleMember());
	    this.drawActorFace(actor, rect.x + 1, rect.y + (rect.height/2) - (Window_Base._faceHeight/2), Window_Base._faceWidth, Window_Base._faceHeight);
	    this.changePaintOpacity(true);
	};
	Window_MenuStatus.prototype.drawActorSimpleStatus = function(actor, x, y, width) {
	    var lineHeight = this.lineHeight();
	    var x2 = x + 200;
	    var width2 = Math.min(200, width - 180 - this.textPadding());
	    this.drawActorName(actor, x, y);
	    this.drawActorLevel(actor, x, y + lineHeight * 1);
	    if(icon) this.drawActorIcons(actor, x2, y + lineHeight * 1);
	    if(clas) this.drawActorClass(actor, x2, y);
	    this.drawActorHp(actor, x, y + lineHeight * 2, width2);
	    this.drawActorMp(actor, x, y + lineHeight * 3, width2);
	    this.drawActorExp(actor, x2, y + lineHeight * 2, width2 - 25);
	};
	Window_Base.prototype.drawActorExp = function(actor, x, y, width) {
	    width = width || 186;
	    var color1 = expColor1;
	    var color2 = expColor2;
	    var nre = actor.nextRequiredExp();
	    var ce = actor.currentExp() - actor.currentLevelExp();
	    this.drawGauge(x, y, width, (ce / nre), color1, color2);
	    this.resetTextColor();
	    this.drawText(toNextLevel, x, y, width);
	};
	function Window_GoldAndTime() {
	    this.initialize.apply(this, arguments);
	}
	Window_GoldAndTime.prototype = Object.create(Window_Base.prototype);
	Window_GoldAndTime.prototype.constructor = Window_GoldAndTime;
	Window_GoldAndTime.prototype.initialize = function(x, y) {
	    var width = this.windowWidth();
	    var height = this.windowHeight();
	    Window_Base.prototype.initialize.call(this, x, y, width, height);
	    this.refresh();
	};
	Window_GoldAndTime.prototype.windowWidth = function() {
	    return gtWidth;
	};
	Window_GoldAndTime.prototype.windowHeight = function() {
	    return this.fittingHeight(2);
	};
	Window_GoldAndTime.prototype.refresh = function() {
	    var x = this.textPadding();
	    var width = this.contents.width - this.textPadding() * 2;
	    this.contents.clear();
	    this.drawCurrencyValue(this.value(), this.currencyUnit(), x, this.lineHeight(), width);
	    this.resetTextColor();
	    var width2 = (squishPlayTime) ? width - this.textWidth("00:00:00") : width;
	    this.drawText(playTimeText, x, 0, width2, 'left');// + " " + $gameSystem.playtimeText(), x, 0, width, 'center');
	    this.drawText($gameSystem.playtimeText(), x, 0, width, 'right');
	};
	Window_GoldAndTime.prototype.value = function() {
	    return $gameParty.gold();
	};
	Window_GoldAndTime.prototype.currencyUnit = function() {
	    return TextManager.currencyUnit;
	};
	Window_GoldAndTime.prototype.open = function() {
	    this.refresh();
	    Window_Base.prototype.open.call(this);
	};
	Window_GoldAndTime.prototype.update = function() {
	    this.refresh();
	    Window_Base.prototype.update.call(this);
	};
	function Window_Location() {
	    this.initialize.apply(this, arguments);
	}
	Window_Location.prototype = Object.create(Window_Base.prototype);
	Window_Location.prototype.constructor = Window_Location;
	Window_Location.prototype.initialize = function(x, y) {
	    var width = this.windowWidth();
	    var height = this.windowHeight();
	    Window_Base.prototype.initialize.call(this, x, y, width, height);
	    this.refresh();
	};
	Window_Location.prototype.windowWidth = function() {
	    return 480;
	};
	Window_Location.prototype.windowHeight = function() {
	    return this.fittingHeight(1);
	};
	Window_Location.prototype.refresh = function() {
	    var x = this.textPadding();
	    var width = this.contents.width - this.textPadding() * 2;
	    this.contents.clear();
	    var mapName = (useDisplayName) ? $gameMap.displayName() : $dataMapInfos[$gameMap.mapId()].name;
		this.drawText(mapName, x, 0, width, 'left');
	};
	Window_Location.prototype.open = function() {
	    this.refresh();
	    Window_Base.prototype.open.call(this);
	};

})();