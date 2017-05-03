/*:
 * @plugindesc Allows players to distribute points to different stats of the Actors at his or her discretion.
 * @author SumRndmDde
 *
 * @param Default Stats
 * @desc A list of stats Actors can distribute to by default.
 * All of the available stats can be found in HELP.
 * @default mhp, mmp, atk, def, mat, mdf, agi, luk
 *
 * @param Default Formula
 * @desc The default formula used for determining how many "stat points" an Actor gains by leveling up.
 * @default Math.ceil(level / 10)
 *
 * @param Show on Menu
 * @desc If 'true', this plugin will place the command in the menu.
 * @default true
 *
 * @param == Stat Reset ==
 * @default
 *
 * @param Allow Stat Resets
 * @desc If 'true', then players will have the option to reset the distributed stats and return the used stat points.
 * @default true
 *
 * @param Reset Gold Cost
 * @desc The formula determining the amount of gold for resetting.
 * Use "points" to reference the amount of points used.
 * @default points * 100
 *
 * @param == Custom Texts ==
 * @default
 *
 * @param Level Up Message
 * @desc This message is displayed when an actor levels up to show how many points were gained. %1 is the number of points.
 * @default Got %1 stat points!
 *
 * @param Command Name
 * @desc The is the name of the command for stat distribution in the menu.
 * @default Stat Boost
 *
 * @param Points Text
 * @desc The text used to display how much points an Actor has.
 * @default Stat Points:
 *
 * @param Upgrade Text
 * @desc The text used to display how much points an upgrade is worth.
 * @default Upgrade Cost:
 *
 * @param Spend Text
 * @desc The text used in the command window to begin spending.
 * @default Spend
 *
 * @param Reset Text
 * @desc The text used in the command window to reset stat points.
 * @default Reset
 *
 * @param Finish Text
 * @desc The text used in the command window to leave the scene.
 * @default Finish
 *
 * @param == Gauge Options ==
 * @default
 *
 * @param Use Gauges
 * @desc If 'true', the stat distribution will have gauges representing how close the distributed stat is to reaching its max.
 * @default true
 *
 * @param Gauge Height
 * @desc The height of the gauges used in the stat distribution.
 * @default 14
 *
 * @param == Points Label ==
 * @default
 *
 * @param Point Icon
 * @desc Input the icon index of the icon for stat points.
 * Set to 0 to use text instead.
 * @default 87
 *
 * @param Point Text
 * @desc If "Point Icon" is set to 0, this will be used as the label for stat points.
 * @default Points
 * 
 * @param Point Color
 * @desc If using text, this will be the color of the text.
 * @default #66ff66
 *
 * @help
 *
 * Stat Distribution
 * Version 1.06
 * SumRndmDde
 *
 *
 * This plugin allows players to distribute points to different stats of the 
 * Actors at his or her discretion. A command is added to the menu which allows
 * access to a new menu for stat distribution!
 *
 *
 * ==============================================================================
 *  Plugin Commands
 * ==============================================================================
 *
 * Use the following plugin commands to preform various actions.
 *
 *
 *
 *   OpenStatDistribution Actor [actorId]
 *
 * This opens the Stat Distribution Menu for the specified Actor ID.
 *
 *
 *
 *   OpenStatDistribution Party [memberIndex]
 *
 * This opens the Stat Distribution Menu for the specified Actor based on the
 * index in which they are in the party. For example, setting "memberIndex"
 * to 0 will open the menu for the party's leader.
 *
 *
 *
 *   AddStatPoints Actor [actorId] [points]
 *   AddStatPoints Party [memberIndex] [points]
 *
 * This adds a specific amount points to a specific Actor.
 *
 *
 * ==============================================================================
 *  Upgradeable Stats
 * ==============================================================================
 *
 * In order to determine what stats can be upgraded, use the "Default Stats"
 * Parameter. Otherwise, notetags can be used to customize the stats
 * per each individual Actor:
 *
 *
 *   <Set Distribution Stats: [stats]>
 *
 * Sets the Actor's stats to this list.
 *
 *
 *
 *   <Add Distribution Stats: [stats]>
 *
 * Adds stats to the Actor's already existing upgradeable stats.
 *
 *
 * ==============================================================================
 *  How to Customize Stats
 * ==============================================================================
 *
 * In order to customize the properties of stats, you must use the Database EX.
 * Simply go to the customizable editors, and select "Stat Distribution Editor".
 *
 * Within here, a list of stats will be available and their variables can
 * be changed to fit with your needs. Be sure to reload to see the changes!
 *
 *
 * ==============================================================================
 *  List of Upgradeable Stats
 * ==============================================================================
 *
 * Here is a list of all the available stats and their three-letter codes.
 *
 *
 * == Base Stats ==
 * mhp - Max HP
 * mmp - Max MP
 * atk - Attack
 * def - Defense
 * mat - Magical Attack
 * mdf - Magical Defense
 * agi - Agility
 * luk - Luck
 *
 * == Ex Stats ==
 * hit - Hit Rate
 * eva - Evasion Rate
 * cri - Critical Rate
 * cev - Critical Evasion Rate
 * mev - Magic Evasion Rate
 * mrf - Magic Reflection Rate
 * cnt - Counter Attack Rate
 * hrg - Hp Regeneration
 * mrg - Mp Regeneration
 * trg - Tp Regeneration 
 *
 * == Sp Stats == 
 * tgr - Target Rate
 * grd - Guard Effect Rate
 * rec - Recovery Effect Rate
 * pha - Pharmacology
 * mcr - Mp Cost Rate
 * tcr - Tp Charge Rate
 * pdr - Physical Damage Rate
 * mdr - Magical Damage Rate
 * fdr - Floor Damage Rate
 * exr - Experience Rate
 *
 *
 * ==============================================================================
 *  Stat Points
 * ==============================================================================
 *
 * Stat points can be gained by leveling up the Actors.
 * The "Default Formula" Parameter can be used to set up a formula for how many
 * stat points an Actor will gain upon level. Alternatively, the following
 * notetags can be used to give Actors their own formulas:
 *
 *   <Stat Point Formula: [formula]>
 *
 * For example:
 *
 *   <Stat Point Formula: 5 * level>
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
SRD.StatDistribution = SRD.StatDistribution || {};
SRD.PluginCommands = SRD.PluginCommands || {};
SRD.NotetagGetters = SRD.NotetagGetters || [];

var Imported = Imported || {};
Imported["SumRndmDde Stat Distribution"] = 1.06;

var $dataDistributeStats = {};

function Scene_Distribute() {
	this.initialize.apply(this, arguments);
}

function Window_DistributePoints() {
	this.initialize.apply(this, arguments);
}

function Window_DistributeStatus() {
	this.initialize.apply(this, arguments);
}

function Window_Distribute() {
	this.initialize.apply(this, arguments);
}

function Window_DistributeCommand() {
	this.initialize.apply(this, arguments)
}

(function(_) {

"use strict";

//-----------------------------------------------------------------------------
// SRD.StatDistribution
//-----------------------------------------------------------------------------

const params = PluginManager.parameters('SRD_StatDistribution');

_.stats = String(params['Default Stats']).split(/\s*,\s*/);
_.formula = String(params['Default Formula']);
_.show = String(params['Show on Menu']).trim().toLowerCase() === 'true';

