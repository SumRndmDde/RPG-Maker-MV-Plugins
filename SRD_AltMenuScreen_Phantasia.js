/*:
 * @plugindesc Alternative Menu Screen Phantasia. An alternative menu based off of Tales of Phantasia.
 * @author SumRndmDde
 *
 * @param "Play Time" Text
 * @desc The text used for the "play time" in the menu.
 * @default Play Time
 *
 * @param Sprite Size Ratio
 * @desc Set the ratio of the walking sprite size on the menu.
 * For example: 1 = normal, 2 = double size, 0.5 = half size
 * @default 1
 *
 * @param Show White Borders?
 * @desc Set this to 'true' if you wish to have white borders.
 * @default false
 *
 * @param Character Size
 * @desc By default, RMMV uses character sprites that are 48x48. If using a different sized character sprite, input it here.
 * @default 48
 *
 * @param Command Columns
 * @desc The max amount of columns in the command selector within the menu. 
 * @default 4
 *
 * @param Command Rows
 * @desc The amount of visible rows in the command selector within the menu. 
 * @default 2
 *
 * @param Y Offset
 * @desc The distance between each row of information within the Actor Menu Status thingies.
 * @default 32
 *
 * @help
 *
 *
 * Alternative Menu Screen: Phantasia
 * Version 1.02
 * SumRndmDde
 *
 *
 * Changelog (v1.02): Fixed Shop Choices
 *
 *
 * Gives your game an alternative menu screen.
 * 
 * This one is based off of the menu from
 * Tales of Phantasia.
 *
 *
 * Until next time,
 *   ~ SumRndmDde
 */

