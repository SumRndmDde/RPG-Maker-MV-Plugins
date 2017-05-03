/*:
 * @plugindesc Adds a tool to the Super Tools Engine that checks for updates on plugins from SumRndmDde's library.
 * @author SumRndmDde
 * @help
 *
 * Plugin Updater
 * Version 1.11
 * SumRndmDde
 *
 *
 * This plugin adds a tool to the Super Tools Engine that checks for updates on 
 * plugins from SumRndmDde's library.
 *
 *
 * ==============================================================================
 *  How it Works
 * ==============================================================================
 *
 * This adds the "Plugin Updater" tool. This tool lists out all of the SRD
 * plugins installed in the project. It gives their current version in the 
 * project and the latest version available. It also leaves a link to the 
 * plugin's page for easy accessibility.
 *
 * The plugin also notifies the developer if an update is available for a 
 * plugin. The description for the tool will inform the developer if any plugins 
 * have new updates. Furthermore, the plugins with updates available will have
 * a red "N" next to them in the list.
 *
 * Once the desired plugins are updated, one may reload the game to make sure
 * the plugins have been registered as updated.
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
SRD.PluginUpdater = SRD.PluginUpdater || {};

var Imported = Imported || {};
Imported["SumRndmDde Plugin Updater"] = 1.11;

function PluginUpdateManager() {
	throw new Error('PluginUpdateManager is a static class! You\'ll learn lots about electricity there!');
}

(function(_) {

"use strict";

if(!SRD.SuperToolsEngine.isPlaytest) return;

_.description = "A tool that checks for updates for SumRndmDde's plugins.";

_.alertNeedSuperToolsEngine = function(update) {
	if(update) {
		alert("The 'SRD_SuperToolsEngine' needs to be version 1.11 or greater to use the 'SRD_PluginUpdater' plugin.");
	} else {
		alert("The 'SRD_SuperToolsEngine' plugin is required for using the 'SRD_PluginUpdater' plugin.");
	}
	if(confirm("Do you want to open the download page to 'SRD_SuperToolsEngine'?")) {
		window.open('http://sumrndm.site/super-tools-engine/');
	}
};

if(!Imported["SumRndmDde Super Tools Engine"]) {
	_.alertNeedSuperToolsEngine(false);
	return;
} else if(Imported["SumRndmDde Super Tools Engine"] < 1.12) {
	_.alertNeedSuperToolsEngine(true);
	return;
}

//-----------------------------------------------------------------------------
// MakerManager
//-----------------------------------------------------------------------------

_.MakerManager_assignWindow = MakerManager.assignWindow;
MakerManager.assignWindow = function() {
	_.MakerManager_assignWindow.apply(this, arguments);
	this._window.window.PluginUpdateManager = PluginUpdateManager;
};

_.MakerManager_getLauncherButtonsRaw = MakerManager.getLauncherButtonsRaw;
MakerManager.getLauncherButtonsRaw = function() {
	let result = _.MakerManager_getLauncherButtonsRaw.apply(this, arguments);
	result.push(`${this.generateLauncherRow("Plugin Updater", _.description, "PluginUpdateManager.setupWindowHtml()", "#e67300")}`);
	return result;
};

_.MakerManager_onFinish = MakerManager.onFinish;
MakerManager.onFinish = function() {
	if(this.mode === 'plugin_updater') {
		PluginUpdateManager.onFinish();
	}
	_.MakerManager_onFinish.apply(this, arguments);
};

_.MakerManager_refreshTable = MakerManager.refreshTable;
MakerManager.refreshTable = function() {
	_.MakerManager_refreshTable.apply(this, arguments);
	const element = this.document.getElementById('LaunchDescription Plugin Updater');
	element.innerHTML = '';
	if(PluginUpdateManager._needsUpdate > 1) {
		element.innerHTML += `<font color="#dd3333">${PluginUpdateManager._needsUpdate} plugins have updates available.</font><br>`;
	} else if(PluginUpdateManager._needsUpdate === 1) {
		element.innerHTML += `<font color="#dd3333">1 plugin has an update available.</font><br>`;
	} else {
		element.innerHTML += `<font color="#33bb33">All plugins are up to date!</font><br>`;
	}
	element.innerHTML += _.description;
};

//-----------------------------------------------------------------------------
// PluginUpdateManager
//-----------------------------------------------------------------------------

PluginUpdateManager._pluginInfo = null;
PluginUpdateManager._needsUpdate = 0;
PluginUpdateManager._internet = false;
PluginUpdateManager._checkComplete = false;

PluginUpdateManager.initManager = function() {
	this._listIndex = 0;
	this.checkInternet();
};

/*
 * Checking Information
 */

