/*: 
 * @plugindesc Allows Timed Attacks to be called upon within Yanfly's Action Sequences.
 * @author SumRndmDde
 *
 * @help
 *
 * Timed Attack: Action Sequences
 * Version 1.01
 * by SumRndmDde
 *
 *
 * This Plugin requires two Plugins:
 *
 * Timed Attack Core
 *    (http://sumrndm.site/timed-attack-core)
 *
 * Yanfly's Battle Engine Core
 *    (http://yanfly.moe/2015/10/10/yep-3-battle-engine-core/)
 *
 *
 * By default, Timed Attacks play at the beginning of every Skill and don't
 * directly interact with the Skill itself besides when the developer uses
 * the $gameTemp.tas_power variable.
 *
 * However, using this Plugin, Timed Attacks can now be called upon from
 * within Yanfly's Action Sequences!
 *
 *
 * ==========================================================================
 *  How to Set Up
 * ==========================================================================
 *
 * To start off, make sure you have all of the Timed Attacks and Action
 * Sequence Plugins that you wish to use installed. 
 * Place "SRD_TimedAttack_ActionSequences" underneath all of them.
 *
 *
 * Next, within a Skill you wish to use the "Timed Attack Action Sequences"
 * in, input the following notetag in the notebox:
 * 
 *     <Use Timed Attack Action Sequences>
 *
 * If this notetag is not used, the Timed Attack will function the same way
 * it does by default.
 *
 *
 *
 * ==========================================================================
 *  How to Call Timed Attacks within Action Sequences
 * ==========================================================================
 *
 * To call a Timed Attack, use the following action:
 *
 *   Timed Attack
 *
 * This will call the Timed Attack set up within the Skill.
 *
 * An example of this would be:
 *
 * <target action>
 * hide battle hud
 * move user: target, front, 30
 * wait for movement
 * timed attack
 * motion swing: user
 * perform action
 * motion wait: user
 * action animation: target
 * wait for animation
 * action effect: target
 * death break
 * perform finish
 * show battle hud
 * </Target Action>
 *
 * As you see, on line 4, "timed attack" is called.
 * Input this into a Skill to try it out!
 * (Be sure to have a Timed Attack set up in the Skill also).
 *
 *
 * ==========================================================================
 *  How to Call Different Timed Attacks within a Single Skill
 * ==========================================================================
 *
 * You can use the Timed Attack from another Skill using:
 *
 *   Timed Attack: x
 *
 * Set "x" to the Skill ID of the Timed Attack you wish to use.
 *
 * For example, "Timed Attack: 4" will call the Timed Attack from Skill ID 4.
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

var Imported = Imported || {};
Imported["SumRndmDde Timed Attack Action Sequences"] = true;

if(Imported["SumRndmDde Timed Attack Core"] && Imported.YEP_BattleEngineCore) {

SRD.TimedAttackActionSequences = SRD.TimedAttackActionSequences || {};

(function(_, $) {

	"use strict";

    var _$_loadNotetagsSkills = $.loadNotetagsSkills;
    $.loadNotetagsSkills = function(data) {
        var regex = /<\s*Use\s*Timed\s*Attack\s*Action\s*Sequences>/im;
        for(var i = 1; i < data.length; i++) {
            if(data[i].note.match(regex)) {
                data[i].meta.isUsingTimedAttackActionSequences = true;
            }
        }
        _$_loadNotetagsSkills.call(this, data);
    };

    //-----------------------------------------------------------------------------
    // BattleManager
    //-----------------------------------------------------------------------------

    var _BattleManager_startAction = BattleManager.startAction;
    BattleManager.startAction = function() {
	    _BattleManager_startAction.call(this);
        this[_.pass + "Use Action Sequence"] = false;
        this[_.pass + "Action Sequence Params"] = 0;
        this[_.pass + "Allow TAS"] = [true, true];
        this[_.pass + "Boolean 1"] = false;
	};

    var _BattleManager_updateActionTargetList = BattleManager.updateActionTargetList;
    BattleManager.updateActionTargetList = function() {
        if(this._action.item().meta.isUsingTimedAttackActionSequences && this[_.pass + "Use Action Sequence"] && this._actionList[0] && this._actionList[0][0] && this._subject.isActor()) {
            this.processTimedAttackActionSequence(this._actionList[0][0], this[_.pass + "Action Sequence Params"]);
        } else {
            _BattleManager_updateActionTargetList.call(this);
        }
    };

    var _BattleManager_processActionSequenceCheck = BattleManager.processActionSequenceCheck;
    BattleManager.processActionSequenceCheck = function(actionName, actionArgs) {
        if(actionName === "TIMED ATTACK" && this._action.item().meta.isUsingTimedAttackActionSequences) {
            this[_.pass + "Use Action Sequence"] = true;
            this[_.pass + "Action Sequence Params"] = (actionArgs.length > 0) ? actionArgs : 0;
            return false;
        }
        return _BattleManager_processActionSequenceCheck.call(this, actionName, actionArgs);
    };

	BattleManager.processTimedAttackActionSequence = function(actionName, actionArgs) {
        var tempItem = (actionArgs > 0) ? $dataSkills[actionArgs] : this._action.item();
		if(this._subject.isActor() && (tempItem.meta["SRD TAS"] || _.notDefault()) && this[_.pass + "Allow TAS"][0]) {
			if(this[_.pass + "Allow TAS"][1]) {
				if(tempItem.meta["SRD TAS"].type === "actor" || (_.default === 'actor' && !tempItem.meta["SRD TAS"])) {
					if(this._subject.actor().meta["SRD TAS"]) {
						this._tasAttackFrameWindow.setItem(this._subject.actor().meta["SRD TAS"]);
						this._tasAttackFrameWindow.open();
						this._tasAttackFrameWindow.start();
						this[_.pass + "Allow TAS"][1] = false;
					} else {
						this.endTASAttackThing();
					}
				} else if(tempItem.meta["SRD TAS"].type === "class" || (_.default === 'class' && !tempItem.meta["SRD TAS"])) {
					if(this._subject.currentClass() && this._subject.currentClass().meta["SRD TAS"]) {
						this._tasAttackFrameWindow.setItem(this._subject.currentClass().meta["SRD TAS"]);
						this._tasAttackFrameWindow.open();
						this._tasAttackFrameWindow.start();
						this[_.pass + "Allow TAS"][1] = false;
					} else {
						this.endTASAttackThing();
					}
				} else if(tempItem.meta["SRD TAS"].type === "weapon" || (_.default === 'weapon' && !tempItem.meta["SRD TAS"])) {
					if(this._subject.weapons()[0] && this._subject.weapons()[0].meta["SRD TAS"]) {
						this._tasAttackFrameWindow.setItem(this._subject.weapons()[0].meta["SRD TAS"]);
						this._tasAttackFrameWindow.open();
						this._tasAttackFrameWindow.start();
						this[_.pass + "Allow TAS"][1] = false;
					} else {
						this.endTASAttackThing();
					}
				} else if(tempItem.meta["SRD TAS"]) {
					this._tasAttackFrameWindow.setItem(tempItem.meta["SRD TAS"]);
					this._tasAttackFrameWindow.open();
					this._tasAttackFrameWindow.start();
					this[_.pass + "Allow TAS"][1] = false;
				}
			}
		} else {
			if(this._subject.isActor() && !this[_.pass + "Boolean 1"]) {
				$gameTemp.setTemporarilyDisableLogWindow(false);
				this._logWindow.startAction(this[_.pass + "Temp Subject"], this[_.pass + "Temp Action"]
					, this[_.pass + "Temp Targets"]);
				$gameTemp.setTemporarilyDisableLogWindow(true);
				this[_.pass + "Boolean 1"] = true;
			}
		    return true;
		}
	};

    var _BattleManager_endTASAttackThing = BattleManager.endTASAttackThing;
	BattleManager.endTASAttackThing = function() {
		_BattleManager_endTASAttackThing.call(this);
        this[_.pass + "Use Action Sequence"] = false;
        this[_.pass + "Allow TAS"] = [true, true];
        this[_.pass + "Boolean 1"] = false;
	};

})(SRD.TimedAttackActionSequences, SRD.TimedAttack);

} else alert("Please install 'SRD_TimedAttackCore' and 'YEP_BattleEngineCore' in order to use 'SRD_TimedAttack_ActionSequences'.");