_.reset = String(params['Allow Stat Resets']).trim().toLowerCase() === 'true';
_.cost = String(params['Reset Gold Cost']);

_.name = String(params['Command Name']);
_.messsage = String(params['Level Up Message']);
_.points = String(params['Points Text']);
_.upgrade = String(params['Upgrade Text']);
_.spendText = String(params['Spend Text']);
_.resetText = String(params['Reset Text']);
_.finishText = String(params['Finish Text']);

_.drawGauges = String(params['Use Gauges']).trim().toLowerCase() === 'true';
_.gaugeHeight = parseInt(params['Gauge Height']);
_.iconIndex = parseInt(params['Point Icon']);
_.pointText = String(params['Point Text']);
_.pointColor = String(params['Point Color']);

_.checkFileExists = function() {
	FileManager.checkDataExists("DistributionStats.json", JsonEx.stringify({
		"mhp":{"name":"Max HP","description":"The maximum amount of HP for the actor.","cost":"1","gain":"5","max":"500","min_col":"#ffa655","max_col":"#ea7000"},
		"mmp":{"name":"Max MP","description":"The maximum amount of MP for the actor.","cost":"1","gain":"2","max":"200","min_col":"#6666ff","max_col":"#0000ff"},
		"atk":{"name":"Attack","description":"Strengthens the damage of physical skills used by \nthe actor.","cost":"1","gain":"1","max":"100","min_col":"#ff7777","max_col":"#f90000"},
		"def":{"name":"Defense","description":"Reduces the damage of physical skills the actor is \ntargeted with.","cost":"1","gain":"1","max":"100","min_col":"#52ff33","max_col":"#12b700"},
		"mat":{"name":"Magic Attack","description":"Strengthens the damage of magical skills used by \nthe actor.","cost":"1","gain":"1","max":"100","min_col":"#b355ff","max_col":"#a300d9"},
		"mdf":{"name":"Magic Defense","description":"Reduces the damage of magical skills the actor is \ntargeted with.","cost":"1","gain":"1","max":"100","min_col":"#55ffe6","max_col":"#00d7b7"},
		"agi":{"name":"Agility","description":"Determines how soon the actor will be able to \npreform a turn in battle.","cost":"1","gain":"1","max":"100","min_col":"#fbff55","max_col":"#d9d300"},       
		"luk":{"name":"Luck","description":"Influences various luck factors for the actor in \ntheir favor.","cost":"1","gain":"1","max":"100","min_col":"#ff55e6","max_col":"#cc00ad"},
		"hit":{"name":"Hit Rate","description":"Increases the chance of skills hitting their \ntarget.","cost":"2","gain":"0.005","max":"0.5","min_col":"#aaaaaa","max_col":"#ffffff"},
		"eva":{"name":"Evasion Rate","description":"Increases the likely-hood of an actor evading\na physical skill.","cost":"2","gain":"0.005","max":"0.5","min_col":"#aaaaaa","max_col":"#ffffff"},
		"cri":{"name":"Critical Rate","description":"Determines how likely an actor will preform \na critical hit.","cost":"2","gain":"0.005","max":"0.5","min_col":"#aaaaaa","max_col":"#ffffff"},
		"cev":{"name":"Critical Evasion Rate","description":"Decreases the likely-hood of skills targeting \nthe actor being critical.","cost":"2","gain":"0.005","max":"0.5","min_col":"#aaaaaa","max_col":"#ffffff"},
		"mev":{"name":"Magic Evasion Rate","description":"Increases the likely-hood of an actor evading \na magical skill.","cost":"2","gain":"0.005","max":"0.5","min_col":"#aaaaaa","max_col":"#ffffff"},
		"mrf":{"name":"Magic Reflection Rate","description":"The higher the value, the more likely magical \nreflection will occur.","cost":"2","gain":"0.005","max":"0.5","min_col":"#aaaaaa","max_col":"#ffffff"},
		"cnt":{"name":"Counter Attack Rate","description":"The higher the value, the more likely physical \nreflection will occur.","cost":"2","gain":"0.005","max":"0.5","min_col":"#aaaaaa","max_col":"#ffffff"},
		"hrg":{"name":"Hp Regeneration","description":"The rate in which the actor gains HP each turn.","cost":"2","gain":"0.005","max":"0.5","min_col":"#aaaaaa","max_col":"#ffffff"},
		"mrg":{"name":"Mp Regeneration","description":"The rate in which the actor gains MP each turn.","cost":"2","gain":"0.005","max":"0.5","min_col":"#aaaaaa","max_col":"#ffffff"},
		"trg":{"name":"Tp Regeneration","description":"The rate in which the actor gains TP each turn.","cost":"2","gain":"0.005","max":"0.5","min_col":"#aaaaaa","max_col":"#ffffff"},
		"tgr":{"name":"Target Rate","description":"Increases the chance of the actor being attacked.","cost":"2","gain":"0.005","max":"0.5","min_col":"#aaaaaa","max_col":"#ffffff"},
		"grd":{"name":"Guard Effect Rate","description":"Increases the effectiveness of the actor's guard","cost":"2","gain":"0.005","max":"0.5","min_col":"#aaaaaa","max_col":"#ffffff"},
		"rec":{"name":"Recovery Effect Rate","description":"Determines the effectiveness of recovery skills.","cost":"2","gain":"0.005","max":"0.5","min_col":"#aaaaaa","max_col":"#ffffff"},
		"pha":{"name":"Pharmacology","description":"Determines the effectiveness of recovery items.","cost":"2","gain":"0.005","max":"0.5","min_col":"#aaaaaa","max_col":"#ffffff"},
		"mcr":{"name":"Mp Cost Rate","description":"The rate in which MP skills cost.","cost":"2","gain":"0.005","max":"0.5","min_col":"#aaaaaa","max_col":"#ffffff"},
		"tcr":{"name":"Tp Charge Rate","description":"The rate in which TP skills cost.","cost":"2","gain":"0.005","max":"0.5","min_col":"#aaaaaa","max_col":"#ffffff"},
		"pdr":{"name":"Physical Damage Rate","description":"The rate in which physical damage occurs.","cost":"2","gain":"0.005","max":"0.5","min_col":"#aaaaaa","max_col":"#ffffff"},
		"mdr":{"name":"Magical Damage Rate","description":"The rate in which magical damage occurs.","cost":"2","gain":"0.005","max":"0.5","min_col":"#aaaaaa","max_col":"#ffffff"},
		"fdr":{"name":"Floor Damage Rate","description":"The rate in which floor damage occurs.","cost":"2","gain":"0.005","max":"0.5","min_col":"#aaaaaa","max_col":"#ffffff"},
		"exr":{"name":"Experience Rate","description":"The rate in which the actor gains experience.","cost":"2","gain":"0.005","max":"0.5","min_col":"#aaaaaa","max_col":"#ffffff"}
	}));
};

