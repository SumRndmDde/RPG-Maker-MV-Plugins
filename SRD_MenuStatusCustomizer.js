/*:
 * @plugindesc Allows you to have more customization over the Actor Statuses that appear in the main part of the menu.
 * @author SumRndmDde
 *
 * @param == Retain Mode ==
 * @default
 *
 * @param Retain Mode
 * @desc If set to 'true', the menu will retain its usual width, even for width screen resolutions.
 * @default false
 *
 * @param Retain Mode Width
 * @desc The assumed width used for Retain Mode.
 * Default is 816.
 * @default 816
 *
 * @param == Visual Options ==
 * @default
 *
 * @param Command Width
 * @desc The width of the menu's Command Window.
 * Default is 240.
 * @default 240
 *
 * @param Visible Rows
 * @desc The amount of rows in the Menu Status Window.
 * @default 4
 *
 * @param == Status Window ==
 * @default
 *
 * @param Status Info Columns
 * @desc The amount of columns for the info in the Status Window.
 * @default 2
 *
 * @param Status Info Rows
 * @desc The amount of rows for the info in the Status Window.
 * @default 3
 *
 * @param Status Col Padding
 * @desc The amount of padding in between each column.
 * @default 24
 *
 * @param --------------------
 * @default
 *
 * @param Show Name
 * @desc Set this to 'true', and the Name bar will be shown.
 * @default true
 *
 * @param Name Location
 * @desc Where the Name is located in the Actor's Status.
 * Use the format: row x, column y
 * @default row 1, column 1
 *
 * @param --------------------
 * @default
 *
 * @param Show Nickname
 * @desc Set this to 'true', and the Name bar will be shown.
 * @default false
 *
 * @param Nickname Location
 * @desc Where the Name is located in the Actor's Status.
 * Use the format: row x, column y
 * @default row 0, column 0
 *
 * @param --------------------
 * @default
 *
 * @param Show Class
 * @desc Set this to 'true', and the Class bar will be shown.
 * @default true
 *
 * @param Class Location
 * @desc Where the Class is located in the Actor's Status.
 * Use the format: row x, column y
 * @default row 2, column 1
 *
 * @param --------------------
 * @default
 *
 * @param Show Level
 * @desc Set this to 'true', and the Level bar will be shown.
 * @default true
 *
 * @param Level Location
 * @desc Where the Level is located in the Actor's Status.
 * Use the format: row x, column y
 * @default row 3, column 1
 *
 * @param --------------------
 * @default
 *
 * @param Show Icons
 * @desc Set this to 'true', and the Icons bar will be shown.
 * @default true
 *
 * @param Icons Location
 * @desc Where the Icons is located in the Actor's Status.
 * Use the format: row x, column y
 * @default row 1, column 3
 *
 * @param --------------------
 * @default
 *
 * @param Show HP Bar
 * @desc Set this to 'true', and the HP bar will be shown.
 * @default true
 *
 * @param HP Bar Location
 * @desc Where the HP Bar is located in the Actor's Status.
 * Use the format: row x, column y
 * @default row 1, column 2
 *
 * @param --------------------
 * @default
 *
 * @param Show MP Bar
 * @desc Set this to 'true', and the MP bar will be shown.
 * @default true
 *
 * @param MP Bar Location
 * @desc Where the MP Bar is located in the Actor's Status.
 * Use the format: row x, column y
 * @default row 2, column 2
 *
 * @param --------------------
 * @default
 *
 * @param Show TP Bar
 * @desc Set this to 'true', and the TP bar will be shown.
 * @default true
 *
 * @param TP Bar Location
 * @desc Where the TP Bar is located in the Actor's Status.
 * Use the format: row x, column y
 * @default row 3, column 2
 *
 * @param --------------------
 * @default
 *
 * @param Show EXP Bar
 * @desc Set this to 'true', and the EXP bar will be shown.
 * @default true
 *
 * @param EXP Bar Location
 * @desc Where the EXP Bar is located in the Actor's Status.
 * Use the format: row x, column y
 * @default row 3, column 3
 *
 * @param EXP Bar Text
 * @desc The text shown on the EXP bar.
 * @default To Next Level
 *
 * @param EXP Bar Color 1
 * @desc The first color shown on the EXP bar.
 * @default #00ff00
 *
 * @param EXP Bar Color 2
 * @desc The second color shown on the EXP bar.
 * @default #00ff00
  *
 * @param --------------------
 * @default
 *
 * @param Status 1 Eval
 * @desc Input a JavaScript eval to be shown in the Status.
 * Leave blank to not use.
 * @default
 *
 * @param Status 1 Location
 * @desc The location of Status 1.
 * Use the format: row x, column y
 * @default
 *
 * @param Status 1 Codes?
 * @desc If this is set to true, text codes can be used in Evals. 
 * For example: "\\i[30] SumRndmIcon"
 * @default false
 *
 * @param --------------------
 * @default
 *
 * @param Status 2 Eval
 * @desc Input a JavaScript eval to be shown in the Status.
 * Leave blank to not use.
 * @default
 *
 * @param Status 2 Location
 * @desc The location of Status 2.
 * Use the format: row x, column y
 * @default
 *
 * @param Status 2 Codes?
 * @desc If this is set to true, text codes can be used in Evals. 
 * For example: "\\i[30] SumRndmIcon"
 * @default false
 *
 * @param --------------------
 * @default
 *
 * @param Status 3 Eval
 * @desc Input a JavaScript eval to be shown in the Status.
 * Leave blank to not use.
 * @default
 *
 * @param Status 3 Location
 * @desc The location of Status 3.
 * Use the format: row x, column y
 * @default
 *
 * @param Status 3 Codes?
 * @desc If this is set to true, text codes can be used in Evals. 
 * For example: "\\i[30] SumRndmIcon"
 * @default false
 *
 * @param --------------------
 * @default
 *
 * @param Status 4 Eval
 * @desc Input a JavaScript eval to be shown in the Status.
 * Leave blank to not use.
 * @default
 *
 * @param Status 4 Location
 * @desc The location of Status 4.
 * Use the format: row x, column y
 * @default
 *
 * @param Status 4 Codes?
 * @desc If this is set to true, text codes can be used in Evals. 
 * For example: "\\i[30] SumRndmIcon"
 * @default false
 *
 * @param --------------------
 * @default
 *
 * @param Status 5 Eval
 * @desc Input a JavaScript eval to be shown in the Status.
 * Leave blank to not use.
 * @default
 *
 * @param Status 5 Location
 * @desc The location of Status 5.
 * Use the format: row x, column y
 * @default
 *
 * @param Status 5 Codes?
 * @desc If this is set to true, text codes can be used in Evals. 
 * For example: "\\i[30] SumRndmIcon"
 * @default false
 *
 * @param --------------------
 * @default
 *
 * @param Status 6 Eval
 * @desc Input a JavaScript eval to be shown in the Status.
 * Leave blank to not use.
 * @default
 *
 * @param Status 6 Location
 * @desc The location of Status 6.
 * Use the format: row x, column y
 * @default
 *
 * @param Status 6 Codes?
 * @desc If this is set to true, text codes can be used in Evals. 
 * For example: "\\i[30] SumRndmIcon"
 * @default false
 *
 * @param --------------------
 * @default
 *
 * @param Status 7 Eval
 * @desc Input a JavaScript eval to be shown in the Status.
 * Leave blank to not use.
 * @default
 *
 * @param Status 7 Location
 * @desc The location of Status 7.
 * Use the format: row x, column y
 * @default
 *
 * @param Status 7 Codes?
 * @desc If this is set to true, text codes can be used in Evals. 
 * For example: "\\i[30] SumRndmIcon"
 * @default false
 *
 * @param --------------------
 * @default
 *
 * @param Status 8 Eval
 * @desc Input a JavaScript eval to be shown in the Status.
 * Leave blank to not use.
 * @default
 *
 * @param Status 8 Location
 * @desc The location of Status 8.
 * Use the format: row x, column y
 * @default
 *
 * @param Status 8 Codes?
 * @desc If this is set to true, text codes can be used in Evals. 
 * For example: "\\i[30] SumRndmIcon"
 * @default false
 *
 * @param --------------------
 * @default
 *
 * @param Status 9 Eval
 * @desc Input a JavaScript eval to be shown in the Status.
 * Leave blank to not use.
 * @default
 *
 * @param Status 9 Location
 * @desc The location of Status 9.
 * Use the format: row x, column y
 * @default
 *
 * @param Status 9 Codes?
 * @desc If this is set to true, text codes can be used in Evals. 
 * For example: "\\i[30] SumRndmIcon"
 * @default false
 *
 * @param --------------------
 * @default
 *
 * @param Status 10 Eval
 * @desc Input a JavaScript eval to be shown in the Status.
 * Leave blank to not use.
 * @default
 *
 * @param Status 10 Location
 * @desc The location of Status 10.
 * Use the format: row x, column y
 * @default
 *
 * @param Status 10 Codes?
 * @desc If this is set to true, text codes can be used in Evals. 
 * For example: "\\i[30] SumRndmIcon"
 * @default false
 *
 * @help
 *
 * Menu Status Customizer
 * Version 1.10
 * SumRndmDde
 *
 *
 * Allows you to have more customization over the Actor Statuses that appear 
 * in the main part of the menu.
 *
 *
 * ==========================================================================
 *  How it Works
 * ==========================================================================
 *
 * The main purpose of this Plugin is to allow the developer to manipulate 
 * the various pieces of infomation shown on the "Actor Status Window" shown
 * on the menu.
 *
 * The way it works is simple:
 * 
 * Beside each Actor face is a group of information.
 * This information is organized in a grid format; this means there are rows
 * and columns for this grid.
 *
 * This plugin allows you to place pieces of infomation into specific rows and
 * columns of this grid.
 *
 *
 * ==========================================================================
 *  How to Set the Amount of Rows and Columns
 * ==========================================================================
 *
 * The amount of rows and columns that information can be organized into
 * can be set by using the "Status Info Columns" and "Status Info Rows"
 * Parameters.
 *
 *
 * ==========================================================================
 *  How to Organize the Info
 * ==========================================================================
 *
 * In the Parameters, you will find Parameters that say "Show" and "Location".
 *
 * The "Show" Parameters (example: Show Name) allow you to choose whether or
 * not that piece of info is shown in the status. For example, setting 
 * "Show Name" to false will make it so the Actors' names won't appear in the
 * status for the Actors.
 *
 * The "Location" Parameters (example: Name Location) allow you to place each
 * piece of the info into the imaginary grid. In order to do this, the 
 * Parameter must use the format:
 *
 *     row x, column y
 *
 * This will allow you to set the row and column this piece of info will 
 * reside in.
 *
 *
 * ==========================================================================
 *  Custom Statuses
 * ==========================================================================
 *
 * You can customize piece of information to be shown using JavaScript.
 *
 * For example, if you input:
 *
 *     actor.atk
 *
 * within "Status 1 Eval" and set "Status 1 Location" to a specific spot,
 * then the Actor's ATK stat will appear there.
 *
 *
 * ==========================================================================
 *  Custom Statuses for Actors
 * ==========================================================================
 *
 * If you wish for an Actor to have its own Eval for a custom status, use the
 * notetag:
 *
 *   <Status [id] Eval: [code]>
 *
 * Replace "id" with the number of the Status Eval (1 - 10), and replace 
 * "code" with the code you wish to use.
 *
 * The Actor with this in their notetag will use the "code" defined in there
 * as opposed to the code in the Parameters. Keep in mind the Custom Eval
 * must be turned on in the Parameters for it to be seen in game.
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

var Imported = Imported || {};
Imported["SumRndmDde Wide Menu Screen"] = 1.10;

(function() {

"use strict";

var params = PluginManager.parameters('SRD_MenuStatusCustomizer');

var mode = String(params['Retain Mode']).trim().toLowerCase() === 'true';
var modeWidth = parseInt(params['Retain Mode Width']);
var commandWidth = parseInt(params['Command Width']);
var rows = parseInt(params['Visible Rows']);
var statusCols = String(params['Status Info Columns']);
var statusRows = String(params['Status Info Rows']);
var statusPads = String(params['Status Col Padding']);

var showName = String(params['Show Name']).trim().toLowerCase() === 'true';
var locationName = String(params['Name Location']).match(/row\s*(\d+)\s*,\s*column\s*(\d+)/i);
var showNickname = String(params['Show Nickname']).trim().toLowerCase() === 'true';
var locationNickname = String(params['Nickname Location']).match(/row\s*(\d+)\s*,\s*column\s*(\d+)/i);
var showClass = String(params['Show Class']).trim().toLowerCase() === 'true';
var locationClass = String(params['Class Location']).match(/row\s*(\d+)\s*,\s*column\s*(\d+)/i);
var showLevel = String(params['Show Level']).trim().toLowerCase() === 'true';
var locationLevel = String(params['Level Location']).match(/row\s*(\d+)\s*,\s*column\s*(\d+)/i);
var showIcons = String(params['Show Icons']).trim().toLowerCase() === 'true';
var locationIcons = String(params['Icons Location']).match(/row\s*(\d+)\s*,\s*column\s*(\d+)/i);
var showHP = String(params['Show HP Bar']).trim().toLowerCase() === 'true';
var locationHP = String(params['HP Bar Location']).match(/row\s*(\d+)\s*,\s*column\s*(\d+)/i);
var showMP = String(params['Show MP Bar']).trim().toLowerCase() === 'true';
var locationMP = String(params['MP Bar Location']).match(/row\s*(\d+)\s*,\s*column\s*(\d+)/i);
var showTP = String(params['Show TP Bar']).trim().toLowerCase() === 'true';
var locationTP = String(params['TP Bar Location']).match(/row\s*(\d+)\s*,\s*column\s*(\d+)/i);
var showEXP = String(params['Show EXP Bar']).trim().toLowerCase() === 'true';
var locationEXP = String(params['EXP Bar Location']).match(/row\s*(\d+)\s*,\s*column\s*(\d+)/i);

var customEvals = [];
var customLocations = [];
var customCodes = [];
for(var i = 1; i <= 10; i++) {
	var evl = String(params['Status '+i+' Eval']);
	var loc = String(params['Status '+i+' Location']).match(/row\s*(\d+)\s*,\s*column\s*(\d+)/i);
	var cds = String(params['Status '+i+' Codes?']).trim().toLowerCase() === 'true';
	if(evl.trim().length > 0 && loc && cds) {
		customEvals.push(evl);
		customLocations.push(loc);
		customCodes.push(cds);
	}
}

var toNextLevel = String(params['EXP Bar Text']);
var expColor1 = String(params['EXP Bar Color 1']);
var expColor2 = String(params['EXP Bar Color 2']);

var notetagsLoaded = false;
var _DataManager_isDatabaseLoaded = DataManager.isDatabaseLoaded;
DataManager.isDatabaseLoaded = function() {
    if(!_DataManager_isDatabaseLoaded.call(this)) return false;
    if(!notetagsLoaded) {
    	var regex = /<Status\s*(\d+)\s*Eval\s*:\s*(.*)\s*>/i;
    	for(var i = 1; i < $dataActors.length; i++) {
			var notes = $dataActors[i].note.split(/[\r\n]+/);
			for(var j = 0; j < notes.length; j++) {
	    		if(notes[j].match(regex)) {
	    			if(!$dataActors[i].meta._msc_eval) $dataActors[i].meta._msc_eval = [];
	    			var id = parseInt(RegExp.$1);
	    			var code = String(RegExp.$2);
	    			$dataActors[i].meta._msc_eval[id] = code;
	    		}
	    	}
    	}
    	notetagsLoaded = true;
    }
    return true;
};

if(mode) {
var _Scene_Menu_create = Scene_Menu.prototype.create;
Scene_Menu.prototype.create = function() {
	_Scene_Menu_create.call(this);
	var gain = Math.round((Graphics.boxWidth - modeWidth) / 2)
	this._commandWindow.x += gain;
	this._statusWindow.x += gain;
	this._goldWindow.x += gain;
};

Window_MenuStatus.prototype.windowWidth = function() {
	return modeWidth - commandWidth;
};
} else {
Window_MenuStatus.prototype.windowWidth = function() {
	return Graphics.boxWidth - commandWidth;
};
}

Window_MenuCommand.prototype.windowWidth = function() {
	return commandWidth;
};

Window_MenuStatus.prototype.numVisibleRows = function() {
	return rows;
};

Window_MenuStatus.prototype.drawItemStatus = function(index) {
	var actor = $gameParty.members()[index];
	var rect = this.itemRect(index);
	var x = rect.x + 162;
	var y = rect.y + rect.height / 2 - this.lineHeight() * (eval(statusRows) / 2);
	var width = rect.width - x - this.textPadding();
	this.drawActorSimpleStatus(actor, x, y, width);
};

var _Window_MenuStatus_drawActorLevel = Window_MenuStatus.prototype.drawActorLevel;
Window_MenuStatus.prototype.drawActorLevel = function(actor, x, y, width) {
	width = width || 0;
	if(width === 0) {
		_Window_MenuStatus_drawActorLevel.call(this, actor, x, y);
	} else {
		this.changeTextColor(this.systemColor());
		this.drawText(TextManager.levelA, x, y, width);
		this.resetTextColor();
		this.drawText(actor.level, x, y, width, 'right');
	}
};

Window_MenuStatus.prototype.drawActorExp = function(actor, x, y, width) {
	width = width || 186;
	var color1 = expColor1;
	var color2 = expColor2;
	var nre = actor.nextRequiredExp();
	var ce = actor.currentExp() - actor.currentLevelExp();
	this.drawGauge(x, y, width, (ce / nre), color1, color2);
	this.resetTextColor();
	this.drawText(toNextLevel, x, y, width);
};

Window_MenuStatus.prototype.drawActorSimpleStatus = function(actor, x, y, width) {
	var lineHeight = this.lineHeight();
	var aId = actor.actor();
	width = Math.min(this.width, width);
	var cols = eval(statusCols);
	var myWidth = (width / cols) - eval(statusPads);
	var x2 = x + myWidth + eval(statusPads);
	var x3 = x2 + myWidth + eval(statusPads);
	var x4 = x3 + myWidth + eval(statusPads);
	var x5 = x4 + myWidth + eval(statusPads);
	var r = {'0': 0, '1': x, '2': x2, '3': x3, '4': x4, '5': x5};
	var c = {'0': 0, '1': y, '2': y + lineHeight, '3': y + lineHeight * 2, '4': y + lineHeight * 3, '5': y + lineHeight * 4};
	if(showName && Number(locationName[1]) <= eval(statusRows) && Number(locationName[2]) <= cols) this.drawActorName(actor, r[locationName[2]], c[locationName[1]], myWidth);
	if(showNickname && Number(locationNickname[1]) <= eval(statusRows) && Number(locationNickname[2]) <= cols) this.drawActorNickname(actor, r[locationNickname[2]], c[locationNickname[1]], myWidth);
	if(showClass && Number(locationClass[1]) <= eval(statusRows) && Number(locationClass[2]) <= cols) this.drawActorClass(actor, r[locationClass[2]], c[locationClass[1]], myWidth);
	if(showLevel && Number(locationLevel[1]) <= eval(statusRows) && Number(locationLevel[2]) <= cols) this.drawActorLevel(actor, r[locationLevel[2]], c[locationLevel[1]], myWidth);
	if(showHP && Number(locationHP[1]) <= eval(statusRows) && Number(locationHP[2]) <= cols) this.drawActorHp(actor, r[locationHP[2]], c[locationHP[1]], myWidth);
	if(showMP && Number(locationMP[1]) <= eval(statusRows) && Number(locationMP[2]) <= cols) this.drawActorMp(actor, r[locationMP[2]], c[locationMP[1]], myWidth);
	if(showTP && Number(locationTP[1]) <= eval(statusRows) && Number(locationTP[2]) <= cols) this.drawActorTp(actor, r[locationTP[2]], c[locationTP[1]], myWidth);
	if(showIcons && Number(locationIcons[1]) <= eval(statusRows) && Number(locationIcons[2]) <= cols) this.drawActorIcons(actor, r[locationIcons[2]], c[locationIcons[1]], myWidth);
	if(showEXP && Number(locationEXP[1]) <= eval(statusRows) && Number(locationEXP[2]) <= cols) this.drawActorExp(actor, r[locationEXP[2]], c[locationEXP[1]], myWidth);
	for(var i = 0; i < customEvals.length; i++) {
		if(Number(customLocations[i][1]) <= eval(statusRows) && Number(customLocations[i][2]) <= cols) {
			var code = customEvals[i];
			if(aId.meta._msc_eval && aId.meta._msc_eval[i+1]) {
				code = aId.meta._msc_eval[i+1];
			}
			if(customCodes[i]) {
				this.drawTextEx(eval(code), r[customLocations[i][2]], c[customLocations[i][1]]);
			} else {
				this.drawText(eval(code), r[customLocations[i][2]], c[customLocations[i][1]], myWidth, 'left');
			}
		}
	}
};

})();