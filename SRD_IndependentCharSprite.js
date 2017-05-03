/*:
 * @plugindesc Sets a specific Player sprite to use on your Player no matter what your party members are.
 * @author SumRndmDde
 *
 * @param Start ON?
 * @desc You can disable the Independent Character Sprite throughout the game. Set 'false' to start with it disabled.
 * @default true
 * 
 * @param Initial Char Name
 * @desc The name of the file your Player character sprite will start with.
 * @default Actor1
 *
 * @param Initial Char Index
 * @desc The index of the character in the file your Player character sprite will start with. Input number 0 to 7.
 * @default 0
 *
 * @help
 *
 *
 * Independent Character Sprite
 * Version 1.00
 * SumRndmDde
 *
 *
 * ==========================================================================
 * Explanation
 * ==========================================================================
 *
 * In some games, such as Pokemon games, you may wish for the on-map 
 * character to be independent from the members of the party.
 *
 * This Plugin allows you to set the Player sprite to whatever you
 * wish.
 *
 * You can change the Player sprite during the game, and you can enable and
 * disable this Plugin during the game.
 *
 * You cannot manipulate the sprites of the follower; however, if there is
 * enough of a demand for it, I can add them. :)
 *
 *
 * ==========================================================================
 * Plugin Commands
 * ==========================================================================
 *
 *  => EnableIndependentCharSprite
 *
 * Enables Independent Character Sprite
 * 
 *
 *  => DisableIndependentCharSprite
 *
 * Disables Independent Character Sprite
 *
 *
 *  => ToggleIndependentCharSprite
 *
 * Switches the Independent Character Sprite's enabled/disabled value
 *
 *
 *  => SetIndependentCharSprite x y
 *
 * Allows you to set the Independent Character Sprite.
 *
 * Set x to the name of the file.
 * Set y to the index of the character sprite in the file (0 - 7).
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

(function() {

	var p = PluginManager.parameters("SRD_IndependentCharSprite");

	var enabled = String(p["Start ON?"]).trim().toLowerCase() === "true";
	var playerCharName = String(p["Initial Char Name"]);
	var playerCharIndex = Number(p["Initial Char Index"]);

	Game_Actor.prototype.characterName = function() {
		return (enabled) ? playerCharName : this._characterName;
	};

	Game_Actor.prototype.characterIndex = function() {
		return (enabled) ? playerCharIndex : this._characterIndex;
	};

	var _Game_Interpreter_pluginCommand = Game_Interpreter.prototype.pluginCommand;
	Game_Interpreter.prototype.pluginCommand = function(command, args) {
		_Game_Interpreter_pluginCommand.call(this, command, args);

		if(command.trim().toLowerCase() === "disableindependentcharsprite") {
			enabled = false;
			$gamePlayer.refresh();
		} else if(command.trim().toLowerCase() === "enableindependentcharsprite") {
			enabled = true;
			$gamePlayer.refresh();
		} else if(command.trim().toLowerCase() === "toggleindependentcharsprite") {
			enabled = !enabled;
			$gamePlayer.refresh();
		} else if(command.trim().toLowerCase() === "setindependentcharsprite") {
			playerCharName = String(args[0]);
			playerCharIndex = Number(args[1]);
			$gamePlayer.refresh();
		}
	};

})();