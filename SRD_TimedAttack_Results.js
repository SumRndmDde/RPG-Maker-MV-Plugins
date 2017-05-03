/*:
 * @plugindesc Adds a customizable pop-up that can display the results of the Timed Attack.
 * @author SumRndmDde
 *
 * @param Parent
 * @desc 'actor'  -  Works better with battle cameras; transforms.
 * 'system'  -  No transformation; may break cameras.
 * @default system
 *
 * @param == Animation ==
 * @default
 *
 * @param Initial Height
 * @desc How high the text starts out at for the text animation.
 * The lower the number, the higher it starts.
 * @default -40
 *
 * @param Fall Speed
 * @desc How fast the text falls from its original height.
 * The higher the number, the faster it falls.
 * @default 0.5
 *
 * @param Bounce Ratio
 * @desc How much the speed is multiplied by when the text bounces.
 * @default -0.4
 *
 * @param Duration
 * @desc How much the speed is multiplied by when the text bounces.
 * The lower the number, the higher it starts.
 * @default 90
 *
 * @param == Text Settings ==
 * @default
 *
 * @param Font
 * @desc The default font used in the Results pop-up.
 * @default GameFont
 *
 * @param Size
 * @desc The default font size used in the Results pop-up.
 * @default 28
 *
 * @param Italicize
 * @desc The default font size used in the Results pop-up.
 * @default false
 *
 * @param Outline Size
 * @desc The default outline width used in the Results pop-up.
 * @default 4
 *
 * @param Outline Color
 * @desc The default outline width used in the Results pop-up.
 * @default #000000
 *
 * @param == Defaults ==
 * @default
 *
 * @param Default Text
 * @desc The default text that is shown in the Results pop-up.
 * Use %1 to represent the "value".
 * @default Power: %1
 *
 * @param Default Value
 * @desc The default value used in the Results pop-up.
 * Input a JavaScript formula.
 * @default Math.floor($gameTemp.tas_power * 100) + "%"
 *
 * @param Default Color
 * @desc The default text color used in the Results pop-up.
 * @default #FFFFFF
 *
 *
 * @param == Settings 1 ==
 * @default
 *
 * @param Settings 1 Condition
 * @desc If this condition is true, 'Settings 1' will be used for the results.
 * Use JavaScript to create the condition.
 * @default $gameTemp.tas_power >= 1
 *
 * @param Settings 1 Text
 * @desc The text used for the results if 'Settings 1' is used.
 * Use %1 to represent the value of Value 1.
 * @default Perfect!
 *
 * @param Settings 1 Value
 * @desc A value that can be used in Text 1.
 * Input a JavaScript formula.
 * @default
 *
 * @param Settings 1 Color
 * @desc The text color used in the Results pop-up for 'Settings 1'.
 * @default #66FF66
 *
 * @param == Settings 2 ==
 * @default
 *
 * @param Settings 2 Condition
 * @desc If this condition is true, 'Settings 2' will be used for the results.
 * Use JavaScript to create the condition.
 * @default $gameTemp.tas_power < 1 && $gameTemp.tas_power >= 0.7
 *
 * @param Settings 2 Text
 * @desc The text used for the results if 'Settings 2' is used.
 * Use %1 to represent the value of Value 2.
 * @default Great!
 *
 * @param Settings 2 Value
 * @desc A value that can be used in Text 2.
 * Input a JavaScript formula.
 * @default
 *
 * @param Settings 2 Color
 * @desc The text color used in the Results pop-up for 'Settings 2'.
 * @default #B3FF66
 *
 * @param == Settings 3 ==
 * @default
 *
 * @param Settings 3 Condition
 * @desc If this condition is true, 'Settings 3' will be used for the results.
 * Use JavaScript to create the condition.
 * @default $gameTemp.tas_power < 0.7 && $gameTemp.tas_power >= 0.4
 *
 * @param Settings 3 Text
 * @desc The text used for the results if 'Settings 3' is used.
 * Use %1 to represent the value of Value 3.
 * @default OK.
 *
 * @param Settings 3 Value
 * @desc A value that can be used in Text 3.
 * Input a JavaScript formula.
 * @default
 *
 * @param Settings 3 Color
 * @desc The text color used in the Results pop-up for 'Settings 3'.
 * @default #FFFF66
 *
 * @param == Settings 4 ==
 * @default
 *
 * @param Settings 4 Condition
 * @desc If this condition is true, 'Settings 4' will be used for the results.
 * Use JavaScript to create the condition.
 * @default $gameTemp.tas_power < 0.4 && $gameTemp.tas_power > 0
 *
 * @param Settings 4 Text
 * @desc The text used for the results if 'Settings 4' is used.
 * Use %1 to represent the value of Value 4.
 * @default Bad...
 *
 * @param Settings 4 Value
 * @desc A value that can be used in Text 4.
 * Input a JavaScript formula.
 * @default
 *
 * @param Settings 4 Color
 * @desc The text color used in the Results pop-up for 'Settings 4'.
 * @default #FFB366
 *
 * @param == Settings 5 ==
 * @default
 *
 * @param Settings 5 Condition
 * @desc If this condition is true, 'Settings 5' will be used for the results.
 * Use JavaScript to create the condition.
 * @default $gameTemp.tas_power <= 0
 *
 * @param Settings 5 Text
 * @desc The text used for the results if 'Settings 5' is used.
 * Use %1 to represent the value of Value 5.
 * @default Failure...
 *
 * @param Settings 5 Value
 * @desc A value that can be used in Text 5.
 * Input a JavaScript formula.
 * @default
 *
 * @param Settings 5 Color
 * @desc The text color used in the Results pop-up for 'Settings 5'.
 * @default #FF6666
 *
 * @param == Settings 6 ==
 * @default
 *
 * @param Settings 6 Condition
 * @desc If this condition is true, 'Settings 6' will be used for the results.
 * Use JavaScript to create the condition.
 * @default
 *
 * @param Settings 6 Text
 * @desc The text used for the results if 'Settings 6' is used.
 * Use %1 to represent the value of Value 6.
 * @default
 *
 * @param Settings 6 Value
 * @desc A value that can be used in Text 6.
 * Input a JavaScript formula.
 * @default
 *
 * @param Settings 6 Color
 * @desc The text color used in the Results pop-up for 'Settings 6'.
 * @default #FFFFFF
 *
 * @param == Settings 7 ==
 * @default
 *
 * @param Settings 7 Condition
 * @desc If this condition is true, 'Settings 7' will be used for the results.
 * Use JavaScript to create the condition.
 * @default
 *
 * @param Settings 7 Text
 * @desc The text used for the results if 'Settings 7' is used.
 * Use %1 to represent the value of Value 7.
 * @default
 *
 * @param Settings 7 Value
 * @desc A value that can be used in Text 7.
 * Input a JavaScript formula.
 * @default
 *
 * @param Settings 7 Color
 * @desc The text color used in the Results pop-up for 'Settings 7'.
 * @default #FFFFFF
 *
 * @param == Settings 8 ==
 * @default
 *
 * @param Settings 8 Condition
 * @desc If this condition is true, 'Settings 8' will be used for the results.
 * Use JavaScript to create the condition.
 * @default
 *
 * @param Settings 8 Text
 * @desc The text used for the results if 'Settings 8' is used.
 * Use %1 to represent the value of Value 8.
 * @default
 *
 * @param Settings 8 Value
 * @desc A value that can be used in Text 8.
 * Input a JavaScript formula.
 * @default
 *
 * @param Settings 8 Color
 * @desc The text color used in the Results pop-up for 'Settings 8'.
 * @default #FFFFFF
 *
 * @param == Settings 9 ==
 * @default
 *
 * @param Settings 9 Condition
 * @desc If this condition is true, 'Settings 9' will be used for the results.
 * Use JavaScript to create the condition.
 * @default
 *
 * @param Settings 9 Text
 * @desc The text used for the results if 'Settings 9' is used.
 * Use %1 to represent the value of Value 9.
 * @default
 *
 * @param Settings 9 Value
 * @desc A value that can be used in Text 9.
 * Input a JavaScript formula.
 * @default
 *
 * @param Settings 9 Color
 * @desc The text color used in the Results pop-up for 'Settings 9'.
 * @default #FFFFFF
 *
 * @param == Settings 10 ==
 * @default
 *
 * @param Settings 10 Condition
 * @desc If this condition is true, 'Settings 10' will be used for the results.
 * Use JavaScript to create the condition.
 * @default
 *
 * @param Settings 10 Text
 * @desc The text used for the results if 'Settings 10' is used.
 * Use %1 to represent the value of Value 10.
 * @default
 *
 * @param Settings 10 Value
 * @desc A value that can be used in Text 10.
 * Input a JavaScript formula.
 * @default
 *
 * @param Settings 10 Color
 * @desc The text color used in the Results pop-up for 'Settings 10'.
 * @default #FFFFFF
 *
 * @param == Settings 11 ==
 * @default
 *
 * @param Settings 11 Condition
 * @desc If this condition is true, 'Settings 11' will be used for the results.
 * Use JavaScript to create the condition.
 * @default
 *
 * @param Settings 11 Text
 * @desc The text used for the results if 'Settings 11' is used.
 * Use %1 to represent the value of Value 11.
 * @default
 *
 * @param Settings 11 Value
 * @desc A value that can be used in Text 11.
 * Input a JavaScript formula.
 * @default
 *
 * @param Settings 11 Color
 * @desc The text color used in the Results pop-up for 'Settings 11'.
 * @default #FFFFFF
 *
 * @param == Settings 12 ==
 * @default
 *
 * @param Settings 12 Condition
 * @desc If this condition is true, 'Settings 12' will be used for the results.
 * Use JavaScript to create the condition.
 * @default
 *
 * @param Settings 12 Text
 * @desc The text used for the results if 'Settings 12' is used.
 * Use %1 to represent the value of Value 12.
 * @default
 *
 * @param Settings 12 Value
 * @desc A value that can be used in Text 12.
 * Input a JavaScript formula.
 * @default
 *
 * @param Settings 12 Color
 * @desc The text color used in the Results pop-up for 'Settings 12'.
 * @default #FFFFFF
 *
 * @param == Settings 13 ==
 * @default
 *
 * @param Settings 13 Condition
 * @desc If this condition is true, 'Settings 13' will be used for the results.
 * Use JavaScript to create the condition.
 * @default
 *
 * @param Settings 13 Text
 * @desc The text used for the results if 'Settings 13' is used.
 * Use %1 to represent the value of Value 13.
 * @default
 *
 * @param Settings 13 Value
 * @desc A value that can be used in Text 13.
 * Input a JavaScript formula.
 * @default
 *
 * @param Settings 13 Color
 * @desc The text color used in the Results pop-up for 'Settings 13'.
 * @default #FFFFFF
 *
 * @param == Settings 14 ==
 * @default
 *
 * @param Settings 14 Condition
 * @desc If this condition is true, 'Settings 14' will be used for the results.
 * Use JavaScript to create the condition.
 * @default
 *
 * @param Settings 14 Text
 * @desc The text used for the results if 'Settings 14' is used.
 * Use %1 to represent the value of Value 14.
 * @default
 *
 * @param Settings 14 Value
 * @desc A value that can be used in Text 14.
 * Input a JavaScript formula.
 * @default
 *
 * @param Settings 14 Color
 * @desc The text color used in the Results pop-up for 'Settings 14'.
 * @default #FFFFFF
 *
 * @param == Settings 15 ==
 * @default
 *
 * @param Settings 15 Condition
 * @desc If this condition is true, 'Settings 15' will be used for the results.
 * Use JavaScript to create the condition.
 * @default
 *
 * @param Settings 15 Text
 * @desc The text used for the results if 'Settings 15' is used.
 * Use %1 to represent the value of Value 15.
 * @default
 *
 * @param Settings 15 Value
 * @desc A value that can be used in Text 15.
 * Input a JavaScript formula.
 * @default
 *
 * @param Settings 15 Color
 * @desc The text color used in the Results pop-up for 'Settings 15'.
 * @default #FFFFFF
 *
 * @param == Settings 16 ==
 * @default
 *
 * @param Settings 16 Condition
 * @desc If this condition is true, 'Settings 16' will be used for the results.
 * Use JavaScript to create the condition.
 * @default
 *
 * @param Settings 16 Text
 * @desc The text used for the results if 'Settings 16' is used.
 * Use %1 to represent the value of Value 16.
 * @default
 *
 * @param Settings 16 Value
 * @desc A value that can be used in Text 16.
 * Input a JavaScript formula.
 * @default
 *
 * @param Settings 16 Color
 * @desc The text color used in the Results pop-up for 'Settings 16'.
 * @default #FFFFFF
 *
 * @param == Settings 17 ==
 * @default
 *
 * @param Settings 17 Condition
 * @desc If this condition is true, 'Settings 17' will be used for the results.
 * Use JavaScript to create the condition.
 * @default
 *
 * @param Settings 17 Text
 * @desc The text used for the results if 'Settings 17' is used.
 * Use %1 to represent the value of Value 17.
 * @default
 *
 * @param Settings 17 Value
 * @desc A value that can be used in Text 17.
 * Input a JavaScript formula.
 * @default
 *
 * @param Settings 17 Color
 * @desc The text color used in the Results pop-up for 'Settings 17'.
 * @default #FFFFFF
 *
 * @param == Settings 18 ==
 * @default
 *
 * @param Settings 18 Condition
 * @desc If this condition is true, 'Settings 18' will be used for the results.
 * Use JavaScript to create the condition.
 * @default
 *
 * @param Settings 18 Text
 * @desc The text used for the results if 'Settings 18' is used.
 * Use %1 to represent the value of Value 18.
 * @default
 *
 * @param Settings 18 Value
 * @desc A value that can be used in Text 18.
 * Input a JavaScript formula.
 * @default
 *
 * @param Settings 18 Color
 * @desc The text color used in the Results pop-up for 'Settings 18'.
 * @default #FFFFFF
 *
 * @param == Settings 19 ==
 * @default
 *
 * @param Settings 19 Condition
 * @desc If this condition is true, 'Settings 19' will be used for the results.
 * Use JavaScript to create the condition.
 * @default
 *
 * @param Settings 19 Text
 * @desc The text used for the results if 'Settings 19' is used.
 * Use %1 to represent the value of Value 19.
 * @default
 *
 * @param Settings 19 Value
 * @desc A value that can be used in Text 19.
 * Input a JavaScript formula.
 * @default
 *
 * @param Settings 19 Color
 * @desc The text color used in the Results pop-up for 'Settings 19'.
 * @default #FFFFFF
 *
 * @param == Settings 20 ==
 * @default
 *
 * @param Settings 20 Condition
 * @desc If this condition is true, 'Settings 20' will be used for the results.
 * Use JavaScript to create the condition.
 * @default
 *
 * @param Settings 20 Text
 * @desc The text used for the results if 'Settings 20' is used.
 * Use %1 to represent the value of Value 20.
 * @default
 *
 * @param Settings 20 Value
 * @desc A value that can be used in Text 20.
 * Input a JavaScript formula.
 * @default
 *
 * @param Settings 20 Color
 * @desc The text color used in the Results pop-up for 'Settings 20'.
 * @default #FFFFFF
 *
 * @param == Settings 21 ==
 * @default
 *
 * @param Settings 21 Condition
 * @desc If this condition is true, 'Settings 21' will be used for the results.
 * Use JavaScript to create the condition.
 * @default
 *
 * @param Settings 21 Text
 * @desc The text used for the results if 'Settings 21' is used.
 * Use %1 to represent the value of Value 21.
 * @default
 *
 * @param Settings 21 Value
 * @desc A value that can be used in Text 21.
 * Input a JavaScript formula.
 * @default
 *
 * @param Settings 21 Color
 * @desc The text color used in the Results pop-up for 'Settings 21'.
 * @default #FFFFFF
 *
 * @param == Settings 22 ==
 * @default
 *
 * @param Settings 22 Condition
 * @desc If this condition is true, 'Settings 22' will be used for the results.
 * Use JavaScript to create the condition.
 * @default
 *
 * @param Settings 22 Text
 * @desc The text used for the results if 'Settings 22' is used.
 * Use %1 to represent the value of Value 22.
 * @default
 *
 * @param Settings 22 Value
 * @desc A value that can be used in Text 22.
 * Input a JavaScript formula.
 * @default
 *
 * @param Settings 22 Color
 * @desc The text color used in the Results pop-up for 'Settings 22'.
 * @default #FFFFFF
 *
 * @param == Settings 23 ==
 * @default
 *
 * @param Settings 23 Condition
 * @desc If this condition is true, 'Settings 23' will be used for the results.
 * Use JavaScript to create the condition.
 * @default
 *
 * @param Settings 23 Text
 * @desc The text used for the results if 'Settings 23' is used.
 * Use %1 to represent the value of Value 23.
 * @default
 *
 * @param Settings 23 Value
 * @desc A value that can be used in Text 23.
 * Input a JavaScript formula.
 * @default
 *
 * @param Settings 23 Color
 * @desc The text color used in the Results pop-up for 'Settings 23'.
 * @default #FFFFFF
 *
 * @param == Settings 24 ==
 * @default
 *
 * @param Settings 24 Condition
 * @desc If this condition is true, 'Settings 24' will be used for the results.
 * Use JavaScript to create the condition.
 * @default
 *
 * @param Settings 24 Text
 * @desc The text used for the results if 'Settings 24' is used.
 * Use %1 to represent the value of Value 24.
 * @default
 *
 * @param Settings 24 Value
 * @desc A value that can be used in Text 24.
 * Input a JavaScript formula.
 * @default
 *
 * @param Settings 24 Color
 * @desc The text color used in the Results pop-up for 'Settings 24'.
 * @default #FFFFFF
 *
 * @param == Settings 25 ==
 * @default
 *
 * @param Settings 25 Condition
 * @desc If this condition is true, 'Settings 25' will be used for the results.
 * Use JavaScript to create the condition.
 * @default
 *
 * @param Settings 25 Text
 * @desc The text used for the results if 'Settings 25' is used.
 * Use %1 to represent the value of Value 25.
 * @default
 *
 * @param Settings 25 Value
 * @desc A value that can be used in Text 25.
 * Input a JavaScript formula.
 * @default
 *
 * @param Settings 25 Color
 * @desc The text color used in the Results pop-up for 'Settings 25'.
 * @default #FFFFFF
 *
 * @param == Settings 26 ==
 * @default
 *
 * @param Settings 26 Condition
 * @desc If this condition is true, 'Settings 26' will be used for the results.
 * Use JavaScript to create the condition.
 * @default
 *
 * @param Settings 26 Text
 * @desc The text used for the results if 'Settings 26' is used.
 * Use %1 to represent the value of Value 26.
 * @default
 *
 * @param Settings 26 Value
 * @desc A value that can be used in Text 26.
 * Input a JavaScript formula.
 * @default
 *
 * @param Settings 26 Color
 * @desc The text color used in the Results pop-up for 'Settings 26'.
 * @default #FFFFFF
 *
 * @param == Settings 27 ==
 * @default
 *
 * @param Settings 27 Condition
 * @desc If this condition is true, 'Settings 27' will be used for the results.
 * Use JavaScript to create the condition.
 * @default
 *
 * @param Settings 27 Text
 * @desc The text used for the results if 'Settings 27' is used.
 * Use %1 to represent the value of Value 27.
 * @default
 *
 * @param Settings 27 Value
 * @desc A value that can be used in Text 27.
 * Input a JavaScript formula.
 * @default
 *
 * @param Settings 27 Color
 * @desc The text color used in the Results pop-up for 'Settings 27'.
 * @default #FFFFFF
 *
 * @param == Settings 28 ==
 * @default
 *
 * @param Settings 28 Condition
 * @desc If this condition is true, 'Settings 28' will be used for the results.
 * Use JavaScript to create the condition.
 * @default
 *
 * @param Settings 28 Text
 * @desc The text used for the results if 'Settings 28' is used.
 * Use %1 to represent the value of Value 28.
 * @default
 *
 * @param Settings 28 Value
 * @desc A value that can be used in Text 28.
 * Input a JavaScript formula.
 * @default
 *
 * @param Settings 28 Color
 * @desc The text color used in the Results pop-up for 'Settings 28'.
 * @default #FFFFFF
 *
 * @param == Settings 29 ==
 * @default
 *
 * @param Settings 29 Condition
 * @desc If this condition is true, 'Settings 29' will be used for the results.
 * Use JavaScript to create the condition.
 * @default
 *
 * @param Settings 29 Text
 * @desc The text used for the results if 'Settings 29' is used.
 * Use %1 to represent the value of Value 29.
 * @default
 *
 * @param Settings 29 Value
 * @desc A value that can be used in Text 29.
 * Input a JavaScript formula.
 * @default
 *
 * @param Settings 29 Color
 * @desc The text color used in the Results pop-up for 'Settings 29'.
 * @default #FFFFFF
 *
 * @param == Settings 30 ==
 * @default
 *
 * @param Settings 30 Condition
 * @desc If this condition is true, 'Settings 30' will be used for the results.
 * Use JavaScript to create the condition.
 * @default
 *
 * @param Settings 30 Text
 * @desc The text used for the results if 'Settings 30' is used.
 * Use %1 to represent the value of Value 30.
 * @default
 *
 * @param Settings 30 Value
 * @desc A value that can be used in Text 30.
 * Input a JavaScript formula.
 * @default
 *
 * @param Settings 30 Color
 * @desc The text color used in the Results pop-up for 'Settings 30'.
 * @default #FFFFFF
 *
 * @help
 *
 * Timed Attack: Results
 * Version 1.01
 * SumRndmDde
 *
 *
 * Adds a customizable pop-up that can display the results of the Timed Attack.
 *
 * ==========================================================================
 *  How To Make it Work
 * ==========================================================================
 *
 * Within the Parameters, you will find sections called "Settings #".
 *
 * Each group of settings can possibly be what is used for the results.
 * This is determined by the "Settings # Condition".
 *
 * For example, when the Timed Attack is used, and the condition for 
 * Settings 1 Condition is true, then the Text, Value, and Color from 
 * Settings 1 will be what is used in the results pop-up.
 *
 *
 * ==========================================================================
 *  Text vs. Value
 * ==========================================================================
 *
 * The "Settings # Text" is what is shown as the "result" itself.
 * However, if you wish to preform a JavaScript evaluation to include within
 * the text, you can use the "value" Parameter.
 *
 * The value Parameter is a JavaScript eval that can be included in the text.
 *
 * To use it in the text, use %1.
 * For example:
 *
 * Text:   Hello! %1
 *
 * Value:  $gameTemp.tas_power * 100
 *
 * Result: Hello! 87
 *
 *
 * ==========================================================================
 *  Default Settings
 * ==========================================================================
 *
 * Finally, if none of the Settings' Conditions are true, then the Parameters
 * set up in the "Default" section will be used.
 *
 *
 * ==========================================================================
 *  Animation and Text Settings
 * ==========================================================================
 *
 * Besides all of the Result Settings stuff, you can also set up global
 * settings for the text and animation of the text.
 *
 * For the text, the font, font size, outline size, and outline color can be
 * customized. For the animation, the initial height, fall speed, bounce ratio,
 * and duration.
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

var Imported = Imported || {};
Imported["SumRndmDde Timed Attack Results"] = 1.00;

if(Imported["SumRndmDde Timed Attack Core"]) {

SRD.TimedAttackDisplay = SRD.TimedAttackDisplay || {};

function Sprite_TimedAttackResults() {
	this.initialize.apply(this, arguments);
}

(function(_) {

	var params = PluginManager.parameters('SRD_TimedAttack_Results');

	_.parent = String(params['Parent']);

	_.aniHeight = Number(params['Initial Height']);
	_.aniSpeed = Number(params['Fall Speed']);
	_.aniRatio = Number(params['Bounce Ratio']);
	_.duration = Number(params['Duration']);

	_.font = String(params['Font']);
	_.size = parseInt(params['Size']);
	_.italic = String(params['Italicize']).trim().toLowerCase() === 'true';
	_.outColor = String(params['Outline Color']);
	_.outSize = parseInt(params['Outline Size']);

	_.condition = [];
	_.text = [];
	_.value = [];
	_.color = [];

	for(var i = 1; i <= 30; i++) {
		var cond = String(params['Settings '+i+' Condition']);
		var txt = String(params['Settings '+i+' Text']);
		if(cond.trim().length > 0 && txt.trim().length > 0) {
			_.condition.push(cond);
			_.text.push(txt);
			_.value.push(String(params['Settings '+i+' Value']));
			_.color.push(String(params['Settings '+i+' Color']));
		}
	}

	_.condition.push("true");
	_.text.push(String(params['Default Text']));
	_.value.push(String(params['Default Value']));
	_.color.push(String(params['Default Color']));

	var _TimedAttackSystem_initialize = TimedAttackSystem.prototype.initialize;
	TimedAttackSystem.prototype.initialize = function(x, y) {
	    _TimedAttackSystem_initialize.call(this, x, y);
	    this._results = null;
	};

	TimedAttackSystem.prototype.showResults = function() {
		var resultId = 0;
	    for(var i = 0; i < _.condition.length; i++) {
	    	if(eval(_.condition[i])) {
	    		resultId = i;
	    		break;
	    	}
	    }
	    if(_.parent === 'actor') {
			this._resultActor.removeChild(this._results);
		} else {
			this.removeChild(this._results);
    	}
		this._results = new Sprite_TimedAttackResults(resultId);
		this._resultActor = BattleManager._spriteset._actorSprites[BattleManager._subject.index()];
		if(_.parent === 'actor') {
			this._results.y += (this._resultActor._mainSprite.height/2);
			this._results.setup('bla');
			this._resultActor.addChild(this._results);
		} else {
			this._results.x = this._resultActor.x;
			this._results.y = this._resultActor.y + (this._resultActor._mainSprite.height/2);
			this._results.setup('bla');
			this.addChild(this._results);
		}
    };

    TimedAttackSystem.prototype.resultsUpdate = function() {
    	if(this._results) {
    		if(_.parent === 'actor') {
    			if(!this._results.isPlaying() && this._resultActor) {
	    			this._resultActor.removeChild(this._results);
	    		}
    		} else {
    			this._results.update();
    			if(!this._results.isPlaying()) {
	    			this.removeChild(this._results);
	    		}
    		}
    		
    	}
    };

    var _TimedAttackSystem_update = TimedAttackSystem.prototype.update;
    TimedAttackSystem.prototype.update = function() {
		_TimedAttackSystem_update.call(this);
		this.resultsUpdate();
	};

	Sprite_TimedAttackResults.prototype = Object.create(Sprite.prototype);
	Sprite_TimedAttackResults.prototype.constructor = Sprite_TimedAttackResults;

	Sprite_TimedAttackResults.prototype.initialize = function(id) {
	    Sprite.prototype.initialize.call(this);
	    this._flashColor = [0, 0, 0, 0];
	    this._flashDuration = 0;
	    this._duration = _.duration;

	    this._resultId = id;
	    this._text = _.text[this._resultId];
	    this._value = _.value[this._resultId];
	    this._color = _.color[this._resultId];
	};

	Sprite_TimedAttackResults.prototype.setup = function(type) {
		var text = this._text;
		if(this._value.trim().length > 0) {
			text = text.replace(/%1/, eval(this._value));
		}
	    this.createDigits(0, text);
	};

	Sprite_TimedAttackResults.prototype.digitWidth = function() {
	    return this.createBitmap().measureTextWidth("A");
	};

	Sprite_TimedAttackResults.prototype.digitHeight = function() {
	    return this.digitWidth();
	};

	Sprite_TimedAttackResults.prototype.createDigits = function(baseRow, string) {
	    var w = this.digitWidth();
	    var h = this.digitHeight();
	    for(var i = 0; i < string.length; i++) {
	        var sprite = this.createChildSprite();
	        var n = Number(string[i]);
	        sprite.bitmap.drawText(string.substring(i, i+1), h/2, w/2, w, h, 'left');
	        sprite.x = (i - (string.length - 1) / 2) * w;
	        sprite.dy = -(i/2);
	    }
	};

	Sprite_TimedAttackResults.prototype.createChildSprite = function() {
	    var sprite = new Sprite(this.createBitmap());
	    sprite.anchor.x = 0.5;
	    sprite.anchor.y = 1;
	    sprite.y = _.aniHeight;
	    sprite.ry = sprite.y;
	    this.addChild(sprite);
	    return sprite;
	};

	Sprite_TimedAttackResults.prototype.createBitmap = function() {
	    var bitmap = new Bitmap(_.size * 2, _.size * 2);
	    bitmap.fontFace = _.font;
	    bitmap.fontSize = _.size;
	    bitmap.fontItalic = _.italic;
	    bitmap.textColor = this._color;
	    bitmap.outlineColor = _.outColor;
	    bitmap.outlineWidth = _.outSize;
	    return bitmap;
	};

	Sprite_TimedAttackResults.prototype.update = function() {
	    Sprite.prototype.update.call(this);
	    if (this._duration > 0) {
	        this._duration--;
	        for (var i = 0; i < this.children.length; i++) {
	            this.updateChild(this.children[i]);
	        }
	    }
	    this.updateFlash();
	    this.updateOpacity();
	};

	Sprite_TimedAttackResults.prototype.updateChild = function(sprite) {
	    sprite.dy += _.aniSpeed;
	    sprite.ry += sprite.dy;
	    if (sprite.ry >= 0) {
	        sprite.ry = 0;
	        sprite.dy *= _.aniRatio;
	    }
	    sprite.y = Math.round(sprite.ry);
	    sprite.setBlendColor(this._flashColor);
	};

	Sprite_TimedAttackResults.prototype.updateFlash = function() {
	    if (this._flashDuration > 0) {
	        var d = this._flashDuration--;
	        this._flashColor[3] *= (d - 1) / d;
	    }
	};

	Sprite_TimedAttackResults.prototype.updateOpacity = function() {
	    if (this._duration < 10) {
	        this.opacity = 255 * this._duration / 10;
	    }
	};

	Sprite_TimedAttackResults.prototype.isPlaying = function() {
	    return this._duration > 0;
	};

})(SRD.TimedAttackDisplay);

} else alert("Please install 'SRD_TimedAttackCore' in order to use 'SRD_TimedAttack_Results'.");