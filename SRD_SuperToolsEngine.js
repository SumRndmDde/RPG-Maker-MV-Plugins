/*:
 * @plugindesc The heart of all maker-style plugins; it adds a playtesting editor that can be opened with F12.
 * @author SumRndmDde
 *
 * @param Connect Editor
 * @desc If 'true', the Editor Window will be "connected" to the main window.
 * @default true
 *
 * @param Auto Open Window
 * @desc If 'true', the game window will automatically open the Editor Window is opened.
 * @default false
 *
 * @param Auto Move Window
 * @desc If 'true', the game window will automatically be moved to the side when Editor Window is opened.
 * @default true
 *
 * @param Menu Editor Ban List
 * @desc This is a list of all the windows that are not allowed to be manipulated using the Menu Editor
 * @default Window_BattleLog, Window_MapName
 *
 * @help
 *
 * Super Tools Engine
 * Version 1.22
 * SumRndmDde
 *
 *
 * This plugin is the core of all maker-style plugins; it adds a playtest editor 
 * that can be opened with F12 while playtesting. Using this editor, various
 * actions can be taken and different tools can be used to help test or 
 * build one's game.
 *
 *
 * ==============================================================================
 *  Tool Kit
 * ==============================================================================
 *
 * This is where lanuchers for the various tools will appear. By default, there
 * are only three tools, but extension plugins will add more later.
 *
 *
 *
 *   Database EX
 *
 * A tool that adds, edits, and upgrades various MV Database inputs. It can also
 * have custom editors added to it through extension plugins.
 *
 *
 *
 *   Debug Tool
 *
 * A tool containing various features for testing one's game.
 *
 *
 *
 *   Menu Editor
 *
 * A tool that allows developers to edit the window setups for scenes.
 *
 *
 * ==============================================================================
 *  Playtester
 * ==============================================================================
 *
 * The functions here are to support general playtesting. They involve using 
 * quick and simple restarts, saves, and loads.
 *
 *
 *
 *   Reload Game
 *
 * Restarts the game and reloads all data. Allows developers to apply edits
 * to the game without closing the playtesting window.
 *
 *
 *
 *   Quick Save
 *
 * Quickly saves the game so it can be loaded through "Quick Load".
 *
 *
 *
 *   Quick Load
 *
 * Quickly loads the game from the last quick save.
 *
 *
 *
 *   Quick Load + Reload
 *
 * Preforms the same function as "reload game", but loads the most recent quick
 * save after loading.
 *
 *
 * ==============================================================================
 *  Options
 * ==============================================================================
 *
 * These allow developers to customize the design/mechanics of the playtesting
 * editor.
 *
 *
 *
 *   Theme
 *
 * Chooses the color scheme of the editor. 
 * "Absolute Randomness" generates random colors every time it is selected.
 *
 *
 *
 *   Follow Mode
 *
 * If checked, then the playtesting editor will follow the game window on screen
 * based off of its position.
 *
 *
 *
 *   Follow X
 *
 * The relative X position for the playtesting editor while using "Follow Mode".
 *
 *
 *
 *   Follow Y
 *
 * The relative Y position for the playtesting editor while using "Follow Mode".
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
SRD.SuperToolsEngine = SRD.SuperToolsEngine || {};
SRD.NotetagGetters = SRD.NotetagGetters || [];

var Imported = Imported || {};
Imported["SumRndmDde Super Tools Engine"] = 1.22;

var $dataWindows = {};
var $dataBasicEX = {};
var $dataNotes = {};

function MakerManager() {
	throw new Error('You silly-billy, MakerManager is a static class! (｡•̀ᴗ-)✧');
}

function FileManager() {
	throw new Error('Hey, noob! FileManager is a static class! ヾ(о-ω･)ﾉ⌒★');
}

function DataManagerEX() {
	throw new Error('It doesn\'t matter how extreme, DataManagerEX is a static class! (╬Ò^Ó)');
}

function DebugManager() {
	throw new Error('Uh... DebugManager is a static class! (/ε＼*)');
}

function WindowManager() {
	throw new Error('Great job. WindowManager is a static class! ʕ·ᴥ·　ʔ');
}

(function(_) {

"use strict";

//-----------------------------------------------------------------------------
// SRD.SuperToolsEngine
//-----------------------------------------------------------------------------

const params = PluginManager.parameters('SRD_SuperToolsEngine');

_.connect = String(params['Connect Editor']).trim().toLowerCase() === 'true';
_.move = String(params['Auto Move Window']).trim().toLowerCase() === 'true';
_.open = String(params['Auto Open Window']).trim().toLowerCase() === 'true';
_.banList = String(params['Menu Editor Ban List']).split(/\s*,\s*/);

_.isPlaytest = Utils.isOptionValid('test') && Utils.isNwjs();

_.pad = function(value) {
	return (value < 10) ? "0" + value : value;
};

_.capFirst = function(value) {
	return value.substring(0, 1).toUpperCase() + value.substring(1);
};

_.loadNotetags = function() {
	_.loadBasicData();
	_.loadNoteData();
	_.checkPartySystem();
};

_.loadBasicData = function() {
	Object.keys($dataBasicEX).forEach(function(key) {
		const dataObj = window["$data" + key];
		const ids = $dataBasicEX[key];
		Object.keys(ids).forEach(function(id) {
			const data = dataObj[parseInt(id)];
			if(data) {
				const props = ids[id];
				Object.keys(props).forEach(function(prop) {
					const type = props[prop].substring(0, 1);
					const value = props[prop].substring(1);
					if(type === '^') {
						data[prop] = String(value);
					} else if(type === '#') {
						data[prop] = Number(value);
					}  else if(type === '$') {
						Object.defineProperty(data, prop, {
							get: function() {
								try {
									return eval(value);
								} catch(e) {
									alert('There was error. Please visit console.')
									console.log(value + '\n' + e);
									return '';
								}
							},
							set: function(value) {},
							configurable: true
						});
					}
				});
			}
		});
	});
};

_.loadNoteData = function() {
	Object.keys($dataNotes).forEach(function(key) {
		const dataObj = window["$data" + key];
		const ids = $dataNotes[key];
		Object.keys(ids).forEach(function(id) {
			const data = dataObj[parseInt(id)];
			const note = ids[id];
			if(data && note) {
				if(data.note === undefined) data.note = '';
				data.note += '\n' + note;
			}
		});
	});
};

_.checkPartySystem = function() {
	if(Imported.YEP_PartySystem && Yanfly.Party.version < 1.12) {
		alert('Please update YEP_PartySystem to version 1.12 or above!');
	}
};

SRD.NotetagGetters.push(_.loadNotetags);

//-----------------------------------------------------------------------------
// DataManager
//-----------------------------------------------------------------------------

DataManager._testExceptions = ["Windows.json", "DataEX.json", "Notes.json"];

DataManager._databaseFiles.push({name: '$dataWindows', src: "Windows.json"});
DataManager._databaseFiles.push({name: '$dataBasicEX', src: "DataEX.json"});
DataManager._databaseFiles.push({name: '$dataNotes', src: "Notes.json"});

if(!SRD.DataManager_isDatabaseLoaded) {

SRD.notetagsLoaded = false;
SRD.DataManager_isDatabaseLoaded = DataManager.isDatabaseLoaded;
DataManager.isDatabaseLoaded = function() {
	if(!SRD.DataManager_isDatabaseLoaded.apply(this, arguments)) return false;
	if(!SRD.notetagsLoaded) {
		SRD.NotetagGetters.forEach(function(func) {
			func.call(this);
		}, this);
		SRD.notetagsLoaded = true;
	}
	return true;
};

}

DataManager.deleteGlobal = function(id) {
	const globalInfo = this.loadGlobalInfo();
	if(!globalInfo) return;
	delete globalInfo[id];
	const newGlobalInfo = [];
	for(let i = 0; i < globalInfo.length; i++) {
		if(globalInfo[i]) newGlobalInfo[i] = globalInfo[i];
	}
	this.saveGlobalInfo(newGlobalInfo);
};

_.DataManager_loadDataFile = DataManager.loadDataFile;
DataManager.loadDataFile = function(name, src) {
	if(src.substring(0, 5) === 'Test_') {
		const oriSrc = src.substring(5);
		if(this._testExceptions.contains(oriSrc)) {
			src = oriSrc;
		}
	}
	_.DataManager_loadDataFile.call(this, name, src);
};

//-----------------------------------------------------------------------------
// ConfigManager
//-----------------------------------------------------------------------------

ConfigManager.STE_Theme = 0;
ConfigManager.STE_Follow = false;
ConfigManager.STE_FollowX = 6;
ConfigManager.STE_FollowY = 0;

_.ConfigManager_makeData = ConfigManager.makeData;
ConfigManager.makeData = function() {
	const config = _.ConfigManager_makeData.apply(this, arguments);
	config.STE_Theme = this.STE_Theme;
	config.STE_Follow = this.STE_Follow;
	config.STE_FollowX = this.STE_FollowX;
	config.STE_FollowY = this.STE_FollowY;
	return config;
};

_.ConfigManager_applyData = ConfigManager.applyData;
ConfigManager.applyData = function(config) {
	_.ConfigManager_applyData.apply(this, arguments);
	this.STE_Theme = this.readSTECoord(config, 'STE_Theme');
	this.STE_Follow = this.readFlag(config, 'STE_Follow');
	this.STE_FollowX = this.readSTECoord(config, 'STE_FollowX', 6);
	this.STE_FollowY = this.readSTECoord(config, 'STE_FollowY');
};

ConfigManager.readSTECoord = function(config, name, def) {
	const value = config[name];
	if (value !== undefined) {
		return Number(value);
	} else {
		return def || 0;
	}
};

//-----------------------------------------------------------------------------
// SceneManager
//-----------------------------------------------------------------------------

_.SceneManager_onSceneStart = SceneManager.onSceneStart;
SceneManager.onSceneStart = function() {
	_.SceneManager_onSceneStart.apply(this, arguments);
	this._scene.initCustomWindowPositions();
};

