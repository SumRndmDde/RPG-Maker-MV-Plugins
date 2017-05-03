/*:
 * @plugindesc This Plugin removes the faded out "continue" choice from
 * the choices at the title screen.
 *
 * @author SumRndmDde
 *
 * @help
 *
 * Remove Faded Continue
 * Version 1.00
 * SumRndmDde
 *
 *
 * Important Notes:
 * This plugin does not have any plugin commands.
 * Window_TitleCommand.prototype.makeCommandList is overwritten.
 *
 *
 * How to Use:
 *
 * This Plugin removes the faded out "continue" choice from
 * the choices at the title screen.
 *
 * It will only appear only if the player has a saved game.
 *
 * Thanks for reading!
 * If you have questions, please do not hesitate to ask on my YouTube channel:
 * https://www.youtube.com/SumRndmDde
 *
 * Until next time,
 *   ~ SumRndmDde
 */

(function() {

	Window_TitleCommand.prototype.makeCommandList = function() {
    	this.addCommand(TextManager.newGame,   'newGame');
    	if(this.isContinueEnabled())
    	{
    		this.addCommand(TextManager.continue_, 'continue', this.isContinueEnabled());
    	}
    	this.addCommand(TextManager.options,   'options');
	};

}