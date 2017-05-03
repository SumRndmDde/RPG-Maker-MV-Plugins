/*:
 * @plugindesc Allows more customization of the BattleLog! 
 * The position, color, and mechanics can be changed!
 * @author SumRndmDde
 *
 * @param Reverse Mode
 * @desc 'false'  -  Newest logs are placed in new position.
 * 'true'   -  Oldest logs are placed in new position.
 * @default false
 *
 * @param New Log Placement
 * @desc 'above'  -  Placed above current log.
 * 'below'  -  Placed below current log.
 * @default below
 *
 * @param Global Escape Chars
 * @desc Example: \c[1] would change text color of all logs.
 * Disables itself if using YEP_BattleEngineCore.
 * @default
 *
 * @param Global Front Chars
 * @desc Characters here will be added to the front of each log.
 * Example: [
 * @default
 *
 * @param Global End Chars
 * @desc Characters here will be added to the end of each log.
 * Example: ]
 * @default
 *
 * @param Maximum Lines
 * @desc The maximum amount of lines allowed in the battle log.
 * This value can be a Number or JavaScript code.
 * @default 10
 *
 * @param Line Height
 * @desc The height of each line. 
 * This value must be a Number. Default is 36.
 * @default 36
 *
 * @param == Display ==
 * @default
 *
 * @param X Position
 * @desc The x position of the Battle Log Window.
 * This value can be a Number or JavaScript code.
 * @default 0
 *
 * @param Y Position
 * @desc The y position of the Battle Log Window.
 * This value can be a Number or JavaScript code.
 * @default 0
 *
 * @param Width
 * @desc The width of the Battle Log Window.
 * This value can be a Number or JavaScript code.
 * @default Graphics.boxWidth
 *
 * @param Height
 * @desc The height of the Battle Log Window.
 * This value can be a Number or JavaScript code.
 * @default this.fittingHeight(this.maxLines())
 *
 * @param Background Color
 * @desc The color of the background of the Battle Log Window.
 * This value can a JavaScript color or Hex code.
 * @default #000000
 *
 * @param Background Opacity
 * @desc The opacity of the background of the Battle Log Window.
 * This value must be a Number between 0 and 255.
 * @default 64
 *
 * @param == Animation ==
 * @default
 *
 * @param Message Speed
 * @desc The message speed of the Battle Log Window.
 * This value can be a Number or JavaScript code.
 * @default 16
 *
 * @param Animation Base Delay
 * @desc The animation base delay defined in the Battle Log.
 * Disables itself if using YEP_BattleEngineCore.
 * @default 8
 *
 * @param Animation Next Delay
 * @desc The animation next delay defined in the Battle Log.
 * Disables itself if using YEP_BattleEngineCore.
 * @default 12
 *
 * @help
 *
 * Battle Log Upgrade
 * Version 1.00
 * SumRndmDde
 *
 *
 * This Plugin allows you to have greater control over the Battle Log.
 *
 * For the most part, most of the Parameters are self-explanatory; however,
 * a couple may be a little confusing.
 *
 * To properly install, place underneath YEP_BattleEngineCore if you're
 * using it.
 *
 *
 * ==========================================================================
 *  Important Parameters
 * ==========================================================================
 *
 * == Reverse Mode ==
 * This can be set to 'true' or 'false'.
 * When it is 'true', that means the oldest logs will shift down to the
 * newer lines, and the newest log will take the first line.
 *
 * Using this, you can create an alternative style to the way the logs
 * are listed. 
 * It is recommended that you use Reverse Mode when the focus is more on the
 * center of the screen.
 *
 *
 * == New Log Placement ==
 * By default, the logs are listed downward. The first log is on top,
 * followed by the second log under it, then the thrid, etc.
 * 
 * However, this Parameter can be set to "above", which would make the 
 * logs stack on top of each other as opposed to going below the 
 * preceeding one.
 *
 * Once again, this is another stylistic choice that you can use.
 * If the Battle Log has been moved closer to the Actor Status Window, you
 * may wish to have then be listed upward as opposed to them going downward 
 * and blocking the status.
 *
 *
 * == Global Escape Chars ==
 * All of the Battle Log text is affected by escape characters, just like
 * the text in the dialouge boxes of a "Show Text" event.
 *
 * Using this Parameter, you can have a group of escape characters be added
 * to the front of all Battle Log messages.
 *
 * For example, if you input \c[1], the all of the Battle Log messages would
 * have blue text. You can used this primarily to change the color and size
 * of the text as you please. You could even combine Yanfly's Message Core
 * to add even more options! :)
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
SRD.BattleLogUpgrade = SRD.BattleLogUpgrade || {};

var Imported = Imported || {};
Imported["SumRndmDde Battle Log Upgrade"] = true;

(function(_) {

	_.rm = String(PluginManager.parameters('SRD_BattleLogUpgrade')['Reverse Mode']).trim().toLowerCase() === 'true';
	_.nlp = String(PluginManager.parameters('SRD_BattleLogUpgrade')['New Log Placement']).trim().toLowerCase() === 'above';
	_.gec = String(PluginManager.parameters('SRD_BattleLogUpgrade')['Global Escape Chars']);
	_.front = String(PluginManager.parameters('SRD_BattleLogUpgrade')['Global Front Chars']);
	_.end = String(PluginManager.parameters('SRD_BattleLogUpgrade')['Global End Chars']);
	_.max = String(PluginManager.parameters('SRD_BattleLogUpgrade')['Maximum Lines']);
	_.lh = Number(PluginManager.parameters('SRD_BattleLogUpgrade')['Line Height']);

	_.x = String(PluginManager.parameters('SRD_BattleLogUpgrade')['X Position']);
	_.y = String(PluginManager.parameters('SRD_BattleLogUpgrade')['Y Position']);
	_.width = String(PluginManager.parameters('SRD_BattleLogUpgrade')['Width']);
	_.height = String(PluginManager.parameters('SRD_BattleLogUpgrade')['Height']);
	_.color = String(PluginManager.parameters('SRD_BattleLogUpgrade')['Background Color']);
	_.opacity = Number(PluginManager.parameters('SRD_BattleLogUpgrade')['Background Opacity']);
	_.ms = String(PluginManager.parameters('SRD_BattleLogUpgrade')['Message Speed']);
	_.abd = String(PluginManager.parameters('SRD_BattleLogUpgrade')['Animation Base Delay']);
	_.and = String(PluginManager.parameters('SRD_BattleLogUpgrade')['Animation Next Delay']);

	Window_BattleLog.prototype.initialize = function() {
	    var width = this.windowWidth();
	    var height = this.windowHeight();
	    Window_Selectable.prototype.initialize.call(this, eval(_.x), eval(_.y), width, height);
	    this.opacity = 0;
	    this._lines = [];
	    this._methods = [];
	    this._waitCount = 0;
	    this._waitMode = '';
	    this._baseLineStack = [];
	    this._spriteset = null;
	    this.createBackBitmap();
	    this.createBackSprite();
	    this.refresh();
	};

	Window_BattleLog.prototype.windowWidth = function() {
	    return eval(_.width);
	};

	Window_BattleLog.prototype.windowHeight = function() {
	    return eval(_.height);
	};

	Window_BattleLog.prototype.lineHeight = function() {
	    return _.lh;
	};

	Window_BattleLog.prototype.maxLines = function() {
	    return eval(_.max);
	};

	Window_BattleLog.prototype.messageSpeed = function() {
	    return eval(_.ms);
	};

	if(!Imported.YEP_BattleEngineCore) {
		Window_BattleLog.prototype.animationBaseDelay = function() {
		    return eval(_.abd);
		};

		Window_BattleLog.prototype.animationNextDelay = function() {
		    return eval(_.and);
		};
	}

	var _Window_BattleLog_refresh = Window_BattleLog.prototype.refresh;
	Window_BattleLog.prototype.refresh = function() {
		if(_.nlp) this.y = eval(_.y) - (this.lineHeight() * (this._lines.length - 1));
	    _Window_BattleLog_refresh.call(this);
	};

	Window_BattleLog.prototype.backColor = function() {
	    return _.color;
	};

	Window_BattleLog.prototype.backPaintOpacity = function() {
	    return _.opacity;
	};

	var _Window_BattleLog_addText = Window_BattleLog.prototype.addText;
	Window_BattleLog.prototype.addText = function(text) {
		text = _.front + text + _.end;
		if(!Imported.YEP_BattleEngineCore) text = _.gec + text;
	    _Window_BattleLog_addText.call(this, text);
	};
	
	var _Window_BattleLog_itemRectForText = Window_BattleLog.prototype.itemRectForText;
	Window_BattleLog.prototype.itemRectForText = function(index) {
		if((_.rm && !_.nlp) || (!_.rm && _.nlp)) index = this._lines.length - 1 - index;
	    var rect = _Window_BattleLog_itemRectForText.call(this, index);
	    rect.x += eval(_.x);
	    rect.y += eval(_.y);
	    return rect;
	};

	if(Imported.YEP_BattleEngineCore) {
		Window_BattleLog.prototype.drawSimpleActionLine = function(index) {
		    var text = this._lines[index].replace('<SIMPLE>', '');
		    var rect = this.itemRectForText(index);
		    this.contents.clearRect(rect.x, rect.y, rect.width, rect.height);
		    if (this._actionIcon) {
		      var tw = this.textWidth(text);
		      var ix = (rect.width - tw) / 2 - 4;
		      this.drawIcon(this._actionIcon, ix, rect.y + ((_.lh / 2) - (Window_Base._iconHeight / 2)));
		    }
		    this.drawText(text, rect.x, rect.y, Graphics.boxWidth, 'center');
		};
	}

})(SRD.BattleLogUpgrade);