(function() {
	var playTimeText = String(PluginManager.parameters('SRD_AltMenuScreen_Phantasia')['"Play Time" Text']);
	var spriteSizeRatio = Number(PluginManager.parameters('SRD_AltMenuScreen_Phantasia')['Sprite Size Ratio']);
	var borders = String(PluginManager.parameters('SRD_AltMenuScreen_Phantasia')['Show White Borders?']).trim().toLowerCase() === 'true';
	var sumColumns = Number(PluginManager.parameters('SRD_AltMenuScreen_Phantasia')['Command Columns']);
	var sumRows = Number(PluginManager.parameters('SRD_AltMenuScreen_Phantasia')['Command Rows']);
	var sumYOffset = Number(PluginManager.parameters('SRD_AltMenuScreen_Phantasia')['Y Offset']);
	var charSize = Number(PluginManager.parameters('SRD_AltMenuScreen_Phantasia')['Character Size'])

	Window_Base.prototype.drawCharacterAnimated = function(characterName, characterIndex, x, y, frame) {
	    var bitmap = ImageManager.loadCharacter(characterName);
	    var big = ImageManager.isBigCharacter(characterName);
	    var pw = bitmap.width / (big ? 3 : 12);
	    var ph = bitmap.height / (big ? 4 : 8);
	    var n = characterIndex;
	    var sx = ((n % 4 * 3 + 1) * pw) + (frame * charSize/*48*/);
	    var sy = ((Math.floor(n / 4) * 4) * ph);
	    this.contents.blt(bitmap, sx, sy, pw, ph, x - pw / 2, y - ph, pw * spriteSizeRatio, ph * spriteSizeRatio);
	};

	var _Scene_Menu_create = Scene_Menu.prototype.create;
	Scene_Menu.prototype.create = function() {
	    _Scene_Menu_create.call(this);
		this._goldWindow.y = this._commandWindow.height;
		this._statusWindow.x = 0;
		this._statusWindow.y = this._goldWindow.y + this._goldWindow.height;
		this._timeWindow = new Window_MenuTimeAndBattles(0, this._statusWindow.y + this._statusWindow.height);
		this.addWindow(this._timeWindow);
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
	var _Window_MenuStatus_initialize = Window_MenuStatus.prototype.initialize;
	Window_MenuStatus.prototype.initialize = function(x, y) {
	    _Window_MenuStatus_initialize.call(this, x, y);
	    this._tick = 0;
	    this._frame = 0;
	};
	Window_MenuStatus.prototype.windowWidth = function() {
	    return Graphics.width;
	};
	Window_MenuStatus.prototype.windowHeight = function() {
	    return Graphics.height - 180 - this.fittingHeight(1);
	};
	Window_MenuStatus.prototype.numVisibleRows = function() {
	    return 2;
	};
	Window_MenuStatus.prototype.maxCols = function() {
	    return 2;
	};
	var _Window_MenuStatus_update = Window_MenuStatus.prototype.update;
	Window_MenuStatus.prototype.update = function() {
		_Window_MenuStatus_update.call(this);
	    this._tick += 1;
	    if(this._tick >= 20) {
	    	this._frame += 1;
	    	if(this._frame > 2) this._frame = -1;
	    	this.refresh();
	    	this._tick = 0;
	    }
	};
	Window_MenuStatus.prototype.drawItemImage = function(index) {
	    var actor = $gameParty.members()[index];
	    var rect = this.itemRect(index);
	    this.changePaintOpacity(actor.isBattleMember());
	    var frame = (this._frame === 2) ? 0 : this._frame;
	    this.drawCharacterAnimated(actor.characterName(), actor.characterIndex(), 
	    	rect.x + rect.width - (48 * spriteSizeRatio), rect.y + 24 + (48 / spriteSizeRatio), frame);
	    this.changePaintOpacity(true);
	};
	Window_MenuStatus.prototype.drawItemStatus = function(index) {
	    var actor = $gameParty.members()[index];
	    var rect = this.itemRect(index);
	    var x = rect.x + 4;// + 162;
	    var y = rect.y;
	    var yOffset = sumYOffset;
	    var width = rect.width - (48 * 2 * spriteSizeRatio) - 8;
	    this.drawActorName(actor, x, y, width);
	    this.drawActorLevel(actor, x, y + yOffset, width);
	    this.drawActorClass(actor, x, y, width, 'right');
	    this.drawActorHp(actor, x, y + (yOffset * 2), width);

	    var lineHeight = this.lineHeight();
	    var expTotal = TextManager.expTotal.format(TextManager.exp);
	    var expNext = TextManager.expNext.format(TextManager.level);
	    var value1 = actor.currentExp();
	    var value2 = actor.nextRequiredExp();
	    if (actor.isMaxLevel()) {
	        value1 = '-------';
	        value2 = '-------';
	    }
	    this.changeTextColor(this.systemColor());
	    this.drawText(expTotal, x, y + (yOffset * 3), rect.width - 8);
	    this.drawText(expNext, x, y + (yOffset * 4), rect.width - 8);
	    this.resetTextColor();
	    this.drawText(value1, x, y + (yOffset * 3), rect.width - 8, 'right');
	    this.drawText(value2, x, y + (yOffset * 4), rect.width - 8, 'right');

	    this.resetFontSettings();
	};
	var _Window_MenuStatus_refresh = Window_MenuStatus.prototype.refresh;
	Window_MenuStatus.prototype.refresh = function() {
	    _Window_MenuStatus_refresh.call(this);
	    if(this.contents && borders) {
	    	this.contents.fillRect(0, (this.windowHeight() / 2) - 20, this.windowWidth(), 3, "#ffffff");
	    	this.contents.fillRect((this.windowWidth() / 2) - 20, 0, 3, this.windowHeight(), "#ffffff");
	    }
	};
	Window_MenuStatus.prototype.drawActorClass = function(actor, x, y, width, align) {
	    width = width || 168;
	    this.resetTextColor();
	    this.drawText(actor.currentClass().name, x, y, width, align);
	};
	function Window_MenuTimeAndBattles() {
	    this.initialize.apply(this, arguments);
	}
	Window_MenuTimeAndBattles.prototype = Object.create(Window_Base.prototype);
	Window_MenuTimeAndBattles.prototype.constructor = Window_Gold2;
	Window_MenuTimeAndBattles.prototype.initialize = function(x, y) {
	    var width = this.windowWidth();
	    var height = this.windowHeight();
	    Window_Base.prototype.initialize.call(this, x, y, width, height);
	    this.refresh();
	};
	Window_MenuTimeAndBattles.prototype.windowWidth = function() {
	    return Graphics.width;
	};
	Window_MenuTimeAndBattles.prototype.windowHeight = function() {
	    return this.fittingHeight(1);
	};
	Window_MenuTimeAndBattles.prototype.refresh = function() {
	    var x = this.textPadding();
	    var width = this.contents.width - this.textPadding() * 2;
	    this.contents.clear();
	    this.resetTextColor();
	    this.drawText(playTimeText + " " + $gameSystem.playtimeText(), x, 0, width - 6, 'center');
	};
	Window_MenuTimeAndBattles.prototype.open = function() {
	    this.refresh();
	    Window_Base.prototype.open.call(this);
	};
	Window_MenuTimeAndBattles.prototype.update = function() {
	    this.refresh();
	    Window_Base.prototype.update.call(this);
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