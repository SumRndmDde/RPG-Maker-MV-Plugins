/*:
 * @plugindesc Gives you more customization over a Skill's or Item's "Repeat" functionality.
 * @author SumRndmDde
 *
 * @param Minimum Repeat
 * @desc The lowest repeat count that is allowed in the game. 
 * Any count lower than this will be set to this.
 * @default 1
 *
 * @param Maximum Repeat
 * @desc The highest repeat count that is allowed in the game. 
 * Any count highest than this will be set to this.
 * @default 99
 *
 * @help
 *
 * Repeat Upgrade
 * Version 1.00
 * SumRndmDde
 *
 * 
 * Normally, RPG Maker MV allows you to set a constant number between 
 * 1 and 9 as a Skill's or Item's repeat count. 
 *
 * Using this Plugin, you can surpass that limit and even create custom
 * formulas for a Skill's or Item's repeat count.
 *
 * ==========================================================================
 * Skill and Item Notetags
 * ==========================================================================
 *
 *  <Repeat: x>
 *
 * This simply allows you to input any repeat count.
 * For example, if you wanted a Skill/Item to repeat 20 times, you would do:
 *
 *  <Repeat: 20>
 *
 *
 * ==========================================================================
 * Repeat Formula
 * ==========================================================================
 *
 * You can also create a formula.
 * Within the formula, you can use:
 *  a = The User
 *  v = Game Variables
 *  s = Game Switches
 *  item = The Item
 *
 * So, for example, you could do:
 * 
 *  <Repeat: a.level>
 *  (Sets the repeat count to the level of the user)
 *
 *  <Repeat: (a.atk / 10) + 1>
 *  (Adds 1 repeat for every 10 ATK the user has)
 *
 *  <Repeat: Math.randomInt(4) + 2>
 *  (Sets the repeat to a number between 2 and 5 inclusive)
 *
 * Take note of the fact that the resulting number will always round down
 * to the closest integer value.
 *  
 *
 * ==========================================================================
 * Long Repeat Formula
 * ==========================================================================
 *
 *  <Repeat>
 *  </Repeat>
 *
 * This is an expansion on the notetag above.
 * Within the two notetags, you can use JavaScript code to create an 
 * expanded formula for your Skill's or Item's repeat count.
 * 
 * To set the final repeat count, set the value you wish to use to the
 * variable "result".
 *
 * For example:
 *
 *  <Repeat>
 *  result = 10;
 *  </Repeat>
 *
 * This would set the repeat count to 10.
 *
 * Here are some more examples:
 *
 *  <Repeat>
 *  var temp = Math.random(3);
 *  temp = temp + 10;
 *  result = temp;
 *  </Repeat>
 *  (Sets the repeat to a random number between 10 and 12)
 *
 *  <Repeat>
 *  var temp = v[2];
 *  temp += a.level;
 *  result = temp;
 *  </Repeat>
 *  (Sets the repeat to the value of Game Variable 2 plus the user's level)
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
SRD.RepeatUpgrade = SRD.RepeatUpgrade || {};

var Imported = Imported || {};
Imported["SumRndmDde Repeat Upgrade"] = true;

(function(_) {

	_.loadNotetags = function(data) {
		var repeat = /<\s*Repeat\s*:\s*(.*)>/im;
		var repeatMore = /<\s*Repeat\s*>([\d\D\n\r]*)<\/\s*Repeat\s*>/im;
		for(var i = 1; i < data.length; i++) {
			if(data[i].note.match(repeat)) data[i].ru_repeatCount = RegExp.$1;
			if(data[i].note.match(repeatMore)) data[i].ru_repeatCountMore = RegExp.$1;
		}
	};

	var notetagsLoaded = false;
	var _DataManager_isDatabaseLoaded = DataManager.isDatabaseLoaded;
	DataManager.isDatabaseLoaded = function() {
	    if(!_DataManager_isDatabaseLoaded.call(this)) return false;
	    if(!notetagsLoaded) {
	    	_.loadNotetags($dataSkills);
	    	_.loadNotetags($dataItems);
	    	notetagsLoaded = true;
	    }
	    return true;
	};

	var _Game_Action_initialize = Game_Action.prototype.initialize;
	Game_Action.prototype.initialize = function(subject, forcing) {
	    _Game_Action_initialize.call(this, subject, forcing);
	    this._numberOfRepeats = null;
	};
	
	var _Game_Action_numRepeats = Game_Action.prototype.numRepeats;
	Game_Action.prototype.initializeRepeats = function() {
		var a = this.subject();
		var v = $gameVariables._data;
		var s = $gameSwitches._data;
		var item = this.item();
		if(item.ru_repeatCountMore) {
			var result = _Game_Action_numRepeats.call(this);
			eval(item.ru_repeatCountMore);
			return Math.floor(result);
		} else if(item.ru_repeatCount) {
			return Math.floor(eval(item.ru_repeatCount));
		}
	    return _Game_Action_numRepeats.call(this);
	};

	Game_Action.prototype.numRepeats = function() {
		if(this._numberOfRepeats === null) {
			this._numberOfRepeats = this.initializeRepeats();
		}
		return this._numberOfRepeats;
	};

})(SRD.RepeatUpgrade);