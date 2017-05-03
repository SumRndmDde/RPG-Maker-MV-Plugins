/*:
 * @plugindesc Allows you to have unique Guard Skills for your Weapons. Based off of "WeaponSkill" by Sasuke KANNAZUKI.
 *
 * @author SumRndmDde (Used code from Sasuke KANNAZUKI)
 *
 * @help
 *
 * Weapon Guard Skill
 * Version 1.00
 * SumRndmDde
 *
 *
 * Important Notes:
 * This plugin does not have any plugin commands.
 *
 *
 * Notetags:
 * 
 * Weapons Note Box
 * <guard_skill_id:x>
 * Set x to the Skill ID you wish to use as the Guard Skill when using 
 * this weapon.
 *
 *
 * How to Use:
 *
 * This Plugin allows you to have custom Guard Skills for your Actors based
 * on the Weapon they have equipped.
 *
 * For example, an Actor using a Giant Sword as a weapon can be given a 
 * Guard Skill that lowers his or her AGI but buffs his or her DEF by
 * also inflicting a State on them.
 *
 * Alternatively, a weapon can have a Guard Skill that is completely useless;
 * this makes it so the Weapon has no effective form of Guarding.
 *
 * Thanks for reading!
 * If you have questions, please do not hesitate to ask on my YouTube channel:
 * https://www.youtube.com/SumRndmDde
 *
 * Until next time,
 *   ~ SumRndmDde
 */

(function() {

	Game_Actor.prototype.guardSkillId = function() {
	    var normalId = Game_BattlerBase.prototype.guardSkillId.call(this);
	    if(this.hasNoWeapons()){
	    	return normalId;
	    }
	    var weapon = this.weapons()[0];
	    var id = weapon.meta.guard_skill_id;
	    return id ? Number(id) : normalId;
    };

    var _Scene_Battle_commandGuard = Scene_Battle.prototype.commandGuard;
	Scene_Battle.prototype.commandGuard = function() {
		BattleManager.inputtingAction().setGuard();
    	var action = BattleManager.inputtingAction();
    	if(!action.needsSelection()){
	      	_Scene_Battle_commandGuard.call(this);
	      	return;
    	}
    	this.selectEnemySelection();
	};

})();