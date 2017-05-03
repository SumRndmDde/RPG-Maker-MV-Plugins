/*:
 * @plugindesc (PART 1) Gives control over the information provided within the Battle Status windows for each Actor.
 * @author SumRndmDde
 *
 * @param Default Parts Used
 * @desc A list of all the parts Actors use by default. 
 * Separate each with a comma.
 * @default Face, Icon, Text 1, Gauge 1, Gauge 2, Gauge 3
 *
 * @param Active Updating
 * @desc If 'true', information will be constantly checked to be updated. This may slow down your battles, but required for active systems.
 * @default false
 *
 * @param == Actor Window ==
 * @default
 *
 * @param Actor Window Width
 * @desc The width of the Actor's individual window.
 * Input a Number or JavaScript code.
 * @default this._statusWindow.width / 4
 *
 * @param Actor Window Height
 * @desc The height of the Actor's individual window.
 * Input a Number or JavaScript code.
 * @default 180
 *
 * @param Actor Window Ori. X
 * @desc The formula for the X position of the first window.
 * @default this._statusWindow.x
 *
 * @param Actor Window Ori. Y
 * @desc The formula for the Y position of the first window.
 * @default this._statusWindow.y
 *
 * @param Actor Window X
 * @desc The formula for the X position of each succeeding window.
 * Use "prev" to reference the previous window.
 * @default prev._mainX + prev.width
 *
 * @param Actor Window Y
 * @desc The formula for the Y position of each succeeding window.
 * Use "prev" to reference the previous window.
 * @default prev._mainY
 *
 * @param Actor Default Opacity
 * @desc The default opacity used by the Actor windows.
 * Input a Number or JavaScript code.
 * @default 255
 *
 * @param Actor Default Tone
 * @desc The default tone used by the Actor windows.
 * Input a Number or JavaScript code.
 * @default $gameSystem.windowTone()
 *
 * @param == Face Options ==
 * @default
 *
 * @param Face Position
 * @desc The position in the Actor's "section" the face appears.
 * Use the format:  [X Position] | [Y Position]
 * @default (boxWidth - 144) / 2 | 0
 *
 * @param Face Size
 * @desc The width and height the face image will be stretched to.
 * Use the format:  [Width] | [Height]
 * @default 144 | 144
 *
 * @param == Icon Options ==
 * @default
 *
 * @param Icon Position
 * @desc The position in the Actor's "section" the State icons appear.
 * Use the format:  [X Position] | [Y Position]
 * @default 0 | 32
 *
 * @param Icon Width
 * @desc The width used for the icons.
 * @default boxWidth
 *
 * @param Icon Scale
 * @desc The scale of the Icons.
 * @default 1
 *
 * @param == Status Window ==
 * @default
 *
 * @param Status Visible
 * @desc If 'true', the Status Window will be visible.
 * @default false
 *
 * @param Status Rows
 * @desc Set this to the amount of rows the Actor select to use. Base it off of the rows set up through the Actor windows.
 * @default 1
 *
 * @param Status Cols
 * @desc Set this to the amount of columns the Actor select to use. Base it off of the columns set up through the Actor windows.
 * @default 4
 *
 * @param == Input Motion ==
 * @default
 *
 * @param Input Highlight
 * @desc If 'true', then the window will be highlighted along with the input motion.
 * @default false
 *
 * @param Input X Speed
 * @desc The X speed the Actor window moves when highlighted for input.
 * @default 0
 *
 * @param Input X Max
 * @desc The maximum X distance the window moves for the input motion.
 * @default 0
 *
 * @param Input Y Speed
 * @desc The Y speed the Actor window moves when highlighted for input.
 * @default -4
 *
 * @param Input Y Max
 * @desc The maximum Y distance the window moves for the input motion.
 * @default -30
 *
 * @param == Select Motion ==
 * @default
 *
 * @param Select Highlight
 * @desc If 'true', then the window will be highlighted along with the select motion.
 * @default true
 *
 * @param Select X Speed
 * @desc The X speed the Actor window moves when highlighted for selection.
 * @default 0
 *
 * @param Select X Max
 * @desc The maximum X distance the window moves for the select motion.
 * @default 0
 *
 * @param Select Y Speed
 * @desc The Y speed the Actor window moves when highlighted for selection.
 * @default 0
 *
 * @param Select Y Max
 * @desc The maximum Y distance the window moves for the select motion.
 * @default 0
 *
 * @param == Text 1 ==
 * @default
 *
 * @param Text 1 Value
 * @desc The JavaScript evaluation to determine the value shown.
 * @default actor.name()
 *
 * @param Text 1 Position
 * @desc The position of the text within the Actor's "section".
 * Use the format:  [X Position] | [Y Position]
 * @default 0 | 0
 *
 * @param Text 1 Width
 * @desc The width of the text box.
 * @default boxWidth
 *
 * @param Text 1 Size
 * @desc The font size of the text.
 * @default 18
 *
 * @param Text 1 Align
 * @desc The alignment of the text within the box.
 * @default center
 *
 * @param == Text 2 ==
 * @default
 *
 * @param Text 2 Value
 * @desc The JavaScript evaluation to determine the value shown.
 * @default
 *
 * @param Text 2 Position
 * @desc The position of the text within the Actor's "section".
 * Use the format:  [X Position] | [Y Position]
 * @default
 *
 * @param Text 2 Width
 * @desc The width of the text box.
 * @default
 *
 * @param Text 2 Size
 * @desc The font size of the text.
 * @default
 *
 * @param Text 2 Align
 * @desc The alignment of the text within the box.
 * @default
 *
 * @param == Text 3 ==
 * @default
 *
 * @param Text 3 Value
 * @desc The JavaScript evaluation to determine the value shown.
 * @default
 *
 * @param Text 3 Position
 * @desc The position of the text within the Actor's "section".
 * Use the format:  [X Position] | [Y Position]
 * @default
 *
 * @param Text 3 Width
 * @desc The width of the text box.
 * @default
 *
 * @param Text 3 Size
 * @desc The font size of the text.
 * @default
 *
 * @param Text 3 Align
 * @desc The alignment of the text within the box.
 * @default
 *
 * @param == Text 4 ==
 * @default
 *
 * @param Text 4 Value
 * @desc The JavaScript evaluation to determine the value shown.
 * @default
 *
 * @param Text 4 Position
 * @desc The position of the text within the Actor's "section".
 * Use the format:  [X Position] | [Y Position]
 * @default
 *
 * @param Text 4 Width
 * @desc The width of the text box.
 * @default
 *
 * @param Text 4 Size
 * @desc The font size of the text.
 * @default
 *
 * @param Text 4 Align
 * @desc The alignment of the text within the box.
 * @default
 *
 * @param == Text 5 ==
 * @default
 *
 * @param Text 5 Value
 * @desc The JavaScript evaluation to determine the value shown.
 * @default
 *
 * @param Text 5 Position
 * @desc The position of the text within the Actor's "section".
 * Use the format:  [X Position] | [Y Position]
 * @default
 *
 * @param Text 5 Width
 * @desc The width of the text box.
 * @default
 *
 * @param Text 5 Size
 * @desc The font size of the text.
 * @default
 *
 * @param Text 5 Align
 * @desc The alignment of the text within the box.
 * @default
 *
 * @help
 *
 * Battle Status Customizer
 * Version 1.06
 * SumRndmDde
 *
 *
 * This plugin gives developers control over the information provided within 
 * the Battle Status windows for each Actor.
 *
 * This plugin requires that you have both PARTS 1 and 2!
 * Be sure you have them installed!
 *
 *
 * ==========================================================================
 *  Part System
 * ==========================================================================
 *
 * Within this plugin, each Actor is given it's own window. These windows
 * act as the Actor's small section for information.
 *
 * In order to customize which pieces appear within the Actor's section,
 * one can use the "Default Parts Used". However, if one wants to specify
 * the parts used, they can use the following notetag:
 *
 *   <Battle Status Parts: parts>
 *
 * For example:
 *
 *   <Battle Status Parts: Face, Icons, Text 1, Text 2, Gauge 1, Gauge 2>
 *
 *
 * All the parts that are available are:
 *
 *
 *   Face
 *
 * Shows the Actor's face.
 *
 *
 *   Icons
 *
 * Shows the State Icons for an Actor.
 *
 *
 *   Text [num]
 *
 * Shows a text defined in the Parameters.
 *
 *
 *   Gauge [num]
 *
 * Shows a text defined in the Parameters. 
 *
 *
 * ==========================================================================
 *  Actors Notetags
 * ==========================================================================
 *
 * In order to specifically customize the window tone for an Actor's window,
 * use the following notetag:
 *
 *   <Battle Status Window Tone: red, green, blue>
 *
 * For example:
 *
 *   <Battle Status Window Tone: 100, -50, 0>
 *
 * ==========================================================================
 *
 * In order to customize the window skin used for an Actor's window, use
 * the following notetag:
 *
 *   <Battle Status Window Skin: filename>
 *
 * Determines a special window skin to use for the Actor's window.
 *
 *   <Battle Status Window Skin: Window2>
 *
 * ==========================================================================
 *
 * In order to customize the opacity of the Actor's window, use the following
 * notetag:
 *
 *   <Battle Status Window Opacity: opacity>
 *
 * For example:
 *
 *   <Battle Status Window Opacity: 192>
 *
 *
 * ==========================================================================
 *  Plugin Command
 * ==========================================================================
 *
 * If you wish to change an Actor's part list, use this plugin command:
 *
 *   SetBattleStatusParts [actorId] [partList]
 *
 * For example:
 *
 *   SetBattleStatusParts 2 Face, Icons, Text 1, Text 2, Gauge 1, Gauge 2
 *
 *
 * ==========================================================================
 *  Absorption Barrier
 * ==========================================================================
 *
 * If you're using Yanfly's Absorption Barrier, and you wish to create an
 * HP bar with it, simply input:
 *
 *   <Draw Absorption Barrier>
 *
 * within the "Text" input for a gauge.
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
SRD.BattleStatusCustomizer = SRD.BattleStatusCustomizer || {};

var Imported = Imported || {};
Imported["SumRndmDde Battle Status Customizer"] = 1.06;

function Window_BattleStatusUpgrade() {
	this.initialize.apply(this, arguments);
}

(function(_) {

"use strict";

//-----------------------------------------------------------------------------
// Check for Part 2
//-----------------------------------------------------------------------------

{
let hasPart2 = false;
$plugins.forEach(function(plugin) {
	if(plugin.name === 'SRD_BattleStatusCustomizer_Part2') {
		hasPart2 = true;
	}
}, this);

if(!hasPart2) {
	alert('Please install "SRD_BattleStatusCustomizer_Part2".');
	window.close();
}
}

//-----------------------------------------------------------------------------
// SRD.BattleStatusCustomizer
//-----------------------------------------------------------------------------

const params = PluginManager.parameters('SRD_BattleStatusCustomizer');
const params2 = PluginManager.parameters('SRD_BattleStatusCustomizer_Part2');

_.defaultParts = String(params['Default Parts Used']).split(/\s*,\s*/);
_.activeUpdating = String(params['Active Updating']).trim().toLowerCase() === 'true';

