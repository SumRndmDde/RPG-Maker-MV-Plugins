/*:
 * @plugindesc Adds a system that allows the Actors to dodge or counter Enemy attacks through the use of active inputs.
 * @author SumRndmDde
 *
 * @param Reposition Animation
 * @desc Set this to true to have the animations repositioned on Actors.
 * @default true
 *
 * @param Scale Shadows?
 * @desc If 'true', then the Actors' shadows will scale themselves to the Actors' height.
 * @default true
 *
 * @param Hit Condition
 * @desc The condition that must be true for the Skill to hit.
 * @default $ActiveDefense.power <= 0
 *
 * @param Reset Value Code
 * @desc This is the code that will run when the Player doesn't jump over the animation.
 * @default $ActiveDefense.power = 0
 *
 * @param Set Value Code
 * @desc Variable 'height'  = Player's height.
 * Variable 'required' = required height.
 * @default $ActiveDefense.power = 1
 *
 * @param == Defaults ==
 * @default
 *
 * @param Jump Speed
 * @desc The initial upward velocity on a battler when they jump.
 * Input a number or a JavaScript eval using 'actor'.
 * @default 9
 *
 * @param Height Required
 * @desc How high the battler has to be to dodge the Skill.
 * Input a positive number or JavaScript eval.
 * @default 30
 *
 * @param Gravity
 * @desc The gravity that effects the battler's y-speed.
 * Input a small number or JavaScript eval.
 * @default 0.5
 *
 * @param Float
 * @desc The amount of frames the Actor will float.
 * Input a number or JavaScript eval.
 * @default 0
 *
 * @param Jump Motion
 * @desc The motion of the side-view Actor when jumping.
 * Input a motion.
 * @default victory
 *
 * @param Sound Effect
 * @desc The sound effect played when the battler jumps.
 * Input a sound effect filename.
 * @default Jump1
 *
 * @param Jump Trigger
 * @desc The condition that must be true for a jump to occur.
 * Input a JavaScript eval.
 * @default Input.isTriggered('ok') || TouchInput.isTriggered()
 *
 * @param Jump Condition
 * @desc A seperate jump condition per each Actor.
 * Input a JavaScript eval that uses 'actor'.
 * @default !actor.isDead()
 *
 * @help
 *
 * Active Defense Core
 * Version 1.20
 * SumRndmDde
 *
 *
 * This plugin adds a new system in side-view battles which allows Players to
 * have the Actor battler's dodge Enemy attacks.
 *
 * This system is known as The Active Defense System.
 *
 * It only works in side-view battles.
 *
 * In this plugin, the Active Defense that you can use is the "jump".
 * This Active Defense allows the Actor battlers to jump over the enemy 
 * animations at the press of a button.
 *
 *
 * ==========================================================================
 *  Setting up the Notetags
 * ==========================================================================
 *
 * If you wish for a Skill to use the Active Defense System, place these
 * notetags within the Skill's notebox:
 *
 *   <Active Defense: jump>
 *   <End Active Defense>
 *
 * In this example, the Active Defense being used is the "jump".
 *
 *
 * ==========================================================================
 *  Setting up Properties
 * ==========================================================================
 *
 * Within the two notetags, you can define speicifc properties per each
 * Skill.
 *
 * For example:
 *
 *   <Active Defense: jump>
 *   Jump Speed: 11
 *   <End Active Defense>
 *
 * If this was within a Skill, it would make it so when the Enemy uses that
 * Skill the Actor battler's jump speed is 11.
 *
 * You can a list of all the properties listed under "Defaults" within
 * the Parameters.
 *
 *
 * ==========================================================================
 *  Setting up Animations
 * ==========================================================================
 *
 * The times where the Player needs to dodge are based on the animations.
 * By default, the Actor needs to sufficiently be in a position to dodge the 
 * attack in the exact middle of the animation; however, you can also define
 * "dodge frame" using the notetag in the Animation name:
 *
 *   <ads: x>
 *
 * For example, if you wanted it to be the 3rd frame, you would do:
 *
 *   <ads: 3>
 *
 * You can also set it to be multiple frames:
 *
 *   <ads: 1, 2, 3, etc...>
 *
 * If the Player fails to dodge during every frame, then the Actor will
 * receive damage.
 *
 *
 * ==========================================================================
 *  Animation vs. Action
 * ==========================================================================
 *
 * When using Yanfly's Action Sequences, keep in mind that you need to use an
 * animation on the Actor battler to set up the dodge. Once an animation
 * is played, the Action's effect can be used.
 *
 * Also keep in mind that the Actor will continue to use the same results
 * from the dodge until a new animation is played.
 *
 * Also keep in mind if multiple animations are played, the last one will be
 * the one that influences the results.
 *
 *
 * ==========================================================================
 *  Global Variables
 * ==========================================================================
 *
 * Here's a list of all the global variables available to be used:
 *
 *   $ActiveDefense.power
 *
 * Returns 1 for a dodge and 0 for a hit.
 *
 *   $ActiveDefense.type
 *
 * Returns the current Active Defense type.
 * For example, it may return 'jump'.
 *
 *   $ActiveDefense.item
 *
 * Returns the current Active Defense Database Item object.
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
SRD.ActiveDefenseCore = SRD.ActiveDefenseCore || {};

var Imported = Imported || {};
Imported["SumRndmDde Active Defense Core"] = 1.10;

var $ActiveDefense = null;

function Game_ActiveDefense() {
	this.initialize.apply(this, arguments);
}

(function(_) {

	"use strict";

	_.ADS_ID = 'jump';

	var params = PluginManager.parameters('SRD_ActiveDefenseCore');

	//_.condition = String(params['Jump Condition']);
	_.reposition = String(params['Reposition Animation']).trim().toLowerCase();
	_.scale = String(params['Scale Shadows?']).trim().toLowerCase();
	_.hit = String(params['Hit Condition']);
	_.failure = String(params['Reset Value Code']);
	_.success = String(params['Set Value Code']);

	_.height = String(params['Jump Speed']);
	_.require = String(params['Height Required']);
	_.gravity = String(params['Gravity']);
	_.float = String(params['Float']);
	_.motion = String(params['Jump Motion']);
	_.se = String(params['Sound Effect']);
	_.trigger = String(params['Jump Trigger']);
	_.condition = String(params['Jump Condition']);

	_.n = "SumRndmDde ADS";

	_.loadAnimations = function(data) {
		var regex = /<\s*ads\s*:(.+)>/im;
		for(var i = 1; i < data.length; i++) {
			if(data[i].name.match(regex)) {
				data[i][_.n+"Index"] = [];
				data[i][_.n+"Typez"] = [];
				var thingies = String(RegExp.$1).split(/\s*,\s*/);
				for(var j = 0; j < thingies.length; j++) {
					var thingies2 = thingies[j].match(/(\d+)(.)?/i);
					data[i][_.n+"Index"][j] = parseInt(thingies2[1][j]) - 1;
					if(thingies2[2]) data[i][_.n+"Typez"][j] = String(thingies2[2]);
					else data[i][_.n+"Typez"][j] = "";
				}
			} else {
				data[i][_.n+"Index"] = [Math.floor(data[i].frames.length / 2)];
				data[i][_.n+"Typez"] = [""];
			}
		}
	};

	_.loadSkills = function(data) {
		var regex = /<\s*Active\s*Defense\s*:\s*(.*)\s*>([\d\D\n\r]*)<\s*End\s*Active\s*Defense\s*>/im;
		for(var i = 1; i < data.length; i++) {
			if(data[i].note.match(regex)) {
				var type = String(RegExp.$1).trim().toLowerCase();
				var info = String(RegExp.$2);
				data[i].meta["SRD ADS"] = {type: type, info: info};
				_.organizeInfo(data[i].meta["SRD ADS"]);
			}
		}
	};

	_.organizeInfo = function(o) {
		if(o.type === _.ADS_ID) {
			if(o.info.match(/Jump[ ]?Speed:\s*(.*)/im)) o.height = String(RegExp.$1);
			else o.height = _.height;
			if(o.info.match(/Height[ ]?Required:\s*(.*)/im)) o.require = String(RegExp.$1);
			else o.require = _.require;
			if(o.info.match(/Gravity:\s*(.*)/im)) o.gravity = String(RegExp.$1);
			else o.gravity = _.gravity;
			if(o.info.match(/Jump[ ]?Motion:\s*(.*)/im)) o.motion = String(RegExp.$1);
			else o.motion = _.motion;
			if(o.info.match(/Sound[ ]?Effect:\s*(.*)/im)) o.se = String(RegExp.$1);
			else o.se = _.se;
			if(o.info.match(/Float:\s*(.*)/im)) o.float = String(RegExp.$1);
			else o.float = _.float;
			if(o.info.match(/Jump[ ]?Trigger:\s*(.*)/im)) o.trigger = String(RegExp.$1);
			else o.trigger = _.trigger;
			if(o.info.match(/Jump[ ]?Condition:\s*(.*)/im)) o.condition = String(RegExp.$1);
			else o.condition = _.condition;
		}
	};

	_.isTriggered = function() {
		if($ActiveDefense.vars.trigger) {
			return eval($ActiveDefense.vars.trigger);
		}
		return eval(_.trigger);
	};

	_.loadActiveDefenseCore = function() {
		$ActiveDefense = new Game_ActiveDefense();
		_.loadSkills($dataSkills);
		_.loadAnimations($dataAnimations);
	};

	var notetagsLoaded = false;
	var _DataManager_isDatabaseLoaded = DataManager.isDatabaseLoaded;
	DataManager.isDatabaseLoaded = function() {
		if(!_DataManager_isDatabaseLoaded.call(this)) return false;
		if(!notetagsLoaded) {
			_.loadActiveDefenseCore();
			notetagsLoaded = true;
		}
		return true;
	};

	//-----------------------------------------------------------------------------
	// Game_ActiveDefense
	//-----------------------------------------------------------------------------

	Game_ActiveDefense.prototype.initialize = function() {
		this._adsVars = {};
		this.clear();
	};

	Game_ActiveDefense.prototype.clear = function() {
		this._power = 0;
		this._type = '';
		this._item = null;
	};

	Object.defineProperty(Game_ActiveDefense.prototype, 'vars', {
		get: function() {
			return this._adsVars;
		},
		set: function(value) {
			this._adsVars = value;
		},
		configurable: true
	});

	Object.defineProperty(Game_ActiveDefense.prototype, 'power', {
		get: function() {
			return this._power;
		},
		set: function(value) {
			this._power = Number(value).clamp(0, 999);
		},
		configurable: true
	});

	Object.defineProperty(Game_ActiveDefense.prototype, 'type', {
		get: function() {
			return this._type;
		},
		set: function(value) {
			this._type = String(value).trim().toLowerCase();
		},
		configurable: true
	});

	Object.defineProperty(Game_ActiveDefense.prototype, 'item', {
		get: function() {
			return this._item;
		},
		set: function(value) {
			this._item = value;
		},
		configurable: true
	});

	Game_ActiveDefense.prototype.adsInitialize = function(enemy, action, item, actor) {
		if(this.type === _.ADS_ID) {
			this.vars.height = eval(this.item.height);
			this.vars.require = eval(this.item.require);
			this.vars.gravity = eval(this.item.gravity);
			this.vars.float = eval(this.item.float);
			this.vars.motion = this.item.motion;
			this.vars.se = this.item.se;
			this.vars.trigger = this.item.trigger;
			this.vars.condition = this.item.condition;
		}
	};

	//-----------------------------------------------------------------------------
	// Window_BattleLog
	//-----------------------------------------------------------------------------

	var _Window_BattleLog_startAction = Window_BattleLog.prototype.startAction;
	Window_BattleLog.prototype.startAction = function(subject, action, targets) {
		_Window_BattleLog_startAction.call(this, subject, action, targets);
		$ActiveDefense.clear();
		if(action.item().meta["SRD ADS"] && subject.isEnemy()) {
			$ActiveDefense.type = action.item().meta["SRD ADS"].type;
			$ActiveDefense.item = action.item().meta["SRD ADS"];
			$ActiveDefense.adsInitialize(subject, action, action.item(), targets[0]);
			this[_.n+"Start"] = true;
			this[_.n+"Targets"] = [];
			var actorSprites = BattleManager._spriteset._actorSprites;
			for(var i = 0; i < targets.length; i++) {
				if(targets[i].isActor()) {
					for(var j = 0; j < actorSprites.length; j++) {
						if(targets[i] === actorSprites[j]._actor) {
							this[_.n+"Targets"].push(actorSprites[j]);
						}
					}
				}
			}
			for(var i = 0; i < this[_.n+"Targets"].length; i++) {
				this[_.n+"Targets"][i].initializeADS();
			}
		}
	};

	var _Window_BattleLog_endAction = Window_BattleLog.prototype.endAction;
	Window_BattleLog.prototype.endAction = function(subject) {
		if(this[_.n+"Targets"] && subject.isEnemy()) {
			for(var i = 0; i < this[_.n+"Targets"].length; i++) {
				this[_.n+"Targets"][i].endTheADS();
			}
			this[_.n+"Targets"] = null;
			this[_.n+"Start"] = false;
		}
		_Window_BattleLog_endAction.call(this, subject);
	};

	var _Window_BattleLog_update = Window_BattleLog.prototype.update;
	Window_BattleLog.prototype.update = function() {
		_Window_BattleLog_update.call(this);
		if(this[_.n+"Start"]) {
			this.updateAds();
		}
	};

	Window_BattleLog.prototype.updateAds = function() {
		if($ActiveDefense.type === _.ADS_ID) this.updateJumpDefense();
	};

	Window_BattleLog.prototype.updateJumpDefense = function() {
		for(var i = 0; i < this[_.n+"Targets"].length; i++) {
			var spr = this[_.n+"Targets"][i];
			if(_.isTriggered() && spr[_.n+"Vars"].jumpSpeed === 0 && spr[_.n+"Vars"].jumpOffset === 0) {
				AudioManager.playSe({"name":$ActiveDefense.vars.se,"pan":0,"pitch":100,"volume":100});
				spr[_.n+"Vars"].jumpSpeed = (-1 * $ActiveDefense.vars.height);
			}
		}
	};

	Window_BattleLog.prototype.getDefenseResults = function(target, symbol) {
		if($ActiveDefense.type === _.ADS_ID) {
			this.resetActiveDefenseValues();
			if(this[_.n+"Targets"]) {
				for(var i = 0; i < this[_.n+"Targets"].length; i++) {
					if(symbol == "!") {
						if(!(this[_.n+"Targets"][i][_.n+"Vars"].jumpOffset < (-1 * $ActiveDefense.vars.require))) {
							this.setActiveDefenseValues(this[_.n+"Targets"][i][_.n+"Vars"].jumpOffset * (-1));
						}
					} else {
						if(this[_.n+"Targets"][i][_.n+"Vars"].jumpOffset < (-1 * $ActiveDefense.vars.require)) {
							this.setActiveDefenseValues(this[_.n+"Targets"][i][_.n+"Vars"].jumpOffset * (-1));
						}
					}
				}
			}
		}
	};

	Window_BattleLog.prototype.resetActiveDefenseValues = function() {
		if($ActiveDefense.type === _.ADS_ID) {
			//$ActiveDefense.power = 0;
			eval(_.failure);
		}
	};

	Window_BattleLog.prototype.setActiveDefenseValues = function(height) {
		if($ActiveDefense.type === _.ADS_ID) {
			//$ActiveDefense.power = 1;
			var required = $ActiveDefense.vars.require;
			eval(_.success);
		}
	};

	//-----------------------------------------------------------------------------
	// Game_ActionResult
	//-----------------------------------------------------------------------------

	var _Game_ActionResult_isHit = Game_ActionResult.prototype.isHit;
	Game_ActionResult.prototype.isHit = function() {
		return _Game_ActionResult_isHit.call(this) && this.isActiveDefenseSuccessful();
	};

	Game_ActionResult.prototype.isActiveDefenseSuccessful = function() {
		if($ActiveDefense.type === _.ADS_ID) {
			return eval(_.hit);
		}
		return true;
	};

	//-----------------------------------------------------------------------------
	// Sprite_Animation
	//-----------------------------------------------------------------------------

	var _Sprite_Animation_updateFrame = Sprite_Animation.prototype.updateFrame;
	Sprite_Animation.prototype.updateFrame = function() {
		this.updateActiveDefense();
		_Sprite_Animation_updateFrame.call(this);
	};

	Sprite_Animation.prototype.updateActiveDefense = function() {
		if(this._target._battler && this._target._battler.isActor()) {
			var index = this._animation[_.n+"Index"].indexOf(this.currentFrameIndex());
			if(index > -1) BattleManager._logWindow.getDefenseResults(this._target, this._animation[_.n+"Typez"][index]);
		}
	};

	//-----------------------------------------------------------------------------
	// Sprite_Actor
	//-----------------------------------------------------------------------------

	Sprite_Actor.prototype.startAnimation = function(animation, mirror, delay) {
		var sprite = new Sprite_Animation();
		sprite.setup(this, animation, mirror, delay);
		if(_.reposition) sprite.y -= (this._mainSprite.height / 2);
		this.parent.addChild(sprite);
		this._animationSprites.push(sprite);
	};

	var _Sprite_Actor_initMembers = Sprite_Actor.prototype.initMembers;
	Sprite_Actor.prototype.initMembers = function() {
		_Sprite_Actor_initMembers.call(this);
		this.createActiveDefenseVariables();
	};

	Sprite_Actor.prototype.createActiveDefenseVariables = function() {
		this[_.n+"Vars"] = {};
	};

	Sprite_Actor.prototype.initializeADS = function() {
		if($ActiveDefense.type === _.ADS_ID) {
			var vars = this[_.n+"Vars"];
			vars.jumpOffset = 0;
			vars.jumpSpeed = 0;
			vars.jumpAccel = 0;
			vars.jumpReset = 0;
			vars.floatMeter = 0;
			vars.jumpStart = true;
			vars.jumpEnded = false;

			//NEW CODE
			/*
			var bitmap = ImageManager.loadSystem('IconSet');
			var pw = Window_Base._iconWidth;
			var ph = Window_Base._iconHeight;
			var sx = 22 % 16 * pw;
			var sy = Math.floor(22 / 16) * ph;
			vars.chargeSprite = new Sprite(new Bitmap(Window_Base._iconWidth, Window_Base._iconHeight));
			vars.chargeSprite.bitmap.blt(bitmap, sx, sy, pw, ph, 0, 0);
			this._mainSprite.addChild(vars.chargeSprite);
			vars.chargeSprite.x -= this.width / 4;
			vars.chargeSprite.y -= this.height * 1.5;*/
		}
	};

	Sprite_Actor.prototype.endTheADS = function() {
		if($ActiveDefense.type === _.ADS_ID) {
			var vars = this[_.n+"Vars"];
			vars.jumpEnded = true;

			//NEW CODE
			//this._mainSprite.removeChild(vars.chargeSprite);
		}
	};

	Sprite_Actor.prototype.getActiveDefenseMotion = function() {
		if($ActiveDefense.type === _.ADS_ID) {
			return $ActiveDefense.vars.motion;
		}
	};

	var _Sprite_Actor_updatePosition = Sprite_Actor.prototype.updatePosition;
	Sprite_Actor.prototype.updatePosition = function() {
		_Sprite_Actor_updatePosition.call(this);
		if(this.getAdsCondition()) {
			this.updateAds();
		}
	};

	Sprite_Actor.prototype.getAdsCondition = function() {
		if($ActiveDefense.type === _.ADS_ID) {
			var actor = this._actor;
			return BattleManager._logWindow && eval($ActiveDefense.vars.condition);
		}
		return true;
	};

	Sprite_Actor.prototype.updateAds = function() {
		if(this[_.n+"Vars"].jumpStart && ($ActiveDefense.type === _.ADS_ID || this[_.n+"Vars"].jumpOffset !== 0 || this[_.n+"Vars"].jumpReset < 2)) {
			this.updateJumpDefense();
		}
	};

	Sprite_Actor.prototype.updateJumpDefense = function() {
		var vars = this[_.n+"Vars"];

		if(vars.jumpSpeed > 0 && vars.floatMeter < $ActiveDefense.vars.float) {
			vars.floatMeter++;
		} else {
			vars.jumpOffset += vars.jumpSpeed;
			vars.jumpSpeed += vars.jumpAccel;
		}
		if(vars.jumpOffset < 0) {
			vars.jumpAccel = $ActiveDefense.vars.gravity;
			vars.jumpReset = 0;
			if(this._motion !==  Sprite_Actor.MOTIONS[this.getActiveDefenseMotion()]) {
				this.startMotion(this.getActiveDefenseMotion());
			}
		} else {
			vars.jumpOffset = 0;
			vars.jumpSpeed = 0;
			vars.jumpAccel = 0;
			vars.floatMeter = 0;
			if(vars.jumpReset < 2) {
				vars.jumpReset += 1;
				this.refreshMotion();
				if(vars.jumpEnded) {
					vars.jumpStart = false;
				}
			}
		}

		this._mainSprite.y = 0;
		this._mainSprite.y += vars.jumpOffset;

		if(_.scale) {
			this._shadowSprite.scale.x = 1 - (Math.abs(vars.jumpOffset) / 100).clamp(0, 1);
			this._shadowSprite.scale.y = 1 - (Math.abs(vars.jumpOffset) / 100).clamp(0, 1);
		}
	};

})(SRD.ActiveDefenseCore);