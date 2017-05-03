/*: 
 * @plugindesc Adds a new Timed Attack system that is similar to a clock hand revolving around the face of the clock.
 * @author SumRndmDde
 *
 * @param == Default Props. ==
 * @default
 *
 * @param Sound Effect
 * @desc The default Sound Effect when one is not specified.
 * Input filename of Sound Effect in /audio/se/
 * @default Sword2
 *
 * @param Background Image
 * @desc The default Background Image when one is not specified.
 * Input filename of Background Image in /img/SumRndmDde/tas/
 * @default
 *
 * @param Repeat Type
 * @desc The default Repeat Type when one is not specified.
 * The choices are: None, Repeat, Reverse
 * @default None
 *
 * @param Speed
 * @desc The default Speed when one is not specified.
 * Input a Positive Number or JavaScript Formula
 * @default 5
 *
 * @param Length
 * @desc The default Speed when one is not specified.
 * Input a Positive Number or JavaScript Formula
 * @default 60
 *
 * @param Height
 * @desc The default Height when one is not specified.
 * Input a Positive Number
 * @default 150
 *
 * @param Thickness
 * @desc The default Ring Thickness when one is not specified.
 * Input a Positive Number
 * @default 4
 *
 * @param Start Position
 * @desc The default Start Position when one is not specified.
 * Input a Positive Angular Degree
 * @default 0
 *
 * @param End Position
 * @desc The default Start Position when one is not specified.
 * Input a Positive Angular Degree
 * @default 360
 *
 * @param Hand Color
 * @desc The default Hand Color when one is not specified.
 * Input a JavaScript or HTML Color
 * @default #ffffff
 *
 * @param Base Color
 * @desc The default Base Color when one is not specified.
 * Input a JavaScript or HTML Color
 * @default #000000
 *
 * @param Fade Color
 * @desc The default Fade Color when one is not specified.
 * Input a JavaScript or HTML Color
 * @default #cccccc
 *
 * @param Background Color
 * @desc The default Background Color when one is not specified.
 * Input a JavaScript or HTML Color
 * @default #5e6b6e
 *
 * @param Outline Color
 * @desc The default Background Color when one is not specified.
 * Input a JavaScript or HTML Color
 * @default #000000
 *
 * @param Outline Width
 * @desc The default Background Color when one is not specified.
 * Input a JavaScript or HTML Color
 * @default 2
 *
 * @param Target 1
 * @desc The default Target 1 when one is not specified.
 * Use the formula: start, finish, color, power
 * @default 165, 195, #F25B60, 1
 *
 * @param Target 2
 * @desc The default Target 2 when one is not specified.
 * Use the formula: start, finish, color, power
 * @default
 *
 * @param Target 3
 * @desc The default Target 3 when one is not specified.
 * Use the formula: start, finish, color, power
 * @default
 *
 * @param Target 4
 * @desc The default Target 4 when one is not specified.
 * Use the formula: start, finish, color, power
 * @default
 *
 * @param Target 5
 * @desc The default Target 5 when one is not specified.
 * Use the formula: start, finish, color, power
 * @default
 *
 * @param Cooldown
 * @desc The default Cooldown when one is not specified.
 * Input a Positive Number
 * @default 16
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
 * Timed Attack: Clock
 * Version 1.10
 * SumRndmDde
 *
 *
 * This Plugin requires the Timed Attack Core Plugin (SRD_TimedAttackCore)
 * http://sumrndm.site/timed-attack-core
 *
 * This is a Timed Attack that is based off of the movement of a hand of a
 * clock that revolves around the face of the clock.
 *
 * The goal for the Player is to press the "OK" button or tap the screen
 * when the "clock hand" is on top of the target area.
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
 *  How to Set a Skill to Use a Timed Attack (Clock)
 * ==========================================================================
 *
 * Use the Notetag:
 *
 * <Timed Attack: clock>
 * <End Timed Attack>
 *
 * Setting those in a Skill's notebox will activate the "Timed Attack System"
 * for that Skill.
 *
 * The part that says "clock" can be changed to have other types of "Timed
 * Attacks" be used.
 *
 *
 * ==========================================================================
 *  How to Set up Targets
 * ==========================================================================
 *
 * <Timed Attack: clock>
 * Target 1: 150, 180, #00ff00, 1
 * Target 2: 220, 260, #0000ff, 1
 * <End Timed Attack>
 *
 * As shown above, one can set up multiple targets per each Clock Timed Attack.
 *
 * There can be a maximum of 5 Targets per each Timed Attack.
 *
 * Each target has four properties:
 * - Start Position
 * - End Position
 * - Color
 * - Power
 *
 * They must be seperated with commas in that order.
 *
 * The Start/End Positions are based off of angular degrees (example: 0 - 360)
 *
 * The Color can just be any JavaScript of HTML color
 *
 * The Power determines how effective hitting this part will be.
 * 1 is about the default amount, but it can be given more of less power.
 *
 *
 * ==========================================================================
 *  Clock Timed Attack Properties
 * ==========================================================================
 *
 * You can manipulate the properties of each Timed Attack by adding them
 * in the Notetags. For example:
 *
 * <Timed Attack: clock>
 * Speed: 2
 * Cooldown: 5
 * Start Position: 145
 * End Position: 200
 * <End Timed Attack>
 *
 * As you can see, there are a couple of factors you can use to even make one
 * individual Timed Attack different for each Skill it is used with.
 *
 *
 * Here are all the properties for Clock Timed Attack:
 *
 * Sound Effect:     (Input filename of Sound Effect in /audio/se/)
 * Background Image: (Input filename of for in /img/SumRndmDde/tas/)**
 * Repeat Type:      (Input one of the following: None, Repeat, Reverse)
 * Speed:            (Input a Positive Number or JavaScript Formula)*
 * Height:           (Input a Positive Number)
 * Start Position:   (Input a Positive Angular Degree)
 * End Position:     (Input a Positive Angular Degree)
 * Length:           (Input a Positive Number)
 * Hand Color:       (Input a JavaScript or HTML Color)
 * Base Color:       (Input a JavaScript or HTML Color)
 * Fade Color:       (Input a JavaScript or HTML Color)
 * Background Color: (Input a JavaScript or HTML Color)
 * Thickness:        (Input a Positive Number)
 * Cooldown:         (Input a Positive Number)
 * Flash Rate:       (Input a Positive Number)
 * Flash Time:       (Input a Positive Number)
 *
 * *The JavaScript Formula can use 'f' to represent "Frame Count".
 * **Leave blank to use default clock image
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
Imported["SumRndmDde Timed Attack Clock"] = 1.10;

if(Imported["SumRndmDde Timed Attack Core"]) {

	if(!(Imported["SumRndmDde Timed Attack Core"] >= 1.20)) {
		DataManager.loadMapData = function(mapId) {
		    if (mapId > 0) {
		        $dataMap = {
					"autoplayBgm":false,"autoplayBgs":false,"battleback1Name":"","battleback2Name":"","bgm":0,"bgs":0,"disableDashing":false,"displayName":"","encounterList":[],"encounterStep":30,"height":1,"note":"<General Location: SumRndmDde's Basement>","parallaxLoopX":false,"parallaxLoopY":false,"parallaxName":"","parallaxShow":true,"parallaxSx":0,"parallaxSy":0,"scrollType":0,"specifyBattleback":false,"tilesetId":1,"width":1,
					"data":[0,0,0,0,0,0],
					"events":[null, {"id":1,"name":"EV001","note":"","pages":[{"conditions":{"actorId":1,"actorValid":false,"itemId":1,"itemValid":false,"selfSwitchCh":"A","selfSwitchValid":false,"switch1Id":1,"switch1Valid":false,"switch2Id":1,"switch2Valid":false,"variableId":1,"variableValid":false,"variableValue":0},"directionFix":false,"image":{"characterIndex":0,"characterName":"","direction":2,"pattern":0,"tileId":0},"list":[{"code":101,"indent":0,"parameters":["",0,0,2]},{"code":401,"indent":0,"parameters":["Hello."]},{"code":101,"indent":0,"parameters":["",0,0,2]},{"code":401,"indent":0,"parameters":["Are you surprised? \\!What did you expect?"]},{"code":401,"indent":0,"parameters":["\\!With all those Plugins you have installed, it's only"]},{"code":401,"indent":0,"parameters":["a matter of time something weird happens."]},{"code":101,"indent":0,"parameters":["",0,0,2]},{"code":401,"indent":0,"parameters":["But enough messing around, \\!I'm here to let you know"]},{"code":401,"indent":0,"parameters":["that you need to update the following Plugin:"]},{"code":401,"indent":0,"parameters":["\\!\\.T\\.i\\.m\\.e\\.d \\.A\\.t\\.t\\.a\\.c\\.k \\.C\\.o\\.r\\.e"]},{"code":101,"indent":0,"parameters":["",0,0,2]},{"code":401,"indent":0,"parameters":["Simply download it again and replace the old version"]},{"code":401,"indent":0,"parameters":["with the one you just downloaded in your JS folder."]},{"code":401,"indent":0,"parameters":["\\!If you don't\\..\\..\\..\\!then I guess I'll just have to"]},{"code":401,"indent":0,"parameters":["keep you here forever! >:D"]},{"code":101,"indent":0,"parameters":["",0,0,2]},{"code":401,"indent":0,"parameters":["Thanks for reading, "]},{"code":401,"indent":0,"parameters":["\\!  ~ SumRndmDde"]},{"code":123,"indent":0,"parameters":["A",0]},{"code":0,"indent":0,"parameters":[]}],"moveFrequency":3,"moveRoute":{"list":[{"code":0,"parameters":[]}],"repeat":true,"skippable":false,"wait":false},"moveSpeed":3,"moveType":0,"priorityType":0,"stepAnime":false,"through":false,"trigger":3,"walkAnime":true},{"conditions":{"actorId":1,"actorValid":false,"itemId":1,"itemValid":false,"selfSwitchCh":"A","selfSwitchValid":true,"switch1Id":1,"switch1Valid":false,"switch2Id":1,"switch2Valid":false,"variableId":1,"variableValid":false,"variableValue":0},"directionFix":false,"image":{"characterIndex":0,"characterName":"","direction":2,"pattern":0,"tileId":0},"list":[{"code":0,"indent":0,"parameters":[]}],"moveFrequency":3,"moveRoute":{"list":[{"code":0,"parameters":[]}],"repeat":true,"skippable":false,"wait":false},"moveSpeed":3,"moveType":0,"priorityType":0,"stepAnime":false,"through":false,"trigger":0,"walkAnime":true}],"x":0,"y":0}]
				};
		    } else {
		        this.makeEmptyMap();
		    }
		};

		DataManager.setupNewGame = function() {
		    this.createGameObjects();
		    this.selectSavefileForNewGame();
		    $gameParty.setupStartingMembers();
		    $gamePlayer.reserveTransfer($dataSystem.startMapId,
		        0, 0);
		    Graphics.frameCount = 0;
		};
	}

SRD.TimedAttackClock = SRD.TimedAttackClock || {};

(function(_, $) {

	"use strict";

	_.TAS_ID = 'clock';
	
	_.se = String(PluginManager.parameters('SRD_TimedAttack_Clock')['Sound Effect']);
	_.image = String(PluginManager.parameters('SRD_TimedAttack_Clock')['Background Image']);
	_.rt = String(PluginManager.parameters('SRD_TimedAttack_Clock')['Repeat Type']).trim().toLowerCase();
	_.speed = String(PluginManager.parameters('SRD_TimedAttack_Clock')['Speed']);
	_.height = parseInt(PluginManager.parameters('SRD_TimedAttack_Clock')['Height']);
	_.start = parseInt(PluginManager.parameters('SRD_TimedAttack_Clock')['Start Position']);
	_.end = parseInt(PluginManager.parameters('SRD_TimedAttack_Clock')['End Position']);
	_.length = parseInt(PluginManager.parameters('SRD_TimedAttack_Clock')['Length']);
	_.color = String(PluginManager.parameters('SRD_TimedAttack_Clock')['Hand Color']);
	_.baseColor = String(PluginManager.parameters('SRD_TimedAttack_Clock')['Base Color']);
	_.fadeColor = String(PluginManager.parameters('SRD_TimedAttack_Clock')['Fade Color']);
	_.backColor = String(PluginManager.parameters('SRD_TimedAttack_Clock')['Background Color']);
	_.outColor = String(PluginManager.parameters('SRD_TimedAttack_Clock')['Outline Color']);
	_.outWidth = parseInt(PluginManager.parameters('SRD_TimedAttack_Clock')['Outline Width']);
	_.thickness = parseInt(PluginManager.parameters('SRD_TimedAttack_Clock')['Thickness']);
	_.target1 = String(PluginManager.parameters('SRD_TimedAttack_Clock')['Target 1']);
	_.target2 = String(PluginManager.parameters('SRD_TimedAttack_Clock')['Target 2']);
	_.target3 = String(PluginManager.parameters('SRD_TimedAttack_Clock')['Target 3']);
	_.target4 = String(PluginManager.parameters('SRD_TimedAttack_Clock')['Target 4']);
	_.target5 = String(PluginManager.parameters('SRD_TimedAttack_Clock')['Target 5']);
	_.cool = parseInt(PluginManager.parameters('SRD_TimedAttack_Clock')['Cooldown']);
	_.flash = parseInt(PluginManager.parameters('SRD_TimedAttack_Clock')['Flash Rate']);
	_.time = parseInt(PluginManager.parameters('SRD_TimedAttack_Clock')['Flash Time']);

	var _$_organizeInfo = $.organizeInfo;
	$.organizeInfo = function(o) {
    	_$_organizeInfo.call(this, o);
    	if(o.type === _.TAS_ID) {
    		if(o.info.match(/Sound[ ]?Effect:\s*(.*)/im)) o.se = String(RegExp.$1);
    		if(o.info.match(/Background[ ]?Image:\s*(.*)/im)) o.image = String(RegExp.$1);
    		if(o.info.match(/Repeat[ ]?Type:\s*(.*)/im)) o.rt = String(RegExp.$1).trim().toLowerCase();
    		if(o.info.match(/Speed:\s*(.*)/im)) o.speed = String(RegExp.$1);
    		if(o.info.match(/Length:\s*(.*)/im)) o.length = parseInt(RegExp.$1);
    		if(o.info.match(/Height:\s*(.*)/im)) o.height = parseInt(RegExp.$1);
    		if(o.info.match(/Hand\s*Color:\s*(.*)/im)) o.color = String(RegExp.$1);
    		if(o.info.match(/Base\s*Color:\s*(.*)/im)) o.baseColor = String(RegExp.$1);
    		if(o.info.match(/Fade\s*Color:\s*(.*)/im)) o.fadeColor = String(RegExp.$1);
    		if(o.info.match(/Background\s*Color:\s*(.*)/im)) o.backColor = String(RegExp.$1);
    		if(o.info.match(/Outline\s*Color:\s*(.*)/im)) o.outColor = String(RegExp.$1);
    		if(o.info.match(/Outline\s*Width:\s*(.*)/im)) o.outWidth = parseInt(RegExp.$1);
    		if(o.info.match(/Start[ ]?Position:\s*(.*)/im)) o.start = parseInt(RegExp.$1);
    		if(o.info.match(/End[ ]?Position:\s*(.*)/im)) o.finish = parseInt(RegExp.$1);
    		if(o.info.match(/Thickness:\s*(.*)/im)) o.thickness = parseInt(RegExp.$1);
    		o.targets = [];
    		if(o.info.match(/Target\s*1:\s*(.*)/im)) o.targets[0] = String(RegExp.$1);
    		if(o.info.match(/Target\s*2:\s*(.*)/im)) o.targets[1] = String(RegExp.$1);
    		if(o.info.match(/Target\s*3:\s*(.*)/im)) o.targets[2] = String(RegExp.$1);
    		if(o.info.match(/Target\s*4:\s*(.*)/im)) o.targets[3] = String(RegExp.$1);
    		if(o.info.match(/Target\s*5:\s*(.*)/im)) o.targets[4] = String(RegExp.$1);
    		if(o.info.match(/Cooldown:\s*(.*)/im)) o.cool = parseInt(RegExp.$1);
    		if(o.info.match(/Flash[ ]?Rate:\s*(.*)/im)) o.flash = parseInt(RegExp.$1);
    		if(o.info.match(/Flash[ ]?Time:\s*(.*)/im)) o.time = parseInt(RegExp.$1);
    		if(!o.se) o.se = _.se;
    		if(!o.image) o.image = _.image;
    		if(!o.rt) o.rt = _.rt;
    		if(!o.speed) o.speed = _.speed;
    		if(!o.length) o.length = _.length;
    		if(!o.height) o.height = _.height;
    		if(!o.color) o.color = _.color;
    		if(!o.baseColor) o.baseColor = _.baseColor;
    		if(!o.fadeColor) o.fadeColor = _.fadeColor;
    		if(!o.backColor) o.backColor = _.backColor;
    		if(!o.outColor) o.outColor = _.outColor;
    		if(!o.outWidth && o.outWidth !== 0) o.outWidth = _.outWidth;
    		if(!o.start && o.start !== 0) o.start = _.start;
    		if(!o.end && o.end !== 0) o.end = _.end;
    		if(!o.thickness) o.thickness = _.thickness;
    		if(!o.targets[0]) o.targets[0] = _.target1;
    		if(!o.targets[1]) o.targets[1] = _.target2;
    		if(!o.targets[2]) o.targets[2] = _.target3;
    		if(!o.targets[3]) o.targets[3] = _.target4;
    		if(!o.targets[4]) o.targets[4] = _.target5;
    		if(!o.cool) o.cool = _.cool;
    		if(!o.flash && o.flash !== 0) o.flash = _.flash;
    		if(!o.time && o.time !== 0) o.time = _.time;
    	}
    };

    //-----------------------------------------------------------------------------
    // Bitmap
    //-----------------------------------------------------------------------------

	Bitmap.prototype.drawHand = function(x, y, pos, length, width, color) {
		var ctx = this._context;
		ctx.save();
		ctx.fillStyle = color;
	    ctx.lineCap = "round";
	    var secHandLength = length;
		var angle = ((Math.PI * 2) * (pos / 360));
		ctx.lineWidth = width;
		ctx.beginPath();
		ctx.moveTo(x, y);
		ctx.lineTo((x + Math.cos(angle) * secHandLength / 1.1), y + Math.sin(angle) * secHandLength / 1.1);
		ctx.strokeStyle = color;
		ctx.stroke();
	    ctx.restore();
    	this._setDirty();
	};

	Bitmap.prototype.drawPizzaSlice = function(x, y, radius, start, end, color) {
	    var context = this._context;
	    context.save();
	    context.fillStyle = color;
		context.strokeStyle = color;
	    context.beginPath();
	    context.arc(x, y, radius, start, end, false);
	    context.lineTo(x, y);
	    context.lineTo(x + Math.cos(start), y + Math.sin(start));
	    context.fill();
	    context.restore();
	    this._setDirty();
	};

	//-----------------------------------------------------------------------------
    // TimedAttackSystem
    //-----------------------------------------------------------------------------

    var _TimedAttackSystem_loadItem = TimedAttackSystem.prototype.loadItem;
    TimedAttackSystem.prototype.loadItem = function(item) {
    	_TimedAttackSystem_loadItem.call(this, item);
		if(item.type === _.TAS_ID) {
			this._image = item.image;
			this._radius = item.radius;
			this._startRadius = item.start;
			this._endRadius = item.end;
			this._xPosition = this._startRadius;
			this._length = item.length;
			this._height = item.height;
			this._flash = item.flash;
			this._time = item.time;
			this._color = item.color;
			this._fadeColor = item.fadeColor;
			this._baseColor = item.baseColor;
			this._targetColor = item.targetColor;
			this._backColor = item.backColor;
			this._outColor = item.outColor;
			this._outWidth = item.outWidth;
			this._thickness = item.thickness;
			this._rt = item.rt;
			this._mul = 1;

			this._targets = [];
			this._targetCount = 0;
			this._setTargets = [];
			for(var i = 0; i < item.targets.length; i++) {
				if(item.targets[i].trim().length > 0) {
					var info = item.targets[i].match(/\s*(.*)\s*,\s*(.*)\s*,\s*(rgba\(.*\))\s*,\s*([\d\.]+)\s*/);
					if(!info) info = item.targets[i].match(/\s*(.*)\s*,\s*(.*)\s*,\s*(rgb\(.*\))\s*,\s*([\d\.]+)\s*/);
					if(!info) info = item.targets[i].match(/\s*(.*)\s*,\s*(.*)\s*,\s*(.*)\s*,\s*([\d\.]+)\s*/);
					this._targets[i] = [];
					this._targets[i][0] = parseInt(eval(info[1]));
					this._targets[i][1] = parseInt(eval(info[2]));
					this._targets[i][2] = String(info[3]);
					this._targets[i][3] = parseFloat(info[4]);
					this._targetCount++;
				}
			}
		}
	};

	var _TimedAttackSystem_loadStart = TimedAttackSystem.prototype.loadStart;
	TimedAttackSystem.prototype.loadStart = function() {
		_TimedAttackSystem_loadStart.call(this);
		if(this._item.type === _.TAS_ID) {
			this.opacity = 0;
			this.contents.clear();
			this._sprActor = BattleManager._spriteset._actorSprites[BattleManager._subject.index()];
			this._x = (this._sprActor.x);
			this._y = (this._sprActor.y - this._height);
			this._notPressed = true;
		    this._flashTime = 0;
		    this._cooldown = 0;
		}
	};

	var _TimedAttackSystem_updateGames = TimedAttackSystem.prototype.updateGames;
	TimedAttackSystem.prototype.updateGames = function() {
	    _TimedAttackSystem_updateGames.call(this);
	    if(this._type === _.TAS_ID) this.playClockGame();
	};

	TimedAttackSystem.prototype.playClockGame = function() {
		//Movement
	    if(this._notPressed) {
	    	var f = this._frame;
	    	this._xPosition += Number(eval(this._item.speed) * this._mul);
	    	if(this._xPosition <= this._startRadius || this._xPosition >= this._endRadius) {
	    		if(this._rt === 'repeat') {
		    		this._xPosition = this._startRadius;
		    	} else if(this._rt === 'reverse') {
		    		this._mul *= (-1);
		    	} else {
		    		this.setPower(0);
		    		this._flashTime = this._time;
		    		this._notPressed = false;
		    	}
	    	}
	    } else {
	    	this._flashTime++;
	    }

	    //Draw
	    this._x = (this._sprActor.x);
		this._y = (this._sprActor.y - this._height);
	    this._content.bitmap.clear();
	    if(this._image.trim().length > 0 && this._xPosition > 0) {
			var bitmap = $.loadImage(this._image);
    		this._content.bitmap.blt(bitmap, 0, 0, bitmap.width, bitmap.height, 
    			this._x - (bitmap.width/2), this._y - (bitmap.height/2));
		} else {
			this._content.bitmap.drawCircle(this._x, this._y, this._length + this._outWidth, this._outColor);
			this._content.bitmap.drawCircle(this._x, this._y, this._length, this._backColor);
		}
		for(var i = 0; i < this._targets.length; i++) {
    		this._content.bitmap.drawPizzaSlice(this._x, this._y, this._length, this._targets[i][0] * (Math.PI / 180), this._targets[i][1] * (Math.PI / 180), this._targets[i][2]);
    	}
	    if(this._flashTime % this._flash < Math.floor(this._flash / 2)) {
	    	this._content.bitmap.drawHand(this._x, this._y, this._xPosition, this._length, this._thickness, this._color);
	    	for(var i = 0; i < this._setTargets.length; i++) {
	    		this._content.bitmap.drawHand(this._x, this._y, this._setTargets[i], this._length, this._thickness, this._fadeColor);
	    	}
	    }
	    this._content.bitmap.drawCircle(this._x, this._y, this._length / 10, this._baseColor)

	    if(this._flashTime >= this._time && !this._notPressed) {
	    	this._content.bitmap.clear();
	    	BattleManager.endTASAttackThing();
	    	this.close();
	    }

	    //Input
	    if(eval($.activateCondition) && this._notPressed && this._cooldown === 0) {
	    	if(this._targetCount > 0) this._targetCount--;
	    	this._setTargets.push(this._xPosition);
	    	AudioManager.playSe({"name":this._item.se,"pan":0,"pitch":100,"volume":100});
	    	if(this._targetCount <= 0) {
	    		this._notPressed = false;
	    		var temp = 0;
	    		for(var i = 0; i < this._setTargets.length; i++) {
	    			for(var j = 0; j < this._targets.length; j++) {
	    				if(this._setTargets[i] > this._targets[j][0] && this._setTargets[i] < this._targets[j][1]) {
	    					temp += this._targets[j][3];
	    				}
	    			}
	    		}
		    	this.setPower(temp / this._setTargets.length);
		    }
	    }
	    if(this._cooldown > 0) this._cooldown--;
	};

})(SRD.TimedAttackClock, SRD.TimedAttack);

} else alert("Please install 'SRD_TimedAttackCore' in order to use 'SRD_TimedAttack_Clock'.");