/*:
 * @plugindesc A spell checking utility for...checking your spelling...
 * Be sure to install the word bank!
 * @author SumRndmDde
 *
 * @param Word Bank File
 * @desc The source file that contains all the words you wish to check against.
 * @default data/words.txt
 *
 * @param Alphabet
 * @desc All of the letters used to create the spell checking suggestions.
 * @default abcdefghijklmnopqrstuvwxyz
 *
 * @param Ignore Spelling Words
 * @desc If you wish to have any words that have their spelling accepted as correct, list them here. Seperate with commas.
 * @default
 *
 * @param Highlight Color
 * @desc The color used to highlight spelling mistakes.
 * @default rgba(255, 0, 0, 0.5)
 *
 * @help
 *
 * Spell Check
 * Version 1.00
 * SumRndmDde
 *
 *
 * This is a utility/debug Plugin that can be used to check your spelling
 * of various texts throughout your game.
 *
 * You're going to need a text file to contain a list of all the words that
 * you wish to check against. You can find one here:
 *
 *    https://github.com/dwyl/english-words
 *
 *
 * ==========================================================================
 *  How to Use
 * ==========================================================================
 *
 * This plugin checks the spelling of all the Text-EX text in the game.
 *
 * This includes:
 *
 *     Message Window Text
 *     Help Window Text
 *     Battle Log Text
 *     Name Text
 *     ...and much more!
 *
 *
 * The words that have been determined to have mistakes will have a colored 
 * highlight on them. When you place your mouse over the highlight, 
 * suggestions for what the word you were trying to spell will appear.
 *
 * You can right-click the highlight to stop the suggestions from 
 * disappearing. That way, you can copy down the suggestions while the game
 * is running.
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
 * 
 */

var SRD = SRD || {};
SRD.SpellCheck = SRD.SpellCheck || {};

var Imported = Imported || {};
Imported["SumRndmDde Spell Check"] = 1.00;

