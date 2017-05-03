/*:
 * @plugindesc Allows developers to preload specific audio and images before running the game through a new pre-title scene.
 * @author SumRndmDde
 *
 * @param Custom Background
 * @desc A custom background image for the preload scene. 
 * Leave blank for default. Place in /img/SumRndmDde/preload/
 * @default
 *
 * @param Loading Text
 * @desc The format of the text used to describe which files are being loaded. Use %1 to represent the filepath.
 * @default Loading %1
 *
 * @param Complete Text
 * @desc The text used when all of the loading is complete.
 * @default Load Complete!
 *
 * @param Use Fade Transitions
 * @desc If 'true', a fade will occur between the Title and Preloading scenes.
 * @default true
 *
 * @param Load Font Size
 * @desc The font size of the text when displaying the loading url.
 * @default 28
 *
 * @param Gauge Back Color
 * @desc The color used for the background of the loading gauge.
 * @default rgba(0, 0, 0, 0.4)
 *
 * @param Gauge Main Color
 * @desc The color used for the main part of the loading gauge.
 * @default rgba(255, 0, 0, 0.4)
 *
 * @param == Audio Preloads ==
 * @default
 *
 * @param Cache Audio
 * @desc Keeps previous audio objects stored for quick retrieval.
 * List all the audio folders that will use caching.
 * @default bgm, bgs, me
 *
 * @param Preload BGM
 * @desc Determines which BGM are preloaded. Choices are:
 *  all  |  important  |  custom: f1, f2, ...  |  none
 * @default important
 *
 * @param Preload BGS
 * @desc Determines which BGS are preloaded. Choices are:
 *  all  |  important  |  custom: f1, f2, ...  |  none
 * @default none
 *
 * @param Preload ME
 * @desc Determines which ME are preloaded. Choices are:
 *  all  |  important  |  custom: f1, f2, ...  |  none
 * @default important
 *
 * @param Preload SE
 * @desc Determines which SE are preloaded. Choices are:
 *  all  |  important  |  custom: f1, f2, ...  |  none
 * @default none
 *
 * @param == Image Preloads ==
 * @default
 *
 * @param Preload System
 * @desc Determines which system images are preloaded. Choices are:
 *  all  |  important  |  custom: f1, f2, ...  |  none
 * @default none
 *
 * @param Preload Animations
 * @desc Determines which animations are preloaded. Choices are:
 *  all  |  important  |  custom: f1, f2, ...  |  none
 * @default none
 *
 * @param Preload Battlebacks1
 * @desc Determines which battlebacks1 are preloaded. Choices are:
 *  all  |  important  |  custom: f1, f2, ...  |  none
 * @default none
 *
 * @param Preload Battlebacks2
 * @desc Determines which battlebacks2 are preloaded. Choices are:
 *  all  |  important  |  custom: f1, f2, ...  |  none
 * @default none
 *
 * @param Preload Characters
 * @desc Determines which characters are preloaded. Choices are:
 *  all  |  important  |  custom: f1, f2, ...  |  none
 * @default none
 *
 * @param Preload Enemies
 * @desc Determines which enemies are preloaded. Choices are:
 *  all  |  important  |  custom: f1, f2, ...  |  none
 * @default none
 *
 * @param Preload Faces
 * @desc Determines which faces are preloaded. Choices are:
 *  all  |  important  |  custom: f1, f2, ...  |  none
 * @default important
 *
 * @param Preload Parallaxes
 * @desc Determines which parallaxes are preloaded. Choices are:
 *  all  |  important  |  custom: f1, f2, ...  |  none
 * @default none
 *
 * @param Preload Pictures
 * @desc Determines which pictures are preloaded. Choices are:
 *  all  |  important  |  custom: f1, f2, ...  |  none
 * @default none
 *
 * @param Preload SV_Actors
 * @desc Determines which SV actors are preloaded. Choices are:
 *  all  |  important  |  custom: f1, f2, ...  |  none
 * @default none
 *
 * @param Preload SV_Enemies
 * @desc Determines which SV enemies are preloaded. Choices are:
 *  all  |  important  |  custom: f1, f2, ...  |  none
 * @default none
 *
 * @param Preload Tilesets
 * @desc Determines which tilesets are preloaded. Choices are:
 *  all  |  important  |  custom: f1, f2, ...  |  none
 * @default important
 *
 * @param Preload Titles1
 * @desc Determines which titles1 are preloaded. Choices are:
 *  all  |  important  |  custom: f1, f2, ...  |  none
 * @default none
 *
 * @param Preload Titles2
 * @desc Determines which titles2 are preloaded. Choices are:
 *  all  |  important  |  custom: f1, f2, ...  |  none
 * @default none
 *
 * @param == Custom Path 1 ==
 * @default
 *
 * @param Preload Path 1
 * @desc This is a custom folder path to reference the images to be preloaded in the /img/ folder.
 * @default
 *
 * @param Preload Images 1
 * @desc Determines which images are preloaded from Path 1.
 *  all  |  important  |  custom: f1, f2, ...  |  none
 * @default
 *
 * @param == Custom Path 2 ==
 * @default
 *
 * @param Preload Path 2
 * @desc This is a custom folder path to reference the images to be preloaded in the /img/ folder.
 * @default
 *
 * @param Preload Images 2
 * @desc Determines which images are preloaded from Path 2.
 *  all  |  important  |  custom: f1, f2, ...  |  none
 * @default
 *
 * @param == Custom Path 3 ==
 * @default
 *
 * @param Preload Path 3
 * @desc This is a custom folder path to reference the images to be preloaded in the /img/ folder.
 * @default
 *
 * @param Preload Images 3
 * @desc Determines which images are preloaded from Path 3.
 *  all  |  important  |  custom: f1, f2, ...  |  none
 * @default
 *
 * @param == Custom Path 4 ==
 * @default
 *
 * @param Preload Path 4
 * @desc This is a custom folder path to reference the images to be preloaded in the /img/ folder.
 * @default
 *
 * @param Preload Images 4
 * @desc Determines which images are preloaded from Path 4.
 *  all  |  important  |  custom: f1, f2, ...  |  none
 * @default
 *
 * @param == Custom Path 5 ==
 * @default
 *
 * @param Preload Path 5
 * @desc This is a custom folder path to reference the images to be preloaded in the /img/ folder.
 * @default
 *
 * @param Preload Images 5
 * @desc Determines which images are preloaded from Path 5.
 *  all  |  important  |  custom: f1, f2, ...  |  none
 * @default 
 *
 * @param == Custom Path 6 ==
 * @default
 *
 * @param Preload Path 6
 * @desc This is a custom folder path to reference the images to be preloaded in the /img/ folder.
 * @default
 *
 * @param Preload Images 6
 * @desc Determines which images are preloaded from Path 6.
 *  all  |  important  |  custom: f1, f2, ...  |  none
 * @default
 *
 * @param == Custom Path 7 ==
 * @default
 *
 * @param Preload Path 7
 * @desc This is a custom folder path to reference the images to be preloaded in the /img/ folder.
 * @default
 *
 * @param Preload Images 7
 * @desc Determines which images are preloaded from Path 7.
 *  all  |  important  |  custom: f1, f2, ...  |  none
 * @default
 *
 * @param == Custom Path 8 ==
 * @default
 *
 * @param Preload Path 8
 * @desc This is a custom folder path to reference the images to be preloaded in the /img/ folder.
 * @default
 *
 * @param Preload Images 8
 * @desc Determines which images are preloaded from Path 8.
 *  all  |  important  |  custom: f1, f2, ...  |  none
 * @default
 *
 * @param == Custom Path 9 ==
 * @default
 *
 * @param Preload Path 9
 * @desc This is a custom folder path to reference the images to be preloaded in the /img/ folder.
 * @default
 *
 * @param Preload Images 9
 * @desc Determines which images are preloaded from Path 9.
 *  all  |  important  |  custom: f1, f2, ...  |  none
 * @default
 *
 * @param == Custom Path 10 ==
 * @default
 *
 * @param Preload Path 10
 * @desc This is a custom folder path to reference the images to be preloaded in the /img/ folder.
 * @default
 *
 * @param Preload Images 10
 * @desc Determines which images are preloaded from Path 10.
 *  all  |  important  |  custom: f1, f2, ...  |  none
 * @default
 *
 * @param == Custom Path 11 ==
 * @default
 *
 * @param Preload Path 11
 * @desc This is a custom folder path to reference the images to be preloaded in the /img/ folder.
 * @default
 *
 * @param Preload Images 11
 * @desc Determines which images are preloaded from Path 11.
 *  all  |  important  |  custom: f1, f2, ...  |  none
 * @default
 *
 * @param == Custom Path 12 ==
 * @default
 *
 * @param Preload Path 12
 * @desc This is a custom folder path to reference the images to be preloaded in the /img/ folder.
 * @default
 *
 * @param Preload Images 12
 * @desc Determines which images are preloaded from Path 12.
 *  all  |  important  |  custom: f1, f2, ...  |  none
 * @default
 *
 * @param == Custom Path 13 ==
 * @default
 *
 * @param Preload Path 13
 * @desc This is a custom folder path to reference the images to be preloaded in the /img/ folder.
 * @default
 *
 * @param Preload Images 13
 * @desc Determines which images are preloaded from Path 13.
 *  all  |  important  |  custom: f1, f2, ...  |  none
 * @default
 *
 * @param == Custom Path 14 ==
 * @default
 *
 * @param Preload Path 14
 * @desc This is a custom folder path to reference the images to be preloaded in the /img/ folder.
 * @default
 *
 * @param Preload Images 14
 * @desc Determines which images are preloaded from Path 14.
 *  all  |  important  |  custom: f1, f2, ...  |  none
 * @default
 *
 * @param == Custom Path 15 ==
 * @default
 *
 * @param Preload Path 15
 * @desc This is a custom folder path to reference the images to be preloaded in the /img/ folder.
 * @default
 *
 * @param Preload Images 15
 * @desc Determines which images are preloaded from Path 15.
 *  all  |  important  |  custom: f1, f2, ...  |  none
 * @default
 *
 * @param == Custom Path 16 ==
 * @default
 *
 * @param Preload Path 16
 * @desc This is a custom folder path to reference the images to be preloaded in the /img/ folder.
 * @default
 *
 * @param Preload Images 16
 * @desc Determines which images are preloaded from Path 16.
 *  all  |  important  |  custom: f1, f2, ...  |  none
 * @default
 *
 * @param == Custom Path 17 ==
 * @default
 *
 * @param Preload Path 17
 * @desc This is a custom folder path to reference the images to be preloaded in the /img/ folder.
 * @default
 *
 * @param Preload Images 17
 * @desc Determines which images are preloaded from Path 17.
 *  all  |  important  |  custom: f1, f2, ...  |  none
 * @default
 *
 * @param == Custom Path 18 ==
 * @default
 *
 * @param Preload Path 18
 * @desc This is a custom folder path to reference the images to be preloaded in the /img/ folder.
 * @default
 *
 * @param Preload Images 18
 * @desc Determines which images are preloaded from Path 18.
 *  all  |  important  |  custom: f1, f2, ...  |  none
 * @default
 *
 * @param == Custom Path 19 ==
 * @default
 *
 * @param Preload Path 19
 * @desc This is a custom folder path to reference the images to be preloaded in the /img/ folder.
 * @default
 *
 * @param Preload Images 19
 * @desc Determines which images are preloaded from Path 19.
 *  all  |  important  |  custom: f1, f2, ...  |  none
 * @default
 *
 * @param == Custom Path 20 ==
 * @default
 *
 * @param Preload Path 20
 * @desc This is a custom folder path to reference the images to be preloaded in the /img/ folder.
 * @default
 *
 * @param Preload Images 20
 * @desc Determines which images are preloaded from Path 20.
 *  all  |  important  |  custom: f1, f2, ...  |  none
 * @default
 *
 * @help
 *
 * Preloader Core
 * Version 1.02
 * SumRndmDde
 *
 *
 * This plugin allows developers to preload specific audio and images before 
 * running the game through a new pre-title scene.
 *
 *
 * ==============================================================================
 *  Preload Options
 * ==============================================================================
 *
 * For all of the audio and img folders, you have four options for preloading
 * files: none, custom, important, all.
 *
 *
 *   none
 *
 * If a preload is set to "none", no files from that folder will be preloaded.
 *
 *
 *   custom: f1, f2, ...
 *
 * If set to "custom", specific files can be selected to be preloaded.
 * Simply input the filenames, no extensions, and separate each with a comma.
 * For example - custom: Battle1, Battle2, Theme6
 *
 *
 *   important
 *
 * If set to "important", then files that are deemed "important" will be 
 * preloaded. What's considered "important" is different for each folder. For 
 * example, important BGMs include ones specified in the database, important
 * Animation Images include all images used in animations, etc.
 *
 *
 *   all
 *
 * All files within the folder will be preloaded.
 * This feature can only be used on Node.js supported platforms.
 *
 *
 * ==============================================================================
 *  Plugin Commands
 * ==============================================================================
 *
 * If you wish to manually preload audio or images in game, the following
 * Plugin Commands can be used:
 *
 *
 *   PreloadAudio [folder] [name]
 *
 * Replace "folder" with one of the audio folders, and replace "name" with one of
 * the file names within that folder.
 * For example - PreloadAudio bgm Theme6
 *
 *
 *   PreloadImage [folder] [name] [hue]
 *
 * Replace "folder" with one of the img folders, and replace "name" with one of 
 * the file names within that folder. You can also use the optional "hue" 
 * argument to have the preloaded image preload a specific hue.
 * For example - PreloadImage titles1 Book 0
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
 *
 */

