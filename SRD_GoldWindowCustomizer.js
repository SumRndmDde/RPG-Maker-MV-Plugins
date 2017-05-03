/*:
 * @plugindesc A Plugin that allows you to manipulate the information presented on the Gold Window.
 * @author SumRndmDde
 *
 * @param Rows
 * @desc The number of rows in the gold window.
 * Input a number.
 * @default 1
 *
 * @param Columns
 * @desc The number of columns in the gold window.
 * Input a number.
 * @default 1
 *
 * @param X
 * @desc The x position of the Gold Window.
 * Input a number or JavaScript eval.
 * @default this._goldWindow.x
 *
 * @param Y
 * @desc The y position of the Gold Window.
 * Input a number or JavaScript eval.
 * @default this._commandWindow.height
 *
 * @param Width
 * @desc The width of the Gold Window.
 * Input a number or JavaScript eval.
 * @default 240 * this.infoCols()
 *
 * @param Height
 * @desc The height of the Gold Window.
 * Input a number or JavaScript eval.
 * @default this.fittingHeight(this.infoRows())
 *
 * @param Font Size
 * @desc The size of the text from the "text" code.
 * Input a number.
 * @default 28
 *
 * @param == Labels ==
 * @default
 *
 * @param Battle Label
 * @desc The label shown next to the battle count.
 * @default Battles
 *
 * @param Map Label
 * @desc The label shown next to the map.
 * @default (Map)
 *
 * @param D-Map Label
 * @desc The label shown next to the map display name.
 * @default (Map)
 *
 * @param BGM Label
 * @desc The label shown next to the bgm.
 * @default (BGM)
 *
 * @param No BGM Label
 * @desc The label shown when there is no bgm.
 * @default None
 *
 * @param == Information ==
 * @default
 *
 * @param Information 1
 * @desc The piece of information in slot 1 of the Gold Window.
 * Visit the Help section of the Plugin for list of commands.
 * @default gold
 *
 * @param Information 2
 * @desc The piece of information in slot 2 of the Gold Window.
 * Visit the Help section of the Plugin for list of commands.
 * @default
 *
 * @param Information 3
 * @desc The piece of information in slot 3 of the Gold Window.
 * Visit the Help section of the Plugin for list of commands.
 * @default
 *
 * @param Information 4
 * @desc The piece of information in slot 4 of the Gold Window.
 * Visit the Help section of the Plugin for list of commands.
 * @default
 *
 * @param Information 5
 * @desc The piece of information in slot 5 of the Gold Window.
 * Visit the Help section of the Plugin for list of commands.
 * @default
 *
 * @param Information 6
 * @desc The piece of information in slot 6 of the Gold Window.
 * Visit the Help section of the Plugin for list of commands.
 * @default
 *
 * @param Information 7
 * @desc The piece of information in slot 7 of the Gold Window.
 * Visit the Help section of the Plugin for list of commands.
 * @default
 *
 * @param Information 8
 * @desc The piece of information in slot 8 of the Gold Window.
 * Visit the Help section of the Plugin for list of commands.
 * @default
 *
 * @param Information 9
 * @desc The piece of information in slot 9 of the Gold Window.
 * Visit the Help section of the Plugin for list of commands.
 * @default
 *
 * @param Information 10
 * @desc The piece of information in slot 10 of the Gold Window.
 * Visit the Help section of the Plugin for list of commands.
 * @default
 *
 * @param Information 11
 * @desc The piece of information in slot 11 of the Gold Window.
 * Visit the Help section of the Plugin for list of commands.
 * @default
 *
 * @param Information 12
 * @desc The piece of information in slot 12 of the Gold Window.
 * Visit the Help section of the Plugin for list of commands.
 * @default
 *
 * @param Information 13
 * @desc The piece of information in slot 13 of the Gold Window.
 * Visit the Help section of the Plugin for list of commands.
 * @default
 *
 * @param Information 14
 * @desc The piece of information in slot 14 of the Gold Window.
 * Visit the Help section of the Plugin for list of commands.
 * @default
 *
 * @param Information 15
 * @desc The piece of information in slot 15 of the Gold Window.
 * Visit the Help section of the Plugin for list of commands.
 * @default
 *
 * @param Information 16
 * @desc The piece of information in slot 16 of the Gold Window.
 * Visit the Help section of the Plugin for list of commands.
 * @default
 *
 * @param Information 17
 * @desc The piece of information in slot 17 of the Gold Window.
 * Visit the Help section of the Plugin for list of commands.
 * @default
 *
 * @param Information 18
 * @desc The piece of information in slot 18 of the Gold Window.
 * Visit the Help section of the Plugin for list of commands.
 * @default
 *
 * @param Information 19
 * @desc The piece of information in slot 19 of the Gold Window.
 * Visit the Help section of the Plugin for list of commands.
 * @default
 *
 * @param Information 20
 * @desc The piece of information in slot 20 of the Gold Window.
 * Visit the Help section of the Plugin for list of commands.
 * @default
 *
 * @param Information 21
 * @desc The piece of information in slot 21 of the Gold Window.
 * Visit the Help section of the Plugin for list of commands.
 * @default
 *
 * @param Information 22
 * @desc The piece of information in slot 22 of the Gold Window.
 * Visit the Help section of the Plugin for list of commands.
 * @default
 *
 * @param Information 23
 * @desc The piece of information in slot 23 of the Gold Window.
 * Visit the Help section of the Plugin for list of commands.
 * @default
 *
 * @param Information 24
 * @desc The piece of information in slot 24 of the Gold Window.
 * Visit the Help section of the Plugin for list of commands.
 * @default
 *
 * @param Information 25
 * @desc The piece of information in slot 25 of the Gold Window.
 * Visit the Help section of the Plugin for list of commands.
 * @default
 *
 * @param Information 26
 * @desc The piece of information in slot 26 of the Gold Window.
 * Visit the Help section of the Plugin for list of commands.
 * @default
 *
 * @param Information 27
 * @desc The piece of information in slot 27 of the Gold Window.
 * Visit the Help section of the Plugin for list of commands.
 * @default
 *
 * @param Information 28
 * @desc The piece of information in slot 28 of the Gold Window.
 * Visit the Help section of the Plugin for list of commands.
 * @default
 *
 * @param Information 29
 * @desc The piece of information in slot 29 of the Gold Window.
 * Visit the Help section of the Plugin for list of commands.
 * @default
 *
 * @param Information 30
 * @desc The piece of information in slot 30 of the Gold Window.
 * Visit the Help section of the Plugin for list of commands.
 * @default
 *
 * @param Information 31
 * @desc The piece of information in slot 31 of the Gold Window.
 * Visit the Help section of the Plugin for list of commands.
 * @default
 *
 * @param Information 32
 * @desc The piece of information in slot 32 of the Gold Window.
 * Visit the Help section of the Plugin for list of commands.
 * @default
 *
 * @param Information 33
 * @desc The piece of information in slot 33 of the Gold Window.
 * Visit the Help section of the Plugin for list of commands.
 * @default
 *
 * @param Information 34
 * @desc The piece of information in slot 34 of the Gold Window.
 * Visit the Help section of the Plugin for list of commands.
 * @default
 *
 * @param Information 35
 * @desc The piece of information in slot 35 of the Gold Window.
 * Visit the Help section of the Plugin for list of commands.
 * @default
 *
 * @param Information 36
 * @desc The piece of information in slot 36 of the Gold Window.
 * Visit the Help section of the Plugin for list of commands.
 * @default
 *
 * @param Information 37
 * @desc The piece of information in slot 37 of the Gold Window.
 * Visit the Help section of the Plugin for list of commands.
 * @default
 *
 * @param Information 38
 * @desc The piece of information in slot 38 of the Gold Window.
 * Visit the Help section of the Plugin for list of commands.
 * @default
 *
 * @param Information 39
 * @desc The piece of information in slot 39 of the Gold Window.
 * Visit the Help section of the Plugin for list of commands.
 * @default
 *
 * @param Information 40
 * @desc The piece of information in slot 40 of the Gold Window.
 * Visit the Help section of the Plugin for list of commands.
 * @default
 *
 * @param Information 41
 * @desc The piece of information in slot 41 of the Gold Window.
 * Visit the Help section of the Plugin for list of commands.
 * @default
 *
 * @param Information 42
 * @desc The piece of information in slot 42 of the Gold Window.
 * Visit the Help section of the Plugin for list of commands.
 * @default
 *
 * @param Information 43
 * @desc The piece of information in slot 43 of the Gold Window.
 * Visit the Help section of the Plugin for list of commands.
 * @default
 *
 * @param Information 44
 * @desc The piece of information in slot 44 of the Gold Window.
 * Visit the Help section of the Plugin for list of commands.
 * @default
 *
 * @param Information 45
 * @desc The piece of information in slot 45 of the Gold Window.
 * Visit the Help section of the Plugin for list of commands.
 * @default
 *
 * @param Information 46
 * @desc The piece of information in slot 46 of the Gold Window.
 * Visit the Help section of the Plugin for list of commands.
 * @default
 *
 * @param Information 47
 * @desc The piece of information in slot 47 of the Gold Window.
 * Visit the Help section of the Plugin for list of commands.
 * @default
 *
 * @param Information 48
 * @desc The piece of information in slot 48 of the Gold Window.
 * Visit the Help section of the Plugin for list of commands.
 * @default
 *
 * @param Information 49
 * @desc The piece of information in slot 49 of the Gold Window.
 * Visit the Help section of the Plugin for list of commands.
 * @default
 *
 * @param Information 50
 * @desc The piece of information in slot 50 of the Gold Window.
 * Visit the Help section of the Plugin for list of commands.
 * @default
 *
 * @help
 *
 * Gold Window Customizer
 * Version 1.05
 * SumRndmDde
 *
 *
 * A Plugin that allows you to manipulate the information presented on the 
 * Gold Window using a wide variety of information codes.
 *
 * 
 * ==========================================================================
 *  Information Commands
 * ==========================================================================
 *
 * In order to customize the information presented, one must manipulate the 
 * "Information #" Parameters to list out all the info that is desired.
 *
 * Here is a list of all the available codes for information:
 *
 *  Gold             -	 Shows the party's gold.
 *  Item: x          -   Shows the amount of Item ID x the party has.
 *  Weapon: x        -   Shows the amount of Weapon ID x the party has.
 *  Armor: x         -   Shows the amount of Armor ID x the party has.
 *  Variable: x      -   Shows the value of Variable ID x.
 *  Switch: x        -   Shows the value of Switch ID x.
 *  Battles          -   Shows the amount of battles fought.
 *  Map              -   Shows the name of the map.
 *  Map-display      -   Shows the display name of the map.
 *  BGM              -   Shows the bgm that is currently playing.
 *  Game-Time        -   Displays the current game time.
 *  Text: x          -   Displays the text x and aligns it to the left.
 *  Text-right: x    -   Displays the text x and aligns it to the right.
 *  Text-center: x   -   Displays the text x and aligns it to the center.
 *  Text-ex: x       -   Displays the text x and allows use of text codes.
 *  Eval: x          -   Displays the JavaScript String eval.
 *
 *  Gauge: rate, text, color1, color2
 *                   -   Displays a gauge based off of a JavaScript eval rate.
 *
 *  (You can also do Gauge-left and Gauge-right to align the text to 
 *   the left or right.)
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
 *
 */