_.width = String(params['Actor Window Width']);
_.height = String(params['Actor Window Height']);
_.oriX = String(params['Actor Window Ori. X']);
_.oriY = String(params['Actor Window Ori. Y']);
_.sectionX = String(params['Actor Window X']);
_.sectionY = String(params['Actor Window Y']);
_.sectionOpacity = String(params['Actor Default Opacity']);
_.sectionTone = String(params['Actor Default Tone']);

{
const faceMatches = String(params['Face Position']).match(/(.*)\s*\|\s*(.*)/);
_.faceX = faceMatches[1];
_.faceY = faceMatches[2];

const faceSizes = String(params['Face Size']).match(/(.*)\s*\|\s*(.*)/);
_.faceWidth = faceSizes[1];
_.faceHeight = faceSizes[2];

const iconPos = String(params['Icon Position']).match(/(.*)\s*\|\s*(.*)/);
_.iconX = iconPos[1];
_.iconY = iconPos[2];
_.iconWidth = String(params['Icon Width']);
_.iconScale = String(params['Icon Scale']);
}

_.statusVisible = String(params['Status Visible']).trim().toLowerCase() === 'true';
_.statusRows = parseInt(params['Status Rows']);
_.statusCols = parseInt(params['Status Cols']);

_.inputHigh = String(params['Input Highlight']).trim().toLowerCase() === 'true';
_.inputX = String(params['Input X Speed']);
_.inputXMax = String(params['Input X Max']);
_.inputY = String(params['Input Y Speed']);
_.inputYMax = String(params['Input Y Max']);

