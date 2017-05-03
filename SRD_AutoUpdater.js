/*:
 * @plugindesc Allows developers to set up automatic updates to occur whenever a player plays the game.
 * @author SumRndmDde
 *
 * @param Update Text URL
 * @desc The URL for the game to download the "Update Text" file which determines which files need to be updated.
 * @default
 *
 * @param Initial Version
 * @desc The version of the game that is used when the game is first run.
 * @default 1.00
 *
 * @param == Version Options ==
 * @default
 *
 * @param Draw Version
 * @desc If 'true', then the game's version will be drawn on the Title Scene.
 * @default true
 *
 * @param Version Format
 * @desc The format of the version text on the title.
 * Use %1 to represent the version number.
 * @default v%1
 *
 * @param Version Text X
 * @desc The X position of the version text.
 * @default Graphics.boxWidth - textWidth - 8
 *
 * @param Version Text Y
 * @desc The Y position of the version text.
 * @default Graphics.boxHeight - textHeight - 24
 *
 * @param Version Text Font
 * @desc The font of the version text.
 * @default GameFont
 *
 * @param Version Text Color
 * @desc The color of the font of the version text.
 * @default #FFFFFF
 *
 * @param Version Text Size
 * @desc The font size of the version text.
 * @default 28
 *
 * @param Version Outline Size
 * @desc The outline size of the version text.
 * @default 3
 *
 * @param Version Italic
 * @desc If 'true', the version text will be italicized.
 * @default true
 *
 * @help
 *
 * Auto Updater
 * Version 1.00
 * SumRndmDde
 *
 *
 * This plugin allows developers to set up automatic updates to occur whenever a 
 * player plays the game while internet is available.
 *
 *
 * ==============================================================================
 *  Install a Background Image!!
 * ==============================================================================
 *
 * Before anything else, be sure to install a background image:
 *
 *   /img/SumRndmDde/auto-update/Background.png
 *
 * You can use the default I created here:
 *
 *   http://i.imgur.com/Q6hkatD.png
 *
 *
 * ==============================================================================
 *  How to Set up MASTER Text File
 * ==============================================================================
 *
 * In order to create orders and information the game can access online to use
 * in order to update, you must host a text file online. I would recommend
 * using GitHub. Once the text file is hosted online, place the direct link
 * into the "Update Text URL" Parameter.
 *
 * In order to create an update for the game, simply use the following notetag:
 *
 *   <Version: ###>
 *   <End of Version>
 *
 * Replace "###" with the version number you wish to create. If the client's
 * game has a version number less than that number, all the links contained 
 * within the Version notetags will be downloaded.
 *
 *
 * ==============================================================================
 *  Setting up Version Downloads
 * ==============================================================================
 *
 * Let's say you want to download this file into your game:
 *
 *   https://wordpress.org/latest.zip
 *
 *
 * In order to do so, first you must create a new Version:
 *
 *   <Version: 1.01>
 *   <End of Version>
 *
 *
 * Within the version tags, make a list of downloads using this format:
 *
 *   [download-destination] [download-link]
 *
 * For example:
 *
 *   <Version: 1.01>
 *   /data/test.zip https://wordpress.org/latest.zip
 *   <End of Version>
 *
 *
 * If you input that notetag in its entirety in your MASTER text, then all games
 * connected to the internet will download the file from wordpress.org and save
 * it within the /data/ folder and name it "test.zip".
 *
 * If you wish to update a game again, you'll need to create a new notetag 
 * (don't erase the old one) with even newer links. If a game has fallen behind 
 * on updates, all updates with numbers higher than the game's current version 
 * number will be downloaded!
 *
 *
 * ==============================================================================
 *  End of Help File
 * ==============================================================================
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
SRD.AutoUpdater = SRD.AutoUpdater || {};

var Imported = Imported || {};
Imported["SumRndmDde Auto Updater"] = 1.00;

function Scene_AutoUpdate() {
	this.initialize.apply(this, arguments);
}

(function(_) {

//-----------------------------------------------------------------------------
// SRD.AutoUpdater
//-----------------------------------------------------------------------------

var params = PluginManager.parameters('SRD_AutoUpdater');

_.url = String(params['Update Text URL']);
if(_.url.trim().length === 0) alert("Yo! You don't have an 'Update Text URL' set up. Prepare to have your game crash! :D\n ~ SumRndmDde");
_.initial = String(params['Initial Version']);

_.draw = String(params['Draw Version']).trim().toLowerCase() === 'true';
_.format = String(params['Version Format']);
_.verX = String(params['Version Text X']);
_.verY = String(params['Version Text Y']);
_.verFont = String(params['Version Text Font']);
_.verColor = String(params['Version Text Color']);
_.verSize = String(params['Version Text Size']);
_.verOutline = String(params['Version Outline Size']);
_.verItalic = String(params['Version Italic']).trim().toLowerCase() === 'true';

_.downloads = [];
_.version = null;
_.hasUpdated = false;
_.internet = 0;
_.updateIndex = 0;
_.currentVersion = 0;
_.currentTextInfo = null;
_.startSceneUpdate = false;
_.versionsToUpdate = [];
_.versionSpeedLimiter = [];
_.currentDownloadIndex = 0;
_.endUpdate = false;
_.currentlyDownloadingVersion = -1;

_.localPath = function(p) {
	if(p.substring(0, 1) === '/') p = p.substring(1);
	var path = require('path');
	var base = path.dirname(process.mainModule.filename);
	return path.join(base, p);
};

_.download = function(url, dest, cb) {
	var fs = require('fs');
	var http = null;
	if(url.substring(0, 5).match(/https/)) {
		http = require('https');
	} else {
		http = require('http');
	}
	var file = fs.createWriteStream(dest);
	var request = http.get(url, function(response) {
		response.pipe(file);
		file.on('finish', function() {
			file.close(cb);
		});
	}).on('error', function(err) {
		fs.unlink(dest);
		if (cb) cb(err.message);
	});
};

_.downloadFile = function(url, path, id) {
	if(path.substring(0, 1) === '/') {
		path = path.substring(1);
	}
	_.downloads[id] = 1;
	_.download(url, _.localPath(path), function() {
		_.downloads[id] = 2;
	});
};

_.downloadUpdateFile = function(url) {
	var fs = require('fs');
	var dirPath = StorageManager.localFileDirectoryPath();
	if(!fs.existsSync(dirPath)) {
		fs.mkdirSync(dirPath);
	}
	_.download(url, _.localPath('save/updates.sumrndmdde'), function() {
		_.loadUpdateFile();
	})
};

_.loadUpdateFile = function() {
	var fs = require('fs');
	fs.readFile(_.localPath('save/updates.sumrndmdde'), 'utf8', function(err, contents) {
		_.checkUpdates(contents);
		_.deleteUpdateFile();
	});
};

_.deleteUpdateFile = function() {
	var fs = require('fs');
	fs.writeFile(_.localPath('save/updates.sumrndmdde'), '', function(err) {
		if (err) throw err;
	})
};

_.checkUpdates = function(content) {
	var regexp = /<Version:[ ]?(.*)>/i;
	var regexp2 = /<End[ ]?Of[ ]?Version>/i;
	var regexp3 = /([^\s]*)[ ]([^\s]*)/i;
	var lines = content.split(/[\n\r]+/);
	var mode = 0;
	_.updateData = {};
	_.versionList = [];
	for(var i = 0; i < lines.length; i++) {
		var line = lines[i];
		if(line.match(regexp2)) {
			mode = 0;
		} else if(line.match(regexp)) {
			var version = parseFloat(RegExp.$1);
			if(version > _.version.version) {
				_.updateData[version] = [];
				_.versionList.push(version);
				mode = version;
			} else {
				mode = 0;
			}
		} else if(mode !== 0) {
			if(line.match(regexp3)) {
				var temp = {};
				temp.loc = String(RegExp.$1);
				temp.url = String(RegExp.$2);
				console.log("Downloading " + temp.url + " to " + temp.loc);
				_.updateData[mode].push(temp);
			}
		}
	}
	_.applyUpdates();
};

_.applyUpdates = function() {
	if(_.versionList.length > 0) {
		_.startSceneUpdate = true;
		for(var i = 0; i < _.versionList.length; i++) {
			if(_.version && _.version.version && _.version.version < _.versionList[i]) {
				_.versionsToUpdate.push(_.versionList[i]);
				_.versionSpeedLimiter.push(false);
			}
		}
		_.versionsToUpdate.sort(function(a, b) {
			return a - b;
		});
		_.versionSpeedLimiter[0] = true;
		_.actuallyDoTheUpdatesAndStuff();
	} else {
		Scene_AutoUpdate.prototype.gotoSceneBoot.call(this);
	}
};

_.actuallyDoTheUpdatesAndStuff = function() {
	var index = _.currentDownloadIndex;
	var ver = _.versionsToUpdate[index];
	var limit = _.versionSpeedLimiter[index];
	if(ver && limit) {
		_.currentlyDownloadingVersion = ver;
		var updateData = _.updateData[ver];
		if(_.currentVersion.version < ver) {
			_.currentVersion.version = ver;
		}
		for(var j = 0; j < updateData.length; j++) {
			var info = updateData[j];
			_.downloadFile(info.url, info.loc, _.updateIndex);
			_.updateIndex++;
		}
		_.versionSpeedLimiter[index+1] = true;
	} else {
		_.endUpdate = true;
	}
};

_.localFilePathVersion = function() {
	return StorageManager.localFileDirectoryPath() + 'version.sumrndmdde';
};

_.storeVersionToLocalFile = function(json) {
	var data = LZString.compressToBase64(json);
	var fs = require('fs');
	var dirPath = StorageManager.localFileDirectoryPath();
	var filePath = _.localFilePathVersion();
	if(!fs.existsSync(dirPath)) {
		fs.mkdirSync(dirPath);
	}
	fs.writeFileSync(filePath, data);
};

_.loadVersionToLocalFile = function() {
	var data = null;
	var fs = require('fs');
	var filePath = _.localFilePathVersion();
	if(!fs.existsSync(filePath)) {
		_.storeVersionToLocalFile(`{"version": 1.00}`);
	}
	data = fs.readFileSync(filePath, { encoding: 'utf8' });
	return LZString.decompressFromBase64(data);
};

_.isInternet = function(func) {
	require('dns').lookup('www.google.com', function(err) {
		if (err && err.code == "ENOTFOUND") {
			return func(false);
		} else {
			return func(true);
		}
	})
};

_.preformStartup = function(internet) {
	if(internet) {
		_.onInternet();
		_.internet = 1;
	} else {
		_.onNoInternet();
		_.internet = 2;
		Scene_AutoUpdate.prototype.gotoSceneBoot.call(this);
	}
};

_.onInternet = function() {
	var fs = require('fs');
	if(!fs.existsSync(_.localFilePathVersion())) {
		_.storeVersionToLocalFile(`{"version": 1.00}`);
	}
	_.version = JSON.parse(_.loadVersionToLocalFile());
	_.currentVersion = JsonEx.makeDeepCopy(_.version);
	_.downloadUpdateFile(_.url);
}

_.onNoInternet = function() {
	console.log("Internet not detected!");
}

_.loadImage = function(filename, hue) {
	return ImageManager.loadBitmap('img/SumRndmDde/auto-update/', filename, hue, true);
};

_.loadImage('Background');

//-----------------------------------------------------------------------------
// Scene_Boot
//-----------------------------------------------------------------------------

var _Scene_Boot_start = Scene_Boot.prototype.start;
Scene_Boot.prototype.start = function() {
	if(!_.hasUpdated) {
		SceneManager.goto(Scene_AutoUpdate);
	} else {
		_Scene_Boot_start.apply(this, arguments);
	}
};

//-----------------------------------------------------------------------------
// Scene_Title
//-----------------------------------------------------------------------------

var _Scene_Title_createForeground = Scene_Title.prototype.createForeground;
Scene_Title.prototype.createForeground = function() {
	_Scene_Title_createForeground.apply(this, arguments);
	if(_.draw) {
		this._versionSprite = new Sprite(new Bitmap(Graphics.boxWidth, Graphics.boxHeight));
		this.addChild(this._versionSprite);
		this._au_drawVersion();
	}
};

Scene_Title.prototype._au_drawVersion = function() {
	var maxWidth = Graphics.boxwidth;
	var text = String(parseFloat(Math.round(JSON.parse(_.loadVersionToLocalFile()).version * 100) / 100).toFixed(2));
	text = _.format.replace(/%1/, text);
	this._gameTitleSprite.bitmap.fontFace = _.verFont;
	this._gameTitleSprite.bitmap.textColor = _.verColor;
	this._gameTitleSprite.bitmap.outlineColor = 'black';
	this._gameTitleSprite.bitmap.outlineWidth = eval(_.verOutline);
	this._gameTitleSprite.bitmap.fontSize = eval(_.verSize);
	this._gameTitleSprite.bitmap.fontItalic = _.verItalic
	var textWidth = this._gameTitleSprite.bitmap.measureTextWidth(text);
	var textHeight = this._gameTitleSprite.bitmap.fontSize - (this._gameTitleSprite.bitmap.outlineWidth * 2);
	this._gameTitleSprite.bitmap.drawText(text, eval(_.verX), eval(_.verY), maxWidth, this._gameTitleSprite.bitmap.fontSize * 2, 'left');
};

//-----------------------------------------------------------------------------
// Scene_AutoUpdate
//-----------------------------------------------------------------------------

Scene_AutoUpdate.prototype = Object.create(Scene_Base.prototype);
Scene_AutoUpdate.prototype.constructor = Scene_AutoUpdate;

Scene_AutoUpdate.prototype.initialize = function() {
	Scene_Base.prototype.initialize.call(this);
};

Scene_AutoUpdate.prototype.create = function() {
	Scene_Base.prototype.create.call(this);
	_.isInternet(_.preformStartup);
	this._checkDownloadsIndex = 0;
	this._endUpdate = false;
	this._currentDownloading = _.currentlyDownloadingVersion;
};

Scene_AutoUpdate.prototype.setupImages = function() {
	this.setupParallax();
	this.setupText();
	this.setupVersionText();
	this.setupFade();
};

Scene_AutoUpdate.prototype.setupParallax = function() {
	this._parallax = new TilingSprite();
	this._parallax.move(0, 0, Graphics.width, Graphics.height);
	this._parallax.bitmap = _.loadImage('Background');
	this.addChild(this._parallax);
};

Scene_AutoUpdate.prototype.setupText = function() {
	this._text1 = new Sprite(new Bitmap(Graphics.width/2, Graphics.height/4));
	this._text1.bitmap.outlineColor = 'black';
	this._text1.bitmap.outlineWidth = 4;
	this._text1.bitmap.fontSize = 72;
	this._text1._myText = 'Updating';
	this._text1.bitmap.drawText(this._text1._myText, 0, 0, this._text1.bitmap.width, this._text1.bitmap.height, 'center');
	this._text1.anchor.x = 0.5;
	this._text1.anchor.y = 0.5;
	this._text1.x = Graphics.boxWidth/2;
	this._text1.y = Graphics.boxHeight/2;
	this._text1._rotationSpeed = 0.01;
	this._text1._dotDotDotSpeed = 0;
	this.addChild(this._text1);
};

Scene_AutoUpdate.prototype.setupVersionText = function() {
	this._text2 = new Sprite(new Bitmap(Graphics.width/2, Graphics.height/8));
	this._text2.bitmap.outlineColor = 'black';
	this._text2.bitmap.outlineWidth = 3;
	this._text2.bitmap.fontSize = 24;
	this._text2.anchor.x = 0.5;
	this._text2.anchor.y = 0.5;
	this._text2.x = Graphics.boxWidth/2;
	this._text2.y = Graphics.boxHeight * (4/5);
	this.addChild(this._text2);
};

Scene_AutoUpdate.prototype.updateVersionText = function() {
	this._text2.bitmap.clear();
	this._text2._myText = '(Downloading Version ' + _.currentlyDownloadingVersion + ')';
	this._text2.bitmap.drawText(this._text2._myText, 0, 0, this._text2.bitmap.width, this._text2.bitmap.height, 'center');
	this._currentDownloading = _.currentlyDownloadingVersion;
};

Scene_AutoUpdate.prototype.setupFade = function() {
	this._blackPic = new Sprite(new Bitmap(Graphics.width, Graphics.height));
	this._blackPic.bitmap.fillRect(0, 0, Graphics.width, Graphics.height, "#000000");
	this.addChild(this._blackPic);
};

Scene_AutoUpdate.prototype.update = function() {
	Scene_Base.prototype.update.call(this);
	if(_.startSceneUpdate) {
		this.updateTheLoading();
	}
};

Scene_AutoUpdate.prototype.updateTheLoading = function() {
	if(_.endUpdate) {
		this.updateFinish();
	} else if(_.internet === 1) {
		if(!this._areImagesSetUp) {
			this.setupImages();
			this._areImagesSetUp = true;
		}
		this.updateImages();
		this.updateCompletion();
		if(this._currentDownloading !== _.currentlyDownloadingVersion) {
			this.updateVersionText();
		}
	} else if(_.internet === 2) {
		this.gotoSceneBoot();
	}
};

Scene_AutoUpdate.prototype.updateFinish = function() {
	if(this._blackPic.opacity < 255) {
		this._blackPic.opacity += 5;
	} else {
		this.restartGame();
	}
};

Scene_AutoUpdate.prototype.restartGame = function() {
	_.storeVersionToLocalFile(JSON.stringify(_.currentVersion));
	location.reload();
};

Scene_AutoUpdate.prototype.updateImages = function() {
	if(this._parallax && this._blackPic) {
		if(this._blackPic.opacity > 0) {
			this._blackPic.opacity -= 5;
		}
		this._parallax.origin.x += 1;
		this._parallax.origin.y += 1;
		this._text1.rotation += this._text1._rotationSpeed;
		if(Math.abs(this._text1.rotation) > 0.2) this._text1._rotationSpeed *= (-1);
		if(this._text1._dotDotDotSpeed < 30) {
			this._text1._dotDotDotSpeed++;
		} else {
			if(this._text1._myText === 'Updating...') {
				this._text1._myText = 'Updating';
			} else {
				this._text1._myText = this._text1._myText + '.';
			}
			this._text1.bitmap.clear();
			this._text1.bitmap.drawText(this._text1._myText, 0, 0, this._text1.bitmap.width, this._text1.bitmap.height, 'center');
			this._text1._dotDotDotSpeed = 0;
		}
	}
};

Scene_AutoUpdate.prototype.updateCompletion = function() {
	if(this._checkDownloadsIndex === 60) {
		this._checkDownloadsIndex = 0;
		var result = true;
		for(var i = 0; i < _.downloads.length; i++) {
			if(_.downloads[i] === 1) {
				result = false;
			}
		}
		if(result) {
			_.currentDownloadIndex++;
			_.actuallyDoTheUpdatesAndStuff();
		}
	} else {
		this._checkDownloadsIndex++;
	}
};

Scene_AutoUpdate.prototype.gotoSceneBoot = function() {
	_.hasUpdated = true;
	SceneManager.goto(Scene_Boot);
};

})(SRD.AutoUpdater);