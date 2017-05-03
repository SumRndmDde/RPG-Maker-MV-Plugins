/*: 
 * @plugindesc A ring appears on screen and commands cycle around it. The Player must press the commands as they appear on the top.
 * @author SumRndmDde
 *
 * @param "Z" Press Condition
 * @desc The JavaScript condition that must be true for the "Z" button to be pressed.
 * @default Input.isTriggered('ok') || (TouchInput.isTriggered() && TouchInput.x <= Graphics.width / 2)
 *
 * @param "X" Press Condition
 * @desc The JavaScript condition that must be true for the "X" button to be pressed.
 * @default Input.isTriggered('cancel') || (TouchInput.isTriggered() && TouchInput.x > Graphics.width / 2)
 *
 * @param == Default Props. ==
 * @default
 *
 * @param Normal SE
 * @desc The default Normal SE when one is not specified.
 * Input filename of Sound Effect in /audio/se/
 * @default Wind4
 *
 * @param Miss SE
 * @desc The default Miss SE when one is not specified.
 * Input filename of Sound Effect in /audio/se/
 * @default Buzzer1
 *
 * @param Success SE
 * @desc The default Success SE when one is not specified.
 * Input filename of Sound Effect in /audio/se/
 * @default Bell3
 *
 * @param Fail SE
 * @desc The default Fail SE when one is not specified.
 * Input filename of Sound Effect in /audio/se/
 * @default Break
 *
 * @param Button Image
 * @desc The default Image when one is not specified.
 * Input filename of Image in /img/SumRndmDde/tas/
 * @default ZX
 *
 * @param Ring Image
 * @desc The default Image when one is not specified.
 * Input filename of Image in /img/SumRndmDde/tas/
 * @default Ring
 *
 * @param Target Image
 * @desc The default Image when one is not specified.
 * Input filename of Image in /img/SumRndmDde/tas/
 * @default Target
 *
 * @param Command Amount
 * @desc The default Command Amount when one is not specified.
 * Input a Positive Number.
 * @default 4
 *
 * @param Randomize Commands
 * @desc Determines whether the commands are randomized.
 * Input 'true' or a specific pattern like: 'z, x, z, z'.
 * @default true
 *
 * @param Speed
 * @desc The default Speed when one is not specified.
 * Input a Positive Number.
 * @default 0.10
 *
 * @param Penalty
 * @desc The default Penalty when one is not specified.
 * Input a Positive Number of Frames to lose.
 * @default 0.01
 *
 * @param Radius
 * @desc The default Radius when one is not specified.
 * Input a Positive Number.
 * @default 100
 *
 * @param Above Height
 * @desc The default Above Height when one is not specified.
 * Input a Positive Number.
 * @default 48
 *
 * @param Hit Animation
 * @desc The default Animation when one is not specified.
 * Use the format: opacity, x-scale, y-scale, x-move, y-move
 * @default -20, 0.1, 0.1, -2, -2
 *
 * @param Flash Rate
 * @desc The default Flash Rate when one is not specified.
 * Input a Positive Number
 * @default 16
 *
 * @param Flash Time
 * @desc The default Flash Time when one is not specified.
 * Input a Positive Number
 * @default 40
 *
 * @help
 *
 * Timed Attack: Wheel
 * Version 1.01
 * SumRndmDde
 *
 *
 * This Plugin requires the Timed Attack Core Plugin (SRD_TimedAttackCore)
 * http://sumrndm.site/timed-attack-core
 *
 * A Timed Attack in which a ring appears on screen and commands cycle around 
 * it. The Player must press the commands as they appear on the top.
 *
 * In the beginning, the commands will all be frozen. After completeing the 
 * first command, the other commands will begin to move around the ring
 * counter-clockwise. The Player must press the commands at the exact moment 
 * they reach the top of the ring.
 *
 *
 * ==========================================================================
 *  How to Customize Skill's Damage/Effect from Timed Attack
 * ==========================================================================
 *
 * Use $gameTemp.tas_power to have the power affect the skill.
 * This value will be a value from 0 to 1 depending on how close the 
 * "Timed Attack" was to being perfect.
 *
 * For example:
 * (a.atk * 4 - b.def * 2) * ($gameTemp.tas_power)
 *
 * In that example, getting a perfect hit in the "Timed Attack" would result
 * in full damage, and getting any besides perfect would give only a percent
 * of the full damage.
 *
 *
 * ==========================================================================
 *  How to Set a Skill to Use a Timed Attack (Wheel)
 * ==========================================================================
 *
 * Use the Notetag:
 *
 * <Timed Attack: wheel>
 * <End Timed Attack>
 *
 * Setting those in a Skill's notebox will activate the "Timed Attack System"
 * for that Skill.
 *
 * The part that says "wheel" can be changed to have other types of "Timed
 * Attacks" be used.
 *
 *
 * ==========================================================================
 *  Controlling the Conditions for Button Presses
 * ==========================================================================
 *
 * The "Z" Press Condition and "X" Press Condition Parameters let you 
 * customize the JavaScript conditions for pressing the Z and X buttons.
 *
 * Of course, these don't have to be Z or X, as you can change the image file
 * used and also change the condition for them to be pressed.
 *
 * By default, the conditions are:
 *
 * == "Z" Press Condition ==
 * Input.isTriggered('ok') || (TouchInput.isTriggered() && TouchInput.x <= Graphics.width / 2)
 *
 * == "X" Press Condition ==
 * Input.isTriggered('cancel') || (TouchInput.isTriggered() && TouchInput.x > Graphics.width / 2)  .
 *
 *
 * ==========================================================================
 *  Wheel Timed Attack Properties
 * ==========================================================================
 *
 * You can manipulate the properties of each Timed Attack by adding them
 * in the Notetags. For example:
 *
 * <Timed Attack: wheel>
 * Command Amount: 3
 * Randomize Commands?: z, x, x
 * Speed: 0.07
 * <End Timed Attack>
 *
 * As you can see, there are a couple of factors you can use to even make one
 * individual Timed Attack different for each Skill it is used with.
 *
 *
 * Here are all the properties for Wheel Timed Attack:
 *
 * Normal SE:        (Input filename of Sound Effect in /audio/se/)
 * Miss SE:          (Input filename of Sound Effect in /audio/se/)
 * Success SE:       (Input filename of Sound Effect in /audio/se/)
 * Fail SE:          (Input filename of Sound Effect in /audio/se/)
 * Button Image:     (Input filename of for in /img/SumRndmDde/tas/)
 * Ring Image:       (Input filename of for in /img/SumRndmDde/tas/)
 * Target Image:     (Input filename of for in /img/SumRndmDde/tas/)
 * Phrase:           (Input a word or phrase. %1 will represent the counter)
 * Command Amount:   (Input a Positive Number)
 * Randomize Commands:(Input 'true' or a specific pattern)
 * Speed:            (Input a Positive Number)
 * Penalty:          (Input a Positive Number)
 * Radius:           (Input a Positive Number)
 * Above Height:     (Input a Positive Number)
 * Hit Animation:    (Use the format: opacity, x-scale, y-scale, x-move, y-move)
 * Flash Rate:       (Input a Positive Number)
 * Flash Time:       (Input a Positive Number)
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
 *
 */

