/*:
 * @plugindesc Allows developers to create their own map-based HUD through an in-game GUI window!
 * @author SumRndmDde
 *
 * @param Show During Events
 * @desc Sets what happens to the HUD during event processing.
 * Choices are:   hide    -    show    -    transparent
 * @default transparent
 *
 * @help
 *
 * HUD Maker
 * Version 1.12
 * SumRndmDde
 *
 *
 * This plugin allows developers to create their own map-based HUD through 
 * an in-game GUI window!
 *
 *
 * ==============================================================================
 *  Image Installation
 * ==============================================================================
 *
 * All HUD images must be placed in:
 *
 *   /img/SumRndmDde/hud/
 *
 *
 * They need to be segmented into four folders: 
 *  - pictures
 *  - numbers
 *  - gauge_images
 *  - gauge_backs
 *
 *
 * Each folder will be used to hold images for the corresponding pieces:
 *  - Picture
 *  - Image Numbers
 *  - Image Gauge
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
SRD.HUDMaker = SRD.HUDMaker || {};

var Imported = Imported || {};
Imported["SumRndmDde HUD Maker"] = 1.12;

var $dataMapHUD = [];
var $dataBattleHUD = [];

function MapHUD() {
	this.initialize.apply(this, arguments);
}

function BattleHUD() {
	this.initialize.apply(this, arguments);
}

function HUDManager() {
	throw new Error('Lol, what are you doing? HUDManager is a static class. Noob.');
}

(function(_) {

"use strict";

//-----------------------------------------------------------------------------
// SRD.HUDMaker
//-----------------------------------------------------------------------------

_.alertNeedSuperToolsEngine = function(update) {
	if(update) {
		alert("The 'SRD_SuperToolsEngine' needs to be version 1.12 or greater to use the 'SRD_HUDMaker' plugin.");
	} else {
		alert("The 'SRD_SuperToolsEngine' plugin is required for using the 'SRD_HUDMaker' plugin.");
	}
	if(confirm("Do you want to open the download page to 'SRD_SuperToolsEngine'?")) {
		window.open('http://sumrndm.site/super-tools-engine/');
	}
};

if(!Imported["SumRndmDde Super Tools Engine"]) {
	_.alertNeedSuperToolsEngine(false);
	return;
} else if(Imported["SumRndmDde Super Tools Engine"] < 1.12) {
	_.alertNeedSuperToolsEngine(true);
	return;
}

const params = PluginManager.parameters('SRD_HUDMaker');
_.duringEvents = String(params['Show During Events']).trim().toLowerCase();

_.isPlaytest = SRD.SuperToolsEngine.isPlaytest;
_.mapFile = "MapHUD.json";
_.battleFile = "BattleHUD.json";

_.trueColor = '#82f2be';
_.falseColor = '#f18181';

_.relativeColor = '#3385ff';
_.globalColor = '#e67300';

_.overlayColor = '#cc3399';
_.surrondColor = '#669900';

_.pad = function(value) {
	return (value < 10) ? "0" + value : value;
};

_.convertHex = function(hex, opacity){
	hex = hex.replace('#','');
	const r = parseInt(hex.substring(0,2), 16);
	const g = parseInt(hex.substring(2,4), 16);
	const b = parseInt(hex.substring(4,6), 16);
	return 'rgba(' + r + ',' + g + ',' + b + ',' + opacity/255 + ')';
};

_.blendNames = [];
for(var key in PIXI.BLEND_MODES) {
	_.blendNames.push(key);
}

_.getPicture = function(filename, hue) {
	return ImageManager.loadBitmap('img/SumRndmDde/hud/pictures/', filename, hue, false);
};

_.getGauge = function(filename, hue) {
	return ImageManager.loadBitmap('img/SumRndmDde/hud/gauge_images/', filename, hue, false);
};

_.getGaugeBack = function(filename, hue) {
	return ImageManager.loadBitmap('img/SumRndmDde/hud/gauge_backs/', filename, hue, false);
};

_.getNumbers = function(filename, hue) {
	return ImageManager.loadBitmap('img/SumRndmDde/hud/numbers/', filename, hue, false);
};

if(_.isPlaytest) {

_.saveData = function() {
	if(SceneManager._scene.constructor === Scene_Map) {
		FileManager.saveData($dataMapHUD, _.mapFile);
	} else {
		FileManager.saveData($dataBattleHUD, _.battleFile);
	}
};

_.checkDataExists = function() {
	FileManager.checkDataExists(_.mapFile);
	FileManager.checkDataExists(_.battleFile);
};

_.getFileList = function(folder) {
	return FileManager.getFileList('hud', folder);
};

_.getFirstFile = function(folder) {
	return FileManager.getFirstFile('hud', folder);
};

_.checkDataExists();

}

//-----------------------------------------------------------------------------
// Bitmap
//-----------------------------------------------------------------------------

Bitmap.prototype.drawOval = function(x, y, width, height, color) {
	const context = this._context;
	context.save();
	context.beginPath();
	context.ellipse(x, y, width, height, 0, 0, Math.PI*2);
	context.fillStyle = color;
	context.fill();
	context.restore();
	this._setDirty();
};

//-----------------------------------------------------------------------------
// WindowLayer
//-----------------------------------------------------------------------------

_.WindowLayer_update = WindowLayer.prototype.update;
WindowLayer.prototype.update = function() {
	if($gameTemp.isManipulatingHud) return;
    _.WindowLayer_update.apply(this, arguments);
};

//-----------------------------------------------------------------------------
// MapHUD
//-----------------------------------------------------------------------------

MapHUD.prototype = Object.create(PIXI.Container.prototype);
MapHUD.prototype.constructor = MapHUD;

Object.defineProperty(MapHUD.prototype, 'opacity', {
    get: function() {
        return this.alpha * 255;
    },
    set: function(value) {
        this.alpha = value.clamp(0, 255) / 255;
    },
    configurable: true
});

MapHUD.prototype.initialize = function() {
	PIXI.Container.call(this);
	this.createHighlight();
};

MapHUD.prototype.createHighlight = function() {
	this._highlight = new Sprite_HUDCursor();
	this.addChild(this._highlight);
};

MapHUD.prototype.getHighlight = function() {
	return this._highlight;
};

MapHUD.prototype.update = function() {
	this.updateChildren();
	if($gameMap && $gameTemp) {
		this.updateVisibility();
	}
	if($gameTemp.isManipulatingHud) {
		this.updateEditor();
	}
};

MapHUD.prototype.updateVisibility = function() {
	if($gameTemp.isManipulatingHud) return;
	if($gameMap.isEventRunning()) {
		switch(_.duringEvents) {
			case 'transparent':
				if(!this.cacheAsBitmap) this.cacheAsBitmap = true;
				if(this.opacity > 150) this.opacity -= 10;
				break;
			case 'hide':
				if(this.opacity > 0) this.opacity -= 10;
				break;
		}
	} else {
		switch(_.duringEvents) {
			case 'transparent':
				if(this.cacheAsBitmap) this.cacheAsBitmap = false;
			case 'hide':
				if(this.opacity < 255) this.opacity += 10;
				break;
		}
	}
};

MapHUD.prototype.updateChildren = function() {
	this.children.forEach(function(child) {
		if (child.update) {
			child.update();
		}
	});
};

MapHUD.prototype.updateEditor = function() {
	if(TouchInput.isReleased()) {
		this.refresh();
	}
};

Tilemap.prototype.updateTransform = function() {
	this._sortChildren();
	PIXI.Container.prototype.updateTransform.apply(this, arguments);
};

MapHUD.prototype.refresh = function() {
	this._sortChildren();
};

MapHUD.prototype._sortChildren = function() {
	this.children.sort(this._compareChildOrder.bind(this));
};

MapHUD.prototype._compareChildOrder = function(a, b) {
	if (a.z !== b.z) {
		return a.z - b.z;
	} else if (a.y !== b.y) {
		return a.y - b.y;
	} else {
		return a.spriteId - b.spriteId;
	}
};

//-----------------------------------------------------------------------------
// BattleHUD
//-----------------------------------------------------------------------------

BattleHUD.prototype = Object.create(MapHUD.prototype);
BattleHUD.prototype.constructor = BattleHUD;

BattleHUD.prototype.updateVisibility = function() {
	if($gameTemp.isManipulatingHud) return;
	if($gameTroop.isEventRunning()) {
		switch(_.duringEvents) {
			case 'transparent':
				if(!this.cacheAsBitmap) this.cacheAsBitmap = true;
				if(this.opacity > 150) this.opacity -= 10;
				break;
			case 'hide':
				if(this.opacity > 0) this.opacity -= 10;
				break;
		}
	} else {
		switch(_.duringEvents) {
			case 'transparent':
				if(this.cacheAsBitmap) this.cacheAsBitmap = false;
			case 'hide':
				if(this.opacity < 255) this.opacity += 10;
				break;
		}
	}
};

//-----------------------------------------------------------------------------
// DataManager
//-----------------------------------------------------------------------------

DataManager._testExceptions.push(_.mapFile, _.battleFile);

DataManager._databaseFiles.push(
	{name: '$dataMapHUD', src: _.mapFile},
	{name: '$dataBattleHUD', src: _.battleFile}
);

//-----------------------------------------------------------------------------
// SceneManager
//-----------------------------------------------------------------------------

_.SceneManager_onKeyDown = SceneManager.onKeyDown;
SceneManager.onKeyDown = function(event) {
	_.SceneManager_onKeyDown.apply(this, arguments);
	if($gameTemp && $gameTemp.isManipulatingHud) {
		this.onKeyDownHUDMaker(event);
	}
};

SceneManager.onKeyDownHUDMaker = function(event) {
	if(!event.ctrlKey && event.keyCode === 46) {
		// Delete
		if(HUDManager._currentId >= 0) {
			HUDManager.onDelete();
		}
	} else if(event.ctrlKey && event.keyCode === 83) {
		// Save
		if(HUDManager._currentId >= 0) {
			HUDManager.refreshSprite();
		}
	}
};

//-----------------------------------------------------------------------------
// BattleManager
//-----------------------------------------------------------------------------

_.BattleManager_isBusy = BattleManager.isBusy;
BattleManager.isBusy = function() {
    return _.BattleManager_isBusy.apply(this, arguments) || $gameTemp.isManipulatingHud;
};

//-----------------------------------------------------------------------------
// MakerManager
//-----------------------------------------------------------------------------

_.MakerManager_onFinish = MakerManager.onFinish;
MakerManager.onFinish = function() {
	_.MakerManager_onFinish.apply(this, arguments);
	if(this.mode === 'hud') {
		HUDManager.onFinish();
	}
};

_.MakerManager_assignWindow = MakerManager.assignWindow;
MakerManager.assignWindow = function() {
	_.MakerManager_assignWindow.apply(this, arguments);
	this.window.window.HUDManager = HUDManager;
};

_.MakerManager_getLauncherButtonsRaw = MakerManager.getLauncherButtonsRaw;
MakerManager.getLauncherButtonsRaw = function() {
	const result = _.MakerManager_getLauncherButtonsRaw.apply(this, arguments);
	result.push(`${this.generateLauncherRow("HUD Maker", "Allows developers to create their own map-based HUD through an in-game GUI window.", "HUDManager.setupWindowHtml()", "#cca300")}`);
	return result;
};

//-----------------------------------------------------------------------------
// HUDManager
//-----------------------------------------------------------------------------

HUDManager.typeNames = [];
HUDManager.types = {};
HUDManager.nextId = 1;
HUDManager.showPiecesType = true;

HUDManager.setup = function(data, hud) {
	this._sprites = [];
	this._data = data;
	this._hud = hud;
	this._currentId = -1;
	this.setupData();
	this.refreshLayers();
};

HUDManager.setupData = function() {
	for(let i = 0; i < this._data.length; i++) {
		const data = this._data[i];
		if(!data) continue;
		this.rebuildSprite(data, i);
		if(data.id >= this.nextId) {
			this.nextId = data.id + 1;
		}
	}
};

HUDManager.rebuildSprite = function(data, i) {
	let sprite = this.getRebuildSprite(data);
	sprite._originalX = data.x;
	sprite._originalY = data.y;
	sprite.setHighlight(this.getHighlight());
	this._hud.addChild(sprite);
	this._sprites[i] = sprite;
};

HUDManager.getRebuildSprite = function(data) {
	const type = this.types[data.type];
	if(type) {
		return new type.class(data);
	} else {
		return null;
	}
};

HUDManager.createWindow = function() {
	this.initHudMaker();
	MakerManager.window.focus();
};

HUDManager.getSprites = function() {
	return this._sprites;
};

HUDManager.getSprite = function() {
	return this._sprites[this._currentId];
};

HUDManager.getData = function() {
	return this._data[this._currentId];
};

HUDManager.refreshLayers = function() {
	this._hud.refresh();
};

HUDManager.getSpritesOnLayer = function(layer) {
	const result = [];
	this._sprites.forEach(function(sprite) {
		if(sprite.z === layer) {
			result.push(sprite.y);
		}
	}, this);
	return result;
};

HUDManager.refreshHighlightZ = function() {
	const sprite = this.getSprite();
	if(sprite) {
		this.getHighlight().z = sprite.z - 0.1;
		this.refreshLayers();
	}
};

HUDManager.initHudMaker = function() {
	this._currentId = 0;
	this.refreshChoices();
	this.onChange();
};

HUDManager.onChange = function() {
	if(!MakerManager.window) return;
	const doc = MakerManager.document;
	const id = parseInt(doc.getElementById('choices').value);
	if(!id && id !== 0) {
		doc.getElementById('settings').innerHTML = this.getBlankTableHtml();
		return;
	}
	this.onChangeProperties(id);
	this._currentId = id;
	this.refreshHighlight();
};

HUDManager.onChangeProperties = function(id) {
	const data = this._data[id];
	MakerManager.document.getElementById('settings').innerHTML = this.getTableHtml(data);
};

HUDManager.onAnimateChange = function() {
	if(!MakerManager.window) return;
	const id = parseInt(MakerManager.document.getElementById('choices').value);
	this._currentId = id;
	this.setupAnimator();
	this.refreshHighlight();
};

HUDManager.getTableHtml = function(data) {
	const type = this.types[data.type];
	if(type) {
		return type.html(data);
	} else {
		return this.getBlankTableHtml();
	}
};

HUDManager.getHighlight = function() {
	return this._hud.getHighlight();
};

HUDManager.refreshHighlight = function() {
	this._sprites.forEach(function(sprite) {
		sprite.cancelAsTarget();
	});
	if(this._currentId || this._currentId === 0) {
		const spr = this.getSprite();
		if(spr) {
			spr.setAsTarget();
			this.getHighlight().setup(spr);
		} else {
			this.getHighlight().setup(null);
		}
	}
	this.refreshHighlightZ();
};

HUDManager.onCreate = function() {
	if(!MakerManager.window) return;
	const createType = String(MakerManager.document.getElementById('createSelect').value);
	this.createNew(createType);
	this.onChange();
};

HUDManager.createNew = function(kind) {
	const type = this.types[kind];
	if(!type) return;
	const data = JsonEx.makeDeepCopy(type.data);
	data.animateInfo = HUDManager.getAnimateInfo();
	const sprite = new type.class(data);
	this._data.push(data);
	this.setupNewSprite(sprite);
	this.refreshChoices();
};

HUDManager.getAnimateInfo = function() {
	const data = {};
	data.x = {
		spd: 0,
		loop: false,
		min: 0,
		max: 0
	};
	data.y = {
		spd: 0,
		loop: false,
		min: 0,
		max: 0
	};
	data.s = {
		spd: 0,
		loop: false,
		min: 1,
		max: 1
	};
	data.r = {
		spd: 0,
		loop: false,
		min: 0,
		max: 0
	};
	return data;
};

HUDManager.setupNewSprite = function(sprite) {
	sprite._originalX = Graphics.boxWidth / 2;
	sprite._originalY = Graphics.boxHeight / 2;
	sprite.setHighlight(this.getHighlight());
	this._hud.addChild(sprite);
	this._sprites.push(sprite);
	this._currentId = this._sprites.length - 1;
	this.refreshCurrentId();
	this.getData().id = this.nextId;
	this.nextId++;
};

HUDManager.refreshCurrentId = function() {
	if(this._sprites.length > 0) {
		for(let i = this._currentId; i >= 0; i--) {
			const s = this._sprites[i];
			if(s && s._isActive) {
				this._currentId = i;
				return;
			}
		}
		for(let i = this._currentId; i < this._sprites.length; i++) {
			const s = this._sprites[i];
			if(s && s._isActive) {
				this._currentId = i;
				return;
			}
		}
	}
};

HUDManager.refreshChoices = function() {
	if(!MakerManager.window) return;
	const doc = MakerManager.document;
	let result = '';
	for(let i = 0; i < this._data.length; i++) {
		const data = this._data[i];
		const sprite = this._sprites[i];
		if(!this.showPiecesType && !sprite._isActive) continue;
		let value = '';
		const type = this.types[data.type];
		if(type) {
			value = type.format(data);
		}
		result += "<option value=" + i + " " + ((this._currentId === i) ? "selected" : "") + ">[" + _.pad(data.id) + "] " + data.type + " (" + value + ")</option>";
	}
	doc.getElementById('choices').innerHTML = result;
	doc.getElementById('choices').value = String(this._currentId);
};

HUDManager.refreshSprite = function() {
	if(!MakerManager.window) return;
	const sprite = this.getSprite();
	const data = this.getData();
	const tempActive = sprite._isActive;
	this.refreshSpriteAndData(sprite, data);
	sprite.refresh(true);
	sprite.update();
	this.refreshHighlight();
	this.refreshChoices();
	if(!this.showPiecesType) {
		if(this._sprites.length > 0) {
			this.refreshCurrentId();
		} else {
			this._currentId = null;
			this.getHighlight().setup(null);
		}
		this.refreshChoices();
		this.onChange();
	}
	this.refreshLayers();
};

HUDManager.refreshSpriteAndData = function(sprite, data) {
	const props = sprite.properties;
	for(let i = 0; i < props.length; i++) {
		const prop = props[i];
		const value = String(MakerManager.document.getElementById(prop).value);
		sprite[prop] = value;
		data[prop] = value;
	}
};

HUDManager.onDelete = function() {
	const sprites = [];
	const datas = [];
	for(let i = 0; i < this._sprites.length; i++) {
		if(this._currentId === i) {
			this._sprites[i].cancelAsTarget();
			this._hud.removeChild(this._sprites[i])
			continue;
		}
		sprites.push(this._sprites[i]);
		datas.push(this._data[i]);
	}
	this._sprites = sprites;
	this._data = datas;
	if(!this._sprites[this._currentId]) {
		if(this._sprites.length > 0) {
			//this._currentId = 0;
			this.refreshCurrentId();
		} else {
			this._currentId = null;
			this.getHighlight().setup(null);
		}
	}
	this.refreshChoices();
	this.onChange();
};

HUDManager.onClone = function() {
	const data = JsonEx.makeDeepCopy(this.getData());
	const type = data.type;
	this._data.push(data);
	const sprite = new this.types[type].class(data);
	this.setupNewSprite(sprite);
	this.refreshChoices();
	this.onChange();
};

HUDManager.onSnapToggle = function() {
	const container = MakerManager.document.getElementById('SnapButton');
	const button = MakerManager.document.getElementById('snapButtonToggle');
	if(!this.snapMode) {
		container.innerHTML = `<td align="center"><button class="button" id="snapButtonToggle" 
								style="background-color: ${_.relativeColor};" onclick="HUDManager.onSnapToggle()" />Snap Type: Relative</button></td>`;
		this.snapMode = true;
		this.getSprite().setupSnaps();
	} else {
		container.innerHTML = `<td align="center"><button class="button" id="snapButtonToggle" 
								style="background-color: ${_.globalColor};" onclick="HUDManager.onSnapToggle()" />Snap Type: Global</button></td>`;
		this.snapMode = false;
		this.getSprite().setupSnaps();
	}
};

HUDManager.onHighToggle = function() {
	const container = MakerManager.document.getElementById('HighButton');
	const button = MakerManager.document.getElementById('highButtonToggle');
	if(!this.highlightType) {
		container.innerHTML = `<td align="center"><button class="button" id="highButtonToggle" 
								style="background-color: ${_.overlayColor};" onclick="HUDManager.onHighToggle()" />Highlight: Overlay</button></td>`;
		this.highlightType = true;
		this.getHighlight().refreshColor();
	} else {
		container.innerHTML = `<td align="center"><button class="button" id="highButtonToggle" 
								style="background-color: ${_.surrondColor};" onclick="HUDManager.onHighToggle()" />Highlight: Surrond</button></td>`;
		this.highlightType = false;
		this.getHighlight().refreshColor();
	}
};

HUDManager.onShowToggle = function() {
	const container = MakerManager.document.getElementById('ShowButton');
	const button = MakerManager.document.getElementById('showButtonToggle');
	if(this.showPiecesType) {
		container.innerHTML = `<td align="center"><button class="button" id="showButtonToggle" 
								style="background-color: ${_.surrondColor};" onclick="HUDManager.onShowToggle()" />Hidden Pieces: Hide</button></td>`;
		this.showPiecesType = false;
		if(this._sprites.length > 0) {
			this.refreshCurrentId();
		}
		else {
			this._currentId = null;
			this.getHighlight().setup(null);
		}
	} else {
		container.innerHTML = `<td align="center"><button class="button" id="showButtonToggle" 
								style="background-color: ${_.overlayColor};" onclick="HUDManager.onShowToggle()" />Hidden Pieces: Show</button></td>`;
		this.showPiecesType = true;
	}
	this.refreshChoices();
	this.onChange();
};

HUDManager.onFinish = function() {
	this._spriteTarget = null;
	this.getHighlight().setup(null);
	this._sprites.forEach(function(sprite) {
		sprite.cancelAsTarget();
	});
	this.save();
	SceneManager._scene.endHud();
};

HUDManager.save = function() {
	for(let i = 0; i < this._sprites.length; i++) {
		const spr = this._sprites[i];
		if(!spr) continue;
		this._data[i].x = spr._originalX;
		this._data[i].y = spr._originalY;
	}
	if(SceneManager._scene.constructor === Scene_Map) {
		$dataMapHUD = JsonEx.makeDeepCopy(this._data);
	} else {
		$dataBattleHUD = JsonEx.makeDeepCopy(this._data);
	}
	_.saveData();
};

HUDManager.setupAnimator = function() {
	const doc = MakerManager.document;
	const data = this.getData().animateInfo;
	doc.getElementById('X').innerHTML = this.getAnimatorSection('X', data.x, 'X Offset');
	doc.getElementById('Y').innerHTML = this.getAnimatorSection('Y', data.y, 'Y Offset');
	doc.getElementById('Scale').innerHTML = this.getAnimatorSection('Scale', data.s);
	doc.getElementById('Rotation').innerHTML = this.getAnimatorSection('Rotation', data.r);
};

HUDManager.onAnimateRefresh = function() {
	if(!MakerManager.window) return;
	const sprite = this.getSprite();
	const data = this.getData();
	this.refreshAnimationSpriteAndData(sprite, data);
};

HUDManager.refreshAnimationSpriteAndData = function(sprite, data) {
	const props = sprite.properties;
	const doc = MakerManager.document;
	const titles = ['X', 'Y', 'Scale', 'Rotation'];
	const ends = ['spd', 'min', 'max', 'loop'];
	for(let i = 0; i < titles.length; i++) {
		for(let j = 0; j < ends.length; j++) {
			const code = titles[i] + " " + ends[j];
			const info = doc.getElementById(code).value;
			const dataCode = titles[i].substring(0, 1).toLowerCase();
			if(j === 3) {
				data.animateInfo[dataCode][ends[j]] = !!doc.getElementById(code).checked;
			} else {
				data.animateInfo[dataCode][ends[j]] = parseFloat(info);
			}
		}
	}
	this.getSprite().setupAnimationInfo(data.animateInfo);
	this.getSprite().refresh(true);
};

HUDManager.returnToMaker = function() {
	this.onFinish();
	MakerManager.setupWindowHtml();
};

//-----------------------------------------------------------------------------
// HUDManager
//-----------------------------------------------------------------------------

HUDManager.createTitle = function(id, type) {
	return `<h3 style="text-align:center;"><b>(ID: ${id})</b> ${type} Element</h3>`;
};

HUDManager.createHeader = function() {
	return `<tr>
				<th style="width: 75px;">Property</th>
				<th>Value</th>
			</tr>`;
};

HUDManager.createInput = function(id, value) {
	return `<tr>
				<td>${id}:</td>
				<td><input type="text" id="${id}" value="${value}"></td>
			</tr>`;
};

HUDManager.createConditionInput = function(id, value) {
	let bool = true;
	try {
		if(value.length > 0) {
			bool = eval(value);
		}
	} catch(e) {
		console.log(value + " \n" + e);
		alert("There is an error with \"" + value + "\" Press F8 to see more!");
		value = '';
	}
	const color = (bool) ? _.trueColor : _.falseColor;
	return `<tr id="Condition Bla">
				<td>${id}:</td>
				<td><input type="text" id="${id}" value="${value}" style="background-color:${color};"></td>
			</tr>`;
};

HUDManager.createSelect = function(id) {
	let result = `<tr>
					<td>${id}:</td>
					<td align="center">
						<select id="${id}" style="width:100%">`;
	for(let i = 1; i < arguments.length; i++) {
		const info = arguments[i];
		result += '<option value="' + info[0] + '" ' + info[1] + '>' + info[2] + '</option>';
	}
	result += `			</select>
					</td>
				</tr>`;
	return result;
};

HUDManager.createSelectArray = function(id, options) {
	let result = `<tr>
					<td>${id}:</td>
					<td align="center">
						<select id="${id}" style="width:100%">`;
	for(let i = 0; i < options.length; i++) {
		const info = options[i];
		result += '<option value="' + info[0] + '" ' + info[1] + '>' + info[2] + '</option>';
	}
	result += `			</select>
					</td>
				</tr>`;
	return result;
};

HUDManager.createColor = function(id, value, id2, value2) {
	return `<tr>
				<td>${id}:</td>
				<td align="center"><input type="color" id="${id}" value="${value}" style="width:90%"><br style="line-height: 175%;">
				Opacity: <input type="text" id="${id2}" value="${value2}" style="width:50%"></td>
			</tr>`;
};

HUDManager.createFilelist = function(id, folder, value, includeNone) {
	const files = _.getFileList(folder);
	let select = '';
	let result = `<tr>
					<td>${id}:</td>
					<td align="center">
						<select id="${id}" style="width:100%">`;
	if(includeNone) {
		if(value === "N\n\nONE") select = 'selected';
		else select = '';
		result += '<option value="N\n\nONE" ' + select + '>[NONE]</option>';
	}
	for(let i = 0; i < files.length; i++) {
		const file = files[i];
		if(file === value) select = 'selected';
		else select = '';
		result += '<option value="' + file + '" ' + select + '>' + file + '</option>';
	}
	result += `			</select>
					</td>
				</tr>`;
	return result;
};

//-----------------------------------------------------------------------------
// HUDManager
//-----------------------------------------------------------------------------

HUDManager.getMakerHtml = function() {
	const create = this.getHtmlCreateChart();
	const focus = this.getHtmlFocusChart();
	const options = this.getHtmlOptionsChart();

	return `<div style="width:40%; padding:0 10pt 0 0; float:left;">
				<p id="settings">
				</p>
			</div>

			<div style="width:40%; padding:0 10pt 0 0; float:right;"><p>
				${create}
				<br><br>
				${focus}
				<br><br>
				${options}
			</p></div>`;
};

HUDManager.getHtmlCreateChart = function() {
	const options = HUDManager.getHtmlCreateChartOptions();
	return `<table>
				<tr>
					<th>Create New Element</th>
				</tr>
				<tr>
					<td align="center">
					<select id="createSelect">
						${options}
					</select>
					</td>
				</tr>
				<tr>
					<td align="center"><button class="button" id="createButton" onclick="HUDManager.onCreate()" />Create New!</button></td>
				</tr>
			</table>`;
};

HUDManager.getHtmlFocusChart = function() {
	return `<table>
				<tr>
					<th align="center">Element Manager</th>
				</tr>
				<tr>
					<td align="center"><select id="choices" onchange='HUDManager.onChange()'></select></td>
				</tr>
				<tr>
					<td align="center"><button class="button" id="deleteButton" onclick="HUDManager.onDelete()" />Delete!</button></td>
				</tr>
				<tr>
					<td align="center"><button class="button" id="cloneButton" onclick="HUDManager.onClone()" />Clone!</button></td>
				</tr>
			</table>`;
};

HUDManager.getHtmlOptionsChart = function() {
	return `<table>
				<tr>
					<th align="center">Options</th>
				</tr>
				<tr id="SnapButton">
					<td align="center"><button class="button" id="snapButtonToggle" 
					style="background-color: ${_.globalColor};" onclick="HUDManager.onSnapToggle()" />Snap Type: Global</button></td>
				</tr>
				<tr id="HighButton">
					<td align="center"><button class="button" id="highButtonToggle" 
					style="background-color: ${_.surrondColor};" onclick="HUDManager.onHighToggle()" />Highlight: Surrond</button></td>
				</tr>
				<tr id="ShowButton">
					<td align="center"><button class="button" id="showButtonToggle" 
					style="background-color: ${_.overlayColor};" onclick="HUDManager.onShowToggle()" />Hidden Pieces: Show</button></td>
				</tr>
			</table>`;
};

HUDManager.getHtmlCreateChartOptions = function() {
	let result = '';
	let select = 'selected';
	HUDManager.typeNames.forEach(function(name) {
		result += '<option value="' + name + '" ' + select + '>' + name + '</option>';
		select = '';
	}, this);
	return result;
};

//-----------------------------------------------------------------------------
// HUDManager
//-----------------------------------------------------------------------------

HUDManager.createRefresh = function() {
	return `<tr>
				<td style="width: 75px;">Refresh:</td>
				<td align="center"><button class="button" id="refreshButton" onclick="HUDManager.refreshSprite()" />Refresh!</button></td>
			</tr>`;
};

HUDManager.getBlankTableHtml = function() {
	return `<h3 style="text-align:center;">No Elements Exist!</h3>
			<table>
				${this.createHeader()}
				${this.createRefresh()}
			</table>`;
};

HUDManager.setupWindowHtml = function() {
	const scene = SceneManager._scene;
	if(scene.constructor === Scene_Map || scene.constructor === Scene_Battle) {
		MakerManager.style.innerHTML = this.getStyle();
		MakerManager.window.title = "Game Tool Engine  -  HUD Maker  |  SumRndmDde";
		MakerManager.mode = 'hud';
		this.setupMakerHtml();
		scene.startHud();
	} else {
		alert("You must be on a map or in battle to use HUD Maker!")
	}
};

HUDManager.topBar = function(type) {
	const active = ['', '', '', ''];
	active[type] = 'class="active"';
	return `<ul style="cursor:pointer">
				<li><a ${active[0]} onclick="HUDManager.setupMakerHtml()">Maker</a></li>
				<li><a ${active[1]} onclick="HUDManager.setupAnimatorHtml()">Animate</a></li>
				<li><a ${active[2]} onclick="HUDManager.setupControlsHtml()">Controls</a></li>
				<li><a ${active[3]} onclick="HUDManager.setupTutorialHtml()">Tutorial</a></li>
				<li><a ${active[4]} onclick="HUDManager.setupCreditsHtml()">Resources</a></li>
				<li style="float:right"><a onclick="HUDManager.returnToMaker()">Return to Main</a></li>
			</ul>`;
};

HUDManager.setupMakerHtml = function() {
	MakerManager.document.body.innerHTML = this.topBar(0) + this.getMakerHtml();
	HUDManager.refreshChoices();
	HUDManager.onChange();
};

HUDManager.setupAnimatorHtml = function() {
	MakerManager.document.body.innerHTML = this.topBar(1) + this.getAnimatorHtml();
	HUDManager.setupAnimator();
	HUDManager.refreshChoices();
};

HUDManager.setupControlsHtml = function() {
	MakerManager.document.body.innerHTML = this.topBar(2) + this.getControlsHtml();
};

HUDManager.setupTutorialHtml = function() {
	MakerManager.document.body.innerHTML = this.topBar(3) + this.getTutorialHtml();
};

HUDManager.setupCreditsHtml = function() {
	MakerManager.document.body.innerHTML = this.topBar(4) + this.getCreditsHtml();
};

HUDManager.getAnimatorHtml = function() {
	return `<p style="text-align:center">
				Current Element: <select id="choices" onchange='HUDManager.onAnimateChange()'></select><br><br>
				<button class="button" id="refreshButton" onclick="HUDManager.onAnimateRefresh()" />Refresh!</button>
			</p>
			<div style="width:45%;padding:0 10pt 0 0;float:left;"><p>
				<p id="X">
				</p>
				<p id="Scale">
				</p>
			</p></div>

			<div style="width:45%;padding:0 10pt 0 0;float:right;"><p>
				<p id="Y">
				</p>
				<p id="Rotation">
				</p>
			</p></div>`;
};

HUDManager.getAnimatorSection = function(type, data, name) {
	name = name || type;
	const chk = (data.loop) ? 'checked' : '';
	return `<h3 style="text-align:center;">${name}</h3>
			<table>
				<tr>
					<th>Property</th>
					<th>Value</th>
				</tr>
				<tr>
					<td>Speed:</td>
					<td><input type="text" id="${type} spd" value="${data.spd}"></td>
				</tr>
				<tr>
					<td>Start:</td>
					<td><input type="text" id="${type} min" value="${data.min}"></td>
				</tr>
				<tr>
					<td>End:</td>
					<td><input type="text" id="${type} max" value="${data.max}"></td>
				</tr>
				<tr>
					<td>Loop:</td>
					<td><input type="checkbox" id="${type} loop" ${chk}></td>
				</tr>
			</table>`;
};

HUDManager.getControlsHtml = function() {
	return `<p>
				<table>
					<style>
						#Control {
							width: 150px; 
							text-align: center;
						}
					</style>
					<tr>
						<th id="Control">Input</th>
						<th>Description</th>
					</tr>
					<tr>
						<td id="Control">Right-Click</td>
						<td>While holding Right-Click, one can drag the HUD pieces around on the main screen.</td>
					</tr>
					<tr>
						<td id="Control">CTRL</td>
						<td>While holding CTRL, all snapping will be disabled when moving HUD pieces.</td>
					</tr>
					<tr>
						<td id="Control">Z</td>
						<td>While holding Z, the HUD piece will be locked to its current X coordinate.</td>
					</tr>
					<tr>
						<td id="Control">X</td>
						<td>While holding X, the HUD piece will be locked to its current Y coordinate.</td>
					</tr>
					<tr>
						<td id="Control">Arrow Keys</td>
						<td>Can be used to precisely place the HUD pieces in their desired locations; moves the selected piece 1 pixel in a specific direction.</td>
					</tr>
					<tr>
						<td id="Control">Arrow Keys + SHIFT</td>
						<td>Moves the HUD pieces in intervals of 10 pixels.</td>
					</tr>
					<tr>
						<td id="Control">Delete</td>
						<td>Deletes the currently selected HUD piece.</td>
					</tr>
					<tr>
						<td id="Control">CTRL + S</td>
						<td>Saves the current piece's settings and refreshes it on the main window.</td>
					</tr>
				</table>
			</p>`;
};

HUDManager.getTutorialHtml = function() {
	return ``;
};

HUDManager.getCreditsHtml = function() {
	return ``;
};

HUDManager.getStyle = function() {
	const colors = MakerManager.colors;
	const textColor = colors[0];
	const baseColor = colors[1];
	const hoverColor = colors[2];
	const borderColor = colors[3];
	const backgroundColor = colors[4];
	const topMenuHighlight = colors[6];
	const tableBorder = colors[8];
	const offgridColor = colors[9];
	const gridHoverColor = colors[10];
	const buttonShadow = colors[11];
	const pushedButtonShadow = colors[12];
	const inputBackground = colors[13];
	const inputBorder = colors[14];
	const inputHighlight = colors[17];
	return `table {
				font-family: "Trebuchet MS", Arial;
				border-collapse: collapse;
				width: 100%;
			}

			td {
				border: 1px solid ${tableBorder};
				padding: 8px;
			}

			tr:nth-child(even){background-color: ${offgridColor};}

			tr:hover {background-color: ${gridHoverColor};}

			th {
				border: 1px solid ${tableBorder};
				padding: 8px;
				padding-top: 12px;
				padding-bottom: 12px;
				text-align: center;
				background-color: ${baseColor};
				color: white;
			}

			button {
				display: inline-block;
				padding: 5px 10px;
				font-size: 15px;
				cursor: pointer;
				text-align: center;
				text-decoration: none;
				outline: none;
				color: #fff;
				background-color: ${baseColor};
				border: none;
				border-radius: 15px;
				box-shadow: 0 4px ${buttonShadow};
			}

			button:hover {background-color: ${hoverColor}}

			button:active {
				background-color: ${hoverColor};
				box-shadow: 0 2px ${pushedButtonShadow};
				transform: translateY(2px);
			}

			ul {
				list-style-type: none;
				margin: 0;
				padding: 0;
				overflow: hidden;
				border: 1px solid ${borderColor};
				background-color: ${backgroundColor};
			}

			li {
				float: left;
			}

			li a {
				display: block;
				color: #666;
				text-align: center;
				padding: 14px 16px;
				text-decoration: none;
			}

			li a:hover:not(.active) {
				background-color: ${topMenuHighlight};
			}

			li a.active {
				color: white;
				background-color: ${baseColor};
			}

			textarea, select {
				background-color: ${inputBackground};
				border-color: ${inputBorder};
				color: ${textColor};
			}

			input {
				border: 1px solid ${inputBorder};
				background-color: ${inputBackground};
				color: ${textColor};
			}

			input[type=text]:focus, textarea:focus, select:focus {
				box-shadow: 0 0 5px ${inputHighlight};
				border: 1px solid ${inputHighlight};
			}

			#scrollStuff::-webkit-scrollbar {
				width: 1em;
			}
			 
			#scrollStuff::-webkit-scrollbar-track {
				background-color: ${gridHoverColor};
			}
			 
			#scrollStuff::-webkit-scrollbar-thumb {
				background-color: ${borderColor};
				outline: 1px solid slategrey;
				outline-offset: -1px;
			}

			#scrollStuff::-webkit-scrollbar-corner {
				background-color: ${gridHoverColor};
			}`;
};

//-----------------------------------------------------------------------------
// Game_Temp
//-----------------------------------------------------------------------------

_.Game_Temp_initialize = Game_Temp.prototype.initialize;
Game_Temp.prototype.initialize = function() {
	_.Game_Temp_initialize.apply(this, arguments);
	this.isManipulatingHud = false;
};

//-----------------------------------------------------------------------------
// Game_Map
//-----------------------------------------------------------------------------

_.Game_Map_isEventRunning = Game_Map.prototype.isEventRunning;
Game_Map.prototype.isEventRunning = function() {
	return _.Game_Map_isEventRunning.apply(this, arguments) || $gameTemp.isManipulatingHud;
};

//-----------------------------------------------------------------------------
// Scene_Map
//-----------------------------------------------------------------------------

_.Scene_Map_start = Scene_Map.prototype.start;
Scene_Map.prototype.start = function() {
	_.Scene_Map_start.apply(this, arguments);
	if(this._hud) {
		HUDManager.setup($dataMapHUD, this._hud);
		this.createHudUpperLayer();
	}
};

_.Scene_Map_createMapNameWindow = Scene_Map.prototype.createMapNameWindow;
Scene_Map.prototype.createMapNameWindow = function() {
	_.Scene_Map_createMapNameWindow.apply(this, arguments);
	this.createHudLowerLayer();
};

Scene_Map.prototype.createHudLowerLayer = function() {
	if(_.isPlaytest) this.createHudBackground();
	this.createHud();
};

Scene_Map.prototype.createHudUpperLayer = function() {
	if(_.isPlaytest) this.addHudLines();
	if(this._fadeSprite) {
		this.removeChild(this._fadeSprite);
		this.addChild(this._fadeSprite);
	}
};

Scene_Map.prototype.createHudBackground = function() {
	this._hudBackground = new Sprite(new Bitmap(Graphics.boxWidth, Graphics.boxHeight));
	this._hudBackground.bitmap.fillRect(0, 0, Graphics.boxWidth, Graphics.boxHeight, 'rgba(0, 0, 0, 0.3)');
	this._hudBackground.opacity = 0;
	this.addChild(this._hudBackground);
};

Scene_Map.prototype.createHud = function() {
	this._hud = new MapHUD();
	this.addChild(this._hud);
};

Scene_Map.prototype.addHudLines = function() {
	const highlight = HUDManager.getHighlight();
	this.addChild(highlight.getHorizontalLine());
	this.addChild(highlight.getVerticalLine());
};

Scene_Map.prototype.startHud = function() {
	if(this._mapLoaded) {
		this._hudBackground.opacity = 255;
		HUDManager.createWindow();
		$gameTemp.isManipulatingHud = true;
	}
};

Scene_Map.prototype.endHud = function() {
	this._hudBackground.opacity = 0;
	$gameTemp.isManipulatingHud = false;
};

//-----------------------------------------------------------------------------
// Scene_Battle
//-----------------------------------------------------------------------------

_.Scene_Battle_start = Scene_Battle.prototype.start;
Scene_Battle.prototype.start = function() {
	_.Scene_Battle_start.apply(this, arguments);
	if(this._hud) {
		HUDManager.setup($dataBattleHUD, this._hud);
		this.createHudUpperLayer();
	}
};

_.Scene_Battle_createSpriteset = Scene_Battle.prototype.createSpriteset;
Scene_Battle.prototype.createSpriteset = function() {
	_.Scene_Battle_createSpriteset.apply(this, arguments);
	this.createHudLowerLayer();
};

Scene_Battle.prototype.createHudLowerLayer = function() {
	if(_.isPlaytest) this.createHudBackground();
	this.createHud();
};

Scene_Battle.prototype.createHudUpperLayer = function() {
	if(_.isPlaytest) this.addHudLines();
	if(this._fadeSprite) {
		this.removeChild(this._fadeSprite);
		this.addChild(this._fadeSprite);
	}
};

Scene_Battle.prototype.createHudBackground = function() {
	this._hudBackground = new Sprite(new Bitmap(Graphics.boxWidth, Graphics.boxHeight));
	this._hudBackground.bitmap.fillRect(0, 0, Graphics.boxWidth, Graphics.boxHeight, 'rgba(0, 0, 0, 0.3)');
	this._hudBackground.opacity = 0;
	this.addChild(this._hudBackground);
};

Scene_Battle.prototype.createHud = function() {
	this._hud = new MapHUD();
	this.addChild(this._hud);
};

Scene_Battle.prototype.addHudLines = function() {
	const highlight = HUDManager.getHighlight();
	this.addChild(highlight.getHorizontalLine());
	this.addChild(highlight.getVerticalLine());
};

Scene_Battle.prototype.startHud = function() {
	this._hudBackground.opacity = 255;
	HUDManager.createWindow();
	$gameTemp.isManipulatingHud = true;
};

Scene_Battle.prototype.endHud = function() {
	this._hudBackground.opacity = 0;
	$gameTemp.isManipulatingHud = false;
};

//-----------------------------------------------------------------------------
// Sprite_HUDCursor
//-----------------------------------------------------------------------------

function Sprite_HUDCursor() {
	this.initialize.apply(this, arguments);
}

Sprite_HUDCursor.prototype = Object.create(Sprite.prototype);
Sprite_HUDCursor.prototype.constructor = Sprite_HUDCursor;

Sprite_HUDCursor.prototype.initialize = function() {
	Sprite.prototype.initialize.call(this);
	this.bitmap = new Bitmap(1, 1);
	this.anchor.set(0.5);
	this._spriteTarget = null;
	this._speed = 8;
	this._size = 10;
	this.mode = '';
	this.createHudLines();
};

Sprite_HUDCursor.prototype.drawSquare = function(color) {
	const bit = this.bitmap;
	bit.fillRect(0, 0, bit.width, this._size, color);
	bit.fillRect(0, bit.height - this._size, bit.width, this._size, color);
	bit.fillRect(0, 0, this._size, bit.height, color);
	bit.fillRect(bit.width - this._size, 0, this._size, bit.height, color);
};

Sprite_HUDCursor.prototype.fillSquare = function(color) {
	const bit = this.bitmap;
	const size = this._size * 2;
	bit.fillRect(this._size, this._size, bit.width - size, bit.height - size, color);
};

Sprite_HUDCursor.prototype.update = function() {
	Sprite.prototype.update.apply(this, arguments);
	if(this._spriteTarget) {
		this.opacity += this._speed;
		if(this.opacity <= 100 || this.opacity >= 250) this._speed *= (-1);
		const ctrl  = Input.isPressed('control');
		const shift = Input.isPressed('shift');
		if(ctrl && this.mode !== 'ctrl') {
			this.mode = 'ctrl';
			this.refreshColor();
		}
		if(!ctrl && this.mode !== '') {
			this.mode = '';
			this.refreshColor();
		}
	}
};

Sprite_HUDCursor.prototype.setup = function(spr) {
	if(spr) {
		if(!spr.bitmap.isReady() && spr.delayHilight) {
			spr.bitmap.addLoadListener(this.setupSprite.bind(this, spr));
		} else {
			this.setupSprite(spr);
		}
	} else {
		this._spriteTarget = null;
		this.bitmap.clear();
	}
};

Sprite_HUDCursor.prototype.setupSprite = function(spr) {
	const bit = this.bitmap;
	const w = (spr.width * spr._baseXScale) + (this._size * 2);
	const h = (spr.height * spr._baseYScale) + (this._size * 2);
	bit.resize(w, h);
	this._frame.width = w;
	this._frame.height = h;
	this._refresh();
	this.refreshColor();
	this._spriteTarget = spr;
};

Sprite_HUDCursor.prototype.refreshColor = function() {
	let color = '#f08080';
	if(this.mode === 'ctrl') {
		color = '#80f080';
	}
	this.bitmap.clear();
	if(!HUDManager.highlightType) {
		this.drawSquare(color);
	} else {
		this.fillSquare(color);
	}
	
};

Sprite_HUDCursor.prototype.createHudLines = function() {
	this.horzLine = new Sprite(new Bitmap(Graphics.boxWidth, 2));
	this.vertLine = new Sprite(new Bitmap(2, Graphics.boxHeight));
	const temp = [this.horzLine, this.vertLine];
	temp.forEach(function(sprite) {
		sprite.anchor.set(0.5);
		sprite.x = Graphics.boxWidth / 2;
		sprite.y = Graphics.boxHeight / 2;
		sprite.opacity = 0;
	}.bind(this));
	this.horzLine.bitmap.fillRect(0, 0, Graphics.boxWidth, 2, "rgba(255, 0, 0, 0.7)");
	this.vertLine.bitmap.fillRect(0, 0, 2, Graphics.boxHeight, "rgba(255, 0, 0, 0.7)");
};

Sprite_HUDCursor.prototype.getHorizontalLine = function() {
	return this.horzLine;
};

Sprite_HUDCursor.prototype.getVerticalLine = function() {
	return this.vertLine;
};

//-----------------------------------------------------------------------------
// Sprite_HUDObject
//-----------------------------------------------------------------------------

function Sprite_HUDObject() {
	this.initialize.apply(this, arguments);
}

Sprite_HUDObject.prototype = Object.create(Sprite.prototype);
Sprite_HUDObject.prototype.constructor = Sprite_HUDObject;

Sprite_HUDObject.prototype.initialize = function(bitmap, data) {
	Sprite.prototype.initialize.call(this, bitmap);
	this.anchor.set(0.5);
	this.cancelAsTarget();
	this.highlight = null;
	this.snapRange = 24;
	this.xSnaps = [];
	this.ySnaps = [];
	this._hasReset = true;
	this._isActive = false;
	this.setupAnimationInfo(data.animateInfo);
};

Sprite_HUDObject.prototype.setupAnimationInfo = function(aniInfo) {
	//Dynamic Visibility
	this._condition = '';
	this._isVisible = true;

	//X Animation
	this._xSpeed = aniInfo.x.spd;
	this._xLoop  = aniInfo.x.loop;
	this._xMin   = aniInfo.x.min;
	this._xMax   = aniInfo.x.max;
	this._xDir   = 1;
	this._xOffset = 0;

	//Y Animation
	this._ySpeed = aniInfo.y.spd;
	this._yLoop  = aniInfo.y.loop;
	this._yMin   = aniInfo.y.min;
	this._yMax   = aniInfo.y.max;
	this._yDir   = 1;
	this._yOffset = 0;

	//Scale Animation
	this._sSpeed = (aniInfo.s.spd) / (100);
	this._sLoop  = aniInfo.s.loop;
	this._sMin   = aniInfo.s.min;
	this._sMax   = aniInfo.s.max;
	this._sDir   = 1;
	this._scale  = 1;
	this._sCheck = 1;
	this._baseXScale = 1;
	this._baseYScale = 1;

	//Rotation Animation
	this._rSpeed = (aniInfo.r.spd) / (360);
	this._rLoop  = aniInfo.r.loop;
	this._rMin   = (aniInfo.r.min) * (Math.PI / 180);
	this._rMax   = (aniInfo.r.max) * (Math.PI / 180);
	this._rDir   = 1;

	this.resetAnimations();
};

Sprite_HUDObject.prototype.resetAnimations = function() {
	this._xOffset = this._xMin;
	this._yOffset = this._yMin;
	this._scale  = this._sMin;
	this._sCheck = this._sMin;
	this.scale.x = this._baseXScale + (this._sMin - 1);
	this.scale.y = this._baseYScale + (this._sMin - 1);
	this.rotation = this._rMin;
	this.updatePosition();
};

Sprite_HUDObject.prototype.update = function() {
	Sprite.prototype.update.call(this);
	this.updateActivity();
	this.updateCondition();
	if(this._isActive || ($gameTemp.isManipulatingHud && HUDManager.showPiecesType)) {
		if(this.isTarget) {
			this.updateMovement();
			this.updateSnapLines();
			this.updatePrecision();
			this.updateLayers();
		}
		this.updateAnimations();
		this.updateHighlightPosition();
	}
};

Sprite_HUDObject.prototype.updateHighlightPosition = function() {
	if(this.isTarget && this.highlight) {
		this.highlight.x = this._originalX;
		this.highlight.y = this._originalY;
	}
};

Sprite_HUDObject.prototype.updateMovement = function() {
	if(TouchInput.isPressed()) {
		if(!Input.isPressed('ok')) 		this._originalX = TouchInput.x;
		if(!Input.isPressed('cancel'))  this._originalY = TouchInput.y;
		if(!Input.isPressed('control')) this.updateSnap();
	}
};

Sprite_HUDObject.prototype.updateLayers = function() {
	if(this.prevY !== this.y) {
		for(let i = 0; i < this.layerPeers.length; i++) {
			const y = this.layerPeers[i];
			const sign1 = this.prevY - y > 0;
			const sign2 = this.y - y > 0;
			if(sign1 !== sign2) {
				HUDManager.refreshLayers();
				break;
			}
		}
		this.prevY = this.y;
	}
};

Sprite_HUDObject.prototype.updateSnapLines = function() {
	if(!this.horzLine || !this.vertLine) return;
	const xLock = Input.isPressed('ok');
	const yLock = Input.isPressed('cancel');
	if(xLock) {
		this.vertLine.x = this._originalX;
		this.vertLine.opacity = 255;
		if(!this.vertLine.isLocked) {
			this.vertLine.isLocked = true;
			this.vertLine.setColorTone([255, 255, 0, 0]);
		}
	} else if(HUDManager.snapMode) {
		if(this.xSnaps.contains(this._originalX)) {
			this.vertLine.x = this._originalX;
			this.vertLine.opacity = 255;
		} else {
			this.vertLine.opacity = 0;
		}
		if(this.vertLine.isLocked) {
			this.vertLine.isLocked = false;
			this.vertLine.setColorTone([0, 0, 0, 0]);
		}
	} else {
		if(this._originalX === this.xSnaps[1]) {
			this.vertLine.x = this.xSnaps[1];
			this.vertLine.opacity = 255;
		} else {
			this.vertLine.opacity = 0;
		}
		if(this.vertLine.isLocked) {
			this.vertLine.isLocked = false;
			this.vertLine.setColorTone([0, 0, 0, 0]);
		}
	}
	if(yLock) {
		this.horzLine.y = this._originalY;
		this.horzLine.opacity = 255;
		if(!this.horzLine.isLocked) {
			this.horzLine.isLocked = true;
			this.horzLine.setColorTone([255, 255, 0, 0]);
		}
	} else if(HUDManager.snapMode) {
		if(this.ySnaps.contains(this._originalY)) {
			this.horzLine.y = this._originalY;
			this.horzLine.opacity = 255;
		} else {
			this.horzLine.opacity = 0;
		}
		if(this.horzLine.isLocked) {
			this.horzLine.isLocked = false;
			this.horzLine.setColorTone([0, 0, 0, 0]);
		}
	} else {
		if(this._originalY === this.ySnaps[1]) {
			this.horzLine.y = this.ySnaps[1];
			this.horzLine.opacity = 255;
		} else {
			this.horzLine.opacity = 0;
		}
		if(this.horzLine.isLocked) {
			this.horzLine.isLocked = false;
			this.horzLine.setColorTone([0, 0, 0, 0]);
		}
	}
	if(!xLock && !yLock) {
		if(this.horzLine.opacity > 0 || this.vertLine.opacity > 0) {
			if(!TouchInput.isPressed() || Input.isPressed('control')) {
				this.horzLine.opacity = 0;
				this.vertLine.opacity = 0;
			}
		}
	}
};

Sprite_HUDObject.prototype.updateSnap = function() {
	for(let i = 0; i < this.xSnaps.length; i++) {
		const snap = this.xSnaps[i];
		if(Math.abs(this._originalX - snap) < this.snapRange) {
			this._originalX = snap;
			break;
		}
	}
	for(let i = 0; i < this.ySnaps.length; i++) {
		const snap = this.ySnaps[i];
		if(Math.abs(this._originalY - snap) < this.snapRange) {
			this._originalY = snap;
			break;
		}
	}
};

Sprite_HUDObject.prototype.updatePrecision = function() {
	const speed = (Input.isPressed('shift')) ? 10 : 1;
	if(Input.isRepeated('up')) {
		this._originalY -= speed;
	}
	if(Input.isRepeated('down')) {
		this._originalY += speed;
	}
	if(Input.isRepeated('left')) {
		this._originalX -= speed;
	}
	if(Input.isRepeated('right')) {
		this._originalX += speed;
	}
};

Sprite_HUDObject.prototype.updateAnimations = function() {
	this.updateAnimation('_xOffset', this._xSpeed, this._xLoop, this._xMin, this._xMax, '_xDir');
	this.updateAnimation('_yOffset', this._ySpeed, this._yLoop, this._yMin, this._yMax, '_yDir');
	this.updateAnimation('_scale', this._sSpeed, this._sLoop, this._sMin, this._sMax, '_sDir');
	this.updateAnimation('rotation', this._rSpeed, this._rLoop, this._rMin, this._rMax, '_rDir');
	this.updatePosition();
	this.updateScale();
	if($gameTemp.isManipulatingHud) {
		if(!TouchInput.isPressed()) {
			if(this._hasReset) this._hasReset = false;
		} else if(!this._hasReset) {
			this._hasReset = true;
			this.resetAnimations();
		}
	}
};

Sprite_HUDObject.prototype.updateCondition = function() {
	if(this._condition) {
		this._isVisible = this._isActive || ($gameTemp.isManipulatingHud && HUDManager.showPiecesType);
		if(this.opacity > 0 && !this._isVisible) {
			this._originalOpacity = this.opacity;
			this.opacity = 0;
		} else if(this.opacity <= 0 && this._isVisible) {
			this.opacity = this._originalOpacity;
			this.refresh(true);
		}
	}
};

Sprite_HUDObject.prototype.updateAnimation = function(mainVar, spd, loop, min, max, dirVar) {
	if(spd) {
		if(!loop) {
			if(this[mainVar] <= min && this[dirVar] < 0) {
				this[mainVar] = min;
				this[dirVar] = 1;
			}
			if(this[mainVar] >= max && this[dirVar] > 0) {
				this[mainVar] = max;
				this[dirVar] = -1;
			}
		} else {
			if(this[mainVar] >= max) {
				this[mainVar] = min;
			}
		}
		const newVal = this[mainVar] + (spd * this[dirVar]);
		if(newVal < min) {
			this[mainVar] = min;
		} else if(newVal > max) {
			this[mainVar] = max;
		} else {
			this[mainVar] = newVal;
		}
	}
};

Sprite_HUDObject.prototype.updatePosition = function() {
	this.x = this._originalX + this._xOffset;
	this.y = this._originalY + this._yOffset;
};

Sprite_HUDObject.prototype.updateScale = function() {
	if(this._sCheck !== this._scale) {
		this._sCheck = this._scale;
		this.updateRealScale();
	}
};

Sprite_HUDObject.prototype.updateRealScale = function() {
	this.scale.x = this._baseXScale + (this._sCheck - 1);
	this.scale.y = this._baseYScale + (this._sCheck - 1);
};

Sprite_HUDObject.prototype.setHighlight = function(highlight) {
	this.highlight = highlight;
	this.horzLine = this.highlight.horzLine;
	this.vertLine = this.highlight.vertLine;
};

Sprite_HUDObject.prototype.setAsTarget = function() {
	if(this.isTarget) {
		//this.removeChild(this.highlight);
	}
	this.isTarget = true;
	this.layerPeers = HUDManager.getSpritesOnLayer(this.z);
	this.prevY = this.y;
	//this.addChild(this.highlight);
};

Sprite_HUDObject.prototype.cancelAsTarget = function() {
	this.isTarget = false;/*
	if(this.children.indexOf(this.highlight) > -1) {
		this.removeChild(this.highlight);
	}*/
};

