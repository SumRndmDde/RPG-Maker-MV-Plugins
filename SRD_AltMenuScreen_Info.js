/*:
 * @plugindesc Alternative Menu Screen: shows the faces of the Actors along with the extra information!
 * @author SumRndmDde
 *
 * @param Information Order
 * @desc List the keywords to order the information. Exclude unwanted info. Ex: playtime, location, bgm, battles
 * @default playtime, location, bgm, battles
 * 
 * @param Command Position
 * @desc This determines where the command window is positioned. The options are: "left" and "right".
 * @default left
 *
 * @param Gold Position
 * @desc This determines where the gold window is positioned. The options are: "left", "middle", and "right".
 * @default middle
 *
 * @param Use Display Name
 * @desc If 'true' then the "Location" will display the "Display Name" of the map. Otherwise, it will use the normal name.
 * @default true
 *
 * @param No BGM Text
 * @desc The text shown when there is no BGM is playing.
 * @default None
 *
 * @param == Info Text ==
 * @default
 *
 * @param Playtime Text
 * @desc The text for "Playtime".
 * @default Playtime:
 *
 * @param Location Text
 * @desc The text for "Location".
 * @default Location:
 *
 * @param BGM Text
 * @desc The text for "BGM".
 * @default Music:
 *
 * @param Battles Text
 * @desc The text for "Battle Count".
 * @default Battles:
 *
 * @param == Minor Params ==
 * @default
 *
 * @param Face Padding
 * @desc This is the amount of padding surrounding the Actor's face.
 * @default 20
 *
 * @param Face X
 * @desc The x position of the face image within its selection box.
 * @default 10
 *
 * @param Face Y
 * @desc The y position of the face image within its selection box.
 * @default 10
 *
 * @param Max Status Rows
 * @desc The maximum amount of rows the Actor select in the menu can have.
 * @default 2
 *
 * @param Max Status Cols
 * @desc The maximum amount of columns the Actor select in the menu can have.
 * @default 4
 *
 * @param Command Columns
 * @desc The max amount of columns in the command selector within the menu. 
 * @default 2
 *
 * @param Command Rows
 * @desc The amount of visible rows in the command selector within the menu. 
 * @default 4
 *
 * @help
 *
 *
 * Alternative Menu Screen: Information
 * Version 1.00
 * SumRndmDde
 *
 *
 * Gives your game an alternative menu screen.
 * 
 * This one shows only Actor faces for Actor menu displays 
 * and gives a ton of extra information including Playtime, 
 * Location, Current BGM, and Battle Count.
 *
 *
 * Until next time,
 *   ~ SumRndmDde
 */

var Imported = Imported || {};