if(_.isPlaytest) {

_.SceneManager_onKeyDown = SceneManager.onKeyDown;
SceneManager.onKeyDown = function(event) {
	_.SceneManager_onKeyDown.apply(this, arguments);
	if(event.keyCode === 123) {
		this.openMaker();
	}
};

SceneManager.openMaker = function() {
	if(MakerManager.window) {
		MakerManager.closeMaker();
	} else {
		MakerManager.openMaker();
	}
};

_.SceneManager_updateMain = SceneManager.updateMain;
SceneManager.updateMain = function() {
	if(DebugManager.gameSpeed === 1) {
		_.SceneManager_updateMain.apply(this, arguments);
	} else {
		for(let i = 0; i < DebugManager.gameSpeed; i++) {
			this.updateInputData();
			this.changeScene();
			this.updateScene();
			if(i + 1 === DebugManager.gameSpeed) {
				this.renderScene();
				this.requestUpdate();
			}
		}
	}
};

//-----------------------------------------------------------------------------
// MakerManager
//-----------------------------------------------------------------------------

MakerManager._window = null;
MakerManager._styling = null;
MakerManager._mode = '';

Object.defineProperty(MakerManager, 'window', {
	get: function() {
		return this._window;
	},
	configurable: true
});

Object.defineProperty(MakerManager, 'mainHTML', {
	get: function() {
		if(!this._document) return null;
		return this._document.body.innerHTML
	},
	set: function(value) {
		if(!this._document) return;
		this._document.body.innerHTML = value;
	},
	configurable: true
});

Object.defineProperty(MakerManager, 'document', {
	get: function() {
		if(!this._window) return null;
		if(!this._document) {
			this._document = this._window.window.document;
		}
		return this._document;
	},
	configurable: true
});

Object.defineProperty(MakerManager, 'style', {
	get: function() {
		return this._styling;
	},
	configurable: true
});

Object.defineProperty(MakerManager, 'mode', {
	get: function() {
		return this._mode;
	},
	set: function(value) {
		return this._mode = value;
	},
	configurable: true
});

Object.defineProperty(MakerManager, 'colors', {
	get: function() {
		return this._colors;
	},
	configurable: true
});

MakerManager.initManager = function() {
	this._listIndex = 0;
	this.setupGameWindow();
	this.updateTheme();
};

MakerManager.openMaker = function() {
	if(this._window) this._window.close(true);
	this.createWindow();
	this.moveWindow();
	this.setupWindow();
	this._window.on('loaded', this.onWindowLoad.bind(this));
};

MakerManager.closeMaker = function() {
	this.onFinish();
	this._window.close(true);
};

MakerManager.deleteMaker = function() {
	this._window = null;
};

MakerManager.createWindow = function() {
	const gui = require('nw.gui');
	this._window = gui.Window.open('', {
		title: "Super Tools Engine  -  Core Editor  |  SumRndmDde",
		width: 600,
		height: 680,
		resizable: false,
		toolbar: false,
		icon: "www/icon/icon.png"
	});
	this._window.setShowInTaskbar(false);
};

MakerManager.moveWindow = function() {
	if(_.move) {
		window.moveBy(-300, 0);
		this._window.moveTo(window.screenX + Graphics.boxWidth + 6, window.screenY);
	}
};

MakerManager.setupWindow = function() {
	this._window.on('closed', this.deleteMaker.bind(this));
	this._window.on('close', this.closeMaker.bind(this));
};

MakerManager.onWindowLoad = function() {
	this.buildWindow();
	this.assignWindow();
	this.focusWindow();
};

MakerManager.buildWindow = function() {
	this._document = this._window.window.document;
	this._styling = this._document.createElement('style');
	this._document.head.appendChild(this._styling);
	this._document.addEventListener('keydown', SceneManager.onKeyDown.bind(SceneManager));
	this.setupWindowHtml();
};

MakerManager.assignWindow = function() {
	this._window.window.MakerManager = this;
	this._window.window.DataManagerEX = DataManagerEX;
	this._window.window.DebugManager = DebugManager;
	this._window.window.WindowManager = WindowManager;
};

MakerManager.focusWindow = function() {
	this._window.focus();
};

MakerManager.onFinish = function() {
	if(this.mode === 'data') {
		DataManagerEX.onFinish();
	}
	if(this.mode === 'debug') {
		DebugManager.onFinish();
	}
	if(this.mode === 'window') {
		WindowManager.onFinish();
	}
	if(_.move) {
		window.moveBy(300, 0);
	}
};

MakerManager.setupGameWindow = function() {
	const gui = require('nw.gui');
	const win = gui.Window.get();

	//Set up closing
	win.removeAllListeners('close');
	win.on('close', function() {
		DebugManager.deleteQuickSave();
		if(MakerManager.window) {
			if(window.confirm('Are you sure you wish to close the game while Editor Window is active? Your changes will not be saved.')) {
				MakerManager.window.close(true);
				this.close(true);
			}
		} else {
			this.close(true);
		}
	});

	//Set up connection
	if(_.connect) {
		win.removeAllListeners('restore');
		win.removeAllListeners('focus');
		win.removeAllListeners('minimize');

		win.on('focus', function() {
			if(MakerManager.window) {
				MakerManager.window.setAlwaysOnTop(true);
				//MakerManager.window.show();
				MakerManager.window.restore();
				MakerManager.window.setAlwaysOnTop(false);
			}
		});
		win.on('restore', function() {
			if(MakerManager.window) {
				MakerManager.window.restore();
			}
		});
		win.on('minimize', function() {
			if(MakerManager.window) {
				MakerManager.window.minimize();
			}
		});
	}

	//Set up movement
	win.removeAllListeners('move');
	win.on('move', function(x, y) {
		if(ConfigManager.STE_Follow && MakerManager.window) {
			MakerManager.window.x = x + Graphics.width + ConfigManager.STE_FollowX;
			MakerManager.window.y = y + ConfigManager.STE_FollowY;
		}
	});
};

MakerManager.setupWindowHtml = function() {
	this.updateStyle();
	MakerManager.window.title = "Super Tools Engine  -  Core Editor  |  SumRndmDde";
	MakerManager.mode = '';
	this.setLauncherPage();
};

MakerManager.updateStyle = function() {
	this.updateTheme();
	this._styling.innerHTML = this.getStyle();
	this._document.body.style.cssText = `background-color: ${this._colors[3]}`;
	this._document.body.text = this._colors[0];
};

MakerManager.setLauncherPage = function() {
	this.mainHTML = this.topBar(0) + this.getLauncherHtml();
	this.refreshEverything();
};

MakerManager.setPlaytesterPage = function() {
	this.mainHTML = this.topBar(1) + this.getPlaytesterHtml();
};

MakerManager.setOptionsPage = function() {
	this.mainHTML = this.topBar(2) + this.getOptionsHtml();
};

MakerManager.topBar = function(index) {
	const active = ['', '', ''];
	active[index] = 'class="active"';
	return `<ul style="cursor:pointer">
				<li style="width: 34%;"><a ${active[0]} onclick="MakerManager.setLauncherPage()">Tool Kit</a></li>
				<li style="width: 32%;"><a ${active[1]} onclick="MakerManager.setPlaytesterPage()">Playtester</a></li>
				<li style="width: 34%;"><a ${active[2]} onclick="MakerManager.setOptionsPage()">Options</a></li>
			</ul>`;
};

MakerManager.getLauncherHtml = function() {
	return `<p>
				<table id="MainTable">
				</table>
				<div id="PageControl" style="text-align: center; float: center; width: 100%; position: fixed; bottom: 0; padding-bottom: 30px;">
				</div>
			</p>`;
};

MakerManager.refreshTable = function() {
	const table = this._document.getElementById('MainTable');
	table.innerHTML = `<tr>
							<th>Launch Button</th>
							<th>Description</th>
						</tr>
						${this.getLauncherTable()}`;
};

MakerManager.refreshPages = function() {
	const pages = this._document.getElementById('PageControl');
	pages.innerHTML = this.getPageControl();
};

MakerManager.refreshEverything = function() {
	this.refreshTable();
	this.refreshPages();
};

MakerManager.getLauncherTable = function() {
	let result = '';
	const buttons = this.getLauncherButtons();
	const count = this.getLauncherTableCount();
	const max = Math.min((this._listIndex + 1) * 5, count);
	for(let i = this._listIndex * 5; i < max; i++) {
		result += buttons[i];
	}
	return result;
};

MakerManager.getLauncherButtons = function() {
	if(this._buttons === undefined) this._buttons = this.getLauncherButtonsRaw();
	return this._buttons;
};

MakerManager.getLauncherButtonsRaw = function() {
	return [
				`${this.generateLauncherRow("Database EX", "A tool that adds, edits, and upgrades various MV Database inputs.", "DataManagerEX.setupWindowHtml()", "#f41f1f")}`,
				`${this.generateLauncherRow("Debug Tool", "A tool containing various features for testing one's game.", "DebugManager.setupWindowHtml()", "#1f8af4")}`,
				`${this.generateLauncherRow("Menu Editor", "A tool that allows developers to edit the window setups for scenes.", "WindowManager.setupWindowHtml()", "#8a1ff4")}`
			];
};

MakerManager.getLauncherTableCount = function() {
	return this.getLauncherButtons().length;
};

MakerManager.getLauncherTableMax = function() {
	const count = this.getLauncherTableCount();
	return Math.ceil(count / 5);
};

MakerManager.generateLauncherRow = function(name, description, method, color) {
	color = color || "#000000";
	return `<tr>
				<td><button style="background-color: ${color};" id="LaunchButton" onclick="${method}"><span>${name}</span></button></td>
				<td id="LaunchDescription ${name}">${description}</td>
			</tr>`;
};

MakerManager.getPageControl = function() {
	const count = this.getLauncherTableCount();
	if(count < 6) return '';
	const max = this.getLauncherTableMax();
	return `<div style="transform: translateY(-9px); float: right; width: 34%; text-align:center;">
				<button class="button" onclick="MakerManager.incrementPage()" />\u21D2</button>
			</div>
			<b>Page: (${this._listIndex + 1}/${max})</b>
			<div style="transform: translateY(-9px); float: left; width: 34%; text-align:center;">
					<button class="button" onclick="MakerManager.decrementPage()" />\u21D0</button>
			</div>`;
};

MakerManager.incrementPage = function() {
	const max = this.getLauncherTableMax();
	this._listIndex++;
	if(this._listIndex + 1 > max) {
		this._listIndex = 0;
	}
	this.refreshEverything();
};

MakerManager.decrementPage = function() {
	const max = this.getLauncherTableMax();
	this._listIndex--;
	if(this._listIndex < 0) {
		this._listIndex = max - 1;
	}
	this.refreshEverything();
};

MakerManager.getOptionsHtml = function() {
	const selected = ['', ''];
	selected[ConfigManager.STE_Theme] = 'selected';
	const selected2 = (ConfigManager.STE_Follow) ? 'checked' : '';
	const list = this.getOptionsList(selected);
	return `<p><table>
				<tr>
					<th>Option</th>
					<th>Value</th>
				</tr>
				<tr>
					<td style="text-align: center;">Theme</td>
					<td style="text-align: center;">
						<select id="Theme" style="width:60%" onchange="MakerManager.getMakerTheme()">
							${list}
						</select>
					</td>
				</tr>
				<tr>
					<td style="text-align: center;">Follow Mode</td>
					<td style="text-align: center;">
						<input type="checkbox" id="Follow" onchange="MakerManager.updateFollow()" ${selected2}>
					</td>
				</tr>
				<tr>
					<td style="text-align: center;">Follow X</td>
					<td style="text-align: center;">
						<input type="text" id="FollowX" onchange="MakerManager.updateFollow()" value="${String(ConfigManager.STE_FollowX)}">
					</td>
				</tr>
				<tr>
					<td style="text-align: center;">Follow Y</td>
					<td style="text-align: center;">
						<input type="text" id="FollowY" onchange="MakerManager.updateFollow()" value="${String(ConfigManager.STE_FollowY)}">
					</td>
				</tr>
			</table></p>`;
};

MakerManager.updateFollow = function() {
	ConfigManager.STE_Follow = this._document.getElementById('Follow').checked;
	ConfigManager.STE_FollowX = parseInt(this._document.getElementById('FollowX').value);
	ConfigManager.STE_FollowY = parseInt(this._document.getElementById('FollowY').value);
	ConfigManager.save();
	if(ConfigManager.STE_Follow && MakerManager.window) {
		MakerManager.window.x = window.screenX + Graphics.width + ConfigManager.STE_FollowX;
		MakerManager.window.y = window.screenY + ConfigManager.STE_FollowY;
	}
};

MakerManager.getOptionsList = function(selected) {
	return `<option value="0" ${selected[0]}>Default</option>
			<option value="1" ${selected[1]}>Dark</option>
			<option value="2" ${selected[2]}>Sea Time</option>
			<option value="3" ${selected[3]}>Super Manly</option>
			<option value="4" ${selected[4]}>Shadow the Hedgehog</option>
			<option value="5" ${selected[5]}>Dank Meme</option>
			<option value="6" ${selected[6]}>High Contrast Orange</option>
			<option value="7" ${selected[7]}>Fullmetal Alchemist</option>
			<option value="8" ${selected[8]}>Absolute Randomness</option>`;
};

MakerManager.getMakerTheme = function() {
	const val = this._document.getElementById('Theme').value;
	ConfigManager.STE_Theme = parseInt(val);
	ConfigManager.save();
	this.updateStyle();
};

MakerManager.updateTheme = function() {
	switch(ConfigManager.STE_Theme) {
		case 0:
			this._colors = [
				'#000',    // Text Color
				'#3E8E41', // Base Color
				'#275929', // Base Color 2
				'white',   // Background Color
				'#E7E7E7', // Border Color
				'#F3F3F3', // Background Color 2
				'#ddd',    // Top Menu On-Mouse
				'#eee',    // Top Menu No Select
				'#ddd',    // Table Border
				'#f2f2f2', // Off-grid Color
				'#ddd',    // Grid Hover Color
				'#999',    // Button Shadow
				'#666',    // Pushed Button Shadow
				'#ffffff', // Input Background
				'#888888', // Input Border
				'#ffffff', // Select Background
				'#888888', // Select Border
				'#ff9900', // Input Highlight
				'#666'	   // Top Menu Text Color
			];
			break;
		case 1:
			this._colors = [
				'#fff',    // Text Color
				'#4c4cae', // Base Color
				'#3e3e8e', // Base Color 2
				'#222',    // Background Color
				'#1a1a1a', // Border Color
				'#2d2d2d', // Background Color 2
				'#444',    // Top Menu On-Mouse
				'#333',    // Top Menu No Select
				'#444',    // Table Border
				'#2d2d2d', // Off-grid Color
				'#444',    // Grid Hover Color
				'#333',    // Button Shadow
				'#000',    // Pushed Button Shadow
				'#444444', // Input Background
				'#888888', // Input Border
				'#444444', // Select Background
				'#888888', // Select Border
				'#0099ff', // Input Highlight
				'#666'	   // Top Menu Text Color
			];
			break;
		case 2:
			this._colors = [
				'#000',    // Text Color
				'#4caeae', // Base Color
				'#3e8e8e', // Base Color 2
				'#eeeeff', // Background Color
				'#d6d6E7', // Border Color
				'#e2e2F3', // Background Color 2
				'#ccccdd', // Top Menu On-Mouse
				'#ddddee', // Top Menu No Select
				'#ddd',    // Table Border
				'#e1e1f2', // Off-grid Color
				'#ccccdd', // Grid Hover Color
				'#999',    // Button Shadow
				'#666',    // Pushed Button Shadow
				'#ffffff', // Input Background
				'#888888', // Input Border
				'#ffffff', // Select Background
				'#888888', // Select Border
				'#0099ff', // Input Highlight
				'#666'	   // Top Menu Text Color
			];
			break;
		case 3:
			this._colors = [
				'#000',    // Text Color
				'#ae4cae', // Base Color
				'#8e3e8e', // Base Color 2
				'#fff0ff', // Background Color
				'#e6d5e6', // Border Color
				'#f3e2f3', // Background Color 2
				'#dccbdc', // Top Menu On-Mouse
				'#eeddee', // Top Menu No Select
				'#ddd',    // Table Border
				'#f3e2f3', // Off-grid Color
				'#dccbdc', // Grid Hover Color
				'#999',    // Button Shadow
				'#666',    // Pushed Button Shadow
				'#ffffff', // Input Background
				'#888888', // Input Border
				'#ffffff', // Select Background
				'#888888', // Select Border
				'#ff00ff', // Input Highlight
				'#666'	   // Top Menu Text Color
			];
			break;
		case 4:
			this._colors = [
				'#fff',    // Text Color
				'#ae4c4c', // Base Color
				'#8e3e3e', // Base Color 2
				'#222',    // Background Color
				'#1a1a1a', // Border Color
				'#2d2d2d', // Background Color 2
				'#444',    // Top Menu On-Mouse
				'#333',    // Top Menu No Select
				'#444',    // Table Border
				'#2d2d2d', // Off-grid Color
				'#444',    // Grid Hover Color
				'#333',    // Button Shadow
				'#000',    // Pushed Button Shadow
				'#444444', // Input Background
				'#888888', // Input Border
				'#444444', // Select Background
				'#888888', // Select Border
				'#ff0000', // Input Highlight
				'#666'	   // Top Menu Text Color
			];
			break;
		case 5:
			this._colors = [
				'#fff',    // Text Color
				'#8e8e3e', // Base Color
				'#595927', // Base Color 2
				'#222211', // Background Color
				'#1a1a09', // Border Color
				'#2d2d1c', // Background Color 2
				'#444433', // Top Menu On-Mouse
				'#333322', // Top Menu No Select
				'#444433', // Table Border
				'#2d2d1c', // Off-grid Color
				'#444433', // Grid Hover Color
				'#333322', // Button Shadow
				'#000',    // Pushed Button Shadow
				'#444433', // Input Background
				'#888877', // Input Border
				'#444433', // Select Background
				'#888877', // Select Border
				'#ffff00', // Input Highlight
				'#666'	   // Top Menu Text Color
			];
			break;
		case 6:
			this._colors = [
				'#fff',    // Text Color
				'#ae7d4c', // Base Color
				'#8e663e', // Base Color 2
				'#805300', // Background Color
				'#ffd280', // Border Color
				'#9c7d5e', // Background Color 2
				'#9c7d5e', // Top Menu On-Mouse
				'#9c7d5e', // Top Menu No Select
				'#67ccff', // Table Border
				'#ffa600', // Off-grid Color
				'#cc8500', // Grid Hover Color
				'#333',    // Button Shadow
				'#000',    // Pushed Button Shadow
				'#444466', // Input Background
				'#8888aa', // Input Border
				'#444466', // Select Background
				'#8888aa', // Select Border
				'orange',  // Input Highlight
				'#666'	   // Top Menu Text Color
			];
			break;
		case 7:
			this._colors = [
				'#fff',    // Text Color
				'#aeae4c', // Base Color
				'#8e8e3e', // Base Color 2
				'#444',    // Background Color
				'#303030', // Border Color
				'#4d4d4d', // Background Color 2
				'#666',    // Top Menu On-Mouse
				'#555',    // Top Menu No Select
				'#666',    // Table Border
				'#4d4d4d', // Off-grid Color
				'#666',    // Grid Hover Color
				'#333',    // Button Shadow
				'#000',    // Pushed Button Shadow
				'#666666', // Input Background
				'#aaaaaa', // Input Border
				'#6666666', // Select Background
				'#aaaaaa', // Select Border
				'#ae4c4c', // Input Highlight
				'#888',	   // Top Menu Text Color
				'#ae4c4c', // Button Color 1
				'#8e3e3e'  // Button Color 2
			];
			break;
		case 8:
			this._colors = [(Math.random() > 0.5) ? "#000000" : "#ffffff"];
			for(let i = 0; i < 17; i++) {
				this._colors.push(`rgba(${Math.randomInt(255)}, ${Math.randomInt(255)}, ${Math.randomInt(255)}, 255)`)
			}
			break;
	}
};

MakerManager.getPlaytesterHtml = function() {
	return `<p><table>
				<tr>
					<th>Playtest Feature</th>
					<th>Description</th>
				</tr>
				<tr>
					<td style="text-align: center;"><button class="button" onclick="DebugManager.restartGame()" />Reload Game</button></td>
					<td style="width: 60%;">
						Once activated, the game will save, restart, and load quickly in order to reload any changed data.
					</td>
				</tr>
				<tr>
					<td style="text-align: center;"><button class="button" onclick="DebugManager.quickSave()" />Quick Save</button></td>
					<td style="width: 60%;">
						Quickly saves the game without the need to open any menus or activate any events.
					</td>
				</tr>
				<tr>
					<td style="text-align: center;"><button class="button" onclick="DebugManager.quickLoad()" />Quick Load</button></td>
					<td style="width: 60%;">
						Quickly loads the most recent quick save.
					</td>
				</tr>
				<tr>
					<td style="text-align: center;"><button class="button" onclick="DebugManager.quickRestartLoad()" />Quick Load + Reload</button></td>
					<td style="width: 60%;">
						Preforms a game reload, then starts the player back at the most recent quick save.
					</td>
				</tr>
			</table></p>`;
};

MakerManager.getStyle = function() {
	const textColor = this._colors[0];
	const baseColor = this._colors[1];
	const hoverColor = this._colors[2];
	const trueBackgroundColor = this._colors[3];
	const borderColor = this._colors[4];
	const backgroundColor = this._colors[5];
	const topMenuHighlight = this._colors[6];
	const topMenuNoSelect = this._colors[7];
	const tableBorder = this._colors[8];
	const scrollBack = this._colors[10];
	const buttonShadow = this._colors[11];
	const pushedButtonShadow = this._colors[12];
	const inputBackground = this._colors[13];
	const inputBorder = this._colors[14];
	const selectBackground = this._colors[15];
	const selectBorder = this._colors[16];
	const inputHighlight = this._colors[17];
	const topMenuText = this._colors[18];
	const buttonColor = this._colors[19] || baseColor;
	const buttonColor2 = this._colors[20] || hoverColor;
	return `a:link {
				color: #33ccff;
			}

			table {
				border-collapse: collapse;
				width: 100%;
			}

			option {
				text-align: center;
			}

			th, td {
				padding: 16px;
				border-bottom: 1px solid ${tableBorder};
				background-color: ${trueBackgroundColor};
			}

			td {
				text-align: left;
			}

			th {
				text-align: center;
			}

			button {
				display: inline-block;
				padding: 5px 10px;
				font-size: 15px;
				cursor: pointer;
				text-align: center;
				text-decoration: none;
				outline: none;
				color: #fff;
				background-color: ${buttonColor};
				border: none;
				border-radius: 15px;
				box-shadow: 0 4px ${buttonShadow};
			}

			button:hover {background-color: ${buttonColor2}}

			button:active {
				background-color: ${buttonColor2};
				box-shadow: 0 2px ${pushedButtonShadow};
				transform: translateY(2px);
			}

			ul {
				list-style-type: none;
				margin: 0;
				padding: 0;
				overflow: hidden;
				border: 1px solid ${borderColor};
				background-color: ${backgroundColor};
			}

			li {
				float: left;
				background-color: ${topMenuNoSelect}
			}

			li a {
				display: block;
				color: ${topMenuText};
				text-align: center;
				padding: 14px 16px;
				text-decoration: none;
			}

			li a:hover:not(.active) {
				background-color: ${topMenuHighlight};
			}

			li a.active {
				color: white;
				background-color: ${baseColor};
			}

			#LaunchButton {
				display: inline-block;
				border-radius: 4px;
				border: none;
				color: #FFFFFF;
				font-size: 18px;
				padding: 14px;
				width: 200px;
				height: 50px;
				transition: all 0.5s;
				cursor: pointer;
				margin: 5px;
				vertical-align:middle; 
				text-align: center;
			}

			#LaunchButton span {
				cursor: pointer;
				display: inline-block;
				position: relative;
				transition: 0.5s;
			}

			#LaunchButton span:after {
				content: '\\21D2';
				position: absolute;
				opacity: 0;
				top: -4px;
				right: -30px;
				transition: 0.5s;
			}

			#LaunchButton:hover span {
				padding-right: 35px;
			}

			#LaunchButton:hover span:after {
				opacity: 1;
				right: 0;
			}

			.dropbtn {
				display: inline-block;
				color: white;
				text-align: center;
				padding: 14px 16px;
				text-decoration: none;
			}

			li.dropdown {
				display: inline-block;
			}

			.dropdown-content {
				display: none;
				position: absolute;
				background-color: ${topMenuNoSelect};
				min-width: 160px;
				box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
				z-index: 1;
			}

			.dropdown-content a {
				color: ${topMenuText};
				background-color: ${topMenuNoSelect};
				padding: 12px 16px;
				text-decoration: none;
				display: block;
				text-align: left;
			}

			.dropdown-content a:hover {
				background-color: ${topMenuHighlight};
			}

			.dropdown:hover .dropdown-content {
				display: block;
			}

			textarea, select {
				background-color: ${inputBackground};
				border-color: ${inputBorder};
				color: ${textColor};
				padding: 3px 0px 3px 3px;
				margin: 5px 1px 3px 0px;
			}

			input {
				border: 1px solid ${inputBorder};
				background-color: ${inputBackground};
				color: ${textColor};
				padding: 1px 3px 1px 3px;
			}

			input[type=text]:focus, textarea:focus, select:focus {
				box-shadow: 0 0 5px ${inputHighlight};
				border: 1px solid ${inputHighlight};
			}

			#scrollStuff::-webkit-scrollbar {
				width: 1em;
			}
			 
			#scrollStuff::-webkit-scrollbar-track {
				background-color: ${scrollBack};
			}
			 
			#scrollStuff::-webkit-scrollbar-thumb {
				background-color: ${trueBackgroundColor};
				outline: 1px solid slategrey;
				outline-offset: -1px;
			}

			#scrollStuff::-webkit-scrollbar-corner {
				background-color: ${scrollBack};
			}`;
};

MakerManager.initManager();

}

