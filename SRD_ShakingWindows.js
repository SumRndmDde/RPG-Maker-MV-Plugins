/*:
 * @plugindesc Shakes the window that your cursor is currently positioned on.
 * @author SumRndmDde
 *
 * @param Speed
 * @desc The speed in which the windows shake.
 * The default is 0.5.
 * @default 0.5
 *
 * @param Upper Bound
 * @desc The maximum amount the window will move up relative to its original position. The default is 5.
 * @default 5
 *
 * @param Lower Bound
 * @desc The maximum amount the window will move down relative to its original position. The default is -5.
 * @default -5
 *
 * @param == Toggle Shakes ==
 * @default
 *
 * @param Shake Battle?
 * @desc Set this to 'true' and the selection windows on the Battle Scene will skake when highlighted.
 * @default true
 *
 * @param Shake Shop?
 * @desc Set this to 'true' and the selection windows on the Shop Scene will skake when highlighted.
 * @default true
 *
 * @param Shake Title?
 * @desc Set this to 'true' and the selection windows on the Title Scene will skake when highlighted.
 * @default true
 *
 * @param Shake Menu?
 * @desc Set this to 'true' and the selection windows on the Menu Scene will skake when highlighted.
 * @default true
 *
 * @param Shake Item?
 * @desc Set this to 'true' and the selection windows on the Item Scene will skake when highlighted.
 * @default true
 *
 * @param Shake Skill?
 * @desc Set this to 'true' and the selection windows on the Skill Scene will skake when highlighted.
 * @default true
 *
 * @param Shake Equip?
 * @desc Set this to 'true' and the selection windows on the Equip Scene will skake when highlighted.
 * @default true
 *
 * @param Shake Options?
 * @desc Set this to 'true' and the selection windows on the Options Scene will skake when highlighted.
 * @default true
 *
 * @param Shake File?
 * @desc Set this to 'true' and the selection windows on the Save/Load Scenes will skake when highlighted.
 * @default true
 *
 * @param Shake Game End?
 * @desc Set this to 'true' and the selection windows on the Game End Scene will skake when highlighted.
 * @default true
 *
 * @help
 *
 * Shaking Windows
 * Version 1.00
 * SumRndmDde
 *
 *
 * Makes your windows shaky!
 *
 * This Plugin is plugin and play.
 *
 * ==========================================================================
 * Parameters
 * ==========================================================================
 *
 *  == Speed ==
 * The speed in which the windows shake.
 * The default is 0.5.
 *
 *  == Upper Bound ==
 * The maximum amount the window will move 
 * up relative to its original position.
 * The default is 5.
 *
 *  == Lower Bound ==
 * The maximum amount the window will move 
 * down relative to its original position.
 * The default is -5.
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
SRD.ShakingWindows = SRD.ShakingWindows || {};

var Imported = Imported || {};
Imported["SumRndmDde Shaking Windows"] = true;

(function(_) {

	_.speed = Number(PluginManager.parameters('SRD_ShakingWindows')['Speed']);
	_.upper = Number(PluginManager.parameters('SRD_ShakingWindows')['Upper Bound']);
	_.lower = Number(PluginManager.parameters('SRD_ShakingWindows')['Lower Bound']);

	_.shakeBattle = String(PluginManager.parameters('SRD_ShakingWindows')['Shake Battle?']).trim().toLowerCase() === 'true';
	_.shakeShop = String(PluginManager.parameters('SRD_ShakingWindows')['Shake Shop?']).trim().toLowerCase() === 'true';
	_.shakeTitle = String(PluginManager.parameters('SRD_ShakingWindows')['Shake Title?']).trim().toLowerCase() === 'true';
	_.shakeMenu = String(PluginManager.parameters('SRD_ShakingWindows')['Shake Menu?']).trim().toLowerCase() === 'true';
	_.shakeItem = String(PluginManager.parameters('SRD_ShakingWindows')['Shake Item?']).trim().toLowerCase() === 'true';
	_.shakeSkill = String(PluginManager.parameters('SRD_ShakingWindows')['Shake Skill?']).trim().toLowerCase() === 'true';
	_.shakeEquip = String(PluginManager.parameters('SRD_ShakingWindows')['Shake Equip?']).trim().toLowerCase() === 'true';
	_.shakeOptions = String(PluginManager.parameters('SRD_ShakingWindows')['Shake Options?']).trim().toLowerCase() === 'true';
	_.shakeFile = String(PluginManager.parameters('SRD_ShakingWindows')['Shake File?']).trim().toLowerCase() === 'true';
	_.shakeGameEnd = String(PluginManager.parameters('SRD_ShakingWindows')['Shake Game End?']).trim().toLowerCase() === 'true';

	//-----------------------------------------------------------------------------
	// Scene_Base
	//-----------------------------------------------------------------------------

	Scene_Base.prototype.shakeDaWindow = function(window) {
		if(window.isOpenAndActive()) {
			window.y += window._moveSpeed;
		} else if(window.y > window._originalY) {
			window.y -= Math.abs(window._moveSpeed);
		} else if(window.y < window._originalY) {
			window.y += Math.abs(window._moveSpeed);
		}

		if(window.y >= _.upper + window._originalY) window._moveSpeed = -(_.speed);
		if(window.y <= _.lower + window._originalY) window._moveSpeed = (_.speed);
	};

	//-----------------------------------------------------------------------------
	// Scene_Title
	//-----------------------------------------------------------------------------

	if(_.shakeTitle) {
		var _Scene_Title_create = Scene_Title.prototype.create;
		Scene_Title.prototype.create = function() {
			_Scene_Title_create.call(this);
			this._commandWindow._moveSpeed = _.speed;
			this._commandWindow._originalY = this._commandWindow.y;
		};

		var _Scene_Title_update = Scene_Title.prototype.update;
		Scene_Title.prototype.update = function() {
			_Scene_Title_update.call(this);
			this.shakeDaWindow(this._commandWindow);
		};
	}

	//-----------------------------------------------------------------------------
	// Scene_Menu
	//-----------------------------------------------------------------------------

	if(_.shakeMenu) {
		var _Scene_Menu_start = Scene_Menu.prototype.start;
		Scene_Menu.prototype.start = function() {
			_Scene_Menu_start.call(this);
			this._commandWindow._moveSpeed = _.speed;
			this._commandWindow._originalY = this._commandWindow.y;
			this._statusWindow._moveSpeed = _.speed;
			this._statusWindow._originalY = this._statusWindow.y;
		};

		var _Scene_Menu_update = Scene_Menu.prototype.update;
		Scene_Menu.prototype.update = function() {
			_Scene_Menu_update.call(this);
			this.shakeDaWindow(this._commandWindow);
			this.shakeDaWindow(this._statusWindow);
		};
	}

	//-----------------------------------------------------------------------------
	// Scene_Item
	//-----------------------------------------------------------------------------

	if(_.shakeItem) {
		var _Scene_Item_create = Scene_Item.prototype.create;
		Scene_Item.prototype.create = function() {
			_Scene_Item_create.call(this);
			this._categoryWindow._moveSpeed = _.speed;
			this._categoryWindow._originalY = this._categoryWindow.y;
			this._itemWindow._moveSpeed = _.speed;
			this._itemWindow._originalY = this._itemWindow.y;
		};

		var _Scene_Item_update = Scene_Item.prototype.update;
		Scene_Item.prototype.update = function() {
			_Scene_Item_update.call(this);
			this.shakeDaWindow(this._categoryWindow);
			this.shakeDaWindow(this._itemWindow);
		};
	}

	//-----------------------------------------------------------------------------
	// Scene_Skill
	//-----------------------------------------------------------------------------

	if(_.shakeSkill) {
		var _Scene_Skill_create = Scene_Skill.prototype.create;
		Scene_Skill.prototype.create = function() {
			_Scene_Skill_create.call(this);
			this._skillTypeWindow._moveSpeed = _.speed;
			this._skillTypeWindow._originalY = this._skillTypeWindow.y;
			this._itemWindow._moveSpeed = _.speed;
			this._itemWindow._originalY = this._itemWindow.y;
		};

		var _Scene_Skill_update = Scene_Skill.prototype.update;
		Scene_Skill.prototype.update = function() {
			_Scene_Skill_update.call(this);
			this.shakeDaWindow(this._skillTypeWindow);
			this.shakeDaWindow(this._itemWindow);
		};
	}

	//-----------------------------------------------------------------------------
	// Scene_Equip
	//-----------------------------------------------------------------------------

	if(_.shakeEquip) {
		var _Scene_Equip_create = Scene_Equip.prototype.create;
		Scene_Equip.prototype.create = function() {
			_Scene_Equip_create.call(this);
			this._commandWindow._moveSpeed = _.speed;
			this._commandWindow._originalY = this._commandWindow.y;
			this._slotWindow._moveSpeed = _.speed;
			this._slotWindow._originalY = this._slotWindow.y;
			this._itemWindow._moveSpeed = _.speed;
			this._itemWindow._originalY = this._itemWindow.y;
		};

		var _Scene_Equip_update = Scene_Equip.prototype.update;
		Scene_Equip.prototype.update = function() {
			_Scene_Equip_update.call(this);
			this.shakeDaWindow(this._commandWindow);
			this.shakeDaWindow(this._slotWindow);
			this.shakeDaWindow(this._itemWindow);
		};
	}

	//-----------------------------------------------------------------------------
	// Scene_Options
	//-----------------------------------------------------------------------------

	if(_.shakeOptions) {
		var _Scene_Options_create = Scene_Options.prototype.create;
		Scene_Options.prototype.create = function() {
			_Scene_Options_create.call(this);
			this._optionsWindow._moveSpeed = _.speed;
			this._optionsWindow._originalY = this._optionsWindow.y;
		};

		var _Scene_Options_update = Scene_Options.prototype.update;
		Scene_Options.prototype.update = function() {
			_Scene_Options_update.call(this);
			this.shakeDaWindow(this._optionsWindow);
		};
	}

	//-----------------------------------------------------------------------------
	// Scene_File
	//-----------------------------------------------------------------------------

	if(_.shakeFile) {
		var _Scene_File_create = Scene_File.prototype.create;
		Scene_File.prototype.create = function() {
			_Scene_File_create.call(this);
			this._listWindow._moveSpeed = _.speed;
			this._listWindow._originalY = this._listWindow.y;
		};

		var _Scene_File_update = Scene_File.prototype.update;
		Scene_File.prototype.update = function() {
			_Scene_File_update.call(this);
			this.shakeDaWindow(this._listWindow);
		};
	}

	//-----------------------------------------------------------------------------
	// Scene_GameEnd
	//-----------------------------------------------------------------------------

	if(_.shakeGameEnd) {
		var _Scene_GameEnd_create = Scene_GameEnd.prototype.create;
		Scene_GameEnd.prototype.create = function() {
			_Scene_GameEnd_create.call(this);
			this._commandWindow._moveSpeed = _.speed;
			this._commandWindow._originalY = this._commandWindow.y;
		};

		var _Scene_GameEnd_update = Scene_GameEnd.prototype.update;
		Scene_GameEnd.prototype.update = function() {
			_Scene_GameEnd_update.call(this);
			this.shakeDaWindow(this._commandWindow);
		};
	}

	//-----------------------------------------------------------------------------
	// Scene_Shop
	//-----------------------------------------------------------------------------

	if(_.shakeShop) {
		var _Scene_Shop_create = Scene_Shop.prototype.create;
		Scene_Shop.prototype.create = function() {
			_Scene_Shop_create.call(this);
			this._commandWindow._moveSpeed = _.speed;
			this._commandWindow._originalY = this._commandWindow.y;
			this._numberWindow._moveSpeed = _.speed;
			this._numberWindow._originalY = this._numberWindow.y;
			this._statusWindow._moveSpeed = _.speed;
			this._statusWindow._originalY = this._statusWindow.y;
			this._buyWindow._moveSpeed = _.speed;
			this._buyWindow._originalY = this._buyWindow.y;
			this._categoryWindow._moveSpeed = _.speed;
			this._categoryWindow._originalY = this._categoryWindow.y;
			this._sellWindow._moveSpeed = _.speed;
			this._sellWindow._originalY = this._sellWindow.y;
		};

		var _Scene_Shop_update = Scene_Shop.prototype.update;
		Scene_Shop.prototype.update = function() {
			_Scene_Shop_update.call(this);
			this.shakeDaWindow(this._commandWindow);
			this.shakeDaWindow(this._numberWindow);
			this.shakeDaWindow(this._statusWindow);
			this.shakeDaWindow(this._buyWindow);
			this.shakeDaWindow(this._categoryWindow);
			this.shakeDaWindow(this._sellWindow);
		};
	}

	//-----------------------------------------------------------------------------
	// Scene_Battle
	//-----------------------------------------------------------------------------

	if(_.shakeBattle) {
		var _Scene_Battle_create = Scene_Battle.prototype.create;
		Scene_Battle.prototype.create = function() {
			_Scene_Battle_create.call(this);
			this._statusWindow._moveSpeed = _.speed;
			this._statusWindow._originalY = this._statusWindow.y;
			this._partyCommandWindow._moveSpeed = _.speed;
			this._partyCommandWindow._originalY = this._partyCommandWindow.y;
			this._actorCommandWindow._moveSpeed = _.speed;
			this._actorCommandWindow._originalY = this._actorCommandWindow.y;
			this._skillWindow._moveSpeed = _.speed;
			this._skillWindow._originalY = this._skillWindow.y;
			this._itemWindow._moveSpeed = _.speed;
			this._itemWindow._originalY = this._itemWindow.y;
			this._enemyWindow._moveSpeed = _.speed;
			this._enemyWindow._originalY = this._enemyWindow.y;
			this._actorWindow._moveSpeed = _.speed;
			this._actorWindow._originalY = this._actorWindow.y;
		};

		var _Scene_Battle_update = Scene_Battle.prototype.update;
		Scene_Battle.prototype.update = function() {
			_Scene_Battle_update.call(this);
			this.shakeDaWindow(this._statusWindow);
			this.shakeDaWindow(this._partyCommandWindow);
			this.shakeDaWindow(this._actorCommandWindow);
			this.shakeDaWindow(this._skillWindow);
			this.shakeDaWindow(this._itemWindow);
			this.shakeDaWindow(this._enemyWindow);
			this.shakeDaWindow(this._actorWindow);
		};
	}

})(SRD.ShakingWindows);