(function() {
	var sumItemOrder = String(PluginManager.parameters('SRD_AltMenuScreen_Info')['Information Order']).split(/\s*,\s*/);
	var sumCommandPos = String(PluginManager.parameters('SRD_AltMenuScreen_Info')['Command Position']);
	var sumGoldPos = String(PluginManager.parameters('SRD_AltMenuScreen_Info')['Gold Position']);
	var sumDisplayName = String(PluginManager.parameters('SRD_AltMenuScreen_Info')['Use Display Name']).trim().toLowerCase() === 'true';

	var playtimeText = String(PluginManager.parameters('SRD_AltMenuScreen_Info')['Playtime Text']);
	var locationText = String(PluginManager.parameters('SRD_AltMenuScreen_Info')['Location Text']);
	var bgmText = String(PluginManager.parameters('SRD_AltMenuScreen_Info')['BGM Text']);
	var battlesText = String(PluginManager.parameters('SRD_AltMenuScreen_Info')['Battles Text']);

	var sumBGMNone = String(PluginManager.parameters('SRD_AltMenuScreen_Info')['No BGM Text']);
	var sumFacePadding = Number(PluginManager.parameters('SRD_AltMenuScreen_Info')['Face Padding']);
	var sumX = Number(PluginManager.parameters('SRD_AltMenuScreen_Info')['Face X']);
	var sumY = Number(PluginManager.parameters('SRD_AltMenuScreen_Info')['Face Y']);
	var sumMaxRows = Number(PluginManager.parameters('SRD_AltMenuScreen_Info')['Max Status Rows']);
	var sumMaxCols = Number(PluginManager.parameters('SRD_AltMenuScreen_Info')['Max Status Cols']);
	var sumColumns = Number(PluginManager.parameters('SRD_AltMenuScreen_Info')['Command Columns']);
	var sumRows = Number(PluginManager.parameters('SRD_AltMenuScreen_Info')['Command Rows']);

	var _Scene_Menu_create = Scene_Menu.prototype.create;
	Scene_Menu.prototype.create = function() {
	    _Scene_Menu_create.call(this);
	    this._srdMenuInfo = new Window_SumRndmMenuInfo(0, 0);
	    this.addWindow(this._srdMenuInfo);

	    this._statusWindow.x = (Graphics.width / 2) - (this._statusWindow.width / 2);
		this._statusWindow.y = 0;
		if(sumCommandPos.trim().toLowerCase() === 'right') {
			this._commandWindow.x = Graphics.width - this._commandWindow.width;
			this._srdMenuInfo.x = 0;
		} else {
			this._commandWindow.x = 0;
			this._srdMenuInfo.x = Graphics.width - this._srdMenuInfo.width;
		}
		this._commandWindow.y = Graphics.height - this._commandWindow.height;
		this._srdMenuInfo.y = Graphics.height - this._srdMenuInfo.height;
		if(sumGoldPos.trim().toLowerCase() === 'left') {
			this._goldWindow.x = 0;
		} else if(sumGoldPos.trim().toLowerCase() === 'middle') {
			this._goldWindow.x = (Graphics.width / 2) - (this._goldWindow.width / 2);
		} else if(sumGoldPos.trim().toLowerCase() === 'right') {
			this._goldWindow.x = (Graphics.width) - (this._goldWindow.width);
		}
	    this._goldWindow.y = this._commandWindow.y - this._goldWindow.height;
	};
	Window_MenuCommand.prototype.windowWidth = function() {
	    return Graphics.width / 2;
	};
	Window_MenuCommand.prototype.maxCols = function() {
	    return sumColumns;
	};
	Window_MenuCommand.prototype.numVisibleRows = function() {
	    return sumRows;
	};
	Window_MenuStatus.prototype.windowWidth = function() {
		var l = Math.min(this.maxItems(), this.maxCols());
	    return (l * this.itemWidth()) + (this.standardPadding() * 2) + (this.textPadding() * l * 2) - (this.textPadding() * 2);
	};
	Window_MenuStatus.prototype.windowHeight = function() {
	    return (this.itemHeight() * this.numVisibleRows()) + (this.standardPadding() * 2);
	};
	Window_MenuStatus.prototype.numVisibleRows = function() {
		var rows = Math.floor((this.maxItems() - 1) / this.maxCols()) + 1;
		return Math.min(rows, sumMaxRows);
	};
	Window_MenuStatus.prototype.maxCols = function() {
	    return Math.min(this.maxItems(), sumMaxCols);
	};
	Window_MenuStatus.prototype.drawItem = function(index) {
	    this.drawItemBackground(index);
	    this.drawItemImage(index);
	};
	Window_MenuStatus.prototype.itemHeight = function() {
	    return Window_Base._faceHeight + sumFacePadding;
	};
	Window_MenuStatus.prototype.itemWidth = function() {
	    return Window_Base._faceWidth + sumFacePadding;
	};
	Window_MenuStatus.prototype.drawItemImage = function(index) {
	    var actor = $gameParty.members()[index];
	    var rect = this.itemRect(index);
	    this.changePaintOpacity(actor.isBattleMember());
	    this.drawActorFace(actor, rect.x + sumX, rect.y + sumY, Window_Base._faceWidth, Window_Base._faceHeight);
	    this.changePaintOpacity(true);
	};
	function Window_SumRndmMenuInfo() {
	    this.initialize.apply(this, arguments);
	}
	Window_SumRndmMenuInfo.prototype = Object.create(Window_Base.prototype);
	Window_SumRndmMenuInfo.prototype.constructor = Window_SumRndmMenuInfo;
	Window_SumRndmMenuInfo.prototype.initialize = function(x, y) {
	    var width = this.windowWidth();
	    var height = this.windowHeight();
	    Window_Base.prototype.initialize.call(this, x, y, width, height);
	    this.refresh();
	};
	Window_SumRndmMenuInfo.prototype.windowWidth = function() {
	    return Graphics.width / 2;
	};
	Window_SumRndmMenuInfo.prototype.windowHeight = function() {
	    return 180;
	};
	Window_SumRndmMenuInfo.prototype.refresh = function() {
	    var x = this.textPadding();
	    var width = this.contents.width - this.textPadding() * 2;
	    this.contents.clear();
	    var items = Math.min(4, sumItemOrder.length)
	    for(var i = 0; i < items; i++) { 
	    	var item = sumItemOrder[i];
	    	if(item.match(/(?:playtime|time|play)/i)) {
		    	this.drawText(playtimeText + " " + $gameSystem.playtimeText(), x, this.lineHeight() * i, width, 'left');
		    } else if(item.match(/location/i)) {
		    	var mapName = (sumDisplayName) ? $gameMap.displayName() : $dataMapInfos[$gameMap.mapId()].name;
		    	this.drawText(locationText + " " + mapName, x, this.lineHeight() * i, width, 'left');
		    } else if(item.match(/(?:bgm|music)/i)) {
		    	this.drawText(bgmText + " " + AudioManager.sumRndmCurrentBgm(), x, this.lineHeight() * i, width, 'left');
		    } else if(item.match(/battle/i)) {
		    	this.drawText(battlesText + " " + $gameSystem.battleCount(), x, this.lineHeight() * i, width, 'left');
		    }
		}
	};
	Window_SumRndmMenuInfo.prototype.update = function() {
		this.refresh();
	}
	Window_SumRndmMenuInfo.prototype.open = function() {
	    this.refresh();
	    Window_Base.prototype.open.call(this);
	};
	AudioManager.sumRndmCurrentBgm = function() {
	    if (this._currentBgm) {
	        return this._currentBgm.name;
	    } else {
	        return sumBGMNone;
	    }
	};
	if(Imported.YEP_MainMenuManager) {
		Scene_Menu.prototype.resizeGoldWindow = function() {};
	}
})();