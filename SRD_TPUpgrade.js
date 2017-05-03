/*:
 * @plugindesc (v3.02) This Plugin allows you to have more control over your TP system and have a dynamic Max TP stat.
 * @author SumRndmDde
 *
 * @param Minimum Max TP
 * @desc The minimum amount of Max TP an Actor or Enemy may have.
 * @default 1
 *
 * @param Maximum Max TP
 * @desc The maximum amount of Max TP an Actor or Enemy may have.
 * @default 99999
 *
 * @param Preserve TP?
 * @desc Set this to 'true' and TP will be saved and stored after battles the same was HP or MP is.
 * @default false
 *
 * @param Max TP in Status?
 * @desc Set this to 'true' to add TP bar with Max TP in Status Screen. Removes the State Icons, however.
 * @default true
 *
 * @param Restrict Damage Gain?
 * @desc Setting this to 'true' will stop Actors and Enemies from gaining TP due to damage.
 * @default false
 *
 * @param = Default Values =
 * @default
 *
 * @param Default Actor MTP
 * @desc The default amount of Max TP the that the Actors have if not specifically defined.
 * @default 100 + this.level
 *
 * @param Default Actor ITP
 * @desc The default amount of Initial TP the that the Actors have if not specifically defined.
 * @default Math.randomInt(25)
 *
 * @param Default Enemy MTP
 * @desc The default amount of Max TP the that the Enemies have if not specifically defined.
 * @default 100
 *
 * @param Default Enemy ITP
 * @desc The default amount of Initial TP the that the Enemies have if not specifically defined.
 * @default Math.randomInt(100)
 *
 * @param = Battle TP Gains =
 * @default
 *
 * @param TP Bonus Crit Use
 * @desc Amount of TP given when battler does critical. Is JavaScript eval using 'user' and 'target'.
 * @default 0
 *
 * @param TP Bonus Super Use
 * @desc Amount of TP given when battler does super-effective. Is JavaScript eval using 'user' and 'target'.
 * @default 0
 *
 * @param TP Bonus Crit Take
 * @desc Amount of TP given when battler is hit with critical. Is JavaScript eval using 'user' and 'target'.
 * @default 0
 *
 * @param TP Bonus Super Take
 * @desc Amount of TP is given when battler is hit with super-effective. Is JavaScript eval using 'user' and 'target'.
 * @default 0
 *
 * @help
 *
 * TP Upgrade
 * Version 3.02
 * SumRndmDde
 *
 *
 * Upgrades the TP System!
 *
 * Pretty much all of the main stuff to manipulate is done with Notetags.
 * So here they are:
 *
 * ==========================================================================
 * Actor, Class, Equipment, Weapon, State Notetags
 * ==========================================================================
 *
 *  <Max TP: value>
 * Sets the base Max TP of the Actor to 'value'.
 * Value can be a JavaScript eval.
 *
 * Examples: <Max TP: 5>  
 *           <Max TP: this.level * 2>
 *
 * Overwrittes based on priority: 
 *             State, Weapon, Equipment, Class, Actor.
 *
 *
 *  <Change Max TP: +value>
 *  <Change Max TP: -value>
 * Adds the 'value' to the Actor's Max TP.
 * Value can be a JavaScript eval.
 *
 * Examples: <Change Max TP: +300>  
 *           <Change Max TP: this.atk * 2>
 *
 *
 *  <Change Max TP: +value%>
 *  <Change Max TP: -value%>
 * Adds the 'value' to the Actor's Max TP.
 * The value is a percent based off of the Actor's Max TP.
 * Value can be a JavaScript eval.
 *
 * Examples: <Change Max TP: +50%>  
 *           <Change Max TP: -(this.level)%>
 *
 *
 *
 *  <Initial TP: value>
 * Sets the base Max TP of the Actor to 'value'.
 * Value can be a JavaScript eval.
 *
 * Examples: <Initial TP: 5>  
 *           <Initial TP: this.level * 2>
 *
 * Overwrittes based on priority: 
 *             State, Weapon, Equipment, Class, Actor.
 *
 *
 *  <Change Initial TP: +value>
 *  <Change Initial TP: -value>
 * Adds the 'value' to the Actor's Max TP.
 * Value can be a JavaScript eval.
 *
 * Examples: <Change Initial TP: +300>  
 *           <Change Initial TP: this.atk * 2>
 *
 *
 *  <Change Initial TP: +value%>
 *  <Change Initial TP: -value%>
 * Adds the 'value' to the Actor's Max TP.
 * The value is a percent based off of the Actor's Max TP.
 * Value can be a JavaScript eval.
 *
 * Examples: <Change Initial TP: +50%>  
 *           <Change Initial TP: -(this.level)%>
 *
 *
 * ==========================================================================
 * Enemy Notetags
 * ==========================================================================
 *
 *  <Max TP: value>
 * Sets the base Max TP of the Actor to 'value'.
 * Value can be a JavaScript eval.
 *
 * Examples: <Max TP: 5>  
 *           <Max TP: this.atk * 2>
 *
 *
 * ==========================================================================
 * Skill Notetags
 * ==========================================================================
 *
 *  <TP Cost: value>
 * Sets the cost of the TP of the Skill.
 * Value can be a JavaScript eval.
 *
 * Examples: <TP Cost: 120>  
 *           <TP Cost: this.level * 2>
 *
 *
 *  <TP Cost: value%>
 * Sets the cost of the TP of the Skill.
 * The value is a percent based off of the Actor's Max TP.
 * Value can be a JavaScript eval.
 *
 * Examples: <TP Cost: 50%>  
 *           <TP Cost: (this.level * 2)%>
 *
 *
 * ==========================================================================
 * Item and Skill Notetags
 * ==========================================================================
 *
 *  <TP Damage: value>
 * Sets the TP damage value that will be afflicted onto the target.
 * Value can be a JavaScript eval that uses 'a' and 'b' as user and target.
 *
 * Examples: <TP Damage: 120>  
 *           <TP Damage: a.atk * 2 - b.def>
 *
 *
 *  <TP Damage: value%>
 * Sets the TP damage value that will be afflicted onto the target.
 * The value is a percent based off of the Target's Max TP.
 * Value can be a JavaScript eval that uses 'a' and 'b' as user and target.
 *
 * Examples: <TP Damage: 50%>  
 *           <TP Damage: ((a.mat / (a.mat - 1)) * 100)%>
 *
 *
 *
 *  <TP Heal: value>
 * Sets the TP damage value that will be afflicted onto the target.
 * Value can be a JavaScript eval that uses 'a' and 'b' as user and target.
 *
 * Examples: <TP Heal: 120>  
 *           <TP Heal: a.hp>
 *
 *
 *  <TP Heal: value%>
 * Sets the TP damage value that will be afflicted onto the target.
 * The value is a percent based off of the Target's Max TP.
 * Value can be a JavaScript eval that uses 'a' and 'b' as user and target.
 *
 * Examples: <TP Heal: 50%>  
 *           <TP Heal: (a.mtp / 100)%>
 *
 *
 *  <TP Gain: value>
 * Sets the gain of the TP of the Skill or Item.
 * Value can be a JavaScript eval that uses 'user' and 'target'.
 *
 * Examples: <TP Gain: 120>  
 *           <TP Gain: this.level * 2>
 *
 *
 *  <TP Gain: value%>
 * Sets the gain of the TP of the Skill or Item.
 * The value is a percent based off of the Actor's Max TP.
 * Value can be a JavaScript eval that uses 'user' and 'target'.
 *
 * Examples: <TP Gain: 50%>  
 *           <TP Gain: (this.def * 0.5)%>
 *
 *
 * ==========================================================================
 * Plugin Commands
 * ==========================================================================
 *
 * SetActorTP actor value
 * ======================
 *
 * This sets a specific actor's TP to a specific value.
 *
 * What 'actor' can be set to:
 * - Set this to the Actor ID of the Actor you wish to set the TP of.
 * - Set this to 'party' to set the TP of all party members.
 * - Set this to 'pos#' to set the TP of an Actor in a certain position of 
 * the party. Example: pos1, pos3, pos4, etc. (pos1 is the first position.)
 *
 * What 'value' can be set to:
 * - Set this to a direct number value. Example: 100, 30, 70
 * - Set this to a % value based off of the target's Max TP. Example: 50%, 20%
 *
 * 
 * Plugin Command Examples:
 *
 * SetActorTP 1 50
 * SetActorTP 3 300
 * SetActorTP 2 6%
 * SetActorTP party 90%
 * SetActorTP party 0
 * SetActorTP pos1 100%
 * SetActorTP pos3 900
 *
 *
 *
 * AddActorTP actor value
 * ======================
 *
 * This adds TP to an Actor.
 *
 * To determine what to input for 'actor' and 'value' read the Plugin Command
 * description above.
 *
 *
 * Plugin Command Examples:
 *
 * AddActorTP 1 50
 * AddActorTP 3 300
 * AddActorTP 2 6%
 * AddActorTP party 90%
 * AddActorTP party 0
 * AddActorTP pos1 100%
 * AddActorTP pos3 900
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
 */

