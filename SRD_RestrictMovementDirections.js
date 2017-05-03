/*:
 * 
 * @plugindesc Restricts moving is specific directions based on conditions or switches.
 * @author SumRndmDde
 *
 * @param Move Up Switch
 * @desc Set this to the Switch ID that would restrict the Player from moving up when ON. Set to 0 to disallow.
 * @default 0
 *
 * @param Move Right Switch
 * @desc Set this to the Switch ID that would restrict the Player from moving right when ON. Set to 0 to disallow.
 * @default 0
 *
 * @param Move Left Switch
 * @desc Set this to the Switch ID that would restrict the Player from moving left when ON. Set to 0 to disallow.
 * @default 0
 *
 * @param Move Down Switch
 * @desc Set this to the Switch ID that would restrict the Player from moving down when ON. Set to 0 to disallow.
 * @default 0
 *
 * @param Move Up Condition
 * @desc Set this to the JavaScript condition that would restrict the Player from moving up when true. Set blank disallow.
 * @default
 *
 * @param Move Right Condition
 * @desc Set this to the JavaScript condition that would restrict the Player from moving right when true. Set blank disallow.
 * @default
 *
 * @param Move Left Condition
 * @desc Set this to the JavaScript condition that would restrict the Player from moving left when true. Set blank disallow.
 * @default
 *
 * @param Move Down Condition
 * @desc Set this to the JavaScript condition that would restrict the Player from moving down when true. Set blank disallow.
 * @default
 *
 * @help
 *
 * Restrict Movement Directions
 * Version 1.00
 * SumRndmDde
 *
 * There are no Plugin Commands or Notetags.
 *
 * This Plugin restricts the Player from moving in a specific direction based 
 * on a Switch and/or JavaScript condition.
 *
 * This can be used to create specific scenes in which the Player should only
 * move in a certain direction, or puzzles and mazes which become difficult
 * without the Player's ability to move in every direction.
 *
 * If you have any requests or questions, feel free to ask me on my YouTube 
 * channel: http://youtube.com/c/SumRndmDde
 */

(function() {

	var p = PluginManager.parameters('SRD_RestrictMovementDirections');
	var switches = [Number(p['Move Down Switch']), Number(p['Move Left Switch']), Number(p['Move Right Switch']), 
		Number(p['Move Up Switch'])];
	var conditions = [String(p['Move Down Condition']).trim(), String(p['Move Left Condition']).trim(), 
		String(p['Move Right Condition']).trim(), String(p['Move Up Condition']).trim()];

	var _Game_Player_getInputDirection = Game_Player.prototype.getInputDirection;
	Game_Player.prototype.getInputDirection = function() {
		var index = (_Game_Player_getInputDirection.call(this) / 2) - 1;
		index = (index === -1) ? 0 : index;
		if(switches[index] !== 0 && $gameSwitches.value(switches[index])) {
			return 0;
		} else if(conditions[index].length > 0 && eval(conditions[index])) {
			return 0;
		}
	    return _Game_Player_getInputDirection.call(this);
	};

})();