Sprite_HUDObject.prototype.refresh = function(refreshProperties) {
	if(!!refreshProperties) {
		this.refreshProperties();
	}
};

Sprite_HUDObject.prototype.refreshProperties = function() {
	this.updateRealScale();
	this._condition = this["Condition"];
	this.updateActivity();
	if(this.isTarget) {
		this.updateConditionInput();
	}
};

Sprite_HUDObject.prototype.updateActivity = function() {
	if(this._condition === '') {
		this._isActive = true;
	} else {
		try {
			this._isActive = !!eval(this._condition);
		} catch(e) {
			console.log(this._condition + " \n" + e);
			alert("There is an error with \"" + this._condition + "\" Press F8 to see more!");
			this._condition = 'false';
			this._isActive = false;
		}
	}
};

Sprite_HUDObject.prototype.setProperty = function(property, value) {
	this[property] = value;
	this.refresh(true);
};

Sprite_HUDObject.prototype.setupSnaps = function() {
	const width = this.width * this._baseXScale;
	const height = this.height * this._baseYScale;
	if(!HUDManager.snapMode) {
		this.xSnaps = [width / 2, Graphics.boxWidth / 2, Graphics.boxWidth - (width / 2)];
		this.ySnaps = [height / 2, Graphics.boxHeight / 2, Graphics.boxHeight - (height / 2)];
	} else {
		const sprites = HUDManager.getSprites();
		this.xSnaps = [];
		this.ySnaps = [];
		sprites.forEach(function(sprite) {
			if(this !== sprite) {
				if(!this.xSnaps.contains(sprite.x)) {
					this.xSnaps.push(sprite.x);
				}
				if(!this.ySnaps.contains(sprite.y)) {
					this.ySnaps.push(sprite.y);
				}
			}
		}, this);
	}
};

