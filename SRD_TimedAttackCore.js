/*: 
 * @plugindesc Adds a system which forces the user to time certain inputs to preform actions during battle.
 * @author SumRndmDde
 *
 * @param Enable Touch?
 * @desc If set to 'true', the Player can touch the screen in order to interact with the Timed Attacks.
 * @default true
 *
 * @param Default Source
 * @desc If the Skill notebox lacks TAS notetags, it will use: 
 * None, Actor, Class, or Weapon
 * @default None
 *
 * @param == Window Options ==
 * @default
 *
 * @param X Alignment
 * @desc The X alignment of the "Timed Attack" Window.
 * The choices are: Left, Center, Right
 * @default Center
 *
 * @param Y Alignment
 * @desc The Y alignment of the "Timed Attack" Window.
 * The choices are: Top, Center, Bottom
 * @default Top
 *
 * @param X Offset
 * @desc A value added to the X of the "Timed Attack" Window.
 * This can be a Number or JavaScript eval.
 * @default 0
 *
 * @param Y Offset
 * @desc A value added to the Y of the "Timed Attack" Window.
 * This can be a Number or JavaScript eval.
 * @default 0
 *
 * @param Window Width
 * @desc The width of the "Timed Attack" Window.
 * This can be a Number or JavaScript eval.
 * @default  Graphics.width
 *
 * @param Window Height
 * @desc The height of the "Timed Attack" Window.
 * This can be a Number or JavaScript eval.
 * @default this.fittingHeight(3)
 *
 * @param == Default Props. ==
 * @default
 *
 * @param Sound Effect
 * @desc The default Sound Effect when one is not specified.
 * Input filename of Sound Effect in /audio/se/
 * @default Sword2
 *
 * @param Cursor Image
 * @desc The default Cursor Image when one is not specified.
 * Input filename of Cursor Image in /img/SumRndmDde/tas/
 * @default
 *
 * @param Background Image
 * @desc The default Background Image when one is not specified.
 * Input filename of Background Image in /img/SumRndmDde/tas/
 * @default DefaultBackground
 *
 * @param Window Opacity
 * @desc The opacity of the Window when one is not specified.
 * Input a Number between 0 and 255.
 * @default 255
 *
 * @param Target Location
 * @desc The default Target Location when one is not specified.
 * Input a Number or JavaScript eval.
 * @default Graphics.width / 2
 *
 * @param Repeat Type
 * @desc The default Repeat Type when one is not specified.
 * The choices are: None, Repeat, Reverse
 * @default None
 *
 * @param Speed
 * @desc The default Speed when one is not specified.
 * Input a Positive Number or JavaScript Formula
 * @default 10
 *
 * @param Main Color
 * @desc The default Color when one is not specified.
 * Input a JavaScript or HTML Color
 * @default #FFFFFF
 *
 * @param Shape
 * @desc If not using an Image, this shape will be used.
 * Input either "Rectangle" or "Oval"
 * @default Rectangle
 *
 * @param Width
 * @desc The default Width when one is not specified.
 * Input a Positive Number
 * @default 24
 *
 * @param Outline Color
 * @desc The default Outline Color when one is not specified.
 * Input a JavaScript or HTML Color
 * @default #000000
 *
 * @param Outline Size
 * @desc The default Outline Size when one is not specified.
 * Input a Positive Number
 * @default 3
 *
 * @param Direction
 * @desc The default Direction when one is not specified.
 * Input "Right", "Left", or "Random"
 * @default Right
 *
 * @param Flash Rate
 * @desc The default Flash Rate when one is not specified.
 * Input a Positive Number
 * @default 8
 *
 * @help
 *
 * Timed Attack Core
 * Version 1.23
 * SumRndmDde
 *
 *
 * This Plugin adds a system which forces the user to time certain inputs 
 * to preform actions during battle.
 *
 * Using this Plugin, you can add a variety of "Timed Attacks" by
 * manipulating existing ones or adding more using extension Plugins.
 *
 * By itself, this Plugin adds one Timed Attack: Default Timed Attack.
 *
 * It is based off of the Timed Attack system from Undertale.
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
 *  Background Image (Default Timed Attack)
 * ==========================================================================
 *
 * For the Default Timed Attack, you want a background image that will
 * cover the entire window, preferably 816x144, though it could be different
 * depending on the size of your screen.
 *
 * Place the image in /img/SumRndmDde/tas/
 * It should be named: DefaultBackground.png
 *
 *
 * ==========================================================================
 *  How to Set a Skill to Use a Timed Attack
 * ==========================================================================
 *
 * Use the Notetag:
 *
 * <Timed Attack: default>
 * <End Timed Attack>
 *
 * Setting those in a Skill's notebox will activate the "Timed Attack System"
 * for that Skill.
 *
 * The part that says "default" can be changed to have other types of "Timed
 * Attacks" be used.
 *
 *
 * ==========================================================================
 *  Default Timed Attack Properties
 * ==========================================================================
 *
 * You can manipulate the properties of each Timed Attack by adding them
 * in the Notetags. For example:
 *
 * <Timed Attack: default>
 * Speed: 15
 * Color: #00FFFF
 * Outline Color: black
 * <End Timed Attack>
 *
 * As you can see, there are a couple of factors you can use to even make one
 * individual Timed Attack different for each Skill it is used with.
 *
 *
 * Here are all the properties for Default Timed Attack:
 *
 * Sound Effect:     (Input filename of Sound Effect in /audio/se/)
 * Background Image: (Input filename of for in /img/SumRndmDde/tas/)
 * Cursor Image:     (Input filename of for in /img/SumRndmDde/tas/)**
 * Window Opacity:   (Input a Number from 0 to 255)
 * Target Location:  (Input Number or JavaScript eval)
 * Repeat Type:      (Input one of the following: None, Repeat, Reverse)
 * Speed:            (Input a Positive Number or JavaScript Formula)*
 * Main Color:       (Input a JavaScript or HTML Color)
 * Shape:            (Input "Rectangle" or "Oval")
 * Width:            (Input a Positive Number)
 * Outline Color:    (Input a JavaScript or HTML Color)
 * Outline Size:     (Input a Positive Number)
 * Direction:        (Input "Right", "Left", or "Random")
 * Flash Rate:       (Input a Positive Number)
 *
 * *The JavaScript Formula can use 'f' to represent "Frame Count".
 * **Leave blank to use rectangle or circle image
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
SRD.TimedAttack = SRD.TimedAttack || {};

var Imported = Imported || {};
Imported["SumRndmDde Timed Attack Core"] = 1.21;

function TimedAttackSystem() {
	this.initialize.apply(this, arguments);
}

(function(_) {

	"use strict";
	_.pass = "SumRndmDde Timed Attack Core";

	_.TAS_ID = 'default';

	var params = PluginManager.parameters('SRD_TimedAttackCore');

	_.default = String(params['Default Source']).trim().toLowerCase();
	_.allowTouch = String(params['Enable Touch?']).trim().toLowerCase() === 'true';

	_.xAlign = String(params['X Alignment']).trim().toLowerCase();
	_.yAlign = String(params['Y Alignment']).trim().toLowerCase();
	_.xPos = String(params['X Offset']);
	_.yPos = String(params['Y Offset']);
	_.myWidth = String(params['Window Width']);
	_.myHeight = String(params['Window Height']);

	_.se = String(params['Sound Effect']);
	_.image = String(params['Cursor Image']);
	_.bi = String(params['Background Image']);
	_.opacity = parseInt(params['Window Opacity']);
	_.target = String(params['Target Location']);
	_.rt = String(PluginManager.parameters('SRD_TimedAttack_Circle')['Repeat Type']).trim().toLowerCase();
	_.speed = String(params['Speed']);
	_.color = String(params['Main Color']);
	_.shape = String(params['Shape']).trim().toLowerCase();
	_.width = parseInt(params['Width']);
	_.outline = String(params['Outline Color']);
	_.size = parseInt(params['Outline Size']);
	_.direction = String(params['Direction']).trim().toLowerCase();
	_.flash = parseInt(params['Flash Rate']);

	_.activateCondition = (_.allowTouch) ? "Input.isTriggered('ok') || TouchInput.isTriggered()" : "Input.isTriggered('ok')";

	//-----------------------------------------------------------------------------
	// SRD.TimedAttackSystem
	//-----------------------------------------------------------------------------

	_.loadImage = function(file, hue) {
		return ImageManager.loadBitmap('img/SumRndmDde/tas/', file, hue, true);
	};

	_.loadNotetagsSkills = function(data) {
		var regex = /<\s*Timed\s*Attack\s*:\s*(.*)\s*>([\d\D\n\r]*)<\s*End\s*Timed\s*Attack\s*>/im;
		var actorRegex = /<\s*Timed\s*Attack\s*:\s*actor\s*>/im;
		var classRegex = /<\s*Timed\s*Attack\s*:\s*class\s*>/im;
		var weaponRegex = /<\s*Timed\s*Attack\s*:\s*weapon\s*>/im;
		for(var i = 1; i < data.length; i++) {
			if(data[i].note.match(regex)) {
				var type = String(RegExp.$1).trim().toLowerCase();
				var info = String(RegExp.$2);
				data[i].meta["SRD TAS"] = {type: type, info: info};
				_.organizeInfo(data[i].meta["SRD TAS"]);
			} else if(data[i].note.match(weaponRegex)) {
				var type = "weapon";
				var info = false;
				data[i].meta["SRD TAS"] = {type: type, info: info};
				_.organizeInfo(data[i].meta["SRD TAS"]);
			} else if(data[i].note.match(classRegex)) {
				var type = "class";
				var info = false;
				data[i].meta["SRD TAS"] = {type: type, info: info};
				_.organizeInfo(data[i].meta["SRD TAS"]);
			} else if(data[i].note.match(actorRegex)) {
				var type = "actor";
				var info = false;
				data[i].meta["SRD TAS"] = {type: type, info: info};
				_.organizeInfo(data[i].meta["SRD TAS"]);
			}
		}
	};

	_.loadNotetagsEverythingElse = function(data) {
		var regex = /<\s*Timed\s*Attack\s*:\s*(.*)\s*>([\d\D\n\r]*)<\s*End\s*Timed\s*Attack\s*>/im;
		for(var i = 1; i < data.length; i++) {
			if(data[i].note.match(regex)) {
				var type = String(RegExp.$1).trim().toLowerCase();
				var info = String(RegExp.$2);
				data[i].meta["SRD TAS"] = {type: type, info: info};
				_.organizeInfo(data[i].meta["SRD TAS"]);
			}
		}
	};

	_.organizeInfo = function(o) {
		if(o.type === _.TAS_ID) {
			_.loadImage(_.image);
			_.loadImage(_.bi);
			if(o.info.match(/Sound[ ]?Effect:\s*(.*)/im)) o.se = String(RegExp.$1);
			if(o.info.match(/Cursor[ ]?Image:\s*(.*)/im)) o.image = String(RegExp.$1);
			if(o.info.match(/Background[ ]?Image:\s*(.*)/im)) o.bi = String(RegExp.$1);
			if(o.info.match(/Window[ ]?Opacity:\s*(.*)/im)) o.opacity = parseInt(RegExp.$1);
			if(o.info.match(/Target[ ]?Location:\s*(.*)/im)) o.target = String(RegExp.$1);
			if(o.info.match(/Repeat[ ]?Type:\s*(.*)/im)) o.rt = String(RegExp.$1).trim().toLowerCase();
			if(o.info.match(/Speed:\s*(.*)/im)) o.speed = String(RegExp.$1);
			if(o.info.match(/Main[ ]?Color:\s*(.*)/im)) o.color = String(RegExp.$1);
			if(o.info.match(/Shape:\s*(.*)/im)) o.shape = String(RegExp.$1).trim().toLowerCase();
			if(o.info.match(/Width:\s*(.*)/im)) o.width = parseInt(RegExp.$1);
			if(o.info.match(/Outline[ ]?Color:\s*(.*)/im)) o.outline = String(RegExp.$1);
			if(o.info.match(/Outline[ ]?Size:\s*(.*)/im)) o.size = parseInt(RegExp.$1);
			if(o.info.match(/Direction:\s*(.*)/im)) o.direction = String(RegExp.$1).trim().toLowerCase();
			if(o.info.match(/Flash[ ]?Rate:\s*(.*)/im)) o.flash = parseInt(RegExp.$1);
			if(!o.speed) o.speed = _.speed;
			if(!o.color) o.color = _.color;
			if(!o.shape) o.shape = _.shape;
			if(!o.width) o.width = _.width;
			if(!o.outline && o.outline !== 0) o.outline = _.outline;
			if(!o.size) o.size = _.size;
			if(!o.direction) o.direction = _.direction;
			if(!o.flash && o.flash !== 0) o.flash = _.flash;
			if(!o.se) o.se = _.se;
			if(!o.image) o.image = _.image;
			else _.loadImage(o.image);
			if(!o.bi) o.bi = _.bi;
			else _.loadImage(o.bi)
			if(!o.opacity && o.opacity !== 0) o.opacity = _.opacity;
			if(!o.target) o.target = _.target;
			if(!o.rt) o.rt = _.rt;

			if(o.image.trim().length > 0) o.shape = 'image';
		}
	};

	_.notDefault = function() {
		return _.default === 'actor' || _.default === 'class' || _.default === 'weapon';
	}

	//-----------------------------------------------------------------------------
	// DataManager
	//-----------------------------------------------------------------------------

	var notetagsLoaded = false;
	var _DataManager_isDatabaseLoaded = DataManager.isDatabaseLoaded;
	DataManager.isDatabaseLoaded = function() {
		if(!_DataManager_isDatabaseLoaded.call(this)) return false;
		if(!notetagsLoaded) {
			_.loadNotetagsSkills($dataSkills);
			_.loadNotetagsEverythingElse($dataActors);
			_.loadNotetagsEverythingElse($dataWeapons);
			_.loadNotetagsEverythingElse($dataWeapons);
			notetagsLoaded = true;
		}
		return true;
	};

	//-----------------------------------------------------------------------------
	// Game_Temp
	//-----------------------------------------------------------------------------

	var _Game_Temp_initialize = Game_Temp.prototype.initialize;
	Game_Temp.prototype.initialize = function() {
		_Game_Temp_initialize.call(this);
		this._tasDamageRation = 1;
		this[_.pass + "Temp Disable LogWindow"] = true;
	};

	Object.defineProperty(Game_Temp.prototype, 'tas_power', {
		get: function() {
			return this._tasDamageRation;
		},
		set: function(value) {
			this._tasDamageRation = Number(value).clamp(0, 999);
		},
		configurable: true
	});

	Game_Temp.prototype.getTemporarilyDisableLogWindow = function() {
		return this[_.pass + "Temp Disable LogWindow"];
	};

	Game_Temp.prototype.setTemporarilyDisableLogWindow = function(bool) {
		this[_.pass + "Temp Disable LogWindow"] = bool;
	};

	//-----------------------------------------------------------------------------
	// Scene_Battle
	//-----------------------------------------------------------------------------

	var _Scene_Battle_createAllWindows = Scene_Battle.prototype.createAllWindows;
	Scene_Battle.prototype.createAllWindows = function() {
		_Scene_Battle_createAllWindows.call(this);
		this._tasAttack = new TimedAttackSystem(0, 0);
		this._spriteset.addChild(this._tasAttack);
		BattleManager.setTASAttack(this._tasAttack);

		if(_.xAlign === 'left') this._tasAttack._window.x = 0;
		else if(_.xAlign === 'right') this._tasAttack._window.x = Graphics.width - this._tasAttack._window.width;
		else this._tasAttack._window.x = (Graphics.width/2) - (this._tasAttack._window.width/2);

		if(_.yAlign === 'top') this._tasAttack._window.y = 0;
		else if(_.yAlign === 'bottom') this._tasAttack._window.y = Graphics.height - this._tasAttack._window.height;
		else this._tasAttack._window.y = (Graphics.height/2) - (this._tasAttack._window.height/2);

		this._tasAttack._window.x += eval(_.xPos);
		this._tasAttack._window.y += eval(_.yPos);
	};

	//-----------------------------------------------------------------------------
	// BattleManager
	//-----------------------------------------------------------------------------

	var _BattleManager_initMembers = BattleManager.initMembers;
	BattleManager.initMembers = function() {
		_BattleManager_initMembers.call(this);
		this[_.pass + "Allow TAS"] = [true, true];
	};

	BattleManager.setTASAttack = function(tas) {
		this._tasAttackFrameWindow = tas;
	};

	var _BattleManager_startAction = BattleManager.startAction;
	BattleManager.startAction = function() {
		_BattleManager_startAction.call(this);
		if(this._subject.isActor() && this._subject.currentAction() && this._subject.currentAction().makeTargets()) {
			var subject = this._subject;
			var action = subject.currentAction();
			var targets = action.makeTargets();
			this[_.pass + "Temp Subject"] = subject;
			this[_.pass + "Temp Action"] = action;
			this[_.pass + "Temp Targets"] = targets;
			$gameTemp.setTemporarilyDisableLogWindow(true);
			this._logWindow.push('performActionStart', subject, action);
		}
	};

	BattleManager.checkIfTASActionAllowed = function() {
		return this._subject.isActor() && this[_.pass + "Temp Subject"];
	};

	if(Imported.YEP_BattleEngineCore) {
		var _BattleManager_updatePhase = BattleManager.updatePhase;
		BattleManager.updatePhase = function() {
			if(!this._action.item().meta.isUsingTimedAttackActionSequences && this.checkIfTASActionAllowed() && (this._action.item().meta["SRD TAS"] || _.notDefault()) && this[_.pass + "Allow TAS"][0]) {
				if(this[_.pass + "Allow TAS"][1]) {
					if(this._action.item().meta["SRD TAS"].type === "actor" || (_.default === 'actor' && !this._action.item().meta["SRD TAS"])) {
						if(this._subject.actor().meta["SRD TAS"]) {
							this._tasAttackFrameWindow.setItem(this._subject.actor().meta["SRD TAS"]);
							this._tasAttackFrameWindow.open();
							this._tasAttackFrameWindow.start();
							this[_.pass + "Allow TAS"][1] = false;
						} else {
							this.endTASAttackThing();
						}
					} else if(this._action.item().meta["SRD TAS"].type === "class" || (_.default === 'class' && !this._action.item().meta["SRD TAS"])) {
						if(this._subject.currentClass() && this._subject.currentClass().meta["SRD TAS"]) {
							this._tasAttackFrameWindow.setItem(this._subject.currentClass().meta["SRD TAS"]);
							this._tasAttackFrameWindow.open();
							this._tasAttackFrameWindow.start();
							this[_.pass + "Allow TAS"][1] = false;
						} else {
							this.endTASAttackThing();
						}
					} else if(this._action.item().meta["SRD TAS"].type === "weapon" || (_.default === 'weapon' && !this._action.item().meta["SRD TAS"])) {
						if(this._subject.weapons()[0] && this._subject.weapons()[0].meta["SRD TAS"]) {
							this._tasAttackFrameWindow.setItem(this._subject.weapons()[0].meta["SRD TAS"]);
							this._tasAttackFrameWindow.open();
							this._tasAttackFrameWindow.start();
							this[_.pass + "Allow TAS"][1] = false;
						} else {
							this.endTASAttackThing();
						}
					} else if(this._action.item().meta["SRD TAS"]) {
						this._tasAttackFrameWindow.setItem(this._action.item().meta["SRD TAS"]);
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
				_BattleManager_updatePhase.call(this);
			}
		};
	} else {
		var _BattleManager_updateAction = BattleManager.updateAction;
		BattleManager.updateAction = function() {
			if(this.checkIfTASActionAllowed() && (this._action.item().meta["SRD TAS"] || _.notDefault()) && this[_.pass + "Allow TAS"][0]) {
				if(this[_.pass + "Allow TAS"][1]) {
					if(this._action.item().meta["SRD TAS"].type === "actor" || (_.default === 'actor' && !this._action.item().meta["SRD TAS"])) {
						if(this._subject.actor().meta["SRD TAS"]) {
							this._tasAttackFrameWindow.setItem(this._subject.actor().meta["SRD TAS"]);
							this._tasAttackFrameWindow.open();
							this._tasAttackFrameWindow.start();
							this[_.pass + "Allow TAS"][1] = false;
						} else {
							this.endTASAttackThing();
						}
					} else if(this._action.item().meta["SRD TAS"].type === "class" || (_.default === 'class' && !this._action.item().meta["SRD TAS"])) {
						if(this._subject.currentClass() && this._subject.currentClass().meta["SRD TAS"]) {
							this._tasAttackFrameWindow.setItem(this._subject.currentClass().meta["SRD TAS"]);
							this._tasAttackFrameWindow.open();
							this._tasAttackFrameWindow.start();
							this[_.pass + "Allow TAS"][1] = false;
						} else {
							this.endTASAttackThing();
						}
					} else if(this._action.item().meta["SRD TAS"].type === "weapon" || (_.default === 'weapon' && !this._action.item().meta["SRD TAS"])) {
						if(this._subject.weapons()[0] && this._subject.weapons()[0].meta["SRD TAS"]) {
							this._tasAttackFrameWindow.setItem(this._subject.weapons()[0].meta["SRD TAS"]);
							this._tasAttackFrameWindow.open();
							this._tasAttackFrameWindow.start();
							this[_.pass + "Allow TAS"][1] = false;
						} else {
							this.endTASAttackThing();
						}
					} else if(this._action.item().meta["SRD TAS"]) {
						this._tasAttackFrameWindow.setItem(this._action.item().meta["SRD TAS"]);
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
				_BattleManager_updateAction.call(this);
			}
		};
	}

	var _BattleManager_endAction = BattleManager.endAction;
	BattleManager.endAction = function() {
		this[_.pass + "Allow TAS"] = [true, true];
		this[_.pass + "Boolean 1"] = false;
		$gameTemp.tas_power = 1;
		_BattleManager_endAction.call(this);
	};

	BattleManager.endTASAttackThing = function() {
		this[_.pass + "Allow TAS"][0] = false;
	};

	//-----------------------------------------------------------------------------
	// Window_BattleLog
	//-----------------------------------------------------------------------------

	var _Window_BattleLog_startAction = Window_BattleLog.prototype.startAction;
	Window_BattleLog.prototype.startAction = function(subject, action, targets) {
		if(!$gameTemp.getTemporarilyDisableLogWindow() || !subject.isActor()) {
			_Window_BattleLog_startAction.call(this, subject, action, targets);
		}
	};

	var _Window_BattleLog_showAnimation = Window_BattleLog.prototype.showAnimation;
	Window_BattleLog.prototype.showAnimation = function(subject, targets, animationId) {
		if($gameTemp.tas_power > 0 || !subject.isActor()) {
			_Window_BattleLog_showAnimation.call(this, subject, targets, animationId);
		}
	};

	//-----------------------------------------------------------------------------
	// TimedAttackSystem
	//-----------------------------------------------------------------------------

	TimedAttackSystem.prototype = Object.create(Stage.prototype);
	TimedAttackSystem.prototype.constructor = TimedAttackSystem;

	TimedAttackSystem.prototype.initialize = function(x, y) {
		var width = this.windowWidth();
		var height = this.windowHeight();
		Stage.prototype.initialize.call(this);
		this._window = new Window_Base(x, y, width, height);
		this._window.openness = 0;
		this._content = new Sprite(new Bitmap(Graphics.width, Graphics.height));
		this.addChild(this._window);
		this.addChild(this._content);
		this.openness = 0;
		this._notPressed = true;
		this._update = false;
		this._item = null;
		this._type = null;
		this._currentScale = 0;
	};

	Object.defineProperty(TimedAttackSystem.prototype, 'contents', {
		get: function() {
			return this._window.contents;
		},
		configurable: true
	});

	TimedAttackSystem.prototype.setItem = function(item) {
		this._item = item;
		this._type = item.type;
		this.loadItem(item);
	};

	TimedAttackSystem.prototype.lineHeight = function() {
		return 30;
	};
	TimedAttackSystem.prototype.gaugeBackColor = function() {
		return "#cccccc";
	};
	TimedAttackSystem.prototype.textWidth = function(text) {
		return this.contents.measureTextWidth(text);
	};
	TimedAttackSystem.prototype.fittingHeight = function(numLines) {
		return numLines * this.lineHeight() + Window_Base.prototype.standardPadding.call(this) * 2;
	};

	TimedAttackSystem.prototype.loadItem = function(item) {
		if(item.type === _.TAS_ID) {
			this._flash = item.flash;
			this._size = item.size;
			this._shape = item.shape;
			this._image = item.image;
			this._background = item.bi;
			this._se = item.se;
			this._target = item.target;
			this._rt = item.rt;
			this._xPosition = 0;
			this._xSpeed = 1;
			var direction = item.direction;
			if(direction === 'random') direction = (Math.random() < 0.5) ? 'right' : 'left';
			if(direction === 'right') {
				this._xPosition = 0;
				this._xSpeed = 1;
			}
			else if(direction === 'left') {
				this._xPosition = Graphics.width;
				this._xSpeed = -1;
			}
			this._origin = this._xPosition;
			this._window.opacity = this._item.opacity;
		}
	};

	TimedAttackSystem.prototype.start = function() {
		this.loadStart();
		this._update = true;
		this._frame = 0;
	};

	TimedAttackSystem.prototype.loadStart = function() {
		if(this._item.type === _.TAS_ID) {
			this._notPressed = true;
			this._flashTime = 0;
			this._window.openness = 255;
		}
	};

	TimedAttackSystem.prototype.open = function() {
	};

	TimedAttackSystem.prototype.close = function() {
		this._update = false;
		this._item = null;
		this._window.openness = 0;
		this._content.bitmap.clear();
	};

	TimedAttackSystem.prototype.update = function() {
		if(this._update && this._item) {
			if(this._type) this.updateGames();
			this._frame++;
		}
	};

	TimedAttackSystem.prototype.updateGames = function() {
		if(this._type === _.TAS_ID) this.playDefaultGame();
	};

	TimedAttackSystem.prototype.playDefaultGame = function() {
		//Movement
		if(this._notPressed) {
			var f = this._frame;
			this._xPosition += Number(eval(this._item.speed) * this._xSpeed);
			if(this._xPosition > this.windowWidth() || this._xPosition < -(this._item.width)) {
				if(this._rt === 'repeat') {
					this._xPosition = this._origin;
				} else if(this._rt === 'reverse') {
					this._xSpeed *= (-1);
				} else {
					this.setPower(0);
					this._flashTime = 45;
				}
			}
		} else {
			this._flashTime++;
		}
		if(this._flashTime === 45) {
			BattleManager.endTASAttackThing();
			this.close();
		}

		//Draw
		this._window.contents.clear();
		var bit = _.loadImage(this._background);
		this._window.contents.blt(bit, 0, 0, bit.width, bit.height, 0, 0, this._window.contentsWidth(), this._window.contentsHeight());
		if(this._flashTime % this._flash < Math.floor(this._flash / 2)) {
			if(this._shape === 'image' && this._image != undefined) {
				var bitmap = _.loadImage(this._image);
				this._window.contents.blt(bitmap, 0, 0, bitmap.width, bitmap.height, (this._xPosition - (bitmap.width / 2)), 0);
			} else if(this._shape === 'rectangle') {
				this.contents.fillRect(this._xPosition - (this._item.width/2), 0, this._item.width, 
					this.height - (this._window.standardPadding() * 2), this._item.outline);
				this.contents.fillRect(this._xPosition + this._size - (this._item.width/2), 0 + this._size, 
					this._item.width - (this._size*2), this.height - (this._window.standardPadding() * 2) - (this._size*2), this._item.color);
			} else if(this._shape === 'oval') {
				var height = this.height - (this._window.standardPadding() * 2);
				this._window.contents.drawCircle(this._xPosition - (this._item.width/2), height/2, this._item.width, this._item.outline);
				this._window.contents.drawCircle(this._xPosition + (this._size/2) - 1 - (this._item.width/2), 
					(height/2) + (this._size/2) - 1, this._item.width - (this._size), this._item.color);
			}
		}

		//Input
		if(eval(_.activateCondition) && this._notPressed) {
			this._notPressed = false;
			AudioManager.playSe({"name":this._se,"pan":0,"pitch":100,"volume":100});
			var x = this._xPosition;
			var entireLength = this.width;
			var target = eval(this._target);
			this.setPower(Number(1 - (Math.abs(target - x) / (entireLength - target))));
		}
	};

	TimedAttackSystem.prototype.setPower = function(value) {
		$gameTemp.tas_power = value;
		this.showResults();
	};

	TimedAttackSystem.prototype.showResults = function() {
	};

	TimedAttackSystem.prototype.windowWidth = function() {
		return eval(_.myWidth);
	};

	TimedAttackSystem.prototype.windowHeight = function() {
		return eval(_.myHeight);
	};

})(SRD.TimedAttack);