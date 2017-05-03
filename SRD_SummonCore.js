/*:
 * @plugindesc Allows developers to create skills that summon Actors into the player's party using various parameters.
 * @author SumRndmDde
 *
 * @param Battlelog Message
 * @desc The message that appears in the battle log when an Actor is summoned.
 * @default %1 has been summoned!
 *
 * @param Max Summons
 * @desc The maximum amount of summons allowed in battle.
 * @default 4
 *
 * @param Restrict Per Skill
 * @desc If 'true', then once a Skill has summoned Actors, it will not be able to do so again until they're gone.
 * @default true
 *
 * @param Restrict Per Position
 * @desc If 'true', then a summon cannot be preformed if multiple summons will appear in the same spot.
 * @default true
 *
 * @param == Defaults ==
 * @default
 *
 * @param Default Actor ID
 * @desc The Actor ID used if one is not specified for the Summoned Actor to be based off of.
 * @default 1
 *
 * @param Default Level
 * @desc The level of the Summoned Actor if one is not specified.
 * @default 1
 *
 * @param Default Animation
 * @desc The animation used for the Summoned Actor's intro if one is not specified.
 * @default 51
 *
 * @param Default Exit Ani.
 * @desc The animation used for the Summoned Actor's exit transition if one is not specified.
 * @default 51
 *
 * @param Default Turns
 * @desc The number of turns the Summoned Actor lasts if it's not specified. Use -1 to make it indefinite.
 * @default -1
 *
 * @param Default X Pos
 * @desc The default X position of the Summoned Actor if one is not specified.
 * @default master._homeX - 120
 *
 * @param Default Y Pos
 * @desc The default Y position of the Summoned Actor if one is not specified.
 * @default master._homeY
 *
 * @help
 *
 * Summon Core
 * Version 1.05
 * SumRndmDde
 *
 *
 * This plugin allows developers to create skills that summon Actors into the 
 * player's party using various parameters.
 *
 *
 * ==============================================================================
 *  Setting up Summoning Skill
 * ==============================================================================
 *
 * In order to make a Skill become a Summon Skill, use the following notetag:
 *
 *   <Summon>
 *   Actor ID: x
 *   <End Summon>
 *
 * Simply set "x" to the Actor ID you wish to be summoned.
 *
 *
 * ==============================================================================
 *  Summoning Properties
 * ==============================================================================
 *
 * Various properties can be added to the Summoning Skills. They can be
 * customized within the Summon notetags:
 *
 *   <Summon>
 *   Actor ID: 2
 *   Level: 10
 *   Turns: 2
 *   <End Summon>
 *
 *
 * Here is a list of all the properties available:
 *
 *
 *   Level
 *
 * Determines the level of the summoned Actor. This can be a number or
 * JavaScript code that uses the "actor" variable to reference the user.
 *
 *
 *   Turns
 *
 * Determines the number of turns the summon will last. Set to -1 to make
 * the summon last until the end of the battle or death.
 *
 *
 *   Animation
 *
 * Determines the animation used for when the summon is summoned.
 *
 *
 *   Exit Animation
 *
 * Determines the exit animation used for when the summon leaves.
 *
 *
 *   X
 *
 * Determines the X position of the summon. Can use JavaScript code.
 * If using JavaScript code, "index" refers to the summon's index within the
 * party and "master" refers to the sprite of the summoner.*
 *
 *   Y
 *
 * Determines the Y position of the summon. Can use JavaScript code.
 * If using JavaScript code, "index" refers to the summon's index within the
 * party and "master" refers to the sprite of the summoner.
 *
 *
 * ==============================================================================
 *  Position Examples
 * ==============================================================================
 *
 * If one wants to position the summoned Actor relative to the summoner, 
 * the following code could be used:
 *
 *   <Summon>
 *   Actor ID: 2
 *   X: master._mainX - 120
 *   Y: master._mainY
 *   <End Summon>
 *
 * This would position the summon 120 pixels to the left of the summoner.
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
SRD.SummonCore = SRD.SummonCore || {};
SRD.NotetagGetters = SRD.NotetagGetters || [];

var Imported = Imported || {};
Imported["SumRndmDde Summon Core"] = 1.05;

function Game_Summon() {
	this.initialize.apply(this, arguments);
}

function Sprite_Summon() {
	this.initialize.apply(this, arguments);
}

(function(_, N) {

"use strict";

const params = PluginManager.parameters('SRD_SummonCore');

_.battlelog = String(params['Battlelog Message']);
_.maxSummons = parseInt(params['Max Summons']);
_.perSkill = String(params['Restrict Per Skill']).trim().toLowerCase() === 'true';
_.perPosition = String(params['Restrict Per Position']).trim().toLowerCase() === 'true';

_.defaults = {
	id: String(params['Default Actor ID']),
	lvl: String(params['Default Level']),
	ani: String(params['Default Animation']),
	exit: String(params['Default Exit Ani.']),
	turn: String(params['Default Turns']),
	x: String(params['Default X Pos']),
	y: String(params['Default Y Pos'])
};

_.loadNotetags = function() {
	const data = $dataSkills;
	const regex = /<\s*Summon\s*>([^<>]*)<\s*End\s*Summon\s*>/ig;
	const regex1 = /Actor\s*ID\s*:\s*(.*)/im;
	const regex2 = /Level\s*:\s*(.*)/im;
	const regex3 = /Animation\s*:\s*(.*)/im;
	const regex4 = /Turns\s*:\s*(.*)/im;
	const regex5 = /X\s*:\s*(.*)/im;
	const regex6 = /Y\s*:\s*(.*)/im;
	const regex7 = /Exit\s*Animation\s*:\s*(.*)/im;
	for(let i = 1; i < data.length; i++) {
		const note = data[i].note;
		let match;
		while(match = regex.exec(note)) {
			if(!data[i].summonInfo) {
				data[i].summonInfo = [];
				data[i].scope = 0;
			}
			const stuff = {};
			const info = match[1];
			if(info.match(regex1)) {
				stuff.id = String(RegExp.$1);
			} else {
				stuff.id = _.defaults.id;
			}
			if(info.match(regex2)) {
				stuff.lvl = String(RegExp.$1);
			} else {
				stuff.lvl = _.defaults.lvl;
			}
			if(info.match(regex3)) {
				stuff.ani = String(RegExp.$1);
			} else {
				stuff.ani = _.defaults.ani;
			}
			if(info.match(regex4)) {
				stuff.turn = String(RegExp.$1);
			} else {
				stuff.turn = _.defaults.turn;
			}
			if(info.match(regex5)) {
				stuff.x = String(RegExp.$1);
			} else {
				stuff.x = _.defaults.x;
			}
			if(info.match(regex6)) {
				stuff.y = String(RegExp.$1);
			} else {
				stuff.y = _.defaults.y;
			}
			if(info.match(regex7)) {
				stuff.exit = String(RegExp.$1);
			} else {
				stuff.exit = _.defaults.exit;
			}
			data[i].summonInfo.push(stuff);
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

_.BattleManager_initMembers = BattleManager.initMembers;
BattleManager.initMembers = function() {
	_.BattleManager_initMembers.apply(this, arguments);
	this.summonsSkillIds = [];
	this.summonsItemIds = [];
	this.summonsXPositions = [];
	this.summonsYPositions = [];
};

BattleManager.allSummonMembers = function() {
	return $gameParty.summonMembers();
};

_.BattleManager_endTurn = BattleManager.endTurn;
BattleManager.endTurn = function() {
	_.BattleManager_endTurn.apply(this, arguments);
	this.decrementSummonTurns();
};

BattleManager.decrementSummonTurns = function() {
	this.allSummonMembers().forEach(function(battler) {
		if(battler.hasNoTurns()) {
			$gameParty.removeSummon(battler);
		}
	}, this);
};

_.BattleManager_endBattle = BattleManager.endBattle;
BattleManager.endBattle = function(result) {
	_.BattleManager_endBattle.apply(this, arguments);
	if(this.allSummonMembers().length > 0) {
		$gameParty.removeAllSummons();
	}
};

//-----------------------------------------------------------------------------
// Game_BattlerBase
//-----------------------------------------------------------------------------

_.Game_BattlerBase_canUse = Game_BattlerBase.prototype.canUse;
Game_BattlerBase.prototype.canUse = function(item) {
	if(item && item.summonInfo && !this.isActor()) {
		return false;
	}
	return _.Game_BattlerBase_canUse.apply(this, arguments);
};

//-----------------------------------------------------------------------------
// Game_Actor
//-----------------------------------------------------------------------------

_.Game_Actor_initMembers = Game_Actor.prototype.initMembers;
Game_Actor.prototype.initMembers = function() {
	_.Game_Actor_initMembers.apply(this, arguments);
	this._summons = [];
};

Game_Actor.prototype.addSummon = function(summon) {
	this._summons.push(summon);
};

Game_Actor.prototype.removeSummon = function(summon) {
	this._summons.splice(this._summons.indexOf(summon), 1);
};

_.Game_Actor_refresh = Game_Actor.prototype.refresh;
Game_Actor.prototype.refresh = function() {
	_.Game_Actor_refresh.apply(this, arguments);
	if(this._hp === 0) {
		this._summons.forEach(function(summon) {
			$gameParty.removeSummon(summon);
		}, this);
		this._summons = [];
	}
};

_.Game_Actor_canUse = Game_Actor.prototype.canUse;
Game_Actor.prototype.canUse = function(item) {
	let result = true;
	if(this.actorId() && item && item.summonInfo && $gameParty.inBattle()) {
		result = this.canUseSummon(item);
	}
	return _.Game_Actor_canUse.apply(this, arguments) && result;
};

Game_Actor.prototype.canUseSummon = function(item) {
	if(_.perPosition) {
		for(let i = 0; i < item.summonInfo.length; i++) {
			const info = item.summonInfo[i];
			const x = info.x;
			const y = info.y;
			const id = this.actorId();
			const pos = BattleManager._spriteset.getPositionsForSummons(x, y, id);
			if(BattleManager.summonsXPositions[pos.x] && BattleManager.summonsXPositions[pos.y]) {
				return false;
			}
		}
	}
	if(_.perSkill) {
		const id = item.id;
		if(DataManager.isSkill(item)) {
			if(BattleManager.summonsSkillIds[id] > 0) return false;
		} else {
			if(BattleManager.summonsItemIds[id] > 0) return false;
		}
	}
	if($gameParty.hasMaxSummons()) return false;
	return true;
};

//-----------------------------------------------------------------------------
// Game_Summon
//-----------------------------------------------------------------------------

Game_Summon.prototype = Object.create(Game_Actor.prototype);
Game_Summon.prototype.constructor = Game_Summon;

Game_Summon.prototype.initialize = function(actorId, level, turns, introAni, exitAni, masterId) {
	Game_Actor.prototype.initialize.call(this, actorId);
	this._level = level;
	this._turns = turns;
	this._introAnimation = introAni;
	this._exitAnimation = exitAni;
	this.setMasterId(masterId || 0);
	this.recoverAll();
};

Game_Summon.prototype.initMembers = function() {
	Game_Actor.prototype.initMembers.call(this);
	this._turns = 0;
	this._masterId = 0;
	this._introAnimation = 0;
	this._exitAnimation = 0;
	this._isReady = false;
	this._sprite_x = "0";
	this._sprite_y = "0";
	this._baseSkillId = 0;
	this._baseSkillType = '';
	this._battleSprite = null;
};

Game_Summon.prototype.battleSprite = function() {
	return this._battleSprite;
};

Game_Summon.prototype.setBattleSprite = function(sprite) {
	this._battleSprite = sprite;
};

Game_Summon.prototype.ready = function() {
	return this._isReady;
};

Game_Summon.prototype.setReady = function(ready) {
	this._isReady = ready;
};

Game_Summon.prototype.introAnimation = function() {
	return this._introAnimation;
};

Game_Summon.prototype.exitAnimation = function() {
	return this._exitAnimation;
};

Game_Summon.prototype.masterId = function() {
	return this._masterId;
};

Game_Summon.prototype.setMasterId = function(actorId) {
	this._masterId = actorId;
};

Game_Summon.prototype.setX = function(x) {
	this._sprite_x = x;
};

Game_Summon.prototype.setY = function(y) {
	this._sprite_y = y;
};

Game_Summon.prototype.baseSkillId = function() {
	return this._baseSkillId;
};

Game_Summon.prototype.baseSkillType = function() {
	return this._baseSkillType;
};

Game_Summon.prototype.setSkillId = function(id, type) {
	this._baseSkillId = id;
	this._baseSkillType = type;
	if(type === 's') {
		if(!BattleManager.summonsSkillIds[id]) BattleManager.summonsSkillIds[id] = 0;
		BattleManager.summonsSkillIds[id]++;
	} else if(type === 'i') {
		if(!BattleManager.summonsItemIds[id]) BattleManager.summonsItemIds[id] = 0;
		BattleManager.summonsItemIds[id]++;
	}
};

Game_Summon.prototype.getPosition = function() {
	return {x: this._sprite_x, y: this._sprite_y};
};

Game_Summon.prototype.hasNoTurns = function() {
	return this._turns === 0;
};

Game_Summon.prototype.onTurnEnd = function() {
	Game_Actor.prototype.onTurnEnd.call(this);
	this.decrementTurns();
};

Game_Summon.prototype.decrementTurns = function() {
	if(this._turns > 0) {
		this._turns--;
	}
};

Game_Summon.prototype.refresh = function() {
	Game_Actor.prototype.refresh.apply(this, arguments);
	if(this._hp === 0) {
		$gameParty.removeSummon(this);
	}
};

Game_Summon.prototype.refreshMaster = function() {
	const actor = $gameActors.actor(this.masterId());
	if(actor.hp === 0) {
		$gameParty.removeSummon(this);
	}
};

Game_Summon.prototype.canUse = function(item) {
	if(item && item.summonInfo) {
		return false;
	}
	return Game_Actor.prototype.canUse.apply(this, arguments);
};

//-----------------------------------------------------------------------------
// Game_Action
//-----------------------------------------------------------------------------

_.Game_Action_makeTargets = Game_Action.prototype.makeTargets;
Game_Action.prototype.makeTargets = function() {
	if(this._subjectActorId && this.item().summonInfo) {
		return this.createSummons();
	} else {
		return _.Game_Action_makeTargets.apply(this, arguments);
	}
};

Game_Action.prototype.createSummons = function() {
	const item = this.item();
	const result = [];
	for(let i = 0; i < item.summonInfo.length; i++) {
		const actor = $gameActors.actor(this._subjectActorId);
		const info = item.summonInfo[i];
		const id = eval(info.id);
		const lvl = eval(info.lvl);
		const turns = eval(info.turn);
		const introAni = eval(info.ani);
		const exitAni = eval(info.exit);
		const summon = $gameParty.summonActor(id, lvl, turns, introAni, exitAni, this._subjectActorId);
		if(!summon) break;
		actor.addSummon(summon);
		summon.setX(info.x);
		summon.setY(info.y);
		if(this.isSkill()) {
			summon.setSkillId(item.id, 's');
		} else if(this.isItem()) {
			summon.setSkillId(item.id, 'i');
		}
		BattleManager._spriteset.registerSummonSprite(summon);
		result.push(summon);
	}
	return result;
};

//-----------------------------------------------------------------------------
// Game_Party
//-----------------------------------------------------------------------------

_.Game_Party_initialize = Game_Party.prototype.initialize;
Game_Party.prototype.initialize = function() {
	_.Game_Party_initialize.apply(this, arguments);
	this._summons = [];
};

Game_Party.prototype.summonMembers = function() {
	return this._summons;
};

Game_Party.prototype.maxSummonMembers = function() {
	return _.maxSummons;
};

Game_Party.prototype.hasMaxSummons = function() {
	return this.summonMembers().length >= this.maxSummonMembers();
};

Game_Party.prototype.summonActor = function(actorId, level, turns, introAni, exitAni, masterId) {
	if(this._summons.length <= this.maxSummonMembers()) {
		const summon = new Game_Summon(actorId, level, turns, introAni, exitAni, masterId);
		this._summons.push(summon);
		return summon;
	}
	return false;
};

Game_Party.prototype.removeSummon = function(summon) {
	if(this._summons.contains(summon)) {
		this._summons.splice(this._summons.indexOf(summon), 1);
		const actor = $gameActors.actor(summon.masterId());
		actor.removeSummon(summon);
		if(summon.baseSkillType() === 's') {
			BattleManager.summonsSkillIds[summon.baseSkillId()]--;
		} else if(summon.baseSkillType() === 'i') {
			BattleManager.summonsItemIds[summon.baseSkillId()]--;
		}
		BattleManager._spriteset.removeSummonSprite(summon);
		summon.setBattleSprite(null);
		summon = null;
	}
};

Game_Party.prototype.removeAllSummons = function() {
	const temp = [];
	const members = this.summonMembers();
	members.forEach(function(mem) {
		temp.push(mem);
	}, this);
	for(let i = 0; i < temp.length; i++) {
		this.removeSummon(temp[i]);
	}
};

_.Game_Party_battleMembers = Game_Party.prototype.battleMembers;
Game_Party.prototype.battleMembers = function() {
	return _.Game_Party_battleMembers.apply(this, arguments).concat(this._summons);
};

Game_Party.prototype.rawBattleMembers = function() {
	return _.Game_Party_battleMembers.apply(this, arguments);
};

//-----------------------------------------------------------------------------
// Spriteset_Battle
//-----------------------------------------------------------------------------

_.Spriteset_Battle_createActors = Spriteset_Battle.prototype.createActors;
Spriteset_Battle.prototype.createActors = function() {
	_.Spriteset_Battle_createActors.apply(this, arguments);
	this.createSummons();
};

Spriteset_Battle.prototype.updateActors = function() {
	var members = $gameParty.rawBattleMembers();
	for (var i = 0; i < this._actorSprites.length; i++) {
		this._actorSprites[i].setBattler(members[i]);
	}
};

Spriteset_Battle.prototype.createSummons = function() {
	this._summonSprites = [];
	for(var i = 0; i < $gameParty.maxSummonMembers(); i++) {
		this._summonSprites[i] = new Sprite_Summon();
		this._battleField.addChild(this._summonSprites[i]);
	}
};

_.Spriteset_Battle_battlerSprites = Spriteset_Battle.prototype.battlerSprites;
Spriteset_Battle.prototype.battlerSprites = function() {
	return _.Spriteset_Battle_battlerSprites.apply(this, arguments).concat(this._summonSprites);
};

Spriteset_Battle.prototype.registerSummonSprite = function(battler) {
	for(let i = 0; i < this._summonSprites.length; i++) {
		const summon = this._summonSprites[i];
		if(!summon.hasBattler()) {
			battler.setBattleSprite(summon);
			summon.setBattler(battler);
			this.reorganizeSummonSprites();
			return summon;
		}
	}
	return false;
};

Spriteset_Battle.prototype.removeSummonSprite = function(battler) {
	this._summonSprites.forEach(function(summon) {
		if(summon.isBattler(battler)) {
			summon.setBattler(null);
		}
	}, this);
};

Spriteset_Battle.prototype.reorganizeSummonSprites = function() {
	const temp = [];
	for(let i = 0; i < this._summonSprites.length; i++) {
		this._battleField.removeChild(this._summonSprites[i]);
		temp.push(this._summonSprites[i]);
	};
	for(let i = 0; i < this._actorSprites.length; i++) {
		this._battleField.removeChild(this._actorSprites[i]);
		temp.push(this._actorSprites[i]);
	};
	temp.sort(function(a, b) {
		if (a.y !== b.y) {
			return a.y - b.y;
		} else {
			return a.spriteId - b.spriteId;
		}
	}.bind(this));
	for(let i = 0; i < temp.length; i++) {
		this._battleField.addChild(temp[i]);
	};
};

Spriteset_Battle.prototype.updateSummonMasters = function() {
	const actors = $gameParty.rawBattleMembers();
	const summons = $gameParty.summonMembers();
	for(let i = 0; i < summons.length; i++) {
		if(!summons[i]) continue;
		const masterId = summons[i].masterId();
		if(masterId) {
			for(let j = 0; j < actors.length; j++) {
				if(actors[j].actorId() === masterId) {
					summons[i].battleSprite().setMaster(this._actorSprites[j]);
				}
			}
		}
	}
};

Spriteset_Battle.prototype.getPositionsForSummons = function(x, y, id) {
	const actors = $gameParty.rawBattleMembers();
	const index = actors.length;
	for(let i = 0; i < actors.length; i++) {
		if(actors[i].actorId() === id) {
			const master = this._actorSprites[i];
			const result = {};
			result.x = eval(x);
			result.y = eval(y);
			return result;
		}
	}
	return {x: -1, y: -1};
};

//-----------------------------------------------------------------------------
// Sprite_Summon
//-----------------------------------------------------------------------------

Sprite_Summon.prototype = Object.create(Sprite_Actor.prototype);
Sprite_Summon.prototype.constructor = Sprite_Summon;

Sprite_Summon.prototype.initialize = function() {
	Sprite_Actor.prototype.initialize.apply(this, arguments);
	this._transitionType = 0;
	this._introStarted = false;
	this._exitAnimation = 0;
	this._masterSprite = null;
};

Sprite_Summon.prototype.updateVisibility = function() {};

Sprite_Summon.prototype.setActorHome = function(index) {
	BattleManager._spriteset.updateSummonMasters();
	const position = this._actor.getPosition();
	const master = this._masterSprite;
	const x = eval(position.x);
	const y = eval(position.y);
	this.setHome(x, y);
	BattleManager.summonsXPositions[x] = true;
	BattleManager.summonsXPositions[y] = true;
};

Sprite_Summon.prototype.update = function() {
	Sprite_Actor.prototype.update.call(this);
	this.updateSummonIntro();
	this.updateTransition();
};

Sprite_Summon.prototype.updateSummonIntro = function() {
	if(!this._introStarted) {
		if(this._actor && this._actor.ready()) {
			this.setupIntroAnimation();
			this._introStarted = true;
		}
	}
};

Sprite_Summon.prototype.updateTransition = function() {
	if(this._summonSprite) {
		if(this._transitionType === 1) {
			this.opacity = Math.floor(((this._maxDuration - this._summonSprite._duration) / this._maxDuration) * 255);
		} else if(this._transitionType === 2) {
			this.opacity = Math.floor((this._summonSprite._duration / this._maxDuration) * 255);
		}
		if(!this._summonSprite.isPlaying()) {
			if(this._transitionType === 2) {
				BattleManager.summonsXPositions[this._homeX] = false;
				BattleManager.summonsXPositions[this._homeY] = false;
				this._introStarted = false;
				this._exitAnimation = 0;
			}
			this._transitionType = 0;
			this._summonSprite = null;
		}
	}
};

Sprite_Summon.prototype.setMaster = function(master) {
	this._masterSprite = master;
};

Sprite_Summon.prototype.hasBattler = function() {
	return !!this._battler;
};

Sprite_Summon.prototype.isBattler = function(battler) {
	return battler === this._battler;
};

Sprite_Summon.prototype.setBattler = function(battler) {
	Sprite_Battler.prototype.setBattler.call(this, battler);
	const changed = (battler !== this._actor);
	if (changed) {
		this._actor = battler;
		if (battler) {
			this.setActorHome(battler.index());
		}
		this.startEntryMotion();
		this._stateSprite.setup(battler);
		if(this._actor) {
			this._exitAnimation = this._actor.exitAnimation();
		} else {
			this.setupExitAnimation();
		}
	}
};

Sprite_Summon.prototype.startEntryMotion = function() {
	if(this._actor) {
		this.refreshMotion();
		this.startMove(0, 0, 0);
		this.opacity = 0;
	}
};

Sprite_Summon.prototype.setupIntroAnimation = function() {
	this.cancelTransitionAnimation();
	if(this._actor.introAnimation() > 0) {
		this.opacity = 0;
		this._transitionType = 1;
		this._summonSprite = new Sprite_Animation();
		this._summonSprite.setup(this._effectTarget, $dataAnimations[this._actor.introAnimation()], false, 4);
		this.parent.addChild(this._summonSprite);
		this._animationSprites.push(this._summonSprite);
		this._maxDuration = this._summonSprite._duration;
	} else {
		this.opacity = 255;
	}
};

Sprite_Summon.prototype.setupExitAnimation = function() {
	this.cancelTransitionAnimation();
	if(this._exitAnimation > 0) {
		this.opacity = 255;
		this._transitionType = 2;
		this._summonSprite = new Sprite_Animation();
		this._summonSprite.setup(this._effectTarget, $dataAnimations[this._exitAnimation], false, 4);
		this.parent.addChild(this._summonSprite);
		this._animationSprites.push(this._summonSprite);
		this._maxDuration = this._summonSprite._duration;
	} else {
		this.opacity = 0;
	}
};

Sprite_Summon.prototype.cancelTransitionAnimation = function() {
	if(this._summonSprite) {
		this.parent.removeChild(this._summonSprite);
		this._animationSprites = [];
	}
};

Sprite_Summon.prototype.isAnimationPlaying = function() {
	if(!BattleManager.isBattleEnd()) {
		return Sprite_Actor.prototype.isAnimationPlaying.apply(this, arguments);
	}
	return false;
};

Sprite_Summon.prototype.isMoving = function() {
	if(!BattleManager.isBattleEnd()) {
		return Sprite_Actor.prototype.isMoving.apply(this, arguments);
	}
	return false;
};

//-----------------------------------------------------------------------------
// Window_BattleLog
//-----------------------------------------------------------------------------

Window_BattleLog.prototype.initSummonIntros = function(targets) {
	targets.forEach(function(target) {
		target.setReady(true);
		target.result().isSummonedThisTurn = true;
	});
};

_.Window_BattleLog_displayFailure = Window_BattleLog.prototype.displayFailure;
Window_BattleLog.prototype.displayFailure = function(target) {
	if(target.result().isSummonedThisTurn) {
		this.push('addText', _.battlelog.format(target.name()));
		target.result().isSummonedThisTurn = false;
	} else {
		_.Window_BattleLog_displayFailure.apply(this, arguments);
	}
};

//-----------------------------------------------------------------------------
// YEP
//-----------------------------------------------------------------------------

if(!Imported.YEP_BattleEngineCore) {

_.Window_BattleLog_startAction = Window_BattleLog.prototype.startAction;
Window_BattleLog.prototype.startAction = function(subject, action, targets) {
	const item = action.item();
	if(item.summonInfo) {
		this.push('performActionStart', subject, action);
		this.push('waitForMovement');
		this.push('performAction', subject, action);
		this.push('initSummonIntros', targets.clone());
		this.displayAction(subject, item);
	} else {
		_.Window_BattleLog_startAction.apply(this, arguments);
	}
};

} else {

//Random Compatibility Fixes ;-;

_.BattleManager_createFollowActions = BattleManager.createFollowActions;
BattleManager.createFollowActions = function() {
	_.BattleManager_createFollowActions.apply(this, arguments);
	if(this._action.item().summonInfo) this._logWindow.initSummonIntros(this._targets);
};

_.Window_Base_drawGauge = Window_Base.prototype.drawGauge;
Window_Base.prototype.drawGauge = function(x, y, width, rate, color1, color2) {
	if(!rate && rate !== 0) return;
	_.Window_Base_drawGauge.apply(this, arguments);
};

Game_Summon.prototype.battler = function() {
	return this.battleSprite();
};

}

if(Imported.YEP_VictoryAftermath) {

_.Window_VictoryExp_drawItem = Window_VictoryExp.prototype.drawItem;
Window_VictoryExp.prototype.drawItem = function(index) {
	if(index >= $gameParty.rawBattleMembers().length) return;
	_.Window_VictoryExp_drawItem.apply(this, arguments);
};

_.Window_VictoryExp_drawItemGauge = Window_VictoryExp.prototype.drawItemGauge;
Window_VictoryExp.prototype.drawItemGauge = function(index) {
	if(index >= $gameParty.rawBattleMembers().length) return;
	_.Window_VictoryExp_drawItemGauge.apply(this, arguments);
};

}

})(SRD.SummonCore, SRD.NotetagGetters);