Sprite_HUDObject.prototype.updateConditionInput = function() {
	if(MakerManager.window) {
		const element = MakerManager.document.getElementById('Condition Bla');
		if(!element) return;
		let result = true;
		if(this._isActive) {
			element.innerHTML = `<td>Condition:</td>
								<td><input type="text" id="Condition" value="${this._condition}" style="background-color:${_.trueColor};"></td>`;
		} else {
			element.innerHTML = `<td>Condition:</td>
								<td><input type="text" id="Condition" value="${this._condition}" style="background-color:${_.falseColor};"></td>`;
		}
	}
};

//-----------------------------------------------------------------------------
// Sprite_HUDText
//-----------------------------------------------------------------------------

function Sprite_HUDText() {
	this.initialize.apply(this, arguments);
}

Sprite_HUDText.prototype = Object.create(Sprite_HUDObject.prototype);
Sprite_HUDText.prototype.constructor = Sprite_HUDText;

Sprite_HUDText._label = "Text";

/*
 * Get HTML for Sprite_HUDText manipulation
 */
Sprite_HUDText.getHtml = function(data) {
	const value = data["Value"];
	let condition = data["Condition"];
	const layer = data["Layer"];
	const font = data["Font"];
	const width = data["Max Width"];
	const align = data["Align"];
	const size 	= data["Font Size"];
	const color = data["Text Color"];
	const alpha = data["Text Alpha"];
	const outlineColor = data["Outline Color"];
	const outlineAlpha = data["Outline Alpha"];

	const sele = ['', '', ''];
	if(align === 'left') sele[0] = 'selected';
	else if(align === 'center') sele[1] = 'selected';
	else if(align === 'right') sele[2] = 'selected';

	try {
		eval(condition);
	} catch(e) {
		data["Condition"] = '';
		condition = '';
	}

	return `${HUDManager.createTitle(data.id, Sprite_HUDText._label)}
			<table>
				${HUDManager.createHeader()}
				${HUDManager.createInput("Value", value)}
				${HUDManager.createConditionInput("Condition", condition)}
				${HUDManager.createInput("Layer", layer)}
				${HUDManager.createInput("Font", font)}
				${HUDManager.createInput("Max Width", width)}
				${HUDManager.createSelect("Align", ["left", sele[0], "Left"], ["center", sele[1], "Center"], ["right", sele[2], "Right"])}
				${HUDManager.createInput("Font Size", size)}
				${HUDManager.createColor("Text Color", color, "Text Alpha", alpha)}
				${HUDManager.createColor("Outline Color", outlineColor, "Outline Alpha", outlineAlpha)}
				${HUDManager.createRefresh()}
			</table>`;
};

