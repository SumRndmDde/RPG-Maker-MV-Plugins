/*:
 * @plugindesc Allows you to create a Shop that turns ON Switches when something is purchased from the Shop.
 * @author SumRndmDde
 *
 * @param Help Window Lines
 * @desc The amount of lines the Help Window for the Switch Shop is.
 * @default 3
 *
 * @param Buy Window Cols
 * @desc The amount of columns the Buy Window for the Switch Shop has.
 * @default 1
 *
 * @help
 *
 * Switch Shop
 * Version 1.01
 * SumRndmDde
 *
 *
 * This Plugin allows you to set up a Shop for the Player.
 * However, unlike normal Shops, this Shop sells Items that, when purchased,
 * turn on a Switch.
 *
 * The Items themselves will not be added to the inventory of the Party,
 * only the Switch will be turned on.
 *
 *
 * ==========================================================================
 *  How to Set up a Switch Shop
 * ==========================================================================
 *
 * In order to set up a Switch Shop, run the Plugin Command:
 *
 *  SetSwitchShop
 *
 * This will make it so the next "Shop Processing" will be a Switch Shop.
 * So, obviously, after running that Plugin Command, run a Shop Processing.
 *
 * Within the Shop Processing, list all the items you wish to sell; you can
 * learn how to set up the Items by reading the text below:
 *
 *
 * ==========================================================================
 *  How to Set up an Item for the Switch Shop
 * ==========================================================================
 *
 * To create an Item to be sold in the Switch Shop, you must first create
 * it within the Database as an actual Item.
 *
 * The Name, Icon, and Price will automatically be used in the Switch Shop, 
 * but you must also use the following Notetags to set up the other info:
 *
 *
 *  <Switch Shop Switch: number>
 *
 * This will set the Switch ID that purchasing this Item will turn ON.
 *
 *
 *  <Switch Shop Description>
 *  </Switch Shop Description>
 *
 * These will allow you to set up the description of the Item in the Switch
 * Shop. Since it is possible for the Help Window to have more or less than
 * two lines in the Switch Shop, this will allow you to easily set up a 
 * description for the Item.
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
SRD.SwitchShop = SRD.SwitchShop || {};

var Imported = Imported || {};
Imported["SumRndmDde Switch Shop"] = 1.01;

(function(_) {
	
	"use strict";

	var params = PluginManager.parameters('SRD_SwitchShop');

	_.lines = parseInt(params['Help Window Lines']);
	_.cols = parseInt(params['Buy Window Cols']);

	var notetagsLoaded = false;
	var _DataManager_isDatabaseLoaded = DataManager.isDatabaseLoaded;
	DataManager.isDatabaseLoaded = function() {
	    if(!_DataManager_isDatabaseLoaded.call(this)) return false;
	    if(!notetagsLoaded) {
	    	var i1 = /<\s*Switch\s*Shop\s*Switch\s*:\s*(\d+)\s*>/im;
	    	var i2 = /<\s*Switch\s*Shop\s*Description\s*>\n([\d\D\n\r]*)<\/\s*Switch\s*Shop\s*Description\s*>/im;
	    	for(var i = 1; i < $dataItems.length; i++) {
	    		if($dataItems[i].note.match(i1)) {
	    			$dataItems[i].meta.switchShopSwitch = parseInt(RegExp.$1);
	    		}
	    		if($dataItems[i].note.match(i2)) {
	    			$dataItems[i].meta.switchShopDescription = String(RegExp.$1);
	    		}
	    	}
	    	notetagsLoaded = true;
	    }
	    return true;
	};

	//-----------------------------------------------------------------------------
	// Game_Temp
	//-----------------------------------------------------------------------------

	var _Game_Temp_initialize = Game_Temp.prototype.initialize;
	Game_Temp.prototype.initialize = function() {
	    _Game_Temp_initialize.call(this);
	    this._isSwitchShop = false;
	};

	Game_Temp.prototype.getSwitchShop = function() {
	    return this._isSwitchShop;
	};

	Game_Temp.prototype.setSwitchShop = function(sell) {
	    this._isSwitchShop = sell;
	};

	//-----------------------------------------------------------------------------
	// Game_Interpreter
	//-----------------------------------------------------------------------------

	var _Game_Interpreter_pluginCommand = Game_Interpreter.prototype.pluginCommand;
	Game_Interpreter.prototype.pluginCommand = function(command, args) {
	    _Game_Interpreter_pluginCommand.call(this, command, args);
	    if(command.trim().toLowerCase() === 'setswitchshop') {
	    	$gameTemp.setSwitchShop(true);
	    }
	};

	var _Game_Interpreter_command302 = Game_Interpreter.prototype.command302;
	Game_Interpreter.prototype.command302 = function() {
		if($gameTemp.getSwitchShop()) {
			var goods = [this._params];
	        while(this.nextEventCode() === 605) {
	            this._index++;
	            goods.push(this.currentCommand().parameters);
	        }
			SceneManager.push(Scene_SwitchShop);
        	SceneManager.prepareNextScene(goods);
        	$gameTemp.setSwitchShop(false);
        	return true;
		} else {
			return _Game_Interpreter_command302.call(this);
		}
	};

	//-----------------------------------------------------------------------------
	// Scene_SwitchShop
	//-----------------------------------------------------------------------------

	function Scene_SwitchShop() {
	    this.initialize.apply(this, arguments);
	}

	Scene_SwitchShop.prototype = Object.create(Scene_MenuBase.prototype);
	Scene_SwitchShop.prototype.constructor = Scene_SwitchShop;

	Scene_SwitchShop.prototype.initialize = function() {
	    Scene_MenuBase.prototype.initialize.call(this);
	};

	Scene_SwitchShop.prototype.prepare = function(goods) {
		this._goods = [];
		for(var i = 0; i < goods.length; i++) {
			var good = $dataItems[goods[i][1]]
			this._goods[i] = [];
			this._goods[i][0] = good.name;
			this._goods[i][1] = good.meta.switchShopSwitch;
			this._goods[i][2] = goods[i][2] === 0 ? good.price : goods[i][3];
			this._goods[i][3] = good.meta.switchShopDescription;
			this._goods[i][4] = good.iconIndex;
		}
	    this._item = null;
	};

	Scene_SwitchShop.prototype.create = function() {
	    Scene_MenuBase.prototype.create.call(this);
	    this.createHelpWindow();
	    this.createGoldWindow();
	    this.createCommandWindow();
	    this.createDummyWindow();
	    this.createBuyWindow();
	    this.createCategoryWindow();
	};

	Scene_SwitchShop.prototype.createHelpWindow = function() {
	    this._helpWindow = new Window_SwitchShopHelp(_.lines);
	    this.addWindow(this._helpWindow);
	};

	Scene_SwitchShop.prototype.createGoldWindow = function() {
	    this._goldWindow = new Window_Gold(0, this._helpWindow.height);
	    this._goldWindow.x = Graphics.boxWidth - this._goldWindow.width;
	    this.addWindow(this._goldWindow);
	};

	Scene_SwitchShop.prototype.createCommandWindow = function() {
	    this._commandWindow = new Window_SwitchShopCommand(this._goldWindow.x);
	    this._commandWindow.y = this._helpWindow.height;
	    this._commandWindow.setHandler('buy',    this.commandBuy.bind(this));
	    this._commandWindow.setHandler('cancel', this.popScene.bind(this));
	    this.addWindow(this._commandWindow);
	};

	Scene_SwitchShop.prototype.createDummyWindow = function() {
	    var wy = this._commandWindow.y + this._commandWindow.height;
	    var wh = Graphics.boxHeight - wy;
	    this._dummyWindow = new Window_Base(0, wy, Graphics.boxWidth, wh);
	    this.addWindow(this._dummyWindow);
	};

	Scene_SwitchShop.prototype.createBuyWindow = function() {
	    var wy = this._dummyWindow.y;
	    var wh = this._dummyWindow.height;
	    this._buyWindow = new Window_SwitchShopBuy(0, wy, wh, this._goods);
	    this._buyWindow.setHelpWindow(this._helpWindow);
	    this._buyWindow.hide();
	    this._buyWindow.setHandler('ok',     this.onBuyOk.bind(this));
	    this._buyWindow.setHandler('cancel', this.onBuyCancel.bind(this));
	    this.addWindow(this._buyWindow);
	};

	Scene_SwitchShop.prototype.createCategoryWindow = function() {
	    this._categoryWindow = new Window_ItemCategory();
	    this._categoryWindow.setHelpWindow(this._helpWindow);
	    this._categoryWindow.y = this._dummyWindow.y;
	    this._categoryWindow.hide();
	    this._categoryWindow.deactivate();
	    this._categoryWindow.setHandler('ok',     this.onCategoryOk.bind(this));
	    this._categoryWindow.setHandler('cancel', this.onCategoryCancel.bind(this));
	    this.addWindow(this._categoryWindow);
	};

	Scene_SwitchShop.prototype.activateBuyWindow = function() {
	    this._buyWindow.setMoney(this.money());
	    this._buyWindow.show();
	    this._buyWindow.activate();
	};

	Scene_SwitchShop.prototype.commandBuy = function() {
	    this._dummyWindow.hide();
	    this.activateBuyWindow();
	};

	Scene_SwitchShop.prototype.onBuyOk = function() {
	    this._item = this._buyWindow.item();
	    SoundManager.playShop();
	    this.doBuy(0);
	    this.activateBuyWindow();
	    this._goldWindow.refresh();
	};

	Scene_SwitchShop.prototype.onBuyCancel = function() {
	    this._commandWindow.activate();
	    this._dummyWindow.show();
	    this._buyWindow.hide();
	    this._helpWindow.clear();
	};

	Scene_SwitchShop.prototype.onCategoryOk = function() {
	};

	Scene_SwitchShop.prototype.onCategoryCancel = function() {
	    this._commandWindow.activate();
	    this._dummyWindow.show();
	    this._categoryWindow.hide();
	};

	Scene_SwitchShop.prototype.onNumberCancel = function() {
	    SoundManager.playCancel();
	    this.endNumberInput();
	};

	Scene_SwitchShop.prototype.doBuy = function(number) {
	    $gameParty.loseGold(this._item[2]);
	    $gameSwitches.setValue(this._item[1], true);
	};

	Scene_SwitchShop.prototype.maxBuy = function() {
	    var max = $gameParty.maxItems(this._item) - $gameParty.numItems(this._item);
	    var price = this.buyingPrice();
	    if (price > 0) {
	        return Math.min(max, Math.floor(this.money() / price));
	    } else {
	        return max;
	    }
	};

	Scene_SwitchShop.prototype.money = function() {
	    return this._goldWindow.value();
	};

	Scene_SwitchShop.prototype.currencyUnit = function() {
	    return this._goldWindow.currencyUnit();
	};

	Scene_SwitchShop.prototype.buyingPrice = function() {
	    return this._buyWindow.price(this._item);
	};

	//-----------------------------------------------------------------------------
	// Window_SwitchShopCommand
	//-----------------------------------------------------------------------------

	function Window_SwitchShopCommand() {
	    this.initialize.apply(this, arguments);
	}

	Window_SwitchShopCommand.prototype = Object.create(Window_HorzCommand.prototype);
	Window_SwitchShopCommand.prototype.constructor = Window_SwitchShopCommand;

	Window_SwitchShopCommand.prototype.initialize = function(width) {
	    this._windowWidth = width;
	    Window_HorzCommand.prototype.initialize.call(this, 0, 0);
	};

	Window_SwitchShopCommand.prototype.windowWidth = function() {
	    return this._windowWidth;
	};

	Window_SwitchShopCommand.prototype.maxCols = function() {
	    return 2;
	};

	Window_SwitchShopCommand.prototype.makeCommandList = function() {
	    this.addCommand(TextManager.buy,    'buy');
	    this.addCommand(TextManager.cancel, 'cancel');
	};

	//-----------------------------------------------------------------------------
	// Window_SwitchShopBuy
	//-----------------------------------------------------------------------------

	function Window_SwitchShopBuy() {
	    this.initialize.apply(this, arguments);
	}

	Window_SwitchShopBuy.prototype = Object.create(Window_Selectable.prototype);
	Window_SwitchShopBuy.prototype.constructor = Window_SwitchShopBuy;

	Window_SwitchShopBuy.prototype.initialize = function(x, y, height, shopGoods) {
	    var width = this.windowWidth();
	    Window_Selectable.prototype.initialize.call(this, x, y, width, height);
	    this._shopGoods = shopGoods;
	    this._money = 0;
	    this.refresh();
	    this.select(0);
	};

	Window_SwitchShopBuy.prototype.windowWidth = function() {
	    return Graphics.boxWidth;
	};

	Window_SwitchShopBuy.prototype.maxCols = function() {
	    return _.cols;
	};

	Window_SwitchShopBuy.prototype.maxItems = function() {
	    return this._data ? this._data.length : 1;
	};

	Window_SwitchShopBuy.prototype.item = function() {
	    return this._data[this.index()];
	};

	Window_SwitchShopBuy.prototype.setMoney = function(money) {
	    this._money = money;
	    this.refresh();
	};

	Window_SwitchShopBuy.prototype.isCurrentItemEnabled = function() {
		if(this.index() >= 0) {
			return this.isEnabled(this._shopGoods[this.index()])
		} else {
			return false;
		}
	};

	Window_SwitchShopBuy.prototype.price = function(item) {
	    return item[2] || 0;
	};

	Window_SwitchShopBuy.prototype.isEnabled = function(item) {
	    return (this.price(item) <= this._money && !$gameSwitches.value(item[1]));
	};

	Window_SwitchShopBuy.prototype.refresh = function() {
	    this.makeItemList();
	    this.createContents();
	    this.drawAllItems();
	};

	Window_SwitchShopBuy.prototype.makeItemList = function() {
	    this._data = [];
	    this._price = [];
	    for(var i = 0; i < this._shopGoods.length; i++) {
	    	this._data[i] = [];
	    	for(var j = 0; j < this._shopGoods[i].length; j++) {
	    		this._data[i][j] = this._shopGoods[i][j];
	    	}
	    }
	};

	Window_SwitchShopBuy.prototype.drawItem = function(index) {
	    var item = this._data[index];
	    var rect = this.itemRect(index);
	    var priceWidth = 96;
	    rect.width -= this.textPadding();
	    this.changePaintOpacity(this.isEnabled(item));
	    this.drawItemName(item, rect.x, rect.y, rect.width - priceWidth);
	    this.drawText(this.price(item), rect.x + rect.width - priceWidth,
	                  rect.y, priceWidth, 'right');
	    this.changePaintOpacity(true);
	};

	Window_SwitchShopBuy.prototype.drawItemName = function(item, x, y, width) {
	    width = width || 312;
	    if (item) {
	        var iconBoxWidth = Window_Base._iconWidth + 4;
	        this.resetTextColor();
	        this.drawIcon(item[4], x + 2, y + 2);
	        this.drawText(item[0], x + iconBoxWidth, y, width - iconBoxWidth);
	    }
	};

	Window_SwitchShopBuy.prototype.updateHelp = function() {
	    this.setHelpWindowItem(this.item());
	};

	//-----------------------------------------------------------------------------
	// Window_SwitchShopHelp
	//-----------------------------------------------------------------------------

	function Window_SwitchShopHelp() {
	    this.initialize.apply(this, arguments);
	}

	Window_SwitchShopHelp.prototype = Object.create(Window_Base.prototype);
	Window_SwitchShopHelp.prototype.constructor = Window_SwitchShopHelp;

	Window_SwitchShopHelp.prototype.initialize = function(numLines) {
	    var width = Graphics.boxWidth;
	    var height = this.fittingHeight(numLines || 2);
	    Window_Base.prototype.initialize.call(this, 0, 0, width, height);
	    this._text = '';
	};

	Window_SwitchShopHelp.prototype.setText = function(text) {
	    if (this._text !== text) {
	        this._text = text;
	        this.refresh();
	    }
	};

	Window_SwitchShopHelp.prototype.clear = function() {
	    this.setText('');
	};

	Window_SwitchShopHelp.prototype.setItem = function(item) {
	    this.setText(item ? item[3] : '');
	};

	Window_SwitchShopHelp.prototype.refresh = function() {
	    this.contents.clear();
	    this.drawTextEx(this._text, this.textPadding(), 0);
	};

})(SRD.SwitchShop);