_.selectHigh = String(params['Select Highlight']).trim().toLowerCase() === 'true';
_.selectX = String(params['Select X Speed']);
_.selectXMax = String(params['Select X Max']);
_.selectY = String(params['Select Y Speed']);
_.selectYMax = String(params['Select Y Max']);

_.texts = [];
for(let i = 1; i <= 5; i++) {
	const val = String(params['Text ' + i + ' Value']);
	const pos = String(params['Text ' + i + ' Position']);
	const wid = String(params['Text ' + i + ' Width']);
	const size = String(params['Text ' + i + ' Size']);
	const align = String(params['Text ' + i + ' Align']);
	if(val.length > 0 && pos.length > 0) {
		_.texts[i] = {};
		const positions = pos.match(/(.*)\s*\|\s*(.*)/);
		_.texts[i].value = val;
		_.texts[i].x = positions[1];
		_.texts[i].y = positions[2];
		_.texts[i].width = wid;
		_.texts[i].size = size;
		_.texts[i].align = align;
	}
}

_.gaugeX = String(params2['Gauge X Offset']);
_.gaugeY = String(params2['Gauge Y Offset']);
_.gaugeTextX = String(params2['Text X Pos']);
_.gaugeTextY = String(params2['Text Y Pos']);
_.gaugeFont = String(params2['Gauge Font']);
_.gaugeFontSize = String(params2['Gauge Font Size']);
_.gaugeItalic = String(params2['Gauge Italic']).trim().toLowerCase() === 'true';
_.gaugeTextColor = String(params2['Gauge Text Color']);
_.gaugeOutlineColor = String(params2['Gauge Outline Color']);
_.gaugeOutlineWidth = parseInt(params2['Gauge Outline Width']);