PluginUpdateManager.checkInternet = function() {
	require('dns').lookup('www.google.com', function(err) {
		if (err && err.code == "ENOTFOUND") {
			this._internet = false;
		} else {
			this._internet = true;
		}
		this._checkComplete = true;
		this.checkForUpdates();
	}.bind(this));
};

PluginUpdateManager.checkForUpdates = function() {
	if(!this._internet) return;
	this.getInfo('https://raw.githubusercontent.com/SumRndmDde/PluginUpdater/master/SRD_PluginInfos.json');
	this.getLog('https://raw.githubusercontent.com/SumRndmDde/PluginUpdater/master/SRD_PluginLog.txt');
};

PluginUpdateManager.getInfo = function(url) {
	const xhr = new XMLHttpRequest();
	xhr.open('GET', url);
	xhr.overrideMimeType('application/json');
	xhr.onload = function() {
		if(xhr.status < 400) {
			this.storeUpdates(xhr.responseText);
			this.applyUpdates();
		}
	}.bind(this);
	xhr.onerror = function() {};
	xhr.send();
};

PluginUpdateManager.storeUpdates = function(content) {
	this._infos = JsonEx.parse(content);
};

PluginUpdateManager.applyUpdates = function() {
	this._pluginInfo = [];
	Object.keys(this._infos).forEach(function(key) {
		const current = Imported[key];
		if(current !== undefined) {
			const info = this._infos[key];
			const latest = info[0];
			const filename = info[1];
			const url = info[2];
			const newInfo = {
				name: key, 
				filename: filename,
				url: url,
				current: parseFloat(current) || 1.00, 
				latest: parseFloat(latest)
			};
			if(current < latest) {
				this._needsUpdate++;
				newInfo.needsUpdate = true;
			}
			this._pluginInfo.push(newInfo);
		}
	}.bind(this));
	this._finished = true;
};

PluginUpdateManager.getLog = function(url) {
	const xhr = new XMLHttpRequest();
	xhr.open('GET', url);
	xhr.overrideMimeType('application/json');
	xhr.onload = function() {
		if(xhr.status < 400) {
			this.storeLog(xhr.responseText);
		}
	}.bind(this);
	xhr.onerror = function() {};
	xhr.send();
};

PluginUpdateManager.storeLog = function(content) {
	this._log = JsonEx.parse(content);
};

/*
 * Window Manipulation
 */

PluginUpdateManager.setupWindowHtml = function() {
	if(!this._internet) {
		alert("No internet connection detected. Please check your connection and try again later.");
		return;
	}
	if(!this._finished) {
		alert("Update data has not finished loading. Please try again in a bit.");
		return;
	}
	MakerManager.window.title = "Super Tools Engine  -  Plugin Updater  |  SumRndmDde";
	MakerManager.mode = 'plugin_updater';
	this.setBasicPage();
};

PluginUpdateManager.setBasicPage = function() {
	MakerManager.mainHTML = this.topBar(0) + this.getBasicHtml();
	this.refreshEverything();
};

PluginUpdateManager.setLogPage = function() {
	this._filter = '';
	MakerManager.mainHTML = this.topBar(1) + this.getLogHtml();
};

PluginUpdateManager.refreshEverything = function() {
	this.refreshTable();
	this.refreshPages();
};

PluginUpdateManager.topBar = function(index) {
	const active = ['', ''];
	active[index] = 'class="active"';
	return `<ul style="cursor:pointer">
				<li><a ${active[0]} onclick="PluginUpdateManager.setBasicPage()">Plugin List</a></li>
				<li><a ${active[1]} onclick="PluginUpdateManager.setLogPage()">Update Log</a></li>
				<li style="float:right"><a onclick="PluginUpdateManager.returnToMaker()">Return to Main</a></li>
			</ul>`;
};

PluginUpdateManager.getBasicHtml = function() {
	return `<p>
				<table id="MainTable">
				</table>
				<div id="PageControl" style="text-align: center; float: center; width: 100%; position: fixed; bottom: 0; padding-bottom: 30px;">
				</div>
			</p>`;
};

PluginUpdateManager.refreshTable = function() {
	const table = MakerManager.document.getElementById('MainTable');
	table.innerHTML = `<tr>
							<th style="width: 10%;">Updated</th>
							<th>Plugin Filename</th>
							<th style="width: 10%;">Current Version</th>
							<th style="width: 10%;">Latest Version</th>
							<th style="width: 10%;">Page Link</th>
						</tr>
						${this.getPluginTable()}`;
};

