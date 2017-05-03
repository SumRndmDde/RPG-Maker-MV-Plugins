/*:
 * @plugindesc Allows developers to create summons that replace the user or party while active.
 * @author SumRndmDde
 *
 * @param Allow Turn Reset
 * @desc If 'true', then the battle will skip all turns and return to the input phase when the party is replaced.
 * @default true
 *
 * @help
 *
 * Replace Summons
 * Version 1.00
 * SumRndmDde
 *
 *
 * This plugin requires the Summon Core plugin:
 * http://sumrndm.site/summon-core/
 *
 * This plugin allows developers to create summons that replace the user or 
 * party while active.
 *
 *
 * ==============================================================================
 *  Skill Notetags
 * ==============================================================================
 *
 * In order to set up replacement summonings, simply use the following notetags
 * within the corresponding Skill noteboxes.
 *
 *
 *   <Summon Replace Party>
 *
 * Place this in a summon Skill and that Skill will temporarily remove the
 * party while the summon is active.
 *
 *
 *   <Summon Replace User>
 *
 * Place this in a summon Skill and that Skill will temporarily remove the
 * user while the summon is active.
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
SRD.ReplaceSummons = SRD.ReplaceSummons || {};
SRD.NotetagGetters = SRD.NotetagGetters || [];

var Imported = Imported || {};
Imported["SumRndmDde Replace Summons"] = 1.00;

(function(_) {

"use strict";

//-----------------------------------------------------------------------------
// SRD.ReplaceSummons
//-----------------------------------------------------------------------------

const params = PluginManager.parameters('SRD_ReplaceSummons');

_.meetsRequirements = Imported["SumRndmDde Summon Core"];
_.cancelTurns = String(params['Allow Turn Reset']).trim().toLowerCase() === 'true';

_.loadNotetags = function() {
	const data = $dataSkills;
	const varNamesAreDumb = /<Summon\s*Replace\s*Party>/im;
	const oreoesAreOreoes = /<Summon\s*Replace\s*User>/im;
	for(let i = 1; i < data.length; i++) {
		const note = data[i].note;
		if(note.match(varNamesAreDumb)) {
			data[i]._rs_partyReplace = true;
		}
		if(note.match(oreoesAreOreoes)) {
			data[i]._rs_actorReplace = true;
		}
	}
};

SRD.NotetagGetters.push(_.loadNotetags);

_.alertNeedSummonCore = function() {
	alert("The 'SRD_SummonCore' plugin is required for using the 'SRD_ReplaceSummons' plugin.");
	if(confirm("Do you want to open the download page to 'SRD_SummonCore'?")) {
		window.open('http://sumrndm.site/summon-core/');
	}
};

if(!_.meetsRequirements) {
	_.alertNeedSummonCore();
}

//-----------------------------------------------------------------------------
// DataManager
//-----------------------------------------------------------------------------

if(!SRD.DataManager_isDatabaseLoaded) {

SRD.notetagsLoaded = false;
SRD.DataManager_isDatabaseLoaded = DataManager.isDatabaseLoaded;
DataManager.isDatabaseLoaded = function() {
	if(!SRD.DataManager_isDatabaseLoaded.apply(this, arguments)) return false;
	if(!SRD.notetagsLoaded) {
		N.forEach(function(func) {
			func.call(this);
		}, this);
		SRD.notetagsLoaded = true;
	}
	return true;
};

}

//-----------------------------------------------------------------------------
// BattleManager
//-----------------------------------------------------------------------------

_.BattleManager_canEscape = BattleManager.canEscape;
BattleManager.canEscape = function() {
	return _.BattleManager_canEscape.apply(this, arguments) && !$gameParty.isReplaceSummon();
};

//-----------------------------------------------------------------------------
// Game_Actor
//-----------------------------------------------------------------------------

_.Game_Actor_initMembers = Game_Actor.prototype.initMembers;
Game_Actor.prototype.initMembers = function() {
	_.Game_Actor_initMembers.apply(this, arguments);
	this._summonReplaced = false;
};

Game_Actor.prototype.summons = function() {
	return this._summons;
};

Game_Actor.prototype.isSummonReplaced = function() {
	return this._summonReplaced;
};

Game_Actor.prototype.setSummonReplaced = function(value) {
	this._summonReplaced = value;
};

_.Game_Actor_canMove = Game_Actor.prototype.canMove;
Game_Actor.prototype.canMove = function() {
	return _.Game_Actor_canMove.apply(this, arguments) && !this.isSummonReplaced();
};

_.Game_Actor_canInput = Game_Actor.prototype.canInput;
Game_Actor.prototype.canInput = function() {
	return _.Game_Actor_canInput.apply(this, arguments) && !this.isSummonReplaced();
};

Game_Actor.prototype.removeAllSummonsExcept = function(except) {
	const temp = [];
	this._summons.forEach(function(member) {
		temp.push(member);
	}, this);
	for(let i = 0; i < temp.length; i++) {
		if(!except.contains(temp[i])) {
			$gameParty.removeSummon(temp[i]);
		}
	}
};

_.Game_Actor_removeSummon = Game_Actor.prototype.removeSummon;
Game_Actor.prototype.removeSummon = function(summon) {
	_.Game_Actor_removeSummon.apply(this, arguments);
	if(this.isSummonReplaced() && this._summons.length === 0 && !$gameParty.isReplaceSummon()) {
		this.setSummonReplaced(false);
	}
};

//-----------------------------------------------------------------------------
// Game_Summon
//-----------------------------------------------------------------------------

Game_Summon.prototype.isSummonReplaced = function() {
	return false;
};

//-----------------------------------------------------------------------------
// Game_Party
//-----------------------------------------------------------------------------

_.Game_Party_initialize = Game_Party.prototype.initialize;
Game_Party.prototype.initialize = function() {
	_.Game_Party_initialize.apply(this, arguments);
	this._replaceSummonActive = false;
};

_.Game_Party_removeAllSummons = Game_Party.prototype.removeAllSummons;
Game_Party.prototype.removeAllSummons = function() {
	_.Game_Party_removeAllSummons.apply(this, arguments);
	this._replaceSummonActive = false;
	this.members().forEach(function(member) {
		member.setSummonReplaced(false);
	});
};

Game_Party.prototype.isReplaceSummon = function() {
	return this._replaceSummonActive;
};

Game_Party.prototype.removeActorsForSummon = function() {
	this._replaceSummonActive = true;
	this.members().forEach(function(member) {
		member.setSummonReplaced(true);
	});
};

Game_Party.prototype.removeAllSummonsExcept = function(except) {
	const temp = [];
	const members = this.summonMembers();
	members.forEach(function(member) {
		temp.push(member);
	}, this);
	for(let i = 0; i < temp.length; i++) {
		if(!except.contains(temp[i])) {
			this.removeSummon(temp[i]);
		}
	}
};

_.Game_Party_aliveMembers = Game_Party.prototype.aliveMembers;
Game_Party.prototype.aliveMembers = function() {
	if(this.isReplaceSummon()) {
		return this.summonMembers();
	}
	const members = _.Game_Party_aliveMembers.apply(this, arguments);
	const result = [];
	for(let i = 0; i < members.length; i++) {
		if(members[i].isSummonReplaced()) {
			members[i].summons().forEach(function(summon) {
				result.push(summon);
			}, this);
		} else {
			result.push(members[i]);
		}
	}
	return result;
};

_.Game_Party_isAllDead = Game_Party.prototype.isAllDead;
Game_Party.prototype.isAllDead = function() {
	const result = _.Game_Party_isAllDead.apply(this, arguments);
	if(result && this.isReplaceSummon()) {
		this.members().forEach(function(member) {
			member.setSummonReplaced(false);
			if(Imported.YEP_BattleEngineCore) {
				BattleManager._spriteset.stepBackAll();
			}
		});
		this._replaceSummonActive = false;
	} else {
		return result;
	}
	return _.Game_Party_isAllDead.apply(this, arguments);
};

//-----------------------------------------------------------------------------
// Spriteset_Battle
//-----------------------------------------------------------------------------

Spriteset_Battle.prototype.stepBackAll = function() {
	this._actorSprites.forEach(function(sprite) {
		sprite.stepBack();	
	});
};

if(!Imported.YEP_BattleEngineCore) {

Spriteset_Battle.prototype.retreatActor = function(actor) {
	this._actorSprites.forEach(function(sprite) {
		if(sprite._battler === actor) {
			sprite.retreat();
		}	
	});
};

Spriteset_Battle.prototype.retreatAll = function() {
	this._actorSprites.forEach(function(sprite) {
		sprite.retreat();	
	});
};

} else {

Spriteset_Battle.prototype.retreatActor = function(actor) {
	this._actorSprites.forEach(function(sprite) {
		if(sprite._battler === actor) {
			Yanfly.BEC.Sprite_Battler_startMove.call(sprite, 300, 0, 30);
		}	
	});
};

Spriteset_Battle.prototype.retreatAll = function() {
	this._actorSprites.forEach(function(sprite) {
		Yanfly.BEC.Sprite_Battler_startMove.call(sprite, 300, 0, 30);
	});
};

}

//-----------------------------------------------------------------------------
// Sprite_Actor
//-----------------------------------------------------------------------------

_.Sprite_Actor_stepBack = Sprite_Actor.prototype.stepBack;
Sprite_Actor.prototype.stepBack = function() {
	if(!this._actor) return;
	if(!this._actor.isSummonReplaced()) {
		_.Sprite_Actor_stepBack.apply(this, arguments);
	}
};

//-----------------------------------------------------------------------------
// Window_BattleLog
//-----------------------------------------------------------------------------

if(!Imported.YEP_BattleEngineCore) {

_.Window_BattleLog_startAction = Window_BattleLog.prototype.startAction;
Window_BattleLog.prototype.startAction = function(subject, action, targets) {
	const item = action.item();
	if(item.summonInfo && item._rs_partyReplace) {
		this.push('retreatAllForSummons', targets);
		this.push('waitForMovement');
		this.push('initSummonIntros', targets.clone());
		if(_.cancelTurns) this.push('endAllTurns');
		this.displayAction(subject, item);
	} else if(item.summonInfo && item._rs_actorReplace) {
		this.push('retreatActorForSummons', subject, targets);
		this.push('waitForMovement');
		this.push('initSummonIntros', targets.clone());
		this.displayAction(subject, item);
	} else {
		_.Window_BattleLog_startAction.apply(this, arguments);
	}
};

} else {

_.BattleManager_createFollowActions = BattleManager.createFollowActions;
BattleManager.createFollowActions = function() {
	_.BattleManager_createFollowActions.apply(this, arguments);
	if(this._action.item().summonInfo) {
		if(this._action.item()._rs_partyReplace) {
			this._logWindow.retreatAllForSummons(this._targets);
		} else if(this._action.item()._rs_actorReplace) {
			this._logWindow.retreatActorForSummons(this._subject, this._targets);
		}
	}
};

}

Window_BattleLog.prototype.retreatActorForSummons = function(subject, targets) {
	subject.setSummonReplaced(true);
	subject.removeAllSummonsExcept(targets);
	BattleManager._spriteset.retreatActor(subject);
};

Window_BattleLog.prototype.retreatAllForSummons = function(targets) {
	$gameParty.removeActorsForSummon();
	$gameParty.removeAllSummonsExcept(targets);
	BattleManager._spriteset.retreatAll();
};

Window_BattleLog.prototype.endAllTurns = function() {
	BattleManager.endTurn();
};

})(SRD.ReplaceSummons);