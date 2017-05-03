/*:
 * @plugindesc An epic plugin for debugging! Sort of a work in progress, feel free to request anything. (Version 1.00)
 * @author SumRndmDde
 *
 * @param Playtesting Only?
 * @desc Set this to 'true', and this Plugin will lock itself unless you are playtesting within the RPG Maker program.
 * @default true
 *
 * @param Toggle Key
 * @desc Input the keyboard button you wish to use to toggle the debug display. Only letters allowed (A-Z).
 * @default K
 *
 * @param Opacity
 * @desc Set this to the opacity to you wish the debug text to use. The value can range from 0 to 255.
 * @default 255
 *
 * @param == Display Values ==
 * @default
 *
 * @param Display Variables
 * @desc Input the Game Variables you wish to see displayed. 
 * Leave blank to disallow. Example: 1, 4, 8
 * @default
 *
 * @param Display Switches
 * @desc Input the Game Switches you wish to see displayed. 
 * Leave blank to disallow. Example: 2, 3, 7
 * @default
 *
 * @param Player Coordinates
 * @desc Shows the x and y of the player based on the Map's grid.
 * @default true
 *
 * @param Player Pixel Coords
 * @desc Shows the x and y of the player based on the pixels and stuff.
 * @default true
 *
 * @param Current Map ID
 * @desc Shows the ID of the current Map.
 * @default true
 *
 * @param Party Size
 * @desc Shows how many members of the party there are.
 * @default false
 *
 * @param Current Gold
 * @desc Shows the party's current gold.
 * @default false
 *
 * @param Current Steps
 * @desc Shows the total amount of steps taken.
 * @default true
 *
 * @param Current Vehicle
 * @desc Shows the ID of the current Vehicle the player is riding in.
 * @default false
 * 
 * @param Show 4 Dir Input
 * @desc Shows the number value of the movement input restricted to 4 directions.
 * @default true
 *
 * @param Show 8 Dir Input
 * @desc Shows the number value of the movement input for all 8 directions.
 * @default false
 *
 * @param Show Dashing?
 * @desc Shows whether or not the player is dashing.
 * @default true
 *
 * @param Show Playtime?
 * @desc Shows the current playtime.
 * @default true
 *
 * @param Show Timer Seconds?
 * @desc Shows the remaining amount of timer seconds.
 * @default false
 * 
 * @param Show Locale?
 * @desc Shows the game's locale
 * @default false
 * 
 * @param Show Save Enabled?
 * @desc Shows whether if the player can save.
 * @default false
 * 
 * @param Show Menu Enabled?
 * @desc Shows whether if the player can open the menu.
 * @default false
 * 
 * @param Show SV Battle?
 * @desc Shows whether if side-view battle is active.
 * @default false
 * 
 * @param Show Encounters?
 * @desc Shows whether if ancounters are active.
 * @default false
 * 
 * @param Show Battle Count?
 * @desc Shows the amount of battles.
 * @default false
 * 
 * @param Show Win Count?
 * @desc Shows the amount of wins.
 * @default false
 * 
 * @param Show Escape Count?
 * @desc Shows the amount of escapes.
 * @default false
 * 
 * @param Show Save Count?
 * @desc Shows the amount of saves.
 * @default false
 * 
 * @param Show Version ID?
 * @desc Shows the version ID.
 * @default false
 * 
 * @param Show Battle BGM?
 * @desc Shows the current Battle BGM
 * @default false
 *
 * @param Actor Names (IDs)
 * @desc Input the Actor IDs of the Actor names you wish to see.
 * Leave blank to disallow. Example: 1, 3, 5
 * @default
 *
 * @param Actor Names (Party)
 * @desc Input the party spot of the Actor names you wish to see.
 * Leave blank to disallow. Example: 0, 1, 2
 * @default
 *
 *
 * @param = Custom Displays =
 * @default
 *
 * @param Custom 1 Prefix
 * @desc Set the prefix for Custom Display 1. This is the label for the value; leave it blank to disallow. Example: Gold
 * @default Actor 1 ATK:
 *
 * @param Custom 1 Value
 * @desc Input the value displayed for Custom Display 1. This is a JavaScript eval. Example: $gameParty.gold()
 * @default $gameActors.actor(1).atk
 *
 * @param Custom 2 Prefix
 * @desc Set the prefix for Custom Display 2. This is the label for the value; leave it blank to disallow. Example: Gold
 * @default
 *
 * @param Custom 2 Value
 * @desc Input the value displayed for Custom Display 2. This is a JavaScript eval. Example: $gameParty.gold()
 * @default
 *
 * @param Custom 3 Prefix
 * @desc Set the prefix for Custom Display 3. This is the label for the value; leave it blank to disallow. Example: Gold
 * @default
 *
 * @param Custom 3 Value
 * @desc Input the value displayed for Custom Display 3. This is a JavaScript eval. Example: $gameParty.gold()
 * @default
 *
 * @param Custom 4 Prefix
 * @desc Set the prefix for Custom Display 4. This is the label for the value; leave it blank to disallow. Example: Gold
 * @default
 *
 * @param Custom 4 Value
 * @desc Input the value displayed for Custom Display 4. This is a JavaScript eval. Example: $gameParty.gold()
 * @default
 *
 * @param Custom 5 Prefix
 * @desc Set the prefix for Custom Display 5. This is the label for the value; leave it blank to disallow. Example: Gold
 * @default
 *
 * @param Custom 5 Value
 * @desc Input the value displayed for Custom Display 5. This is a JavaScript eval. Example: $gameParty.gold()
 * @default
 *
 * @param Custom 6 Prefix
 * @desc Set the prefix for Custom Display 6. This is the label for the value; leave it blank to disallow. Example: Gold
 * @default
 *
 * @param Custom 6 Value
 * @desc Input the value displayed for Custom Display 6. This is a JavaScript eval. Example: $gameParty.gold()
 * @default
 *
 * @param Custom 7 Prefix
 * @desc Set the prefix for Custom Display 7. This is the label for the value; leave it blank to disallow. Example: Gold
 * @default
 *
 * @param Custom 7 Value
 * @desc Input the value displayed for Custom Display 7. This is a JavaScript eval. Example: $gameParty.gold()
 * @default
 *
 * @param Custom 8 Prefix
 * @desc Set the prefix for Custom Display 8. This is the label for the value; leave it blank to disallow. Example: Gold
 * @default
 *
 * @param Custom 8 Value
 * @desc Input the value displayed for Custom Display 8. This is a JavaScript eval. Example: $gameParty.gold()
 * @default
 *
 * @param Custom 9 Prefix
 * @desc Set the prefix for Custom Display 9. This is the label for the value; leave it blank to disallow. Example: Gold
 * @default
 *
 * @param Custom 9 Value
 * @desc Input the value displayed for Custom Display 9. This is a JavaScript eval. Example: $gameParty.gold()
 * @default
 *
 * @param Custom 10 Prefix
 * @desc Set the prefix for Custom Display 10. This is the label for the value; leave it blank to disallow. Example: Gold
 * @default
 *
 * @param Custom 10 Value
 * @desc Input the value displayed for Custom Display 10. This is a JavaScript eval. Example: $gameParty.gold()
 * @default
 *
 * @param = Display Position =
 * @default
 *
 * @param X Position
 * @desc The x-position of the text (based on top left of text).
 * @default 10
 *
 * @param Y Position
 * @desc The y-position of the text (based on top left of text).
 * @default 10
 *
 * @param Max Width
 * @desc The maximum width of the text. Is an JavaScript eval. Initial default: Graphics.width
 * @default Graphics.width
 *
 * @param Line Height
 * @desc The line height of the text. Make this smaller along with the text size to add more rows.
 * @default 30
 *
 * @param Line Seperation
 * @desc The seperation space between each line.
 * @default 2
 *
 * @param Text Alignment
 * @desc Determines the alignment of the text.
 * Your choices are left, right, or center.
 * @default left
 *
 * @param == Display Style ==
 * @default
 *
 * @param Fonts
 * @desc Input the font(s) you wish the text to use.
 * @default Times New Roman, Gamefont
 *
 * @param Size
 * @desc Input the size you wish the text to use.
 * @default 32
 *
 * @param Text Color
 * @desc Input the color you wish the text to use.
 * @default White
 *
 * @param Outline Color
 * @desc Input the color of the outline you wish the text to use.
 * @default Black
 *
 * @param Outline Size
 * @desc Input the size of the outline you wish the text to use.
 * @default 4
 *
 * @help
 *
 * SumRndmDde's Debug Display
 * Version 1.00
 * SumRndmDde
 *
 * Random Things to Note:
 * - There are no Plugin Commands
 * - There are no Notetags
 * - You can toggle the Debug Display using a predefined key
 * - You can display custom JavaScript code
 *
 * 
 * ==========================================================================
 *  Significant Parameters
 * ==========================================================================
 *
 *  = Playtesting Only? =
 * Set this to 'true', and this Plugin will lock itself unless you are 
 *  playtesting within the RPG Maker program.
 * Default is true
 *
 *  = Toggle Key =
 * Input the keyboard button you wish to use to toggle the debug display.
 *   Only letters allowed (A-Z).
 * Default is K (for no particular reason what so ever)
 *
 *  = Opacity =
 * Set this to the opacity to you wish the debug text to use. 
 *  The value can range from 0 to 255.
 * Default is 255
 *
 *  = Display Variables =
 * Input the Game Variables you wish to see displayed. 
 *  Leave blank to disallow. 
 * Example: 1, 4, 8
 *
 *  = Display Switches =
 * Input the Game Switches you wish to see displayed. 
 *  Leave blank to disallow. 
 * Example: 2, 3, 7
 *
 *  = Custom ## Prefix =
 * Set the prefix for Custom Display 1. This is the label for the value; 
 *  leave it blank to disallow. 
 * Example: Gold:
 *
 *  = Custom ## Value =
 * Input the value displayed for Custom Display 1. This is a JavaScript eval. 
 * Example: $gameParty.gold()
 *
 *
 * 
 * The rest of this Plugin should be pretty self explanatory.
 *
 * Just toggle the Display Parameters to 'true' or 'false' depending on
 * whether you wish for them to be shown or not.
 *
 * Also use the bottom Parameters to cusomize the looks of the Display
 * if it covers anything up or is unsightly.
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

	//Lots o' Parameters :(
	var playtestOnly = String(PluginManager.parameters('SRD_Debug')['Playtesting Only?']).trim().toLowerCase() === 'true';
	var toggleKey = String(PluginManager.parameters('SRD_Debug')['Toggle Key']).trim().toLowerCase();
	var opacity = Number(PluginManager.parameters('SRD_Debug')['Opacity']);

	var variables = String(PluginManager.parameters('SRD_Debug')['Display Variables']);
 	if(variables.trim().length !== 0) variables = variables.split(/\s*,\s*/i);
 	var switches = String(PluginManager.parameters('SRD_Debug')['Display Switches']);
 	if(switches.trim().length !== 0) switches = switches.split(/\s*,\s*/i);

	var coords = String(PluginManager.parameters('SRD_Debug')['Player Coordinates']).trim().toLowerCase() === 'true';
 	var pixelCoords = String(PluginManager.parameters('SRD_Debug')['Player Pixel Coords']).trim().toLowerCase() === 'true';
 	var currentMapId = String(PluginManager.parameters('SRD_Debug')['Current Map ID']).trim().toLowerCase() === 'true';
 	var currentVehicle = String(PluginManager.parameters('SRD_Debug')['Current Vehicle']).trim().toLowerCase() === 'true';
 	var dashing = String(PluginManager.parameters('SRD_Debug')['Show Dashing?']).trim().toLowerCase() === 'true';
 	var show4Dir = String(PluginManager.parameters('SRD_Debug')['Show 4 Dir Input']).trim().toLowerCase() === 'true';
 	var show8Dir = String(PluginManager.parameters('SRD_Debug')['Show 8 Dir Input']).trim().toLowerCase() === 'true';
 	var partySize = String(PluginManager.parameters('SRD_Debug')['Party Size']).trim().toLowerCase() === 'true';
 	var gold = String(PluginManager.parameters('SRD_Debug')['Current Gold']).trim().toLowerCase() === 'true';
 	var steps = String(PluginManager.parameters('SRD_Debug')['Current Steps']).trim().toLowerCase() === 'true';
 	var playtime = String(PluginManager.parameters('SRD_Debug')['Show Playtime?']).trim().toLowerCase() === 'true';
 	var seconds = String(PluginManager.parameters('SRD_Debug')['Show Seconds?']).trim().toLowerCase() === 'true';

 	var locale = String(PluginManager.parameters('SRD_Debug')['Show Locale?']).trim().toLowerCase() === 'true';
 	var saveEnabled = String(PluginManager.parameters('SRD_Debug')['Show Save Enabled?']).trim().toLowerCase() === 'true';
 	var menuEnabled = String(PluginManager.parameters('SRD_Debug')['Show Menu Enabled?']).trim().toLowerCase() === 'true';
 	var svBattle = String(PluginManager.parameters('SRD_Debug')['Show SV Battle?']).trim().toLowerCase() === 'true';
 	var encounters = String(PluginManager.parameters('SRD_Debug')['Show Encounters?']).trim().toLowerCase() === 'true';
 	var battleCount = String(PluginManager.parameters('SRD_Debug')['Show Battle Count?']).trim().toLowerCase() === 'true';
 	var winCount = String(PluginManager.parameters('SRD_Debug')['Show Win Count?']).trim().toLowerCase() === 'true';
 	var escapeCount = String(PluginManager.parameters('SRD_Debug')['Show Escape Count?']).trim().toLowerCase() === 'true';
 	var saveCount = String(PluginManager.parameters('SRD_Debug')['Show Save Count?']).trim().toLowerCase() === 'true';
 	var versionId = String(PluginManager.parameters('SRD_Debug')['Show Version ID?']).trim().toLowerCase() === 'true';
 	var battleBgm = String(PluginManager.parameters('SRD_Debug')['Show Battle BGM?']).trim().toLowerCase() === 'true';

 	var actorIds = String(PluginManager.parameters('SRD_Debug')['Actor Names (IDs)']);
 	if(actorIds.trim().length !== 0) actorIds = actorIds.split(/\s*,\s*/i);
 	var actorSpots = String(PluginManager.parameters('SRD_Debug')['Actor Names (Party)']);
 	if(actorSpots.trim().length !== 0) actorSpots = actorSpots.split(/\s*,\s*/i);

 	var customCommandPrefixes = [];
 	var customCommandValues = [];
 	for(var i = 0; i < 10; i++) {
 		customCommandPrefixes[i] = String(PluginManager.parameters('SRD_Debug')['Custom '+(i+1)+' Prefix']);
 		customCommandValues[i] = String(PluginManager.parameters('SRD_Debug')['Custom '+(i+1)+' Value']);
 	}

 	var xPos = Number(PluginManager.parameters('SRD_Debug')['X Position']);
 	var yPos = Number(PluginManager.parameters('SRD_Debug')['Y Position']);
 	var maxWidth = String(PluginManager.parameters('SRD_Debug')['Max Width']);
 	var lineHeight = Number(PluginManager.parameters('SRD_Debug')['Line Height']);
 	var lineSeperation = Number(PluginManager.parameters('SRD_Debug')['Line Seperation']);
 	var alignment = String(PluginManager.parameters('SRD_Debug')['Text Alignment']);

	var fonts = String(PluginManager.parameters('SRD_Debug')['Fonts']);
	var size = Number(PluginManager.parameters('SRD_Debug')['Size']);
	var textColor = String(PluginManager.parameters('SRD_Debug')['Text Color']);
	var outlineColor = String(PluginManager.parameters('SRD_Debug')['Outline Color']);
	var outlineSize = Number(PluginManager.parameters('SRD_Debug')['Outline Size']);

	var showDebug = true;

	var keyCodes = [];
	var alphabet = 'abcdefghijklmnopqrstuvwxyz';
	for(var i = 0; i <= 25; i++) {
		keyCodes[i] = alphabet.substring(i,i+1);
	}

	var checkDebugKey = function(event) {
	    if (toggleKey === keyCodes[(event.keyCode - 65)]) {
	    	showDebug = !showDebug;
	    }
	};

	//Personal Keyboard Listener
	document.addEventListener('keydown', checkDebugKey.bind(this));

	var sumRndmDebugSprite;
		
	var _Scene_Map_start = Scene_Map.prototype.start;
	Scene_Map.prototype.start = function() {
		_Scene_Map_start.call(this);
		SumRndmInitializeText();
		this.addChild(sumRndmDebugSprite);
	};

	var _Scene_Map_update = Scene_Map.prototype.update;
	Scene_Map.prototype.update = function() {
		_Scene_Map_update.call(this);
		SumRndmUpdateText();	
	};

	var _Scene_Battle_start = Scene_Battle.prototype.start;
	Scene_Battle.prototype.start = function() {
	    _Scene_Battle_start.call(this);
	    SumRndmInitializeText();
		this.addChild(sumRndmDebugSprite);
	};

	var _Scene_Battle_update = Scene_Battle.prototype.update;
	Scene_Battle.prototype.update = function() {
	    _Scene_Battle_update.call(this);
	    SumRndmUpdateText();
	};

	var SumRndmInitializeText = function() {
		//How to draw text on screen!
		//Episode 1: Copy the following code
		sumRndmDebugSprite = new Sprite(new Bitmap(Graphics.width, Graphics.height));
		sumRndmDebugSprite.opacity = opacity;
		sumRndmDebugSprite.bitmap.fontFace = fonts;
		sumRndmDebugSprite.bitmap.fontSize = size;
		sumRndmDebugSprite.bitmap.textColor = textColor;
		sumRndmDebugSprite.bitmap.outlineColor = outlineColor;
		sumRndmDebugSprite.bitmap.outlineWidth = outlineSize;
	}

	var SumRndmUpdateText = function() {
		//How to update text on screen!
		//Episode 2: Copy the following code
		sumRndmDebugSprite.bitmap.clear();

		if(($gameTemp.isPlaytest() || !playtestOnly) && showDebug) {
			var x = xPos;
		    var y = yPos;
		    var yShift = 0;
		    var width = maxWidth;
		    var height = lineHeight;
		    var seperation = lineSeperation;
		    var align = alignment;

		    //Variables, Switches, and Actor names
		    for(var i = 0; i < variables.length; i++) {
		    	//How to make it actually appear
				//Episode 3: Copy the following code
		    	sumRndmDebugSprite.bitmap.drawText('Variable ' + variables[i] + ': ' + $gameVariables.value(Number(variables[i])), x, y + yShift, eval(width), height, align);
		    	yShift += (height + seperation);
		    }
		    for(var i = 0; i < switches.length; i++) {
		    	var switchValue = $gameSwitches.value(Number(switches[i])) ? 'ON' : 'OFF';
		    	sumRndmDebugSprite.bitmap.drawText('Switch ' + switches[i] + ': ' + switchValue, x, y + yShift, eval(width), height, align);
		    	yShift += (height + seperation);
		    }

		    //Player Information
 			if(coords) {
		    	sumRndmDebugSprite.bitmap.drawText('Player Coordinates: ' + $gamePlayer.x + ", " + $gamePlayer.y, x, y + yShift, eval(width), height, align);
		    	yShift += (height + seperation);
		    }
		    if(pixelCoords) {
		    	sumRndmDebugSprite.bitmap.drawText('Player Pixel Coordinates: ' + $gamePlayer.screenX() + ", " + $gamePlayer.screenY(), x, y + yShift, eval(width), height, align);
		    	yShift += (height + seperation);
		    }
		    if(currentMapId) {
		    	sumRndmDebugSprite.bitmap.drawText('Map ID: ' + $gameMap.mapId(), x, y + yShift, eval(width), height, align);
		    	yShift += (height + seperation);
		    }
		    if(partySize) {
		    	sumRndmDebugSprite.bitmap.drawText('Party Size: ' + $gameParty.size(), x, y + yShift, eval(width), height, align);
		    	yShift += (height + seperation);
		    }
		    if(gold) {
		    	sumRndmDebugSprite.bitmap.drawText('Gold: ' + $gameParty.gold(), x, y + yShift, eval(width), height, align);
		    	yShift += (height + seperation);
		    }
		    if(steps) {
		    	sumRndmDebugSprite.bitmap.drawText('Steps: ' +  $gameParty.steps(), x, y + yShift, eval(width), height, align);
		    	yShift += (height + seperation);
		    }
		    if(currentVehicle) {
		    	sumRndmDebugSprite.bitmap.drawText('Vehicle: ' + $gamePlayer.vehicle(), x, y + yShift, eval(width), height, align);
		    	yShift += (height + seperation);
		    }
		    if(show4Dir) {
		    	sumRndmDebugSprite.bitmap.drawText('4 Direction Input: ' + Input.dir4, x, y + yShift, eval(width), height, align);
		    	yShift += (height + seperation);
		    }
		    if(show8Dir) {
		    	sumRndmDebugSprite.bitmap.drawText('8 Direction Input: ' + Input.dir8, x, y + yShift, eval(width), height, align);
		    	yShift += (height + seperation);
		    }
		    if(dashing) {
		    	sumRndmDebugSprite.bitmap.drawText('Dashing: ' + $gamePlayer.isDashing(), x, y + yShift, eval(width), height, align);
		    	yShift += (height + seperation);
		    }

		    //Misc Game System stuff
		    if(playtime) {
		    	sumRndmDebugSprite.bitmap.drawText('Playtime: ' + $gameSystem.playtime(), x, y + yShift, eval(width), height, align);
		    	yShift += (height + seperation);
		    }
		    if(seconds) {
		    	sumRndmDebugSprite.bitmap.drawText('Seconds: ' + $gameTimer.seconds(), x, y + yShift, eval(width), height, align);
		    	yShift += (height + seperation);
		    }
 			if(locale) {
		    	sumRndmDebugSprite.bitmap.drawText('Locale: ' + $dataSystem.locale, x, y + yShift, eval(width), height, align);
		    	yShift += (height + seperation);
		    }
		    if(saveEnabled) {
		    	sumRndmDebugSprite.bitmap.drawText('Is Save Enabled: ' + $gameSystem.isSaveEnabled(), x, y + yShift, eval(width), height, align);
		    	yShift += (height + seperation);
		    }
		    if(menuEnabled) {
		    	sumRndmDebugSprite.bitmap.drawText('Is Menu Enabled: ' + $gameSystem.isMenuEnabled(), x, y + yShift, eval(width), height, align);
		    	yShift += (height + seperation);
		    }
		    if(svBattle) {
		    	sumRndmDebugSprite.bitmap.drawText('Is Side View Battle: ' + $gameSystem.isSideView(), x, y + yShift, eval(width), height, align);
		    	yShift += (height + seperation);
		    }
		    if(encounters) {
		    	sumRndmDebugSprite.bitmap.drawText('Are Encounters Enabled: ' + $gameSystem.isEncounterEnabled(), x, y + yShift, eval(width), height, align);
		    	yShift += (height + seperation);
		    }
		    if(battleCount) {
		    	sumRndmDebugSprite.bitmap.drawText('Battle Count: ' + $gameSystem.battleCount(), x, y + yShift, eval(width), height, align);
		    	yShift += (height + seperation);
		    }
		    if(winCount) {
		    	sumRndmDebugSprite.bitmap.drawText('Win Count: ' + $gameSystem.winCount(), x, y + yShift, eval(width), height, align);
		    	yShift += (height + seperation);
		    }
		    if(escapeCount) {
		    	sumRndmDebugSprite.bitmap.drawText('Escape Count: ' + $gameSystem.escapeCount(), x, y + yShift, eval(width), height, align);
		    	yShift += (height + seperation);
		    }
		    if(saveCount) {
		    	sumRndmDebugSprite.bitmap.drawText('Save Count: ' + $gameSystem.saveCount(), x, y + yShift, eval(width), height, align);
		    	yShift += (height + seperation);
		    }
		    if(versionId) {
		    	sumRndmDebugSprite.bitmap.drawText('Version ID: ' + $gameSystem.versionId(), x, y + yShift, eval(width), height, align);
		    	yShift += (height + seperation);
		    }
		    if(battleBgm) {
		    	sumRndmDebugSprite.bitmap.drawText('Battle BGM: ' + $gameSystem.battleBgm(), x, y + yShift, eval(width), height, align);
		    	yShift += (height + seperation);
		    }

		    //Actor stuffs (just names though)
		    for(var i = 0; i < actorIds.length; i++) {
		    	sumRndmDebugSprite.bitmap.drawText('Actor ID ' + actorIds[i] + ' Name: ' + $dataActors[actorIds[i]].name, x, y + yShift, eval(width), height, align);
		    	yShift += (height + seperation);
		    }
		    for(var i = 0; i < actorSpots.length; i++) {
		    	sumRndmDebugSprite.bitmap.drawText('Party Position ' + actorSpots[i] + ' Actor Name: ' + $gameParty.members()[actorSpots[i]].name(), x, y + yShift, eval(width), height, align);
		    	yShift += (height + seperation);
		    }

		    //One more!
		    //Custom prefixes!
		    for(var i = 0; i < customCommandPrefixes.length; i++) {
		    	if(customCommandPrefixes[i].trim().length > 0) {
		    		sumRndmDebugSprite.bitmap.drawText('' + customCommandPrefixes[i] + " " + eval(customCommandValues[i]), x, y + yShift, eval(width), height, align);
		    		yShift += (height + seperation);
		    	}
		    }
		}
	};
})();