_.loadNotetags = function() {
	const data = $dataActors;
	const regex1 = /<Set[ ]?Distribution[ ]?Stats[ ]?:\s*(.*)\s*>/im;
	const regex2 = /<Add[ ]?Distribution[ ]?Stats[ ]?:\s*(.*)\s*>/im;
	const regex3 = /<Stat[ ]?Point[ ]?Formula[ ]?:\s*(.*)\s*>/im;
	for(let i = 1; i < data.length; i++) {
		const note = data[i].note;
		if(note.match(regex1)) {
			const stats = String(RegExp.$1).split(/\s*,\s*/);
			data[i]._sd_stats = stats;
		}
		if(note.match(regex2)) {
			const stats = String(RegExp.$1).split(/\s*,\s*/);
			if(data[i]._sd_stats === undefined) data[i]._sd_stats = _.stats.clone();
			data[i]._sd_stats = data[i]._sd_stats.concat(stats);
		}
		if(note.match(regex3)) {
			data[i]._sd_formula = String(RegExp.$1);
		}
	}
};

SRD.NotetagGetters.push(_.loadNotetags);

_.alertNeedSuperToolsEngine = function() {
	alert("The 'SRD_SuperToolsEngine' plugin is required for using the 'SRD_StatDistribution' plugin.");
	if(confirm("Do you want to open the download page to 'SRD_SuperToolsEngine'?")) {
		window.open('http://sumrndm.site/super-tools-engine/');
	}
};

if(!Imported["SumRndmDde Super Tools Engine"]) {
	_.alertNeedSuperToolsEngine();
	return;
}

_.checkFileExists();

//-----------------------------------------------------------------------------
// SRD.PluginCommands
//-----------------------------------------------------------------------------

SRD.PluginCommands._sd_getActorType = function(args) {
	const type = String(args[0]).toLowerCase();
	const id = parseInt(args[1]);
	let actor;
	if(type === 'actor') {
		actor = $gameActors.actor(id);
	} else {
		actor = $gameParty.members()[id];
	}
	return actor;
};

SRD.PluginCommands['openstatdistribution'] = function(args) {
	const actor = SRD.PluginCommands._sd_getActorType(args);
	if(actor) {
		$gameParty.setMenuActor(actor);
		SceneManager.push(Scene_Distribute);
	}
};

SRD.PluginCommands['addstatpoints'] = function(args) {
	const actor = SRD.PluginCommands._sd_getActorType(args);
	if(actor) {
		const points = parseInt(args[2]);
		actor.addDistributePoints(points);
	}
};

//-----------------------------------------------------------------------------
// DataManager
//-----------------------------------------------------------------------------

DataManager._testExceptions.push("DistributionStats.json");

DataManager._databaseFiles.push({name: '$dataDistributeStats', src: "DistributionStats.json"});

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

//-----------------------------------------------------------------------------
// DataManagerEX
//-----------------------------------------------------------------------------

DataManagerEX._distributeStat = 'mhp';

_.DataManagerEX_getCustomInfo = DataManagerEX.getCustomInfo;
DataManagerEX.getCustomInfo = function() {
	const result = _.DataManagerEX_getCustomInfo.apply(this, arguments);
	result.push(['Stat Distribution Editor', 'DataManagerEX.getStatDistributionHtml']);
	return result;
};

DataManagerEX.getStatDistributionHtml = function() {
	const data = $dataDistributeStats['mhp'];
	return `<p>
			<div id="main-wrap">
				<div style="float: center; width: 100%; text-align:center;"><br>
					<b>Stat:</b><br>
					<select id="StatSelect" onchange="DataManagerEX.updateStatDistribution()">
						${this.getStatDistributionHtmlOptions()}
					</select>
				</div>
			</div><br>
			<table id="PropertyList">
				<tr>
					<th>Parameter</th>
					<th>Input</th>
				</tr>
				<tr>
					<td style="text-align: center;">Name</td>
					<td style="width: 60%; text-align: center;"><input type="text" size="45" id="name" value='${data.name}'
					style="width: 200px" onchange="DataManagerEX.saveCurrentStatDistribution()"></td>
				</tr>
				<tr>
					<td style="text-align: center;">Description</td>
					<td style="width: 60%; text-align: center;"><textarea type="text" cols="52" rows="2" id="description"
					style="font-size: 12px;" onchange="DataManagerEX.saveCurrentStatDistribution()">${data.description}</textarea></td>
				</tr>
				<tr>
					<td style="text-align: center;">Cost</td>
					<td style="width: 60%; text-align: center;"><input type="text" size="45" id="cost" value='${data.cost}'
					style="width: 200px" onchange="DataManagerEX.saveCurrentStatDistribution()"></td>
				</tr>
				<tr>
					<td style="text-align: center;">Gain</td>
					<td style="width: 60%; text-align: center;"><input type="text" size="45" id="gain" value='${data.gain}'
					style="width: 200px" onchange="DataManagerEX.saveCurrentStatDistribution()"></td>
				</tr>
				<tr>
					<td style="text-align: center;">Max</td>
					<td style="width: 60%; text-align: center;"><input type="text" size="45" id="max" value='${data.max}'
					style="width: 200px" onchange="DataManagerEX.saveCurrentStatDistribution()"></td>
				</tr>
				<tr>
					<td style="text-align: center;">Min Color</td>
					<td style="width: 60%; text-align: center;"><input type="color" id="min_col" value="${data.min_col}"
					style="width: 200px" onchange="DataManagerEX.saveCurrentStatDistribution()"></td>
				</tr>
				<tr>
					<td style="text-align: center;">Max Color</td>
					<td style="width: 60%; text-align: center;"><input type="color" id="max_col" value="${data.max_col}"
					style="width: 200px" onchange="DataManagerEX.saveCurrentStatDistribution()"></td>
				</tr>
			</table>
			</p>`;
};