/*
 * Register Sprite_HUDText within the HUDManager
 */
HUDManager.typeNames.push(Sprite_HUDText._label);
HUDManager.types[Sprite_HUDText._label] = {
	class: Sprite_HUDText,
	html: Sprite_HUDText.getHtml,
	data: {
		"type": 		Sprite_HUDText._label,
		"Value": 		"Gold: ${$gameParty.gold()}",
		"Condition": 	"",
		"Layer": 		"0",
		"Font": 		"GameFont",
		"Max Width": 	"150",
		"Align": 		"left",
		"Font Size": 	"30",
		"Text Color": 	"#ffffff",
		"Text Alpha": 	"255",
		"Outline Color":"#000000",
		"Outline Alpha":"127"
	},
	format: function(data) {
		let temp;
		try {
			temp = String(eval("`" + data["Value"] + "`"));
		} catch(e) {
			console.log('Error with Text\n' + e);
			temp = "ERROR";
		}
		if(temp.length > 15) temp = temp.substring(0, 15) + "...";
		return temp;
	}
}

Sprite_HUDText.prototype.initialize = function(info) {
	Sprite_HUDObject.prototype.initialize.call(this, new Bitmap(1, 1), info);
	this.properties = ["Layer", "Condition", "Max Width", "Font", "Align", "Font Size", "Text Color", "Text Alpha", 
						"Outline Color", "Outline Alpha", "Value"];
	for(let i = 0; i < this.properties.length; i++) {
		const prop = this.properties[i];
		this[prop] = info[prop];
	}
	this._value = this.getNewValue();
	this.refresh(true);
};

