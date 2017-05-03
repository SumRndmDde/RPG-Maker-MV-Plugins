/*:
 * @plugindesc Customize the Window for when the Player uses an Item or Skill in the menu and it requires an Actor to be selected.
 * @author SumRndmDde
 *
 * @param Use Default Window
 * @desc If using an Alt Menu Screen, set this to 'true' to revert the window used to select an Actor to the default one.
 * @default true
 *
 * @param Condense Mode
 * @desc If using Default Window, you can also use Condense Mode to condense the info shown. Set to 'true' to use.
 * @default false
 *
 * @param == Window Position ==
 * @default
 *
 * @param Horiontal Align
 * @desc The horizontal alignment of the window used to select an Actor. The choices are: Left, Center, Right, Auto.
 * @default Auto
 *
 * @param Vertical Align
 * @desc The vertical alignment of the window used to select an Actor. The choices are: Up, Center, Down.
 * @default Center
 *
 * @param X Offset
 * @desc This value is added to x position of the window used to select an Actor.
 * @default 0
 *
 * @param Y Offset
 * @desc This value is added to y position of the window used to select an Actor.
 * @default 0
 *
 * @param == Default Options ==
 * @default
 *
 * @param Width
 * @desc This value is the width of the window used to select an Actor. Can be Number or JavaScript evaluation.
 * @default Graphics.boxWidth - 240
 *
 * @param Height
 * @desc This value is the height of the window used to select an Actor. Can be Number or JavaScript evaluation.
 * @default Graphics.boxHeight * (this.maxItems() / 4)
 *
 * @param Visible Rows
 * @desc This value is the number of rows of the window used to select an Actor. Can be Number or JavaScript evaluation.
 * @default Math.min(this.maxItems(), 4)
 *
 * @param Max Columns
 * @desc This value is the maximum columns of the window used to select an Actor. Can be Number or JavaScript evaluation.
 * @default 1
 *
 * @help
 *
 * In-Menu Usage Upgrade
 * Version 1.00
 * SumRndmDde
 *
 *
 * This Plugin allows you to customize the Window for when the Player uses 
 * an Item or Skill in the menu and it requires an Actor to be selected.
 *
 * The main feature of this Plugin is the ability to revert the Window
 * back to default so it can be used normally while using an Alt Menu
 * Screen Plugin.
 *
 * The position, alignment, and size of the window can also be changed
 * using the Parameters.
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
SRD.InMenuUsageUpgrade = SRD.InMenuUsageUpgrade || {};

var Imported = Imported || {};
Imported["SumRndmDde In-Menu Usage Upgrade"] = true;

(function(_) {

	_.default = String(PluginManager.parameters('SRD_InMenuUsageUpgrade')['Use Default Window']).trim().toLowerCase() === 'true';
	_.condense = String(PluginManager.parameters('SRD_InMenuUsageUpgrade')['Condense Mode']).trim().toLowerCase() === 'true';

	var xAlign = String(PluginManager.parameters('SRD_InMenuUsageUpgrade')['Horiontal Align']);
	_.xAlign = 'auto';
	if(xAlign.match(/center/i)) _.xAlign = 'center';
	if(xAlign.match(/right/i)) _.xAlign = 'right';
	if(xAlign.match(/left/i)) _.xAlign = 'left';

	var yAlign = String(PluginManager.parameters('SRD_InMenuUsageUpgrade')['Vertical Align']);
	_.yAlign = 'center';
	if(yAlign.match(/up/i)) _.yAlign = 'up';
	if(yAlign.match(/down/i)) _.yAlign = 'down';

	_.x = String(PluginManager.parameters('SRD_InMenuUsageUpgrade')['X Offset']);
	_.y = String(PluginManager.parameters('SRD_InMenuUsageUpgrade')['Y Offset']);
	_.w = String(PluginManager.parameters('SRD_InMenuUsageUpgrade')['Width']);
	_.h = String(PluginManager.parameters('SRD_InMenuUsageUpgrade')['Height']);
	_.rows = String(PluginManager.parameters('SRD_InMenuUsageUpgrade')['Visible Rows']);
	_.cols = String(PluginManager.parameters('SRD_InMenuUsageUpgrade')['Max Columns']);

	Scene_ItemBase.prototype.showSubWindow = function(window) {
		if(_.xAlign === 'auto') window.x = this.isCursorLeft() ? Graphics.boxWidth - window.width : 0;
		else if(_.xAlign === 'center') window.x = (Graphics.boxWidth / 2) - (window.width / 2);
		else if(_.xAlign === 'right') window.x = Graphics.boxWidth - window.width;
		else if(_.xAlign === 'left') window.x = 0;
		if(_.yAlign === 'center') window.y = (Graphics.boxHeight / 2) - (window.height / 2);
		else if(_.yAlign === 'up') window.y = 0;
		else if(_.yAlign === 'down') window.y = Graphics.boxHeight - window.height;
		window.x += eval(_.x);
		window.y += eval(_.y);
	    window.show();
	    window.activate();
	};

	if(_.default) {

		Window_MenuActor.prototype.initialize = function() {
		    Window_MenuStatus.prototype.initialize.call(this, 0, 0);
		    this.hide();
		};

		Window_MenuActor.prototype.windowWidth = function() {
			return eval(_.w);
		};

		Window_MenuActor.prototype.windowHeight = function() {
			return eval(_.h);
		};

		Window_MenuActor.prototype.numVisibleRows = function() {
			return eval(_.rows);
		};

		Window_MenuActor.prototype.maxCols = function() {
			return eval(_.cols);
		};

		Window_MenuActor.prototype.drawActorSimpleStatus = function(actor, x, y, width) {
		    var lineHeight = this.lineHeight();
		    var x2 = x + 180;
		    var width2 = Math.min(200, width - 180 - this.textPadding());
		    if(_.condense) {
		    	this.drawActorName(actor, x, y);
		    	this.drawActorHp(actor, x, y + lineHeight * 1, width2);
		    	this.drawActorMp(actor, x, y + lineHeight * 2, width2);
		    } else {
			    this.drawActorName(actor, x, y);
			    this.drawActorLevel(actor, x, y + lineHeight * 1);
			    this.drawActorIcons(actor, x, y + lineHeight * 2);
			    this.drawActorClass(actor, x2, y);
			    this.drawActorHp(actor, x2, y + lineHeight * 1, width2);
			    this.drawActorMp(actor, x2, y + lineHeight * 2, width2);
			}
		};

		Window_MenuActor.prototype.maxItems = function() {
		    return $gameParty.size();
		};

		Window_MenuActor.prototype.itemHeight = function() {
		    var clientHeight = this.height - this.padding * 2;
		    return Math.floor(clientHeight / this.numVisibleRows());
		};

		Window_MenuActor.prototype.loadImages = function() {
		    $gameParty.members().forEach(function(actor) {
		        ImageManager.loadFace(actor.faceName());
		    }, this);
		};

		Window_MenuActor.prototype.drawItem = function(index) {
		    this.drawItemBackground(index);
		    this.drawItemImage(index);
		    this.drawItemStatus(index);
		};

		Window_MenuActor.prototype.drawItemBackground = function(index) {
		    if (index === this._pendingIndex) {
		        var rect = this.itemRect(index);
		        var color = this.pendingColor();
		        this.changePaintOpacity(false);
		        this.contents.fillRect(rect.x, rect.y, rect.width, rect.height, color);
		        this.changePaintOpacity(true);
		    }
		};

		Window_MenuActor.prototype.drawItemImage = function(index) {
		    var actor = $gameParty.members()[index];
		    var rect = this.itemRect(index);
		    this.changePaintOpacity(actor.isBattleMember());
		    this.drawActorFace(actor, rect.x + 1, rect.y + 1, Window_Base._faceWidth, Window_Base._faceHeight);
		    this.changePaintOpacity(true);
		};

		Window_MenuActor.prototype.drawItemStatus = function(index) {
		    var actor = $gameParty.members()[index];
		    var rect = this.itemRect(index);
		    var x = rect.x + 162;
		    var y = rect.y + rect.height / 2 - this.lineHeight() * 1.5;
		    var width = rect.width - x - this.textPadding();
		    this.drawActorSimpleStatus(actor, x, y, width);
		};

		Window_MenuActor.prototype.processOk = function() {
		    if (!this.cursorAll()) {
		        $gameParty.setTargetActor($gameParty.members()[this.index()]);
		    }
		    this.callOkHandler();
		};

		Window_MenuActor.prototype.isCurrentItemEnabled = function() {
		    if (this._formationMode) {
		        var actor = $gameParty.members()[this.index()];
		        return actor && actor.isFormationChangeOk();
		    } else {
		        return true;
		    }
		};

		Window_MenuActor.prototype.selectLast = function() {
		    this.select($gameParty.targetActor().index() || 0);
		};

		Window_MenuActor.prototype.formationMode = function() {
		    return this._formationMode;
		};

		Window_MenuActor.prototype.setFormationMode = function(formationMode) {
		    this._formationMode = formationMode;
		};

		Window_MenuActor.prototype.pendingIndex = function() {
		    return this._pendingIndex;
		};

		Window_MenuActor.prototype.setPendingIndex = function(index) {
		    var lastPendingIndex = this._pendingIndex;
		    this._pendingIndex = index;
		    this.redrawItem(this._pendingIndex);
		    this.redrawItem(lastPendingIndex);
		};

		Window_MenuActor.prototype.selectForItem = function(item) {
		    var actor = $gameParty.menuActor();
		    var action = new Game_Action(actor);
		    action.setItemObject(item);
		    this.setCursorFixed(false);
		    this.setCursorAll(false);
		    if (action.isForUser()) {
		        if (DataManager.isSkill(item)) {
		            this.setCursorFixed(true);
		            this.select(actor.index());
		        } else {
		            this.selectLast();
		        }
		    } else if (action.isForAll()) {
		        this.setCursorAll(true);
		        this.select(0);
		    } else {
		        this.selectLast();
		    }
		};
	}

})(SRD.InMenuUsageUpgrade);