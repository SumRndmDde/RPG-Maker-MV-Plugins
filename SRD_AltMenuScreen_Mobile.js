/*:
 * @plugindesc Alternative Menu Screen: makes the commands bigger and easier to press on mobile devices.
 * @author SumRndmDde
 *
 * @param "Leave Menu" Command
 * @desc Set this to 'true' and a Leave Menu Command will be added to the command list in the menu.
 * @default true
 *
 * @param "Leave Menu" Name
 * @desc Set this to the name of the "Leave Menu" command you wish to see in the menu.
 * @default Leave Menu
 *
 * @param Command Font
 * @desc The font of the text in the command window.
 * @default Gamefont
 *
 * @param Command Font Size
 * @desc The size of the font of the text in the command window.
 * @default 36
 *
 * @param == Minor Positions ==
 *
 * @param Face Padding
 * @desc This is the amount of padding surrounding the Actor's face.
 * @default 2
 *
 * @param Face X
 * @desc The x position of the face image within its selection box.
 * @default 2
 *
 * @param Face Y
 * @desc The y position of the face image within its selection box.
 * @default 2
 *
 * @param Max Status Rows
 * @desc The maximum amount of rows the Actor select in the menu can have.
 * @default 4
 *
 * @param Max Status Cols
 * @desc The maximum amount of columns the Actor select in the menu can have.
 * @default 1
 *
 * @param Command Columns
 * @desc The max amount of columns in the command selector within the menu. 
 * @default 3
 *
 * @param Command Rows
 * @desc The amount of visible rows in the command selector within the menu. 
 * @default 3
 *
 * @help
 *
 *
 * Alternative Menu Screen: Mobile
 * Version 1.00
 * SumRndmDde
 *
 *
 * Gives your game an alternative menu screen.
 * 
 * This one is made with bigger buttons to work better on
 * mobile devices.
 *
 *
 * Until next time,
 *   ~ SumRndmDde
 */

 var Imported = Imported || {};

(function() {
	var cancel = String(PluginManager.parameters('SRD_AltMenuScreen_Mobile')['"Leave Menu" Command']).trim().toLowerCase() === 'true';
	var name = String(PluginManager.parameters('SRD_AltMenuScreen_Mobile')['"Leave Menu" Name']);
	var font = String(PluginManager.parameters('SRD_AltMenuScreen_Mobile')['Command Font']);
	var size = Number(PluginManager.parameters('SRD_AltMenuScreen_Mobile')['Command Font Size']);
	var sumFacePadding = Number(PluginManager.parameters('SRD_AltMenuScreen_Mobile')['Face Padding']);
	var sumX = Number(PluginManager.parameters('SRD_AltMenuScreen_Mobile')['Face X']);
	var sumY = Number(PluginManager.parameters('SRD_AltMenuScreen_Mobile')['Face Y']);
	var sumMaxRows = Number(PluginManager.parameters('SRD_AltMenuScreen_Mobile')['Max Status Rows']);
	var sumMaxCols = Number(PluginManager.parameters('SRD_AltMenuScreen_Mobile')['Max Status Cols']);
	var sumColumns = Number(PluginManager.parameters('SRD_AltMenuScreen_Mobile')['Command Columns']);
	var sumRows = Number(PluginManager.parameters('SRD_AltMenuScreen_Mobile')['Command Rows']);

	var _Scene_Menu_create = Scene_Menu.prototype.create;
	Scene_Menu.prototype.create = function() {
	    _Scene_Menu_create.call(this);
	    this._goldWindow.x = 0;
	    this._goldWindow.y = 0;
	    this._statusWindow.x = (Graphics.width) - (this._statusWindow.width);
		this._statusWindow.y = 0;
		this._commandWindow.x = 0;
		this._commandWindow.y = (Graphics.height) - (this._commandWindow.height);
	};
	Window_MenuCommand.prototype.standardFontFace = function() {
	    if ($gameSystem.isChinese()) {
	        return 'SimHei, Heiti TC, sans-serif';
	    } else if ($gameSystem.isKorean()) {
	        return 'Dotum, AppleGothic, sans-serif';
	    } else {
	        return font;
	    }
	};

	Window_MenuCommand.prototype.standardFontSize = function() {
	    return size;
	};
	Window_MenuCommand.prototype.windowWidth = function() {
	    return Graphics.width * (3/4);
	};
	Window_MenuCommand.prototype.maxCols = function() {
	    return sumColumns;
	};
	Window_MenuCommand.prototype.numVisibleRows = function() {
	    return sumRows;
	};
	Window_MenuCommand.prototype.lineHeight = function() {
	    return 36 * 3;
	};
	Window_MenuCommand.prototype.itemTextAlign = function() {
	    return 'center';
	};
	var _Window_MenuCommand_addGameEndCommand = Window_MenuCommand.prototype.addGameEndCommand;
	Window_MenuCommand.prototype.addGameEndCommand = function() {
	    _Window_MenuCommand_addGameEndCommand.call(this);
	    if(cancel) this.addCommand(name, 'cancel');
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
	if(Imported.YEP_MainMenuManager) {
		Scene_Menu.prototype.resizeGoldWindow = function() {};
	}
})();