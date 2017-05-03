/*:
 * @plugindesc Shows a "Press Start" styled phrase and waits for input before opening the Command Window on the Title Screen.
 * @author SumRndmDde
 *
 * @param Shown Text
 * @desc This is the text that is shown on the Title Screen.
 * @default Press Z to Start
 *
 * @param Start Condition
 * @desc The JavaScript condition that must be true in order for the Title Screen to start.
 * @default Input.isPressed('ok') || TouchInput.isPressed()
 *
 * @param Fading Speed
 * @desc The speed in which the text fades in and out.
 * @default 4
 *
 * @param == Positioning ==
 * @default
 * 
 * @param Alignment
 * @desc The alignment of the text.
 * @default center
 * 
 * @param X Position
 * @desc The x-position of the text. This will not function well when the align is set to "center".
 * @default 20
 * 
 * @param Y Position
 * @desc The y-position of the text.
 * @default Graphics.height * (3/4)
 * 
 * @param Max Width
 * @desc The maximum width the text can be. The text will be squished to fit this size if it exceeds it.
 * @default Graphics.width
 * 
 * @param Max Height
 * @desc The maximum height the text can be. The text will be squished to fit this size if it exceeds it.
 * @default 48
 *
 * @param == Text Options ==
 * @default
 *
 * @param Font
 * @desc The font that is used.
 * @default GameFont
 *
 * @param Font Size
 * @desc The size of the font of the text.
 * @default 34
 *
 * @param Outline Size
 * @desc The size of the outline of the text.
 * @default 4
 *
 * @param Font Color
 * @desc The color of the font.
 * Default JavaScript colors, Hex code, and Rgba are acceptable.
 * @default #FFFFFF
 *
 * @param Outline Color
 * @desc The color of the outline.
 * Default JavaScript colors, Hex code, and Rgba are acceptable.
 * @default black
 *
 * @help
 *
 * Press Start
 * Version 1.00
 * SumRndmDde
 *
 * 
 * This Plugin is plug-in and play.
 * Simply put it in, then you can have an input that appears before
 * the command window on the Title Screen appears.
 *
 * You can customize the text that is shown in the Parameters.
 *
 * Furthermore, the fading speed, the font size, and the outline size
 * can also be manipulated in the Parameters.
 *
 *
 * ==========================================================================
 *  Important Parameters
 * ==========================================================================
 *
 * == Shown Text ==
 * The phrase that is inputted into this Parameter will be what is shown
 * to the Player on the Title Screen.
 *
 *
 * == Start Condition ==
 * This is a customizable JavaScript condition that must be true for the 
 * command window to actually open.
 *
 * By default, it is: Input.isPressed('ok') || TouchInput.isPressed()
 * which means it will activate if an "OK" button is pushed or if
 * a touch input is activated.
 *
 *
 * == Fading Speed ==
 * This is the speed in which the phrase fades in and out.
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
SRD.TitleStarter = SRD.TitleStarter || {};

var Imported = Imported || {};
Imported["SumRndmDde Press Start"] = true;

(function(_) {

	_.text = String(PluginManager.parameters('SRD_PressStart')['Shown Text']);
	_.condition = String(PluginManager.parameters('SRD_PressStart')['Start Condition']);
	_.fadeSpeed = Number(PluginManager.parameters('SRD_PressStart')['Fading Speed']);
	_.align = String(PluginManager.parameters('SRD_PressStart')['Alignment']);
	_.x = String(PluginManager.parameters('SRD_PressStart')['X Position']);
	_.y = String(PluginManager.parameters('SRD_PressStart')['Y Position']);
	_.width = String(PluginManager.parameters('SRD_PressStart')['Max Width']);
	_.height = String(PluginManager.parameters('SRD_PressStart')['Max Height']);
	_.font = String(PluginManager.parameters('SRD_PressStart')['Font']);
	_.fontSize = Number(PluginManager.parameters('SRD_PressStart')['Font Size']);
	_.outlineSize = Number(PluginManager.parameters('SRD_PressStart')['Outline Size']);
	_.fontColor = String(PluginManager.parameters('SRD_PressStart')['Font Color']);
	_.outlineColor = String(PluginManager.parameters('SRD_PressStart')['Outline Color']);

	var _Scene_Title_create = Scene_Title.prototype.create;
	Scene_Title.prototype.create = function() {
	    _Scene_Title_create.call(this);
	    this._isWaitingForInputStarter = true;
	    this._fadingInputSpeed = _.fadeSpeed;
	};

	var _Scene_Title_update = Scene_Title.prototype.update;
	Scene_Title.prototype.update = function() {
	    _Scene_Title_update.call(this);
	    if(this._isWaitingForInputStarter && this._pressToStartTheTitle) {
	    	if(eval(_.condition)) {
	    		this._isWaitingForInputStarter = false;
	    		this._pressToStartTheTitle.opacity = 0;
	    	}
    		this._pressToStartTheTitle.opacity += this._fadingInputSpeed;
    		if(this._pressToStartTheTitle.opacity <= 0 || this._pressToStartTheTitle.opacity >= 255) {
    			this._fadingInputSpeed *= -1;
    		}
    	}
	};

	var _Scene_Title_isBusy = Scene_Title.prototype.isBusy;
	Scene_Title.prototype.isBusy = function() {
	    return _Scene_Title_isBusy.call(this) || this._isWaitingForInputStarter;
	};

	var _Scene_Title_createForeground = Scene_Title.prototype.createForeground;
	Scene_Title.prototype.createForeground = function() {
	    _Scene_Title_createForeground.call(this);
	    this._pressToStartTheTitle = new Sprite(new Bitmap(Graphics.width, Graphics.height));
	    this.addChild(this._pressToStartTheTitle);
	    this.drawPressToStartTitle();
	};

	Scene_Title.prototype.drawPressToStartTitle = function() {
	    var x = eval(_.x);
	    var y = eval(_.y);
	    var maxWidth = eval(_.width);
	    var maxHeight = eval(_.height);
	    var text = _.text;
	    this._pressToStartTheTitle.opacity = 0;
	    this._pressToStartTheTitle.bitmap.fontFace = _.font;
	    this._pressToStartTheTitle.bitmap.textColor = _.fontColor;
	    this._pressToStartTheTitle.bitmap.outlineColor = _.outlineColor;
	    this._pressToStartTheTitle.bitmap.outlineWidth = _.outlineSize;
	    this._pressToStartTheTitle.bitmap.fontSize = _.fontSize;
	    this._pressToStartTheTitle.bitmap.drawText(text, x, y, maxWidth, maxHeight, _.align);
	};

})(SRD.TitleStarter)