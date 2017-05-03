/*:
 * @plugindesc Allows creation of a shop that can be used to sell certain items at special prices.
 * @author SumRndmDde
 *
 * @param Price Multiplier
 * @desc By default, items can only be sold for 0.5 price. This allows to you customize the modifier for sell shops only.
 * @default 1.25
 *
 * @help
 * 
 * Sell Shop
 * Version 1.00
 * SumRndmDde
 *
 * Random Credits:
 * ~ Based off of request that was based off of Himeworks' VX Ace script ~
 *
 *
 * This allows you to create a "Sell Shop".
 *
 * A Sell Shop gives a list of Items you can sell.
 * Their selling prices are usually better then what they can normally be 
 * sold for at a normal shop.
 *
 *
 * ==========================================================================
 *  How to Use
 * ==========================================================================
 *
 * In order to make a Sell Shop, simply use the Plugin Command:
 *
 *   SetSellShop
 *
 * right before calling a Shop Processing event.
 *
 *
 * ==========================================================================
 *  Setting the Sell Prices
 * ==========================================================================
 *
 * By default, the Sell Shop will give money based off of the price of
 * the Item sold multiplied by the "Price Multiplier" Parameter.
 *
 * For example, if the Item costs 100 gold, and the "Price Multiplier" is
 * 1.25, then the Sell Shop will buy it for 125 gold.
 *
 * ==========================================================================
 * 
 * On the other hand, you can use the following Notetag to manually set the 
 * Sell Shop price of an item:
 *
 *   <Sell Shop Price: x>
 *
 * Set x to the price you wish to use.
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
SRD.SellShop = SRD.SellShop || {};

var Imported = Imported || {};
Imported["SumRndmDde Sell Shop"] = true;

(function(_) {

	_.priceMul = Number(PluginManager.parameters('SRD_SellShop')['Price Multiplier']);

	var notetagsLoaded = false;
	var _DataManager_isDatabaseLoaded = DataManager.isDatabaseLoaded;
	DataManager.isDatabaseLoaded = function() {
	    if(!_DataManager_isDatabaseLoaded.call(this)) return false;
	    if(!notetagsLoaded) {
	    	for(var i = 1; i < $dataItems.length; i++) {
	    		if($dataItems[i].note.match(/<\s*Sell\s*Shop\s*Price\s*:\s*(\d+)\s*>/im)) {
	    			$dataItems[i].ss_price = parseInt(RegExp.$1);
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
	    this._isSellShop = false;
	};

	Game_Temp.prototype.getSellShop = function() {
	    return this._isSellShop;
	};

	Game_Temp.prototype.setSellShop = function(sell) {
	    this._isSellShop = sell;
	};

	//-----------------------------------------------------------------------------
	// Game_Temp
	//-----------------------------------------------------------------------------

	var _Game_Interpreter_pluginCommand = Game_Interpreter.prototype.pluginCommand;
	Game_Interpreter.prototype.pluginCommand = function(command, args) {
	    _Game_Interpreter_pluginCommand.call(this, command, args);
	    if(command.trim().toLowerCase() === 'setsellshop') {
	    	$gameTemp.setSellShop(true);
	    }
	};

	//-----------------------------------------------------------------------------
	// Scene_Shop
	//-----------------------------------------------------------------------------

	var _Scene_Shop_popScene = Scene_Shop.prototype.popScene;
	Scene_Shop.prototype.popScene = function() {
		$gameTemp.setSellShop(false);
		_Scene_Shop_popScene.call(this)
	};

	var _Scene_Shop_onBuyOk = Scene_Shop.prototype.onBuyOk;
	Scene_Shop.prototype.onBuyOk = function() {
		if(!$gameTemp.getSellShop()) _Scene_Shop_onBuyOk.call(this);
		else {
		    this._item = this._buyWindow.item();
		    this._buyWindow.hide();
		    this._numberWindow.setup(this._item, this.maxSell(), this.sellingPrice());
		    this._numberWindow.setCurrencyUnit(this.currencyUnit());
		    this._numberWindow.show();
		    this._numberWindow.activate();
		    this._statusWindow.setItem(this._item);
		    this._statusWindow.show();
		}
	};

	var _Scene_Shop_onBuyCancel = Scene_Shop.prototype.onBuyCancel;
	Scene_Shop.prototype.onBuyCancel = function() {
		if(!$gameTemp.getSellShop()) _Scene_Shop_onBuyCancel.call(this);
		else {
		    this._buyWindow.deselect();
		    this._commandWindow.activate();
		    this._statusWindow.setItem(null);
		    this._helpWindow.clear();
		}
	};

	var _Scene_Shop_onNumberOk = Scene_Shop.prototype.onNumberOk;
	Scene_Shop.prototype.onNumberOk = function() {
		if(!$gameTemp.getSellShop()) _Scene_Shop_onNumberOk.call(this);
		else {
		    SoundManager.playShop();
		    switch (this._commandWindow.currentSymbol()) {
		    case 'buy':
		        this.doSell(this._numberWindow.number());
		        break;
		    case 'sell':
		        this.doSell(this._numberWindow.number());
		        break;
		    }
		    this.endNumberInput();
		    this._goldWindow.refresh();
		    this._statusWindow.refresh();
		}
	};

	var _Scene_Shop_sellingPrice = Scene_Shop.prototype.sellingPrice;
	Scene_Shop.prototype.sellingPrice = function() {
		if(!$gameTemp.getSellShop()) return _Scene_Shop_sellingPrice.call(this);
		else return this._buyWindow.price(this._item);
	};

	//-----------------------------------------------------------------------------
	// Window_ShopCommand
	//-----------------------------------------------------------------------------

	var _Window_ShopCommand_makeCommandList = Window_ShopCommand.prototype.makeCommandList;
	Window_ShopCommand.prototype.makeCommandList = function() {
		if(!$gameTemp.getSellShop()) _Window_ShopCommand_makeCommandList.call(this);
		else {
			this.addCommand(TextManager.sell,    'buy');
	    	this.addCommand(TextManager.cancel, 'cancel');
		}
	};

	//-----------------------------------------------------------------------------
	// Window_ShopBuy
	//-----------------------------------------------------------------------------

	var _Window_ShopBuy_isEnabled = Window_ShopBuy.prototype.isEnabled;
	Window_ShopBuy.prototype.isEnabled = function(item) {
		if(!$gameTemp.getSellShop()) return _Window_ShopBuy_isEnabled.call(this, item);
		else return (item && $gameParty.hasItem(item));
	};

	var _Window_ShopBuy_price = Window_ShopBuy.prototype.price;
	Window_ShopBuy.prototype.price = function(item) {
		var price = _Window_ShopBuy_price.call(this, item);
	    if(!$gameTemp.getSellShop()) return price;
		else {
			if(item && item.ss_price) return item.ss_price;
			else return Math.floor(price * _.priceMul);
		}
	};

})(SRD.SellShop);