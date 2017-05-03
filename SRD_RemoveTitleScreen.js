/*:
 * @plugindesc This Plugin removes the title screen from the game.
 *
 * @author SumRndmDde
 *
 * @help
 *
 * Remove Title Screen
 * Version 1.00
 * SumRndmDde
 *
 *
 * Important Notes:
 * This plugin does not have any plugin commands.
 * Scene_Boot.prototype.start is overwritten.
 * Scene_GameEnd.prototype.commandToTitle is overwritten.
 *
 *
 * How to Use:
 *
 * This Plugin removes the Title Screen and simply starts a New Game
 * whenever the Player attempts to go to it.
 *
 * Thanks for reading!
 * If you have questions, please do not hesitate to ask on my YouTube channel:
 * https://www.youtube.com/SumRndmDde
 *
 * Until next time,
 *   ~ SumRndmDde
 */

(function() {

	Scene_Boot.prototype.start = function() {
	    Scene_Base.prototype.start.call(this);
	    SoundManager.preloadImportantSounds();
	    if (DataManager.isBattleTest()) {
	        DataManager.setupBattleTest();
	        SceneManager.goto(Scene_Battle);
	    } else if (DataManager.isEventTest()) {
	        DataManager.setupEventTest();
	        SceneManager.goto(Scene_Map);
	    } else {
	        this.checkPlayerLocation();
	        DataManager.setupNewGame();
	        SceneManager.goto(Scene_Map);
	        Window_TitleCommand.initCommandPosition();
	    }
	    this.updateDocumentTitle();
	};

	Scene_GameEnd.prototype.commandToTitle = function() {
	    this.fadeOutAll();
	    DataManager.setupNewGame();
	    SceneManager.goto(Scene_Map);
	};

})();