Sprite_HUDText.prototype.getNewValue = function() {
	let result;
	try {
		result = eval("`" + this["Value"] + "`");
	} catch(e) {
		console.log('Error with Text\n' + e);
		result = "ERROR";
	}
	return result;
};

Sprite_HUDText.prototype.update = function() {
	Sprite_HUDObject.prototype.update.call(this);
	if(!this._isActive) return;
	const newValue = this.getNewValue();
	if(this._value !== newValue) {
		this._value = newValue;
		this.refresh();
	}
};

Sprite_HUDText.prototype.refresh = function(refreshProperties) {
	Sprite_HUDObject.prototype.refresh.apply(this, arguments);
	this.bitmap.addLoadListener(function() {
		this.bitmap.clear();
		this.bitmap.drawText(this._value, 0, 0, this.bitmap.width, this.bitmap.height, this["Align"]);
		this.setupSnaps();
	}.bind(this));
};

Sprite_HUDText.prototype.refreshProperties = function() {
	Sprite_HUDObject.prototype.refreshProperties.apply(this, arguments);
	const bit = this.bitmap;
	const width = parseInt(this["Max Width"]);
	const height = parseInt(this["Font Size"]) + 12;
	if(bit.width !== width || bit.height !== height) {
		this.bitmap.resize(width, height);
		this._frame.width = 0;
		this._frame.height = 0;
		this._onBitmapLoad();
	}
	this.z = parseInt(this["Layer"]);
	this.bitmap.fontFace = this["Font"];
	this.bitmap.fontSize = parseInt(this["Font Size"]);
	this.bitmap.textColor = _.convertHex(this["Text Color"], parseInt(this["Text Alpha"]));
	this.bitmap.outlineColor = _.convertHex(this["Outline Color"], parseInt(this["Outline Alpha"]));
};

//-----------------------------------------------------------------------------
// Sprite_HUDTextEx
//-----------------------------------------------------------------------------

function Sprite_HUDTextEx() {
	this.initialize.apply(this, arguments);
}

Sprite_HUDTextEx.prototype = Object.create(Sprite_HUDObject.prototype);
Sprite_HUDTextEx.prototype.constructor = Sprite_HUDTextEx;

Sprite_HUDTextEx._label = "TextEx";

/*
 * Get HTML for Sprite_HUDTextEx manipulation
 */
Sprite_HUDTextEx.getHtml = function(data) {
	const value = data["Value"];
	let condition = data["Condition"];
	const layer = data["Layer"];
	const width = data["Width"];
	const height = data["Height"];

	try {
		eval(condition);
	} catch(e) {
		data["Condition"] = '';
		condition = '';
	}

	return `${HUDManager.createTitle(data.id, Sprite_HUDTextEx._label)}
			<table>
				${HUDManager.createHeader()}
				${HUDManager.createInput("Value", value)}
				${HUDManager.createConditionInput("Condition", condition)}
				${HUDManager.createInput("Layer", layer)}
				${HUDManager.createInput("Width", width)}
				${HUDManager.createInput("Height", height)}
				${HUDManager.createRefresh()}
			</table>`;
};

/*
 * Register Sprite_HUDTextEx within the HUDManager
 */
HUDManager.typeNames.push(Sprite_HUDTextEx._label);
HUDManager.types[Sprite_HUDTextEx._label] = {
	class: Sprite_HUDTextEx,
	html: Sprite_HUDTextEx.getHtml,
	data: {
		"type": 		Sprite_HUDTextEx._label,
		"Value": 		"\\i[313] Icon",
		"Condition": 	"",
		"Layer": 		"0",
		"Width": 		"150",
		"Height": 		"36"
	},
	format: function(data) {
		let temp = String(data["Value"]);
		if(temp.length > 15) temp = temp.substring(0, 15) + "...";
		return temp;
	}
}

Sprite_HUDTextEx.prototype.initialize = function(info) {
	Sprite_HUDObject.prototype.initialize.call(this, new Bitmap(1, 1), info);
	this.properties = ["Layer", "Condition", "Width", "Height", "Value"];
	for(let i = 0; i < this.properties.length; i++) {
		const prop = this.properties[i];
		this[prop] = info[prop];
	}
	this.contents = this.bitmap;
	this._value = this.convertEscapeCharacters(this["Value"]);
	this.refresh(true);
};

Sprite_HUDTextEx.prototype.update = function() {
	Sprite_HUDObject.prototype.update.call(this);
	if(!this._isActive) return;
	const newValue = this.convertEscapeCharacters(this["Value"]);
	if(this._value !== newValue) {
		this._value = newValue;
		this.refresh();
	}
};

Sprite_HUDTextEx.prototype.refresh = function(refreshProperties) {
	Sprite_HUDObject.prototype.refresh.apply(this, arguments);
	this.bitmap.addLoadListener(function() {
		this.bitmap.clear();
		this.drawTextEx(this._value, 0, 0);
	}.bind(this));
};

Sprite_HUDTextEx.prototype.refreshProperties = function() {
	Sprite_HUDObject.prototype.refreshProperties.apply(this, arguments);
	const bit = this.bitmap;
	const width = parseInt(this["Width"]);
	const height = parseInt(this["Height"]);
	if(bit.width !== width || bit.height !== height) {
		this.bitmap.resize(width, height);
		this._frame.width = 0;
		this._frame.height = 0;
		this._onBitmapLoad();
	}
	this.z = parseInt(this["Layer"]);
	this.setupSnaps();
};

Sprite_HUDTextEx.prototype.resetFontSettings = function() {
	this.contents.fontFace = "GameFont";
	this.contents.fontSize = 28;
	this.contents.textColor = "#FFFFFF"
};

Sprite_HUDTextEx.prototype.drawTextEx = Window_Base.prototype.drawTextEx;
Sprite_HUDTextEx.prototype.convertEscapeCharacters = Window_Base.prototype.convertEscapeCharacters;
Sprite_HUDTextEx.prototype.actorName = Window_Base.prototype.actorName;
Sprite_HUDTextEx.prototype.textWidth = Window_Base.prototype.textWidth;
Sprite_HUDTextEx.prototype.partyMemberName = Window_Base.prototype.partyMemberName;
Sprite_HUDTextEx.prototype.processCharacter = Window_Base.prototype.processCharacter;
Sprite_HUDTextEx.prototype.processNormalCharacter = Window_Base.prototype.processNormalCharacter;
Sprite_HUDTextEx.prototype.processNewLine = Window_Base.prototype.processNewLine;
Sprite_HUDTextEx.prototype.processNewPage = Window_Base.prototype.processNewPage;
Sprite_HUDTextEx.prototype.obtainEscapeCode = Window_Base.prototype.obtainEscapeCode;
Sprite_HUDTextEx.prototype.obtainEscapeParam = Window_Base.prototype.obtainEscapeParam;
Sprite_HUDTextEx.prototype.processEscapeCharacter = Window_Base.prototype.processEscapeCharacter;
Sprite_HUDTextEx.prototype.processDrawIcon = Window_Base.prototype.processDrawIcon;
Sprite_HUDTextEx.prototype.makeFontBigger = Window_Base.prototype.makeFontBigger;
Sprite_HUDTextEx.prototype.makeFontSmaller = Window_Base.prototype.makeFontSmaller;
Sprite_HUDTextEx.prototype.calcTextHeight = Window_Base.prototype.calcTextHeight;
Sprite_HUDTextEx.prototype.drawIcon = Window_Base.prototype.drawIcon;

//-----------------------------------------------------------------------------
// Sprite_HUDShape
//-----------------------------------------------------------------------------

function Sprite_HUDShape() {
	this.initialize.apply(this, arguments);
}

Sprite_HUDShape.prototype = Object.create(Sprite_HUDObject.prototype);
Sprite_HUDShape.prototype.constructor = Sprite_HUDShape;

Sprite_HUDShape._label = "Shape";

/*
 * Get HTML for Sprite_HUDText manipulation
 */