DataManagerEX.getStatDistributionHtmlOptions = function() {
	return `<option value="mhp" selected>Max HP</option>
			<option value="mmp">Max MP</option>
			<option value="atk">Attack</option>
			<option value="def">Defense</option>
			<option value="mat">Magical Attack</option>
			<option value="mdf">Magical Defense</option>
			<option value="agi">Agility</option>
			<option value="luk">Luck</option>
			<option value="frame">   </option>
			<option value="hit">Hit Rate</option>
			<option value="eva">Evasion Rate</option>
			<option value="cri">Critical Rate</option>
			<option value="cev">Critical Evasion Rate</option>
			<option value="mev">Magic Evasion Rate</option>
			<option value="mrf">Magic Reflection Rate</option>
			<option value="cnt">Counter Attack Rate</option>
			<option value="hrg">Hp Regeneration</option>
			<option value="mrg">Mp Regeneration</option>
			<option value="trg">Tp Regeneration</option>
			<option value="frame">   </option>
			<option value="tgr">Target Rate</option>
			<option value="grd">Guard Effect Rate</option>
			<option value="rec">Recovery Effect Rate</option>
			<option value="pha">Pharmacology</option>
			<option value="mcr">Mp Cost Rate</option>
			<option value="tcr">Tp Charge Rate</option>
			<option value="pdr">Physical Damage Rate</option>
			<option value="mdr">Magical Damage Rate</option>
			<option value="fdr">Floor Damage Rate</option>
			<option value="exr">Experience Rate</option>`;
};

DataManagerEX.updateStatDistribution = function() {
	const doc = MakerManager.document;
	this._distributeStat = doc.getElementById('StatSelect').value;
	const data = $dataDistributeStats[this._distributeStat];
	if(data) {
		doc.getElementById('name').value = data.name;
		doc.getElementById('description').value = data.description;
		doc.getElementById('cost').value = data.cost;
		doc.getElementById('gain').value = data.gain;
		doc.getElementById('max').value = data.max;
		doc.getElementById('min_col').value = data.min_col;
		doc.getElementById('max_col').value = data.max_col;
	} else {
		doc.getElementById('name').value = '';
		doc.getElementById('description').value = '';
		doc.getElementById('cost').value = '';
		doc.getElementById('gain').value = '';
		doc.getElementById('max').value = '';
		doc.getElementById('min_col').value = '';
		doc.getElementById('max_col').value = '';
	}
};

DataManagerEX.saveCurrentStatDistribution = function() {
	const doc = MakerManager.document;
	const data = $dataDistributeStats[this._distributeStat];
	if(data) {
		data.name = doc.getElementById('name').value;
		data.description = doc.getElementById('description').value;
		data.cost = doc.getElementById('cost').value;
		data.gain = doc.getElementById('gain').value;
		data.max = doc.getElementById('max').value;
		data.min_col = doc.getElementById('min_col').value;
		data.max_col = doc.getElementById('max_col').value;
		FileManager.saveData($dataDistributeStats, "DistributionStats.json");
	}
};

_.DataManagerEX_initOldDatas = DataManagerEX.initOldDatas;
DataManagerEX.initOldDatas = function() {
	_.DataManagerEX_initOldDatas.apply(this, arguments);
	this._oldStatDistribution = JsonEx.stringify($dataDistributeStats);
};

_.DataManagerEX_requestRestartCondition = DataManagerEX.requestRestartCondition;
DataManagerEX.requestRestartCondition = function() {
	return _.DataManagerEX_requestRestartCondition.apply(this, arguments) || 
		this._oldStatDistribution !== JsonEx.stringify($dataDistributeStats);
};

//-----------------------------------------------------------------------------
// Game_Actor
//-----------------------------------------------------------------------------

Game_Actor.bParams = ['mhp', 'mmp', 'atk', 'def', 'mat', 'mdf', 'agi', 'luk'];
Game_Actor.xParams = ['hit', 'eva', 'cri', 'cev', 'mev', 'mrf', 'cnt', 'hrg', 'mrg', 'trg'];
Game_Actor.sParams = ['tgr', 'grd', 'rec', 'pha', 'mcr', 'tcr', 'pdr', 'mdr', 'fdr', 'exr'];

_.Game_Actor_initMembers = Game_Actor.prototype.initMembers;
Game_Actor.prototype.initMembers = function() {
	_.Game_Actor_initMembers.apply(this, arguments);
	this._distributePoints = 0;
	this._pointsGained = 0;
	this._pointsGainedTemp = 0;
	this.clearDistributePointsSpent();
	this.clearDistributeStats();
};

_.Game_Actor_paramRate = Game_Actor.prototype.paramBase;
Game_Actor.prototype.paramBase = function(paramId) {
	return _.Game_Actor_paramRate.apply(this, arguments) + this._distributeParams[paramId];
};

_.Game_Actor_xparam = Game_Actor.prototype.xparam;
Game_Actor.prototype.xparam = function(xparamId) {
	return _.Game_Actor_xparam.apply(this, arguments) + this._distributeXParams[xparamId];
};

_.Game_Actor_sparam = Game_Actor.prototype.sparam;
Game_Actor.prototype.sparam = function(sparamId) {
	return _.Game_Actor_sparam.apply(this, arguments) + this._distributeSParams[sparamId];
};

_.Game_Actor_levelUp = Game_Actor.prototype.levelUp;
Game_Actor.prototype.levelUp = function() {
	_.Game_Actor_levelUp.apply(this, arguments);
	this.gainDistributePoints();
};

_.Game_Actor_displayLevelUp = Game_Actor.prototype.displayLevelUp;
Game_Actor.prototype.displayLevelUp = function(newSkills) {
	_.Game_Actor_displayLevelUp.apply(this, arguments);
	if(_.messsage && this._pointsGained) {
		$gameMessage.add(_.messsage.format(this._pointsGained));
		this._pointsGainedTemp = 0;
	}
};

Game_Actor.prototype.distributePoints = function() {
	return this._distributePoints;
};

Game_Actor.prototype.setDistributePoints = function(value) {
	this._distributePoints = value;
};

Game_Actor.prototype.addDistributePointsTemp = function(value) {
	this.setDistributePoints(this._distributePoints + value);
};

Game_Actor.prototype.addDistributePoints = function(value) {
	this._pointsGained += value;
	this._pointsGainedTemp += value;
	this.addDistributePointsTemp(value);
};

Game_Actor.prototype.gainDistributePoints = function() {
	const formula = this.actor()._sd_formula || _.formula;
	const level = this._level;
	const actor = this;
	const points = eval(formula);
	this.addDistributePoints(points);
};

Game_Actor.prototype.pointsUsed = function() {
	return this._pointsGained - this._distributePoints;
};