var SRD = SRD || {};
SRD.TP = SRD.TP || {};
SRD.TP.TPUpgrade = {};

SRD.TP.notetagsLoaded = false;

SRD.TP.minMTP = Number(PluginManager.parameters('SRD_TPUpgrade')['Minimum Max TP']);
SRD.TP.maxMTP = Number(PluginManager.parameters('SRD_TPUpgrade')['Maximum Max TP']);
SRD.TP.preserveTp = String(PluginManager.parameters('SRD_TPUpgrade')['Preserve TP?']).trim().toLowerCase() === 'true';
SRD.TP.TPinStatus = String(PluginManager.parameters('SRD_TPUpgrade')['Max TP in Status?']).trim().toLowerCase() === 'true';
SRD.TP.restrictDamageGain = String(PluginManager.parameters('SRD_TPUpgrade')['Restrict Damage Gain?']).trim().toLowerCase() === 'true';

SRD.TP.defaultMaxTPActor = String(PluginManager.parameters('SRD_TPUpgrade')['Default Actor MTP']);
SRD.TP.defaultInitialTPActor = String(PluginManager.parameters('SRD_TPUpgrade')['Default Actor ITP']);
SRD.TP.defaultMaxTPEnemy = String(PluginManager.parameters('SRD_TPUpgrade')['Default Enemy MTP']);
SRD.TP.defaultInitialTPEnemy = String(PluginManager.parameters('SRD_TPUpgrade')['Default Enemy ITP']);