Sprite_HUDShape.getHtml = function(data) {
	let condition = data["Condition"];
	const layer = data["Layer"];
	const shape = data["Shape"];
	const width = data["Width"];
	const height = data["Height"];
	const fill = data["Fill Style"];
	const blend = data["Blend"];
	const color1 = data["Color 1"];
	const color1A = data["Color 1 Alpha"];
	const color2 = data["Color 2"];
	const color2A = data["Color 2 Alpha"];
	const size = data["Outline Size"];
	const color3 = data["Outline Color"];
	const color3A = data["Color 3 Alpha"];

	const sele = ['', ''];
	if(shape === 'Rectangle') sele[0] = 'selected';
	else if(shape === 'Circle') sele[1] = 'selected';

	const sele2 = ['', '', '', '', ''];
	if(fill === 'solid') sele2[0] = 'selected';
	else if(fill === 'horizontal') sele2[1] = 'selected';
	else if(fill === 'vertical') sele2[2] = 'selected';
	else if(fill === 'radical') sele2[3] = 'selected';
	else if(fill === 'max radical') sele2[4] = 'selected';

	const blendArray = [];
	for(let i = 0; i <= 16; i++) {
		blendArray.push([String(i), parseInt(blend) === i, _.blendNames[i]])
	}

	try {
		eval(condition);
	} catch(e) {
		data["Condition"] = '';
		condition = '';
	}

	return `${HUDManager.createTitle(data.id, Sprite_HUDShape._label)}
			<table style="width: 283px;">
				${HUDManager.createHeader()}
			</table>
			<div style="width: 300px; height: 430px; overflow-y: auto;">
			<table>
				${HUDManager.createConditionInput("Condition", condition)}
				${HUDManager.createInput("Layer", layer)}
				${HUDManager.createSelect("Shape", ["Rectangle", sele[0], "Rectangle"], ["Circle", sele[1], "Circle"])}
				${HUDManager.createInput("Width", width)}
				${HUDManager.createInput("Height", height)}
				${HUDManager.createSelect("Fill Style",  ["solid", sele2[0], "Solid"], 
												["horizontal", sele2[1], "Horizontal Gradient"],
												["vertical", sele2[2], "Vertical Gradient"],
												["radical", sele2[3], "Radical Gradient"],
												["max radical", sele2[4], "Max Radical Gradient"])}
				${HUDManager.createSelectArray("Blend", blendArray)}
				${HUDManager.createColor("Color 1", color1, "Color 1 Alpha", color1A)}
				${HUDManager.createColor("Color 2", color2, "Color 2 Alpha", color2A)}
				${HUDManager.createInput("Outline Size", size)}
				${HUDManager.createColor("Outline Color", color3, "Color 3 Alpha", color3A)}
			</table>
			</div>
			<table style="width: 283px;">
				${HUDManager.createRefresh()}
			</table>`;
};

/*
 * Register Sprite_HUDShape within the HUDManager
 */
HUDManager.typeNames.push(Sprite_HUDShape._label);
HUDManager.types[Sprite_HUDShape._label] = {
	class: Sprite_HUDShape,
	html: Sprite_HUDShape.getHtml,
	data: {
		"type": 		Sprite_HUDShape._label,
		"Layer": 		"0",
		"Condition": 	"",
		"Shape": 		"Circle",
		"Width": 		"75",
		"Height": 		"75",
		"Fill Style": 	"solid",
		"Blend": 		"0",
		"Color 1": 		"#ffffff",
		"Color 1 Alpha":"255",
		"Color 2": 		"#000000",
		"Color 2 Alpha":"255",
		"Outline Size": "0",
		"Outline Color":"#000000",
		"Color 3 Alpha":"255"
	},
	format: function(data) {
		let temp = String(data["Shape"] + " " + data["Fill Style"]);
		if(temp.length > 15) temp = temp.substring(0, 15) + "...";
		return temp;
	}
}

Sprite_HUDShape.prototype.initialize = function(info) {
	Sprite_HUDObject.prototype.initialize.call(this, new Bitmap(1, 1), info);
	this.properties = ["Layer", "Condition", "Shape", "Width", "Height", "Fill Style", "Color 1", "Color 1 Alpha", 
						"Color 2", "Color 2 Alpha", "Outline Size", "Outline Color", "Color 3 Alpha"];
	for(let i = 0; i < this.properties.length; i++) {
		const prop = this.properties[i];
		this[prop] = info[prop];
	}
	this.refresh(true);
};

Sprite_HUDShape.prototype.update = function() {
	Sprite_HUDObject.prototype.update.call(this);
};

Sprite_HUDShape.prototype.refresh = function(refreshProperties) {
	Sprite_HUDObject.prototype.refresh.apply(this, arguments);
	this.bitmap.addLoadListener(function() {
		const shape = this["Shape"];
		const outline = parseInt(this["Outline Size"]);
		const width = parseInt(this["Width"]);
		const height = parseInt(this["Height"]);
		const w2 = this.bitmap.width / 2;
		const h2 = this.bitmap.height / 2;
		const fill = this["Fill Style"];
		const color1 = _.convertHex(this["Color 1"], parseInt(this["Color 1 Alpha"]));
		const color2 = _.convertHex(this["Color 2"], parseInt(this["Color 2 Alpha"]));
		const color3 = _.convertHex(this["Outline Color"], parseInt(this["Color 3 Alpha"]));
		let color = color1;
		if(fill === 'vertical') {
			color = this.bitmap._context.createLinearGradient(0, 0, 0, height);
		} else if(fill === 'horizontal') {
			color = this.bitmap._context.createLinearGradient(0, 0, width, 0);
		} else if(fill === 'radical') {
			const biggest = (width > height) ? width : height;
			color = this.bitmap._context.createRadialGradient(w2, h2, 0, w2, h2, biggest);
		} else if(fill === 'max radical') {
			const smallest = (width < height) ? width : height;
			color = this.bitmap._context.createRadialGradient(w2, h2, 0, w2, h2, smallest);
		}
		if(fill !== 'solid') {
			color.addColorStop(0, color1);
			color.addColorStop(1, color2);
		}
		this.bitmap.clear();
		if(shape === 'Rectangle') {
			if(outline) {
				this.bitmap.fillRect(0, 0, this.bitmap.width, this.bitmap.height, color3);
			}
			this.bitmap.fillRect(outline, outline, width, height, color);
		} else if(shape === 'Circle') {
			if(outline) {
				this.bitmap.drawOval(w2, h2, this.bitmap.width / 2, this.bitmap.height / 2, color3);
			}
			this.bitmap.drawOval(w2, h2, width / 2, height / 2, color);
		}
	}.bind(this));
};

Sprite_HUDShape.prototype.refreshProperties = function() {
	Sprite_HUDObject.prototype.refreshProperties.apply(this, arguments);
	const bit = this.bitmap;
	const outlineSize = parseInt(this["Outline Size"]);
	const width = parseInt(this["Width"]) + (outlineSize * 2) + 1;
	const height = parseInt(this["Height"]) + (outlineSize * 2) + 1;
	if(bit.width !== width || bit.height !== height) {
		this.bitmap.resize(width, height);
		this._frame.width = 0;
		this._frame.height = 0;
		this._onBitmapLoad();
	}
	this.z = parseInt(this["Layer"]);
	this.setupSnaps();
};

//-----------------------------------------------------------------------------
// Sprite_HUDImage
//-----------------------------------------------------------------------------

function Sprite_HUDImage() {
	this.initialize.apply(this, arguments);
}

Sprite_HUDImage.prototype = Object.create(Sprite_HUDObject.prototype);
Sprite_HUDImage.prototype.constructor = Sprite_HUDImage;

Sprite_HUDImage._label = "Picture";

/*
 * Get HTML for Sprite_HUDText manipulation
 */
Sprite_HUDImage.getHtml = function(data) {
	const image = data["Image"];
	let condition = data["Condition"];
	const layer = data["Layer"];
	const scaleX = data["Scale X"];
	const scaleY = data["Scale Y"];
	const opacity = data["Opacity"];
	const hue = data["Hue"];
	const blend = data["Blend"];

	try {
		eval(condition);
	} catch(e) {
		data["Condition"] = '';
		condition = '';
	}

	const blendArray = [];
	for(let i = 0; i <= 16; i++) {
		blendArray.push([String(i), parseInt(blend) === i, _.blendNames[i]])
	}

	return `${HUDManager.createTitle(data.id, Sprite_HUDImage._label)}
			<table>
				${HUDManager.createHeader()}
				${HUDManager.createFilelist("Image", 'pictures', image)}
				${HUDManager.createConditionInput("Condition", condition)}
				${HUDManager.createInput("Layer", layer)}
				${HUDManager.createInput("Scale X", scaleX)}
				${HUDManager.createInput("Scale Y", scaleY)}
				${HUDManager.createInput("Opacity", opacity)}
				${HUDManager.createInput("Hue", hue)}
				${HUDManager.createSelectArray("Blend", blendArray)}
				${HUDManager.createRefresh()}
			</table>`;
};

/*
 * Register Sprite_HUDImage within the HUDManager
 */
HUDManager.typeNames.push(Sprite_HUDImage._label);
HUDManager.types[Sprite_HUDImage._label] = {
	class: Sprite_HUDImage,
	html: Sprite_HUDImage.getHtml,
	data: {
		"type": 		Sprite_HUDImage._label,
		"Condition": 	"",
		"Layer": 		"0",
		"Image": 		_.getFirstFile('pictures'),
		"Scale X": 		"1",
		"Scale Y": 		"1",
		"Opacity": 		"255",
		"Hue": 			"0",
		"Blend": 		"0"
	},
	format: function(data) {
		let temp = String(data["Image"]);
		if(temp.length > 15) temp = temp.substring(0, 15) + "...";
		return temp;
	}
}

Sprite_HUDImage.prototype.initialize = function(info) {
	Sprite_HUDObject.prototype.initialize.call(this, new Bitmap(32, 32), info);
	this.delayHilight = true;
	this.properties = ["Layer", "Condition", "Image", "Scale X", "Scale Y", "Opacity", "Hue", "Blend"];
	for(let i = 0; i < this.properties.length; i++) {
		const prop = this.properties[i];
		this[prop] = info[prop];
	}
	this.refresh(true);
};

Sprite_HUDImage.prototype.update = function() {
	Sprite_HUDObject.prototype.update.call(this);
};

Sprite_HUDImage.prototype.refresh = function(refreshProperties) {
	Sprite_HUDObject.prototype.refresh.apply(this, arguments);
	this.bitmap.addLoadListener(this.setupSnaps.bind(this));
};

Sprite_HUDImage.prototype.refreshProperties = function() {
	Sprite_HUDObject.prototype.refreshProperties.apply(this, arguments);
	const image = this["Image"];
	if(image) {
		this.bitmap = _.getPicture(image, parseInt(this["Hue"]));
		this.z = parseInt(this["Layer"]);
		this._baseXScale = parseFloat(this["Scale X"]);
		this._baseYScale = parseFloat(this["Scale Y"]);
		this.updateRealScale();
		this.opacity = parseInt(this["Opacity"]);
		this.blendMode = parseInt(this["Blend"]);
	}
};

//-----------------------------------------------------------------------------
// Sprite_HUDCodeImage
//-----------------------------------------------------------------------------

function Sprite_HUDCodeImage() {
	this.initialize.apply(this, arguments);
}

Sprite_HUDCodeImage.prototype = Object.create(Sprite_HUDObject.prototype);
Sprite_HUDCodeImage.prototype.constructor = Sprite_HUDCodeImage;

Sprite_HUDCodeImage._label = "Picture EX";

/*
 * Get HTML for Sprite_HUDText manipulation
 */
Sprite_HUDCodeImage.getHtml = function(data) {
	const image = data["Image"];
	let condition = data["Condition"];
	const layer = data["Layer"];
	const scaleX = data["Scale X"];
	const scaleY = data["Scale Y"];
	const opacity = data["Opacity"];
	const hue = data["Hue"];
	const blend = data["Blend"];

	try {
		eval(image);
	} catch(e) {
		data["Image"] = '';
		image = '';
	}

	try {
		eval(condition);
	} catch(e) {
		data["Condition"] = '';
		condition = '';
	}

	const blendArray = [];
	for(let i = 0; i <= 16; i++) {
		blendArray.push([String(i), parseInt(blend) === i, _.blendNames[i]])
	}

	return `${HUDManager.createTitle(data.id, Sprite_HUDCodeImage._label)}
			<table>
				${HUDManager.createHeader()}
				${HUDManager.createInput("Image", image)}
				${HUDManager.createConditionInput("Condition", condition)}
				${HUDManager.createInput("Layer", layer)}
				${HUDManager.createInput("Scale X", scaleX)}
				${HUDManager.createInput("Scale Y", scaleY)}
				${HUDManager.createInput("Opacity", opacity)}
				${HUDManager.createInput("Hue", hue)}
				${HUDManager.createSelectArray("Blend", blendArray)}
				${HUDManager.createRefresh()}
			</table>`;
};

/*
 * Register Sprite_HUDCodeImage within the HUDManager
 */
HUDManager.typeNames.push(Sprite_HUDCodeImage._label);
HUDManager.types[Sprite_HUDCodeImage._label] = {
	class: Sprite_HUDCodeImage,
	html: Sprite_HUDCodeImage.getHtml,
	data: {
		"type": 		Sprite_HUDCodeImage._label,
		"Condition": 	"",
		"Layer": 		"0",
		"Image": 		"'Gold'",
		"Scale X": 		"1",
		"Scale Y": 		"1",
		"Opacity": 		"255",
		"Hue": 			"0",
		"Blend": 		"0"
	},
	format: function(data) {
		let temp;
		try {
			temp = eval(data["Image"]);
		} catch(e) {
			temp = "ERROR";
		}
		if(temp.length > 12) temp = temp.substring(0, 12) + "...";
		return temp;
	}
}

Sprite_HUDCodeImage.prototype.initialize = function(info) {
	Sprite_HUDObject.prototype.initialize.call(this, new Bitmap(32, 32), info);
	this.delayHilight = true;
	this.properties = ["Layer", "Condition", "Image", "Scale X", "Scale Y", "Opacity", "Hue", "Blend"];
	for(let i = 0; i < this.properties.length; i++) {
		const prop = this.properties[i];
		this[prop] = info[prop];
	}
	this._value = this.getNewImage();
	this.refresh(true);
};

Sprite_HUDCodeImage.prototype.getNewImage = function() {
	let result;
	try {
		result = eval(this["Image"]);
	} catch(e) {
		console.log('Error with Picture EX\n' + e);
		result = '';
	}
	return result;
};
	
Sprite_HUDCodeImage.prototype.update = function() {
	Sprite_HUDObject.prototype.update.call(this);
	if(!this._isActive) return;
	let newValue = this._value;
	newValue = this.getNewImage();
	if(this._value !== newValue) {
		this._value = newValue;
		this.refresh(true);
	}
};

Sprite_HUDCodeImage.prototype.postError = function(e) {
	console.log(e);
	alert('The "Image" input had an error. Check the console for more info.');
};

Sprite_HUDCodeImage.prototype.refresh = function(refreshProperties) {
	Sprite_HUDObject.prototype.refresh.apply(this, arguments);
	if(this.bitmap) {
		this.bitmap.addLoadListener(this.setupSnaps.bind(this));
	}
};