_.gauges = [];
for(let i = 1; i <= 50; i++) {
	const text = String(params2['Gauge ' + i + ' Text']);
	const cur = String(params2['Gauge ' + i + ' Current']);
	const max = String(params2['Gauge ' + i + ' Max']);
	const pos = String(params2['Gauge ' + i + ' Position']);
	const size = String(params2['Gauge ' + i + ' Size']);
	const color = String(params2['Gauge ' + i + ' Colors']);
	const back = String(params2['Gauge ' + i + ' Back Color']);
	const cm = String(params2['Gauge ' + i + ' Draw C/M']).trim().toLowerCase() === 'true';
	if(cur.length > 0 && max.length > 0) {
		_.gauges[i] = {};
		const positions = pos.match(/(.*)\s*\|\s*(.*)/);
		const sizes = size.match(/(.*)\s*\|\s*(.*)/);
		const colors = color.match(/(.*)\s*\|\s*(.*)/);
		_.gauges[i].text = text;
		_.gauges[i].cur = cur;
		_.gauges[i].max = max;
		_.gauges[i].x = positions[1];
		_.gauges[i].y = positions[2];
		_.gauges[i].width = sizes[1];
		_.gauges[i].height = sizes[2];
		_.gauges[i].color1 = colors[1];
		_.gauges[i].color2 = colors[2];
		_.gauges[i].back = back;
		_.gauges[i].cm = cm;
		if(Imported.YEP_AbsorptionBarrier && text.match(/<Draw\s*Absorption\s*Barrier>/)) {
			_.gauges[i].absorb = true;
		}
	}
}

_.loadNotetags = function() {
	const tone = /<\s*Battle\s*Status\s*Window\s*Tone\s*:\s*(.*)\s*>/im;
	const skin = /<\s*Battle\s*Status\s*Window\s*Skin\s*:\s*(.*)\s*>/im;
	const opac = /<\s*Battle\s*Status\s*Window\s*Opacity\s*:\s*(.*)\s*>/im;
	const part = /<\s*Battle\s*Status\s*Parts\s*:\s*(.*)\s*>/im;
	for(let i = 1; i < $dataActors.length; i++) {
		const actor = $dataActors[i];
		if(actor) {
			if(actor.note.match(tone)) {
				actor._bsc_tone = eval(`[${String(RegExp.$1)}]`);
			}
			if(actor.note.match(skin)) {
				actor._bsc_skin = String(RegExp.$1);
			}
			if(actor.note.match(opac)) {
				actor._bsc_opacity = String(RegExp.$1);
			}
			if(actor.note.match(part)) {
				actor._bsc_parts = String(RegExp.$1).split(/\s*,\s*/);
			} else {
				actor._bsc_parts = _.defaultParts.clone();
			}
		}
	}
};

//-----------------------------------------------------------------------------
// DataManager
//-----------------------------------------------------------------------------

let notetagsLoaded = false;
const _DataManager_isDatabaseLoaded = DataManager.isDatabaseLoaded;
DataManager.isDatabaseLoaded = function() {
	if(!_DataManager_isDatabaseLoaded.apply(this, arguments)) return false;
	if(!notetagsLoaded) {
		_.loadNotetags();
		notetagsLoaded = true;
	}
	return true;
};

//-----------------------------------------------------------------------------
// BattleManager
//-----------------------------------------------------------------------------

const _BattleManager_initMembers = BattleManager.initMembers;
BattleManager.initMembers = function() {
	_BattleManager_initMembers.apply(this, arguments);
	this._statusWindows = [];
	this.battleScene = SceneManager._scene;
};

BattleManager.setStatusWindows = function(statusWindows) {
	this._statusWindows = statusWindows;
};

const _BattleManager_refreshStatus = BattleManager.refreshStatus;
BattleManager.refreshStatus = function() {
	_BattleManager_refreshStatus.apply(this, arguments);
	this._statusWindows.forEach(function(window) {
		window.refresh();
	});
};

//-----------------------------------------------------------------------------
// Game_System
//-----------------------------------------------------------------------------

const _Game_System_initialize = Game_System.prototype.initialize;
Game_System.prototype.initialize = function() {
	_Game_System_initialize.apply(this, arguments);
	this.customBattleStatusParts = [];
};

//-----------------------------------------------------------------------------
// Game_Actor
//-----------------------------------------------------------------------------

Game_Actor.prototype.getCustomBattleStatusParts = function() {
	if(!$gameSystem.customBattleStatusParts[this.actorId()]) {
		return this.actor()._bsc_parts;
	}
	return $gameSystem.customBattleStatusParts[this.actorId()];
};