SRD.TP.TPBonusCritUse = String(PluginManager.parameters('SRD_TPUpgrade')['TP Bonus Crit Use']);
SRD.TP.TPBonusSuperUse = String(PluginManager.parameters('SRD_TPUpgrade')['TP Bonus Super Use']);
SRD.TP.TPBonusCritTake = String(PluginManager.parameters('SRD_TPUpgrade')['TP Bonus Crit Take']);
SRD.TP.TPBonusSuperTake = String(PluginManager.parameters('SRD_TPUpgrade')['TP Bonus Super Take']);

//-----------------------------------------------------------------------------
// DataManager
//-----------------------------------------------------------------------------

SRD.TP.TPUpgrade._DataManager_isDatabaseLoaded = DataManager.isDatabaseLoaded;
DataManager.isDatabaseLoaded = function() {
    if(!SRD.TP.TPUpgrade._DataManager_isDatabaseLoaded.call(this)) return false;
    if(!SRD.TP.notetagsLoaded) {
    	this.loadnotetagsTPUpgradeMaxTP($dataActors);
    	this.loadnotetagsTPUpgradeMaxTP($dataClasses);
    	this.loadnotetagsTPUpgradeMaxTP($dataArmors);
    	this.loadnotetagsTPUpgradeMaxTP($dataWeapons);
    	this.loadnotetagsTPUpgradeMaxTP($dataStates);
    	this.loadnotetagsTPUpgradeMaxTP($dataEnemies);
    	this.loadnotetagsTPUpgradeTPCostGain($dataSkills);
    	this.loadnotetagsTPUpgradeTPCostGain($dataItems);
    	SRD.TP.notetagsLoaded = true;
    }
    return true;
};