Game_Actor.prototype.setBaseDistribute = function(paramId, value) {
	if(Imported.YEP_BaseParamControl) this._baseParamCache = [];
	this._distributeParams[paramId] = value;
};

Game_Actor.prototype.addDistributePointsSpent = function(value) {
	this._distributePointsSpent += value;
};

Game_Actor.prototype.clearDistributePointsSpent = function() {
	this._distributePointsSpent = 0;
};

Game_Actor.prototype.clearDistributeStats = function() {
	this._distributeParams = [0, 0, 0, 0, 0, 0, 0, 0];
	this._distributeXParams = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
	this._distributeSParams = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
};

Game_Actor.prototype.resetDistributeStats = function() {
	this.addDistributePointsTemp(this._distributePointsSpent);
	this.clearDistributePointsSpent();
	this.clearDistributeStats();
}

Game_Actor.prototype.addBaseDistribute = function(paramId, value) {
	this.setBaseDistribute(paramId, this._distributeParams[paramId] + value);
};

Game_Actor.prototype.setXDistribute = function(xparamId, value) {
	this._distributeXParams[xparamId] = value;
};

Game_Actor.prototype.addXDistribute = function(xparamId, value) {
	this.setXDistribute(xparamId, this._distributeXParams[xparamId] + value);
};

Game_Actor.prototype.setSDistribute = function(sparamId, value) {
	this._distributeSParams[sparamId] = value;
};

Game_Actor.prototype.addSDistribute = function(sparamId, value) {
	this.setSDistribute(sparamId, this._distributeSParams[sparamId] + value);
};

Game_Actor.prototype.getAbnormalParam = function(param) {
};

Game_Actor.prototype.addAbnormalParam = function(param, value) {
};

Game_Actor.prototype.getDistribute = function(param) {
	const type = this.getParamType(param);
	switch(type) {
		case 1: 
			return this._distributeParams[Game_Actor.bParams.indexOf(param)];
			break;
		case 2: 
			return this._distributeXParams[Game_Actor.xParams.indexOf(param)];
			break;
		case 3: 
			return this._distributeSParams[Game_Actor.sParams.indexOf(param)];
			break;
		default: 
			return this.getAbnormalParam(param);
			break;
	}
};

Game_Actor.prototype.addDistribute = function(param, value) {
	const type = this.getParamType(param);
	switch(type) {
		case 1: 
			this.addBaseDistribute(Game_Actor.bParams.indexOf(param), value);
			break;
		case 2: 
			this.addXDistribute(Game_Actor.xParams.indexOf(param), value);
			break;
		case 3: 
			this.addSDistribute(Game_Actor.sParams.indexOf(param), value);
			break;
		default: 
			this.addAbnormalParam(param, value);
			break;
	}
};

Game_Actor.prototype.getParamType = function(param) {
	if(Game_Actor.bParams.contains(param)) {
		return 1;
	} else if(Game_Actor.xParams.contains(param)) {
		return 2;
	} else if(Game_Actor.sParams.contains(param)) {
		return 3;
	}
	return 0;
};

//-----------------------------------------------------------------------------
// Game_Interpreter
//-----------------------------------------------------------------------------

if(!SRD.Game_Interpreter_pluginCommand) {

SRD.Game_Interpreter_pluginCommand = Game_Interpreter.prototype.pluginCommand;
Game_Interpreter.prototype.pluginCommand = function(command, args) {
	const com = command.trim().toLowerCase();
	if(SRD.PluginCommands[com]) {
		SRD.PluginCommands[com].call(this, args);
		return;
	}
	SRD.Game_Interpreter_pluginCommand.apply(this, arguments);
};

}

//-----------------------------------------------------------------------------
// Scene_Menu
//-----------------------------------------------------------------------------

_.Scene_Menu_createCommandWindow = Scene_Menu.prototype.createCommandWindow;
Scene_Menu.prototype.createCommandWindow = function() {
	_.Scene_Menu_createCommandWindow.apply(this, arguments);
	if(_.show) {
		this._commandWindow.setHandler('distribute', this.commandPersonal.bind(this));
	}
};

_.Scene_Menu_onPersonalOk = Scene_Menu.prototype.onPersonalOk;
Scene_Menu.prototype.onPersonalOk = function() {
	if(this._commandWindow.currentSymbol() === 'distribute') {
		this.openStatDistribution();
		return;
	}
	_.Scene_Menu_onPersonalOk.apply(this, arguments);
};

Scene_Menu.prototype.openStatDistribution = function() {
	SceneManager.push(Scene_Distribute);
};

//-----------------------------------------------------------------------------
// Scene_Distribute
//-----------------------------------------------------------------------------

Scene_Distribute.prototype = Object.create(Scene_MenuBase.prototype);
Scene_Distribute.prototype.constructor = Scene_Distribute;

Scene_Distribute.prototype.initialize = function() {
	Scene_MenuBase.prototype.initialize.call(this);
	ImageManager.loadFace($gameParty.menuActor().faceName());
};

Scene_Distribute.prototype.create = function() {
	Scene_MenuBase.prototype.create.call(this);
	this.createHelpWindow();
	this.createCommandWindow();
	this.createStatusWindow();
	this.createPointsWindow();
	this.createDistributeWindow();
	this.refreshActor();
};

Scene_Distribute.prototype.createCommandWindow = function() {
	const wy = this._helpWindow.height;
	this._commandWindow = new Window_DistributeCommand(0, wy);
	this._commandWindow.setHelpWindow(this._helpWindow);
	this._commandWindow.setHandler('spend',    this.commandSpend.bind(this));
	this._commandWindow.setHandler('clear',    this.commandClear.bind(this));
	this._commandWindow.setHandler('cancel',   this.popScene.bind(this));
	this._commandWindow.setHandler('pagedown', this.nextActor.bind(this));
	this._commandWindow.setHandler('pageup',   this.previousActor.bind(this));
	this.addWindow(this._commandWindow);
};

Scene_Distribute.prototype.createStatusWindow = function() {
	const wy = this._commandWindow.y + this._commandWindow.height;
	this._statusWindow = new Window_DistributeStatus(0, wy);
	this.addWindow(this._statusWindow);
};

Scene_Distribute.prototype.createPointsWindow = function() {
	const wy = this._statusWindow.y + this._statusWindow.height;
	this._pointsWindow = new Window_DistributePoints(0, wy);
	this.addWindow(this._pointsWindow);
	this._commandWindow.setPointsWindow(this._pointsWindow);
};