Sprite_HUDCodeImage.prototype.refreshProperties = function() {
	Sprite_HUDObject.prototype.refreshProperties.apply(this, arguments);
	const image = this._value;
	if(image) {
		try {
			this.bitmap = _.getPicture(image, parseInt(this["Hue"]));
		} catch(e) {
			this.postError(e);
			this["Image"] = '';
			this._value = '';
			this.bitmap = null;
			return;
		}
		this.z = parseInt(this["Layer"]);
		this._baseXScale = parseFloat(this["Scale X"]);
		this._baseYScale = parseFloat(this["Scale Y"]);
		this.updateRealScale();
		this.opacity = parseInt(this["Opacity"]);
		this.blendMode = parseInt(this["Blend"]);
	} else {
		this.bitmap = null;
	}
};

//-----------------------------------------------------------------------------
// Sprite_HUDGauge
//-----------------------------------------------------------------------------

function Sprite_HUDGauge() {
	this.initialize.apply(this, arguments);
}

Sprite_HUDGauge.prototype = Object.create(Sprite_HUDObject.prototype);
Sprite_HUDGauge.prototype.constructor = Sprite_HUDGauge;

Sprite_HUDGauge._label = "Gauge";

/*
 * Get HTML for Sprite_HUDGauge manipulation
 */
Sprite_HUDGauge.getHtml = function(data) {
	const value = data["Cur. Value"];
	const max = data["Max Value"];
	let condition = data["Condition"];
	const layer = data["Layer"];
	const width = data["Width"];
	const height = data["Height"];
	const fill = data["Style"];
	const color1 = data["Color 1"];
	const color1A = data["Color 1 Alpha"];
	const color2 = data["Color 2"];
	const color2A = data["Color 2 Alpha"];
	const size = data["Outline Size"];
	const color3 = data["Outline Color"];
	const color3A = data["Color 3 Alpha"];
	const color4 = data["Back Color"];
	const color4A = data["Color 4 Alpha"];

	const sele2 = ['', '', '', ''];
	if(fill === 'left') sele2[0] = 'selected';
	else if(fill === 'right') sele2[1] = 'selected';
	else if(fill === 'up') sele2[2] = 'selected';
	else if(fill === 'down') sele2[3] = 'selected';

	try {
		eval(condition);
	} catch(e) {
		data["Condition"] = '';
		condition = '';
	}

	return `${HUDManager.createTitle(data.id, Sprite_HUDGauge._label)}
			<table style="width: 283px;">
				${HUDManager.createHeader()}
			</table>
			<div style="width: 300px; height: 430px; overflow-y: auto;">
			<table>
				${HUDManager.createInput("Cur. Value", value)}
				${HUDManager.createInput("Max Value", max)}
				${HUDManager.createConditionInput("Condition", condition)}
				${HUDManager.createInput("Layer", layer)}
				${HUDManager.createInput("Width", width)}
				${HUDManager.createInput("Height", height)}
				${HUDManager.createSelect("Style",   ["left", sele2[0], "Left"],
											["right", sele2[1], "Right"],
											["up", sele2[2], "Up"],
											["down", sele2[3], "Down"])}
				${HUDManager.createColor("Color 1", color1, "Color 1 Alpha", color1A)}
				${HUDManager.createColor("Color 2", color2, "Color 2 Alpha", color2A)}
				${HUDManager.createColor("Back Color", color4, "Color 4 Alpha", color4A)}
				${HUDManager.createInput("Outline Size", size)}
				${HUDManager.createColor("Outline Color", color3, "Color 3 Alpha", color3A)}
			</table>
			</div>
			<table style="width: 283px;">
				${HUDManager.createRefresh()}
			</table>`;
};

/*
 * Register Sprite_HUDGauge within the HUDManager
 */
HUDManager.typeNames.push(Sprite_HUDGauge._label);
HUDManager.types[Sprite_HUDGauge._label] = {
	class: Sprite_HUDGauge,
	html: Sprite_HUDGauge.getHtml,
	data: {
		"type": 		Sprite_HUDGauge._label,
		"Cur. Value": 	"$gameParty.leader().hp",
		"Max Value": 	"$gameParty.leader().mhp",
		"Condition": 	"",
		"Layer": 		"0",
		"Width": 		"150",
		"Height": 		"30",
		"Style": 		"left",
		"Color 1": 		"#ff8000",
		"Color 1 Alpha":"255",
		"Color 2": 		"#ff0000",
		"Color 2 Alpha":"255",
		"Back Color":   "#666666",
		"Outline Size": "1",
		"Outline Color":"#222222",
		"Color 3 Alpha":"255"
	},
	format: function(data) {
		let temp;
		try {
			temp = String(eval(data["Cur. Value"]));
			temp += "/" + String(eval(data["Max Value"]));
		} catch(e) {
			temp = "ERROR";
		}
		if(temp.length > 15) temp = temp.substring(0, 15) + "...";
		return temp;
	}
}

Sprite_HUDGauge.prototype.initialize = function(info) {
	Sprite_HUDObject.prototype.initialize.call(this, new Bitmap(1, 1), info);
	this.properties = ["Cur. Value", "Max Value", "Condition", "Layer", "Width", "Height", "Style", "Color 1", 
						"Color 1 Alpha", "Color 2", "Color 2 Alpha", "Back Color", "Color 4 Alpha", "Outline Size", "Outline Color", "Color 3 Alpha"];
	for(let i = 0; i < this.properties.length; i++) {
		const prop = this.properties[i];
		this[prop] = info[prop];
	}
	this._value = this.getCurrentValue();
	this._maxvalue = this.getMaxValue();
	this.refresh(true);
};

Sprite_HUDGauge.prototype.getCurrentValue = function() {
	let result;
	try {
		result = eval(this["Cur. Value"]);
	} catch(e) {
		console.log('Error with Gauge\n' + e);
		result = 0;
	}
	return result;
};

Sprite_HUDGauge.prototype.getMaxValue = function() {
	let result;
	try {
		result = eval(this["Max Value"]);
	} catch(e) {
		console.log('Error with Gauge\n' + e);
		result = 0;
	}
	return result;
};

Sprite_HUDGauge.prototype.update = function() {
	Sprite_HUDObject.prototype.update.call(this);
	if(!this._isActive) return;
	const newValue = this.getCurrentValue();
	const newMax = this.getMaxValue();
	if(this._value !== newValue || this._maxvalue !== newMax) {
		this._value = newValue;
		this._maxvalue = newMax;
		this.refresh();
	}
};

Sprite_HUDGauge.prototype.refresh = function(refreshProperties) {
	Sprite_HUDObject.prototype.refresh.apply(this, arguments);
	if((this._value || this._value === 0) && (this._maxvalue || this._maxvalue == 0)) {
		const outline = parseInt(this["Outline Size"]);
		const width = this["Width"];
		const height = this["Height"];
		const color1 = _.convertHex(this["Color 1"], parseInt(this["Color 1 Alpha"]));
		const color2 = _.convertHex(this["Color 2"], parseInt(this["Color 2 Alpha"]));
		this.bitmap.fillRect(0, 0, width + (outline * 2), height + (outline * 2), this["Outline Color"]);
		this.bitmap.fillRect(outline, outline, width, height, this["Back Color"]);
		const fillW = Math.floor(width * (this._value / this._maxvalue)) || 0;
		const fillH = Math.floor(height * (this._value / this._maxvalue)) || 0;
		const style = this["Style"];
		if(style === 'up') {
			this.bitmap.gradientFillRect(outline, (height - fillH) + outline, width, fillH, color2, color1, true);
		} else if(style === 'down') {
			this.bitmap.gradientFillRect(outline, outline, width, fillH, color1, color2, true);
		} else if(style === 'left') {
			this.bitmap.gradientFillRect(outline, outline, fillW, height, color2, color1);
		} else if(style === 'right') {
			this.bitmap.gradientFillRect((width - fillW) + outline, outline, fillW, height, color1, color2);
		}
	}
};

Sprite_HUDGauge.prototype.refreshProperties = function() {
	Sprite_HUDObject.prototype.refreshProperties.apply(this, arguments);
	const bit = this.bitmap;
	const outline = parseInt(this["Outline Size"]);
	const width = parseInt(this["Width"]) + (outline * 2);
	const height = parseInt(this["Height"]) + (outline * 2);
	if(bit.width !== width || bit.height !== height) {
		this.bitmap.resize(width, height);
		this._frame.width = 0;
		this._frame.height = 0;
		this._onBitmapLoad();
	}
	this.z = parseInt(this["Layer"]);
	this.setupSnaps();
};

//-----------------------------------------------------------------------------
// Sprite_HUDImageGauge
//-----------------------------------------------------------------------------

function Sprite_HUDImageGauge() {
	this.initialize.apply(this, arguments);
}

Sprite_HUDImageGauge.prototype = Object.create(Sprite_HUDObject.prototype);
Sprite_HUDImageGauge.prototype.constructor = Sprite_HUDImageGauge;

Sprite_HUDImageGauge._label = "Image Gauge";

/*
 * Get HTML for Sprite_HUDImageGauge manipulation
 */
Sprite_HUDImageGauge.getHtml = function(data) {
	const value = data["Cur. Value"];
	const max = data["Max Value"];
	let condition = data["Condition"];
	const layer = data["Layer"];
	const scaleX = data["Scale X"];
	const scaleY = data["Scale Y"];	
	const fill = data["Style"];
	const main = data["Main Image"];
	const back = data["Back Image"];

	const sele2 = ['', '', '', ''];
	if(fill === 'left') sele2[0] = 'selected';
	else if(fill === 'right') sele2[1] = 'selected';
	else if(fill === 'up') sele2[2] = 'selected';
	else if(fill === 'down') sele2[3] = 'selected';

	try {
		eval(condition);
	} catch(e) {
		data["Condition"] = '';
		condition = '';
	}

	return `${HUDManager.createTitle(data.id, Sprite_HUDImageGauge._label)}
			<table>
				${HUDManager.createHeader()}
				${HUDManager.createInput("Cur. Value", value)}
				${HUDManager.createInput("Max Value", max)}
				${HUDManager.createConditionInput("Condition", condition)}
				${HUDManager.createInput("Layer", layer)}
				${HUDManager.createFilelist("Main Image", 'gauge_images', main)}
				${HUDManager.createFilelist("Back Image", 'gauge_backs', back, true)}
				${HUDManager.createInput("Scale X", scaleX)}
				${HUDManager.createInput("Scale Y", scaleY)}
				${HUDManager.createSelect("Style",   ["left", sele2[0], "Left"],
											["right", sele2[1], "Right"],
											["up", sele2[2], "Up"],
											["down", sele2[3], "Down"])}
				${HUDManager.createRefresh()}
			</table>`;
};

/*
 * Register Sprite_HUDImageGauge within the HUDManager
 */
HUDManager.typeNames.push(Sprite_HUDImageGauge._label);
HUDManager.types[Sprite_HUDImageGauge._label] = {
	class: Sprite_HUDImageGauge,
	html: Sprite_HUDImageGauge.getHtml,
	data: {
		"type": 		Sprite_HUDImageGauge._label,
		"Cur. Value": 	"$gameParty.leader().hp",
		"Max Value": 	"$gameParty.leader().mhp",
		"Condition": 	"",
		"Layer": 		"0",
		"Scale X": 		"1",
		"Scale Y": 		"1",
		"Style": 		"left",
		"Main Image": 	_.getFirstFile('gauge_images'),
		"Back Image": 	_.getFirstFile('gauge_backs')
	},
	format: function(data) {
		let temp;
		try {
			temp = String(eval(data["Cur. Value"]));
			temp += "/" + String(eval(data["Max Value"]));
		} catch(e) {
			temp = "ERROR";
		}
		if(temp.length > 12) temp = temp.substring(0, 12) + "...";
		return temp;
	}
}

Sprite_HUDImageGauge.prototype.initialize = function(info) {
	Sprite_HUDObject.prototype.initialize.call(this, new Bitmap(1, 1), info);
	this.properties = ["Cur. Value", "Max Value", "Condition", "Layer", "Scale X", "Scale Y", "Style", 
						"Main Image", "Back Image"];
	for(let i = 0; i < this.properties.length; i++) {
		const prop = this.properties[i];
		this[prop] = info[prop];
	}
	this._value = this.getCurrentValue();
	this._maxvalue = this.getMaxValue();
	this._gauge = new Sprite();
	this._gauge.anchor.y = 0.5;
	this.addChild(this._gauge);
	this.refresh(true);
};

Sprite_HUDImageGauge.prototype.getCurrentValue = function() {
	let result;
	try {
		result = eval(this["Cur. Value"]);
	} catch(e) {
		console.log('Error with Gauge\n' + e);
		result = 0;
	}
	return result;
};

Sprite_HUDImageGauge.prototype.getMaxValue = function() {
	let result;
	try {
		result = eval(this["Max Value"]);
	} catch(e) {
		console.log('Error with Gauge\n' + e);
		result = 0;
	}
	return result;
};

Sprite_HUDImageGauge.prototype.update = function() {
	Sprite_HUDObject.prototype.update.call(this);
	if(!this._isActive) return;
	const newValue = this.getCurrentValue();
	const newMax = this.getMaxValue();
	if(this._value !== newValue || this._maxvalue !== newMax) {
		this._value = newValue;
		this._maxvalue = newMax;
		this.refresh();
	}
};

Sprite_HUDImageGauge.prototype.refresh = function(refreshProperties) {
	Sprite_HUDObject.prototype.refresh.apply(this, arguments);
	const style = this["Style"];
	const horizontal = Boolean(style === 'left' || style === 'right');
	if(this.bitmap) {
		this.bitmap.addLoadListener(function() {
			if(horizontal) {
				this._gauge.y = 0;
				this._gauge.x = (this.bitmap.width / -2);
				this._gauge.anchor.x = 0;
				this._gauge.anchor.y = 0.5;
			} else {
				this._gauge.x = 0;
				this._gauge.y = (this.bitmap.height / -2);
				this._gauge.anchor.y = 0;
				this._gauge.anchor.x = 0.5;
			}
			this.setupSnaps();
		}.bind(this));
	}
	if((this._value || this._value === 0) && (this._maxvalue || this._maxvalue == 0)) {
		this._gauge.bitmap.addLoadListener(function() {
			if(horizontal) {
				this._gauge._frame.height = this._gauge.bitmap.height;
				this._gauge._frame.y = 0;
				this._gauge._frame.width = this._gauge.bitmap.width * (this._value / this._maxvalue);
				if(style === 'right') {
					this._gauge._frame.x = this._gauge.bitmap.width - this._gauge._frame.width;
					if(this.bitmap) this._gauge.x = (this.bitmap.width / -2) + this._gauge._frame.x;
				} else if(style === 'left') {
					this._gauge._frame.x = 0;
					if(this.bitmap) this._gauge.x = (this.bitmap.width / -2);
				}
				this._gauge._refresh();
				if(!this.bitmap) {
					this._gauge.x = (this._gauge.bitmap.width / -2);
					this.setupSnaps2();
				}
			} else {
				this._gauge._frame.width = this._gauge.bitmap.width;
				this._gauge._frame.x = 0;
				this._gauge._frame.height = this._gauge.bitmap.height * (this._value / this._maxvalue);
				if(style === 'down') {
					this._gauge._frame.y = this._gauge.bitmap.height - this._gauge._frame.height;
					this._gauge.y = (this.bitmap.height / -2) + this._gauge._frame.y;
				} else if(style === 'up') {
					this._gauge._frame.y = 0;
					this._gauge.y = (this.bitmap.height / -2);
				}
				this._gauge._refresh();
				if(!this.bitmap) {
					this._gauge.y = (this._gauge.bitmap.height / -2);
					this.setupSnaps2();
				}
			}
		}.bind(this));
	}
};

