/*:
 * @plugindesc Forces an automatic wait event to occur while videos are playing.
 * @author SumRndmDde
 * @help
 *
 * Video Wait
 * Version 1.01
 * SumRndmDde
 *
 * Changelog (v1.01): Fixed "Wait" Event
 *
 * This Plugin makes it so when a video is playing, all of
 * the events after the "Play Movie" event will not run
 * until the video is finished.
 *
 * It's plug-in and play.
 */

(function() {

	//Overwritten Function
	Game_Interpreter.prototype.command261 = function() {
	    if (!$gameMessage.isBusy()) {
	        var name = this._params[0];
	        if (name.length > 0) {
	            var ext = this.videoFileExt();
	            Graphics.playVideo('movies/' + name + ext);
	            this.setWaitMode('video');

	            //Additional Code
	            this._setVideoAfterWait = true;
	        }
	        this._index++;
	    }
	    return false;
	};

	var _Game_Interpreter_initialize = Game_Interpreter.prototype.initialize;
	Game_Interpreter.prototype.initialize = function(depth) {
	    _Game_Interpreter_initialize.call(this, depth);
	    this._setVideoAfterWait = false;
	};

	var _Game_Interpreter_updateWaitCount = Game_Interpreter.prototype.updateWaitCount;
	Game_Interpreter.prototype.updateWaitCount = function() {
		if (this._setVideoAfterWait) {
			if(!Graphics.isVideoPlaying()) return true;
			else {
				this.setWaitMode('video');
				this._setVideoAfterWait = false;
			}
		}
	    return _Game_Interpreter_updateWaitCount.call(this);
	};

})();