Scene_Distribute.prototype.createDistributeWindow = function() {
	const wx = this._statusWindow.width;
	const wy = this._commandWindow.y + this._commandWindow.height;
	const ww = Graphics.boxWidth - wx;
	this._distributeWindow = new Window_Distribute(wx, wy, ww);
	this._distributeWindow.setHelpWindow(this._helpWindow);
	this._distributeWindow.setStatusWindow(this._statusWindow);
	this._distributeWindow.setPointsWindow(this._pointsWindow);
	this._distributeWindow.setHandler('finish', this.distributeFinish.bind(this));
	this._distributeWindow.setHandler('cancel', this.distributeCancel.bind(this));
	this.addWindow(this._distributeWindow);
};

Scene_Distribute.prototype.refreshActor = function() {
	const actor = this.actor();
	this._commandWindow.setActor(actor);
	this._statusWindow.setActor(actor);
	this._distributeWindow.setActor(actor);
};

Scene_Distribute.prototype.commandSpend = function() {
	this._distributeWindow.activate();
	this._distributeWindow.select(0);
};

Scene_Distribute.prototype.commandClear = function() {
	this.actor().resetDistributeStats();
	$gameParty.loseGold(this._commandWindow.getCost());
	this._distributeWindow.refresh();
	this._statusWindow.refresh();
	this._commandWindow.refresh();
	this._commandWindow.refreshCost();
	this._commandWindow.activate();
};

Scene_Distribute.prototype.distributeFinish = function() {
	this._distributeWindow.applyBonuses();
	this._distributeWindow.clearInfo();
	this._statusWindow.refresh();
	this.distributeEnd();
};

Scene_Distribute.prototype.distributeCancel = function() {
	this._distributeWindow.restartInfo();
	this.distributeEnd();
};

Scene_Distribute.prototype.distributeEnd = function() {
	this._pointsWindow.clear();
	this._distributeWindow.refresh();
	this._distributeWindow.deselect();
	this._commandWindow.activate();
	this._commandWindow.refreshCost();
	this._commandWindow.refresh();
};

Scene_Distribute.prototype.onActorChange = function() {
	this.refreshActor();
	this._commandWindow.activate();
};

//-----------------------------------------------------------------------------
// Window_MenuCommand
//-----------------------------------------------------------------------------

_.Window_MenuCommand_addOriginalCommands = Window_MenuCommand.prototype.addOriginalCommands;
Window_MenuCommand.prototype.addOriginalCommands = function() {
	_.Window_MenuCommand_addOriginalCommands.apply(this, arguments);
	if(_.show) {
		this.addCommand(_.name, 'distribute', this.isDistributeEnabled());
	}
};

Window_MenuCommand.prototype.isDistributeEnabled = function() {
	return true;
};

//-----------------------------------------------------------------------------
// Window_DistributeCommand
//-----------------------------------------------------------------------------

Window_DistributeCommand.prototype = Object.create(Window_HorzCommand.prototype);
Window_DistributeCommand.prototype.constructor = Window_DistributeCommand;

Window_DistributeCommand.prototype.initialize = function(x, y) {
	Window_HorzCommand.prototype.initialize.call(this, x, y);
	this._cost = 0;
	this._actor = null;
	this._pointsWindow = null;
};

Window_DistributeCommand.prototype.playOkSound = function() {
	const symbol = this.commandSymbol(this.index());
	if(symbol === 'clear') {
		SoundManager.playUseItem();
	} else {
		Window_HorzCommand.prototype.playOkSound.apply(this, arguments);
	}
};

Window_DistributeCommand.prototype.windowWidth = function() {
	return Graphics.boxWidth;
};

Window_DistributeCommand.prototype.maxCols = function() {
	return this._list.length;
};

Window_DistributeCommand.prototype.makeCommandList = function() {
	this.addCommand(_.spendText, 'spend');
	if(_.reset) {
		const actorReady = this._actor && this._actor.pointsUsed() > 0;
		this.addCommand(_.resetText, 'clear', actorReady && this._cost <= $gameParty.gold());
	}
	this.addCommand(_.finishText, 'cancel');
};

Window_DistributeCommand.prototype.setPointsWindow = function(window) {
	this._pointsWindow = window;
};

Window_DistributeCommand.prototype.setActor = function(actor) {
	if(this._actor !== actor) {
		this._actor = actor;
		this.refreshCost();
		this.refresh();
	}
};

Window_DistributeCommand.prototype.getCost = function() {
	return this._cost;
};

Window_DistributeCommand.prototype.refreshCost = function() {
	const actor = this._actor;
	const level = this._actor.level;
	const points = this._actor.pointsUsed();
	this._cost = eval(_.cost);
};

Window_DistributeCommand.prototype.select = function(index) {
	Window_HorzCommand.prototype.select.apply(this, arguments);
	if(!this._pointsWindow) return;
	const symbol = this.commandSymbol(index);
	this._pointsWindow.clear();
	if(symbol === 'clear') {
		this._pointsWindow.setGoldCost(this._cost);
	}
};

//-----------------------------------------------------------------------------
// Window_DistributePoints
//-----------------------------------------------------------------------------

Window_DistributePoints.prototype = Object.create(Window_Base.prototype);
Window_DistributePoints.prototype.constructor = Window_DistributePoints;

Window_DistributePoints.prototype.initialize = function(x, y) {
	const width = this.windowWidth();
	const height = this.windowHeight();
	Window_Base.prototype.initialize.call(this, x, y, width, height);
	this._actor = null;
	this._points = 0;
};

Window_DistributePoints.prototype.windowWidth = function() {
	return 408;
};

Window_DistributePoints.prototype.windowHeight = function() {
	return this.fittingHeight(1);
};

Window_DistributePoints.prototype.refresh = function() {
	const x = this.textPadding();
	const width = this.contentsWidth() - this.textPadding() * 2;
	const unitWidth = _.iconIndex ? Window_Base._iconWidth : this.textWidth(_.pointText);
	this.clear();
	this.resetTextColor();
	this.drawText(this.points(), x, 0, width - unitWidth - 12, 'right');
	if(_.iconIndex) {
		this.drawIcon(_.iconIndex, this.windowWidth() - this.standardPadding() - Window_Base._iconWidth - 24, 2);
	} else {
		this.changeTextColor(_.labelColor);
		this.drawText(_.pointText, x, 0, width - 6, 'right');
	}
	this.changeTextColor(this.systemColor());
	this.contents.fontSize = 24;
	this.drawText(this.label(), 0, 0, width, 'left');
	this.resetFontSettings();
};

Window_DistributePoints.prototype.clear = function() {
	this.contents.clear();
};

Window_DistributePoints.prototype.points = function() {
	return this._points;
};

Window_DistributePoints.prototype.setValue = function(value) {
	this._points = value;
	this.refresh();
};

Window_DistributePoints.prototype.label = function() {
	return _.upgrade;
};

