/*:
 * @plugindesc Allows Actors to have their sprites and images dynamically change based on their Class and Equips.
 * @author SumRndmDde
 *
 * @help
 *
 * Dynamic Actors
 * Version 1.03
 * SumRndmDde
 *
 *
 * This plugin requires the Character Creator plugin:
 * http://sumrndm.site/character-creator/
 *
 *
 * This plugin allows Actors to have their sprites and images dynamically 
 * change based on the Class, Weapon, or Armors that the Actor has equipped.
 *
 *
 * ==========================================================================
 *  Class, Weapon, and Armor notetags
 * ==========================================================================
 *
 * If you wish for a specific character creator piece to be used on an Actor 
 * when they have a Class, Weapon, or Armor equipped, use the following
 * notetag in the Class's, Weapon's, or Armor's notebox:
 *
 *   <Force [section] Piece: [file-name]>
 *
 * For example, if you wished to use the "Clothing (5)" file from the 
 * "Clothing" section, you would use the following notetag:
 *
 *   <Force Clothing Piece: Clothing (5)>
 *
 *
 * ==========================================================================
 *  Forcing a Specific Hue
 * ==========================================================================
 *
 * You can also set a specific hue to be used with the piece:
 *
 *   <Force [section] Piece: [file-name], [hue]>
 *
 * For example:
 *
 *   <Force Clothing Piece: Clothing (5), 200>
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
 *
 */

var SRD = SRD || {};
SRD.DynamicActors = SRD.DynamicActors || {};

var Imported = Imported || {};
Imported["SumRndmDde Dynamic Actors"] = 1.03;

