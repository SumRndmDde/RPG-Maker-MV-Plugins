/*:
 * @plugindesc Adds an Active Defense that forces the Player to charge up before dodging an attack.
 * @author SumRndmDde
 *
 * @param Hit Condition
 * @desc The condition that must be true for the Skill to hit.
 * @default $ActiveDefense.power <= 0
 *
 * @param Reset Value Code
 * @desc This is the code that will run when the Player doesn't dodge the animation.
 * @default $ActiveDefense.power = 0
 *
 * @param Set Value Code
 * @desc Variable 'distance' = Player's distance.
 * Variable 'required' = required height.
 * @default $ActiveDefense.power = 1
 *
 * @param == Defaults ==
 * @default
 *
 * @param Dodge Speed
 * @desc The speed in which the Actor dodges.
 * Input a number or a JavaScript eval using 'actor'.
 * @default 5
 *
 * @param Movement Distance
 * @desc The distance the Actor dodges.
 * Input a number or a JavaScript eval using 'actor'.
 * @default actor.chargeValue
 *
 * @param Fill Speed
 * @desc The speed that the gauge fills.
 * Input a number or a JavaScript eval using 'actor'.
 * @default 3
 *
 * @param Empty Speed
 * @desc The speed that the gauge empties.
 * Input a number or a JavaScript eval using 'actor'.
 * @default 1
 *
 * @param Background Color
 * @desc The background color of the gauge.
 * Input an HTML or JavaScript color.
 * @default #444444
 *
 * @param Gauge Color 1
 * @desc The first color of the gauge.
 * Input an HTML or JavaScript color.
 * @default red
 *
 * @param Gauge Color 2
 * @desc The first color of the gauge.
 * Input an HTML or JavaScript color.
 * @default orange
 *
 * @param Charge Motion
 * @desc The motion of the Actor when they are charging.
 * Input an SV-Actor motion.
 * @default chant
 *
 * @param Dodge Motion
 * @desc The motion of the Actor when they are dodging.
 * Input an SV-Actor motion.
 * @default evade
 *
 * @param Max Charge Value
 * @desc The maximum charge for the dodge gauge.
 * Input a number or JavaScript eval.
 * @default 50
 *
 * @param Required Value
 * @desc The required movement in pixels the Actor must dodge.
 * Input a number or JavaScript eval.
 * @default 30
 *
 * @param Dodge Minimum
 * @desc The minimum required amount of points to dodge.
 * Input a number.
 * @default 15
 *
 * @param Sound Effect
 * @desc The sound effect played when the battler dodges.
 * Input a sound effect filename.
 * @default Evasion1
 *
 * @param Press Trigger
 * @desc The condition that must be true to be pressed.
 * Input a JavaScript eval.
 * @default Input.isPressed('ok') || TouchInput.isPressed()
 *
 * @param Release Trigger
 * @desc The condition that must be true to be released.
 * Input a JavaScript eval.
 * @default !Input.isPressed('ok') && !TouchInput.isPressed()
 *
 * @help
 *
 * Active Defense: Charge
 * Version 1.10
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
 * In this plugin, the Active Defense that you can use is the "charge".
 * This Active Defense adds forces the Player to charge up before dodging 
 * an attack. This requires the Player to time their dodges at a much
 * greater degree.
 *
 *
 * ==========================================================================
 *  How it Works
 * ==========================================================================
 *
 * During the Enemy attack, the Player must charge up before preforming
 * a dodge. To do so, they must hold down the OK button or hold down on the
 * screen. While the Player is holding down, a gauge next to the targeted
 * Actor will begin to fill.
 *
 * The goal is the release the button/tap when the gauge is near the top.
 * This way, the Actor will preform the best dodge and move the farthest
 * distance.
 *
 * However, the Actor must also dodge during the Enemy's Skill animation.
 * So, as you can imagine, the Player needs to time their charge to match
 * up with the Enemy's attack animation.
 *
 * It is difficult, which is good for an Active Defense that will be used
 * throughout a game.
 *
 *
 * ==========================================================================
 *  Setting up the Notetags
 * ==========================================================================
 *
 * If you wish for a Skill to use the Active Defense System, place these
 * notetags within the Skill's notebox:
 *
 *   <Active Defense: charge>
 *   <End Active Defense>
 *
 * In this example, the Active Defense being used is the "charge".
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
 *   <Active Defense: charge>
 *   Fill Speed: 2
 *   <End Active Defense>
 *
 * If this was within a Skill, it would make it so when the Enemy uses that
 * Skill the Player can make their Actor's charge and dodge enemy attacks.
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
 * For example, it may return 'charge'.
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

var Imported = Imported || {};
Imported["SumRndmDde Active Defense Charge"] = 1.00;

if(Imported["SumRndmDde Active Defense Core"]) {

if(Imported["SumRndmDde Active Defense Core"] < 1.10) {
	alert('Please update the Active Defense Core to Version 1.10 or above.');
}

SRD.ActiveDefenseCharge = SRD.ActiveDefenseCharge || {};

(function(_, $) {

	"use strict";

	_.ADS_ID = 'charge';

	var params = PluginManager.parameters('SRD_ActiveDefense_Charge');

	_.hit = String(params['Hit Condition']);
	_.failure = String(params['Reset Value Code']);
	_.success = String(params['Set Value Code']);

	_.speed = String(params['Dodge Speed']);
	_.distance = String(params['Movement Distance']);
	_.fill = String(params['Fill Speed']);
	_.empty = String(params['Empty Speed']);
	_.back = String(params['Background Color']);
	_.color1 = String(params['Gauge Color 1']);
	_.color2 = String(params['Gauge Color 2']);
	_.charge = String(params['Charge Motion']);
	_.dodge = String(params['Dodge Motion']);
	_.max = String(params['Max Charge Value']);
	_.required = String(params['Required Value']);
	_.minimum = parseInt(params['Dodge Minimum']);
	_.se = String(params['Sound Effect']);
	_.press = String(params['Press Trigger']);
	_.release = String(params['Release Trigger']);

	//-----------------------------------------------------------------------------
	// SRD.ActiveDefenseCore
	//-----------------------------------------------------------------------------

	var _$_organizeInfo = $.organizeInfo;
	$.organizeInfo = function(o) {
		_$_organizeInfo.call(this, o);
		if(o.type === _.ADS_ID) {
			if(o.info.match(/Dodge[ ]?Speed:\s*(.*)/im)) o.speed = String(RegExp.$1);
			else o.speed = _.speed;
			if(o.info.match(/Movement[ ]?Distance:\s*(.*)/im)) o.distance = String(RegExp.$1);
			else o.distance = _.distance;
			if(o.info.match(/Fill[ ]?Speed:\s*(.*)/im)) o.fill = String(RegExp.$1);
			else o.fill = _.fill;
			if(o.info.match(/Empty[ ]?Speed:\s*(.*)/im)) o.empty = String(RegExp.$1);
			else o.empty = _.empty;
			if(o.info.match(/Background[ ]?Color:\s*(.*)/im)) o.back = String(RegExp.$1);
			else o.back = _.back;
			if(o.info.match(/Gauge[ ]?Color[ ]?1:\s*(.*)/im)) o.color1 = String(RegExp.$1);
			else o.color1 = _.color1;
			if(o.info.match(/Gauge[ ]?Color[ ]?2:\s*(.*)/im)) o.color2 = String(RegExp.$1);
			else o.color2 = _.color2;
			if(o.info.match(/Charge[ ]?Motion:\s*(.*)/im)) o.charge = String(RegExp.$1);
			else o.charge = _.charge;
			if(o.info.match(/Dodge[ ]?Motion:\s*(.*)/im)) o.dodge = String(RegExp.$1);
			else o.dodge = _.dodge;
			if(o.info.match(/Max[ ]?Charge[ ]?Value:\s*(.*)/im)) o.max = String(RegExp.$1);
			else o.max = _.max;
			if(o.info.match(/Required[ ]?Value:\s*(.*)/im)) o.required = String(RegExp.$1);
			else o.required = _.required;
			if(o.info.match(/Dodge[ ]?Minimum:\s*(.*)/im)) o.minimum = parseInt(RegExp.$1);
			else o.minimum = _.minimum;
			if(o.info.match(/Sound[ ]?Effect:\s*(.*)/im)) o.se = String(RegExp.$1);
			else o.se = _.se;
			if(o.info.match(/Press[ ]?Trigger:\s*(.*)/im)) o.press = String(RegExp.$1);
			else o.press = _.press;
			if(o.info.match(/Release[ ]?Trigger:\s*(.*)/im)) o.release = String(RegExp.$1);
			else o.release = _.release;
		}
	};

	//-----------------------------------------------------------------------------
	// Game_ActiveDefense
	//-----------------------------------------------------------------------------

	var _Game_ActiveDefense_adsInitialize = Game_ActiveDefense.prototype.adsInitialize;
	Game_ActiveDefense.prototype.adsInitialize = function(enemy, action, item, actor) {
		_Game_ActiveDefense_adsInitialize.call(this, enemy, action, item, actor);
		if(this.type === _.ADS_ID) {
			this.vars.speed = eval(this.item.speed);
			this.vars.distance = this.item.distance;
			this.vars.fill = eval(this.item.fill);
			this.vars.empty = eval(this.item.empty);
			this.vars.back = this.item.back;
			this.vars.color1 = this.item.color1;
			this.vars.color2 = this.item.color2;
			this.vars.charge = this.item.charge;
			this.vars.dodge = this.item.dodge;
			this.vars.max = eval(this.item.max);
			this.vars.required = eval(this.item.required);
			this.vars.minimum = this.item.minimum;
			this.vars.se = this.item.se;
			this.vars.press = this.item.press;
			this.vars.release = this.item.release;
		}
	};

	//-----------------------------------------------------------------------------
	// Window_BattleLog
	//-----------------------------------------------------------------------------

	var _Window_BattleLog_updateAds = Window_BattleLog.prototype.updateAds;
	Window_BattleLog.prototype.updateAds = function() {
		_Window_BattleLog_updateAds.call(this);
		if($ActiveDefense.type === _.ADS_ID) this.updateChargeDefense();
	};

	Window_BattleLog.prototype.updateChargeDefense = function() {
		for(var i = 0; i < this[$.n+"Targets"].length; i++) {
			var spr = this[$.n+"Targets"][i];
			if(eval($ActiveDefense.vars.press) && spr[$.n+"Vars"].chargeMode === 0) {
				spr[$.n+"Vars"].chargeMode = 1;
			} else if(eval($ActiveDefense.vars.release) && spr[$.n+"Vars"].chargeMode === 1) {
				if(spr[$.n+"Vars"].chargeValue > $ActiveDefense.vars.minimum) {
					var actor = spr[$.n+"Vars"];
					spr[$.n+"Vars"].chargeMode = 2;
					spr[$.n+"Vars"].chargeSet = eval($ActiveDefense.vars.distance);
					AudioManager.playSe({"name":$ActiveDefense.vars.se,"pan":0,"pitch":100,"volume":100});
				} else {
					spr[$.n+"Vars"].chargeOffset = 0;
					spr[$.n+"Vars"].chargeMode = 0;
					spr[$.n+"Vars"].chargeValue = 0;
					spr[$.n+"Vars"].chargeSet = 0;
					spr[$.n+"Vars"].chargeDir = 1;
					spr[$.n+"Vars"].chargeSprite.visible = false;
					spr.refreshMotion();
				}
			}
		}
	};

	var _Window_BattleLog_getDefenseResults = Window_BattleLog.prototype.getDefenseResults;
	Window_BattleLog.prototype.getDefenseResults = function(target) {
		_Window_BattleLog_getDefenseResults.apply(this, arguments);
		if($ActiveDefense.type === _.ADS_ID) {
			this.resetActiveDefenseValues();
			if(this[$.n+"Targets"]) {
				for(var i = 0; i < this[$.n+"Targets"].length; i++) {
					if(this[$.n+"Targets"][i][$.n+"Vars"].chargeOffset >= ($ActiveDefense.vars.required)) {
						this.setActiveDefenseValues(this[$.n+"Targets"][i][$.n+"Vars"].chargeOffset);
					}
				}
			}
		}
	};

	var _Window_BattleLog_resetActiveDefenseValues = Window_BattleLog.prototype.resetActiveDefenseValues;
	Window_BattleLog.prototype.resetActiveDefenseValues = function() {
		_Window_BattleLog_resetActiveDefenseValues.apply(this, arguments);
		if($ActiveDefense.type === _.ADS_ID) {
			eval(_.failure);
		}
	};

	var _Window_BattleLog_setActiveDefenseValues = Window_BattleLog.prototype.setActiveDefenseValues;
	Window_BattleLog.prototype.setActiveDefenseValues = function(distance, required) {
		_Window_BattleLog_setActiveDefenseValues.apply(this, arguments);
		if($ActiveDefense.type === _.ADS_ID) {
			var required = $ActiveDefense.vars.required;
			eval(_.success);
		}
	};

	//-----------------------------------------------------------------------------
	// Game_ActionResult
	//-----------------------------------------------------------------------------

	var _Game_ActionResult_isActiveDefenseSuccessful = Game_ActionResult.prototype.isActiveDefenseSuccessful;
	Game_ActionResult.prototype.isActiveDefenseSuccessful = function() {
		if($ActiveDefense.type === _.ADS_ID) {
			return eval(_.hit);
		}
		return _Game_ActionResult_isActiveDefenseSuccessful.call(this);
	};

	//-----------------------------------------------------------------------------
	// Sprite_Actor
	//-----------------------------------------------------------------------------

	var _Sprite_Actor_getAdsCondition = Sprite_Actor.prototype.getAdsCondition;
	Sprite_Actor.prototype.getAdsCondition = function() {
		if($ActiveDefense.type === _.ADS_ID) {
			return BattleManager._logWindow && !this._actor.isDead();
		}
		return _Sprite_Actor_getAdsCondition.call(this);
	};

	var _Sprite_Actor_updateAds = Sprite_Actor.prototype.updateAds;
	Sprite_Actor.prototype.updateAds = function() {
		_Sprite_Actor_updateAds.call(this);
		if($ActiveDefense.type === _.ADS_ID && this[$.n+"Vars"].chargeStart) {
			this.updateChargeDefense();
		}
	};

	var _Sprite_Actor_initializeADS = Sprite_Actor.prototype.initializeADS;
	Sprite_Actor.prototype.initializeADS = function() {
		_Sprite_Actor_initializeADS.call(this);
		if($ActiveDefense.type === _.ADS_ID) {
			var vars = this[$.n+"Vars"];
			vars.chargeMode = 0;
			vars.chargeSprite = null;
			vars.chargeValue = 0;
			vars.chargeSet = 0;
			vars.chargeMax = $ActiveDefense.vars.max;
			vars.chargeOffset = 0;
			vars.chargeDir = 1;

			var width = 20;
			var height = 80;
			vars.chargeSprite = new Sprite(new Bitmap(width, height));
			vars.chargeSprite.y = -(vars.chargeSprite.height * (1.5));
			vars.chargeSprite.x = vars.chargeSprite.width;
			vars.chargeSprite.visible = false;
			vars.chargeSprite.adsRedraw = function(vars) {
				var width = 20;
				var height = 80;
				var rate = vars.chargeValue / vars.chargeMax;
				var fillH = Math.floor(height * rate);
				this.bitmap.fillRect(0, 0, width, height, $ActiveDefense.vars.back);
				this.bitmap.gradientFillRect(0, height - fillH, width, fillH, $ActiveDefense.vars.color1, $ActiveDefense.vars.color2, true);
			}
			vars.chargeSprite.adsRedraw(vars);
			this._mainSprite.addChild(vars.chargeSprite);
			vars.chargeStart = true;

			//NEW CODE
			/*
			var bitmap = ImageManager.loadSystem('IconSet');
			var pw = Window_Base._iconWidth;
			var ph = Window_Base._iconHeight;
			var sx = 29 % 16 * pw;
			var sy = Math.floor(29 / 16) * ph;
			vars.sprite2 = new Sprite(new Bitmap(Window_Base._iconWidth, Window_Base._iconHeight));
			vars.sprite2.bitmap.blt(bitmap, sx, sy, pw, ph, 0, 0);
			this._mainSprite.addChild(vars.sprite2);
			vars.sprite2.x -= this.width / 4;
			vars.sprite2.y -= this.height * 1.5;*/
		}
	};

	var _Sprite_Actor_endTheADS = Sprite_Actor.prototype.endTheADS;
	Sprite_Actor.prototype.endTheADS = function() {
		_Sprite_Actor_endTheADS.call(this);
		if($ActiveDefense.type === _.ADS_ID) {
			var vars = this[$.n+"Vars"];
			this._mainSprite.removeChild(vars.chargeSprite);
			vars.chargeSprite = null;
			vars.chargeStart = false;
			vars.chargeOffset = 0;
			vars.chargeMode = 0;
			this._mainSprite.x = 0;
			this.refreshMotion();

			//NEW CODE
			//this._mainSprite.removeChild(vars.sprite2);
		}
	};

	Sprite_Actor.prototype.updateChargeDefense = function() {
		var vars = this[$.n+"Vars"];
		
		if(vars.chargeMode === 1) {
			if(!vars.chargeSprite.visible) vars.chargeSprite.visible = true;
			if(this._motion.index !==  Sprite_Actor.MOTIONS[$ActiveDefense.vars.charge].index &&
				this._motion.index !==  Sprite_Actor.MOTIONS['damage'].index) {
				this.startMotion($ActiveDefense.vars.charge);
			}
			if(this._motion.index !==  Sprite_Actor.MOTIONS['damage'].index) {
				if(vars.chargeSet === 0) {
					vars.chargeValue += $ActiveDefense.vars.fill;
					if(vars.chargeValue > vars.chargeMax) {
						vars.chargeValue = vars.chargeMax;
						vars.chargeSet = 1;
					}
				} else {
					vars.chargeValue -= $ActiveDefense.vars.empty;
					if(vars.chargeValue < 0) {
						vars.chargeValue = 0;
						vars.chargeSet = 0;
					}
				}
			}
			vars.chargeSprite.adsRedraw(vars);
		} else if(vars.chargeMode === 2) {
			if(this._motion.index !==  Sprite_Actor.MOTIONS[$ActiveDefense.vars.dodge].index) {
				this.startMotion($ActiveDefense.vars.dodge);
			}
			if(vars.chargeValue > 0) {
				vars.chargeValue -= ($ActiveDefense.vars.speed / 2);
				if(vars.chargeValue < $ActiveDefense.vars.speed) vars.chargeValue = 0;
				vars.chargeSprite.adsRedraw(vars);
			}
			vars.chargeOffset += $ActiveDefense.vars.speed * (vars.chargeDir);
			if(vars.chargeOffset > vars.chargeSet) vars.chargeDir *= (-1);
			if(vars.chargeOffset <= $ActiveDefense.vars.speed && vars.chargeDir === (-1)) {
				vars.chargeOffset = 0;
				vars.chargeMode = 0;
				vars.chargeValue = 0;
				vars.chargeSet = 0;
				vars.chargeDir = 1;
				vars.chargeSprite.visible = false;
				this.refreshMotion();
			}
		}

		this._mainSprite.x = 0;
		this._mainSprite.x += vars.chargeOffset;
		this._shadowSprite.x = this._mainSprite.x;
	};

	var _Sprite_Actor_startMotion = Sprite_Actor.prototype.startMotion;
	Sprite_Actor.prototype.startMotion = function(motionType) {
		if(!($ActiveDefense.type === _.ADS_ID && this[$.n+"Vars"].chargeMode > 0 && 
			motionType === 'chant' && motionType === 'evade' && motionType === 'damage')) {
			_Sprite_Actor_startMotion.call(this, motionType);
		}
	};

})(SRD.ActiveDefenseCharge, SRD.ActiveDefenseCore);

}