var SRD = SRD || {};
SRD.PreloaderCore = SRD.PreloaderCore || {};

var Imported = Imported || {};
Imported["SumRndmDde Preloader Core"] = 1.02;

function Scene_Preload() {
	this.initialize.apply(this, arguments);
}

(function(_) {

"use strict";

//-----------------------------------------------------------------------------
// SRD.Preloader
//-----------------------------------------------------------------------------

const params = PluginManager.parameters('SRD_PreloaderCore');

_.isNwjs = Utils.isNwjs();

_.background = String(params['Custom Background']);
_.format = String(params['Loading Text']);
_.complete = String(params['Complete Text']);
_.fadeTrans = String(params['Use Fade Transitions']).trim().toLowerCase() === 'true';
_.fontSize = parseInt(params['Load Font Size']);
_.backColor = String(params['Gauge Back Color']);
_.mainColor = String(params['Gauge Main Color']);

_.cacheAudio = String(params['Cache Audio']).split(/\s*,\s*/);
_.preloadBGM = String(params['Preload BGM']).trim();
_.preloadBGS = String(params['Preload BGS']).trim();
_.preloadME = String(params['Preload ME']).trim();
_.preloadSE = String(params['Preload SE']).trim();

_.preloadSystem = String(params['Preload System']).trim();
_.preloadAnimations = String(params['Preload Animations']).trim();
_.preloadBattlebacks1 = String(params['Preload Battlebacks1']).trim();
_.preloadBattlebacks2 = String(params['Preload Battlebacks2']).trim();
_.preloadCharacters = String(params['Preload Characters']).trim();
_.preloadEnemies = String(params['Preload Enemies']).trim();
_.preloadFaces = String(params['Preload Faces']).trim();
_.preloadParallaxes = String(params['Preload Parallaxes']).trim();
_.preloadPictures = String(params['Preload Pictures']).trim();
_.preloadSV_Actors = String(params['Preload SV_Actors']).trim();
_.preloadSV_Enemies = String(params['Preload SV_Enemies']).trim();
_.preloadTilesets = String(params['Preload Tilesets']).trim();
_.preloadTitles1 = String(params['Preload Titles1']).trim();
_.preloadTitles2 = String(params['Preload Titles2']).trim();

_.customPaths = [];
_.customImages = [];
for(let i = 1; i <= 5; i++) {
	const path = String(params['Preload Path ' + i]);
	const images = String(params['Preload Images ' + i]);
	if(path.trim().length > 0) {
		_.customPaths.push(path);
		_.customImages.push(images);
	}
}

_.hasPreloaded = false;

_.loadPicture = function(filename, hue) {
	return ImageManager.loadBitmap('img/SumRndmDde/preload/', filename, hue, false);
};

_.preloadBackground = function() {
	if(this.background.length > 0) {
		try {
			this.loadPicture(this.background);
		} catch(e) {
			this.background = '';
		}
	}
};
_.preloadBackground();

_.makeError = function(title, text) {
	SceneManager.stop();
	Graphics.printError(title, text);
	AudioManager.stopAll();
};

_.makeAllError = function(value) {
	this.makeError("Hey, listen!", "In SRD_PreloaderCore, Preload " + value.toUpperCase() + " is set to 'all'." 
				+ "This is not compatible on the current platform. Sorry!");
};

_.hasExt = function(filename, ext) {
	if(!!filename.match(ext)) {
		return filename.replace(ext, '');
	}
	return false;
};

//-----------------------------------------------------------------------------
// Take Care of Audio Preloading
//-----------------------------------------------------------------------------

_.audioPreloads = {};
_.audioFolders = [];
_.audioReady = false;

_.getAudioPath = function() {
	var path = require('path');
	var base = path.dirname(process.mainModule.filename);
	return path.join(base, 'audio/');
};

_.setAudioAll = function(folder) {
	this.audioPreloads[folder] = [];
	const fs = require('fs');
	const ext = Decrypter.hasEncryptedAudio ? '.rpgmvo' : AudioManager.audioFileExt();
	const dir = this.getAudioPath() + folder;
	const files = fs.readdirSync(dir);
	for(let i in files){
		const file = files[i];
		const name = dir + '/' + file;
		const pure = this.hasExt(file, ext);
		if (!fs.statSync(name).isDirectory() && pure){
			this.audioPreloads[folder].push(pure);
		}
	}
};

_.preloadAudioFolder = function(folder, variable) {
	let notNone = true;
	const lowVar = variable.toLowerCase();
	if(lowVar === 'all') {
		if(this.isNwjs) {
			this.setAudioAll(folder)
		} else {
			this.makeAllError(folder);
		}
	} else if(lowVar === 'important') {
		this.audioPreloads[folder] = [];
		if(folder === 'bgm') {
			if($dataSystem.titleBgm) this.audioPreloads[folder].push($dataSystem.titleBgm.name);
			if($dataSystem.battleBgm) this.audioPreloads[folder].push($dataSystem.battleBgm.name);
			if($dataSystem.boat) this.audioPreloads[folder].push($dataSystem.boat.name);
			if($dataSystem.ship) this.audioPreloads[folder].push($dataSystem.ship.name);
			if($dataSystem.airship) this.audioPreloads[folder].push($dataSystem.airship.name);
		} else if(folder === 'me') {
			if($dataSystem.victoryMe) this.audioPreloads[folder].push($dataSystem.victoryMe.name);
			if($dataSystem.defeatMe) this.audioPreloads[folder].push($dataSystem.defeatMe.name);
		}
	} else if(variable.match(/custom:\s*([\d\D]*)/i)) {
		const list = String(RegExp.$1).split(/\s*,\s*/);
		this.audioPreloads[folder] = list;
	} else {
		notNone = false;
	}
	if(notNone) {
		this.audioFolders.push(folder);
		this.audioPreloadCount += this.audioPreloads[folder].length;
	}
};

_.setupAudioPreloads = function() {
	this.audioPreloadCount = 0;
	this.preloadAudioFolder('bgm', this.preloadBGM);
	this.preloadAudioFolder('bgs', this.preloadBGS);
	this.preloadAudioFolder('me', this.preloadME);
	this.preloadAudioFolder('se', this.preloadSE);
	this.audioReady = true;
};

//-----------------------------------------------------------------------------
// Take Care of Image Preloading
//-----------------------------------------------------------------------------

_.imagePreloads = {};
_.imageFolders = [];
_.imageReady = false;

_.getImagePath = function() {
	var path = require('path');
	var base = path.dirname(process.mainModule.filename);
	return path.join(base, 'img/');
};

_.setImageAll = function(folder) {
	this.imagePreloads[folder] = [];
	const fs = require('fs');
	const ext = Decrypter.hasEncryptedImages ? '.rpgmvp' : '.png';
	const dir = this.getImagePath() + folder;
	const files = fs.readdirSync(dir);
	for(let i in files){
		const file = files[i];
		const name = dir + '/' + file;
		const pure = this.hasExt(file, ext);
		if (!fs.statSync(name).isDirectory() && pure){
			this.imagePreloads[folder].push(pure);
		}
	}
};

_.preloadImageFolder = function(folder, variable) {
	let notNone = true;
	const lowVar = variable.toLowerCase();
	if(lowVar === 'all') {
		if(this.isNwjs) {
			_.setImageAll(folder)
		} else {
			this.makeAllError(folder);
		}
	} else if(lowVar === 'important') {
		this.imagePreloads[folder] = [];
		if(folder === 'animations') {
			this.imagePreloads[folder] = _.getAnimations();
		} else if(folder === 'characters') {
			this.imagePreloads[folder] = _.getActors();
		} else if(folder === 'faces') {
			this.imagePreloads[folder] = _.getFaces();
		} else if(folder === 'enemies') {
			if(!$dataSystem.optSideView) this.imagePreloads[folder] = _.getEnemies();
		} else if(folder === 'sv_enemies') {
			if($dataSystem.optSideView) this.imagePreloads[folder] = _.getEnemies();
		} else if(folder === 'sv_actors') {
			this.imagePreloads[folder] = _.getSVActors();
		} else if(folder === 'tilesets') {
			this.imagePreloads[folder] = _.getTilesets();
		}
	} else if(variable.match(/custom:\s*(.*)/i)) {
		const list = String(RegExp.$1).split(/\s*,\s*/);
		this.imagePreloads[folder] = list;
	} else {
		notNone = false;
	}
	if(notNone) {
		this.imageFolders.push(folder);
		this.imagePreloadCount += this.imagePreloads[folder].length;
	}
};

_.getAnimations = function() {
	const result = [];
	const keepTrack = [];
	const length = $dataAnimations.length;
	for(let i = 1; i < length; i++) {
		const data = $dataAnimations[i];
		const ani1 = data.animation1Name;
		const anH1 = parseInt(data.animation1Hue);
		const anK1 = ani1 + " " + anH1;
		const ani2 = data.animation2Name;
		const anH2 = parseInt(data.animation2Hue);
		const anK2 = ani2 + " " + anH2;
		if(ani1 && !keepTrack.contains(anK1)) {
			keepTrack.push(anK1);
			result.push([ani1, anH1]);
		}
		if(ani2 && !keepTrack.contains(anK2)) {
			keepTrack.push(anK2);
			result.push([ani2, anH2]);
		}
	}
	return result;
};

_.getActors = function() {
	const result = [];
	const length = $dataActors.length;
	for(let i = 1; i < length; i++) {
		const data = $dataActors[i];
		const name = data.characterName;
		if(name && !result.contains(name)) result.push(name);
	}
	return result;
};

_.getSVActors = function() {
	const result = [];
	const length = $dataActors.length;
	for(let i = 1; i < length; i++) {
		const data = $dataActors[i];
		const name = data.battlerName;
		if(name && !result.contains(name)) result.push(name);
	}
	return result;
};

_.getFaces = function() {
	const result = [];
	const length = $dataActors.length;
	for(let i = 1; i < length; i++) {
		const data = $dataActors[i];
		const name = data.faceName;
		if(name && !result.contains(name)) result.push(name);
	}
	return result;
};

_.getEnemies = function() {
	const result = [];
	const keepTrack = [];
	const length = $dataEnemies.length;
	for(let i = 1; i < length; i++) {
		const data = $dataEnemies[i];
		const name = data.battlerName;
		const hue = parseInt(data.battlerHue);
		const key = name + " " + hue;
		if(name && !keepTrack.contains(key)) {
			keepTrack.push(key);
			result.push([name, hue]);
		}
	}
	return result;
};

_.getTilesets = function() {
	const result = [];
	const length = $dataTilesets.length;
	for(let i = 1; i < length; i++) {
		const data = $dataTilesets[i];
		const names = data.tilesetNames;
		const length2 = names.length;
		for(let j = 0; j < length2; j++) {
			const name = names[j];
			if(name && !result.contains(name)) result.push(name);
		}
	}
	return result;
};

_.setupImagePreloads = function() {
	this.imagePreloadCount = 0;
	this.preloadImageFolder('animations', this.preloadAnimations);
	this.preloadImageFolder('battlebacks1', this.preloadBattlebacks1);
	this.preloadImageFolder('battlebacks2', this.preloadBattlebacks2);
	this.preloadImageFolder('characters', this.preloadCharacters);
	this.preloadImageFolder('enemies', this.preloadEnemies);
	this.preloadImageFolder('faces', this.preloadFaces);
	this.preloadImageFolder('parallaxes', this.preloadParallaxes);
	this.preloadImageFolder('pictures', this.preloadPictures);
	this.preloadImageFolder('sv_actors', this.preloadSV_Actors);
	this.preloadImageFolder('sv_enemies', this.preloadSV_Enemies);
	this.preloadImageFolder('system', this.preloadSystem);
	this.preloadImageFolder('tilesets', this.preloadTilesets);
	this.preloadImageFolder('titles1', this.preloadTitles1);
	this.preloadImageFolder('titles2', this.preloadTitles2);
	for(let i = 0; i < this.customPaths.length; i++) {
		this.preloadImageFolder(this.customPaths[i], this.customImages[i]);
	}
	this.imageReady = true;
};

//-----------------------------------------------------------------------------
// Decrypter
//-----------------------------------------------------------------------------

if(!Decrypter._ignoreList.contains("img/system/Loading.png")) {
	Decrypter._ignoreList.push("img/system/Loading.png");
}

//-----------------------------------------------------------------------------
// Game_Interpreter
//-----------------------------------------------------------------------------

_.Game_Interpreter_pluginCommand = Game_Interpreter.prototype.pluginCommand;
Game_Interpreter.prototype.pluginCommand = function(command, args) {
	_.Game_Interpreter_pluginCommand.apply(this, arguments);
	const com = command.trim().toLowerCase();
	if(com === 'preloadaudio') {
		const folder = String(args[0]).trim().toLowerCase();
		const name = String(args[1]).trim().toLowerCase();
		AudioManager.createBuffer(folder, name);
	} else if(com === 'preloadimage') {
		const folder = String(args[0]).trim().toLowerCase();
		const name = String(args[1]).trim().toLowerCase();
		const hue = (args[2]) ? parseInt(args[2]) : 0;
		const path = "img/" + folder + "/";
		ImageManager.loadBitmap(path, name, hue, true);
	}
};

//-----------------------------------------------------------------------------
// Scene_Boot
//-----------------------------------------------------------------------------

_.Scene_Boot_create = Scene_Boot.prototype.create;
Scene_Boot.prototype.create = function() {
	if(!_.hasPreloaded) {
		_.Scene_Boot_create.apply(this, arguments);
	} else {
		this.loadSystemWindowImage();
	}
};

_.Scene_Boot_start = Scene_Boot.prototype.start;
Scene_Boot.prototype.start = function() {
	if(!_.hasPreloaded) {
		_.setupAudioPreloads();
		_.setupImagePreloads();
		SceneManager.goto(Scene_Preload);
	} else {
		_.Scene_Boot_start.apply(this, arguments);
	}
};

//-----------------------------------------------------------------------------
// Scene_Preload
//-----------------------------------------------------------------------------

Scene_Preload.prototype = Object.create(Scene_Base.prototype);
Scene_Preload.prototype.constructor = Scene_Preload;

Scene_Preload.prototype.initialize = function() {
	Scene_Base.prototype.initialize.call(this);
	this._currentFolder = 0;
	this._preloadType = _.audioFolders[this._currentFolder];
	this._curIndex = 0;
	this._loadIndex = 0;
	this._goalIndex = 0;
	this._mainIndex = 0;
	this._maxIndex = _.audioPreloadCount + _.imagePreloadCount;
	this._phase = 'audio';
	this._audioExt = AudioManager.audioFileExt();
	this._loadListener = function() {
		this._loadIndex++;
	}.bind(this);
};

Scene_Preload.prototype.create = function() {
	Scene_Base.prototype.create.call(this);
	this.createBackground();
	this.createSubtitle();
	ImageManager.clear();
};

Scene_Preload.prototype.createBackground = function() {
	this._background = new Sprite();
	if(_.background.length > 0) {
		this._background.bitmap = _.loadPicture(_.background);
	} else {
		this._background.bitmap = ImageManager.loadSystem('Loading');
	}
	this._background.anchor.x = 0.5;
	this._background.anchor.y = 0.5;
	this._background.x = Graphics.boxWidth / 2;
	this._background.y = Graphics.boxHeight / 2;
	this.addChild(this._background);
};

Scene_Preload.prototype.createSubtitle = function() {
	this._subHeight = Graphics.boxHeight / 6;
	this._subtitle = new Sprite(new Bitmap(Graphics.boxWidth, this._subHeight));
	this._subtitle.y = Graphics.boxHeight * (2/3);
	this._subtitle.bitmap.fontSize = _.fontSize;
	this.addChild(this._subtitle);
};

Scene_Preload.prototype.refreshSubtitle = function() {
	this._mainIndex++;
	this._subtitle.bitmap.clear();
	const rate = (this._mainIndex / this._maxIndex);
	this._subtitle.bitmap.fillRect(0, 0, Graphics.boxWidth, this._subHeight, _.backColor);
	this._subtitle.bitmap.fillRect(0, 0, Graphics.boxWidth * rate, this._subHeight, _.mainColor);
};

Scene_Preload.prototype.isReady = function() {
	return Scene_Base.prototype.isReady.call(this) && _.audioReady && _.imageReady;
};

Scene_Preload.prototype.update = function() {
	Scene_Base.prototype.update.call(this);
	if(_.hasPreloaded) return;
	if(this._phase === 'wait') {
		if(--this._curIndex <= 0) {
			this.gotoBoot();
		}
	} else if(this._loadIndex === this._goalIndex) {
		if(this._phase === 'audio') {
			this.updateAudio();
		} else if(this._phase === 'image') {
			this.updateImage();
		}
	} else if(this._loadIndex > this._goalIndex) {
		this._loadIndex = this._goalIndex;
	}
};

Scene_Preload.prototype.updateAudio = function() {
	const type = this._preloadType;
	const audio = (_.audioPreloads[type]) ? _.audioPreloads[type][this._curIndex] : [];
	if(audio) {
		const buffer = AudioManager.createBuffer(type, audio);
		buffer.addLoadListener(this._loadListener);
		this._goalIndex++;
		this.refreshSubtitle();
		const value = _.format.replace(/%1/, "/audio/" + type + "/" + audio + this._audioExt);
		this._subtitle.bitmap.drawText(value, 0, 0, Graphics.boxWidth, this._subHeight, 'center');
	}
	this._curIndex++;
	if(!_.audioPreloads[type] || this._curIndex >= _.audioPreloads[type].length) {
		this._curIndex = 0;
		this._currentFolder++;
		this._preloadType = _.audioFolders[this._currentFolder];
		if(!this._preloadType) {
			this.gotoImagePhase();
		}
	}
};

Scene_Preload.prototype.updateImage = function() {
	const type = this._preloadType;
	const image = (_.imagePreloads[type]) ? _.imagePreloads[type][this._curIndex] : [];
	if(image) {
		const picture = (typeof image === 'string') ? image : image[0];
		const hue = (typeof image === 'string') ? 0 : image[1];
		const path = "img/" + type + "/";
		const bitmap = ImageManager.loadBitmap(path, picture, hue, true);
		bitmap.addLoadListener(this._loadListener);
		this._goalIndex++;
		this.refreshSubtitle();
		const hueStr = (hue) ? " [" + hue + "H]" : "";
		const value = _.format.replace(/%1/, path + picture + ".png" + hueStr);
		this._subtitle.bitmap.drawText(value, 0, 0, Graphics.boxWidth, this._subHeight, 'center');
	}
	this._curIndex++;
	if(!_.imagePreloads[type] || this._curIndex >= _.imagePreloads[type].length) {
		this._curIndex = 0;
		this._currentFolder++;
		this._preloadType = _.imageFolders[this._currentFolder];
		if(!this._preloadType) {
			this.gotoWaitPhase();
		}
	}
};

Scene_Preload.prototype.gotoImagePhase = function() {
	this._phase = 'image';
	this._currentFolder = 0;
	this._preloadType = _.imageFolders[this._currentFolder];
	this._curIndex = 0;
	this._loadIndex = 0;
	this._goalIndex = 0;
};

Scene_Preload.prototype.gotoWaitPhase = function() {
	this._phase = 'wait';
	this._mainIndex = this._maxIndex;
	this.refreshSubtitle();
	this._subtitle.bitmap.drawText(_.complete, 0, 0, Graphics.boxWidth, this._subHeight, 'center');
	this._curIndex = 30;
};

Scene_Preload.prototype.gotoBoot = function() {
	_.hasPreloaded = true;
	SceneManager.goto(Scene_Boot);
};

if(_.fadeTrans) {

Scene_Preload.prototype.start = function() {
	Scene_Base.prototype.start.call(this);
	this.startFadeIn(24, false);
};

Scene_Preload.prototype.stop = function() {
	Scene_Base.prototype.stop.call(this);
	this.startFadeOut(24, false);
};

}

//-----------------------------------------------------------------------------
// AudioManager
//-----------------------------------------------------------------------------

_.AudioManager_createBuffer = AudioManager.createBuffer;

if(Utils.RPGMAKER_VERSION >= '1.3.0') {

AudioManager.cache = new CacheMap(AudioManager);
AudioManager.createBuffer = function(folder, name) {
	if(_.cacheAudio.contains(folder)) {
		const key = folder + name;
		let buffer = this.cache.getItem(key);
		if(!buffer) {
			var ext = this.audioFileExt();
			var url = this._path + folder + '/' + encodeURIComponent(name) + ext;
			buffer = new WebAudio(url);
			this.cache.setItem(key, buffer);
		}
		return buffer;
	} else {
		return _.AudioManager_createBuffer.apply(this, arguments);
	}
};

} else {

AudioManager._cache = {};
AudioManager.createBuffer = function(folder, name) {
	if(_.cacheAudio.contains(folder)) {
		const key = folder + name;
		let buffer = this._cache[key];
		if(!buffer) {
			var ext = this.audioFileExt();
			var url = this._path + folder + '/' + encodeURIComponent(name) + ext;
			buffer = new WebAudio(url);
			this._cache[key] = buffer;
		}
		return buffer;
	} else {
		return _.AudioManager_createBuffer.apply(this, arguments);
	}
};

}

})(SRD.PreloaderCore);