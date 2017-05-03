/*:
 * 
 * @plugindesc Allows you to speed up your game during testing!
 * @author SumRndmDde
 *
 * @param Playtesting Only?
 * @desc Set this to 'true', and this Plugin will lock itself unless you are playtesting within the RPG Maker program.
 * @default true
 *
 * @param Speed Toggle Key
 * @desc Set this to the keyboard button you wish to use to switch between each speed. Input letters only (A-Z).
 * @default L
 *
 * @param Fade Indicator?
 * @desc Set this to 'true', and the speed indicator on the top-right of the screen will fade after a toggle.
 * @default false
 *
 * @param == Speed Keys ==
 * @default
 *
 * @param x1 Speed Key
 * @desc Set this to the keyboard button you wish to use to set the speed to x1. Leave blank to disallow.
 * @default U
 *
 * @param x1.25 Speed Key
 * @desc Set this to the keyboard button you wish to use to set the speed to x1.25. Leave blank to disallow.
 * @default
 *
 * @param x1.5 Speed Key
 * @desc Set this to the keyboard button you wish to use to set the speed to x1.5. Leave blank to disallow.
 * @default I
 *
 * @param x2 Speed Key
 * @desc Set this to the keyboard button you wish to use to set the speed to x2. Leave blank to disallow.
 * @default O
 *
 * @param x3 Speed Key
 * @desc Set this to the keyboard button you wish to use to set the speed to x3. Leave blank to disallow.
 * @default
 *
 * @param x5 Speed Key
 * @desc Set this to the keyboard button you wish to use to set the speed to x5. Leave blank to disallow.
 * @default P
 *
 * @param x10 Speed Key
 * @desc Set this to the keyboard button you wish to use to set the speed to x10. Leave blank to disallow.
 * @default
 *
 * @help
 *
 * Debug Speed Up!
 * Version 1.00
 * SumRndmDde
 *
 *
 * For the most part, this Plugin is very simple:
 *
 * Step 1:
 * Set up the "Speed Toggle Key" Parameter to be whichever keyboard letter
 * you wish to use for changing the game's speed.
 *
 * Step 2:
 * Once the game has started, you can use this key in order to switch
 * between each speed.
 * The cycle is: x1, x1.25, x1.5, x2, x3, x5, x10
 *
 *
 * Random Info:
 *  - The game will start out on x1 speed.
 *  - A text indicator in the top-right of the screen will tell you 
 *    your speed.
 *  - If you don't want it to disappear, set "Fade Indicator?" to false.
 *  - This Plugin will automatically disable itself if "Playtesting Only?"
 *    is set to true and the user is playing an exported version of the
 *    game.
 *
 * 
 * You can use the last 7 Parameters to assign specific keys to each
 * speed independently.
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

	var playtestOnly = String(PluginManager.parameters('SRD_Debug_SpeedUp')['Playtesting Only?']).trim().toLowerCase() === 'true';
	var toggleKey = String(PluginManager.parameters('SRD_Debug_SpeedUp')['Speed Toggle Key']).trim().toLowerCase();
	var fadeIndicator = String(PluginManager.parameters('SRD_Debug_SpeedUp')['Fade Indicator?']).trim().toLowerCase() === 'true';
	var speed1Key = String(PluginManager.parameters('SRD_Debug_SpeedUp')['x1 Speed Key']).trim().toLowerCase();
	var speed125Key = String(PluginManager.parameters('SRD_Debug_SpeedUp')['x1.25 Speed Key']).trim().toLowerCase();
	var speed15Key = String(PluginManager.parameters('SRD_Debug_SpeedUp')['x1.5 Speed Key']).trim().toLowerCase();
	var speed2Key = String(PluginManager.parameters('SRD_Debug_SpeedUp')['x2 Speed Key']).trim().toLowerCase();
	var speed3Key = String(PluginManager.parameters('SRD_Debug_SpeedUp')['x3 Speed Key']).trim().toLowerCase();
	var speed5Key = String(PluginManager.parameters('SRD_Debug_SpeedUp')['x5 Speed Key']).trim().toLowerCase();
	var speed10Key = String(PluginManager.parameters('SRD_Debug_SpeedUp')['x10 Speed Key']).trim().toLowerCase();

	var speeds = [1, 1.25, 1.5, 2, 3, 5, 10];
	var offset = 0;
	var currentSpeed = speeds[offset];
	var currentRate = currentSpeed;

	var keyCodes = [];
	var alphabet = 'abcdefghijklmnopqrstuvwxyz';
	for(var i = 0; i <= 25; i++) {
		keyCodes[i] = alphabet.substring(i,i+1);
	}

	var checkSpeedKey = function(event) {
		if($gameTemp && ($gameTemp.isPlaytest() || !playtestOnly)) {
			if(toggleKey === keyCodes[(event.keyCode - 65)]) {
				offset += 1;
			    if(offset >= speeds.length) {
			    	offset = 0;
			    }
			    SceneManager.refreshSpeedUp();
			} else if(speed1Key === keyCodes[(event.keyCode - 65)]) {
				offset = 0;
				SceneManager.refreshSpeedUp();
			} else if(speed125Key === keyCodes[(event.keyCode - 65)]) {
				offset = 1;
				SceneManager.refreshSpeedUp();
			} else if(speed15Key === keyCodes[(event.keyCode - 65)]) {
				offset = 2;
				SceneManager.refreshSpeedUp();
			} else if(speed2Key === keyCodes[(event.keyCode - 65)]) {
				offset = 3;
				SceneManager.refreshSpeedUp();
			} else if(speed3Key === keyCodes[(event.keyCode - 65)]) {
				offset = 4;
				SceneManager.refreshSpeedUp();
			} else if(speed5Key === keyCodes[(event.keyCode - 65)]) {
				offset = 5;
				SceneManager.refreshSpeedUp();
			} else if(speed10Key === keyCodes[(event.keyCode - 65)]) {
				offset = 6;
				SceneManager.refreshSpeedUp();
			}
		}
	};

	//Personal Keyboard Listener
	document.addEventListener('keydown', checkSpeedKey.bind(this));

	var _SceneManager_updateScene = SceneManager.updateScene;
	SceneManager.updateScene = function() {
		_SceneManager_updateScene.call(this);
		if($gameTemp && ($gameTemp.isPlaytest() || !playtestOnly)) {
			this.handleWeirdSpeeds();
		}
	};

	SceneManager.handleWeirdSpeeds = function() {
		if(currentSpeed === 1.25) {
			currentRate += 0.25;
			if(currentRate > 2) currentRate = 1.25;
		} else if(currentSpeed === 1.5) {
			currentRate += 0.5;
			if(currentRate > 2) currentRate = 1.5;
		}
	};

	SceneManager.refreshSpeedUp = function() {
		currentSpeed = speeds[offset];
	    currentRate = currentSpeed;

		sumRndmSpeedUpSprite.bitmap.clear();
		sumRndmSpeedUpSprite.opacity = 255;
		sumRndmSpeedUpSprite.bitmap.drawText("x" + String(speeds[offset]), Graphics.width - 110, 10, 100, 30, 'right');
	}

	var sumRndmSpeedUpSprite;

	var _Scene_Base_start = Scene_Base.prototype.start;
	Scene_Base.prototype.start = function() {
	    _Scene_Base_start.call(this);

	    if($gameTemp && ($gameTemp.isPlaytest() || !playtestOnly)) {
		    sumRndmSpeedUpSprite = new Sprite(new Bitmap(Graphics.width, Graphics.height));
		    sumRndmSpeedUpSprite.opacity = 255;
		    this.addChild(sumRndmSpeedUpSprite);
		}
	};

	var _Scene_Base_update = Scene_Base.prototype.update;
	Scene_Base.prototype.update = function() {
	    _Scene_Base_update.call(this);

	    if($gameTemp && ($gameTemp.isPlaytest() || !playtestOnly) && fadeIndicator && sumRndmSpeedUpSprite.opacity > 0) {
	    	sumRndmSpeedUpSprite.opacity -= 1;
	    }
	};

	var _Scene_Map_update = Scene_Map.prototype.update;
	Scene_Map.prototype.update = function() {
		for(var i = 0; i < Math.floor(currentRate); i++) {
	    	_Scene_Map_update.call(this)
	    }
	};

	var _Spriteset_Base_update = Spriteset_Base.prototype.update;
	Spriteset_Base.prototype.update = function() {
		for(var i = 0; i < Math.floor(currentRate); i++) {
			_Spriteset_Base_update.call(this);
		}
	};

})();