var Imported = Imported || {};
Imported["SumRndmDde Timed Attack Wheel"] = 1.00;

if(Imported["SumRndmDde Timed Attack Core"]) {

SRD.TimedAttackWheel = SRD.TimedAttackWheel || {};

(function(_, $) {

	"use strict";

	_.TAS_ID = 'wheel';
	
	var params = PluginManager.parameters('SRD_TimedAttack_Wheel');

	_.zCondition = String(params['"Z" Press Condition']);
	_.xCondition = String(params['"X" Press Condition']);

	_.se = String(params['Normal SE']);
	_.fse = String(params['Miss SE']);
	_.vse = String(params['Success SE']);
	_.f2se = String(params['Fail SE']);
	_.button = String(params['Button Image']);
	_.ring = String(params['Ring Image']);
	_.target = String(params['Target Image']);
	_.amount = parseInt(params['Command Amount']);
	_.random = String(params['Randomize Commands']);
	_.speed = Number(params['Speed']);
	_.penatly = Number(params['Penalty']);
	_.radius = parseInt(params['Radius']);
	_.aboveHeight = parseInt(params['Above Height']);
	_.animation = String(params['Hit Animation']);
	_.flash = parseInt(params['Flash Rate']);
	_.time = parseInt(params['Flash Time']);

	var tempImages = [];
	var _$_organizeInfo = $.organizeInfo;
	$.organizeInfo = function(o) {
		_$_organizeInfo.call(this, o);
		if(o.type === _.TAS_ID) {
			if(_.button && _.button.trim().length > 0) $.loadImage(_.button);
			if(_.ring && _.ring.trim().length > 0) $.loadImage(_.ring);
			if(_.target && _.target.trim().length > 0) $.loadImage(_.target);
			if(o.info.match(/Normal[ ]?SE:\s*(.*)/im)) o.se = String(RegExp.$1);
			if(o.info.match(/Miss[ ]?SE:\s*(.*)/im)) o.fse = String(RegExp.$1);
			if(o.info.match(/Success[ ]?SE:\s*(.*)/im)) o.vse = String(RegExp.$1);
			if(o.info.match(/Fail[ ]?SE:\s*(.*)/im)) o.f2se = String(RegExp.$1);
			if(o.info.match(/Command[ ]?Amount:\s*(.*)/im)) o.amount = parseInt(RegExp.$1);
			if(o.info.match(/Randomize[ ]?Commands:\s*(.*)/im)) o.random = String(RegExp.$1);
			if(o.info.match(/Button[ ]?Image:\s*(.*)/im)) o.button = String(RegExp.$1);
			if(o.info.match(/Ring[ ]?Image:\s*(.*)/im)) o.button = String(RegExp.$1);
			if(o.info.match(/Target[ ]?Image:\s*(.*)/im)) o.button = String(RegExp.$1);
			if(o.info.match(/Speed:\s*(.*)/im)) o.speed = Number(RegExp.$1);
			if(o.info.match(/Penalty:\s*(.*)/im)) o.penatly = Number(RegExp.$1);
			if(o.info.match(/Radius:\s*(.*)/im)) o.radius = parseInt(RegExp.$1);
			if(o.info.match(/Above[ ]?Height:\s*(.*)/im)) o.aboveHeight = parseInt(RegExp.$1);
			if(o.info.match(/Animation:\s*(.*)/im)) o.animation = String(RegExp.$1);
			if(o.info.match(/Flash[ ]?Rate:\s*(.*)/im)) o.flash = parseInt(RegExp.$1);
			if(o.info.match(/Flash[ ]?Time:\s*(.*)/im)) o.time = parseInt(RegExp.$1);
			if(!o.se) o.se = _.se;
			if(!o.vse) o.vse = _.vse;
			if(!o.fse) o.fse = _.fse;
			if(!o.f2se) o.f2se = _.f2se;
			if(!o.button) o.button = _.button;
			else $.loadImage(o.button);
			if(!o.ring) o.ring = _.ring;
			else $.loadImage(o.ring);
			if(!o.target) o.target = _.target;
			else $.loadImage(o.target);
			if(!o.amount) o.amount = _.amount;
			if(!o.random) o.random = _.random;
			if(!o.speed) o.speed = _.speed;
			if(!o.penatly && o.penatly != 0) o.penatly = _.penatly;
			if(!o.radius) o.radius = _.radius;
			if(!o.aboveHeight && o.aboveHeight != 0) o.aboveHeight = _.aboveHeight;
			if(!o.animation) o.animation = _.animation;
			if(!o.flash && o.flash !== 0) o.flash = _.flash;
			if(!o.time && o.time !== 0) o.time = _.time;
		}
	};

	//-----------------------------------------------------------------------------
	// TimedAttackSystem
	//-----------------------------------------------------------------------------

	var _TimedAttackSystem_loadItem = TimedAttackSystem.prototype.loadItem;
	TimedAttackSystem.prototype.loadItem = function(item) {
		_TimedAttackSystem_loadItem.call(this, item);
		if(item.type === _.TAS_ID) {
			this._button = item.button;
			this._ring = item.ring;
			this._target = item.target;
			this._speed = item.speed;
			this._penatly = item.penatly;
			this._radius = item.radius;
			this._aboveHeight = item.aboveHeight;
			this._flash = item.flash;
			this._time = item.time;
			this._ani = item.animation.split(/\s*,\s*/);
			for(var i = 0; i < this._ani.length; i++) {
				this._ani[i] = Number(this._ani[i])
			}

			this._commands = [];
			var random;
			if(item.random.trim().toLowerCase() === 'true') {
				random = true;
			} else {
				random = item.random.split(/\s*,\s*/);
			}
			for(var i = 0; i < item.amount; i++) {
				if(random === true) {
					this._commands.push(Math.randomInt(2));
				} else {
					switch(random[i]) {
						case 'z':
							this._commands.push(0);
							break;
						case 'x':
							this._commands.push(1);
							break;
					}
				}
			}
			this._countDown = this._commands.length;
			this._maxCount = this._countDown;
			this._moments = [];
			for(var i = 0; i < this._commands.length; i++) {
				this._moments.push(Math.PI * 2 * (i / this._commands.length));
			}
		}
	};

	var _TimedAttackSystem_loadStart = TimedAttackSystem.prototype.loadStart;
	TimedAttackSystem.prototype.loadStart = function() {
		_TimedAttackSystem_loadStart.call(this);
		if(this._item.type === _.TAS_ID) {
			this._window.opacity = 0;
			this.contents.clear();
			this._notPressed = true;
			this._flashTime = 0;
			this._x = 0;
			this._y = 0;
			this._oneUpdate = true;
			this._evals = [_.zCondition, _.xCondition];
			this._sprActor = BattleManager._spriteset._actorSprites[BattleManager._subject.index()];
			this._x = (this._sprActor.x - (this._sprActor.width*(1/4)));
			this._y = (this._sprActor.y - this._aboveHeight);
			this._animationCycle = 0;
			this._startMovement = false;
			this._ringThickness = 6;
			this._powers = [];
		}
	};

	var _TimedAttackSystem_updateGames = TimedAttackSystem.prototype.updateGames;
	TimedAttackSystem.prototype.updateGames = function() {
		_TimedAttackSystem_updateGames.call(this);
		if(this._type === _.TAS_ID) this.playWheelGame();
	};

	TimedAttackSystem.prototype.playWheelGame = function() {
		//Initialise
		if(this._oneUpdate) {
			this._sprites = [];
			for(var i = 0; i < this._commands.length; i++) {
				var bit = $.loadImage(this._button);
				this._bitWidth = bit.width;
				var h = bit.height;
				this._sprites[i] = new Sprite(new Bitmap(h, h));
				this._sprites[i].bitmap.blt(bit, this._commands[i] * (this._bitWidth/2), 0, h, h, 0, 0);
				this._sprites[i].opacity = 0;
				this.addChild(this._sprites[i]);
			}
			this._backSprite = new Sprite(new Bitmap((this._radius*2) + (this._ringThickness*2), (this._radius*2) + (this._ringThickness*2)));
			var bit2 = $.loadImage(this._ring);
			this._backSprite.bitmap.blt(bit2, 0, 0, bit2.width, bit2.height, 0, 0, (this._radius*2) + (this._ringThickness), (this._radius*2) + (this._ringThickness));
			this._backSprite.x = this._x - (this._backSprite.width/2) + (this._ringThickness*3);
			this._backSprite.y = this._y - (this._backSprite.height/2) + (this._ringThickness*3);
			this.addChildAt(this._backSprite, 0);

			this._targetSprite = new Sprite($.loadImage(this._target));
			this._targetSprite.x = this._x - ((this._targetSprite.width/2) - (this._sprites[0].width/2));
			this._targetSprite.y = this._y - this._radius - ((this._targetSprite.height/2) - (this._sprites[0].height/2));
			this.addChildAt(this._targetSprite, 1);
			this._oneUpdate = false;
		} else {
			for(var i = 0; i < this._commands.length; i++) {
				if(this._maxCount - this._countDown > i) {
					if(this._sprites[i].opacity > 0) {
						this._sprites[i].opacity += this._ani[0];
						this._sprites[i].scale.x += this._ani[1];
						this._sprites[i].scale.y += this._ani[2];
						this._sprites[i].x += this._ani[3];
						this._sprites[i].y += this._ani[4];
					}
				} else {
					var coods = this.getWheelCoordinates(i);
					this._sprites[i].x = this._x + coods.x;
					this._sprites[i].y = this._y + coods.y;
					if(this._sprites[i].opacity === 0) this._sprites[i].opacity = 255;
				}
			}
			this._backSprite.x = this._x - (this._backSprite.width/2) + (this._ringThickness*3);
			this._backSprite.y = this._y - (this._backSprite.height/2) + (this._ringThickness*3);

			this._targetSprite.x = this._x - ((this._targetSprite.width/2) - (this._sprites[0].width/2));
			this._targetSprite.y = this._y - this._radius - ((this._targetSprite.height/2) - (this._sprites[0].height/2));
		}


		//Movement
		if(this._notPressed) {
			var f = this._frame;
		} else {
			this._flashTime++;
		}

		if(this._flashTime >= this._time && !this._notPressed) {
			this._content.bitmap.clear();
			for(var i = 0; i < this._sprites.length; i++) {
				this.removeChild(this._sprites[i]);
			}
			this.removeChild(this._backSprite);
			this.removeChild(this._targetSprite);
			BattleManager.endTASAttackThing();
			this.close();
		}

		this._x = (this._sprActor.x - (this._sprActor.width*(1/4)));
		this._y = (this._sprActor.y - this._aboveHeight);

		if(this._notPressed) {

			if(eval(this._evals[this._commands[this._maxCount - this._countDown]])) {
				var power = Math.abs(this._animationCycle - this._moments[this._maxCount - this._countDown]) / 1;
				this._powers.push(Math.max(1 - power, 0));
				this._countDown--;
				if(this._countDown === 0) {
					AudioManager.playSe({"name":this._item.vse,"pan":0,"pitch":100,"volume":100});
					var tasPower = 0;
					for(var i = 0; i < this._powers.length; i++) {
						tasPower += this._powers[i];
					}
					tasPower /= this._powers.length;
					this.setPower(tasPower);
					this._notPressed = false;
				} else {
					AudioManager.playSe({"name":this._item.se,"pan":0,"pitch":100,"volume":100});
					
				}
				if(!this._startMovement && this._countDown > 0) this._startMovement = true;
			} else if(eval(this._evals[0]) || eval(this._evals[1])) {
				this._speed += this._penatly;
				if(!this._startMovement) this._startMovement = true;
				AudioManager.playSe({"name":this._item.fse,"pan":0,"pitch":100,"volume":100});
			}

			if(this._startMovement) this._animationCycle += (this._speed);

			if(this._animationCycle > Math.PI * 2) {
				this._notPressed = false;
				AudioManager.playSe({"name":this._item.f2se,"pan":0,"pitch":100,"volume":100});
				this.setPower(0);
			}
		}
	};

	TimedAttackSystem.prototype.getWheelCoordinates = function(index) {
		var result = {x: 0, y: 0};
		var portions = ((Math.PI * 2) / this._maxCount);
		var angle = Math.PI * (3/2) + (portions * index) - this._animationCycle;
		result.x = Math.round(Math.cos(angle)*this._radius);
		result.y = Math.round(Math.sin(angle)*this._radius);
		return result;
	};

})(SRD.TimedAttackWheel, SRD.TimedAttack);

} else alert("Please install 'SRD_TimedAttackCore' in order to use 'SRD_TimedAttack_Wheel'.");