DataManager.loadnotetagsTPUpgradeMaxTP = function(data) {
	for(var i = 1; i < data.length; i++) {
		var maxTp = data[i].note.match(/<\s*Max\s*TP\s*:\s*(.*)\s*>/im);
		var addTp = data[i].note.match(/<\s*Change\s*Max\s*TP\s*:\s*\+?\s*([^%]*)\s*>/im);
		var mulTp = data[i].note.match(/<\s*Change\s*Max\s*TP\s*:\s*\+?\s*(.*)\s*[%]\s*>/im);
		var infinite = data[i].note.match(/<\s*Infinite\s*TP\s*>/im);
		var init = data[i].note.match(/<\s*Initial\s*TP\s*:\s*(.*)\s*>/im);
		var addini = data[i].note.match(/<\s*Change\s*Initial\s*TP\s*:\s*\+?\s*([^%]*)\s*>/im);
		var mulini = data[i].note.match(/<\s*Change\s*Initial\s*TP\s*:\s*\+?\s*(.*)\s*[%]\s*>/im);
		if(maxTp) data[i].tpu_mtp = maxTp[1];
		if(addTp) data[i].tpu_mtp_change = addTp[1];
		if(mulTp) data[i].tpu_mtp_multiply = mulTp[1];
		if(infinite) data[i].tpu_infinitetp = true;
		if(init) data[i].tpu_init = init[1];
		if(addini) data[i].tpu_init_add = addini[1];
		if(mulini) data[i].tpu_init_mul = mulini[1];
	}
};

DataManager.loadnotetagsTPUpgradeTPCostGain = function(data) {
	for(var i = 1; i < data.length; i++) {
		var cost = data[i].note.match(/<\s*TP\s*Cost\s*:\s*([^%]*)\s*>/im);
		var costPer = data[i].note.match(/<\s*TP\s*Cost\s*:\s*(.*)\s*[%]\s*>/im);
		var gain = data[i].note.match(/<\s*TP\s*Gain\s*:\s*([^%]*)\s*>/im);
		var gainPer = data[i].note.match(/<\s*TP\s*Gain\s*:\s*(.*)\s*[%]\s*>/im);
		var damage = data[i].note.match(/<\s*TP\s*Damage\s*:\s*([^%]*)\s*>/im);
		var damagePer = data[i].note.match(/<\s*TP\s*Damage\s*:\s*(.*)\s*[%]\s*>/im);
		var heal = data[i].note.match(/<\s*TP\s*Heal\s*:\s*([^%]*)\s*>/im);
		var healPer = data[i].note.match(/<\s*TP\s*Heal\s*:\s*(.*)\s*[%]\s*>/im);
		if(cost) data[i].tpu_cost = cost[1];
		if(costPer) data[i].tpu_cost_percent = costPer[1];
		if(gain) data[i].tpu_gain = gain[1];
		if(gainPer) data[i].tpu_gain_percent = gainPer[1];
		if(damage) data[i].tpu_damage = damage[1];
		if(damagePer) data[i].tpu_damage_percent = damagePer[1];
		if(heal) data[i].tpu_heal = heal[1];
		if(healPer) data[i].tpu_heal_percent = healPer[1];
	}
};

//-----------------------------------------------------------------------------
// Game_BattlerBase
//-----------------------------------------------------------------------------

Object.defineProperties(Game_BattlerBase.prototype, {
    // Max TP
    mtp: { get: function() { return this.maxTp(); }, configurable: true },
});

SRD.TP.TPUpgrade._Game_BattlerBase_refresh = Game_BattlerBase.prototype.refresh;
Game_BattlerBase.prototype.refresh = function() {
	this._tp = Math.floor(this._tp);
    SRD.TP.TPUpgrade._Game_BattlerBase_refresh.call(this);
};

SRD.TP.TPUpgrade._Game_BattlerBase_isPreserveTp = Game_BattlerBase.prototype.isPreserveTp;
Game_BattlerBase.prototype.isPreserveTp = function() {
    return (SRD.TP.TPUpgrade._Game_BattlerBase_isPreserveTp.call(this) || SRD.TP.preserveTp);
};

Game_BattlerBase.prototype.infiniteTP = function() {
	return false;
};

Game_BattlerBase.prototype.initialTP = function() {
	return 0;
};

