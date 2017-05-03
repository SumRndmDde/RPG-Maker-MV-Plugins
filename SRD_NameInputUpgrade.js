/*:
 * @plugindesc Improves upon the "Name Input" screen for your RPG Maker MV game.
 * @author SumRndmDde
 *
 * @param Keyboard Mode?
 * @desc 'true'   - Use keyboard to input characters
 * 'false'  - Use on-screen keyboard to input characters
 * @default true
 *
 * @param Display Message
 * @desc The message displayed on the first line of the help window when using Keyboard Mode.
 * @default Input a name.
 *
 * @param Display Message 2
 * @desc The message displayed on the second line of the help window when using Keyboard Mode.
 * @default Press ENTER when ready.
 *
 * @param Help Window Width
 * @desc The width of the help window. Can be a JavaScript eval. This window is only shown in Keyboard Mode.
 * @default 400
 *
 * @param Help Window Height
 * @desc The width of the help window. Can be a JavaScript eval. This window is only shown in Keyboard Mode.
 * @default this.fittingHeight(2)
 *
 * @param == Display Options ==
 * @default
 *
 * @param Show Face
 * @desc 'true'   - Shows Actor face on Name Input display
 * 'false'  - Removes Actor face on Name Input display
 * @default true
 *
 * @param Background Image
 * @desc Name of the background image. Place in /img/pictures. 
 * Do not include file extension. Leave blank for default.
 * @default
 *
 * @param Scale Background?
 * @desc 'true'   - Stretches background to window size
 * 'false'  - Keeps background at original size
 * @default true
 *
 * @param Name Opacity
 * @desc The opacity of the window with the name of the Actor. Input a value from 0 (invisible) to 255 (solid).
 * @default 255
 *
 * @param Keyboard Opacity
 * @desc The opacity of the window with the keyboard characters. Input a value from 0 (invisible) to 255 (solid).
 * @default 255
 *
 * @param Help Opacity
 * @desc The opacity of the window that has the help text in it. Input a value from 0 (invisible) to 255 (solid).
 * @default 255
 *
 * @param Underline Color
 * @desc Input the window.png color code you wish to use.
 * Example: 0 = white, 1 = blue, 2 = red, etc.
 * @default 0
 *
 * @param Text Color
 * @desc Input the window.png color code you wish to use.
 * Example: 0 = white, 1 = blue, 2 = red, etc.
 * @default 0
 *
 * @param Name Display X
 * @desc The x offset added to the window that has the name displayed. Can be a JavaScript eval. Only for keyboard input version.
 * @default 0
 *
 * @param Name Display Y
 * @desc The x offset added to the window that has the name displayed. Can be a JavaScript eval. Only for keyboard input version.
 * @default 100
 *
 * @param Help Window X
 * @desc The x offset added to the window that explains the keyboard input. Can be a JavaScript eval. Only for keyboard input version.
 * @default 0
 *
 * @param Help Window Y
 * @desc The x offset added to the window that explains the keyboard input. Can be a JavaScript eval. Only for keyboard input version.
 * @default 40
 *
 * @param = Custom Characters = 
 * @default
 *
 * @param LATIN 1 Row 1
 * @desc A list of characters for row 1 of LATIN 1 keyboard.
 * @default A,B,C,D,E,a,b,c,d,e
 *
 * @param LATIN 1 Row 2
 * @desc A list of characters for row 1 of LATIN 1 keyboard.
 * @default F,G,H,I,J,f,g,h,i,j
 *
 * @param LATIN 1 Row 3
 * @desc A list of characters for row 1 of LATIN 1 keyboard.
 * @default K,L,M,N,O,k,l,m,n,o
 *
 * @param LATIN 1 Row 4
 * @desc A list of characters for row 4 of LATIN 1 keyboard.
 * @default P,Q,R,S,T,p,q,r,s,t
 *
 * @param LATIN 1 Row 5
 * @desc A list of characters for row 5 of LATIN 1 keyboard.
 * @default U,V,W,X,Y,u,v,w,x,y
 *
 * @param LATIN 1 Row 6
 * @desc A list of characters for row 6 of LATIN 1 keyboard.
 * @default Z,[,],^,_,z,{,},|,~
 *
 * @param LATIN 1 Row 7
 * @desc A list of characters for row 7 of LATIN 1 keyboard.
 * @default 0,1,2,3,4,!,#,$,%,&
 *
 * @param LATIN 1 Row 8
 * @desc A list of characters for row 8 of LATIN 1 keyboard.
 * @default 5,6,7,8,9,(,),*,+,-
 *
 * @param LATIN 1 Row 9
 * @desc A list of characters for row 9 of LATIN 1 keyboard.
 * @default /,=,?,<,>,:,;, ,Page,OK
 *
 * @param LATIN 2 Row 1
 * @desc A list of characters for row 1 of LATIN 2 keyboard.
 * @default Á,É,Í,Ó,Ú,á,é,í,ó,ú
 *
 * @param LATIN 2 Row 2
 * @desc A list of characters for row 1 of LATIN 2 keyboard.
 * @default À,È,Ì,Ò,Ù,à,è,ì,ò,ù
 *
 * @param LATIN 2 Row 3
 * @desc A list of characters for row 1 of LATIN 2 keyboard.
 * @default Â,Ê,Î,Ô,Û,â,ê,î,ô,û
 *
 * @param LATIN 2 Row 4
 * @desc A list of characters for row 4 of LATIN 2 keyboard.
 * @default Ä,Ë,Ï,Ö,Ü,ä,ë,ï,ö,ü
 *
 * @param LATIN 2 Row 5
 * @desc A list of characters for row 5 of LATIN 2 keyboard.
 * @default Ā,Ē,Ī,Ō,Ū,ā,ē,ī,ō,ū
 *
 * @param LATIN 2 Row 6
 * @desc A list of characters for row 6 of LATIN 2 keyboard.
 * @default Ã,Å,Æ,Ç,Ð,ã,å,æ,ç,ð
 *
 * @param LATIN 2 Row 7
 * @desc A list of characters for row 7 of LATIN 2 keyboard.
 * @default Ñ,Õ,Ø,Š,Ŵ,ñ,õ,ø,š,ŵ
 *
 * @param LATIN 2 Row 8
 * @desc A list of characters for row 8 of LATIN 2 keyboard.
 * @default Ý,Ŷ,Ÿ,Ž,Þ,ý,ÿ,ŷ,ž,þ
 *
 * @param LATIN 2 Row 9
 * @desc A list of characters for row 9 of LATIN 2 keyboard.
 * @default Ĳ,Œ,ĳ,œ,ß,«,»,,Page,OK
 *
 * @help 
 *
 * Name Input Upgrade
 * Version 1.00
 * SumRndmDde
 *
 * 
 * That darn boring, old Name Input screen.
 * It's one of the first things your players see, but it looks so boring.
 *
 * Fortunately, this Plugin will change that.
 *
 * ==========================================================================
 * Parameters
 * ==========================================================================
 *
 * This Plugin is solely run with Parameters.
 * Most of them are self explanatory, but here are some extended explanations
 * for some of the more important or complex ones.
 *
 * = Keyboard Mode? =
 * This Parameter should either be set to 'true' or 'false'.
 * Setting this to 'false' gives you the default keyboard mode.
 * Setting this to 'true' makes the user use his or her keyboard to input
 *    the name of the Actor.
 *
 *
 * = Display Message =
 * = Display Message 2 = 
 * These are the messages shown in the help window in Keyboard Mode.
 * 
 *
 * = Show Face =
 * This Parameter should either be set to 'true' or 'false'.
 * Setting this to 'true' results in the default.
 * Setting this to 'false' removes the Actor's face from the Name Input.
 *
 *
 * = Background Image =
 * If you wish to use an image from your /img/pictures folder as a background
 *    image for your Name Input screen, input its file name here.
 * Do not input the file extension.
 *
 * 
 * = Scale Background? =
 * This Parameter should either be set to 'true' or 'false'.
 * Setting this to 'false' keeps the background at its default image size.
 * Setting this to 'true' stretches the background to fit the screen.
 * 
 *
 * = Custom Characters =
 * Set this to a list of characters seperated by commas for each row.
 * These will be the characters avaliable for the player to select when
 *    not using Keyboard Mode and relying on the on-screen keyboard.
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
SRD.NameInput = SRD.NameInput || {};

var Imported = Imported || {};
Imported["SumRndmDde Name Input Upgrade"] = true;

(function(_) {

	_.keyboardMode = String(PluginManager.parameters('SRD_NameInputUpgrade')['Keyboard Mode?']).trim().toLowerCase() === 'true';
	_.displayMessage = String(PluginManager.parameters('SRD_NameInputUpgrade')['Display Message']);
	_.displayMessage2 = String(PluginManager.parameters('SRD_NameInputUpgrade')['Display Message 2']);
	_.helpWindowWidth = String(PluginManager.parameters('SRD_NameInputUpgrade')['Help Window Width']);
	_.helpWindowHeight = String(PluginManager.parameters('SRD_NameInputUpgrade')['Help Window Height']);

	_.showFace = String(PluginManager.parameters('SRD_NameInputUpgrade')['Show Face']).trim().toLowerCase() === 'true';
	_.background = String(PluginManager.parameters('SRD_NameInputUpgrade')['Background Image']);
	_.scale = String(PluginManager.parameters('SRD_NameInputUpgrade')['Scale Background?']).trim().toLowerCase() === 'true';
	_.nameOpacity = Number(PluginManager.parameters('SRD_NameInputUpgrade')['Name Opacity']);
	_.keyboardOpacity = Number(PluginManager.parameters('SRD_NameInputUpgrade')['Keyboard Opacity']);
	_.helpOpacity = Number(PluginManager.parameters('SRD_NameInputUpgrade')['Help Opacity']);
	_.underlineColor = Number(PluginManager.parameters('SRD_NameInputUpgrade')['Underline Color']);
	_.textColor = Number(PluginManager.parameters('SRD_NameInputUpgrade')['Text Color']);

	_.nameX = Number(PluginManager.parameters('SRD_NameInputUpgrade')['Name Display X']);
	_.nameY = Number(PluginManager.parameters('SRD_NameInputUpgrade')['Name Display Y']);
	_.helpX = Number(PluginManager.parameters('SRD_NameInputUpgrade')['Help Window X']);
	_.helpY = Number(PluginManager.parameters('SRD_NameInputUpgrade')['Help Window Y']);

	_.numberz = "0123456789";
	_.symbolz = ")!@#$%^&*(";
	_.letterz = "abcdefghijklmnopqrstuvwxyz";

	_.LATIN1 = [];
	_.LATIN2 = [];
	for(var i = 0; i <= 9; i++) {
		_.LATIN1 = _.LATIN1.concat(String(PluginManager.parameters('SRD_NameInputUpgrade')['LATIN 1 Row ' + i]).split(/,/));
		_.LATIN2 = _.LATIN2.concat(String(PluginManager.parameters('SRD_NameInputUpgrade')['LATIN 2 Row ' + i]).split(/,/));
	}
	_.LATIN1.splice(0, 1);
	_.LATIN2.splice(0, 1);
	Window_NameInput.LATIN1 = _.LATIN1;
	Window_NameInput.LATIN2 = _.LATIN2;

	Input.resetAllKeystrokes = function() {
		for(var i = 0; i < this._currentState.length; i++) {
			if(this._currentState[i]) this._currentState[i] = false;
		}
	};

	if(_.keyboardMode) {

		Scene_Name.prototype.setLetters = function() {
			for(var i = 48; i <= 57; i++) {
				Input.keyMapper[i] = _.numberz.substring(i-48,i-47);
			}
			for(var i = 65; i <= 90; i++) {
				Input.keyMapper[i] = _.letterz.substring(i-65,i-64);
			}
			Input.keyMapper[8] = "backspace";
			Input.keyMapper[13] = "enter";
			Input.keyMapper[32] = "space";
			Input.keyMapper[186] = "semicolon";
			Input.keyMapper[187] = "equal";
			Input.keyMapper[189] = "minus";
			Input.keyMapper[188] = "comma";
			Input.keyMapper[190] = "period";
			Input.keyMapper[222] = "quote";
			this._lettersSet = true;
			Input.resetAllKeystrokes();
		}

		Scene_Name.prototype.revertControls = function() {
			if(!Imported.YEP_ButtonCommonEvents) {
				Input.keyMapper[8] = "backspace";
				Input.keyMapper[9] = 'tab';    
			    Input.keyMapper[13] = 'ok';      
			    Input.keyMapper[16] = 'shift';   
			    Input.keyMapper[17] = 'control'; 
			    Input.keyMapper[18] = 'control'; 
			    Input.keyMapper[27] = 'escape';  
			    Input.keyMapper[32] = 'ok';      
			    Input.keyMapper[33] = 'pageup';  
			    Input.keyMapper[34] = 'pagedown';
			    Input.keyMapper[37] = 'left';    
			    Input.keyMapper[38] = 'up';      
			    Input.keyMapper[39] = 'right';   
			    Input.keyMapper[40] = 'down';    
			    Input.keyMapper[45] = 'escape';  
			    Input.keyMapper[81] = 'pageup';  
			    Input.keyMapper[87] = 'pagedown';
			    Input.keyMapper[88] = 'escape';  
			    Input.keyMapper[90] = 'ok';      
			    Input.keyMapper[96] = 'escape';  
			    Input.keyMapper[98] = 'down';    
			    Input.keyMapper[100] = 'left';   
			    Input.keyMapper[102] = 'right';  
			    Input.keyMapper[104] = 'up';     
			    Input.keyMapper[120] = 'debug';
			} else {
				Input._revertButton('ALL');
			}
			Input.resetAllKeystrokes();
		}

		var _Scene_Name_create = Scene_Name.prototype.create;
		Scene_Name.prototype.create = function() {
		    _Scene_Name_create.call(this);
		    this._windowLayer.removeChild(this._inputWindow);
		    this._editWindow.x += _.nameX;
		    this._editWindow.y += _.nameY;
		    this._editWindow.opacity = _.nameOpacity;
		    this.createNameExplanation();
		    this._lettersSet = false;
		    this._isShiftPressed = false;
		    this.setLetters();
		};

		Scene_Name.prototype.createNameExplanation = function() {
			this._nameExplanationWindow = new Window_NameExplanation(0, 0);
			this._nameExplanationWindow.x = this._editWindow.x + ((this._editWindow.width / 2) - (this._nameExplanationWindow.width / 2));
			this._nameExplanationWindow.y = this._editWindow.y + this._editWindow.height;
			this._nameExplanationWindow.x += _.helpX;
			this._nameExplanationWindow.y += _.helpY;
			this._nameExplanationWindow.opacity = _.helpOpacity;
		    this.addWindow(this._nameExplanationWindow);
		}

		var _Scene_Name_popScene = Scene_Name.prototype.popScene
		Scene_Name.prototype.popScene = function() {
		    this.revertControls();
		    _Scene_Name_popScene.call(this);
		};

		Scene_Name.prototype.checkKeyInput = function() {
			for(var i = 0; i < _.letterz.length; i++) {
				var letr = _.letterz.substring(i,i+1);
				if(Input.isTriggered(letr)) {
					if(this._isShiftPressed) letr = letr.toUpperCase();
			    	this._editWindow.add(letr);
			    	this._editWindow.refresh();
			    }
			}
			for(var i = 0; i < _.numberz.length; i++) {
				var num = _.numberz.substring(i,i+1);
				if(Input.isTriggered(num)) {
					if(this._isShiftPressed) num = _.symbolz.substring(i,i+1);
			    	this._editWindow.add(num);
			    	this._editWindow.refresh();
			    }
			}
			if(this._isShiftPressed) {
			    if(!Input.isPressed("shift")) this._isShiftPressed = false;
			} else {
				if(Input.isPressed("shift")) this._isShiftPressed = true;
			}
			if(Input.isTriggered("enter")) {
				this.onInputOk();
			}
			if(Input.isTriggered("space")) {
			    this._editWindow.add(" ");
			    this._editWindow.refresh();
			}
			if(Input.isTriggered("backspace")) {
			    this._editWindow.back();
			    this._editWindow.refresh();
			}
			if(Input.isTriggered("semicolon")) {
			    this._editWindow.add(";");
			    this._editWindow.refresh();
			}
			if(Input.isTriggered("equal")) {
			    this._editWindow.add("=");
			    this._editWindow.refresh();
			}
			if(Input.isTriggered("minus")) {
			    this._editWindow.add("-");
			    this._editWindow.refresh();
			}
			if(Input.isTriggered("comma")) {
			    this._editWindow.add(",");
			    this._editWindow.refresh();
			}
			if(Input.isTriggered("period")) {
			    this._editWindow.add(".");
			    this._editWindow.refresh();
			}
			if(Input.isTriggered("quote")) {
			    this._editWindow.add("\"");
			    this._editWindow.refresh();
			}
		};

		function Window_NameExplanation() {
		    this.initialize.apply(this, arguments);
		}

		Window_NameExplanation.prototype = Object.create(Window_Base.prototype);
		Window_NameExplanation.prototype.constructor = Window_NameExplanation;

		Window_NameExplanation.prototype.initialize = function(x, y) {
		    var width = this.windowWidth();
		    var height = this.windowHeight();
		    Window_Base.prototype.initialize.call(this, x, y, width, height);
		    this.refresh();
		};

		Window_NameExplanation.prototype.windowWidth = function() {
		    return eval(_.helpWindowWidth);
		};

		Window_NameExplanation.prototype.windowHeight = function() {
		    return eval(_.helpWindowHeight);
		};

		Window_NameExplanation.prototype.refresh = function() {
		    this.contents.clear();
		    this.drawText(_.displayMessage, -10, 0, this.windowWidth(), 'center');
		    this.drawText(_.displayMessage2, -10, this.lineHeight(), this.windowWidth(), 'center');
		};
	}

	var _Scene_Name_createBackground = Scene_Name.prototype.createBackground;
	Scene_Name.prototype.createBackground = function() {
		if(_.background.trim().length > 0) {
			this._backgroundSprite = new Sprite();
	    	this._backgroundSprite.bitmap = ImageManager.loadPicture(_.background);
	    	this.addChild(this._backgroundSprite);
	    	this._isBackgroundScaled = false;
		} else {
			_Scene_Name_createBackground.call(this);
		}
	};

	var _Scene_Name_update = Scene_Name.prototype.update;
	Scene_Name.prototype.update = function() {
		_Scene_Name_update.call(this);
		if(_.keyboardMode && this._lettersSet) this.checkKeyInput();
		if(_.scale && this._isBackgroundScaled == false && this._backgroundSprite.bitmap.width != 0) {
			this._isBackgroundScaled = true;
			this._backgroundSprite.scale.x = Number(Graphics.width / this._backgroundSprite.bitmap.width);
		    this._backgroundSprite.scale.y = Number(Graphics.height / this._backgroundSprite.bitmap.height);
		}
	};

	var _Scene_Name_createInputWindow = Scene_Name.prototype.createInputWindow;
	Scene_Name.prototype.createInputWindow = function() {
	    _Scene_Name_createInputWindow.call(this);
	    this._inputWindow.opacity = _.keyboardOpacity;
	};

	Window_NameEdit.prototype.windowHeight = function() {
	    return (_.showFace) ? this.fittingHeight(4) : this.fittingHeight(2);
	};

	Window_NameEdit.prototype.itemRect = function(index) {
	    return {
	        x: this.left() + index * this.charWidth(),
	        y: (_.showFace) ? 54 : 18,
	        width: this.charWidth(),
	        height: this.lineHeight()
	    };
	};

	Window_NameEdit.prototype.underlineColor = function() {
	    return this.textColor(_.underlineColor);
	};

	Window_NameEdit.prototype.drawChar = function(index) {
	    var rect = this.itemRect(index);
	    this.changeTextColor(this.textColor(_.textColor));
	    this.drawText(this._name[index] || '', rect.x, rect.y);
	};

	var _Window_NameEdit_faceWidth = Window_NameEdit.prototype.faceWidth;
	Window_NameEdit.prototype.faceWidth = function() {
	    return (_.showFace) ? _Window_NameEdit_faceWidth.call(this) : 0;
	};

	Window_NameEdit.prototype.refresh = function() {
	    this.contents.clear();
	    if(_.showFace) this.drawActorFace(this._actor, 0, 0);
	    for (var i = 0; i < this._maxLength; i++) {
	        this.drawUnderline(i);
	    }
	    for (var j = 0; j < this._name.length; j++) {
	        this.drawChar(j);
	    }
	    var rect = this.itemRect(this._index);
	    this.setCursorRect(rect.x, rect.y, rect.width, rect.height);
	};

})(SRD.NameInput);