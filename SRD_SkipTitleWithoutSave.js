/*:
 * @plugindesc This Plugin skips the title screen if there is no save file present.
 *
 * @author SumRndmDde
 *
 * @help
 *
 * Skip Title Screen Without Save
 * Version 1.00
 * SumRndmDde
 *
 *
 * Important Notes:
 * This plugin does not have any plugin commands.
 * Scene_Boot.prototype.start is overwritten.
 *
 *
 * How to Use:
 *
 * This Plugin skips the title screen if there is no save file present
 * in the game.
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
	        if(DataManager.isAnySavefileExists())
	        {
	        	SceneManager.goto(Scene_Title);
	        }
	        else
	        {
	        	SceneManager.goto(Scene_Map);
	        }
	        Window_TitleCommand.initCommandPosition();
	    }
	    this.updateDocumentTitle();
	};

})();