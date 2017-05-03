/*:
 * @plugindesc Alternative Menu Screen Icon. Uses Icons instead of words. #IconsAreMasterRace
 * @author SumRndmDde
 *
 * @param Item Icon
 * @desc The icon index of the icon used for the "Item" choice.
 * Right-click and press "IconSet Viewer".
 * @default 176
 *
 * @param Skill Icon
 * @desc The icon index of the icon used for the "Skill" choice.
 * Right-click and press "IconSet Viewer".
 * @default 64
 *
 * @param Equip Icon
 * @desc The icon index of the icon used for the "Equip" choice.
 * Right-click and press "IconSet Viewer".
 * @default 96
 *
 * @param Status Icon
 * @desc The icon index of the icon used for the "Status" choice.
 * Right-click and press "IconSet Viewer".
 * @default 87
 *
 * @param Formation Icon
 * @desc The icon index of the icon used for the "Formation" choice.
 * Right-click and press "IconSet Viewer".
 * @default 82
 *
 * @param Options Icon
 * @desc The icon index of the icon used for the "Options" choice.
 * Right-click and press "IconSet Viewer".
 * @default 83
 *
 * @param Save Icon
 * @desc The icon index of the icon used for the "Save" choice.
 * Right-click and press "IconSet Viewer".
 * @default 225
 *
 * @param Game End Icon
 * @desc The icon index of the icon used for the "Game End" choice.
 * Right-click and press "IconSet Viewer".
 * @default 245
 *
 * @param == Icon Window ==
 * @default
 *
 * @param Icon Window X
 * @desc The X position of the command (icons) window.
 * Can be Number or JavaScript evaluation.
 * @default 0
 *
 * @param Icon Window Y
 * @desc The Y position of the command (icons) window.
 * Can be Number or JavaScript evaluation.
 * @default 0
 *
 * @param Standard Padding
 * @desc The amount of space around the border of the window.
 * Default is 12.
 * @default 12
 *
 * @param Icon Padding
 * @desc The amount of space around the icon, but still highlighed.
 * Default is 12.
 * @default 12
 *
 * @param Icon X Position
 * @desc The X position of each icon in the "button".
 * Default is 0.
 * @default 0
 *
 * @param Icon Y Position
 * @desc The Y position of each icon in the "button".
 * Default is 6.
 * @default 6
 *
 * @param == Label Window ==
 * @default
 *
 * @param Label Window X
 * @desc The X position of the label window.
 * Can be Number or JavaScript evaluation.
 * @default this._commandWindow.x
 *
 * @param Label Window Y
 * @desc The Y position of the label window.
 * Can be Number or JavaScript evaluation.
 * @default this._commandWindow.y + this._commandWindow.height
 *
 * @param == Actor Window ==
 * @default
 *
 * @param Text Align
 * @desc The alignment of the text in the window.
 * Can be: 'left', 'right', or 'center'.
 * @default center
 *
 * @param Actor Window X
 * @desc The X position of the actor window.
 * Can be Number or JavaScript evaluation.
 * @default this._commandLabel.x + this._commandLabel.width
 *
 * @param Actor Window Y
 * @desc The Y position of the actor window.
 * Can be Number or JavaScript evaluation.
 * @default this._commandLabel.y
 *
 * @param == Gold Window ==
 * @default
 *
 * @param Gold Window X
 * @desc The X position of the gold window.
 * Can be Number or JavaScript evaluation.
 * @default 0
 *
 * @param Gold Window Y
 * @desc The Y position of the gold window.
 * Can be Number or JavaScript evaluation.
 * @default Graphics.boxHeight - this._goldWindow.height
 *
 * @param == Custom Commands ==
 * @default
 *
 * @param Command Symbol 1
 * @desc The symbol of the command that will have Command Icon 1. 
 * The order it's listed in the Parameters is irrelevant.
 * @default
 *
 * @param Command Icon 1
 * @desc The icon of the command that will have Command Icon 1. 
 * The order it's listed in the Parameters is irrelevant.
 * @default
 *
 * @param Command Symbol 2
 * @desc The symbol of the command that will have Command Icon 2. 
 * The order it's listed in the Parameters is irrelevant.
 * @default
 *
 * @param Command Icon 2
 * @desc The icon of the command that will have Command Icon 2. 
 * The order it's listed in the Parameters is irrelevant.
 * @default
 *
 * @param Command Symbol 3
 * @desc The symbol of the command that will have Command Icon 3. 
 * The order it's listed in the Parameters is irrelevant.
 * @default
 *
 * @param Command Icon 3
 * @desc The icon of the command that will have Command Icon 3. 
 * The order it's listed in the Parameters is irrelevant.
 * @default
 *
 * @param Command Symbol 4
 * @desc The symbol of the command that will have Command Icon 4. 
 * The order it's listed in the Parameters is irrelevant.
 * @default
 *
 * @param Command Icon 4
 * @desc The icon of the command that will have Command Icon 4. 
 * The order it's listed in the Parameters is irrelevant.
 * @default
 *
 * @param Command Symbol 5
 * @desc The symbol of the command that will have Command Icon 5. 
 * The order it's listed in the Parameters is irrelevant.
 * @default
 *
 * @param Command Icon 5
 * @desc The icon of the command that will have Command Icon 5. 
 * The order it's listed in the Parameters is irrelevant.
 * @default
 *
 * @param Command Symbol 6
 * @desc The symbol of the command that will have Command Icon 6. 
 * The order it's listed in the Parameters is irrelevant.
 * @default
 *
 * @param Command Icon 6
 * @desc The icon of the command that will have Command Icon 6. 
 * The order it's listed in the Parameters is irrelevant.
 * @default
 *
 * @param Command Symbol 7
 * @desc The symbol of the command that will have Command Icon 7. 
 * The order it's listed in the Parameters is irrelevant.
 * @default
 *
 * @param Command Icon 7
 * @desc The icon of the command that will have Command Icon 7. 
 * The order it's listed in the Parameters is irrelevant.
 * @default
 *
 * @param Command Symbol 8
 * @desc The symbol of the command that will have Command Icon 8. 
 * The order it's listed in the Parameters is irrelevant.
 * @default
 *
 * @param Command Icon 8
 * @desc The icon of the command that will have Command Icon 8. 
 * The order it's listed in the Parameters is irrelevant.
 * @default
 *
 * @param Command Symbol 9
 * @desc The symbol of the command that will have Command Icon 9. 
 * The order it's listed in the Parameters is irrelevant.
 * @default
 *
 * @param Command Icon 9
 * @desc The icon of the command that will have Command Icon 9. 
 * The order it's listed in the Parameters is irrelevant.
 * @default
 *
 * @param Command Symbol 10
 * @desc The symbol of the command that will have Command Icon 10. 
 * The order it's listed in the Parameters is irrelevant.
 * @default
 *
 * @param Command Icon 10
 * @desc The icon of the command that will have Command Icon 10. 
 * The order it's listed in the Parameters is irrelevant.
 * @default
 *
 * @param Command Symbol 11
 * @desc The symbol of the command that will have Command Icon 11. 
 * The order it's listed in the Parameters is irrelevant.
 * @default
 *
 * @param Command Icon 11
 * @desc The icon of the command that will have Command Icon 11. 
 * The order it's listed in the Parameters is irrelevant.
 * @default
 *
 * @param Command Symbol 12
 * @desc The symbol of the command that will have Command Icon 12. 
 * The order it's listed in the Parameters is irrelevant.
 * @default
 *
 * @param Command Icon 12
 * @desc The icon of the command that will have Command Icon 12. 
 * The order it's listed in the Parameters is irrelevant.
 * @default
 *
 * @param Command Symbol 13
 * @desc The symbol of the command that will have Command Icon 13. 
 * The order it's listed in the Parameters is irrelevant.
 * @default
 *
 * @param Command Icon 13
 * @desc The icon of the command that will have Command Icon 13. 
 * The order it's listed in the Parameters is irrelevant.
 * @default
 *
 * @param Command Symbol 14
 * @desc The symbol of the command that will have Command Icon 14. 
 * The order it's listed in the Parameters is irrelevant.
 * @default
 *
 * @param Command Icon 14
 * @desc The icon of the command that will have Command Icon 14. 
 * The order it's listed in the Parameters is irrelevant.
 * @default
 *
 * @param Command Symbol 15
 * @desc The symbol of the command that will have Command Icon 15. 
 * The order it's listed in the Parameters is irrelevant.
 * @default
 *
 * @param Command Icon 15
 * @desc The icon of the command that will have Command Icon 15. 
 * The order it's listed in the Parameters is irrelevant.
 * @default
 *
 * @param Command Symbol 16
 * @desc The symbol of the command that will have Command Icon 16. 
 * The order it's listed in the Parameters is irrelevant.
 * @default
 *
 * @param Command Icon 16
 * @desc The icon of the command that will have Command Icon 16. 
 * The order it's listed in the Parameters is irrelevant.
 * @default
 *
 * @param Command Symbol 17
 * @desc The symbol of the command that will have Command Icon 17. 
 * The order it's listed in the Parameters is irrelevant.
 * @default
 *
 * @param Command Icon 17
 * @desc The icon of the command that will have Command Icon 17. 
 * The order it's listed in the Parameters is irrelevant.
 * @default
 *
 * @param Command Symbol 18
 * @desc The symbol of the command that will have Command Icon 18. 
 * The order it's listed in the Parameters is irrelevant.
 * @default
 *
 * @param Command Icon 18
 * @desc The icon of the command that will have Command Icon 18. 
 * The order it's listed in the Parameters is irrelevant.
 * @default
 *
 * @param Command Symbol 19
 * @desc The symbol of the command that will have Command Icon 19. 
 * The order it's listed in the Parameters is irrelevant.
 * @default
 *
 * @param Command Icon 19
 * @desc The icon of the command that will have Command Icon 19. 
 * The order it's listed in the Parameters is irrelevant.
 * @default
 *
 * @param Command Symbol 20
 * @desc The symbol of the command that will have Command Icon 20. 
 * The order it's listed in the Parameters is irrelevant.
 * @default
 *
 * @param Command Icon 20
 * @desc The icon of the command that will have Command Icon 20. 
 * The order it's listed in the Parameters is irrelevant.
 * @default
 *
 * @help
 *
 *
 * Alternative Menu Screen: Icons
 * Version 1.01
 * SumRndmDde
 *
 *
 * Changelog (v1.01): Fixed Actor Window Cancel
 * 
 *
 * Gives your game an alternative menu screen.
 * 
 * This menu is based off of Icons!
 * The selections for each Command Window is an icon.
 *
 * You can manipulate the Icons used by using the Parameters at the top
 * of the list.
 *
 *
 * ==========================================================================
 *  Setting up Icons for Custom Commands
 * ==========================================================================
 *
 * At the very bottom of the Parameter list, there are places available
 * for inputting Icons for custom commands.
 *
 * You need to first provide the "symbol" of the command.
 * (A symbol is usually a word. For example, the symbol for the Debug
 * Command added by Yanfly's Main Menu Manager is "debug" (without quotes))
 *
 * Then, after you have done so, you can place the Icon Index in the 
 * proceeding Parameter.
 *
 * If you're using Yanfly's Main Menu Manager, you can find a command's 
 * symbol in the Parameter section it's help in.
 *
 *
 * On the other hand, if you have a Plugin that adds a command without
 * telling you the symbol for it, leave a comment on the YouTube video
 * or Forum post linking me to the Plugin; I'll help ya. ~
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

var Imported = Imported || {};
Imported["SumRndmDde AMS Icons"] = 1.00;

(function() {
	
	var icons = {};
	icons['item'] = Number(PluginManager.parameters('SRD_AltMenuScreen_Icons')['Item Icon']);
	icons['skill'] = Number(PluginManager.parameters('SRD_AltMenuScreen_Icons')['Skill Icon']);
	icons['equip'] = Number(PluginManager.parameters('SRD_AltMenuScreen_Icons')['Equip Icon']);
	icons['status'] = Number(PluginManager.parameters('SRD_AltMenuScreen_Icons')['Status Icon']);
	icons['formation'] = Number(PluginManager.parameters('SRD_AltMenuScreen_Icons')['Formation Icon']);
	icons['options'] = Number(PluginManager.parameters('SRD_AltMenuScreen_Icons')['Options Icon']);
	icons['save'] = Number(PluginManager.parameters('SRD_AltMenuScreen_Icons')['Save Icon']);
	icons['gameEnd'] = Number(PluginManager.parameters('SRD_AltMenuScreen_Icons')['Game End Icon']);

	for(var i = 1; i <= 20; i++) {
		var sym = String(PluginManager.parameters('SRD_AltMenuScreen_Icons')['Command Symbol ' + i]);
		if(sym.trim().length > 0) {
			icons[sym] = Number(PluginManager.parameters('SRD_AltMenuScreen_Icons')['Command Icon ' + i]);
		}
	}

	var _x = String(PluginManager.parameters('SRD_AltMenuScreen_Icons')['Icon Window X']);
	var _y = String(PluginManager.parameters('SRD_AltMenuScreen_Icons')['Icon Window Y']);
	var _stand = Number(PluginManager.parameters('SRD_AltMenuScreen_Icons')['Standard Padding']);
	var _icon = Number(PluginManager.parameters('SRD_AltMenuScreen_Icons')['Icon Padding']);
	var _iconX = Number(PluginManager.parameters('SRD_AltMenuScreen_Icons')['Icon X Position']);
	var _iconY = Number(PluginManager.parameters('SRD_AltMenuScreen_Icons')['Icon Y Position']);

	var _actorX = String(PluginManager.parameters('SRD_AltMenuScreen_Icons')['Actor Window X']);
	var _actorY = String(PluginManager.parameters('SRD_AltMenuScreen_Icons')['Actor Window Y']);
	var _align = String(PluginManager.parameters('SRD_AltMenuScreen_Icons')['Text Align']);
	var _labelX = String(PluginManager.parameters('SRD_AltMenuScreen_Icons')['Label Window X']);
	var _labelY = String(PluginManager.parameters('SRD_AltMenuScreen_Icons')['Label Window Y']);
	var _goldX = String(PluginManager.parameters('SRD_AltMenuScreen_Icons')['Gold Window X']);
	var _goldY = String(PluginManager.parameters('SRD_AltMenuScreen_Icons')['Gold Window Y']);

	var _Scene_Menu_create = Scene_Menu.prototype.create;
	Scene_Menu.prototype.create = function() {
	    _Scene_Menu_create.call(this);
	    this._commandLabel = new Window_CommandLabel(0, 0, this._commandWindow);
	    this.addWindow(this._commandLabel);
	    this._commandWindow.x = eval(_x);
	    this._commandWindow.y = eval(_y);
	    this._commandLabel.x = eval(_labelX);
	    this._commandLabel.y = eval(_labelY);
	    this._statusWindow.x = eval(_actorX);
	    this._statusWindow.y = eval(_actorY);
	    this._goldWindow.x = eval(_goldX);
	    this._goldWindow.y = eval(_goldY);
	};
	var _Scene_Menu_commandPersonal = Scene_Menu.prototype.commandPersonal;
	Scene_Menu.prototype.commandPersonal = function() {
		this._statusWindow.open();
	    _Scene_Menu_commandPersonal.call(this);
	};
	var _Scene_Menu_onPersonalCancel = Scene_Menu.prototype.onPersonalCancel;
	Scene_Menu.prototype.onPersonalCancel = function() {
	    _Scene_Menu_onPersonalCancel.call(this);
	    this._statusWindow.close();
	};
	var _Scene_Menu_commandFormation = Scene_Menu.prototype.commandFormation;
	Scene_Menu.prototype.commandFormation = function() {
		this._statusWindow.open();
	    _Scene_Menu_commandFormation.call(this);
	};
	var _Scene_Menu_onFormationCancel = Scene_Menu.prototype.onFormationCancel;
	Scene_Menu.prototype.onFormationCancel = function() {
		if (this._statusWindow.pendingIndex() < 0) {
	    	this._statusWindow.close();
	    }
	    _Scene_Menu_onFormationCancel.call(this);
	};
	var _Scene_ItemBase_createActorWindow = Scene_ItemBase.prototype.createActorWindow;
	Scene_ItemBase.prototype.createActorWindow = function() {
		_Scene_ItemBase_createActorWindow.call(this);
	    this._actorWindow.open();
	};
	Window_MenuCommand.prototype.windowWidth = function() {
	    return ((this.maxItems() * (this.itemWidth() + (this.textPadding() * 2))) + 
	    	(this.standardPadding() * 2)) - (this.textPadding() * 2);
	};
	Window_MenuCommand.prototype.windowHeight = function() {
	    return this.itemHeight() + (this.standardPadding() * 2);
	};
	Window_MenuCommand.prototype.standardPadding = function() {
	    return _stand;
	};
	Window_MenuCommand.prototype.textPadding = function() {
	    return 6;
	};
	Window_MenuCommand.prototype.iconPadding = function() {
	    return _icon;
	};
	Window_MenuCommand.prototype.maxCols = function() {
	    return this.maxItems();
	};
	Window_MenuCommand.prototype.numVisibleRows = function() {
	    return 1;
	};
	Window_MenuCommand.prototype.itemWidth = function() {
	    return Window_Base._iconWidth + this.iconPadding();
	};
	Window_MenuCommand.prototype.itemHeight = function() {
	    return Window_Base._iconHeight + this.iconPadding();
	};
	Window_MenuCommand.prototype.drawItem = function(index) {
	    var rect = this.itemRectForText(index);
	    var align = this.itemTextAlign();
	    var symbol = this.commandSymbol(index);
	    var enabled = this.isCommandEnabled(index);
	    this.resetTextColor();
		var bitmap = ImageManager.loadSystem('IconSet');
	    var pw = Window_Base._iconWidth;
	    var ph = Window_Base._iconHeight;
	    var sx = icons[symbol] % 16 * pw;
	    var sy = Math.floor(icons[symbol] / 16) * ph;
	    if(!enabled) this.contents.paintOpacity = 100;
	    this.contents.blt(bitmap, sx, sy, pw, ph, rect.x + _iconX, rect.y + _iconY);
	    if(!enabled) this.contents.paintOpacity = 255;
	};
	var _Window_MenuStatus_initialize = Window_MenuStatus.prototype.initialize;
	Window_MenuStatus.prototype.initialize = function(x, y) {
	    _Window_MenuStatus_initialize.call(this, x, y);
	    this.openness = 0;
	};
	Window_MenuStatus.prototype.windowWidth = function() {
	    return 240;
	};
	Window_MenuStatus.prototype.windowHeight = function() {
	    return this.fittingHeight(this.numVisibleRows());
	};
	Window_MenuStatus.prototype.numVisibleRows = function() {
	    return Math.ceil(this.maxItems() / this.maxCols());
	};
	Window_MenuStatus.prototype.itemHeight = function() {
	    return this.lineHeight();
	};
	Window_MenuStatus.prototype.drawItem = function(index) {
		this.drawItemBackground(index);
	    var rect = this.itemRectForText(index);
	    var align = _align;
	    this.resetTextColor();
	    this.drawText($gameParty.members()[index].name(), rect.x, rect.y, rect.width, align);
	};
	function Window_CommandLabel() {
	    this.initialize.apply(this, arguments);
	}
	Window_CommandLabel.prototype = Object.create(Window_Base.prototype);
	Window_CommandLabel.prototype.constructor = Window_CommandLabel;
	Window_CommandLabel.prototype.initialize = function(x, y, win) {
	    var width = this.windowWidth();
	    var height = this.windowHeight();
	    Window_Base.prototype.initialize.call(this, x, y, width, height);
	    this._commandWindow = win;
	    this._value = "";
	    this.refresh();
	};
	Window_CommandLabel.prototype.windowWidth = function() {
	    return 240;
	};
	Window_CommandLabel.prototype.windowHeight = function() {
	    return this.fittingHeight(1);
	};
	Window_CommandLabel.prototype.refresh = function() {
		if(this._value != this._commandWindow.currentData().symbol) {
			this._value = this._commandWindow.currentData().symbol;
		    var width = this.contents.width - this.textPadding() * 2;
		    this.contents.clear();
		    this.drawText(this._commandWindow.currentData().name, this.textPadding(), 0, width);
		}
	};
	var _Window_CommandLabel_update = Window_CommandLabel.prototype.update;
	Window_CommandLabel.prototype.update = function() {
	    if(this._commandWindow) this.refresh();
	    _Window_CommandLabel_update.call(this);
	};
	Window_CommandLabel.prototype.open = function() {
	    this.refresh();
	    Window_Base.prototype.open.call(this);
	};
	if(Imported.YEP_MainMenuManager) {
		Scene_Menu.prototype.resizeGoldWindow = function() {};
	}
})();