SRD.TP.TPUpgrade._Game_BattlerBase_skillTpCost = Game_BattlerBase.prototype.skillTpCost;
Game_BattlerBase.prototype.skillTpCost = function(skill) {
	var cost = SRD.TP.TPUpgrade._Game_BattlerBase_skillTpCost.call(this, skill);
	if(skill.tpu_cost) cost = Math.floor(eval(skill.tpu_cost));
	if(skill.tpu_cost_percent) cost = Math.floor(this.maxTp() * (eval(skill.tpu_cost_percent) / 100));
    return (this.infiniteTP()) ? 0 : cost;
};

SRD.TP.TPUpgrade._Game_BattlerBase_setTp = Game_BattlerBase.prototype.setTp;
Game_BattlerBase.prototype.setTp = function(tp) {
    if(!this.infiniteTP()) SRD.TP.TPUpgrade._Game_BattlerBase_setTp.call(this, tp);
    this.refresh();
};

//Overwritten Function
Game_BattlerBase.prototype.tpRate = function() {
    return this.tp / this.maxTp();
};

SRD.TP.TPUpgrade._Game_Battler_chargeTpByDamage = Game_Battler.prototype.chargeTpByDamage;
Game_Battler.prototype.chargeTpByDamage = function(damageRate) {
	if(!SRD.TP.restrictDamageGain) SRD.TP.TPUpgrade._Game_Battler_chargeTpByDamage.call(this, damageRate);
};

//-----------------------------------------------------------------------------
// Game_Enemy
//-----------------------------------------------------------------------------

Game_Enemy.prototype.infiniteTP = function() {
	return this.enemy().tpu_infinitetp;
};

Game_Enemy.prototype.initialTP = function() {
	return (this.enemy().tpu_init) ? Math.floor(eval(this.enemy().tpu_init)) : Math.floor(eval(SRD.TP.defaultInitialTPEnemy));
};

Game_Enemy.prototype.initTp = function() {
    this.setTp(this.initialTP());
};

//Overwritten Function
Game_Enemy.prototype.maxTp = function() {
	var enemy = this.enemy();
	var maxTp = Math.floor(eval(SRD.TP.defaultMaxTPEnemy));

	if(enemy.tpu_mtp) maxTp = Math.floor(eval(enemy.tpu_mtp));

    return maxTp.clamp(SRD.TP.minMTP, SRD.TP.maxMTP);
};

//-----------------------------------------------------------------------------
// Game_Actor
//-----------------------------------------------------------------------------

Game_Actor.prototype.initTp = function() {
    this.setTp(this.initialTP());
};

Game_Actor.prototype.infiniteTP = function() {
	var actor = this.actor();
	var curClass = this.currentClass();
	var equips = this.equips();
	var weapons = this.weapons();
	var states = this.states();

	if(actor.tpu_infinitetp) return true;
	if(curClass.tpu_infinitetp) return true;
	for(var i = 0; i < equips.length; i++) {
		if(equips[i] && equips[i].tpu_infinitetp) return true;
	}
	for(var i = 0; i < weapons.length; i++) {
		if(weapons[i] && weapons[i].tpu_infinitetp) return true;
	}
	for(var i = 0; i < states.length; i++) {
		if(states[i] && states[i].tpu_infinitetp) return true;
	}

	return false;
};