//-----------------------------------------------------------------------------
// Game_Interpreter
//-----------------------------------------------------------------------------

const _Game_Interpreter_pluginCommand = Game_Interpreter.prototype.pluginCommand;
Game_Interpreter.prototype.pluginCommand = function(command, args) {
	_Game_Interpreter_pluginCommand.apply(this, arguments);
	if(command.trim().toLowerCase() === 'setbattlestatusparts') {
		const actorId = parseInt(args[0])
		const result = '';
		for(let i = 1; i < args.length; i++) {
			result += args[i] + ' ';
		}
		const parts = result.split(/\s*,\s*/);
		$gameSystem.customBattleStatusParts[actorId] = parts;
	}
};

//-----------------------------------------------------------------------------
// Scene_Battle
//-----------------------------------------------------------------------------

const _Scene_Battle_initialize = Scene_Battle.prototype.initialize;
Scene_Battle.prototype.initialize = function() {
    _Scene_Battle_initialize.apply(this, arguments);
    this._statusBattleMembers = $gameParty.battleMembers().length;
};

const _Scene_Battle_createDisplayObjects = Scene_Battle.prototype.createDisplayObjects;
Scene_Battle.prototype.createDisplayObjects = function() {
	_Scene_Battle_createDisplayObjects.apply(this, arguments);
	BattleManager.battleScene = this;
	BattleManager.setStatusWindows(this._statusWindows);
};

const _Scene_Battle_update = Scene_Battle.prototype.update;
Scene_Battle.prototype.update = function() {
	_Scene_Battle_update.apply(this, arguments);
	this._statusWindow.update();
	if(this._statusBattleMembers !== $gameParty.battleMembers().length) {
		this.createStatusWindow();
	}
};

const _Scene_Battle_createStatusWindow = Scene_Battle.prototype.createStatusWindow;
Scene_Battle.prototype.createStatusWindow = function() {
	_Scene_Battle_createStatusWindow.apply(this, arguments);
	if(!_.statusVisible) this._windowLayer.removeChild(this._statusWindow);
	if(this._statusWindows) {
		this._statusWindows.forEach(function(window) {
			this._windowLayer.removeChild(window);
		}, this);
	}
	this._statusWindows = [];
	let index = 0;
	let previousWindow = this._statusWindow;
	let isMaster = true;
	$gameParty.battleMembers().forEach(function(member) {
		const window = new Window_BattleStatusUpgrade(member, index++, previousWindow, this._statusWindow, isMaster);
		previousWindow = window;
		isMaster = false;
		this._statusWindows.push(window);
		this.addWindow(window);
		window.open();
	}, this);
	this._statusBattleMembers = $gameParty.battleMembers().length;
};

const _Scene_Battle_selectActorSelection = Scene_Battle.prototype.selectActorSelection;
Scene_Battle.prototype.selectActorSelection = function() {
	_Scene_Battle_selectActorSelection.apply(this, arguments);
	BattleManager._actorSelectOn = true;
};

const _Scene_Battle_onActorCancel = Scene_Battle.prototype.onActorCancel;
Scene_Battle.prototype.onActorCancel = function() {
	_Scene_Battle_onActorCancel.apply(this, arguments);
	BattleManager._actorSelectOn = false;
};

//-----------------------------------------------------------------------------
// Window_BattleStatus
//-----------------------------------------------------------------------------

Window_BattleStatus.prototype.numVisibleRows = function() {
	return _.statusRows;
};

Window_BattleStatus.prototype.maxCols = function() {
	return _.statusCols;
};

Window_BattleStatus.prototype.itemHeight = function() {
	return this.contentsHeight();
};

Window_BattleStatus.prototype.windowHeight = function() {
	return eval(_.height) * this.numVisibleRows();
};

Window_BattleStatus.prototype.drawGauge = function() {};

Window_BattleStatus.prototype.drawActorHp = function() {};
Window_BattleStatus.prototype.drawActorMp = function() {};
Window_BattleStatus.prototype.drawActorTp = function() {};

Window_BattleStatus.prototype.refresh = function() {};
Window_BattleStatus.prototype._refreshCursor = function() {};
Window_BattleStatus.prototype._refreshArrows = function() {};

//-----------------------------------------------------------------------------
// Window_BattleActor
//-----------------------------------------------------------------------------

Window_BattleActor.prototype.show = function() {
	this.select(0);
};

//-----------------------------------------------------------------------------
// Window_BattleStatusUpgrade
//-----------------------------------------------------------------------------

Window_BattleStatusUpgrade.prototype = Object.create(Window_BattleStatus.prototype);
Window_BattleStatusUpgrade.prototype.constructor = Window_BattleStatusUpgrade;
Window_BattleStatusUpgrade.prototype._refreshCursor = Window.prototype._refreshCursor;
Window_BattleStatusUpgrade.prototype._refreshArrows = Window.prototype._refreshArrows;