//-----------------------------------------------------------------------------
// FileManager
//-----------------------------------------------------------------------------

FileManager.filePath = function(location) {
	const path = require('path');
	const base = path.dirname(process.mainModule.filename);
	return path.join(base, location);
};

FileManager.saveData = function(variable, filename) {
	if(this.dataPath === undefined) this.dataPath = this.filePath('data/');
	const fs = require('fs');
	const data = JSON.stringify(variable);
	const filePath = this.dataPath + filename;
	fs.writeFileSync(filePath, data);
};

FileManager.checkDataExists = function(filename, info) {
	info = info || "[]";
	if(this.dataPath === undefined) this.dataPath = this.filePath('data/');
	const fs = require('fs');
	const filePath = this.dataPath + filename;
	if(!fs.existsSync(filePath)) {
		fs.writeFileSync(filePath, info);
	}
};

FileManager.getFileList = function(section, folder) {
	const result = [];
	const fs = require('fs');
	const location = this.filePath(`img/SumRndmDde/${section}/${folder}/`);
	const files = fs.readdirSync(location);
	for(let i = 0; i < files.length; i++) {
		const file = location + files[i];
		const stat = fs.statSync(file);
		if(!stat) continue;
		if(!stat.isDirectory() && this.isImageFile(files[i])) {
			const f = files[i].replace('.png', '');
			result.push(f);
		}
	}
	return result;
};