Game_Actor.prototype.initialTP = function() {
	var actor = this.actor();
	var curClass = this.currentClass();
	var equips = this.equips();
	var weapons = this.weapons();
	var states = this.states();
	var initTp = Math.floor(eval(SRD.TP.defaultInitialTPActor));

	//Set TP
	if(actor.tpu_init) initTp = Math.floor(eval(actor.tpu_init));
	if(curClass.tpu_init) initTp = Math.floor(eval(curClass.tpu_init));
	for(var i = 0; i < equips.length; i++) {
		if(equips[i] && equips[i].tpu_init) initTp = Math.floor(eval(equips[i].tpu_init));
	}
	for(var i = 0; i < weapons.length; i++) {
		if(weapons[i] && weapons[i].tpu_init) initTp = Math.floor(eval(weapons[i].tpu_init));
	}
	for(var i = 0; i < states.length; i++) {
		if(states[i] && states[i].tpu_init) initTp = Math.floor(eval(states[i].tpu_init));
	}

	//Add TP
	if(actor.tpu_init_add) initTp += Math.floor(eval(actor.tpu_init_add));
	if(curClass.tpu_init_add) initTp += Math.floor(eval(curClass.tpu_init_add));
	for(var i = 0; i < equips.length; i++) {
		if(equips[i] && equips[i].tpu_init_add) initTp += Math.floor(eval(equips[i].tpu_init_add));
	}
	for(var i = 0; i < weapons.length; i++) {
		if(weapons[i] && weapons[i].tpu_init_add) initTp += Math.floor(eval(weapons[i].tpu_init_add));
	}
	for(var i = 0; i < states.length; i++) {
		if(states[i] && states[i].tpu_init_add) initTp += Math.floor(eval(states[i].tpu_init_add));
	}

	//Add TP%
	if(actor.tpu_init_mul) initTp *= 1 + (eval(actor.tpu_init_mul) / 100);
	if(curClass.tpu_init_mul) initTp *= 1 + (eval(curClass.tpu_init_mul) / 100);
	for(var i = 0; i < equips.length; i++) {
		if(equips[i] && equips[i].tpu_init_mul) initTp *= 1 + (eval(equips[i].tpu_init_mul) / 100);
	}
	for(var i = 0; i < weapons.length; i++) {
		if(weapons[i] && weapons[i].tpu_init_mul) initTp *= 1 + (eval(weapons[i].tpu_init_mul) / 100);
	}
	for(var i = 0; i < states.length; i++) {
		if(states[i] && states[i].tpu_init_mul) initTp *= 1 + (eval(states[i].tpu_init_mul) / 100);
	}

	//Round Max TP
	initTp = Math.round(initTp);
    return (initTp < 0) ? 0 : initTp;
};

//Overwritten Function
Game_Actor.prototype.maxTp = function() {
	if(this.infiniteTP()) return 1;

	var actor = this.actor();
	var curClass = this.currentClass();
	var equips = this.equips();
	var weapons = this.weapons();
	var states = this.states();
	var maxTp = Math.floor(eval(SRD.TP.defaultMaxTPActor));

	//Set TP
	if(actor.tpu_mtp) maxTp = Math.floor(eval(actor.tpu_mtp));
	if(curClass.tpu_mtp) maxTp = Math.floor(eval(curClass.tpu_mtp));
	for(var i = 0; i < equips.length; i++) {
		if(equips[i] && equips[i].tpu_mtp) maxTp = Math.floor(eval(equips[i].tpu_mtp));
	}
	for(var i = 0; i < weapons.length; i++) {
		if(weapons[i] && weapons[i].tpu_mtp) maxTp = Math.floor(eval(weapons[i].tpu_mtp));
	}
	for(var i = 0; i < states.length; i++) {
		if(states[i] && states[i].tpu_mtp) maxTp = Math.floor(eval(states[i].tpu_mtp));
	}

	//Add TP
	if(actor.tpu_mtp_change) maxTp += Math.floor(eval(actor.tpu_mtp_change));
	if(curClass.tpu_mtp_change) maxTp += Math.floor(eval(curClass.tpu_mtp_change));
	for(var i = 0; i < equips.length; i++) {
		if(equips[i] && equips[i].tpu_mtp_change) maxTp += Math.floor(eval(equips[i].tpu_mtp_change));
	}
	for(var i = 0; i < weapons.length; i++) {
		if(weapons[i] && weapons[i].tpu_mtp_change) maxTp += Math.floor(eval(weapons[i].tpu_mtp_change));
	}
	for(var i = 0; i < states.length; i++) {
		if(states[i] && states[i].tpu_mtp_change) maxTp += Math.floor(eval(states[i].tpu_mtp_change));
	}

	//Add TP%
	if(actor.tpu_mtp_multiply) maxTp *= 1 + (eval(actor.tpu_mtp_multiply) / 100);
	if(curClass.tpu_mtp_multiply) maxTp *= 1 + (eval(curClass.tpu_mtp_multiply) / 100);
	for(var i = 0; i < equips.length; i++) {
		if(equips[i] && equips[i].tpu_mtp_multiply) maxTp *= 1 + (eval(equips[i].tpu_mtp_multiply) / 100);
	}
	for(var i = 0; i < weapons.length; i++) {
		if(weapons[i] && weapons[i].tpu_mtp_multiply) maxTp *= 1 + (eval(weapons[i].tpu_mtp_multiply) / 100);
	}
	for(var i = 0; i < states.length; i++) {
		if(states[i] && states[i].tpu_mtp_multiply) maxTp *= 1 + (eval(states[i].tpu_mtp_multiply) / 100);
	}

	//Round Max TP
	maxTp = (maxTp <= 0) ? 1 : Math.round(maxTp);
    return maxTp.clamp(SRD.TP.minMTP, SRD.TP.maxMTP);
};