PluginUpdateManager.getPluginTable = function() {
	if(!this._pluginInfo) return '';
	let results = `<style>
					td {
						padding: 4px;
						text-align: center;
						width: 10%;
					}
				</style>`;
	const max = Math.min(this._pluginInfo.length, (this._listIndex + 1) * 13);
	for(let i = this._listIndex * 13; i < max; i++) {
		const info = this._pluginInfo[i];
		if(!info) continue;
		const updateText = info.needsUpdate ? '<font color="#dd3333">N</font>' : '<font color="#33bb33">Y</font>';
		results += `<tr>
						<td>${updateText}</td>
						<td style="text-align: left; width: 70%;">${info.filename}</td>
						<td>${info.current.toFixed(2)}</td>
						<td>${info.latest.toFixed(2)}</td>
						<td><a href="#" onclick="PluginUpdateManager.openLink('${info.url}'); return false;" target="_blank">Go \u21D2</a></td>
					</tr>`;
	}
	return results;
};

PluginUpdateManager.openLink = function(url) {
	require('nw.gui').Shell.openExternal(url);
};

PluginUpdateManager.getLauncherTableCount = function() {
	return this._pluginInfo ? this._pluginInfo.length : 0;
};

PluginUpdateManager.getLauncherTableMax = function() {
	const count = this.getLauncherTableCount();
	return Math.ceil(count / 13);
};

PluginUpdateManager.refreshPages = function() {
	const pages = MakerManager.document.getElementById('PageControl');
	pages.innerHTML = this.getPageControl();
};

PluginUpdateManager.getPageControl = function() {
	const count = this.getLauncherTableCount();
	if(count < 13) return '';
	const max = this.getLauncherTableMax();
	return `<div style="transform: translateY(-9px); float: right; width: 34%; text-align:center;">
				<button class="button" onclick="PluginUpdateManager.incrementPage()" />\u21D2</button>
			</div>
			<b>Page: (${this._listIndex + 1}/${max})</b>
			<div style="transform: translateY(-9px); float: left; width: 34%; text-align:center;">
					<button class="button" onclick="PluginUpdateManager.decrementPage()" />\u21D0</button>
			</div>`;
};

PluginUpdateManager.incrementPage = function() {
	const max = this.getLauncherTableMax();
	this._listIndex++;
	if(this._listIndex + 1 > max) {
		this._listIndex = 0;
	}
	this.refreshEverything();
};

PluginUpdateManager.decrementPage = function() {
	const max = this.getLauncherTableMax();
	this._listIndex--;
	if(this._listIndex < 0) {
		this._listIndex = max - 1;
	}
	this.refreshEverything();
};

PluginUpdateManager.getLogHtml = function() {
	return `<p>
				<div style="float: center; width: 100%; text-align:center;"><br>
					<b>Filter:</b><br>
					<select style="text-align: center;" id="FilterSelect" onchange="PluginUpdateManager.refreshLogList()">
						${this.getFilterOptions()}
					</select>
				</div><br>
				<div id="scrollStuff" style="background-color: ${MakerManager.colors[10]}; height: 510px; overflow: scroll;">
					${this.getLogList()}
				<div>
				<br>
			</p>`;
};

PluginUpdateManager.getFilterOptions = function() {
	let result = `<option style="text-align: center;" value="" selected>[All Plugins]</option>
				  <option value="installed">[Only Installed]</option>
				  <option value="empty"></option>`;
	let options = [];
	this._log.forEach(function(info) {
		if(!options.contains(info[0])) {
			options.push(info[0]);
		}
	}, this);
	options.sort();
	options.forEach(function(op) {
		result += `<option value="${op}">${op}</option>`;
	}, this);
	return result;
};

PluginUpdateManager.getLogList = function() {
	let result = '';
	this._log.forEach(function(info) {
		if(this._filter === '' || this._filter === info[0] || (this._filter === 'installed' && Imported["SumRndmDde " + info[0]])) {
			result += `<p style="text-align: center;"><span style="font-size:20px;"><strong>${info[0]}</strong></span><br />
					   <u><em>Version ${info[1]} Update</em></u></p>
					   <blockquote>`;
			for(let i = 2; i < info.length; i++) {
				result += ` - ${info[i]}<br>`;
			}
			result += `</blockquote>
					   <hr />`;
		}
	}, this);
	return result;
};

PluginUpdateManager.refreshLogList = function() {
	this._filter = MakerManager.document.getElementById('FilterSelect').value;
	MakerManager.document.getElementById('scrollStuff').innerHTML = this.getLogList();
};

PluginUpdateManager.onFinish = function() {
	this._listIndex = 0;
};

PluginUpdateManager.returnToMaker = function() {
	this.onFinish();
	MakerManager.setupWindowHtml();
};

PluginUpdateManager.initManager();

})(SRD.PluginUpdater);