Window_BattleStatusUpgrade.prototype.initialize = function(actor, index, previousWindow, statusWindow, master) {
	this._actor = actor;
	this._actorIndex = index;
	this._previousWindow = previousWindow;
	this._statusWindow = statusWindow;
	this._isMaster = master;
	this.setupParts();
	Window_BattleStatus.prototype.initialize.call(this);
	this._offsetX = 0;
	this._offsetY = 0;
	this._offsetX2 = 0;
	this._offsetY2 = 0;
	this._redrawForLoad = 0;
	this.updateMyOpacity();
	this._checkForRefresh = [];
};

Window_BattleStatusUpgrade.prototype.setupParts = function() {
	this._parts = this._actor.getCustomBattleStatusParts();
	this._gauges = [];
	this._texts = [];
	this._useFace = false;
	this._useIcon = false;
	for(let i = 0; i < this._parts.length; i++) {
		if(this._parts[i].match(/gauge\s*(\d+)/i)) {
			this._gauges.push(parseInt(RegExp.$1));
		} else if(this._parts[i].match(/text\s*(\d+)/i)) {
			this._texts.push(parseInt(RegExp.$1));
		} else if(this._parts[i].match(/face/i)) {
			this._useFace = true;
		} else if(this._parts[i].match(/icons?/i)) {
			this._useIcon = true;
		}
	}
};

Window_BattleStatusUpgrade.prototype.windowWidth = function() {
	return eval(_.width);
};

Window_BattleStatusUpgrade.prototype.windowHeight = function() {
	return eval(_.height);
};

Window_BattleStatusUpgrade.prototype.maxCols = function() {
	return 1;
};

Window_BattleStatusUpgrade.prototype.numVisibleRows = function() {
	return 1;
};

Window_BattleStatusUpgrade.prototype.maxItems = function() {
	return 0;
};

Window_BattleStatusUpgrade.prototype.itemHeight = function() {
	return this.contentsHeight();
};

Window_BattleStatusUpgrade.prototype.standardPadding = function() {
	return 8;
};

Window_BattleStatusUpgrade.prototype.maxItems = function() {
	return 1;
};

Window_BattleStatusUpgrade.prototype.update = function() {
	Window_BattleStatus.prototype.update.call(this);
	this.updateRedraw();
	this.updateOpenness();
	this.updatePosition();
	this.updateMotion();
	this.updateMovement();
	if(_.activeUpdating) this.updateRefreshes();
};

Window_BattleStatusUpgrade.prototype.updateRefreshes = function() {
	const actor = this._actor;
	const length = this._checkForRefresh.length;
	for(let i = 0; i < length; i++) {
		const info = this._checkForRefresh[i];
		if(info[0] !== eval(info[1])) {
			this.refresh();
			break;
		}
	}
};

Window_BattleStatusUpgrade.prototype.updateRedraw = function() {
	if(this._redrawForLoad <= 4) {
		if(this._redrawForLoad === 4) this.refresh();
		this._redrawForLoad++;
	}
};

Window_BattleStatusUpgrade.prototype.updateOpenness = function() {
	this.openness = this._statusWindow.openness;
};

Window_BattleStatusUpgrade.prototype.updatePosition = function() {
	if(this._isMaster) {
		this._mainX = eval(_.oriX);
		this._mainY = eval(_.oriY);
	} else {
		const prev = this._previousWindow;
		this._mainX = eval(_.sectionX);
		this._mainY = eval(_.sectionY);
	}
};

Window_BattleStatusUpgrade.prototype.updateMotion = function() {
	if(this._actorIndex === this._statusWindow.index()) {
		if(_.inputHigh && this._index === -1) {
			this.active = true;
			this.select(0);
		}
		if(Math.abs(this._offsetY) < Math.abs(eval(_.inputYMax))) {
			this._offsetY += eval(_.inputY);
		}
		if(Math.abs(this._offsetX) < Math.abs(eval(_.inputXMax))) {
			this._offsetX += eval(_.inputX);
		}
	} else {
		if(this._index === 0) {
			this.deselect();
			this.active = false;
		}
		if(this._offsetY !== 0) {
			this._offsetY -= eval(_.inputY);
		}
		if(this._offsetX !== 0) {
			this._offsetX -= eval(_.inputX);
		}
	}

	if(BattleManager._actorSelectOn && this._actorIndex === BattleManager.battleScene._actorWindow.index()) {
		if(_.selectHigh && this._index === -1) {
			this.active = true;
			this.select(0);
		}
		if(Math.abs(this._offsetY) < Math.abs(eval(_.selectYMax))) {
			this._offsetY += eval(_.selectY);
		}
		if(Math.abs(this._offsetX) < Math.abs(eval(_.selectXMax))) {
			this._offsetX += eval(_.selectX);
		}
	} else {
		if(BattleManager._actorSelectOn && this._actorIndex !== BattleManager.battleScene._actorWindow.index() && this._index === 0) {
			this.deselect();
			this.active = false;
		}
		if(this._offsetY2 !== 0) {
			this._offsetY2 -= eval(_.selectY);
		}
		if(this._offsetX2 !== 0) {
			this._offsetX2 -= eval(_.selectX);
		}
	}
};

