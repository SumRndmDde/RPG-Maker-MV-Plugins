/*:
 * @plugindesc Allows developers to create skills that prompt players to make a second input after the original skill input.
 * @author SumRndmDde
 *
 * @param Default Style
 * @desc The default style used for the extend skill window.
 * 'simple'  -  Normal Command  |  'skill'  -  Skill Command
 * @default skill
 *
 * @param Default Width
 * @desc The default width used for the extend skill window.
 * Default is 360
 * @default 360
 *
 * @param Default Align
 * @desc The default alignment used for the extend skill window.
 * Choices are:    left    |    center    |    right
 * @default center
 *
 * @help
 *
 * Skill Extender
 * Version 1.01
 * SumRndmDde
 *
 *
 * This plugin allows developers to create skills that prompt players to make a 
 * second input after the original skill input.
 *
 *
 * ==============================================================================
 *  Skill Notetags
 * ==============================================================================
 *
 * The following notetags can be used to customize the extend setup:
 *
 *
 *   <Extend Skills: [skillId1], [skillId2], ...>
 *
 * Using this notetag, a list of Skills can be set up for extension on the 
 * original Skill. For example: <Extend Skills: 4, 7, 10>
 *
 *
 *   <Extend Skills Style: [simple/skill]>
 *
 * Using this notetag, the style can be set to either 'simple' or 'skill'.
 * For example: <Extend Skills Style: simple>
 *
 *
 *   <Extend Skills Width: [width]>
 *
 * Using this notetag, the width of the extend window for this skill can be set.
 *
 *
 *   <Extend Skills Align: [left/center/right]>
 *
 * Using this notetag, the alignment of the text within the extend window
 * can be customized for this skill.
 *
 *
 *   <Extend Skills Must Be Learned>
 *
 * Using this notetag, the Actor must know the Extend Skills for them to appear.
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
SRD.SkillExtender = SRD.SkillExtender || {};
SRD.NotetagGetters = SRD.NotetagGetters || [];

var Imported = Imported || {};
Imported["SumRndmDde Skill Extender"] = 1.01; 

function Window_SkillExtend() {
	this.initialize.apply(this, arguments);
}

(function(_) {

"use strict";

//-----------------------------------------------------------------------------
// SRD.SkillExtender
//-----------------------------------------------------------------------------

const params = PluginManager.parameters('SRD_SkillExtender');

_.defaultStyle = String(params['Default Style']).trim().toLowerCase() === 'simple';
_.defaultWidth = parseInt(params['Default Width']);
_.defaultAlign = String(params['Default Align']).trim().toLowerCase();

_.loadNotetags = function() {
	const data = $dataSkills;
	const regex1 = /<Extend[ ]?Skills[ ]?:[ ]?(.*)>/im;
	const regex2 = /<Extend[ ]?Skills[ ]?Style[ ]?:[ ]?(.*)>/im;
	const regex3 = /<Extend[ ]?Skills[ ]?Width[ ]?:[ ]?(.*)>/im;
	const regex4 = /<Extend[ ]?Skills[ ]?Align[ ]?:[ ]?(.*)>/im;
	const regex5 = /<Extend[ ]?Skills[ ]?Must[ ]?Be[ ]?Learned>/im;
	for(let i = 1; i < data.length; i++) {
		const note = data[i].note;
		if(note.match(regex1)) {
			data[i]._se_extendSkills = eval('[' + String(RegExp.$1) + ']');
		}
		if(note.match(regex2)) {
			const style = String(RegExp.$1);
			data[i]._se_extendSkillsStyle = !!style.match(/simple/);
		}
		if(note.match(regex3)) {
			data[i]._se_extendSkillsWidth = parseInt(RegExp.$1);
		}
		if(note.match(regex4)) {
			data[i]._se_extendSkillsAlign = String(RegExp.$1).trim().toLowerCase();
		}
		if(note.match(regex5)) {
			data[i]._se_extendSkillsLearned = true;
		}
	}
};

SRD.NotetagGetters.push(_.loadNotetags);

//-----------------------------------------------------------------------------
// DataManager
//-----------------------------------------------------------------------------

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
// Game_Actor
//-----------------------------------------------------------------------------

if(!Game_Actor.prototype.hasSkill) {

Game_Actor.prototype.hasSkill = function(skillId) {
    return this.skills().contains($dataSkills[skillId]);
};

}

//-----------------------------------------------------------------------------
// Scene_Battle
//-----------------------------------------------------------------------------

_.Scene_Battle_isAnyInputWindowActive = Scene_Battle.prototype.isAnyInputWindowActive;
Scene_Battle.prototype.isAnyInputWindowActive = function() {
	return _.Scene_Battle_isAnyInputWindowActive.apply(this, arguments) || this._skillExtend.active;
};

_.Scene_Battle_createAllWindows = Scene_Battle.prototype.createAllWindows;
Scene_Battle.prototype.createAllWindows = function() {
	_.Scene_Battle_createAllWindows.apply(this, arguments);
	this.createSkillExtendWindow();
};

Scene_Battle.prototype.createSkillExtendWindow = function() {
	this._skillExtend = new Window_SkillExtend();
	this._skillExtend.setHandler('ok', this.commandSkillExtend.bind(this));
	this._skillExtend.setHandler('cancel', this.cancelSkillExtend.bind(this));
	this.addWindow(this._skillExtend);
};

Scene_Battle.prototype.openSkillExtendWindow = function(skill) {
	this._skillExtend.setup(skill);
	this._skillExtend.open();
	this._skillExtend.select(0);
	this._skillExtend.activate();
};

_.Scene_Battle_commandSkill = Scene_Battle.prototype.commandSkill;
Scene_Battle.prototype.commandSkill = function() {
	this._skillExtend.setActor(BattleManager.actor());
	_.Scene_Battle_commandSkill.apply(this, arguments);

};

_.Scene_Battle_onSkillOk = Scene_Battle.prototype.onSkillOk;
Scene_Battle.prototype.onSkillOk = function() {
	var skill = this._skillWindow.item();
	if(skill._se_extendSkills) {
		this.openSkillExtendWindow(skill);
	} else {
		_.Scene_Battle_onSkillOk.apply(this, arguments);
	}
};

_.Scene_Battle_onSelectAction = Scene_Battle.prototype.onSelectAction;
Scene_Battle.prototype.onSelectAction = function() {
	this._skillExtend.close();
	this._skillExtend.deactivate();
	_.Scene_Battle_onSelectAction.apply(this, arguments);
};

Scene_Battle.prototype.commandSkillExtend = function() {
	var skill = this._skillExtend.item();
	var action = BattleManager.inputtingAction();
	action.setSkill(skill.id);
	BattleManager.actor().setLastBattleSkill(skill);
	this.onSelectAction();
};

Scene_Battle.prototype.cancelSkillExtend = function() {
	this._skillExtend.close();
	this._skillExtend.deactivate();
	this._skillWindow.reselect();
	this._skillWindow.activate();
};

//-----------------------------------------------------------------------------
// Scene_Skill
//-----------------------------------------------------------------------------

_.Scene_Battle_createActorWindow = Scene_Skill.prototype.createActorWindow;
Scene_Skill.prototype.createActorWindow = function() {
	this.createSkillExtendWindow();
	_.Scene_Battle_createActorWindow.apply(this, arguments);
};

Scene_Skill.prototype.createSkillExtendWindow = function() {
	this._skillExtend = new Window_SkillExtend();
	this._skillExtend.setHandler('ok', this.onItemOk.bind(this));
	this._skillExtend.setHandler('cancel', this.cancelSkillExtend.bind(this));
	this.addWindow(this._skillExtend);
};

Scene_Skill.prototype.openSkillExtendWindow = function(skill) {
	this._skillExtend.setup(skill);
	this._skillExtend.open();
	this._skillExtend.select(0);
	this._skillExtend.activate();
};

Scene_Skill.prototype.cancelSkillExtend = function() {
	this._skillExtend.close();
	this._skillExtend.deactivate();
	this._itemWindow.reselect();
	this._itemWindow.activate();
};

_.Scene_Skill_item = Scene_Skill.prototype.item;
Scene_Skill.prototype.item = function() {
	const item = _.Scene_Skill_item.apply(this, arguments);
	if(item._se_extendSkills) {
		if(this._skillExtend.isClosed()) {
			return 'extend';
		} else {
			return this._skillExtend.item();
		}
	} else {
		return item;
	}
};

_.Scene_Skill_refreshActor = Scene_Skill.prototype.refreshActor;
Scene_Skill.prototype.refreshActor = function() {
	_.Scene_Skill_refreshActor.apply(this, arguments);
	this._skillExtend.setActor(this.actor());
};

_.Scene_Skill_onItemOk = Scene_Skill.prototype.onItemOk;
Scene_Skill.prototype.onItemOk = function() {
	if(this.item() === 'extend') {
		this.openSkillExtendWindow(this._itemWindow.item());
	} else {
		_.Scene_Skill_onItemOk.apply(this, arguments);
	}
};

_.Scene_Skill_activateItemWindow = Scene_Skill.prototype.activateItemWindow;
Scene_Skill.prototype.activateItemWindow = function() {
	this._skillExtend.close();
	this._skillExtend.deactivate();
	_.Scene_Skill_activateItemWindow.apply(this, arguments);
};

//-----------------------------------------------------------------------------
// Window_SkillExtend
//-----------------------------------------------------------------------------

Window_SkillExtend.prototype = Object.create(Window_SkillList.prototype);
Window_SkillExtend.prototype.constructor = Window_SkillExtend;

Window_SkillExtend.prototype.initialize = function() {
	this._skillList = [];
	this._displayType = _.defaultStyle;
	this._displayAlign = _.defaultAlign;
	this._displayLearned = false;
	Window_SkillList.prototype.initialize.call(this, 0, 0, _.defaultWidth, 1);
	this.updatePlacement();
	this.openness = 0;
	this._actor = null;
	this.deactivate();
};

Window_SkillExtend.prototype.maxCols = function() {
	return 1;
};

Window_SkillExtend.prototype.updatePlacement = function() {
	this.makeItemList();
	this.height = this.fittingHeight(this._data.length);
	this.x = (Graphics.boxWidth - this.width) / 2;
	this.y = (Graphics.boxHeight - this.height) / 2;
};

Window_SkillExtend.prototype.setup = function(skill) {
	this._skillList = skill._se_extendSkills;
	this.width = skill._se_extendSkillsWidth || _.defaultWidth;
	this._displayType = (skill._se_extendSkillsStyle === undefined) ? _.defaultStyle : skill._se_extendSkillsStyle;
	this._displayAlign = skill._se_extendSkillsAlign || _.defaultAlign;
	this._displayLearned = !!skill._se_extendSkillsLearned;
	this.updatePlacement();
	this.refresh();
};

Window_SkillExtend.prototype.drawItem = function(index) {
	if(this._displayType) {
		const rect = this.itemRectForText(index);
		const skill = this._data[index];
		this.resetTextColor();
		this.changePaintOpacity(this._actor.canUse(skill));
		this.drawText(skill.name, rect.x, rect.y, rect.width, this._displayAlign);
	} else {
		Window_SkillList.prototype.drawItem.apply(this, arguments);
	}
};

Window_SkillExtend.prototype.makeItemList = function() {
	this._data = [];
	this._skillList.forEach(function(id) {
		if(!this._displayLearned || this._actor.hasSkill(id)) {
			this._data.push($dataSkills[id]);
		}
	}, this);
};

})(SRD.SkillExtender);