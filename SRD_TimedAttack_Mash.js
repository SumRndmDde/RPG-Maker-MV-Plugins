/*: 
 * @plugindesc Adds a new Timed Attack system that requires the Player to mash a button to get a gauge to a certain point.
 * @author SumRndmDde
 *
 * @param == Default Props. ==
 * @default
 *
 * @param Normal SE
 * @desc The default Sound Effect when one is not specified.
 * Input filename of Sound Effect in /audio/se/
 * @default Sword2
 *
 * @param Success SE
 * @desc The default Sound Effect when one is not specified.
 * Input filename of Sound Effect in /audio/se/
 * @default Bell3
 *
 * @param Fail SE
 * @desc The default Sound Effect when one is not specified.
 * Input filename of Sound Effect in /audio/se/
 * @default Buzzer1
 *
 * @param Smooth Mode
 * @desc The default Smooth Mode when one is not specified.
 * Input either 'true' or 'false'.
 * @default true
 *
 * @param Phrase
 * @desc The default Phrase when one is not specified.
 * Input a word or phrase. %1 will represent the counter.
 * @default Mash! %1
 *
 * @param Start Amount
 * @desc The default Start Amount when one is not specified.
 * Input a Positive Number or JavaScript eval.
 * @default 1000
 *
 * @param Max Amount
 * @desc The default Max Amount when one is not specified.
 * Input a Positive Number or JavaScript eval.
 * @default 2000
 *
 * @param Seconds
 * @desc The default Seconds when one is not specified.
 * Input a Positive Number.
 * @default 5
 *
 * @param Speed
 * @desc The default Speed when one is not specified.
 * Input a Positive Number or JavaScript eval.
 * @default 5
 *
 * @param Tap Gain
 * @desc The default Tap Gain when one is not specified.
 * Input a Positive Number or JavaScript eval.
 * @default 15
 *
 * @param Width
 * @desc The default Width when one is not specified.
 * Input a Positive Number
 * @default 200
 *
 * @param Height
 * @desc The default Height when one is not specified.
 * Input a Positive Number.
 * @default 12
 *
 * @param Above Height
 * @desc The default Above Height when one is not specified.
 * Input a Positive Number.
 * @default 150
 *
 * @param Color 1
 * @desc The default Color 1 when one is not specified.
 * Input a JavaScript or HTML Color
 * @default #33ccff
 *
 * @param Color 2
 * @desc The default Color 2 when one is not specified.
 * Input a JavaScript or HTML Color
 * @default #33ccff
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
 * Timed Attack: Mash
 * Version 1.10
 * SumRndmDde
 *
 *
 * This Plugin requires the Timed Attack Core Plugin (SRD_TimedAttackCore)
 * http://sumrndm.site/timed-attack-core
 *
 * Adds a new Timed Attack system that requires the Player to mash a button 
 * to get a gauge to a certain point.
 *
 * When used, a gauge will appear above the Actor's head. The Player much
 * rapidly press the OK button to make the gauge fill up as much as possible.
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
 *  How to Set a Skill to Use a Timed Attack (Mash)
 * ==========================================================================
 *
 * Use the Notetag:
 *
 * <Timed Attack: mash>
 * <End Timed Attack>
 *
 * Setting those in a Skill's notebox will activate the "Timed Attack System"
 * for that Skill.
 *
 * The part that says "mash" can be changed to have other types of "Timed
 * Attacks" be used.
 *
 *
 * ==========================================================================
 *  Mash Timed Attack Properties
 * ==========================================================================
 *
 * You can manipulate the properties of each Timed Attack by adding them
 * in the Notetags. For example:
 *
 * <Timed Attack: mash>
 * Max Amount: 1000
 * Start Amount: 400
 * Tap Gain: 75
 * Width: 400
 * <End Timed Attack>
 *
 * As you can see, there are a couple of factors you can use to even make one
 * individual Timed Attack different for each Skill it is used with.
 *
 *
 * Here are all the properties for Mash Timed Attack:
 *
 * Normal SE:        (Input filename of Sound Effect in /audio/se/)
 * Success SE:       (Input filename of Sound Effect in /audio/se/)
 * Fail SE:          (Input filename of Sound Effect in /audio/se/)
 * Smooth Mode:      (Input either 'true' or 'false')
 * Start Amount:     (Input a Positive Number or JavaScript eval)
 * Max Amount:       (Input a Positive Number or JavaScript eval)
 * Seconds:          (Input a Positive Number)
 * Speed:            (Input a Positive Number or JavaScript Formula)*
 * Tap Gain:         (Input a Positive Number or JavaScript Formula)*
 * Width:            (Input a Positive Number)
 * Height:           (Input a Positive Number)
 * Above Height:     (Input a Positive Number)
 * Color 1:          (Input a JavaScript or HTML Color)
 * Color 2:          (Input a JavaScript or HTML Color)
 * Flash Rate:       (Input a Positive Number)
 * Flash Time:       (Input a Positive Number)
 *
 * *The JavaScript Formula can use 'f' to represent "Frame Count".
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
Imported["SumRndmDde Timed Attack Mash"] = 1.10;

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

SRD.TimedAttackMash = SRD.TimedAttackMash || {};

(function(_, $) {

	"use strict";

	_.TAS_ID = 'mash';
	
	var params = PluginManager.parameters('SRD_TimedAttack_Mash');

	_.se = String(params['Normal SE']);
	_.vse = String(params['Success SE']);
	_.fse = String(params['Fail SE']);
	_.mode = String(params['Smooth Mode']).trim().toLowerCase() === 'true';
	_.phrase = String(params['Phrase']);
	_.start = String(params['Start Amount']);
	_.max = String(params['Max Amount']);
	_.seconds = parseInt(params['Seconds']);
	_.speed = String(params['Speed']);
	_.tap = String(params['Tap Gain']);
	_.width = parseInt(params['Width']);
	_.height = parseInt(params['Height']);
	_.aboveHeight = parseInt(params['Above Height']);
	_.color1 = String(params['Color 1']);
	_.color2 = String(params['Color 2']);
	_.flash = parseInt(params['Flash Rate']);
	_.time = parseInt(params['Flash Time']);

	var _$_organizeInfo = $.organizeInfo;
	$.organizeInfo = function(o) {
    	_$_organizeInfo.call(this, o);
    	if(o.type === _.TAS_ID) {
    		if(o.info.match(/Normal[ ]?SE:\s*(.*)/im)) o.se = String(RegExp.$1);
    		if(o.info.match(/Success[ ]?SE:\s*(.*)/im)) o.vse = String(RegExp.$1);
    		if(o.info.match(/Fail[ ]?SE:\s*(.*)/im)) o.fse = String(RegExp.$1);
    		if(o.info.match(/Phrase:\s*(.*)/im)) o.phrase = String(RegExp.$1);
    		if(o.info.match(/Smooth[ ]?Mode:\s*(.*)/im)) o.mode = String(RegExp.$1).trim().toLowerCase() === 'true';
    		if(o.info.match(/Start[ ]?Amount:\s*(.*)/im)) o.start = String(RegExp.$1);
    		if(o.info.match(/Max[ ]?Amount:\s*(.*)/im)) o.max = String(RegExp.$1);
    		if(o.info.match(/Seconds:\s*(.*)/im)) o.seconds = parseInt(RegExp.$1);
    		if(o.info.match(/Speed:\s*(.*)/im)) o.speed = String(RegExp.$1);
    		if(o.info.match(/Tap[ ]?Gain:\s*(.*)/im)) o.tap = String(RegExp.$1);
    		if(o.info.match(/Width:\s*(.*)/im)) o.width = parseInt(RegExp.$1);
    		if(o.info.match(/Height:\s*(.*)/im)) o.height = parseInt(RegExp.$1);
    		if(o.info.match(/Above[ ]?Height:\s*(.*)/im)) o.aboveHeight = parseInt(RegExp.$1);
    		if(o.info.match(/Color[ ]?1:\s*(.*)/im)) o.color1 = String(RegExp.$1);
    		if(o.info.match(/Color[ ]?2:\s*(.*)/im)) o.color2 = String(RegExp.$1);
    		if(o.info.match(/Flash[ ]?Rate:\s*(.*)/im)) o.flash = parseInt(RegExp.$1);
    		if(o.info.match(/Flash[ ]?Time:\s*(.*)/im)) o.time = parseInt(RegExp.$1);
    		if(!o.se) o.se = _.se;
    		if(!o.vse) o.vse = _.vse;
    		if(!o.fse) o.fse = _.fse;
    		if(o.mode === null || o.mode === undefined) {
    			if(!_.mode) o.mode = false;
    			else o.mode = true;
    		}
    		if(!o.phrase) o.phrase = _.phrase;
    		if(!o.start) o.start = _.start;
    		if(!o.max) o.max = _.max;
    		if(!o.seconds) o.seconds = _.seconds;
    		if(!o.speed) o.speed = _.speed;
    		if(!o.tap) o.tap = _.tap;
    		if(!o.width) o.width = _.width;
    		if(!o.height) o.height = _.height;
    		if(!o.aboveHeight) o.aboveHeight = _.aboveHeight;
    		if(!o.color1) o.color1 = _.color1;
    		if(!o.color2) o.color2 = _.color2;
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
			this._xPosition = eval(item.start);
			this._maxPosition = eval(item.max);
			this._phrase = item.phrase;
			this._mode = item.mode;
			this._seconds = item.seconds;
			this._width = item.width;
			this._height = item.height;
			this._aboveHeight = item.aboveHeight;
			this._flash = item.flash;
			this._time = item.time;
			this._color1 = item.color1;
			this._color2 = item.color2;
		}
	};

	var _TimedAttackSystem_loadStart = TimedAttackSystem.prototype.loadStart;
	TimedAttackSystem.prototype.loadStart = function() {
		_TimedAttackSystem_loadStart.call(this);
		if(this._item.type === _.TAS_ID) {
			this.opacity = 0;
			this.contents.clear();
			this._notPressed = true;
		    this._flashTime = 0;
		    this._x = 0;
			this._y = 0;
			this._tempSpeed = 0;
			this._sprActor = BattleManager._spriteset._actorSprites[BattleManager._subject.index()];
			this._x = (this._sprActor.x - (this._width/2));
			this._y = (this._sprActor.y - this._height);
		}
	};

	var _TimedAttackSystem_updateGames = TimedAttackSystem.prototype.updateGames;
	TimedAttackSystem.prototype.updateGames = function() {
	    _TimedAttackSystem_updateGames.call(this);
	    if(this._type === _.TAS_ID) this.playMashGame();
	};

	TimedAttackSystem.prototype.playMashGame = function() {
		//Movement
	    if(this._notPressed) {
	    	var f = this._frame;
	    	this._xPosition -= Number(eval(this._item.speed)) - this._tempSpeed;
	    	if(this._xPosition <= 0 || this._xPosition > this._maxPosition) {
	    		if(this._xPosition > this._maxPosition) {
	    			AudioManager.playSe({"name":this._item.vse,"pan":0,"pitch":100,"volume":100});
	    			this._xPosition = this._maxPosition;
	    			this.setPower(1);
	    		} else {
	    			AudioManager.playSe({"name":this._item.fse,"pan":0,"pitch":100,"volume":100});
	    			this._xPosition = 0;
	    			this.setPower(0);
	    		}
	    		this._notPressed = false;
	    	}
	    } else {
	    	this._flashTime++;
	    }

	    //Draw
		this._x = (this._sprActor.x - (this._width/2));
		this._y = (this._sprActor.y - this._aboveHeight);
	    this._content.bitmap.clear();
	    this.drawGaugeUpgrade(this._x, this._y, this._width, this._height, this._xPosition / this._maxPosition, this._color1, this._color2);
	    if(this._flashTime % this._flash < Math.floor(this._flash / 2)) {
	    	var text = this._phrase.replace(/%1/g, this._seconds);
	    	this._content.bitmap.drawText(text, this._x + (this._width/2) - (this.textWidth(text)/2), this._y - this._height, this.textWidth(text), this.lineHeight(), 'left');
	    }

	    if(this._flashTime >= this._time && !this._notPressed) {
	    	this._content.bitmap.clear();
	    	BattleManager.endTASAttackThing();
	    	this.close();
	    }

	    if(this._notPressed) {

		    if(eval($.activateCondition)) {
		    	if(this._mode) {
		    		this._tempSpeed = eval(this._item.tap);
		    	} else {
		    		this._xPosition += eval(this._item.tap);
		    	}
		    }

		    if(this._frame % 60 === 0) {
		    	this._seconds--;
		    }

		    //Input
		    if(this._seconds === 0) {
		    	this._notPressed = false;
		    	AudioManager.playSe({"name":this._item.se,"pan":0,"pitch":100,"volume":100});
		    	this.setPower(this._xPosition / this._maxPosition);
		    }

		    if(this._tempSpeed > 0) this._tempSpeed--;
		}
	};

	TimedAttackSystem.prototype.drawGaugeUpgrade = function(x, y, width, height, rate, color1, color2) {
	    var fillW = Math.floor(width * rate);
	    var gaugeY = y + this.lineHeight() - 8;
	    this._content.bitmap.fillRect(x, gaugeY, width, height, this.gaugeBackColor());
	    this._content.bitmap.gradientFillRect(x, gaugeY, fillW, height, color1, color2);
	};

})(SRD.TimedAttackMash, SRD.TimedAttack);

} else alert("Please install 'SRD_TimedAttackCore' in order to use 'SRD_TimedAttack_Mash'.");