Window_BattleStatusUpgrade.prototype.updateMovement = function() {
	this.x = this._mainX + this._offsetX + this._offsetX2;
	this.y = this._mainY + this._offsetY + this._offsetY2;
};

Window_BattleStatusUpgrade.prototype.updateTone = function() {
	if(this._actor.actor()._bsc_tone) {
		const tone = this._actor.actor()._bsc_tone;
		this.setTone(tone[0], tone[1], tone[2]);
	} else {
		const tone = eval(_.sectionTone);
		this.setTone(tone[0], tone[1], tone[2]);
	}
};

Window_BattleStatusUpgrade.prototype.updateMyOpacity = function() {
	if(this._actor.actor()._bsc_opacity) {
		this.opacity = eval(this._actor.actor()._bsc_opacity);
	} else {
		this.opacity = eval(_.sectionOpacity);
	}
};

const _Window_BattleStatusUpgrade_loadWindowskin = Window_BattleStatusUpgrade.prototype.loadWindowskin;
Window_BattleStatusUpgrade.prototype.loadWindowskin = function() {
	if(this._actor.actor()._bsc_skin) {
		this.windowskin = ImageManager.loadSystem(this._actor.actor()._bsc_skin);
	} else {
		_Window_BattleStatusUpgrade_loadWindowskin.apply(this, arguments);
	}
};

Window_BattleStatusUpgrade.prototype.refresh = function() {
	this.contents.clear();
	this._checkForRefresh = [];
	if(this._actor) this.drawItem();
};

Window_BattleStatusUpgrade.prototype.drawItem = function() {
	if(this._isMaster) this._statusWindow.contents.clear();
	this.drawAllImages();
	this.drawAllTexts();
	this.drawAllGauges();
	if(this._useIcon) this.drawIcons();
};

Window_BattleStatusUpgrade.prototype.drawAllImages = function() {
	const actor = this._actor;
	const boxWidth = this.contentsWidth();
	const boxHeight = this.contentsHeight();
	if(this._useFace) {
		this.drawActorFace(actor, eval(_.faceX), eval(_.faceY), eval(_.faceWidth), eval(_.faceHeight));
	}
};

const _Window_BattleStatusUpgrade_drawFace = Window_BattleStatusUpgrade.prototype.drawFace;
Window_BattleStatusUpgrade.prototype.drawFace = function(faceName, faceIndex, x, y, width, height) {
	if(ImageManager.loadFace(faceName).width === 0) {
		this._redrawForLoad = 0;
		return;
	}
	_Window_BattleStatusUpgrade_drawFace.apply(this, arguments);
};

Window_BattleStatusUpgrade.prototype.drawAllTexts = function() {
	const actor = this._actor;
	const boxWidth = this.contentsWidth();
	const boxHeight = this.contentsHeight();
	for(let i = 0; i <= this._texts.length; i++) {
		const info = _.texts[this._texts[i]];
		if(info) {
			this.contents.fontSize = eval(info.size);
			this.drawText(eval(info.value), eval(info.x), eval(info.y), eval(info.width), info.align);
			this._checkForRefresh.push([eval(info.value), info.value]);
		}
	}
};

if(Imported.YEP_AbsorptionBarrier) {

Window_BattleStatusUpgrade.prototype.drawActorHp = function(actor, wx, wy, ww, hh, col1, col2, bcol) {
	ww = ww || 186;
	var color1 = col1;
	var color2 = col2;
	if (actor.barrierPoints() > 0) {
	  ww = this.drawBarrierGauge(actor, wx, wy, ww, hh, col1, col2, bcol);
	} else {
		this.drawBasicGauge(TextManager.hpA, wx, wy, ww, hh, actor.hp, actor.mhp, col1, col2, bcol, true);
	}
};

Window_BattleStatusUpgrade.prototype.drawBarrierGauge = function(actor, wx, wy, ww, hh, col1, col2, bcol) {
	wx += eval(_.gaugeX);
	wy += eval(_.gaugeY);
	if (actor.hp + actor.barrierPoints() > actor.mhp) {
	  var max = actor.mhp + actor.barrierPoints();
	  var rate1 = actor.hp / max;
	} else {
	  var max = actor.mhp;
	  var rate1 = actor.hpRate();
	}
	var rate2 = (actor.barrierPoints() + actor.hp) / max;
	var color1 = this.barrierColor1();
	var color2 = this.barrierColor2();
	this.drawGaugeUpgrade(wx, wy, ww, hh, rate2, color1, color2, bcol);
	var color1 = col1;
	var color2 = col2;
	var ww2 = ww * rate1;
	this.drawGaugeUpgrade(wx, wy, ww2, hh, 1, color1, color2, bcol);
	const size = hh - 4;
	const pad = 4;
	this.changeTextColor(this.systemColor());
	this.contents.fontSize = size;
	this.drawText(TextManager.hpA, wx + pad, wy + pad + 1, 44);
	this.drawCurrentAndMax(actor.hp, actor.mhp, wx - pad, wy + pad + 1, ww, this.normalColor(), this.normalColor());
	return ww;
};

}