FileManager.isImageFile = function(filename) {
	return !!(filename.match(/\.png/i));
};

FileManager.getFirstFile = function(section, folder) {
	const result = this.getFileList(section, folder)[0];
	return (result) ? result : '';
};

//-----------------------------------------------------------------------------
// DataManagerEX
//-----------------------------------------------------------------------------

if(_.isPlaytest) {

DataManagerEX._types = [
	'Actors',
	'Classes',
	'Skills',
	'Items',
	'Weapons',
	'Armors',
	'Enemies',
	'Troops',
	'States',
	'Animations',
	'Tilesets',
	'CommonEvents',
	'System'
];

//Place # at the front to make it an input for a number
DataManagerEX._props = {
	'Actors': 		['name', 'profile', '#initialLevel', '#maxLevel'],
	'Classes': 		['name'],
	'Skills': 		['name', '#iconIndex', 'description', '#mpCost', '#tpCost', '#speed', '#successRate', '#repeats', '#tpGain'],
	'Items': 		['name', '#iconIndex', 'description', '#price', '#speed', '#successRate', '#repeats', '#tpGain'],
	'Weapons': 		['name', '#iconIndex', 'description', '#price'],
	'Armors': 		['name', '#iconIndex', 'description', '#price'],
	'Enemies': 		['name', '#exp', '#gold'],
	'Troops': 		['name'],
	'States': 		['name', '#iconIndex', '#priority', '#minTurns', '#maxTurns', 'message1', 'message2', 'message3', 'message4'],
	'Animations': 	['name'],
	'Tilesets': 	['name'],
	'CommonEvents': ['name'],
	'System': 		['currencyUnit']
};

DataManagerEX.initManager = function() {
	FileManager.checkDataExists("DataEX.json", "{}");
	FileManager.checkDataExists("Notes.json", "{}");
	this._listIndex = 0;
};

DataManagerEX.save = function() {
	FileManager.saveData($dataBasicEX, "DataEX.json");
	FileManager.saveData($dataNotes, "Notes.json");
};

DataManagerEX.setupWindowHtml = function() {
	this.initOldDatas();
	MakerManager.window.title = "Super Tools Engine  -  Database EX  |  SumRndmDde";
	MakerManager.mode = 'data';
	this.resetTypeAndId();
	this.setBasicPage();
};

DataManagerEX.initOldDatas = function() {
	this._oldDataEx = JsonEx.stringify($dataBasicEX);
	this._oldNotes = JsonEx.stringify($dataNotes);
};

DataManagerEX.resetTypeAndId = function() {
	this._type = "Actors";
	this._id = "1";
};

DataManagerEX.setBasicPage = function() {
	this._customEditorName = 'Custom Editors';
	MakerManager.mainHTML = this.topBar(0) + this.getBasicHtml();
};

DataManagerEX.setNotePage = function() {
	this._customEditorName = 'Custom Editors';
	MakerManager.mainHTML = this.topBar(1) + this.getNoteHtml();
};

DataManagerEX.setCustomPage = function(name, htmlFunction) {
	this._customEditorName = name;
	MakerManager.mainHTML = this.topBar(2) + htmlFunction.call(this);
};

DataManagerEX.topBar = function(index) {
	const active = ['', '', ''];
	active[index] = 'class="active"';
	let result = '';
	const allInfo = this.getCustomInfo();
	for(let i = 0; i < allInfo.length; i++) {
		const info = allInfo[i];
		result += `<a id="Dropdown" onclick="DataManagerEX.setCustomPage('${info[0]}', ${info[1]})">${info[0]}</a>\n`;
	}
	return `<ul style="cursor:pointer">
				<li><a ${active[0]} onclick="DataManagerEX.setBasicPage()">Basic Editor</a></li>
				<li><a ${active[1]} onclick="DataManagerEX.setNotePage()">Note Editor</a></li>
				<li class="dropdown"><a ${active[2]} class="dropdown">${this._customEditorName}</a>
					<div class="dropdown-content">
						${result}
					</div>
				</li>
				<li style="float:right"><a onclick="DataManagerEX.returnToMaker()">Return to Main</a></li>
			</ul>`;
};

/*
 * Use the array to input custom menu pieces.
 * Each piece will be a 2 length array.
 * Example: ['Name', 'HTML Getting Function']
 */
DataManagerEX.getCustomInfo = function() {
	return [
		//['Custom Name', 'DataManagerEX.getCustomHtml']
	];
};

DataManagerEX.getBasicHtml = function() {
	return `<p>
			<div id="main-wrap">
				<div style="float: left; width: 50%; text-align:center;"><br>
					<b>Section:</b><br>
					<select id="SectionSelect" onchange="DataManagerEX.updateTypes()">
						${this.getTypeList()}
					</select>
				</div>
				<div style="float: right; width: 50%; text-align:center;"><br>
					<b>Object:</b><br>
					<select id="ObjectSelect" onchange="DataManagerEX.updateObjects()">
						${this.getObjectList()}
					</select>
				</div>
			</div>
			<br><br><br><br><br>
			<table id="PropertyList">
				${this.getProperties()}
			</table>
			<div id="PageControl" style="text-align: center; float: center; width: 100%; position: fixed; bottom: 0; padding-bottom: 40px;">
				${this.getPages()}
			</div>
			</p>`;
};

DataManagerEX.getProperties = function() {
	return `<tr>
				<th>Property</th>
				<th>Eval</th>
				<th>Input</th>
			</tr>
			${this.getPropertyList()}`;
};

DataManagerEX.getTypeList = function() {
	let result = '';
	this._types.forEach(function(type) {
		const selected = (this._type === type) ? 'selected' : '';
		result += `<option value="${type}" ${selected}>${type}</option>`;
	}, this);
	return result;
};

DataManagerEX.getObjectList = function() {
	if(!$dataBasicEX[this._type]) $dataBasicEX[this._type] = {};
	const data = window['$data' + this._type];
	let result = '';
	for(let i = 1; i < data.length; i++) {
		const obj = data[i];
		if(obj) {
			const selected = (parseInt(this._id) === i) ? 'selected' : '';
			const changed = ($dataBasicEX[this._type][String(i)]) ? '*' : '';
			result += `<option value="${i}" ${selected}>${_.pad(obj.id)}) ${obj.name} ${changed}</option>`;
		}
	}
	return result;
};

DataManagerEX.getPropertyList = function() {
	const list = this._props[this._type];
	const data = $dataBasicEX[this._type][this._id];
	let result = '';
	for(let i = (this._listIndex * 6); i < Math.min((this._listIndex + 1) * 6, list.length); i++) {
		const name = (list[i].substring(0, 1) === '#') ? list[i].substring(1) : list[i];
		let value = (data && data[name]) ? data[name] : '';
		const checked = (value.substring(0, 1) === '$') ? 'checked' : '';
		if(checked === 'checked') value = value.replace(/'/g, '\"');
		value = value.substring(1);
		result += `<tr>
					<td style="text-align: center;">${_.capFirst(name)}</td>
					<td style="width: 15%; text-align: center;"><input type="checkbox" id="check_${list[i]}" ${checked}></td>
					<td style="width: 55%; text-align: center;"><input type="text" size="45" id="${list[i]}" value='${value}'></td>
				</tr>`;
	}
	return result;
};

DataManagerEX.getPages = function() {
	const max = Math.ceil(this._props[this._type].length / 6);
	if(max === 1) {
		return `<div style="transform: translateY(-14px); float: left; width: 100%; text-align:center;">
					<button class="button" onclick="DataManagerEX.saveCurrent()" />Save Object!</button>
				</div>`;
	}
	return `<div style="float: right; width: 50%; text-align:center;">
				<div style="transform: translateY(-9px); float: right; width: 34%; text-align:center;">
					<button class="button" onclick="DataManagerEX.incrementPage()" />\u21D2</button>
				</div>
				<b>Page: (${this._listIndex + 1}/${max})</b>
				<div style="transform: translateY(-9px); float: left; width: 34%; text-align:center;">
						<button class="button" onclick="DataManagerEX.decrementPage()" />\u21D0</button>
				</div>
			</div>
			<div style="transform: translateY(-9px); float: left; width: 50%; text-align:center;">
				<button class="button" onclick="DataManagerEX.saveCurrent()" />Save Object!</button>
			</div>`;
};

DataManagerEX.updateTypes = function() {
	this._type = MakerManager.document.getElementById('SectionSelect').value;
	this._id = MakerManager.document.getElementById('ObjectSelect').value;
	this._listIndex = 0;
	this.refreshObjects();
	this.refreshPages();
};

DataManagerEX.updateObjects = function() {
	this._id = MakerManager.document.getElementById('ObjectSelect').value;
	this.refreshProperties();
};

DataManagerEX.refreshObjects = function() {
	MakerManager.document.getElementById('ObjectSelect').innerHTML = this.getObjectList();
	this.refreshProperties();
};

DataManagerEX.refreshProperties = function() {
	MakerManager.document.getElementById('PropertyList').innerHTML = this.getProperties();
};

DataManagerEX.refreshPages = function() {
	MakerManager.document.getElementById('PageControl').innerHTML = this.getPages();
};

DataManagerEX.saveCurrent = function() {
	if(!$dataBasicEX[this._type][this._id]) $dataBasicEX[this._type][this._id] = {};
	const list = this._props[this._type];
	const data = $dataBasicEX[this._type][this._id];
	for(let i = 0; i < list.length; i++) {
		const element = MakerManager.document.getElementById(list[i]);
		const chkElem = MakerManager.document.getElementById('check_' + list[i]);
		const propName = (list[i].substring(0, 1) === '#') ? list[i].substring(1) : list[i];
		if(element && chkElem && element.value.trim().length > 0) {
			let value = String(element.value).trim();
			if(chkElem.checked) {
				value = '$' + value; //Eval
			} else if(list[i].substring(0, 1) === '#') {
				value = '#' + value; //Number
			} else {
				value = '^' + value; //String
			}
			$dataBasicEX[this._type][this._id][propName] = value;
		} else if(typeof($dataBasicEX[this._type][this._id][propName]) !== "undefined") {
			delete $dataBasicEX[this._type][this._id][propName];
		}
	}
	if(JSON.stringify($dataBasicEX[this._type][this._id]) === "{}") {
		delete $dataBasicEX[this._type][this._id];
	}
	this.updateTypes();
};

DataManagerEX.incrementPageExists = function() {
	return ((this._listIndex + 1) * 6) < this._props[this._type].length;
};

DataManagerEX.decrementPageExists = function() {
	return this._listIndex > 0;
};

DataManagerEX.incrementPage = function() {
	if(this.incrementPageExists()) {
		this._listIndex++;
		this.refreshProperties();
		this.refreshPages();
	}
};

DataManagerEX.decrementPage = function() {
	if(this.decrementPageExists()) {
		this._listIndex--;
		this.refreshProperties();
		this.refreshPages();
	}
};

DataManagerEX.updateTypesNote = function() {
	this._type = MakerManager.document.getElementById('SectionSelect').value;
	this._id = MakerManager.document.getElementById('ObjectSelect').value;
	this.refreshObjectsNote();
};

DataManagerEX.updateObjectsNote = function() {
	this._id = MakerManager.document.getElementById('ObjectSelect').value;
	this.refreshBigNote();
};

DataManagerEX.refreshObjectsNote = function() {
	MakerManager.document.getElementById('ObjectSelect').innerHTML = this.getObjectListNote();
	this.refreshBigNote();
};

DataManagerEX.refreshBigNote = function() {
	MakerManager.document.getElementById('NoteInput').value = this.getCurrentNote();
};

DataManagerEX.getNoteHtml = function() {
	return `<p>
			<div id="main-wrap">
				<div style="float: left; width: 50%; text-align:center;"><br>
					<b>Section:</b><br>
					<select id="SectionSelect" onchange="DataManagerEX.updateTypesNote()">
						${this.getTypeList()}
					</select>
				</div>
				<div style="float: right; width: 50%; text-align:center;"><br>
					<b>Object:</b><br>
					<select id="ObjectSelect" onchange="DataManagerEX.updateObjectsNote()">
						${this.getObjectListNote()}
					</select>
				</div>
			</div><br><br><br><br>
			<p style="text-align: center;"><textarea id="NoteInput" rows="26" cols="68">${this.getCurrentNote()}</textarea></p>
			<p style="text-align: center;"><button class="button" onclick="DataManagerEX.saveCurrentNote()" />Save Object!</button></p>
			</p>`;
};

DataManagerEX.getObjectListNote = function() {
	if(!$dataNotes[this._type]) $dataNotes[this._type] = {};
	const data = window['$data' + this._type];
	let result = '';
	for(let i = 1; i < data.length; i++) {
		const obj = data[i];
		if(obj) {
			const selected = (parseInt(this._id) === i) ? 'selected' : '';
			const changed = ($dataNotes[this._type][String(i)]) ? '*' : '';
			result += `<option value="${i}" ${selected}>${_.pad(obj.id)}) ${obj.name} ${changed}</option>`;
		}
	}
	return result;
};

DataManagerEX.getCurrentNote = function() {
	if($dataNotes[this._type] && $dataNotes[this._type][this._id]) {
		return $dataNotes[this._type][this._id];
	}
	return '';
};

DataManagerEX.saveCurrentNote = function() {
	this._type = MakerManager.document.getElementById('SectionSelect').value;
	this._id = MakerManager.document.getElementById('ObjectSelect').value;
	const note = MakerManager.document.getElementById('NoteInput').value;
	if(!$dataNotes[this._type]) $dataNotes[this._type] = {};
	$dataNotes[this._type][this._id] = note;
	if(typeof($dataNotes[this._type][this._id]) === "string" && $dataNotes[this._type][this._id] === '') {
		delete $dataNotes[this._type][this._id];
	}
	this.updateTypesNote();
};

DataManagerEX.onFinish = function() {
	this.save();
	this.requestRestart();
};

DataManagerEX.requestRestart = function() {
	if(this.requestRestartCondition()) {
		if(window.confirm("Database EX changes are detected! Would you like to preform a SUPER RESTART to apply the changes?")) {
			_.move = false;
			DebugManager.restartGame();
		}
	}
};

DataManagerEX.requestRestartCondition = function() {
	return this._oldDataEx !== JsonEx.stringify($dataBasicEX) || this._oldNotes !== JsonEx.stringify($dataNotes);
};

DataManagerEX.returnToMaker = function() {
	this.onFinish();
	MakerManager.setupWindowHtml();
};

DataManagerEX.initManager();

//-----------------------------------------------------------------------------
// DebugManager
//-----------------------------------------------------------------------------

DebugManager.gameSpeed = 1;
DebugManager.disableEncounters = false;
DebugManager.disableCollisions = false;

DebugManager.isOnMap = function() {
	return SceneManager._scene.constructor === Scene_Map && SceneManager._sceneStarted;
};

/*
 * Player Transfer
 */

DebugManager.preformPlayerTransfer = function() {
	if(this.isOnMap()) {
		const mapId = MakerManager.document.getElementById('mapId').value;
		$gamePlayer.reserveTransfer(parseInt(mapId), 0, 0, 0, 2);
		_._isSuperTransfer = true;
		SoundManager.playLoad();
	} else {
		alert("This feature can only be used while the player is on the map!");
	}
};

/*
 * Game Speed
 */

DebugManager.refreshGameSpeed = function() {
	const speed = MakerManager.document.getElementById('gameSpd').value;
	this.gameSpeed = parseInt(speed);
	SoundManager.playLoad();
};

/*
 * Gold
 */

DebugManager.setGold = function() {
	const gold = MakerManager.document.getElementById('gold').value;
	$gameParty._gold = parseInt(gold).clamp(0, $gameParty.maxGold());
	SoundManager.playLoad();
};

/*
 * Encounters/Collision
 */

DebugManager.refreshCollisions = function() {
	this.disableCollisions = !!MakerManager.document.getElementById('collision').checked;
};

DebugManager.refreshEncounters = function() {
	this.disableEncounters = !!MakerManager.document.getElementById('encounter').checked;
};

/*
 * Givers
 */

DebugManager.giveActorSkill = function() {
	const id = MakerManager.document.getElementById('actorId').value;
	const skill = MakerManager.document.getElementById('skillId').value;
	$gameActors.actor(parseInt(id)).learnSkill(parseInt(skill));
	SoundManager.playUseItem();
};

DebugManager.givePartyItems = function() {
	const id = MakerManager.document.getElementById('itemId').value;
	const count = MakerManager.document.getElementById('itemCount').value;
	$gameParty.gainItem($dataItems[parseInt(id)], parseInt(count));
	SoundManager.playUseItem();
};

DebugManager.givePartyWeapons = function() {
	const id = MakerManager.document.getElementById('weaponId').value;
	const count = MakerManager.document.getElementById('weaponCount').value;
	$gameParty.gainItem($dataWeapons[parseInt(id)], parseInt(count));
	SoundManager.playUseItem();
};

DebugManager.givePartyArmors = function() {
	const id = MakerManager.document.getElementById('armorId').value;
	const count = MakerManager.document.getElementById('armorCount').value;
	$gameParty.gainItem($dataArmors[parseInt(id)], parseInt(count));
	SoundManager.playUseItem();
};

DebugManager.givePartyMembers = function() {
	const id = MakerManager.document.getElementById('allActorId').value;
	$gameParty.addActor(parseInt(id));
};

DebugManager.takePartyMembers = function() {
	const id = MakerManager.document.getElementById('allActorId').value;
	$gameParty.removeActor(parseInt(id));
};

/*
 * Super Restart Functions
 */

DebugManager.restartGame = function() {
	if(!SceneManager._sceneStarted) setTimeout(this.restartGame.bind(this), 10);
	if(!this.isOnMap()) {
		if(SceneManager._scene.constructor === Scene_Title) {
			this.restartGameForRealizies();
			return;
		}
		if(!SceneManager._stack[0] || SceneManager._stack[0] !== Scene_Map) {
			alert("The game could not be restarted!");
			return;
		}
	}
	if(DataManager.saveGame(999)) {
		StorageManager.cleanBackup(999);
	}
	this.restartGameForRealizies();
};

DebugManager.restartGameForRealizies = function() {
	this.setToReopen(999);
	location.reload();
	MakerManager.window.close(true);
};

DebugManager.localPath = function() {
	const path = require('path');
	return path.dirname(process.mainModule.filename);
};

DebugManager.getReopenPath = function() {
	return this.localPath() + "ShouldOpenSTE";
};

DebugManager.setToReopen = function(id) {
	const fs = require('fs');
	const filePath = this.getReopenPath();
	fs.writeFileSync(filePath, String(id));
};

DebugManager.removeReopener = function() {
	const fs = require('fs');
	const filePath = this.getReopenPath();
	if (fs.existsSync(filePath)) {
		fs.unlinkSync(filePath);
	}
};

DebugManager.isSetToReopen = function() {
	const fs = require('fs');
	const filePath = this.getReopenPath();
	if(!fs.existsSync(filePath)) {
		return false;
	} else {
		return fs.readFileSync(filePath, { encoding: 'utf8' });
	}
};

/*
 * Quick Save/Load
 */

DebugManager.quickSave = function() {
	const id = DataManager.maxSavefiles() + 1;
	if(DataManager.saveGame(id)) {
		StorageManager.cleanBackup(id);
	}
};

DebugManager.quickLoad = function() {
	const id = DataManager.maxSavefiles() + 1;
	if(StorageManager.exists(id)) {
		DataManager.loadGame(id);
		Scene_Load.prototype.reloadMapIfUpdated.call(this);
		if(SceneManager._scene.constructor !== Scene_Map) SceneManager.goto(Scene_Map);
	} else {
		alert('No quick save file exists!');
	}
};

DebugManager.quickRestartLoad = function() {
	const id = DataManager.maxSavefiles() + 1;
	if(StorageManager.exists(id)) {
		this.setToReopen(DataManager.maxSavefiles() + 1);
		location.reload();
		MakerManager.window.close(true);
	} else {
		alert('No quick save file exists!');
	}
}

DebugManager.deleteQuickSave = function() {
	const id = DataManager.maxSavefiles() + 1;
	if(StorageManager.exists(id)) {
		StorageManager.remove(id);
		DataManager.deleteGlobal(id);
	}
};

/*
 * Debug Tool Stuff
 */

DebugManager.initManager = function() {
	this.active = false;
	this.mode = '';
	this._listIndex = 0;
};

DebugManager.setupWindowHtml = function() {
	this.active = true;
	this._listIndex = 0;
	this._maxSwitches = $dataSystem.switches.length - 1;
	this._maxVariables = $dataSystem.variables.length - 1;
	MakerManager.window.title = "Super Tools Engine  -  Debug Tool  |  SumRndmDde";
	MakerManager.mode = 'debug';
	this.setBasicPage();
};

DebugManager.setBasicPage = function() {
	this.mode = 'basic';
	MakerManager.mainHTML = this.topBar(0) + this.getBasicHtml();
};

DebugManager.setGiverPage = function() {
	this.mode = 'give';
	MakerManager.mainHTML = this.topBar(1) + this.getGiverHtml();
};

DebugManager.setGiver2Page = function() {
	this.mode = 'give2';
	MakerManager.mainHTML = this.topBar(2) + this.getGiver2Html();
};

DebugManager.setSwitchPage = function() {
	this.mode = 'switch';
	this._listIndex = 0;
	MakerManager.mainHTML = this.topBar(3) + this.getSwitchHtml();
	this.refreshSwitchTables();
};

DebugManager.setVariablePage = function() {
	this.mode = 'variable';
	this._listIndex = 0;
	MakerManager.mainHTML = this.topBar(4) + this.getVariableHtml();
	this.refreshVariableTables();
};

DebugManager.topBar = function(index) {
	const active = ['', '', ''];
	active[index] = 'class="active"';
	return `<ul style="cursor:pointer">
				<li><a ${active[0]} onclick="DebugManager.setBasicPage()">Basic</a></li>
				<li><a ${active[1]} onclick="DebugManager.setGiverPage()">Givers I</a></li>
				<li><a ${active[2]} onclick="DebugManager.setGiver2Page()">Givers II</a></li>
				<li><a ${active[3]} onclick="DebugManager.setSwitchPage()">Switches</a></li>
				<li><a ${active[4]} onclick="DebugManager.setVariablePage()">Variables</a></li>
				<li style="float:right"><a onclick="DebugManager.returnToMaker()">Return to Main</a></li>
			</ul>`;
};

DebugManager.getMapList = function() {
	let result = `<select id="mapId" style="width:100%" onchange="DebugManager.preformPlayerTransfer()">`;
	for(let i = 1; i < $dataMapInfos.length; i++) {
		const info = $dataMapInfos[i];
		if(!info) continue;
		result += '<option value="' + info.id + '"> (' + _.pad(info.id) + ') ' + info.name + '</option>';
	}
	result += `</select>`;
	return result;
};

DebugManager.getSkillList = function() {
	let result = `<select id="skillId" style="width:100%">`;
	for(let i = 1; i < $dataSkills.length; i++) {
		const info = $dataSkills[i];
		if(!info) continue;
		result += '<option value="' + info.id + '"> (' + _.pad(info.id) + ') ' + info.name + '</option>';
	}
	result += `</select>`;
	return result;
};

DebugManager.getActorList = function() {
	let result = `<select id="actorId" style="width:40%">`;
	for(let i = 0; i < $gameParty.members().length; i++) {
		const info = $gameParty.members()[i];
		if(!info) continue;
		result += '<option value="' + info.actorId() + '">' + info.name() + '</option>';
	}
	result += `</select>`;
	return result;
};

DebugManager.getEntireActorList = function() {
	let result = `<select id="allActorId" style="width:100%">`;
	for(let i = 0; i < $dataActors.length; i++) {
		const info = $dataActors[i];
		if(!info) continue;
		result += '<option value="' + info.id + '"> (' + _.pad(info.id) + ') ' + info.name + '</option>';
	}
	result += `</select>`;
	return result;
};

DebugManager.getItemList = function() {
	let result = `<select id="itemId" style="width:100%">`;
	for(let i = 1; i < $dataItems.length; i++) {
		const info = $dataItems[i];
		if(!info) continue;
		result += '<option value="' + info.id + '"> (' + _.pad(info.id) + ') ' + info.name + '</option>';
	}
	result += `</select>`;
	return result;
};

DebugManager.getWeaponList = function() {
	let result = `<select id="weaponId" style="width:100%">`;
	for(let i = 1; i < $dataWeapons.length; i++) {
		const info = $dataWeapons[i];
		if(!info) continue;
		result += '<option value="' + info.id + '"> (' + _.pad(info.id) + ') ' + info.name + '</option>';
	}
	result += `</select>`;
	return result;
};

DebugManager.getArmorList = function() {
	let result = `<select id="armorId" style="width:100%">`;
	for(let i = 1; i < $dataArmors.length; i++) {
		const info = $dataArmors[i];
		if(!info) continue;
		result += '<option value="' + info.id + '"> (' + _.pad(info.id) + ') ' + info.name + '</option>';
	}
	result += `</select>`;
	return result;
};

DebugManager.getBasicHtml = function() {
	return `<p><table>
				<tr>
					<th>Name</th>
					<th>Control</th>
					<th>Description</th>
				</tr>
				<tr>
					<td style="text-align: center;">
						Speed Master
					</td>
					<td style="text-align: center;">
						<select id="gameSpd" style="width:100%" onchange="DebugManager.refreshGameSpeed()">
							<option value="1">1x Speed</option>
							<option value="2">2x Speed</option>
							<option value="3">3x Speed</option>
							<option value="5">5x Speed</option>
							<option value="10">10x Speed</option>
						</select>
					</td>
					<td style="width: 40%;">
						Allows the game to have its speed changed to make playtesting easier.
					</td>
				</tr>
				<tr>
					<td style="text-align: center;">
						Transfer
					</td>
					<td style="text-align: center;">
						${this.getMapList()}
					</td>
					<td style="width: 40%;">
						Allows developers to immediately transfer to any map within their game.
					</td>
				</tr>
				<tr>
					<td style="text-align: center;">
						Gold Set
					</td>
					<td style="text-align: center;">
						<input id="gold" value="10000"><hr style="height:0%; visibility:hidden;" />
						<button class="button" onclick="DebugManager.setGold()" />Set Gold</button>
					</td>
					<td style="width: 40%;">
						Sets the party's gold to whatever value is inputted.
					</td>
				</tr>
				<tr>
					<td style="text-align: center;">
						Disable Collisions
					</td>
					<td style="text-align: center;">
						<input type="checkbox" style="width:50%;height:50%;" onchange="DebugManager.refreshCollisions()" id="collision" ${this.disableCollisions ? 'checked' : ''}>
					</td>
					<td style="width: 40%;">
						When checked, the player will be able to walk around without collision.
					</td>
				</tr>
				<tr>
					<td style="text-align: center;">
						Disable Encounters
					</td>
					<td style="text-align: center;">
						<input type="checkbox" style="width:50%;height:50%;" onchange="DebugManager.refreshEncounters()" id="encounter" ${this.disableEncounters ? 'checked' : ''}>
					</td>
					<td style="width: 40%;">
						When checked, all random enemy encounters will be disabled.
					</td>
				</tr>
			</table></p>`;
};

DebugManager.getGiverHtml = function() {
	return `<p><table>
				<tr>
					<th>Control</th>
					<th>Description</th>
				</tr>
				<tr>
					<td style="text-align: center;">
						${this.getSkillList()}<hr style="height:0%; visibility:hidden;" />
						${this.getActorList()}&nbsp;&nbsp;&nbsp;&nbsp;
						<button class="button" onclick="DebugManager.giveActorSkill()" />Give Skill</button>
					</td>
					<td style="width: 60%;">
						Allows any Actor within the party to learn any Skill immediately.
					</td>
				</tr>
				<tr>
					<td style="text-align: center;">
						${this.getItemList()}<hr style="height:0%; visibility:hidden;" />
						<input id="itemCount" value="1" style="width:30%;">&nbsp;&nbsp;&nbsp;&nbsp;
						<button class="button" onclick="DebugManager.givePartyItems()" />Give Item</button>
					</td>
					<td style="width: 60%;">
						Allows the party to immediately obtain a specified amount of any item.
					</td>
				</tr>
				<tr>
					<td style="text-align: center;">
						${this.getWeaponList()}<hr style="height:0%; visibility:hidden;" />
						<input id="weaponCount" value="1" style="width:30%;">&nbsp;&nbsp;&nbsp;&nbsp;
						<button class="button" onclick="DebugManager.givePartyWeapons()" />Give Weapon</button>
					</td>
					<td style="width: 60%;">
						Allows the party to immediately obtain a specified amount of any weapon.
					</td>
				</tr>
				<tr>
					<td style="text-align: center;">
						${this.getArmorList()}<hr style="height:0%; visibility:hidden;" />
						<input id="armorCount" value="1" style="width:30%;">&nbsp;&nbsp;&nbsp;&nbsp;
						<button class="button" onclick="DebugManager.givePartyArmors()" />Give Armor</button>
					</td>
					<td style="width: 60%;">
						Allows the party to immediately obtain a specified amount of any armor.
					</td>
				</tr>
			</table></p>`;
};

DebugManager.getGiver2Html = function() {
	return `<p><table>
				<tr>
					<th>Control</th>
					<th>Description</th>
				</tr>
				<tr>
					<td style="text-align: center;">
						${this.getEntireActorList()}<hr style="height:0%; visibility:hidden;" />
						<button class="button" onclick="DebugManager.givePartyMembers()" />Add</button>&nbsp;&nbsp;&nbsp;&nbsp;
						<button class="button" onclick="DebugManager.takePartyMembers()" />Remove</button>
					</td>
					<td style="width: 60%;">
						Allows developers to control the actors within the current party.
					</td>
				</tr>
			</table></p>`;
};

DebugManager.getSwitchHtml = function() {
	let result = `<p>
					<div style="float: left; width: 47%; text-align:center;">
						<table id="Col1"></table>
					</div>
					<div style="float: right; width: 47%; text-align:center;">
						<table id="Col2"></table>
					</div>`;
	if(this._maxSwitches > 40) {
		result += `<p><div style="margin: 0 auto; width: 100%; text-align:center; position: fixed; bottom: 0; padding-bottom: 40px; padding-bottom: 30px;">
					<div style="transform: translateY(-9px); float: right; width: 30%; text-align:left;">
						<button class="button" onclick="DebugManager.incrementPage()" />\u21D2</button>
					</div>
					<b id="Page"></b>
					<div style="transform: translateY(-9px); float: left; width: 30%; text-align:right;">
							<button class="button" onclick="DebugManager.decrementPage()" />\u21D0</button>
					</div>
				</div></p>`;
	}
	result += '</p>';
	return result;
};

DebugManager.refreshSwitchTables = function() {
	let result1 = '';
	let result2 = '';
	const first = (this._listIndex * 40) + 1;
	for(let i = first; i <= Math.min(first + 19, this._maxSwitches); i++) {
		const value = $gameSwitches.value(i);
		const str = $dataSystem.switches[i];
		result1 += `<tr>
						<td style="padding: 2px;width: 5%;">${_.pad(i)}</td>
						<td style="padding: 2px;width: 35%;">${str.length > 20 ? str.substring(0, 20) + '...' : str}</td>
						<td style="padding: 2px;width: 5%;" id="Switch ${i} Label">${value ? 'ON' : 'OFF'}</td>
						<td style="padding: 2px;width: 5%;"><input type="checkbox" onchange="DebugManager.changeSwitch(${i})" id="Switch ${i}" ${value ? 'checked' : ''}></td>
					</tr>`;
	}
	for(let i = first + 20; i <= Math.min(first + 39, this._maxSwitches); i++) {
		const value = $gameSwitches.value(i);
		const str = $dataSystem.switches[i];
		result2 += `<tr>
						<td style="padding: 2px;width: 5%;">${_.pad(i)}</td>
						<td style="padding: 2px;width: 35%;">${str.length > 20 ? str.substring(0, 20) + '...' : str}</td>
						<td style="padding: 2px;width: 5%;" id="Switch ${i} Label">${value ? 'ON' : 'OFF'}</td>
						<td style="padding: 2px;width: 5%;"><input type="checkbox" onchange="DebugManager.changeSwitch(${i})" id="Switch ${i}" ${value ? 'checked' : ''}></td>
					</tr>`;
	}
	MakerManager.document.getElementById('Col1').innerHTML = result1;
	MakerManager.document.getElementById('Col2').innerHTML = result2;
	MakerManager.document.getElementById('Page').innerHTML = `Page: (${this._listIndex + 1}/${Math.ceil(this._maxSwitches / 40)})`;
};

DebugManager.getVariableHtml = function() {
	let result = `<p>
					<div style="float: left; width: 47%; text-align:center;">
						<table id="Col1">
							<tr>
								<th> Tets</th>
							</tr>
						</table>
					</div>
					<div style="float: right; width: 47%; text-align:center;">
						<table id="Col2"></table>
					</div>`;
	if(this._maxVariables > 40) {
		result += `<p><div style="margin: 0 auto; width: 100%; text-align:center; position: fixed; bottom: 0; padding-bottom: 40px; padding-bottom: 30px;">
					<div style="transform: translateY(-9px); float: right; width: 30%; text-align:left;">
						<button class="button" onclick="DebugManager.incrementPage()" />\u21D2</button>
					</div>
					<b id="Page"></b>
					<div style="transform: translateY(-9px); float: left; width: 30%; text-align:right;">
							<button class="button" onclick="DebugManager.decrementPage()" />\u21D0</button>
					</div>
				</div></p>`;
	}
	result += '</p>';
	return result;
};

DebugManager.refreshVariableTables = function() {
	let result1 = '';
	let result2 = '';
	const first = (this._listIndex * 40) + 1;
	for(let i = first; i <= Math.min(first + 19, this._maxVariables); i++) {
		const value = $gameVariables.value(i);
		const str = $dataSystem.variables[i];
		result1 += `<tr>
						<td style="padding: 2px;width: 5%;">${_.pad(i)}</td>
						<td style="padding: 2px;width: 35%;">${str.length > 20 ? str.substring(0, 20) + '...' : str}</td>
						<td style="padding: 2px;width: 10%;"><input type="text" style="width: 100%;" onchange="DebugManager.changeVariable(${i})" id="Variable ${i}" value="${value}"></td>
					</tr>`;
	}
	for(let i = first + 20; i <= Math.min(first + 39, this._maxVariables); i++) {
		const value = $gameVariables.value(i);
		const str = $dataSystem.variables[i];
		result2 += `<tr>
						<td style="padding: 2px;width: 5%;">${_.pad(i)}</td>
						<td style="padding: 2px;width: 35%;">${str.length > 20 ? str.substring(0, 20) + '...' : str}</td>
						<td style="padding: 2px;width: 10%;"><input type="text" style="width: 100%;" onchange="DebugManager.changeVariable(${i})" id="Variable ${i}" value="${value}"></td>
					</tr>`;
	}
	MakerManager.document.getElementById('Col1').innerHTML = result1;
	MakerManager.document.getElementById('Col2').innerHTML = result2;
	MakerManager.document.getElementById('Page').innerHTML = `Page: (${this._listIndex + 1}/${Math.ceil(this._maxVariables / 40)})`;
};

DebugManager.incrementPageExists = function() {
	const length = (this.mode === 'switch') ? this._maxSwitches : this._maxVariables;
	return ((this._listIndex + 1) * 40) < length;
};

DebugManager.decrementPageExists = function() {
	return this._listIndex > 0;
};

DebugManager.incrementPage = function() {
	if(this.incrementPageExists()) {
		this._listIndex++;
		if(this.mode === 'switch') this.refreshSwitchTables();
		if(this.mode === 'variable') this.refreshVariableTables();
	}
};

DebugManager.decrementPage = function() {
	if(this.decrementPageExists()) {
		this._listIndex--;
		if(this.mode === 'switch') this.refreshSwitchTables();
		if(this.mode === 'variable') this.refreshVariableTables();
	}
};

DebugManager.changeSwitch = function(id) {
	const value = MakerManager.document.getElementById('Switch ' + id).checked;
	$gameSwitches.setValue(id, value);
	MakerManager.document.getElementById('Switch ' + id + ' Label').innerHTML = value ? 'ON' : 'OFF';
};

DebugManager.changeVariable = function(id) {
	const value = Number(MakerManager.document.getElementById('Variable ' + id).value);
	$gameVariables.setValue(id, value);
};

DebugManager.returnToMaker = function() {
	this.onFinish();
	MakerManager.setupWindowHtml();
};

DebugManager.onFinish = function() {
	this.active = false;
	this.mode = '';
};

//-----------------------------------------------------------------------------
// WindowManager
//-----------------------------------------------------------------------------

WindowManager._focusWindow = null;

WindowManager.initManager = function() {
	FileManager.checkDataExists("Windows.json", "{}");
};

WindowManager.save = function() {
	FileManager.saveData($dataWindows, "Windows.json");
};

WindowManager.setupWindowHtml = function() {
	const scene = SceneManager._scene;
	const cnstr = scene.constructor;
	if(cnstr === Scene_Map) {
		alert("This feature is not available on the map!");
	} else if(cnstr === Scene_Battle && Imported["SumRndmDde Battle GUI Core"]) {
		alert("You cannot edit battles with SRD_BattleGUICore installed!");
	} else if(scene._windowLayer && scene._windowLayer.children && scene._windowLayer.children.length > 0) {
		MakerManager.window.title = "Super Tools Engine  -  Menu Editor  |  SumRndmDde";
		MakerManager.mode = 'window';
		this._scene = scene;
		this._scene.startWindowEditor();
		this.setupMakerHtml();
	} else {
		alert("There are no windows detected on the current scene!");
	}
};

WindowManager.setupMakerHtml = function() {
	MakerManager.mainHTML = this.topBar('main') + this.getMakerHtml();
	this.onWindowChange();
};

WindowManager.returnToMaker = function() {
	this.onFinish();
	MakerManager.setupWindowHtml();
};

WindowManager.onFinish = function() {
	this.save();
	this._scene.endWindowEditor();
};

WindowManager.refreshProperties = function() {
	this._scene.refreshEditWindowProperties();
};

WindowManager.topBar = function(type) {
	const active = {};
	active[type] = 'class="active"';
	return `<ul style="cursor:pointer">
				<li><a ${active['main'] || ''} onclick="WindowManager.setupMakerHtml()">Maker</a></li>
				${this.topBarCustoms(active)}
				<li><a onclick="WindowManager.resetScene()">Reset Menu</a></li>
				<li style="float:right"><a onclick="WindowManager.returnToMaker()">Return to Main</a></li>
			</ul>`;
};

WindowManager.topBarCustoms = function(active) {
	return '';
};

WindowManager.getMakerHtml = function() {
	const windowSelect = MakerManager.document.getElementById('WindowSelect');
	if(windowSelect) {
		this._focusWindow = this._scene.getEditWindow(windowSelect.value);
	}
	return `<p>
				<p style="text-align:center"><br>
					<b>Target Window:</b><br>
					${this.getWindowList()}<br><br>
				</p>
				<table id='MainTable'>
					<tr>
						<th>Property</th>
						<th>Value</th>
					</tr>
					${this.getTableHtml()}
				</table><br>
				<p style="text-align:center">
					<button class="button" onclick="WindowManager.refreshProperties()" />Refresh Window!</button>
				</p>
			</p>`;
};

WindowManager.refreshTable = function() {
	const windowSelect = MakerManager.document.getElementById('WindowSelect');
	this._focusWindow = this._scene.getEditWindow(windowSelect.value);
	MakerManager.document.getElementById('MainTable').innerHTML = `<tr>
		<th>Property</th>
		<th>Value</th>
	</tr>
	${(!!this._focusWindow) ? this.getTableHtml() : ''}`;
};

WindowManager.getTableHtml = function() {
	const scene = this._scene.constructor.name;
	const win = this._focusWindow.getWindowCode();
	if(!$dataWindows[scene]) $dataWindows[scene] = {};
	if(!$dataWindows[scene][win]) $dataWindows[scene][win] = {};
	const data = $dataWindows[scene][win];
	let result = `<tr>
					<td style="text-align: center;">Opacity:</td>
					<td style="width: 50%;text-align: center;"><input type="text" id="Opacity" value="${data.opacity || this._focusWindow.opacity}"></td>
				</tr>
				<tr>
					<td style="text-align: center;">Width:</td>
					<td style="width: 50%;text-align: center;"><input type="text" id="Width" value="${data.width || this._focusWindow.width}"></td>
				</tr>`;
		if(!this._focusWindow._ste_isCommand) {
			result += `<tr>
							<td style="text-align: center;">Height:</td>
							<td style="width: 50%;text-align: center;"><input type="text" id="Height" value="${data.height || this._focusWindow.height}"></td>
						</tr>`;
		}
	if(this._focusWindow._ste_isSelectable) {
		if(this._focusWindow._ste_isCommand || this._focusWindow.numVisibleRows) {
			result += `<tr>
						<td style="text-align: center;">Visible Rows:</td>
						<td style="width: 50%;text-align: center;"><input type="text" id="Rows" value="${data.rows || this._focusWindow.numVisibleRows()}"></td>
					</tr>`;
		}
		result += `<tr>
					<td style="text-align: center;">Max Columns:</td>
					<td style="width: 50%;text-align: center;"><input type="text" id="Cols" value="${data.cols || this._focusWindow.maxCols()}"></td>
				</tr>`;
	}
	if(this._focusWindow._ste_isCommand) {
		result += `<tr>
					<td style="text-align: center;">Line Height:</td>
					<td style="width: 50%;text-align: center;"><input type="text" id="lineHeight" value="${data.lineHeight || this._focusWindow.lineHeight()}"></td>
				</tr>`;

		const selected = {left: '', center: '', right: ''};
		selected[data.align || this._focusWindow.itemTextAlign()] = 'selected';
		result += `<tr>
					<td style="text-align: center;">Text Align:</td>
					<td style="width: 50%;text-align: center;">
						<select id="Text Align">
							<option value="left" ${selected.left}>Left</option>
							<option value="center" ${selected.center}>Center</option>
							<option value="right" ${selected.right}>Right</option>
						</select>
					</td>
				</tr>`;
	}
	return result;
};

WindowManager.getWindowList = function() {
	let result = '<select id="WindowSelect" onchange="WindowManager.onWindowChange()">';
	this._scene._windowLayer.children.forEach(function(window) {
		if(this.windowMeetsConditions(window)) {
			if(!this._focusWindow) this._focusWindow = window;
			result += '<option value="' + window.getWindowCode() + '">' + window.getWindowCode() + '</option>';
		}
	}, this);					
	result += '</select>';
	return result;
};

WindowManager.windowMeetsConditions = function(window) {
	return window && window.isOpen() && window.visible && window.backOpacity > 0 && window.contentsOpacity > 0 && this.windowConstructorMeetsConditions(window);
};

WindowManager.windowConstructorMeetsConditions = function(window) {
	return window.constructor && window.constructor.name && !_.banList.contains(window.constructor.name);
};

WindowManager.onWindowChange = function() {
	const name = MakerManager.document.getElementById('WindowSelect').value;
	this.refreshTable();
	this._scene.setEditWindow(name);
};

WindowManager.resetScene = function() {
	if(confirm('Would you like to reset all changes? The game will need to restart.')) {
		$dataWindows[this._scene.constructor.name] = undefined;
		this.save();
		DebugManager.restartGame();
	}
};

WindowManager.initManager();

//-----------------------------------------------------------------------------
// Game_Player
//-----------------------------------------------------------------------------

_.Game_Player_performTransfer = Game_Player.prototype.performTransfer;
Game_Player.prototype.performTransfer = function() {
	const isTransfer = this.isTransferring();
	_.Game_Player_performTransfer.apply(this, arguments);
	if(_._isSuperTransfer && isTransfer) {
		_._isSuperTransfer = false;
		this.locate(Math.floor($dataMap.width / 2), Math.floor($dataMap.height / 2));
		this.refresh();
	}
};

}

//-----------------------------------------------------------------------------
// Scene_Base
//-----------------------------------------------------------------------------

_.Scene_Base_initialize = Scene_Base.prototype.initialize;
Scene_Base.prototype.initialize = function() {
	_.Scene_Base_initialize.apply(this, arguments);
	this.windowIds = {};
	this._isWindowEditting = false;
	this._editWindow = null;
	this._editWindowName = '';
};

if(_.isPlaytest) {

_.Scene_Base_update = Scene_Base.prototype.update;
Scene_Base.prototype.update = function() {
	if(!this._isWindowEditting) {
		_.Scene_Base_update.apply(this, arguments);
	} else {
		if(this._editWindow) {
			if(TouchInput.isPressed()) {
				let x = TouchInput.x;
				let y = TouchInput.y;
				let newX = -1;
				let newY = -1;
				for(let i = 0; i < this._editXSnaps.length; i++) {
					if(Math.abs(this._editXSnaps[i] - x) < 24) {
						if(newX >= 0) {
							if(Math.abs(this._editXSnaps[i] - x) < Math.abs(newX - x)) {
								newX = this._editXSnaps[i];
							}
						} else {
							newX = this._editXSnaps[i];
						}
					}
				}
				for(let i = 0; i < this._editYSnaps.length; i++) {
					if(Math.abs(this._editYSnaps[i] - y) < 24) {
						if(newY >= 0) {
							if(Math.abs(this._editYSnaps[i] - y) < Math.abs(newY - y)) {
								newY = this._editYSnaps[i];
							}
						} else {
							newY = this._editYSnaps[i];
						}
					}
				}
				if(newX >= 0) x = newX;
				if(newY >= 0) y = newY;
				$dataWindows[this.constructor.name][this._editWindowName].x = x;
				$dataWindows[this.constructor.name][this._editWindowName].y = y;
				this._editWindow.x = x;
				this._editWindow.y = y;
			} else {
				if(Input.isTriggered('up'))    this._editWindow.y--;
				if(Input.isTriggered('down'))  this._editWindow.y++;
				if(Input.isTriggered('left'))  this._editWindow.x--;
				if(Input.isTriggered('right')) this._editWindow.x++;
				$dataWindows[this.constructor.name][this._editWindowName].x = this._editWindow.x;
				$dataWindows[this.constructor.name][this._editWindowName].y = this._editWindow.y;
			}
		}
	}
};

Scene_Base.prototype.startWindowEditor = function() {
	this._isWindowEditting = true;
};

Scene_Base.prototype.endWindowEditor = function() {
	if(this._editWindow) this._editWindow.setMenuEditTarget(false);
	this._isWindowEditting = false;
};

Scene_Base.prototype.getEditWindow = function(name) {
	const children = this._windowLayer.children;
	for(let i = 0; i < children.length; i++) {
		const win = children[i];
		if(win && win.getWindowCode() === name) {
			return win;
		}
	}
};

Scene_Base.prototype.setEditWindow = function(name) {
	if(!$dataWindows[this.constructor.name]) $dataWindows[this.constructor.name] = {};
	if(this._editWindow) this._editWindow.setMenuEditTarget(false);
	const children = this._windowLayer.children;
	for(let i = 0; i < children.length; i++) {
		const win = children[i];
		if(win && win.getWindowCode() === name) { 
			this._editWindow = win;
			this._editWindowName = win.getWindowCode();
			if(!$dataWindows[this.constructor.name][this._editWindowName]) $dataWindows[this.constructor.name][this._editWindowName] = {};
		}
	}
	if(!this._editWindow) return;
	this._editWindow.setMenuEditTarget(true);
	this._windowLayer.removeChild(this._editWindow);
	this.addWindow(this._editWindow);
	this.refreshEditSnaps();
};

Scene_Base.prototype.refreshEditSnaps = function() {
	this._editXSnaps = [0, Graphics.boxWidth - this._editWindow.width];
	this._editYSnaps = [0, Graphics.boxHeight - this._editWindow.height];
	const children = this._windowLayer.children;
	for(let i = 0; i < children.length; i++) {
		const win = children[i];
		if(win && this._editWindow !== win) {
			this._editXSnaps.push(win.x + win.width);
			this._editXSnaps.push(win.x - this._editWindow.width);
			this._editYSnaps.push(win.y + win.height);
			this._editYSnaps.push(win.y - this._editWindow.height);
		}
	}
	this._editXSnaps = this._editXSnaps.filter(function(value, index, array) {
		return value >= 0 && value < Graphics.boxWidth && index == array.indexOf(value);
	});
	this._editYSnaps = this._editYSnaps.filter(function(value, index, array) {
		return value >= 0 && value < Graphics.boxHeight && index == array.indexOf(value);
	});
};

Scene_Base.prototype.refreshEditWindowProperties = function() {
	if(!this._editWindow) return;
	const data = $dataWindows[this.constructor.name][this._editWindowName];
	const doc = MakerManager.document;
	const win = this._editWindow;
	const opacity = doc.getElementById('Opacity');
	const width = doc.getElementById('Width');
	const height = doc.getElementById('Height');
	const rows = doc.getElementById('Rows');
	const cols = doc.getElementById('Cols');
	const lineHeight = doc.getElementById('lineHeight');
	const align = doc.getElementById('Text Align');
	const errorText = 'Error with ' + this.constructor.name + '\'s ' + this._editWindowName;
	if(opacity) {
		data.opacity = opacity.value;
		try {
			win.opacity = eval(opacity.value);
		} catch(e) {
			console.log(errorText + ' opacity input.\n' + e);
		}
	}
	if(width) {
		data.width = width.value;
		try {
			win.width = eval(width.value);
		} catch(e) {
			console.log(errorText + ' width input.\n' + e);
		}
	}
	if(height) {
		data.height = height.value;
		try {
			win.height = eval(height.value);
		} catch(e) {
			console.log(errorText + ' height input.\n' + e);
		}
	}
	if(rows) {
		data.rows = rows.value;
		const errorCatch = win.numVisibleRows();
		win.numVisibleRows = function() {
			try {
				return eval(rows.value);
			} catch(e) {
				console.log(errorText + ' rows input.\n' + e);
				return errorCatch;
			}
		};
	}
	if(cols) {
		data.cols = cols.value;
		const errorCatch = win.maxCols();
		win.maxCols = function() {
			try {
				return eval(cols.value);
			} catch(e) {
				console.log(errorText + ' cols input.\n' + e);
				return errorCatch;
			}
		};
	}
	if(lineHeight) {
		data.lineHeight = lineHeight.value;
		const errorCatch = win.lineHeight();
		win.lineHeight = function() {
			try {
				return eval(lineHeight.value);
			} catch(e) {
				console.log(errorText + ' line height input.\n' + e);
				return errorCatch;
			}
		};
	}
	if(align) {
		data.align = align.value;
		const errorCatch = win.itemTextAlign();
		win.itemTextAlign = function() {
			return align.value;
		};
	}
	if(win._ste_isCommand) {
		win.height = win.windowHeight();
	}
	if(win.createContents) win.createContents();
	if(win.refresh) {
		try {
			win.refresh();
		} catch(e) {
			console.log(e);
		}
	}
	if(win._refreshAllParts) win._refreshAllParts();
	if(win.updateCursor) win.updateCursor();
	this.refreshEditSnaps();
};

}

Scene_Base.prototype.initCustomWindowPositions = function() {
	if(!$dataWindows[this.constructor.name]) return;
	const children = this._windowLayer.children;
	if(!children) return;
	for(let i = 0; i < children.length; i++) {
		const win = children[i];
		if(win && $dataWindows[this.constructor.name][win.getWindowCode()]) {
			const info = $dataWindows[this.constructor.name][win.getWindowCode()];
			const errorText = 'Error with ' + this.constructor.name + '\'s ' + win.getWindowCode();
			if(info.x !== undefined) win.x = info.x;
			if(info.y !== undefined) win.y = info.y;
			if(info.opacity !== undefined) {
				try {
					win.opacity = eval(info.opacity);
				} catch(e) {
					console.log(errorText + ' opacity input.\n' + e);
				}
			}
			if(info.width !== undefined) {
				try {
					win.width = eval(info.width);
				} catch(e) {
					console.log(errorText + ' width input.\n' + e);
				}
			}
			if(info.height !== undefined) {
				try {
					win.height = eval(info.height);
				} catch(e) {
					console.log(errorText + ' height input.\n' + e);
				}
			}
			if(info.rows !== undefined) {
				const errorCatch = win.numVisibleRows();
				win.numVisibleRows = function() {
					try {
						return eval(info.rows);
					} catch(e) {
						console.log(errorText + ' rows input.\n' + e);
						return errorCatch;
					}
				};
			}
			if(info.cols !== undefined) {
				const errorCatch = win.maxCols();
				win.maxCols = function() {
					try {
						return eval(info.cols);
					} catch(e) {
						console.log(errorText + ' cols input.\n' + e);
						return errorCatch;
					}
				};
			}
			if(info.lineHeight !== undefined) {
				const errorCatch = win.lineHeight();
				win.lineHeight = function() {
					try {
						return eval(info.lineHeight);
					} catch(e) {
						console.log(errorText + ' line height input.\n' + e);
						return errorCatch;
					}
				};
			}
			if(info.align !== undefined) {
				win.itemTextAlign = function() {
					return info.align;
				};
			}
			if(win._ste_isCommand) {
				win.height = win.windowHeight();
			}
			if(win.createContents) win.createContents();
			if(win.refresh) {
				try {
					win.refresh();
				} catch(e) {
					console.log(e);
				}
			}
			if(win._refreshAllParts) win._refreshAllParts();
			if(win.updateCursor) win.updateCursor();
		}
	}
};

//-----------------------------------------------------------------------------
// Scene_ItemBase
//-----------------------------------------------------------------------------

_.Scene_ItemBase_showSubWindow = Scene_ItemBase.prototype.showSubWindow;
Scene_ItemBase.prototype.showSubWindow = function(window) {
	let tempX = window.x;
    _.Scene_ItemBase_showSubWindow.apply(this, arguments);
    if($dataWindows[this.constructor.name] && $dataWindows[this.constructor.name][window.getWindowCode()]) {
		window.x = tempX;
	}
};

//-----------------------------------------------------------------------------
// Scene_Battle
//-----------------------------------------------------------------------------

_.Scene_Battle_updateWindowPositions = Scene_Battle.prototype.updateWindowPositions;
Scene_Battle.prototype.updateWindowPositions = function() {
	if(this.disableWindowPositionUpdates()) return;
    _.Scene_Battle_updateWindowPositions.apply(this, arguments);
};

Scene_Battle.prototype.disableWindowPositionUpdates = function() {
	return !!($dataWindows["Scene_Battle"] && $dataWindows["Scene_Battle"]["Window_BattleStatus"]);
};

//-----------------------------------------------------------------------------
// Scene_Boot
//-----------------------------------------------------------------------------

if(_.isPlaytest) {

_.Scene_Boot_start = Scene_Boot.prototype.start;
Scene_Boot.prototype.start = function() {
	this._setReopener = DebugManager.isSetToReopen();
	if(this.isGameRestarting()) {
		Scene_Base.prototype.start.apply(this, arguments);
		this.restartGame();
	} else {
		_.Scene_Boot_start.apply(this, arguments);
	}
	this.openMaker();
};

Scene_Boot.prototype.isGameRestarting = function() {
	return this._setReopener !== false && StorageManager.exists(parseInt(this._setReopener));
};

Scene_Boot.prototype.restartGame = function() {
	const id = parseInt(this._setReopener);
	DataManager.loadGame(id);
	if(id === 999) {
		StorageManager.remove(id);
		DataManager.deleteGlobal(id);
	}
	DataManager.selectSavefileForNewGame();
	Scene_Load.prototype.reloadMapIfUpdated.call(this);
	SceneManager.goto(Scene_Map);
};

Scene_Boot.prototype.openMaker = function() {
	if(this._setReopener) {
		DebugManager.removeReopener();
		const temp = _.move;
		_.move = false;
		SceneManager.openMaker();
		if(temp) MakerManager.window.moveTo(window.screenX + Graphics.boxWidth + 6, window.screenY);
		_.move = temp;
		return;
	}
	if(_.open) {
		SceneManager.openMaker();
	}
};

//-----------------------------------------------------------------------------
// Game_Switches
//-----------------------------------------------------------------------------

_.Game_Player_isDebugThrough = Game_Player.prototype.isDebugThrough;
Game_Player.prototype.isDebugThrough = function() {
	return _.Game_Player_isDebugThrough.apply(this, arguments) || DebugManager.disableCollisions;
};

_.Game_Player_canEncounter = Game_Player.prototype.canEncounter;
Game_Player.prototype.canEncounter = function() {
	return _.Game_Player_canEncounter.apply(this, arguments) && !DebugManager.disableEncounters;
};

//-----------------------------------------------------------------------------
// Game_Switches
//-----------------------------------------------------------------------------

_.Game_Switches_setValue = Game_Switches.prototype.setValue;
Game_Switches.prototype.setValue = function(switchId, value) {
	_.Game_Switches_setValue.apply(this, arguments);
	if(DebugManager.active && DebugManager.mode === 'switch' && switchId > 0 && switchId < $dataSystem.switches.length) {
		const val = this._data[switchId];
		MakerManager.document.getElementById('Switch ' + switchId).checked = val;
		MakerManager.document.getElementById('Switch ' + switchId + ' Label').innerHTML = val ? 'ON' : 'OFF'
	}
};

//-----------------------------------------------------------------------------
// Game_Variables
//-----------------------------------------------------------------------------

_.Game_Variables_setValue = Game_Variables.prototype.setValue;
Game_Variables.prototype.setValue = function(variableId, value) {
	_.Game_Variables_setValue.apply(this, arguments);
	if(DebugManager.active && DebugManager.mode === 'variable' && variableId > 0 && variableId < $dataSystem.variables.length) {
		const val = this._data[variableId];
		MakerManager.document.getElementById('Variable ' + variableId).value = val;
	}
};

//-----------------------------------------------------------------------------
// Window_Base
//-----------------------------------------------------------------------------

Window_Base.prototype.setMenuEditTarget = function(value) {
	this._isMenuEditTarget = value;
	this.updateTone();
};

_.Window_Base_updateTone = Window_Base.prototype.updateTone;
Window_Base.prototype.updateTone = function() {
	if(this._isMenuEditTarget) {
		const tone = $gameSystem.windowTone();
		this.setTone(tone[0] + 100, tone[1], tone[2]);
	} else {
		_.Window_Base_updateTone.apply(this, arguments);
	}
};

}

_.Window_Base_initialize = Window_Base.prototype.initialize;
Window_Base.prototype.initialize = function(x, y, width, height) {
	_.Window_Base_initialize.apply(this, arguments);
	this.initWindowId();
	this._isMenuEditTarget = false;
};

Window_Base.prototype.initWindowId = function() {
	const scene = SceneManager._scene;
	const cnstr = this.constructor.name;
	if(scene.windowIds[cnstr] === undefined) scene.windowIds[cnstr] = 1;
	else scene.windowIds[cnstr] += 1;
	this._menuEditorId = scene.windowIds[cnstr];
};

Window_Base.prototype.getWindowCode = function() {
	let result = this.constructor.name;
	if(this._menuEditorId > 1) result += " " + this._menuEditorId;
	return result;
};

//-----------------------------------------------------------------------------
// Window_Selectable
//-----------------------------------------------------------------------------

_.Window_Selectable_initialize = Window_Selectable.prototype.initialize;
Window_Selectable.prototype.initialize = function(x, y, width, height) {
	_.Window_Selectable_initialize.apply(this, arguments);
	this._ste_isSelectable = true;
};

//-----------------------------------------------------------------------------
// Window_Command
//-----------------------------------------------------------------------------

_.Window_Command_initialize = Window_Command.prototype.initialize;
Window_Command.prototype.initialize = function(x, y) {
	_.Window_Command_initialize.apply(this, arguments);
	this._ste_isCommand = true;
};

})(SRD.SuperToolsEngine);