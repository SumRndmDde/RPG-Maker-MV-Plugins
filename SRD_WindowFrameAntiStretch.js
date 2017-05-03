/*:
 * @plugindesc Makes it so the frame of from Window Skins repeats like a pattern instead of stretching.
 * @author SumRndmDde
 * @help
 *
 * Window Frame Anti-Stretch
 * Version 1.00
 * SumRndmDde
 *
 * By default, the frame around a window stretches the texture used
 * by a custom Window Skin.
 *
 * Using this Plugin, the frame will "repeat" like it did in VX Ace.
 *
 * It's plug-in and play.
 */

(function() {
	
	Window.prototype._refreshFrame = function() {
	    var w = this._width;
	    var h = this._height;
	    var m = 24;
	    var bitmap = new Bitmap(w, h);

	    this._windowFrameSprite.bitmap = bitmap;
	    this._windowFrameSprite.setFrame(0, 0, w, h);

	    if (w > 0 && h > 0 && this._windowskin) {
	        var skin = this._windowskin;
	        var p = 96;
	        var q = 96;

	        //Creates easy references for original/new width and height
	        var oWid = p-m*2;
	        var nWid = w-m*2;
	        var oHei = p-m*2;
	        var nHei = h-m*2;

	        //Divides to find how many complete repeats for horizontal and vertical
	        var hRep = Math.floor(nWid / oWid);
	        var vRep = Math.floor(nHei / oHei);

	        //Finds remainders for the "fraction" remaining
	        var hRem = nWid % oWid;
	        var vRem = nHei % oHei;


	        //Top Side
	        for(var i = 0; i < hRep; i++) {
	        	bitmap.blt(skin, p+m, 0, oWid, m, m + (i*oWid), 0, oWid, m);
	        }
	        bitmap.blt(skin, p+m, 0, hRem, m, m + (oWid*hRep), 0, hRem, m);
	        //Bottom Side
	        for(var i = 0; i < hRep; i++) {
	        	bitmap.blt(skin, p+m, q-m, oWid, m, m + (i*oWid), h-m, oWid, m);
	        }
	        bitmap.blt(skin, p+m, q-m, hRem, m, m + (oWid*hRep), h-m, hRem, m);
	        //Left Side
	        for(var i = 0; i < vRep; i++) {
	        	bitmap.blt(skin, p, m, m, oHei, 0, m + (i*oHei), m, oHei);
	        }
	        bitmap.blt(skin, p, m, m, vRem, 0, m + (vRep*oHei), m, vRem);
	        //Right Side
	        for(var i = 0; i < vRep; i++) {
	        	bitmap.blt(skin, p+q-m, m, m, oHei, w-m, m + (i*oHei), m, oHei);
	        }
	        bitmap.blt(skin, p+q-m, m, m, vRem, w-m, m + (vRep*oHei), m, vRem);
	        
	        //Top-Left Corner
	        bitmap.blt(skin, p+0, 0+0, m, m, 0, 0, m, m);
	        //Top-Right Corner
	        bitmap.blt(skin, p+q-m, 0+0, m, m, w-m, 0, m, m);
	        //Bottom-Left Corner
	        bitmap.blt(skin, p+0, 0+q-m, m, m, 0, h-m, m, m);
	        //Bottom-Right Corner
	        bitmap.blt(skin, p+q-m, 0+q-m, m, m, w-m, h-m, m, m);
	    }
	};

})();