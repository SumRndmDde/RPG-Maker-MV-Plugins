/*:
 * @plugindesc Adds more Notetag options for YEP_ExtraEnemyDrops for bulk processing
 * @author SumRndmDde
 * @help
 *
 * Enemy Bulk Drops
 * Version 1.00
 * SumRndmDde
 *
 *
 * Yanfly's Extra Enemy Drops Plugin is required.
 * Place this Plugin BELOW YEP_ExtraEnemyDrops.
 *
 *
 * While Yanfly's Extra Enemy Drops adds a lot of features to help customize
 * the drops of Enemies, it lacks a couple of features to support large
 * amount of possible Item drops. Having the possibility for a large amount
 * of Items to drop is a major part of larger-scale RPGs.
 *
 * While it is technically possible to use a lot of the features within this 
 * Plugin without it, they help a lot with making things simplier and easier.
 *
 * 
 * ==========================================================================
 *  Batch Enemy Drop Percentages
 * ==========================================================================
 *
 * Available Enemy Notetags:
 *
 * <Item x1 - x2: y%>
 * <Weapon x1 - x2: y%>
 * <Armor x1 - x2: y%>
 *
 * This sets a batch of Items, Weapons, or Armors to have a y% chance of 
 * dropping.
 *
 *
 * For example:
 *
 * <Item 3 - 20: 50%>
 *
 * Each Item from 3 to 20 has a 50% chance of dropping.
 *
 *
 * ==========================================================================
 *  Group Enemy Drop Percentages
 * ==========================================================================
 *
 * Available Enemy Notetags:
 *
 * <Group Item x1 - x2: y%>
 * <Group Weapon x1 - x2: y%>
 * <Group Armor x1 - x2: y%>
 *
 * This sets a group of Items, Weapons, or Armors to have a y% chance of 
 * dropping.
 *
 *
 * For example:
 *
 * <Group Item 3 - 20: 50%>
 *
 * There is a 50% chance of 1 Item in this group of dropping.
 *
 *
 * ==========================================================================
 *  Creating Item/Armor/Weapon Groups
 * ==========================================================================
 *
 * Another feature added in this Plugin is the ability to set Items into
 * specific groups and base drops off of these groups.
 *
 * Use the following Item/Weapon/Armor notetag:
 *
 *  <Drop Group: group-name>
 *
 * to set an Item/Weapon/Armor to a specific group.
 *
 *
 * For example: <Drop Group: Bug>
 *              <Drop Group: Fire>
 *              <Drop Group: Giant Ants>
 *
 * One Item/Weapon/Armor can be a part of multiple groups.
 *
 *
 * ==========================================================================
 *  Giving Item/Armor/Weapon Groups
 * ==========================================================================
 *
 * In order to have an Enemy drop Items based off of a group, use the 
 * notetag:
 *
 * <Drop Group my-group: y%>
 *
 * This will set it so there is a y% chance of one item within my-group
 * to be dropped when the Enemy is defeated.
 *
 *
 * For example: <Drop Group Fire: 50%>
 *
 * This would make it so there's a 50% chance that one Item/Weapon/Armor
 * from the "Fire" group will drop when the Eney is defeated.
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

var SRD = SRD || {};
SRD.EnemyBulkDrops = SRD.EnemyBulkDrops || {};

var Imported = Imported || {};
Imported["SumRndmDde Enemy Bulk Drops"] = true;

if(Imported.YEP_ExtraEnemyDrops) {

(function(_) {

	"use strict";

	_.groups = {};

	var notetagsLoaded = false;
	var _DataManager_isDatabaseLoaded = DataManager.isDatabaseLoaded;
	DataManager.isDatabaseLoaded = function() {
	    if(!_DataManager_isDatabaseLoaded.call(this)) return false;
	    if(!notetagsLoaded) {
	    	var i1 = /<\s*Drop\s*Group\s*:\s*(.*)\s*>/i;
	    	for(var i = 1; i < $dataItems.length; i++) {
	    		var lines = $dataItems[i].note.split(/[\n\r]+/);
	    		for(var j = 0; j < lines.length; j++) {
	    			if(lines[j].match(i1)) {
	    				var temp = String(RegExp.$1);
	    				if(temp.trim().length > 0) {
	    					if(!_.groups[temp]) _.groups[temp] = [];
	    					_.groups[temp].push($dataItems[i]);
	    				}
	    			}
	    		}
	    	}

	    	for(var i = 1; i < $dataWeapons.length; i++) {
	    		var lines = $dataWeapons[i].note.split(/[\n\r]+/);
	    		for(var j = 0; j < lines.length; j++) {
	    			if(lines[j].match(i1)) {
	    				var temp = String(RegExp.$1);
	    				if(temp.trim().length > 0) {
	    					if(!_.groups[temp]) _.groups[temp] = [];
	    					_.groups[temp].push($dataWeapons[i]);
	    				}
	    			}
	    		}
	    	}

	    	for(var i = 1; i < $dataArmors.length; i++) {
	    		var lines = $dataArmors[i].note.split(/[\n\r]+/);
	    		for(var j = 0; j < lines.length; j++) {
	    			if(lines[j].match(i1)) {
	    				var temp = String(RegExp.$1);
	    				if(temp.trim().length > 0) {
	    					if(!_.groups[temp]) _.groups[temp] = [];
	    					_.groups[temp].push($dataArmors[i]);
	    				}
	    			}
	    		}
	    	}


			var n1 = /<\s*Group\s*(?:ITEM|DROP ITEM)[ ](\d+)\s*-\s*(\d+):[ ](\d+)([%％])>/im;
			var n2 = /<\s*Group\s*(?:WEAPON|DROP WEAPON)[ ](\d+)\s*-\s*(\d+):[ ](\d+)([%％])>/im;
			var n3 = /<\s*Group\s*(?:ARMOR|DROP armor)[ ](\d+)\s*-\s*(\d+):[ ](\d+)([%％])>/im;
			var n4 = /<\s*Drop\s*Group\s*(.*)\s*:[ ](\d+)([%％])>/im;
	    	for(var i = 1; i < $dataEnemies.length; i++) {
	    		var lines = $dataEnemies[i].note.split(/[\n\r]+/);
	    		for(var k = 0; k < lines.length; k++) {
		    		if(lines[k].match(n1)) {
		    			if(!$dataEnemies[i].groupedDropItems) $dataEnemies[i].groupedDropItems = [];
		    			var result = [];
		    			var f = parseInt(RegExp.$1);
		    			var l = parseInt(RegExp.$2);
		    			for(var j = f; j <= l; j++) {
		    				result.push($dataItems[j]);
		    			}
		    			$dataEnemies[i].groupedDropItems.push([result, parseFloat(RegExp.$3) * 0.01]);
		    		}

		    		if(lines[k].match(n2)) {
		    			if(!$dataEnemies[i].groupedDropItems) $dataEnemies[i].groupedDropItems = [];
		    			var result = [];
		    			var f = parseInt(RegExp.$1);
		    			var l = parseInt(RegExp.$2);
		    			for(var j = f; j <= l; j++) {
		    				result.push($dataWeapons[j]);
		    			}
		    			$dataEnemies[i].groupedDropItems.push([result, parseFloat(RegExp.$3) * 0.01]);
		    		}

		    		if(lines[k].match(n3)) {
		    			if(!$dataEnemies[i].groupedDropItems) $dataEnemies[i].groupedDropItems = [];
		    			var result = [];
		    			var f = parseInt(RegExp.$1);
		    			var l = parseInt(RegExp.$2);
		    			for(var j = f; j <= l; j++) {
		    				result.push($dataArmors[j]);
		    			}
		    			$dataEnemies[i].groupedDropItems.push([result, parseFloat(RegExp.$3) * 0.01]);
		    		}

		    		if(lines[k].match(n4)) {
		    			if(_.groups[String(RegExp.$1)]) {
			    			if(!$dataEnemies[i].groupedDropItems) $dataEnemies[i].groupedDropItems = [];
			    			$dataEnemies[i].groupedDropItems.push([_.groups[String(RegExp.$1)], parseFloat(RegExp.$2) * 0.01]);
			    		}
		    		}
		    	}
	    	}
	    	notetagsLoaded = true;
	    }
	    return true;
	};

	var _DataManager_processEEDNotetags1 = DataManager.processEEDNotetags1;
	DataManager.processEEDNotetags1 = function(group) {
		var noteD1 = /<(?:ITEM|DROP ITEM)[ ](\d+)\s*-\s*(\d+):[ ](\d+)([%％])>/gi;
		var noteD2 = /<(?:WEAPON|DROP WEAPON)[ ](\d+)\s*-\s*(\d+):[ ](\d+)([%％])>/gi;
		var noteD3 = /<(?:ARMOR|DROP armor)[ ](\d+)\s*-\s*(\d+):[ ](\d+)([%％])>/gi;
    	for(var i = 1; i < $dataEnemies.length; i++) {
    		$dataEnemies[i].note = $dataEnemies[i].note.replace(noteD1, function() {
    			var result = "";
    			for(var j = arguments[1]; j <= arguments[2]; j++) {
    				result += "<Item " + j + ": " + arguments[3] + "%>\n";
    			}
    			return result;
    		}.bind(this));

    		$dataEnemies[i].note = $dataEnemies[i].note.replace(noteD2, function() {
    			var result = "";
    			for(var j = arguments[1]; j <= arguments[2]; j++) {
    				result += "<Weapon " + j + ": " + arguments[3] + "%>\n";
    			}
    			return result;
    		}.bind(this));

    		$dataEnemies[i].note = $dataEnemies[i].note.replace(noteD3, function() {
    			var result = "";
    			for(var j = arguments[1]; j <= arguments[2]; j++) {
    				result += "<Armor " + j + ": " + arguments[3] + "%>\n";
    			}
    			return result;
    		}.bind(this));
    	}
		_DataManager_processEEDNotetags1.call(this, group);
	};

	var _DropManager_makeConditionalDropItems = DropManager.makeConditionalDropItems;
	DropManager.makeConditionalDropItems = function() {
		_DropManager_makeConditionalDropItems.call(this);
		if(this._enemy.enemy().groupedDropItems) {
			var gdi = this._enemy.enemy().groupedDropItems;
			for(var i = 0; i < gdi.length; i++) {
				if(Math.random() < gdi[i][1]) {
					var r = Math.randomInt(gdi[i][0].length);
					this._drops.push(gdi[i][0][r]);
				}
			}
		}
	};

})(SRD.EnemyBulkDrops);

} else alert("HEY! Currently you have SRD_EnemyBulkDrops installed, but you don't have YEP_ExtraEnemyDrops installed. \nFix it!");