(function(_, $) {

"use strict";

var params = PluginManager.parameters('SRD_DynamicActors');

_.loadNotetags = function(data) {
	var regex = /<\s*Force\s*(.*)\s*Piece\s*:\s*(.*)\s*>/i;
	var regex2 = /<\s*Force\s*(.*)\s*Piece\s*:\s*(.*)\s*,\s*(\d+)\s*>/i;
	for(var i = 1; i < data.length; i++) {
		var notes = data[i].note.split(/[\r\n]+/);
		for(var j = 0; j < notes.length; j++) {
			var line = notes[j];
			if(line.match(regex2)) {
				if(!data[i].meta._dc_pieces) data[i].meta._dc_pieces = {};
				var section = String(RegExp.$1).trim();
				var file = String(RegExp.$2).trim();
				var hue = parseInt(RegExp.$3);
				data[i].meta._dc_pieces[section] = {
					file: file,
					hue: hue
				};
				_.preloadSectionAndFile(section, file, hue);
			} else if(line.match(regex)) {
				if(!data[i].meta._dc_pieces) data[i].meta._dc_pieces = {};
				var section = String(RegExp.$1).trim();
				var file = String(RegExp.$2).trim();
				data[i].meta._dc_pieces[section] = {
					file: file,
					hue: 0
				};
				_.preloadSectionAndFile(section, file, 0);
			}
		}
	}
};

_.preloadSectionAndFile = function(section, file, hue) {
	if(_.partCounts[section] > 1) {
		for(var i = 1; i < _.partCounts[section]; i++) {
			ImageManager.loadBitmap(_.charPath + section + ' Part' + i + '/', file, hue);
			ImageManager.loadBitmap(_.deadPath + section + ' Part' + i + '/', file, hue);
			ImageManager.loadBitmap(_.svPath + section + ' Part' + i + '/', file, hue);
			ImageManager.loadBitmap(_.facePath + section + ' Part' + i + '/', file, hue);
		}
	} else {
		ImageManager.loadBitmap(_.charPath + section + '/', file, hue);
		ImageManager.loadBitmap(_.deadPath + section + '/', file, hue);
		ImageManager.loadBitmap(_.svPath + section + '/', file, hue);
		ImageManager.loadBitmap(_.facePath + section + '/', file, hue);
	}
};

_.partCounts = {};
_.setupPartCount = function() {
	var folders = $.getFolderList();
	for(var i = 0; i < folders.length; i++) {
		if(folders[i]) {
			var fold = folders[i];
			if(fold.match(/Part(\d+)/)) {
				var id = parseInt(RegExp.$1);
				var fold2 = fold.replace(/\s*Part\d+\s*/, '');
				if(!_.partCounts[fold2] || id > _.partCounts[fold2]) {
					_.partCounts[fold2] = id;
				}
			} else {
				_.partCounts[fold] = 1;
			}
		}
	}
};

_.setupFilePaths = function() {
	_.charPath = $.filePath;
	_.deadPath = $.filePathDead;
	_.svPath = $.filePathSv;
	_.facePath = $.filePathFace;
};

var notetagsLoaded = false;
var _DataManager_isDatabaseLoaded = DataManager.isDatabaseLoaded;
DataManager.isDatabaseLoaded = function() {
	if(!_DataManager_isDatabaseLoaded.apply(this, arguments)) return false;
	if(!notetagsLoaded) {
		if(!Imported["SumRndmDde Character Creator"]) {
			alert("Please install 'SRD_CharacterCreator' in order to use 'SRD_DynamicCharacters'.");
			window.close();
		}
		_.setupFilePaths();
		_.setupPartCount();
		_.loadNotetags($dataClasses);
		_.loadNotetags($dataWeapons);
		_.loadNotetags($dataArmors);
		notetagsLoaded = true;
	}
	return true;
};

var _Game_CharacterCreations_getInfo = Game_CharacterCreations.prototype.getInfo;
Game_CharacterCreations.prototype.getInfo = function(id, type) {
	var result = _Game_CharacterCreations_getInfo.apply(this, arguments);
	var result2 = $gameActors.actor(id).getDynamicInfo(result, type);
	return result2;
};

Game_Actor.prototype.getDynamicInfo = function(original, type) {
	var info;
	if(original) {
		info = JsonEx.makeDeepCopy(original);
	} else {
		info = {};
	}
	var classes = this.currentClass();
	var equips = this.equips();

	//Class
	if(classes && classes.meta._dc_pieces) {
		for(var prop in classes.meta._dc_pieces) {
			if(classes.meta._dc_pieces.hasOwnProperty(prop)) {
				if(_.partCounts[prop] > 1) {
					for(var i = 1; i < _.partCounts[prop]; i++) {
						if(!info[String(prop) + " Part" + i] || !info[String(prop) + " Part" + i].path) {
							info[String(prop) + " Part" + i] = {};
							if(type === 'dead') {
								info[String(prop) + " Part" + i].path = _.deadPath + prop + ' Part' + i + '/';
							} else if(type === 'sv') {
								info[String(prop) + " Part" + i].path = _.svPath + prop + ' Part' + i + '/';
							} else if(type === 'face') {
								info[String(prop) + " Part" + i].path = _.facePath + prop + ' Part' + i + '/';
							} else {
								info[String(prop) + " Part" + i].path = _.charPath + prop + ' Part' + i + '/';
							}
						}
						info[String(prop) + " Part" + i].file = classes.meta._dc_pieces[prop].file;
						info[String(prop) + " Part" + i].hue = classes.meta._dc_pieces[prop].hue;
					}
				} else {
					if(!info[prop] || !info[prop].path) {
						info[prop] = {};
						if(type === 'dead') {
							info[prop].path = _.deadPath + prop + '/';
						} else if(type === 'sv') {
							info[prop].path = _.svPath + prop + '/';
						} else if(type === 'face') {
							info[prop].path = _.facePath + prop + '/';
						} else {
							info[prop].path = _.charPath + prop + '/';
						}
					}
					info[prop].file = classes.meta._dc_pieces[prop].file;
					info[prop].hue = classes.meta._dc_pieces[prop].hue;
				}
			}
		}
	}

	//Equips
	for(var i = 0; i < equips.length; i++) {
		if(equips[i] && equips[i].meta._dc_pieces) {
			for(var prop in equips[i].meta._dc_pieces) {
				if(equips[i].meta._dc_pieces.hasOwnProperty(prop)) {
					if(_.partCounts[prop] > 1) {
						for(var j = 1; j < _.partCounts[prop]; j++) {
							if(!info[String(prop) + " Part" + j] || !info[String(prop) + " Part" + j].path) {
								info[String(prop) + " Part" + j] = {};
								if(type === 'dead') {
									info[String(prop) + " Part" + j].path = _.deadPath + prop + ' Part' + j + '/';
								} else if(type === 'sv') {
									info[String(prop) + " Part" + j].path = _.svPath + prop + ' Part' + j + '/';
								} else if(type === 'face') {
									info[String(prop) + " Part" + j].path = _.facePath + prop + ' Part' + j + '/';
								} else {
									info[String(prop) + " Part" + j].path = _.charPath + prop + ' Part' + j + '/';
								}
							}
							info[String(prop) + " Part" + j].file = equips[i].meta._dc_pieces[prop].file;
							info[String(prop) + " Part" + j].hue = equips[i].meta._dc_pieces[prop].hue;
						}
					} else {
						if(!info[prop] || !info[prop].path) {
							info[prop] = {};
							if(type === 'dead') {
								info[prop].path = _.deadPath + prop + '/';
							} else if(type === 'sv') {
								info[prop].path = _.svPath + prop + '/';
							} else if(type === 'face') {
								info[prop].path = _.facePath + prop + '/';
							} else {
								info[prop].path = _.charPath + prop + '/';
							}
						}
						info[prop].file = equips[i].meta._dc_pieces[prop].file;
						info[prop].hue = equips[i].meta._dc_pieces[prop].hue;
					}
				}
			}
		}
	}

	return info;
};

})(SRD.DynamicActors, SRD.CharacterCreator);