var SRD = SRD || {};
SRD.GoldWindowCustomizer = SRD.GoldWindowCustomizer || {};

var Imported = Imported || {};
Imported["SumRndmDde Gold Window Customizer"] = 1.00;

(function(_) {

	var params = PluginManager.parameters('SRD_GoldWindowCustomizer');

	_.width = String(params['Width']);
	_.height = String(params['Height']);
	_.x = String(params['X']);
	_.y = String(params['Y']);
	_.rows = parseInt(params['Rows']);
	_.columns = parseInt(params['Columns']);
	_.size = parseInt(params['Font Size']);

	_.battleLabel = String(params['Battle Label']);
	_.mapLabel = String(params['Map Label']);
	_.dmapLabel = String(params['D-Map Label']);
	_.bgmLabel = String(params['BGM Label']);
	_.nobgmLabel = String(params['No BGM Label']);

	_.info = [];
	for(var i = 0; i < 50; i++) {
		var temp = String(params['Information ' + (i+1)]);
		if(temp.trim().length > 0) _.info[i] = temp;
	}
	
	//-----------------------------------------------------------------------------
	// Scene_Menu
	//-----------------------------------------------------------------------------

	var _Scene_Menu_create = Scene_Menu.prototype.create;
	Scene_Menu.prototype.create = function() {
		_Scene_Menu_create.call(this);
		this._windowLayer.removeChild(this._goldWindow);
		this._goldWindow = new Window_Gold_Customized(0, 0);
		this.addWindow(this._goldWindow);
		this._goldWindow.x = eval(_.x);
		this._goldWindow.y = eval(_.y);
	};

	//-----------------------------------------------------------------------------
	// Window_Base
	//-----------------------------------------------------------------------------

	//An edit of Yanfly's Core Engine's drawCurrencyValue function to help compatibility.
	if(Imported.YEP_CoreEngine) {
	var _Window_Base_drawCurrencyValue = Window_Base.prototype.drawCurrencyValue;
	Window_Base.prototype.drawCurrencyValue = function(value, unit, wx, wy, ww, item) {
		if(!item || this.usingGoldIcon(unit)) {
			_Window_Base_drawCurrencyValue.call(this, value, unit, wx, wy, ww);
		} else if(item === 'override') {
			this.resetTextColor();
			this.contents.fontSize = Yanfly.Param.GoldFontSize;
			if(item.iconIndex && item.iconIndex > 0) {
				var cx = Window_Base._iconWidth;
			} else {
				var cx = this.textWidth(unit);
			}
			var text = value;
			this.drawText(text, wx, wy, ww - cx - 4, 'right');
			if(item.iconIndex && item.iconIndex > 0) {
				this.drawIcon(item.iconIndex, wx + ww - Window_Base._iconWidth, wy + 2);
			} else {
				this.changeTextColor(this.systemColor());
				this.drawText(unit, wx, wy, ww, 'right');
			}
			this.resetFontSettings();
		} else {
			this.resetTextColor();
			this.contents.fontSize = Yanfly.Param.GoldFontSize;
			if(item.iconIndex && item.iconIndex > 0) {
				var cx = Window_Base._iconWidth;
			} else {
				var cx = this.textWidth(unit);
			}
			var text = Yanfly.Util.toGroup(value);
			if(this.textWidth(text) > ww - cx) {
				text = Yanfly.Param.GoldOverlap;
			}
			this.drawText(text, wx, wy, ww - cx - 4, 'right');
			if(item.iconIndex && item.iconIndex > 0) {
				this.drawIcon(item.iconIndex, wx + ww - Window_Base._iconWidth, wy + 2);
			} else {
				this.changeTextColor(this.systemColor());
				this.drawText(unit, wx, wy, ww, 'right');
			}
			this.resetFontSettings();
		}
	};
	}

	//-----------------------------------------------------------------------------
	// Window_Message
	//-----------------------------------------------------------------------------

	var _Window_Message_createSubWindows = Window_Message.prototype.createSubWindows;
	Window_Message.prototype.createSubWindows = function() {
		_Window_Message_createSubWindows.call(this);
		this._goldWindow = new Window_Gold_Customized(0, 0);
		this._goldWindow.x = Graphics.boxWidth - this._goldWindow.width;
		this._goldWindow.openness = 0;
	};

	//-----------------------------------------------------------------------------
	// Window_Gold_Customized
	//-----------------------------------------------------------------------------

	function Window_Gold_Customized() {
		this.initialize.apply(this, arguments);
	}

	Window_Gold_Customized.prototype = Object.create(Window_Gold.prototype);
	Window_Gold_Customized.prototype.constructor = Window_Gold_Customized;

	Window_Gold_Customized.prototype.initialize = function() {
		Window_Gold.prototype.initialize.call(this);
		this._systemTimeRefresh = "";
	}

	Window_Gold_Customized.prototype.windowWidth = function() {
		return eval(_.width);
	};

	Window_Gold_Customized.prototype.windowHeight = function() {
		return eval(_.height);
	};

	Window_Gold_Customized.prototype.infoRows = function() {
		return _.rows;
	};

	Window_Gold_Customized.prototype.infoCols = function() {
		return _.columns;
	};

	Window_Gold_Customized.prototype.update = function() {
		Window_Gold.prototype.update.call(this);
		if(this._systemTimeisRefreshing && this._systemTimeRefresh !== $gameSystem.playtimeText()) {
			this.refresh();
			this._systemTimeRefresh = $gameSystem.playtimeText();
		}
	};

	Window_Gold_Customized.prototype.refresh = function() {
		var x = this.textPadding();
		var y = 0;
		var width = this.contents.width - this.textPadding() * 2;
		var lh = this.lineHeight();
		this.contents.clear();
		for(var i = 0; i < _.info.length; i++) {
			if(!_.info[i]) continue;
			if(_.info[i].trim().toLowerCase() === 'gold') {
				this.drawCurrencyValue(this.value(), this.currencyUnit(), x, y + (i * lh), width);
			} else if(_.info[i].match(/item([s]?):\s*(\d+)/i)) {
				var item = $dataItems[parseInt(RegExp.$2)];
				this.drawCurrencyValue($gameParty.numItems(item), item.name + RegExp.$1, x, y + (i * lh), width, item);
			} else if(_.info[i].match(/weapon([s]?):\s*(\d+)/i)) {
				var item = $dataWeapons[parseInt(RegExp.$2)];
				this.drawCurrencyValue($gameParty.numItems(item), item.name + RegExp.$1, x, y + (i * lh), width, item);
			} else if(_.info[i].match(/(?:armor|armour)([s]?):\s*(\d+)/i)) {
				var item = $dataArmors[parseInt(RegExp.$2)];
				this.drawCurrencyValue($gameParty.numItems(item), item.name + RegExp.$1, x, y + (i * lh), width, item);
			} else if(_.info[i].match(/variable:\s*(\d+)/i)) {
				var id = parseInt(RegExp.$1);
				this.drawCurrencyValue($gameVariables.value(id), $dataSystem.variables[id], x, y + (i * lh), width, 'override');
			} else if(_.info[i].match(/switch:\s*(\d+)/i)) {
				var id = parseInt(RegExp.$1);
				var str = ($gameSwitches.value(id)) ? "ON" : "OFF";
				this.drawCurrencyValue(str, $dataSystem.switches[id], x, y + (i * lh), width, 'override');
			} else if(_.info[i].match(/battles/i)) {
				this.drawCurrencyValue($gameSystem.battleCount(), _.battleLabel, x, y + (i * lh), width, 'override');
			} else if(_.info[i].match(/map-display/i)) {
				this.drawCurrencyValue($gameMap.displayName(), " " + _.dmapLabel, x, y + (i * lh), width, 'override');
			} else if(_.info[i].match(/map/i)) {
				this.drawCurrencyValue($dataMapInfos[$gameMap.mapId()].name, " " + _.mapLabel, x, y + (i * lh), width, 'override');
			} else if(_.info[i].match(/bgm/i)) {
				this.drawCurrencyValue((AudioManager._currentBgm) ? AudioManager._currentBgm.name : _.nobgmLabel, " " + _.bgmLabel, x, y + (i * lh), width, 'override');
			} else if(_.info[i].match(/gauge:\s*(.*)\s*,\s*(.*)\s*,\s*(.*)\s*,\s*(.*)/i)) {
				var code = String(RegExp.$1);
				var name = String(RegExp.$2);
				var col1 = String(RegExp.$3);
				var col2 = String(RegExp.$4);
				this.drawGauge(x, y + (i * lh), width, eval(code), col1, col2);
				this.resetTextColor();
				this.contents.fontSize = _.size;
				this.drawText(name, x, y + (i * lh), width, 'center');
			} else if(_.info[i].match(/gauge-left:\s*(.*)\s*,\s*(.*)\s*,\s*(.*)\s*,\s*(.*)/i)) {
				var code = String(RegExp.$1);
				var name = String(RegExp.$2);
				var col1 = String(RegExp.$3);
				var col2 = String(RegExp.$4);
				this.drawGauge(x, y + (i * lh), width, eval(code), col1, col2);
				this.resetTextColor();
				this.contents.fontSize = _.size;
				this.drawText(name, x, y + (i * lh), width, 'left');
			} else if(_.info[i].match(/gauge-right:\s*(.*)\s*,\s*(.*)\s*,\s*(.*)\s*,\s*(.*)/i)) {
				var code = String(RegExp.$1);
				var name = String(RegExp.$2);
				var col1 = String(RegExp.$3);
				var col2 = String(RegExp.$4);
				this.drawGauge(x, y + (i * lh), width, eval(code), col1, col2);
				this.resetTextColor();
				this.contents.fontSize = _.size;
				this.drawText(name, x, y + (i * lh), width, 'right');
			} else if(_.info[i].match(/text:(.*)/i)) {
				this.resetTextColor();
				this.contents.fontSize = _.size;
				this.drawText(RegExp.$1, x, y + (i * lh), width, 'left');
			} else if(_.info[i].match(/text-right:(.*)/i)) {
				this.resetTextColor();
				this.contents.fontSize = _.size;
				this.drawText(RegExp.$1, x, y + (i * lh), width, 'right');
			} else if(_.info[i].match(/text-center:(.*)/i)) {
				this.resetTextColor();
				this.contents.fontSize = _.size;
				this.drawText(RegExp.$1, x, y + (i * lh), width, 'center');
			} else if(_.info[i].match(/text-ex:(.*)/i)) {
				this.contents.fontSize = _.size;
				this.drawTextEx(RegExp.$1, x, y + (i * lh));
			} else if(_.info[i].match(/eval:(.*)/i)) {
				this.contents.fontSize = _.size;
				this.drawText(eval(RegExp.$1), x, y + (i * lh), width, 'left');
			} else if(_.info[i].match(/game-time/i)) {
				this.contents.fontSize = _.size;
				this.drawCurrencyValue($gameSystem.playtimeText(), " " + "(Time)", x, y + (i * lh), width, 'override');
				//this.drawText($gameSystem.playtimeText(), x, y + (i * lh), width, 'left');
				this._systemTimeisRefreshing = true;
			}
			this.resetFontSettings();
		}
	};

})(SRD.GoldWindowCustomizer);