if(Imported.YEP_X_MoreCurrencies) alert("Please place YEP_X_MoreCurrencies below SRD_StatDistribution!");

_.Window_Gold_refresh = Window_Gold.prototype.refresh;
Window_DistributePoints.prototype.setGoldCost = function(gold) {
	this._value = gold;
	_.Window_Gold_refresh.apply(this, arguments);
	this.drawResetCost();
};

Window_DistributePoints.prototype.drawResetCost = function() {
	const width = this.contentsWidth() - this.textPadding() * 2;
	this.changeTextColor(this.systemColor());
	this.contents.fontSize = 24;
	this.drawText("Reset Cost:", 0, 0, width, 'left');
	this.resetFontSettings();
};

Window_DistributePoints.prototype.currencyUnit = Window_Gold.prototype.currencyUnit;

Window_DistributePoints.prototype.value = function() {
	return this._value;
};

//-----------------------------------------------------------------------------
// Window_DistributeStatus
//-----------------------------------------------------------------------------

Window_DistributeStatus.prototype = Object.create(Window_Selectable.prototype);
Window_DistributeStatus.prototype.constructor = Window_DistributeStatus;

Window_DistributeStatus.prototype.initialize = function(x, y) {
	Window_Selectable.prototype.initialize.call(this, x, y, 408, this.fittingHeight(8));
	this._actor = null;
	this.refresh();
	this.activate();
};

Window_DistributeStatus.prototype.setActor = function(actor) {
	if(this._actor !== actor) {
		this._actor = actor;
		this.refresh();
	}
};

Window_DistributeStatus.prototype.refresh = function() {
	this.contents.clear();
	if(this._actor) {
		const lineHeight = this.lineHeight();
		//Line 1
		this.drawActorName(this._actor, 6, 0);
		this.drawActorClass(this._actor, 192, 0);
		//Line 2
		this.drawHorzLine(lineHeight);
		//Line 3
		this.drawActorFace(this._actor, 12, lineHeight * 2);
		this.drawBasicInfo(180, lineHeight * 2, this.contentsWidth() - 180);
		//Line 7
		this.drawHorzLine(lineHeight * 6);
		//Line 8
		this.drawActorPoints(lineHeight * 7, this.contentsWidth() - this.textPadding() * 2);
	}
};

Window_DistributeStatus.prototype.drawBasicInfo = function(x, y, width) {
	const lineHeight = this.lineHeight();
	this.drawActorLevel(this._actor, x, y + lineHeight * 0);
	this.drawActorIcons(this._actor, x, y + lineHeight * 1);
	this.drawActorHp(this._actor, x, y + lineHeight * 2, width);
	this.drawActorMp(this._actor, x, y + lineHeight * 3, width);
};

Window_DistributeStatus.prototype.drawHorzLine = function(y) {
	const lineY = y + this.lineHeight() / 2 - 1;
	this.contents.paintOpacity = 48;
	this.contents.fillRect(0, lineY, this.contentsWidth(), 2, this.normalColor());
	this.contents.paintOpacity = 255;
};

Window_DistributeStatus.prototype.drawActorPoints = function(y, width) {
	const x = this.textPadding();
	const unitWidth = _.iconIndex ? Window_Base._iconWidth : this.textWidth(_.pointText);
	this.resetTextColor();
	this.drawText(this._actor.distributePoints(), x, y, width - unitWidth - 12, 'right');
	if(_.iconIndex) {
		this.drawIcon(_.iconIndex, this.width - this.standardPadding() - Window_Base._iconWidth - 24, y + 2);
	} else {
		this.changeTextColor(_.labelColor);
		this.drawText(_.pointText, x, y, width - 6, 'right');
	}
	this.contents.fontSize = 24;
	this.drawText(_.points, 0, y, width, 'left');
	this.resetFontSettings();
};

Window_DistributeStatus.prototype.refreshPoints = function() {
	const lineHeight = this.lineHeight();
	const width = this.contentsWidth();
	this.contents.clearRect(0, lineHeight * 7, width, lineHeight);
	this.drawActorPoints(lineHeight * 7, width - this.textPadding() * 2);
};

//-----------------------------------------------------------------------------
// Window_Distribute
//-----------------------------------------------------------------------------

Window_Distribute.prototype = Object.create(Window_Command.prototype);
Window_Distribute.prototype.constructor = Window_Distribute;

Window_Distribute.prototype.initialize = function(x, y, width) {
	this._windowWidth = width;
	this._maxHeight = Graphics.boxHeight - y;
	this._statusWindow = null;
	this._pointsWindow = null;
	this.clearInfo();
	Window_Command.prototype.initialize.call(this, x, y);
	this.deselect();
	this.deactivate();
};

Window_Distribute.prototype.drawGauge = function(x, y, width, rate, color1, color2) {
	const fillW = Math.floor(width * rate);
	const gaugeY = y + this.lineHeight() - 2 - _.gaugeHeight;
	this.contents.fillRect(x - 1, gaugeY - 1, width + 2, _.gaugeHeight + 2, "#000");
	this.contents.fillRect(x, gaugeY, width, _.gaugeHeight, this.gaugeBackColor());
	this.contents.gradientFillRect(x, gaugeY, fillW, _.gaugeHeight, color1, color2);
};

Window_Distribute.prototype.playOkSound = function() {
	const symbol = this.commandSymbol(this.index());
	if(symbol === 'finish') {
		SoundManager.playSave();
	} else {
		Window_Command.prototype.playOkSound.apply(this, arguments);
	}
};

Window_Distribute.prototype.windowWidth = function() {
	return this._windowWidth;
};

Window_Distribute.prototype.windowHeight = function() {
	return Math.min(this.fittingHeight(this.numVisibleRows()), this._maxHeight);
};

Window_Distribute.prototype.setActor = function(actor) {
	if(this._actor !== actor) {
		this._actor = actor;
		this.clearInfo();
		this.refresh();
	}
};

Window_Distribute.prototype.setStatusWindow = function(window) {
	this._statusWindow = window;
};

Window_Distribute.prototype.setPointsWindow = function(window) {
	this._pointsWindow = window;
};

Window_Distribute.prototype.restartInfo = function() {
	this._actor.addDistributePointsTemp(this._pointsSpent);
	this.refreshEverything();
	this.clearInfo();
};

Window_Distribute.prototype.clearInfo = function() {
	this._pointsSpent = 0;
	this._maxPoints = this._actor ? this._actor.distributePoints() : 0;
	this._bonuses = {};
};

Window_Distribute.prototype.applyBonuses = function() {
	if(this._actor) {
		Object.keys(this._bonuses).forEach(function(key) {
			this._actor.addDistribute(key, this._bonuses[key]);
		}, this);
	}
	this._actor.addDistributePointsSpent(this._pointsSpent);
	this._pointsSpent = 0;
};

