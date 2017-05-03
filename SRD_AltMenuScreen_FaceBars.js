/*:
 * @plugindesc Extension Plugin. Use this with a Face Alt Menu Screen to add HP and MP bars to the faces.
 * @author SumRndmDde
 *
 * @param Bar Rows
 * @desc Set this to '1' or '2' to have 1 or 2 rows.
 * 2 rows are easier to read, but cover the face more.
 * @default 1
 *
 * @param Show TP
 * @desc 'true'  -  Shows TP of the Actors
 * 'false'  -  Hides TP of the Actors
 * @default false
 *
 * @param Bar Offset
 * @desc The Y Offset added to the bars' position.
 * Set this to different number if things look to high or low.
 * @default 20
 *
 * @help
 *
 *
 * Alternative Menu Screen: Face Bars
 * Extension Plugin
 * Version 1.00
 * SumRndmDde
 *
 *
 * This is an extension plugin that requires a 
 * face type alt menu screen.
 * 
 * It adds health and magic bars to the faces
 * in the menu.
 *
 *
 * Until next time,
 *   ~ SumRndmDde
 */

(function() {

	var rows = Number(PluginManager.parameters('SRD_AltMenuScreen_FaceBars')['Bar Rows']);
	var tp = String(PluginManager.parameters('SRD_AltMenuScreen_FaceBars')['Show TP']).trim().toLowerCase() === 'true';
	var off = Number(PluginManager.parameters('SRD_AltMenuScreen_FaceBars')['Bar Offset']);

	var _Window_MenuStatus_drawItemImage = Window_MenuStatus.prototype.drawItemImage;
	Window_MenuStatus.prototype.drawItemImage = function(index) {
	    _Window_MenuStatus_drawItemImage.call(this, index);
	    var actor = $gameParty.members()[index];
	    var rect = this.itemRect(index);
	    if(rows === 1) {
	    	if(!tp) {
		    	var h = (rect.width / 2);
		    	this.drawActorHp(actor, rect.x, rect.y + this.lineHeight() * 3 + off, (rect.width / 2) - 2);
	    		this.drawActorMp(actor, rect.x + h, rect.y + this.lineHeight() * 3 + off, (rect.width / 2) - 2);
	    	} else {
	    		var h = (rect.width / 2);
		    	this.drawActorHp(actor, rect.x, rect.y + this.lineHeight() * 2 + off, rect.width);
		    	this.drawActorMp(actor, rect.x, rect.y + this.lineHeight() * 3 + off, (rect.width / 2) - 2);
	    		this.drawActorTp(actor, rect.x + h, rect.y + this.lineHeight() * 3 + off, (rect.width / 2) - 2);
	    	}
	    } else {
	    	if(!tp) {
		    	this.drawActorHp(actor, rect.x, rect.y + this.lineHeight() * 2 + off, rect.width);
	    		this.drawActorMp(actor, rect.x, rect.y + this.lineHeight() * 3 + off, rect.width);
	    	} else {
	    		this.drawActorHp(actor, rect.x, rect.y + this.lineHeight() * 1 + off, rect.width);
	    		this.drawActorMp(actor, rect.x, rect.y + this.lineHeight() * 2 + off, rect.width);
	    		this.drawActorTp(actor, rect.x, rect.y + this.lineHeight() * 3 + off, rect.width);
	    	}
	    }
	};

	if(rows === 1) {
		Window_MenuStatus.prototype.drawActorHp = function(actor, x, y, width) {
		    width = width || 186;
		    var color1 = this.hpGaugeColor1();
		    var color2 = this.hpGaugeColor2();
		    this.drawGauge(x, y, width, actor.hpRate(), color1, color2);
		    this.changeTextColor(this.systemColor());
		    this.drawCurrentAndMax(actor.hp, actor.mhp, x, y, width,
		                           this.hpColor(actor), this.normalColor());
		};

		Window_MenuStatus.prototype.drawActorMp = function(actor, x, y, width) {
		    width = width || 186;
		    var color1 = this.mpGaugeColor1();
		    var color2 = this.mpGaugeColor2();
		    this.drawGauge(x, y, width, actor.mpRate(), color1, color2);
		    this.changeTextColor(this.systemColor());
		    this.drawCurrentAndMax(actor.mp, actor.mmp, x, y, width,
		                           this.mpColor(actor), this.normalColor());
		};

		Window_Base.prototype.drawActorTp = function(actor, x, y, width) {
		    width = width || 186;
		    var color1 = this.tpGaugeColor1();
		    var color2 = this.tpGaugeColor2();
		    this.drawGauge(x, y, width, actor.tpRate(), color1, color2);
		    this.changeTextColor(this.tpColor(actor));
		    this.drawText(actor.tp, x + width - 64, y, 64, 'right');
		};
	}

})();