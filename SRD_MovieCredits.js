/*:
 * @plugindesc Shows a list of credits that move up the screen.
 * @author SumRndmDde
 *
 * @param Credits File Source
 * @desc The file location and name of the text file that contains the credits information. 
 * @default data/credits.txt
 *
 * @param End Common Event ID
 * @desc This is the ID of the Common Event that is called when the credits are finished. Enter 0 for no Common Event.
 * @default 0
 *
 * @param Credits Speed
 * @desc The speed that the credits move.
 * Input a number. Default is 1.
 * @default 1
 *
 * @param Allow Speedup
 * @desc If set to 'true', the Player will be allowed to speed up the credits by holding the "OK" button.
 * @default false
 *
 * @param Speedup Speed
 * @desc The number in which the speed of the credits is multiplied by when using "Speedup".
 * @default 4
 *
 * @param Line Height
 * @desc The height of the text.
 * Input a number. Default is 32.
 * @default 32
 *
 * @param Line Seperation
 * @desc The distance between each line of text.
 * Input a number. Default is 48.
 * @default 48
 *
 * @param == Credits Font ==
 * @default
 *
 * @param Default Font
 * @desc The default font used by the credits.
 * Input a font name. Default is Arial.
 * @default Arial
 *
 * @param Default Font Size
 * @desc The default font size used by the credits.
 * Input a number. Default is 34.
 * @default 34
 *
 * @param Default Italic
 * @desc Whether there is italic by default. 
 * Input either 'true' or 'false'.
 * @default false
 *
 * @param Default Text Color
 * @desc The default text color used by the credits.
 * Input an HTML color code or RGB code.
 * @default #ffffff
 *
 * @param Default Outline Color
 * @desc The default outline color used by the credits.
 * Input an HTML color code or RGB code.
 * @default rgba(0, 0, 0, 1)
 *
 * @param Default Outline Width
 * @desc The default outline width used by the credits.
 * Input a number. Default is 4.
 * @default 4
 *
 * @help
 *
 * Movie Credits
 * Version 1.00
 * SumRndmDde
 *
 *
 * Allows you to show cinematic credits in your game.
 *
 * ================
 * Quick Reference
 * ================
 * Plugin Commands:
 *     StartCredits
 *     PauseCredits
 *     ResetCredits
 *
 *
 * ==========================================================================
 * Step 1: Create the File
 * ==========================================================================
 *
 * The credits will be referenced from a text file you create.
 *
 * Create a .txt file in your /data folder named "credits" to use the 
 * default file location.
 *
 * Within the text file, list out all of the credits.
 * They will be automatically centered in-game.
 *
 * If you choose to use a different file name or location, be sure to input
 * the new location in the "Credits File Source" parameter.
 *
 *
 * ==========================================================================
 * Step 2: Set the Common Event
 * ==========================================================================
 *
 * In certain cases, you may want a Common Event to be played when the 
 * credits are done.
 * This can be used to transfer the Player to a certain map once the credits
 * are over or to initialize something else....
 *
 * You can set the Common Event you wish to use by setting the 
 * "End Common Event ID" parameter to the Common Event ID you wish to use.
 *
 *
 *
 * ==========================================================================
 * Step 3: Call the Credits
 * ==========================================================================
 *
 *
 * You can call the credits using the Plugin Command:
 *
 *     StartCredits
 *
 * ==========================================================================
 *
 * You can pause the credits using the Plugin Command:
 *
 *     PauseCredits
 *
 * ==========================================================================
 *
 * You can turn off/reset the credits using the Plugin Command:
 *
 *     ResetCredits
 *
 * 
 * ==========================================================================
 * Extra Features
 * ==========================================================================
 *
 * If you wish to allow the Player to speed through the credits by holding
 * the "OK" button, you can do so by setting the parameter "Allow Speedup"
 * to true.
 *
 * You can customize what the credit text looks like by manipulating the 
 * parameters listed under "Credits Font".
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
SRD.MovieCredits = SRD.MovieCredits || {};

var Imported = Imported || {};
Imported["SumRndmDde Movie Credits"] = true;

(function(_) {

    _.creditsFileSource = String(PluginManager.parameters('SRD_MovieCredits')['Credits File Source']);
    _.commonEventId = Number(PluginManager.parameters('SRD_MovieCredits')['End Common Event ID']);
    _.creditsSpeed = Number(PluginManager.parameters('SRD_MovieCredits')['Credits Speed']);
    _.creditsSpeedup = String(PluginManager.parameters('SRD_MovieCredits')['Allow Speedup']).trim().toLowerCase() === 'true';
    _.creditsSpeedupSpeed = Number(PluginManager.parameters('SRD_MovieCredits')['Speedup Speed']);

    _.lineHeight = Number(PluginManager.parameters('SRD_MovieCredits')['Line Height']);
    _.lineSeperation = Number(PluginManager.parameters('SRD_MovieCredits')['Line Seperation']);

    _.defaultFont = String(PluginManager.parameters('SRD_MovieCredits')['Default Font']);
    _.defaultFontSize = Number(PluginManager.parameters('SRD_MovieCredits')['Default Font Size']);
    _.defaultItalic = String(PluginManager.parameters('SRD_MovieCredits')['Default Italic']).trim().toLowerCase() === 'true';
    _.defaultTextColor = String(PluginManager.parameters('SRD_MovieCredits')['Default Text Color']);
    _.defaultOutlineColor = String(PluginManager.parameters('SRD_MovieCredits')['Default Outline Color']);
    _.defaultOutlineWidth = Number(PluginManager.parameters('SRD_MovieCredits')['Default Outline Width']);

    var filePath = _.creditsFileSource;
    xmlhttp = new XMLHttpRequest();
    xmlhttp.open("GET",filePath,false);
    xmlhttp.send(null); 
    var fileContent = xmlhttp.responseText;
    _.creditLines = fileContent.split(/[\n]/i);

    var _Game_System_initialize = Game_System.prototype.initialize;
	Game_System.prototype.initialize = function() {
	    _Game_System_initialize.call(this);
	    this._showCredits = false;
	    this._creditsActive = false;
	    this._creditShift = 0;
	};

	Game_System.prototype.showCredits = function() {
	    return this._showCredits;
	};

	Game_System.prototype.areCreditsActive = function() {
	    return this._creditsActive;
	};

	Game_System.prototype.creditShift = function() {
	    return this._creditShift;
	};

	Game_System.prototype.setShowCredits = function(show) {
		if(show) this.setCreditActivity(true);
	    this._showCredits = show;
	};

	Game_System.prototype.setCreditActivity = function(active) {
	    this._creditsActive = active;
	};

	Game_System.prototype.addCreditShift = function(shift) {
	    this._creditShift += shift;
	};

	Game_System.prototype.resetCredits = function() {
		this._showCredits = false;
		this._creditsActive = false;
	    this._creditShift = 0;
	};

	var _Game_Interpreter_pluginCommand = Game_Interpreter.prototype.pluginCommand;
	Game_Interpreter.prototype.pluginCommand = function(command, args) {
	    _Game_Interpreter_pluginCommand.call(this, command, args);

	    if(command.trim().toLowerCase() === 'startcredits') $gameSystem.setShowCredits(true);
	    if(command.trim().toLowerCase() === 'pausecredits') $gameSystem.setShowCredits(false);
	    if(command.trim().toLowerCase() === 'resetcredits') $gameSystem.resetCredits();
	};

	var _Scene_Base_start = Scene_Base.prototype.start;
	Scene_Base.prototype.start = function() {
	    _Scene_Base_start.call(this);
	    this._creditsList = new Sprite(new Bitmap(Graphics.width, Graphics.height));
	    this.resetCreditSettings();
	    this.addChild(this._creditsList);
	    this._shift = 0;
	    this._showCredits = true;
	};

	Scene_Base.prototype.resetCreditSettings = function() {
		this._creditsList.bitmap.fontFace = _.defaultFont;
    	this._creditsList.bitmap.fontSize = _.defaultFontSize;
    	this._creditsList.bitmap.fontItalic = _.defaultItalic;
    	this._creditsList.bitmap.textColor = _.defaultTextColor;
    	this._creditsList.bitmap.outlineColor = _.defaultOutlineColor;
    	this._creditsList.bitmap.outlineWidth = _.defaultOutlineWidth;
	}

	var _Scene_Base_update = Scene_Base.prototype.update;
	Scene_Base.prototype.update = function() {
	    _Scene_Base_update.call(this);
	    if($gameSystem.showCredits()) this.updateCredits();
	};

	Scene_Base.prototype.updateCredits = function() {
		$gameSystem.addCreditShift(_.creditsSpeed);
		if(_.creditsSpeedup && Input.isPressed('ok')) {
			$gameSystem.addCreditShift(_.creditsSpeed * (_.creditsSpeedupSpeed - 1));
		}
	    this._creditsList.bitmap.clear();
	    var reset = false;
	    for(var i = 0; i < _.creditLines.length; i++) {
	    	var y = Math.floor((Graphics.height + (i * _.lineSeperation)) - $gameSystem.creditShift());
	    	if(y > 0 - (_.lineSeperation) && y < Graphics.height + (_.lineSeperation)) {
	    		this._creditsList.bitmap.drawText(_.creditLines[i], 0, y, Graphics.width, _.lineHeight, 'center');
	    	} else if(i === _.creditLines.length - 1 && y < 0 - (_.lineSeperation)) {
	    		$gameSystem.resetCredits();
	    		if(_.commonEventId !== 0) {
	    			$gameTemp.reserveCommonEvent(_.commonEventId);
	    		}
	    	}
	    }
	};
	
})(SRD.MovieCredits);