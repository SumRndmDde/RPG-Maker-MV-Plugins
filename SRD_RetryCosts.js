/*:
 * @plugindesc Allows developers to setup specific costs for the Player to have to pay in order to retry a battle.
 * @author SumRndmDde
 *
 * @param Default Gold Cost
 * @desc The default amount of gold it costs to retry.
 * This can be a number or JavaScript code.
 * @default 10
 *
 * @param Default Item Cost
 * @desc The default set of items it costs to retry. Format like:
 * [item1, # of item1], [item2, # of item2], etc...
 * @default
 *
 * @param Default Retry Cond.
 * @desc The JavaScript condition that must be true to retry.
 * Leave as "true" to make it always true.
 * @default true
 *
 * @param Default Retry Eval
 * @desc The JavaScript evaluation that will be run once the player retries.
 * Leave blank to disallow.
 * @default
 *
 * @param Default Retry Text
 * @desc The text that appears for the JavaScript Retry Condition.
 * Leave blank to disallow.
 * @default
 *
 * @param == Texts ==
 * @default
 *
 * @param Gold Icon
 * @desc The Icon used to represent the gold cost.
 * @default 313
 *
 * @param Retry Cost Text
 * @desc The text of the "retry cost" label.
 * @default Retry Cost
 *
 * @param Gold Text
 * @desc The text of the "gold" in the retry cost label.
 * @default Gold
 *
 * @help
 *
 * Retry Costs
 * Version 1.01
 * SumRndmDde
 *
 *
 * This Plugin requires the Game Over Core (SRD_GameOverCore)
 * http://sumrndm.site/game-over-core/
 *
 * This plugin allows developers to setup specific costs for the Player to 
 * have to pay in order to retry a battle.
 *
 *
 * ==============================================================================
 *  Plugin Commands
 * ==============================================================================
 *
 * The following plugin commands can be used in the middle of the game to
 * change the costs of retrying.
 *
 * 
 *   SetRetryGoldCost [number]
 *
 * Sets the amount of gold required to retry.
 *
 *
 *   SetRetryItemCost [items]
 *
 * Sets the item(s) cost for retrying.
 *
 *
 *   SetRetryCondition [javascript code]
 *
 * Sets the JavaScript retry condition.
 *
 *
 *   SetRetryEval [javascript code]
 *
 * Sets the JavaScript eval for retrying.
 *
 *
 *   SetRetryText [text]
 *
 * Sets the special retry text.
 *
 *
 * ==============================================================================
 *  End of Help File
 * ==============================================================================
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
SRD.RetryCosts = SRD.RetryCosts || {};
SRD.PluginCommands = SRD.PluginCommands || {};

var Imported = Imported || {};
Imported["SumRndmDde Retry Costs"] = 1.01;

function Sprite_RetryCosts() {
	this.initialize.apply(this, arguments);
}

(function(_, __, $) {

"use strict";

//-----------------------------------------------------------------------------
// SRD.RetryCosts
//-----------------------------------------------------------------------------

const params = PluginManager.parameters('SRD_RetryCosts');

_.meetsRequirements = Imported["SumRndmDde Game Over Core"];

_.goldCost = String(params['Default Gold Cost']);
_.itemCost = String(params['Default Item Cost']);;
_.retryCondition = String(params['Default Retry Cond.']);
_.retryEval = String(params['Default Retry Eval']);
_.retryText = String(params['Default Retry Text']);

_.goldIcon = parseInt(params['Gold Icon']);
_.retryCostText = String(params['Retry Cost Text']);
_.goldText = String(params['Gold Text']);

_.alertNeedGameOverCore = function() {
	alert("The 'SRD_GameOverCore' plugin is required for using the 'SRD_RetryUpgrade' plugin.");
	if(confirm("Do you want to open the download page to 'SRD_GameOverCore'?")) {
		window.open('http://sumrndm.site/game-over-core/');
	}
};

if(!_.meetsRequirements) {
	_.alertNeedGameOverCore();
}

//-----------------------------------------------------------------------------
// SRD.GameOverCore
//-----------------------------------------------------------------------------

_.GameOverCore_retryBattle = __.retryBattle;
__.retryBattle = function() {
	if($gameTemp._setUpRetry) {
		$gameTemp._setUpRetry[3].payRetryCosts();
	}
	_.GameOverCore_retryBattle.apply(this, arguments);
};

//-----------------------------------------------------------------------------
// SRD.PluginCommands
//-----------------------------------------------------------------------------

$['setretrygoldcost'] = function(args) {
	let result = '';
	args.forEach(function(str) {
		result += str;
	}, this);
	$gameSystem.setGoldRetryCost(result);
};

$['setretryitemcost'] = function(args) {
	let result = '';
	args.forEach(function(str) {
		result += str;
	}, this);
	$gameSystem.setItemRetryCost(result);
};

$['setretrycondition'] = function(args) {
	let result = '';
	args.forEach(function(str) {
		result += str;
	}, this);
	$gameSystem.setRetryCondition(result);
};

$['setretryeval'] = function(args) {
	let result = '';
	args.forEach(function(str) {
		result += str;
	}, this);
	$gameSystem.setJavaScriptRetryEval(result);
};

$['setretrytext'] = function(args) {
	let result = '';
	args.forEach(function(str) {
		result += str;
	}, this);
	$gameSystem.setRetryText(result);
};

//-----------------------------------------------------------------------------
// Game_System
//-----------------------------------------------------------------------------

_.Game_System_initialize = Game_System.prototype.initialize;
Game_System.prototype.initialize = function() {
	_.Game_System_initialize.apply(this, arguments);
	this.goldRetryCost = _.goldCost;
	this.itemRetryCost = _.itemCost;
	this.codeRetryConditon = _.retryCondition;
	this.codeRetryEval = _.retryEval;
	this.codeRetryText = _.retryText;
};

Game_System.prototype.setGoldRetryCost = function(cost) {
	this.goldRetryCost = cost;
};

Game_System.prototype.setItemRetryCost = function(cost) {
	this.itemRetryCost = cost;
};

Game_System.prototype.setRetryCondition = function(condition) {
	this.codeRetryConditon = condition;
};

Game_System.prototype.setJavaScriptRetryEval = function(code) {
	this.codeRetryEval = code;
};

Game_System.prototype.setRetryText = function(text) {
	this.codeRetryText = text;
};

//-----------------------------------------------------------------------------
// Game_Party
//-----------------------------------------------------------------------------

Game_Party.prototype.canPayRetryCosts = function() {
	if(this.gold() < parseInt(eval($gameSystem.goldRetryCost))) return false;
	if(!this.canPayItemRetryCosts()) return false;
	if(!this.canPayJavaScriptRetryCosts()) return false;
	return true;
};

Game_Party.prototype.canPayItemRetryCosts = function() {
	const items = eval('[' + $gameSystem.itemRetryCost + ']');
	if(!items) return true;
	for(let i = 0; i < items.length; i++) {
		const info = items[i];
		const item = $dataItems[info[0]];
		if(item) {
			if(this.numItems(item) < info[1]) return false;
		}
	}
	return true;
};

Game_Party.prototype.canPayJavaScriptRetryCosts = function() {
	return !!eval($gameSystem.codeRetryConditon);
};

Game_Party.prototype.payRetryCosts = function() {
	this.loseGold(parseInt(eval($gameSystem.goldRetryCost)));
	this.payItemRetryCosts();
	this.payJavaScriptRetryCosts();
};

Game_Party.prototype.payItemRetryCosts = function() {
	const items = eval('[' + $gameSystem.itemRetryCost + ']');
	if(!items) return;
	for(let i = 0; i < items.length; i++) {
		const info = items[i];
		const item = $dataItems[info[0]];
		if(item) {
			this.loseItem(item, info[1]);
		}
	}
};

Game_Party.prototype.payJavaScriptRetryCosts = function() {
	var $gameParty = $gameTemp._setUpRetry[3];
	eval($gameSystem.codeRetryEval);
};

//-----------------------------------------------------------------------------
// Game_Interpreter
//-----------------------------------------------------------------------------

if(!SRD.Game_Interpreter_pluginCommand) {

SRD.Game_Interpreter_pluginCommand = Game_Interpreter.prototype.pluginCommand;
Game_Interpreter.prototype.pluginCommand = function(command, args) {
	const com = command.trim().toLowerCase();
	if($[com]) {
		$[com].call(this, args);
		return;
	}
	SRD.Game_Interpreter_pluginCommand.apply(this, arguments);
};

}

//-----------------------------------------------------------------------------
// Sprite_RetryCosts
//-----------------------------------------------------------------------------

Sprite_RetryCosts.prototype = Object.create(Sprite.prototype);
Sprite_RetryCosts.prototype.constructor = Sprite_RetryCosts;

Sprite_RetryCosts.prototype.initialize = function() {
	Sprite.prototype.initialize.call(this);
	this.initMembers();
	this.calculateLines();
	if(this._numOfLines > 1) this.createBitmap();
};

Sprite_RetryCosts.prototype.initMembers = function() {
	this.bitmap = new Bitmap(1, 1);
	this.bitmap.fontSize = 24;
	this.anchor.x = 0.5;
	this.opacity = 0;
	this._opacitySpeed = 0;
	this._lineHeight = 28;
	this._fontSize = 24;
};

Sprite_RetryCosts.prototype.update = function() {
	Sprite.prototype.update.call(this);
	if(this._opacitySpeed) {
		this.opacity += this._opacitySpeed;
		if(this.opacity >= 255 && this._opacitySpeed > 0) this._opacitySpeed = 0;
		if(this.opacity <= 0 && this._opacitySpeed < 0) this._opacitySpeed = 0;
	}
};

Sprite_RetryCosts.prototype.setOpacitySpeed = function(speed) {
	this._opacitySpeed = speed;
};

Sprite_RetryCosts.prototype.drawIcon = function(iconIndex, x, y) {
	var bitmap = ImageManager.loadSystem('IconSet');
	var pw = Window_Base._iconWidth;
	var ph = Window_Base._iconHeight;
	var sx = iconIndex % 16 * pw;
	var sy = Math.floor(iconIndex / 16) * ph;
	this.bitmap.blt(bitmap, sx, sy, pw, ph, x, y, 24, 24);
};

Sprite_RetryCosts.prototype.calculateLines = function() {
	this._numOfLines = 1;
	this._maxWidth = 0;
	this.calculateLinesGold();
	this.calculateLinesItems();
	this.calculateLinesCode();
};

Sprite_RetryCosts.prototype.calculateLinesGold = function() {
	const gold = parseInt(eval($gameSystem.goldRetryCost));
	if(gold > 0) {
		this._numOfLines++;
		const length = this.bitmap.measureTextWidth(_.goldText + " x" + gold) + 24;
		if(length > this._maxWidth) this._maxWidth = length;
	}
};

Sprite_RetryCosts.prototype.calculateLinesItems = function() {
	if($gameSystem.itemRetryCost) {
		for(let i = 0; i < $gameSystem.itemRetryCost.length; i++) {
			const info = $gameSystem.itemRetryCost[i];
			const item = $dataItems[info[0]];
			if(item) {
				this._numOfLines++;
				const length = this.bitmap.measureTextWidth(item.name + " x" + info[1]) + 24;
				if(length > this._maxWidth) this._maxWidth = length;
			}
		}
	}
};

Sprite_RetryCosts.prototype.calculateLinesCode = function() {
	if($gameSystem.codeRetryText) {
		this._numOfLines++;
		const length = this.bitmap.measureTextWidth($gameSystem.codeRetryText);
		if(length > this._maxWidth) this._maxWidth = length;
	}
};

Sprite_RetryCosts.prototype.createBitmap = function() {
	this._maxWidth += 30;
	this.bitmap = new Bitmap(this._maxWidth, (this._lineHeight * this._numOfLines) + 6);
	this.bitmap.fontSize = 24;
	let line = 1;
	this.createLabel();
	line = this.createGoldLabel(line);
	line = this.createItemLabel(line);
	this.createCodeLabel(line);
};

Sprite_RetryCosts.prototype.createLabel = function() {
	this.bitmap.fontItalic = true;
	this.bitmap.drawText(_.retryCostText, 0, 0, this._maxWidth, this._lineHeight, "center");
	this.bitmap.fontItalic = false;
	const width = this.bitmap.measureTextWidth(_.retryCostText) + 4;
	const x = (this._maxWidth - width) / 2;
	this.bitmap.fillRect(x, this._lineHeight, width, 2, "rgba(255, 255, 255, 0.5)");
};

Sprite_RetryCosts.prototype.createGoldLabel = function(line) {
	const gold = parseInt(eval($gameSystem.goldRetryCost));
	if(gold > 0) {
		const y = (line * this._lineHeight) + 6;
		this.drawIcon(_.goldIcon, 0, y);
		this.bitmap.drawText(_.goldText, 26, y, this._maxWidth, this._lineHeight, "left");
		this.bitmap.drawText("x" + gold, 0, y, this._maxWidth, this._lineHeight, "right");
		line++;
	}
	return line;
};

Sprite_RetryCosts.prototype.createItemLabel = function(line) {
	if($gameSystem.itemRetryCost) {
		for(let i = 0; i < $gameSystem.itemRetryCost.length; i++) {
			const info = $gameSystem.itemRetryCost[i];
			const item = $dataItems[info[0]];
			if(item) {
				const y = (line * this._lineHeight) + 6;
				this.drawIcon(item.iconIndex, 0, y);
				this.bitmap.drawText(item.name, 26, y, this._maxWidth, this._lineHeight, "left");
				this.bitmap.drawText("x" + info[1], 0, y, this._maxWidth, this._lineHeight, "right");
				line++;
			}
		}
	}
	return line;
};

Sprite_RetryCosts.prototype.createCodeLabel = function(line) {
	if($gameSystem.codeRetryText) {
		const y = (line * this._lineHeight) + 6;
		this.bitmap.drawText($gameSystem.codeRetryText, 0, y, this._maxWidth, this._lineHeight, "left");
	}
};

//-----------------------------------------------------------------------------
// Scene_Gameover
//-----------------------------------------------------------------------------

_.Scene_Gameover_create = Scene_Gameover.prototype.create;
Scene_Gameover.prototype.create = function() {
	_.Scene_Gameover_create.apply(this, arguments);
	this.createCostSprite();
};

Scene_Gameover.prototype.createCostSprite = function() {
	this._retryCosts = new Sprite_RetryCosts();
	this._retryCosts.x = this.width / 2;
	this._retryCosts.y = this._commandWindow.y - (this._retryCosts.height + this._commandWindow.lineHeight());
	if(this._retryCosts.y < 0) {
		this._retryCosts.y = 0
	}
	this._commandWindow.setRetryCosts(this._retryCosts);
	this.addChild(this._retryCosts);
};

//-----------------------------------------------------------------------------
// Window_GameOverCommand
//-----------------------------------------------------------------------------

_.Window_GameOverCommand_initialize = Window_GameOverCommand.prototype.initialize;
Window_GameOverCommand.prototype.initialize = function(x, y) {
	_.Window_GameOverCommand_initialize.apply(this, arguments);
	this._retryCosts = null;
};

Window_GameOverCommand.prototype.setRetryCosts = function(sprite) {
	this._retryCosts = sprite;
};

Window_GameOverCommand.prototype.makeCommandList = function() {
	if(__.allowRetry) {
		this.addCommand(__.retryText, 'retry', !!$gameTemp._setUpRetry && $gameTemp._setUpRetry[3].canPayRetryCosts());
	}
	this.addCommand(__.loadText, 'load');
	this.addCommand(__.titleText, 'title');
};

_.Window_GameOverCommand_select = Window_GameOverCommand.prototype.select;
Window_GameOverCommand.prototype.select = function(index) {
	_.Window_GameOverCommand_select.apply(this, arguments);
	if(this._retryCosts && this.isOpen()) {
		if(index === 0) {
			this._retryCosts.setOpacitySpeed(15);
		} else {
			this._retryCosts.setOpacitySpeed(-15);
		}
	}
};

_.Window_GameOverCommand_open = Window_GameOverCommand.prototype.open;
Window_GameOverCommand.prototype.open = function() {
	_.Window_GameOverCommand_open.apply(this, arguments);
	if(this.index() === 0) {
		this._retryCosts.setOpacitySpeed(15);
	}
};

})(SRD.RetryCosts, SRD.GameOverCore, SRD.PluginCommands);