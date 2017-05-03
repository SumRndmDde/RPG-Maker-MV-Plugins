/*: 
 * @plugindesc Adds a new Timed Attack system involving circles that skrink and must be stopped at their smallest point.
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
 * @param Circle Image
 * @desc The default Circle Image when one is not specified.
 * Input filename of Circle Image in /img/SumRndmDde/tas/
 * @default
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
 * @param Color
 * @desc The default Color when one is not specified.
 * Input a JavaScript or HTML Color
 * @default Red
 *
 * @param Speed
 * @desc The default Speed when one is not specified.
 * Input a Positive Number or JavaScript Formula
 * @default 5
 *
 * @param Initial Radius
 * @desc The default Initial Radius when one is not specified.
 * Input a Positive Number
 * @default 200
 *
 * @param Ring Thickness
 * @desc The default Ring Thickness when one is not specified.
 * Input a Positive Number
 * @default 8
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
 * @param Time Limit
 * @desc The maximum amount of time a "repeat" can last.
 * Input a Positive Number; input 0 to disallow.
 * @default 0
 *
 * @help
 *
 * Timed Attack: Circle
 * Version 1.11
 * SumRndmDde
 *
 *
 * This Plugin requires the Timed Attack Core Plugin (SRD_TimedAttackCore)
 * http://sumrndm.site/timed-attack-core
 *
 * This is a Timed Attack based off of the system in Pokemon GO and a 
 * couple other games.
 *
 * The way it works is a circle around the Enemy appears, and it begins to
 * shrink. The Player must press the "OK" button before the circle 
 * completely disappears. The smaller the circle, the more power the Skill
 * will have.
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
 *  How to Set a Skill to Use a Timed Attack (Circle)
 * ==========================================================================
 *
 * Use the Notetag:
 *
 * <Timed Attack: circle>
 * <End Timed Attack>
 *
 * Setting those in a Skill's notebox will activate the "Timed Attack System"
 * for that Skill.
 *
 * The part that says "circle" can be changed to have other types of "Timed
 * Attacks" be used.
 *
 *
 * ==========================================================================
 *  Circle Timed Attack Properties
 * ==========================================================================
 *
 * You can manipulate the properties of each Timed Attack by adding them
 * in the Notetags. For example:
 *
 * <Timed Attack: circle>
 * Speed: 15
 * Color: #00FFFF
 * Outline Color: black
 * <End Timed Attack>
 *
 * As you can see, there are a couple of factors you can use to even make one
 * individual Timed Attack different for each Skill it is used with.
 *
 *
 * Here are all the properties for Circle Timed Attack:
 *
 * Sound Effect:     (Input filename of Sound Effect in /audio/se/)
 * Circle Image:     (Input filename of for in /img/SumRndmDde/tas/)**
 * Background Image: (Input filename of for in /img/SumRndmDde/tas/)
 * Repeat Type:      (Input one of the following: None, Repeat, Reverse)
 * Speed:            (Input a Positive Number or JavaScript Formula)*
 * Color:            (Input a JavaScript or HTML Color)
 * Initial Radius:   (Input a Positive Number)
 * Ring Thickness:   (Input a Positive Number)
 * Flash Rate:       (Input a Positive Number)
 * Flash Time:       (Input a Positive Number)
 *
 * *The JavaScript Formula can use 'f' to represent "Frame Count".
 * **Leave blank to use default circle image
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
Imported["SumRndmDde Timed Attack Circle"] = 1.10;

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

SRD.TimedAttackCircle = SRD.TimedAttackCircle || {};

(function(_, $) {

	"use strict";
	
	_.se = String(PluginManager.parameters('SRD_TimedAttack_Circle')['Sound Effect']);
	_.image = String(PluginManager.parameters('SRD_TimedAttack_Circle')['Circle Image']);
	_.back = String(PluginManager.parameters('SRD_TimedAttack_Circle')['Background Image']);
	_.rt = String(PluginManager.parameters('SRD_TimedAttack_Circle')['Repeat Type']).trim().toLowerCase();
	_.speed = String(PluginManager.parameters('SRD_TimedAttack_Circle')['Speed']);
	_.color = String(PluginManager.parameters('SRD_TimedAttack_Circle')['Color']);
	_.radius = parseInt(PluginManager.parameters('SRD_TimedAttack_Circle')['Initial Radius']);
	_.thickness = parseInt(PluginManager.parameters('SRD_TimedAttack_Circle')['Ring Thickness']);
	_.flash = parseInt(PluginManager.parameters('SRD_TimedAttack_Circle')['Flash Rate']);
	_.time = parseInt(PluginManager.parameters('SRD_TimedAttack_Circle')['Flash Time']);
	_.timeLimit = parseInt(PluginManager.parameters('SRD_TimedAttack_Circle')['Time Limit']);

	var _$_organizeInfo = $.organizeInfo;
	$.organizeInfo = function(o) {
    	_$_organizeInfo.call(this, o);
    	if(o.type === 'circle') {
    		if(o.info.match(/Sound[ ]?Effect:\s*(.*)/im)) o.se = String(RegExp.$1);
    		if(o.info.match(/Circle[ ]?Image:\s*(.*)/im)) o.image = String(RegExp.$1);
    		if(o.info.match(/Background[ ]?Image:\s*(.*)/im)) o.back = String(RegExp.$1);
    		if(o.info.match(/Repeat[ ]?Type:\s*(.*)/im)) o.rt = String(RegExp.$1).trim().toLowerCase();
    		if(o.info.match(/Speed:\s*(.*)/im)) o.speed = String(RegExp.$1);
    		if(o.info.match(/Color:\s*(.*)/im)) o.color = String(RegExp.$1);
    		if(o.info.match(/Initial[ ]?Radius:\s*(.*)/im)) o.radius = parseInt(RegExp.$1);
    		if(o.info.match(/Ring[ ]?Thickness:\s*(.*)/im)) o.thickness = parseInt(RegExp.$1);
    		if(o.info.match(/Flash[ ]?Rate:\s*(.*)/im)) o.flash = parseInt(RegExp.$1);
    		if(o.info.match(/Flash[ ]?Time:\s*(.*)/im)) o.time = parseInt(RegExp.$1);
    		if(o.info.match(/Time[ ]?Limit:\s*(.*)/im)) o.timeLimit = parseInt(RegExp.$1);
    		if(!o.se) o.se = _.se;
    		if(!o.image) o.image = _.image;
    		if(!o.back) o.back = _.back;
    		if(!o.rt) o.rt = _.rt;
    		if(!o.speed) o.speed = _.speed;
    		if(!o.color) o.color = _.color;
    		if(!o.radius) o.radius = _.radius;
    		if(!o.thickness) o.thickness = _.thickness;
    		if(!o.flash && o.flash !== 0) o.flash = _.flash;
    		if(!o.time && o.time !== 0) o.time = _.time;
    		if(!o.timeLimit && o.timeLimit !== 0) o.timeLimit = _.timeLimit;
    	}
    };

    //-----------------------------------------------------------------------------
    // Bitmap
    //-----------------------------------------------------------------------------

    Bitmap.prototype.drawRing = function(x, y, radius, color, lineWidth) {
	    var context = this._context;
	    context.save();
	    context.strokeStyle = color;
	    context.lineWidth = lineWidth;
	    context.beginPath();
	    context.arc(x, y, radius, 0, Math.PI * 2, false);
	    context.stroke();
	    context.restore();
	    this._setDirty();
	};

	//-----------------------------------------------------------------------------
    // TimedAttackSystem
    //-----------------------------------------------------------------------------

    var _TimedAttackSystem_loadItem = TimedAttackSystem.prototype.loadItem;
    TimedAttackSystem.prototype.loadItem = function(item) {
    	_TimedAttackSystem_loadItem.call(this, item);
		if(item.type === 'circle') {
			this._image = item.image;
			this._back = item.back;
			this._radius = item.radius;
			this._xPosition = item.radius;
			this._oRadius = this._xPosition;
			this._flash = item.flash;
			this._time = item.time;
			this._color = item.color;
			this._thickness = item.thickness;
			this._rt = item.rt;
			this._timeLimit = item.timeLimit;
			this._mul = 1;
		}
	};

	var _TimedAttackSystem_loadStart = TimedAttackSystem.prototype.loadStart;
	TimedAttackSystem.prototype.loadStart = function() {
		_TimedAttackSystem_loadStart.call(this);
		if(this._item.type === 'circle') {
			this.opacity = 0;
			this.contents.clear();
			this._x = [];
			this._y = [];
			for(var i = 0; i < BattleManager._targets.length; i++) {
				if(BattleManager._targets[i].isEnemy()) {
					var height = 0;
					if(BattleManager._spriteset._enemySprites[i]) {
						height = BattleManager._spriteset._enemySprites[i].height;
					}
					this._x.push(BattleManager._targets[i].screenX());
					this._y.push(BattleManager._targets[i].screenY() - (height/2));
				} else {
					var actor = BattleManager._targets[i];
					for(var j = 0; j < BattleManager._spriteset._actorSprites.length; j++) {
						if(BattleManager._spriteset._actorSprites[j] && actor === BattleManager._spriteset._actorSprites[j]._actor) {
							var height = BattleManager._spriteset._actorSprites[j].height;
							this._x.push(BattleManager._spriteset._actorSprites[j].x);
							this._y.push(BattleManager._spriteset._actorSprites[j].y - (height/2));
						}
					}
				}
			}
			this._notPressed = true;
		    this._flashTime = 0;
		}
	};

	var _TimedAttackSystem_updateGames = TimedAttackSystem.prototype.updateGames;
	TimedAttackSystem.prototype.updateGames = function() {
	    _TimedAttackSystem_updateGames.call(this);
	    if(this._type === 'circle') this.playCircleGame();
	};

	TimedAttackSystem.prototype.playCircleGame = function() {
		//Movement
	    if(this._notPressed) {
	    	var f = this._frame;
	    	this._xPosition -= Number(eval(this._item.speed) * this._mul);
	    	if(this._xPosition <= 0 || this._xPosition > this._radius) {
	    		if(this._rt === 'repeat') {
		    		this._xPosition = this._radius;
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
	    this._content.bitmap.clear();
	    for(var i = 0; i < this._x.length; i++) {
		    if(this._back.trim().length > 0) {
				var bit = $.loadImage(this._back);
				this._content.bitmap.blt(bit, 0, 0, bit.width, bit.height, this._x[i] - (this._oRadius/2), this._y[i] - (this._oRadius/2), this._oRadius, this._oRadius);
			}
		}
	    if(this._flashTime % this._flash < Math.floor(this._flash / 2)) {
	    	if(this._image.trim().length > 0 && this._xPosition > 0) {
	 	    	for(var i = 0; i < this._x.length; i++) {
	    			var bitmap = $.loadImage(this._image);
	    			var half = this._xPosition / 2;
		    		this._content.bitmap.blt(bitmap, 0, 0, bitmap.width, bitmap.height, 
		    			this._x[i] - half, this._y[i] - half, this._xPosition, this._xPosition);
			    }
			} else {
				if(this._xPosition > 0) {
					for(var i = 0; i < this._x.length; i++) {
			    		this._content.bitmap.drawRing(this._x[i], this._y[i], this._xPosition, this._color, this._thickness);
			    	}
			    }
			}
	    }

	    if(this._flashTime >= this._time && !this._notPressed) {
	    	this._content.bitmap.clear();
	    	BattleManager.endTASAttackThing();
	    	this.close();
	    }

	    //Input
	    if(eval($.activateCondition) && this._notPressed) {
	    	this._notPressed = false;
	    	AudioManager.playSe({"name":this._item.se,"pan":0,"pitch":100,"volume":100});
	    	var x = this._xPosition;
	    	var entireLength = this.width;
	    	this.setPower(1 - (this._xPosition / this._radius));
	    }

	    //Time Limit
	    console.log(this._timeLimit + "  " + this._frame);
	    if(this._timeLimit && this._frame > this._timeLimit) {
			this._content.bitmap.clear();
			this.setPower(0);
			BattleManager.endTASAttackThing();
			this.close();
		}
	};

})(SRD.TimedAttackCircle, SRD.TimedAttack);

} else alert("Please install 'SRD_TimedAttackCore' in order to use 'SRD_TimedAttack_Circle'.");