Window_Distribute.prototype.updateHelp = function() {
	const index = this.index();
	if(!this._list[index]) return;
	const symbol = this.commandSymbol(index);
	this._pointsWindow.clear();
	this._helpWindow.clear();
	if(symbol !== 'finish') {
		const data = $dataDistributeStats[symbol];
		const actor = this._actor;
		this._pointsWindow.setValue(eval(data.cost));
		this._helpWindow.setText(data.description);
	}
};

Window_Distribute.prototype.makeCommandList = function() {
	if(this._actor) {
		const stats = this._actor.actor()._sd_stats || _.stats;
		stats.forEach(function(stat) {
			if($dataDistributeStats[stat]) {
				this.addCommand($dataDistributeStats[stat].name, stat);
			}
		}, this);
	}
	this.addCommand("Finish", 'finish');
};

Window_Distribute.prototype.drawItem = function(index) {
	const symbol = this.commandSymbol(index);
	if(symbol === 'finish') {
		this.drawFinishItem(index);
	} else {
		this.drawNormalItem(index, symbol);
	}
};

Window_Distribute.prototype.drawNormalItem = function(index, symbol) {
	const rect = this.itemRectForText(index);
	const name = this.commandName(index);
	const nameWidth = this.textWidth(name);
	const statWidth = rect.width - nameWidth;
	let stat = this._actor[symbol];
	this.changeTextColor(this.systemColor());
	const actor = this._actor;
	const data = $dataDistributeStats[symbol];
	const cost = eval(data.cost);
	let add = 0;
	if(this._bonuses[symbol] && this._bonuses[symbol] > 0) add = this._bonuses[symbol];
	const current = (actor.getDistribute(symbol) + add);
	const max = eval(data.max);
	this.changePaintOpacity((current < max && this.hasPoints(cost)) || (this._bonuses[symbol] && this._bonuses[symbol] > 0));
	if(_.drawGauges) {
		let rate = 0;
		rate = current / max;
		this.drawGauge(rect.x, rect.y, rect.width, rate, data.min_col, data.max_col);
	}
	this.drawText(name, rect.x, rect.y, nameWidth, 'left');
	this.drawNormalItemNumbers(stat, symbol, nameWidth, statWidth, rect);
};

Window_Distribute.prototype.drawNormalItemNumbers = function(stat, symbol, nameWidth, statWidth, rect) {
	if(stat !== undefined) {
		const percent = Game_Actor.xParams.contains(symbol) || Game_Actor.sParams.contains(symbol);
		let bonusWidth = -12;
		this.contents.fontSize = 22;
		if(this._bonuses[symbol]) {
			const bonusText = percent ? `(+${Math.round(this._bonuses[symbol]*1000) / 10}%)` : `(+${this._bonuses[symbol]})`;
			bonusWidth = this.textWidth(bonusText);
			this.changeTextColor("#66ff66");
			this.drawText(bonusText, nameWidth, rect.y, statWidth, 'right');
		}
		this.resetTextColor();
		if(percent) stat = `${Math.round(stat*1000) / 10}%`;
		this.drawText(stat, nameWidth, rect.y, statWidth - bonusWidth - 12, 'right');
		this.resetFontSettings();
	}
};

Window_Distribute.prototype.drawFinishItem = function(index) {
	const rect = this.itemRectForText(index);
	const isEnabled = this._pointsSpent > 0;
	this.changePaintOpacity(isEnabled);
	this._list[this._list.length - 1].enabled = isEnabled;
	this.contents.fontSize = 24;
	this.drawText(this.commandName(index), rect.x, rect.y, rect.width, 'center');
	this.resetFontSettings();
};

Window_Distribute.prototype.hasPoints = function(amount) {
	return this._actor.distributePoints() >= amount;
};

Window_Distribute.prototype.canReturnPoints = function(amount) {
	return this._pointsSpent >= amount;
};

Window_Distribute.prototype.removePoint = function(amount) {
	this._actor.addDistributePointsTemp(-amount);
	this._pointsSpent += amount;
	this.refreshEverything();
};

Window_Distribute.prototype.addPoint = function(amount) {
	this._actor.addDistributePointsTemp(amount);
	this._pointsSpent -= amount;
	this.refreshEverything();
};

Window_Distribute.prototype.refreshEverything = function() {
	this._pointsWindow.refresh();
	this._statusWindow.refreshPoints();
	this.refresh();
};

Window_Distribute.prototype.processOk = function() {
	const index = this.index();
	const symbol = this.commandSymbol(index);
	if(symbol === 'finish') {
		Window_Command.prototype.processOk.apply(this, arguments);
	} else {
		this.cursorRight();
	}
};

Window_Distribute.prototype.cursorRight = function(wrap) {
	const index = this.index();
	const symbol = this.commandSymbol(index);
	if(symbol === 'finish') return;
	const actor = this._actor;
	const current = actor.getDistribute(symbol);
	const data = $dataDistributeStats[symbol];
	const cost = eval(data.cost);
	if(!this.hasPoints(cost)) {
		return;
	}
	if(this._bonuses[symbol] === undefined) this._bonuses[symbol] = 0;
	const prev = this._bonuses[symbol];
	this._bonuses[symbol] += eval(data.gain);
	this._bonuses[symbol] = this._bonuses[symbol].clamp(0, eval(data.max) - current);
	if(this._bonuses[symbol] !== prev) {
		this.removePoint(cost);
		this.refreshEverything();
		SoundManager.playCursor();
	}
};

Window_Distribute.prototype.cursorLeft = function(wrap) {
	const index = this.index();
	const symbol = this.commandSymbol(index);
	if(symbol === 'finish') return;
	const actor = this._actor;
	const current = actor.getDistribute(symbol);
	const data = $dataDistributeStats[symbol];
	const cost = eval(data.cost);
	if(!this.canReturnPoints(cost)) {
		return;
	}
	if(this._bonuses[symbol] === undefined) this._bonuses[symbol] = 0;
	const prev = this._bonuses[symbol];
	this._bonuses[symbol] -= eval(data.gain);
	this._bonuses[symbol] = this._bonuses[symbol].clamp(0, eval(data.max) - current);
	if(this._bonuses[symbol] !== prev) {
		this.addPoint(cost);
		this.refreshEverything();
		SoundManager.playCursor();
	}
};

Window_Distribute.prototype.refresh = function() {
	this.clearCommandList();
	this.makeCommandList();
	this.height = this.windowHeight();
	this.createContents();
	Window_Selectable.prototype.refresh.call(this);
};

})(SRD.StatDistribution);