Sprite_HUDImageGauge.prototype.refreshProperties = function() {
	Sprite_HUDObject.prototype.refreshProperties.apply(this, arguments);
	this.z = parseInt(this["Layer"]);
	const front = this["Main Image"];
	const back = this["Back Image"];
	if(front) {
		this._gauge.bitmap = _.getGauge(front);
		this._baseXScale = parseFloat(this["Scale X"]);
		this._baseYScale = parseFloat(this["Scale Y"]);
		this.updateRealScale();
	}
	if(back && back !== "N\n\nONE") {
		this.bitmap = _.getGaugeBack(back);
	} else {
		this.bitmap = null;
	}
};

Sprite_HUDImageGauge.prototype.setupSnaps2 = function() {
	const width = this._gauge.width * this._baseXScale;
	const height = this._gauge.height * this._baseYScale;
	this.xSnaps = [width / 2, Graphics.boxWidth / 2, Graphics.boxWidth - (width / 2)];
	this.ySnaps = [height / 2, Graphics.boxHeight / 2, Graphics.boxHeight - (height / 2)];
};

//-----------------------------------------------------------------------------
// Sprite_HUDImageText
//-----------------------------------------------------------------------------

function Sprite_HUDImageText() {
	this.initialize.apply(this, arguments);
}

Sprite_HUDImageText.prototype = Object.create(Sprite_HUDObject.prototype);
Sprite_HUDImageText.prototype.constructor = Sprite_HUDImageText;

Sprite_HUDImageText._label = "Image Numbers";

/*
 * Get HTML for Sprite_HUDText manipulation
 */
Sprite_HUDImageText.getHtml = function(data) {
	const value = data["Value"];
	let condition = data["Condition"];
	const layer = data["Layer"];
	const image = data["Image"];
	const scaleX = data["Scale X"];
	const scaleY = data["Scale Y"];
	const opacity = data["Opacity"];
	const hue = data["Hue"];
	const blend = data["Blend"];

	try {
		eval(condition);
	} catch(e) {
		data["Condition"] = '';
		condition = '';
	}

	const blendArray = [];
	for(let i = 0; i <= 16; i++) {
		blendArray.push([String(i), parseInt(blend) === i, _.blendNames[i]])
	}

	return `${HUDManager.createTitle(data.id, Sprite_HUDImageText._label)}
			<table>
				${HUDManager.createHeader()}
				${HUDManager.createInput("Value", value)}
				${HUDManager.createConditionInput("Condition", condition)}
				${HUDManager.createInput("Layer", layer)}
				${HUDManager.createFilelist("Image", 'numbers', image)}
				${HUDManager.createInput("Scale X", scaleX)}
				${HUDManager.createInput("Scale Y", scaleY)}
				${HUDManager.createInput("Opacity", opacity)}
				${HUDManager.createInput("Hue", hue)}
				${HUDManager.createSelectArray("Blend", blendArray)}
				${HUDManager.createRefresh()}
			</table>`;
};

/*
 * Register Sprite_HUDImageText within the HUDManager
 */
HUDManager.typeNames.push(Sprite_HUDImageText._label);
HUDManager.types[Sprite_HUDImageText._label] = {
	class: Sprite_HUDImageText,
	html: Sprite_HUDImageText.getHtml,
	data: {
		"type": 		Sprite_HUDImageText._label,
		"Value": 		"$gameParty.gold()",
		"Condition": 	"",
		"Layer": 		"0",
		"Image": 		_.getFirstFile('numbers'),
		"Scale X": 		"1",
		"Scale Y": 		"1",
		"Opacity": 		"255",
		"Hue": 			"0",
		"Blend": 		"0"
	},
	format: function(data) {
		let temp;
		try {
			temp = String(eval(data["Value"]));
		} catch(e) {
			temp = "ERROR";
		}
		if(temp.length > 12) temp = temp.substring(0, 12) + "...";
		return temp;
	}
}

Sprite_HUDImageText.prototype.initialize = function(info) {
	Sprite_HUDObject.prototype.initialize.call(this, new Bitmap(1, 1), info);
	this.properties = ["Value", "Layer", "Condition", "Image", "Scale X", "Scale Y", "Opacity", "Hue", "Blend"];
	for(let i = 0; i < this.properties.length; i++) {
		const prop = this.properties[i];
		this[prop] = info[prop];
	}
	this._value = this.getValue();
	this._textLength = String(this._value).length;
	this._oBitmap = null;
	this._numbers = [];
	this.refresh(true);
};

Sprite_HUDImageText.prototype.getValue = function() {
	let result;
	try {
		result = eval(this["Value"]);
	} catch(e) {
		console.log('Error with Image Text\n' + e);
		result = 0;
	}
	return result;
};

Sprite_HUDImageText.prototype.update = function() {
	Sprite_HUDObject.prototype.update.call(this);
	if(!this._isActive) return;
	const newValue = this.getValue();
	if(this._value !== newValue) {
		this._value = newValue;
		this.refresh();
	}
};

Sprite_HUDImageText.prototype.refresh = function(refreshProperties) {
	Sprite_HUDObject.prototype.refresh.apply(this, arguments);
	this._oBitmap.addLoadListener(function() {
		const width = this._oBitmap.width / 10;
		const height = this._oBitmap.height;
		this._textLength = String(this._value).length;
		this.bitmap = new Bitmap(width * this._textLength, height);
		if(this._numbers.length !== this._textLength) {
			this.clearNumbers();
			this.createNumbers(width);
		}
		this.applyNumbers(width, height);
		this.setupSnaps();
	}.bind(this));
};

Sprite_HUDImageText.prototype.clearNumbers = function() {
	this._numbers.forEach(function(number) {
		this.removeChild(number);
	}, this);
	this._numbers = [];
};

Sprite_HUDImageText.prototype.createNumbers = function(width) {
	for(let i = 0; i < this._textLength; i++) {
		const sprite = new Sprite(this._oBitmap);
		sprite.anchor.set(0.5);
		sprite.blendMode = parseInt(this["Blend"]);
		this.addChild(sprite);
		this._numbers.push(sprite);
		sprite.x = (i * width) - (this.bitmap.width / 2) + (width / 2);
	}
};

Sprite_HUDImageText.prototype.applyNumbers = function(width, height) {
	const strValue = String(this._value);
	for(let i = 0; i < this._textLength; i++) {
		const num = parseInt(strValue[i]);
		this._numbers[i].setFrame(width * num, 0, width, height);
	}
};

Sprite_HUDImageText.prototype.refreshProperties = function() {
	Sprite_HUDObject.prototype.refreshProperties.apply(this, arguments);
	this.z = parseInt(this["Layer"]);
	this.clearNumbers();
	this._value = this.getValue();
	this._oBitmap = _.getNumbers(this["Image"], parseInt(this["Hue"]));
	this._baseXScale = parseFloat(this["Scale X"]);
	this._baseYScale = parseFloat(this["Scale Y"]);
	this.updateRealScale();
	this.opacity = parseInt(this["Opacity"]);
	this._numbers.forEach(function(sprite) {
		sprite.blendMode = parseInt(this["Blend"]);
	}, this);
};

//-----------------------------------------------------------------------------
// Sprite_HUDFace
//-----------------------------------------------------------------------------

function Sprite_HUDFace() {
	this.initialize.apply(this, arguments);
}

Sprite_HUDFace.prototype = Object.create(Sprite_HUDObject.prototype);
Sprite_HUDFace.prototype.constructor = Sprite_HUDFace;

Sprite_HUDFace._label = "Actor Face";

/*
 * Get HTML for Sprite_HUDText manipulation
 */
Sprite_HUDFace.getHtml = function(data) {
	const value = data["Actor ID"];
	let condition = data["Condition"];
	const layer = data["Layer"];
	const width = data["Width"];
	const height = data["Height"];
	const color = data["Background Color"];
	const alpha = data["Background Alpha"];
	const mask = data["Mask"];

	const sele = ['', ''];
	if(mask === '0') sele[0] = 'selected';
	else if(mask === '1') sele[1] = 'selected';

	try {
		eval(condition);
	} catch(e) {
		data["Condition"] = '';
		condition = '';
	}

	return `${HUDManager.createTitle(data.id, Sprite_HUDImageText._label)}
			<table>
				${HUDManager.createHeader()}
				${HUDManager.createInput("Actor ID", value)}
				${HUDManager.createConditionInput("Condition", condition)}
				${HUDManager.createInput("Layer", layer)}
				${HUDManager.createInput("Width", width)}
				${HUDManager.createInput("Height", height)}
				${HUDManager.createColor("Background Color", color, "Background Alpha", alpha)}
				${HUDManager.createSelect("Mask", ["0", sele[0], "None"],
										 ["1", sele[1], "Circle"])}
				${HUDManager.createRefresh()}
			</table>`;
};

/*
 * Register Sprite_HUDImageText within the HUDManager
 */
HUDManager.typeNames.push(Sprite_HUDFace._label);
HUDManager.types[Sprite_HUDFace._label] = {
	class: Sprite_HUDFace,
	html: Sprite_HUDFace.getHtml,
	data: {
		"type": 		Sprite_HUDFace._label,
		"Actor ID": 	"$gameParty.leader().actorId()",
		"Condition": 	"",
		"Layer": 		"0",
		"Width": 		"144",
		"Height": 		"144",
		"Background Color": '#FFFFFF',
		"Background Alpha": "255",
		"Mask": 		"1"
	},
	format: function(data) {
		let temp;
		try {
			temp = "Actor: " + String(eval(data["Actor ID"]));
		} catch(e) {
			temp = "ERROR";
		}
		if(temp.length > 12) temp = temp.substring(0, 12) + "...";
		return temp;
	}
}

Sprite_HUDFace.prototype.initialize = function(info) {
	Sprite_HUDObject.prototype.initialize.call(this, new Bitmap(1, 1), info);
	this.properties = ["Actor ID", "Layer", "Condition", "Width", "Height", "Background Color", "Background Alpha", "Mask"];
	for(let i = 0; i < this.properties.length; i++) {
		const prop = this.properties[i];
		this[prop] = info[prop];
	}
	this._value = this.getActorId();
	this.refresh(true);
};

Sprite_HUDFace.prototype.getActorId = function() {
	let result;
	try {
		result = eval(this["Actor ID"]);
	} catch(e) {
		console.log('Error with Actor Face\n' + e);
		result = 1;
	}
	return result;
};

Sprite_HUDFace.prototype.update = function() {
	Sprite_HUDObject.prototype.update.call(this);
	if(!this._isActive) return;
	const newValue = this.getActorId();
	if(this._value !== newValue) {
		this._value = newValue;
		this.refresh();
	}
};

Sprite_HUDFace.prototype.refresh = function(refreshProperties) {
	Sprite_HUDObject.prototype.refresh.apply(this, arguments);
	this._oBitmap.addLoadListener(this.refreshBitmap.bind(this));
};

Sprite_HUDFace.prototype.refreshBitmap = function() {
	this.bitmap.clear();
	const color = _.convertHex(this["Background Color"], parseInt(this["Background Alpha"]));
	this.bitmap.fillRect(0, 0, this.bitmap.width, this.bitmap.height, color);
	this.drawFace(this._actor.faceIndex(), parseInt(this["Width"]), parseInt(this["Height"]));
	this.setupSnaps();
};

Sprite_HUDFace.prototype.drawFace = function(faceIndex, width, height) {
	width = width || Window_Base._faceWidth;
	height = height || Window_Base._faceHeight;
	var pw = Window_Base._faceWidth;
	var ph = Window_Base._faceHeight;
	var sx = faceIndex % 4 * pw + (pw - pw) / 2;
	var sy = Math.floor(faceIndex / 4) * ph + (ph - ph) / 2;
	this.bitmap.blt(this._oBitmap, sx, sy, pw, ph, 0, 0, width, height);
};

Sprite_HUDFace.prototype.refreshProperties = function() {
	Sprite_HUDObject.prototype.refreshProperties.apply(this, arguments);
	const bit = this.bitmap;
	const width = parseInt(this["Width"]);
	const height = parseInt(this["Height"]);
	if(bit.width !== width || bit.height !== height) {
		this.bitmap.resize(width, height);
		this._frame.width = 0;
		this._frame.height = 0;
		this._onBitmapLoad();
	}
	this.z = parseInt(this["Layer"]);
	this._value = this.getActorId();
	this._actor = $gameActors.actor(this._value);
	this._oBitmap = ImageManager.loadFace(this._actor.faceName());
	this.refreshMask(width, height);
};

Sprite_HUDFace.prototype.refreshMask = function(width, height) {
	if(this._maskSprite) this.removeChild(this._maskSprite);
	this.createMask();
	this.refreshMaskBitmap(width, height);
	this.redrawMask();
};

Sprite_HUDFace.prototype.createMask = function() {
	this._maskSprite = new Sprite(new Bitmap(1, 1));
	this._maskSprite.anchor.set(0.5);
	this.mask = this._maskSprite;
	this.addChild(this._maskSprite);
};

Sprite_HUDFace.prototype.refreshMaskBitmap = function(width, height) {
	const spr = this._maskSprite;
	spr.bitmap.resize(width, height);
	spr._frame.width = 0;
	spr._frame.height = 0;
	spr._onBitmapLoad();
};

Sprite_HUDFace.prototype.redrawMask = function() {
	const bit = this._maskSprite.bitmap;
	bit.clear();
	if(this["Mask"] === "0") {
		bit.fillRect(0, 0, bit.width, bit.height, "#ffffff");
	} else {
		bit.fillRect(0, 0, bit.width, bit.height, "#000000");
		const w2 = bit.width / 2, h2 = bit.height / 2;
		bit.drawOval(w2, h2, w2, h2, "#ffffff");
	}
};

})(SRD.HUDMaker);