//-----------------------------------------------------------------------------
// Game_Action
//-----------------------------------------------------------------------------

//Overwritten Function
Game_Action.prototype.applyItemUserEffect = function(target) {
	var item = this.item();
	var user = this.subject();
	var tpGain = item.tpGain;
	if(item.tpu_gain) tpGain = Math.floor(eval(item.tpu_gain));
	if(item.tpu_gain_percent) {
		tpGain = Math.floor(user.maxTp() * (eval(item.tpu_gain_percent) / 100));
	}
    var value = Math.floor(tpGain * this.subject().tcr);
    this.subject().gainSilentTp(value);
};

SRD.TP.TPUpgrade._Game_Action_apply = Game_Action.prototype.apply;
Game_Action.prototype.apply = function(target) {
    SRD.TP.TPUpgrade._Game_Action_apply.call(this, target);
    var result = target.result();
    if (result.isHit()) {
    	this.applyTPBonus(target, result.critical);
    	this.executeTPDamage(target, result.critical)
    }
};

Game_Action.prototype.executeTPDamage = function(target, critical) {
	var damage = 0;
	try {
        var item = this.item();
        var a = this.subject();
        var b = target;
        var v = $gameVariables._data;
        if(item.tpu_damage) {
        	damage += Math.max(eval(item.tpu_damage), 0);
        }
        if(item.tpu_damage_percent) {
        	damage += Math.max(b.maxTp() * (eval(item.tpu_damage_percent) / 100), 0);
        }
        if(item.tpu_heal) {
        	damage -= Math.max(eval(item.tpu_heal), 0);
        }
        if(item.tpu_heal_percent) {
        	damage -= Math.max(b.maxTp() * (eval(item.tpu_heal_percent) / 100), 0);
        }
    } catch (e) {
    }
    damage = damage * this.calcElementRate(target);
	if (critical) {
	    damage = this.applyCritical(damage);
	}
	//damage = this.applyVariance(damage, 0);
	damage = this.applyGuard(damage, target);
	damage = Math.round(damage);
	this.makeSuccess(target);
	target.gainTp(-damage);
};

Game_Action.prototype.applyTPBonus = function(target, critical) {
    var useValue = 0;
    var takeValue = 0;
    var user = this.subject();
	var superEffect = this.calcElementRate(target);

    if(critical) {
        useValue += eval(SRD.TP.TPBonusCritUse);
        takeValue += eval(SRD.TP.TPBonusCritTake);
    }
    if(superEffect > 1) {
        useValue += eval(SRD.TP.TPBonusSuperUse);
        takeValue += eval(SRD.TP.TPBonusSuperTake);
    }

    user.gainSilentTp(useValue);
    target.gainSilentTp(takeValue);
};

//-----------------------------------------------------------------------------
// Game_Interpreter
//-----------------------------------------------------------------------------