Window_BattleStatusUpgrade.prototype.drawAllGauges = function() {
	const actor = this._actor;
	const boxWidth = this.contentsWidth();
	const boxHeight = this.contentsHeight();
	for(let i = 0; i <= this._gauges.length; i++) {
		const info = _.gauges[this._gauges[i]];
		if(info) {
			if(info.absorb) {
				this.drawActorHp(actor, eval(info.x), eval(info.y), eval(info.width), eval(info.height), eval(info.color1), eval(info.color2), eval(info.back));
				this._checkForRefresh.push([actor.hp, "actor.hp"]);
			} else {
				this.drawBasicGauge(eval(info.text), eval(info.x), eval(info.y), eval(info.width), eval(info.height), eval(info.cur), eval(info.max), eval(info.color1), eval(info.color2), eval(info.back), eval(info.cm));
				this._checkForRefresh.push([eval(info.cur), info.cur]);
			}
		}
	}
};

Window_BattleStatusUpgrade.prototype.drawBasicGauge = function(text, x, y, width, height, cur, max, color1, color2, colorBack, cm) {
	width = width || 186;
	x += eval(_.gaugeX);
	y += eval(_.gaugeY);
	const size = eval(_.gaugeFontSize);
	const pad = 4;
	this.drawGaugeUpgrade(x, y, width, height, (cur/max), color1, color2, colorBack);
	this.changeTextColor(this.systemColor());
	this.contents.fontSize = size;
	this.contents.fontFace = _.gaugeFont;
	this.contents.fontItalic = _.gaugeItalic;
	this.contents.textColor = _.gaugeTextColor;
	this.contents.outlineColor = _.gaugeOutlineColor;
	this.contents.outlineWidth = _.gaugeOutlineWidth;
	this.drawText(text, eval(_.gaugeTextX), eval(_.gaugeTextY), 44);
	if(cm) this.drawCurrentAndMax(cur, max, x - pad, y + pad + 1, width, this.normalColor(), this.normalColor());
};

Window_BattleStatusUpgrade.prototype.drawGaugeUpgrade = function(x, y, width, height, rate, color1, color2, colorBack) {
	var fillW = Math.floor(width * rate);
	var gaugeY = y + this.lineHeight() - height - 2;
	if(!colorBack.match(/clear/)) {
		this.contents.fillRect(x - 1, gaugeY - 1, width + 2, height + 2, "#000000");
		this.contents.fillRect(x, gaugeY, width, height, colorBack);
	}
	if(rate === 0) return;
	if(!fillW || typeof fillW !== "number") return;
	this.contents.gradientFillRect(x, gaugeY, fillW, height, color1, color2);
};

Window_BattleStatusUpgrade.prototype.drawIcons = function() {
	const actor = this._actor;
	const boxWidth = this.contentsWidth();
	const boxHeight = this.contentsHeight();
	this.drawActorIconsScale(actor, eval(_.iconX), eval(_.iconY), eval(_.iconWidth), eval(_.iconScale));
};

Window_BattleStatusUpgrade.prototype.drawIconScale = function(iconIndex, x, y, scale) {
	var bitmap = ImageManager.loadSystem('IconSet');
	var pw = Window_Base._iconWidth;
	var ph = Window_Base._iconHeight;
	var sx = iconIndex % 16 * pw;
	var sy = Math.floor(iconIndex / 16) * ph;
	this.contents.blt(bitmap, sx, sy, pw, ph, x, y, pw * scale, ph * scale);
};

Window_BattleStatusUpgrade.prototype.drawActorIconsScale = function(actor, x, y, width, scale) {
	width = width || 144;
	var icons = actor.allIcons().slice(0, Math.floor(width / Window_Base._iconWidth));
	for (var i = 0; i < icons.length; i++) {
		this.drawIconScale(icons[i], x + Window_Base._iconWidth * i, y + 2, scale);
	}
	if(Imported.YEP_BuffsStatesCore) this.drawActorIconsTurns(actor, x, y, width);
	this._checkForRefresh.push([actor.allIcons(), "actor.allIcons()"]);
};

})(SRD.BattleStatusCustomizer);