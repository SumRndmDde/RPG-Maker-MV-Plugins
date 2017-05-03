/*:
 * @plugindesc Gives the developer more control over the volume fading of BGM, BGS, and ME.
 * @author SumRndmDde
 *
 * @param Replay Fade Time
 * @desc The time, in frames, it takes for BGM or BGS to fade back in after a battle or ME.
 * @default 30
 *
 * @param Auto-BGM Fade In
 * @desc If set to a value greater than 0, whenever the BGM is changed, it will fade in at this duration.
 * @default 0
 *
 * @help
 *
 * Audio Fader
 * Version 1.01
 * SumRndmDde
 *
 *
 * This plugin gives the developer more control over the volume fading of BGM, 
 * BGS, and ME audio effects within the game.
 *
 *
 * ==============================================================================
 *  Plugin Commands
 * ==============================================================================
 *
 * In order to fade in audio, use the following Plugin Commands.
 * In all the Plugin Commands, the "type" needs to be defined. The "type" can be
 * one of the following: BGM, BGS, or ME. That plugin will then affect the 
 * current BGM, BGS, or ME respectively.
 *
 *
 *   FadeIn [type] [duration]
 *
 * Fades in the specific audio type over a duration in frames.
 *
 *
 *   FadeOut [type] [duration]
 *
 * Fades out the specific audio type over a duration in frames.
 *
 *
 *   FadeTo [type] [duration] [volume]
 *
 * Fades the audio type to a specific volume over a duration in frames.
 *
 *
 *   FadeFromTo [type] [duration] [first-volume] [target-volume]
 *
 * Fades the audio type by first setting it to "first volume", then fading it
 * the "target-volume" over a duration in frames.
 *
 *
 * ==============================================================================
 *  End of Help File
 * ==============================================================================
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

var SRD = SRD || {};
SRD.AudioFader = SRD.AudioFader || {};
SRD.PluginCommands = SRD.PluginCommands || {};

var Imported = Imported || {};
Imported["SumRndmDde Audio Fader"] = 1.01;

(function(_, $) {

"use strict";

//-----------------------------------------------------------------------------
// SRD.AudioFader
//-----------------------------------------------------------------------------

const params = PluginManager.parameters('SRD_AudioFader');

_.replayFadeTime = parseInt(params['Replay Fade Time']);
_.autoFadeIn = parseInt(params['Auto-BGM Fade In']);

//-----------------------------------------------------------------------------
// SRD.PluginCommands
//-----------------------------------------------------------------------------

$['fadein'] = function(args) {
	const type = String(args[0]).toLowerCase();
	const frames = parseInt(args[1]) / 60;
	switch(type) {
		case 'bgm':
			AudioManager.fadeInBgm(frames);
			break;
		case 'bgs':
			AudioManager.fadeInBgs(frames);
			break;
		case 'me':
			AudioManager.fadeInMe(frames);
			break;
	}
};

$['fadeout'] = function(args) {
	const type = String(args[0]).toLowerCase();
	const frames = parseInt(args[1]) / 60;
	switch(type) {
		case 'bgm':
			AudioManager.fadeOutBgm(frames);
			break;
		case 'bgs':
			AudioManager.fadeOutBgs(frames);
			break;
		case 'me':
			AudioManager.fadeOutMe(frames);
			break;
	}
};

$['fadeto'] = function(args) {
	const type = String(args[0]).toLowerCase();
	const frames = parseInt(args[1]) / 60;
	const target = parseFloat(args[2] / 100).clamp(0, 1);
	switch(type) {
		case 'bgm':
			AudioManager.fadeToBgm(frames, target);
			break;
		case 'bgs':
			AudioManager.fadeToBgs(frames, target);
			break;
		case 'me':
			AudioManager.fadeToMe(frames, target);
			break;
	}
};

$['fadefromto'] = function(args) {
	const type = String(args[0]).toLowerCase();
	const frames = parseInt(args[1]) / 60;
	const current = parseFloat(args[2] / 100).clamp(0, 1);
	const target = parseFloat(args[3] / 100).clamp(0, 1);
	switch(type) {
		case 'bgm':
			AudioManager.fadeFromToBgm(frames, current, target);
			break;
		case 'bgs':
			AudioManager.fadeFromToBgm(frames, current, target);
			break;
		case 'me':
			AudioManager.fadeFromToBgm(frames, current, target);
			break;
	}
};

//-----------------------------------------------------------------------------
// WebAudio
//-----------------------------------------------------------------------------

WebAudio.prototype.fadeTo = function(duration, target) {
	if(this.isReady()) {
		if(this._gainNode) {
			const gain = this._gainNode.gain;
			const currentTime = WebAudio._context.currentTime;
			gain.setValueAtTime(gain.value, currentTime);
			gain.linearRampToValueAtTime(target, currentTime + duration);
		}
	} else if(this._autoPlay) {
		this.addLoadListener(function() {
			this.fadeTo(duration, target);
		}.bind(this));
	}
};

WebAudio.prototype.fadeFromTo = function(duration, current, target) {
	if(this.isReady()) {
		if(this._gainNode) {
			const gain = this._gainNode.gain;
			const currentTime = WebAudio._context.currentTime;
			gain.setValueAtTime(current, currentTime);
			gain.linearRampToValueAtTime(target, currentTime + duration);
		}
	} else if(this._autoPlay) {
		this.addLoadListener(function() {
			this.fadeTo(duration, current, target);
		}.bind(this));
	}
};

//-----------------------------------------------------------------------------
// AudioManager
//-----------------------------------------------------------------------------

AudioManager._replayFadeTime = (_.replayFadeTime / 60);

if(_.autoFadeIn) {

_.AudioManager_playBgm = AudioManager.playBgm;
AudioManager.playBgm = function(bgm, pos) {
	let fadeIn = false;
	const bgmName = bgm.name;
	if(!this.isCurrentBgm(bgm) && bgm.name && !this._meBuffer) {
		fadeIn = true;
	}
	_.AudioManager_playBgm.apply(this, arguments);
	if(fadeIn && bgmName !== bgm.name) {
		AudioManager.fadeInBgm(_.autoFadeIn / 60);
	}
};

}

AudioManager.fadeInMe = function(duration) {
	if (this._meBuffer) {
		this._meBuffer.fadeIn(duration);
	}
};

AudioManager.fadeToBgm = function(duration, target) {
	if (this._bgmBuffer && this._currentBgm) {
		this._bgmBuffer.fadeTo(duration, target);
	}
};

AudioManager.fadeToBgs = function(duration, target) {
	if (this._bgsBuffer && this._currentBgs) {
		this._bgsBuffer.fadeTo(duration, target);
	}
};

AudioManager.fadeToMe = function(duration, target) {
	if (this._meBuffer) {
		this._meBuffer.fadeTo(duration, target);
	}
};

AudioManager.fadeFromToBgm = function(duration, current, target) {
	if (this._bgmBuffer && this._currentBgm) {
		this._bgmBuffer.fadeFromTo(duration, current, target);
	}
};

AudioManager.fadeFromToBgs = function(duration, current, target) {
	if (this._bgsBuffer && this._currentBgs) {
		this._bgsBuffer.fadeFromTo(duration, current, target);
	}
};

AudioManager.fadeFromToMe = function(duration, current, target) {
	if (this._meBuffer) {
		this._meBuffer.fadeFromTo(duration, current, target);
	}
};

//-----------------------------------------------------------------------------
// Game_Interpreter
//-----------------------------------------------------------------------------

if(!SRD.Game_Interpreter_pluginCommand) {

SRD.Game_Interpreter_pluginCommand = Game_Interpreter.prototype.pluginCommand;
Game_Interpreter.prototype.pluginCommand = function(command, args) {
	const com = command.trim().toLowerCase();
	if($[com]) {
		$[com].call(this, args);
		return;
	}
	SRD.Game_Interpreter_pluginCommand.apply(this, arguments);
};

}

})(SRD.AudioFader, SRD.PluginCommands);