SRD.TP.TPUpgrade._Game_Interpreter_pluginCommand = Game_Interpreter.prototype.pluginCommand;
Game_Interpreter.prototype.pluginCommand = function(command, args) {
    SRD.TP.TPUpgrade._Game_Interpreter_pluginCommand.call(this, command, args);

    if(command.match(/SetActorTP/i)) {
    	var value = 0;
    	var type = false;
    	if(args[1].match(/(.+)[%]/i)) {
    		value = Number(args[1].match(/(.+)[%]/i)[1]) / 100;
    		type = true;
    	} else {
    		value = Number(args[1]);
    		type = false;
    	}
    	if(args[0].match(/party/i)) {
    		var p = $gameParty.members();
    		for(var i = 0; i < p.length; i++) {
    			p[i].setTp((type) ? value * p[i].maxTp() : value);
    		}
    	} else if(args[0].match(/pos\d+/i)) {
    		var pos = Number(args[0].match(/pos(\d+)/i)[1]) - 1;
    		if(pos < $gameParty.members().length) {
    			var q =  $gameParty.members()[pos];
    			q.setTp((type) ? value * q.maxTp() : value);
    		}
    	} else {
    		if(Number(args[0]) < $dataActors.length) {
    			var a = $gameActors.actor(Number(args[0]));
    			a.setTp((type) ? value * a.maxTp() : value);
    		}
    	}
    } else if(command.match(/AddActorTP/i)) {
    	var value = 0;
    	var type = false;
    	if(args[1].match(/(.+)[%]/i)) {
    		value = Number(args[1].match(/(.+)[%]/i)[1]) / 100;
    		type = true;
    	} else {
    		value = Number(args[1]);
    		type = false;
    	}
    	if(args[0].match(/party/i)) {
    		var p = $gameParty.members();
    		for(var i = 0; i < p.length; i++) {
    			p[i].gainSilentTp((type) ? value * p[i].maxTp() : value);
    		}
    	} else if(args[0].match(/pos\d+/i)) {
    		var pos = Number(args[0].match(/pos(\d+)/i)[1]) - 1;
    		if(pos < $gameParty.members().length) {
    			var q =  $gameParty.members()[pos];
    			q.gainSilentTp((type) ? value * q.maxTp() : value);
    		}
    	} else {
    		if(Number(args[0]) < $dataActors.length) {
    			var a = $gameActors.actor(Number(args[0]));
    			a.gainSilentTp((type) ? value * a.maxTp() : value);
    		}
    	}
    }
};

//-----------------------------------------------------------------------------
// Sprite_Damage
//-----------------------------------------------------------------------------

//Overwritten Function
Sprite_Damage.prototype.setup = function(target) {
    var result = target.result();
    if (result.missed || result.evaded) {
        this.createMiss();
    } else if (result.hpAffected) {
        this.createDigits(0, result.hpDamage);
    } else if (target.isAlive() && result.mpDamage !== 0) {
        this.createDigits(2, result.mpDamage);
    } else if(target.isAlive() && result.tpDamage !== 0) {
    	this.createDigits(1, result.tpDamage);
    }
    if (result.critical) {
        this.setupCriticalEffect();
    }
};

//-----------------------------------------------------------------------------
// Window_Base
//-----------------------------------------------------------------------------

//Overwritten Function
Window_Base.prototype.drawActorTp = function(actor, x, y, width) {
	var actorRateDraw = (actor.infiniteTP()) ? 1 : actor.tpRate();

    width = width || 186;
    var color1 = this.tpGaugeColor1();
    var color2 = this.tpGaugeColor2();
    this.drawGauge(x, y, width, actorRateDraw, color1, color2);
    this.changeTextColor(this.systemColor());
    this.drawText(TextManager.tpA, x, y, 44);
    this.drawCurrentAndMax(actor.tp, actor.mtp, x, y, width, this.tpColor(actor), this.normalColor());
};

//-----------------------------------------------------------------------------
// Window_Status
//-----------------------------------------------------------------------------

//Overwritten Function
Window_Status.prototype.drawBasicInfo = function(x, y) {
    var lineHeight = this.lineHeight();
    this.drawActorLevel(this._actor, x, y + lineHeight * 0);
    if(SRD.TP.TPinStatus) {
    	this.drawActorHp(this._actor, x, y + lineHeight * 1);
    	this.drawActorMp(this._actor, x, y + lineHeight * 2);
    	this.drawActorTp(this._actor, x, y + lineHeight * 3);
    } else {
    	this.drawActorIcons(this._actor, x, y + lineHeight * 1);
    	this.drawActorHp(this._actor, x, y + lineHeight * 2);
    	this.drawActorMp(this._actor, x, y + lineHeight * 3);
    }
};