(function(_) {

var params = PluginManager.parameters('SRD_SpellCheck');

_.alphabet = String(params['Alphabet']);

//-----------------------------------------------------------------------------
// SRD.SpellCheck
//-----------------------------------------------------------------------------

_.words = {};

_.addWord = function(word) {
	if(word.length > 0) {
		word = word.toLowerCase();
		_.words[word.substring(0, 1)] = _.words[word.substring(0, 1)] || [];
		_.words[word.substring(0, 1)].push(word);
	}
};

_.checkWord = function(word) {
	word = word.toLowerCase();
	if(!_.words[word.substring(0, 1)]) return false;
	return _.words[word.substring(0, 1)].indexOf(word) < 0;
};

_.findSuggestions = function(word) {
	var results = [];
	var alphab = _.alphabet;
	var temp = '';

	//Remove
	for(var i = 0; i < word.length; i++) {
		temp = _.removeLetter(word, i);
		if(!_.checkWord(temp) && !results.contains(temp)) results.push(temp);
	}

	//Add
	for(var i = 0; i < word.length; i++) {
		for(var j = 0; j < alphab.length; j++) {
			temp = _.addLetter(word, i, alphab.substring(j, j+1));
			if(!_.checkWord(temp) && !results.contains(temp)) results.push(temp);
		}
	}
	for(var i = 0; i < alphab.length; i++) {
		temp = alphab.substring(i, i+1) + word;
		if(!_.checkWord(temp) && !results.contains(temp)) results.push(temp);

		temp = word + alphab.substring(i, i+1);
		if(!_.checkWord(temp) && !results.contains(temp)) results.push(temp);
	}

	//Replace
	for(var i = 0; i < word.length; i++) {
		for(var j = 0; j < alphab.length; j++) {
			temp = _.replaceLetter(word, i, alphab.substring(j, j+1));
			if(!_.checkWord(temp) && !results.contains(temp)) results.push(temp);
		}
	}

	//Swap
	for(var i = 0; i < word.length; i++) {
		for(var j = 0; j < word.length; j++) {
			temp = _.swapLetters(word, i, j);
			if(!_.checkWord(temp) && !results.contains(temp)) results.push(temp);
		}
	}

	return results;
};

_.removeLetter = function(string, index) {
	return string.substring(0, index) + string.substring(index + 1);
};

_.addLetter = function(string, index, char) {
	return string.substring(0, index) + char + string.substring(index);
};

_.replaceLetter = function(string, index, char) {
	return string.substring(0, index) + char + string.substring(index + 1);
};

_.swapLetters = function(string, index1, index2) {
	return string.substring(0, index1) + string.substring(index2, index2+1) + string.substring(index1+1, index2) + 
		string.substring(index1, index1+1) + string.substring(index2+1);
}

_.bankSource = String(params['Word Bank File']);
_.ignores = String(params['Ignore Spelling Words']).split(/\s*,\s*/).forEach(function(word) {
	_.addWord(word);
}, this);

_.color = String(params['Highlight Color']);

(function(b, f) {

	var filePath = b;
	xmlhttp = new XMLHttpRequest();
	xmlhttp.open("GET",filePath); 
	xmlhttp.onload = function() {
		if (xmlhttp.status < 400) {
			var fileContent = xmlhttp.responseText;
			var words = fileContent.split(/[\n\r]/i);
			for(var i = 0; i < words.length; i++) {
				f(words[i]);
			}
		}
	};
	xmlhttp.send();

})(_.bankSource, _.addWord);

//-----------------------------------------------------------------------------
// TouchInput
//-----------------------------------------------------------------------------

var _TouchInput__onMouseMove = TouchInput._onMouseMove;
TouchInput._onMouseMove = function(event) {
	_TouchInput__onMouseMove.call(this, event);
	if($gameTemp) {
		$gameTemp._mouseX = Graphics.pageToCanvasX(event.pageX);
		$gameTemp._mouseY = Graphics.pageToCanvasY(event.pageY);
	}
};

var _TouchInput__onCancel = TouchInput._onCancel;
TouchInput._onCancel = function(x, y) {
	_TouchInput__onCancel.call(this, x, y);
	if($gameTemp) $gameTemp._isCancel = true;
};

//-----------------------------------------------------------------------------
// Game_Temp
//-----------------------------------------------------------------------------

var _Game_Temp_initialize = Game_Temp.prototype.initialize;
Game_Temp.prototype.initialize = function() {
	_Game_Temp_initialize.call(this);
	this._mouseX = 0;
	this._mouseY = 0;
	this._isCancel = false;
};

//-----------------------------------------------------------------------------
// Window_Base
//-----------------------------------------------------------------------------

var _Window_Base_initialize = Window_Base.prototype.initialize;
Window_Base.prototype.initialize = function(x, y, width, height) {
	_Window_Base_initialize.apply(this, arguments);
	this._wordForSpellCheck = '';
	this._spellCheckHighlights = [];
};

var _Window_Base_processNormalCharacter = Window_Base.prototype.processNormalCharacter;
Window_Base.prototype.processNormalCharacter = function(textState) {
	_Window_Base_processNormalCharacter.apply(this, arguments);

	var c = textState.text[textState.index - 1];
	var w = this.textWidth(c);
	var s = textState.x - w;
	this.spellCheckAndStuff(textState, c, w, s);
};

Window_Base.prototype.spellCheckAndStuff = function(textState, c, w, s) {
	if(c.match(/[a-z]/i) && textState.index < textState.text.length) {
		this._wordForSpellCheck += c.toLowerCase();
	} else {
		if(c.match(/[a-z]/i) && textState.index >= textState.text.length) {
			this._wordForSpellCheck += c.toLowerCase();
			s = textState.x;
		}
		if(_.checkWord(this._wordForSpellCheck)) {
			var width = this.textWidth(this._wordForSpellCheck);
			var sprite = new Sprite_SpellCheckHighlight((s - width) + this.standardPadding(), 
				textState.y + this.standardPadding(), width, this.contents.fontSize + 8, _.color, 180, 255, 
				_.findSuggestions(this._wordForSpellCheck), this);
			this.addChild(sprite);
			this._spellCheckHighlights.push(sprite);
		}
		this._wordForSpellCheck = '';
		if(c === "'") this._wordForSpellCheck = "'";
	}
};

var _Window_Message_open = Window_Message.prototype.open;
Window_Message.prototype.open = function() {
	_Window_Message_open.call(this);
	this._spellCheckHighlights.forEach(function(sprite) {
		sprite.opacity = 180;
	});
};

var _Window_Message_close = Window_Message.prototype.close;
Window_Message.prototype.close = function() {
	_Window_Message_close.call(this);
	this._spellCheckHighlights.forEach(function(sprite) {
		sprite.opacity = 0;
	});
};

Window_Message.prototype.removeSpellCheckHighlightSprites = function() {
	this._spellCheckHighlights.forEach(function(sprite) {
		this.removeChild(sprite);
	}, this);
};

var _Window_Message_newPage = Window_Message.prototype.newPage;
Window_Message.prototype.newPage = function(textState) {
	_Window_Message_newPage.call(this, textState);
	this.removeSpellCheckHighlightSprites();
};

//-----------------------------------------------------------------------------
// Sprite_SpellCheckHighlight
//-----------------------------------------------------------------------------

function Sprite_SpellCheckHighlight() {
	this.initialize.apply(this, arguments);
}

Sprite_SpellCheckHighlight.prototype = Object.create(Sprite_Base.prototype);
Sprite_SpellCheckHighlight.prototype.constructor = Sprite_SpellCheckHighlight;

Sprite_SpellCheckHighlight.prototype.initialize = function(x, y, width, height, color, opacity1, opacity2, suggestions, parent) {
	Sprite_Base.prototype.initialize.call(this);
	this.bitmap = new Bitmap(width, height);
	this.bitmap.fillRect(0, 0, this.bitmap.width, this.bitmap.height, color);
	this.x = x;
	this.y = y;
	this.opacity = opacity1;
	this._words = suggestions;
	this._isHoldMode = false;
	this._padding = 10;
	this._parent = parent;

	this._suggestions = new Sprite();
	this._suggestions.opacity = 0;
	this.addChild(this._suggestions);
	for(var i = 0; i < this._words.length; i++) {
		var w = this._words[i];
		var p = this._padding;
		var width = this.bitmap.measureTextWidth(w) + p;
		var height = this.bitmap.fontSize + p;
		var sprite = new Sprite(new Bitmap(width, height));
		sprite.bitmap.fillRect(0, 0, width, height, "rgba(0, 0, 0, 1)");
		sprite.bitmap.drawText(w, p/2, 0, width, height, 'left');
		sprite.y = -50 - ((height + 4) * i);
		if(this._parent.y < Graphics.height / 2) sprite.y *= (-1);
		this._suggestions.addChild(sprite);
	}
	if(this._words.length === 0) {
		var w = "No Suggestions";
		var p = this._padding;
		var width = this.bitmap.measureTextWidth(w) + p;
		var height = this.bitmap.fontSize + p;
		var sprite = new Sprite(new Bitmap(width, height));
		sprite.bitmap.fillRect(0, 0, width, height, "rgba(0, 0, 0, 1)");
		sprite.bitmap.drawText(w, p/2, 0, width, height, 'left');
		sprite.y = -50 - (height * i);
		this._suggestions.addChild(sprite);
	}
};

Sprite_SpellCheckHighlight.prototype.update = function() {
	Sprite_Base.prototype.update.call(this);
	if(this.isButtonTouched() || this._isHoldMode) {
		if(this._suggestions.opacity < 255) {
			this._suggestions.opacity += 15;
		}
		if(this.opacity < 255) this.opacity += 10;
	} else {
		if(this._suggestions.opacity > 0) {
			this._suggestions.opacity -= 15;
		}
		if(this.opacity > 180) this.opacity -= 10;
	}

	if(this.isButtonTouched() && $gameTemp._isCancel) {
		$gameTemp._isCancel = false;
		this._isHoldMode = !this._isHoldMode;
	}
};

Sprite_SpellCheckHighlight.prototype.isButtonTouched = function() {
	var x = this.canvasToLocalX($gameTemp._mouseX);
	var y = this.canvasToLocalY($gameTemp._mouseY);
	return x >= 0 && y >= 0 && x < this.width && y < this.height;
};

Sprite_SpellCheckHighlight.prototype.canvasToLocalX = function(x) {
	var node = this;
	while (node) {
		x -= node.x;
		node = node.parent;
	}
	return x;
};

Sprite_SpellCheckHighlight.prototype.canvasToLocalY = function(y) {
	var node = this;
	while (node) {
		y -= node.y;
		node = node.parent;
	}
	return y;
};

})(SRD.SpellCheck);