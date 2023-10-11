(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [
		{name:"HayvanSürüklemeOyunu_atlas_1", frames: [[670,0,646,817],[1318,0,646,816],[0,0,668,858]]},
		{name:"HayvanSürüklemeOyunu_atlas_2", frames: [[0,0,861,786],[863,0,940,714],[863,716,940,714],[0,788,669,858]]},
		{name:"HayvanSürüklemeOyunu_atlas_3", frames: [[903,0,846,812],[0,790,846,812],[0,0,901,788],[848,814,861,786]]},
		{name:"HayvanSürüklemeOyunu_atlas_4", frames: [[883,809,901,788],[0,0,1082,744],[1084,0,881,807],[0,746,881,807]]},
		{name:"HayvanSürüklemeOyunu_atlas_5", frames: [[0,1026,1082,744],[0,0,1024,1024]]},
		{name:"HayvanSürüklemeOyunu_atlas_6", frames: [[0,0,1955,1102]]}
];


(lib.AnMovieClip = function(){
	this.actionFrames = [];
	this.ignorePause = false;
	this.gotoAndPlay = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndPlay.call(this,positionOrLabel);
	}
	this.play = function(){
		cjs.MovieClip.prototype.play.call(this);
	}
	this.gotoAndStop = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndStop.call(this,positionOrLabel);
	}
	this.stop = function(){
		cjs.MovieClip.prototype.stop.call(this);
	}
}).prototype = p = new cjs.MovieClip();
// symbols:



(lib.CachedBmp_1 = function() {
	this.initialize(ss["HayvanSürüklemeOyunu_atlas_6"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.Aslan = function() {
	this.initialize(ss["HayvanSürüklemeOyunu_atlas_3"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.AslanGölge = function() {
	this.initialize(ss["HayvanSürüklemeOyunu_atlas_3"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.Fare = function() {
	this.initialize(ss["HayvanSürüklemeOyunu_atlas_4"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.FareGölge = function() {
	this.initialize(ss["HayvanSürüklemeOyunu_atlas_3"]);
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.Fil = function() {
	this.initialize(ss["HayvanSürüklemeOyunu_atlas_5"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.FilGölge = function() {
	this.initialize(ss["HayvanSürüklemeOyunu_atlas_4"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.Geyik = function() {
	this.initialize(ss["HayvanSürüklemeOyunu_atlas_4"]);
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.GeyikGölge = function() {
	this.initialize(ss["HayvanSürüklemeOyunu_atlas_4"]);
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.index_atlas_8 = function() {
	this.initialize(ss["HayvanSürüklemeOyunu_atlas_5"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.Kuş = function() {
	this.initialize(ss["HayvanSürüklemeOyunu_atlas_3"]);
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.KuşGölge = function() {
	this.initialize(ss["HayvanSürüklemeOyunu_atlas_2"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.Maymun = function() {
	this.initialize(ss["HayvanSürüklemeOyunu_atlas_2"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.MaymunGölge = function() {
	this.initialize(ss["HayvanSürüklemeOyunu_atlas_2"]);
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.Tavşan = function() {
	this.initialize(ss["HayvanSürüklemeOyunu_atlas_1"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.TavşanGölge = function() {
	this.initialize(ss["HayvanSürüklemeOyunu_atlas_1"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.Zebra = function() {
	this.initialize(ss["HayvanSürüklemeOyunu_atlas_1"]);
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.ZebraGölge = function() {
	this.initialize(ss["HayvanSürüklemeOyunu_atlas_2"]);
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();
// helper functions:

function mc_symbol_clone() {
	var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop, this.reversed));
	clone.gotoAndStop(this.currentFrame);
	clone.paused = this.paused;
	clone.framerate = this.framerate;
	return clone;
}

function getMCSymbolPrototype(symbol, nominalBounds, frameBounds) {
	var prototype = cjs.extend(symbol, cjs.MovieClip);
	prototype.clone = mc_symbol_clone;
	prototype.nominalBounds = nominalBounds;
	prototype.frameBounds = frameBounds;
	return prototype;
	}


(lib.Triangle = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#323232").s().p("AhqiAIDVCAIjVCBg");
	this.shape.setTransform(0,-0.025);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-10.7,-12.9,21.5,25.8);


(lib.Square = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#323232").s().p("Ah1B2IAAjrIDrAAIAADrg");
	this.shape.setTransform(0.025,0.025);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-11.7,-11.7,23.5,23.5);


(lib.PauseIcon = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#323232").s().p("AAfBqIAAjTIBqAAIAADTgAiIBqIAAjTIBqAAIAADTg");
	this.shape.setTransform(0.025,-0.025);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-13.7,-10.6,27.5,21.2);


(lib.Sembol1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Katman_1
	this.instance = new lib.index_atlas_8();
	this.instance.setTransform(-588.8,-588.8,1.15,1.15);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Sembol1, new cjs.Rectangle(-588.8,-588.8,1177.6,1177.6), null);


(lib.RestoreIcon = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#323232").s().p("AAEC/IgEgDIgBgFIgDgyIABgFIADgEIAFgCIAZgBQAtgDAhghQAkgjAAgyQAAgygkgkIgCgCQgggfgsgDIAAAAIgIAAQgxAAgkAkIAAABIgGAGIAvANQAEABACADQACAEgBAEQgBAEgEACIhwBAQgEACgEgBQgEgBgCgEIhBhwQgCgDABgEQABgEAEgCQADgCAEABIA6APQAMgTASgRIAAAAQA3g4BPgBIAKAAIABAAIABAAQBIAFA0A0QA4A4AABPQAABPg4A3IgBABQgzA0hIAEIgZABIgBABIgEgCgACgCAIAAABIABgCg");
	this.shape.setTransform(-0.006,0.0014);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-21.3,-19.2,42.7,38.5);


(lib.Zebra_1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Katman_1
	this.instance = new lib.ZebraGölge();
	this.instance.setTransform(-33.45,-42.9,0.1,0.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Zebra_1, new cjs.Rectangle(-33.4,-42.9,66.9,85.8), null);


(lib.Tavşan_1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Katman_1
	this.instance = new lib.TavşanGölge();
	this.instance.setTransform(-32.3,-40.8,0.1,0.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Tavşan_1, new cjs.Rectangle(-32.3,-40.8,64.6,81.6), null);


(lib.Maymun_1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Katman_1
	this.instance = new lib.MaymunGölge();
	this.instance.setTransform(-47,-35.7,0.1,0.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Maymun_1, new cjs.Rectangle(-47,-35.7,94,71.4), null);


(lib.Kuş_1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Katman_1
	this.instance = new lib.KuşGölge();
	this.instance.setTransform(-43.05,-39.3,0.1,0.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Kuş_1, new cjs.Rectangle(-43,-39.3,86.1,78.6), null);


(lib.Geyik_1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Katman_1
	this.instance = new lib.GeyikGölge();
	this.instance.setTransform(-44.05,-40.35,0.1,0.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Geyik_1, new cjs.Rectangle(-44,-40.3,88.1,80.69999999999999), null);


(lib.Fil_1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Katman_1
	this.instance = new lib.FilGölge();
	this.instance.setTransform(-54.1,-37.2,0.1,0.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Fil_1, new cjs.Rectangle(-54.1,-37.2,108.2,74.4), null);


(lib.Fare_1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Katman_1
	this.instance = new lib.FareGölge();
	this.instance.setTransform(-45.05,-39.4,0.1,0.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Fare_1, new cjs.Rectangle(-45,-39.4,90.1,78.8), null);


(lib.Aslan_1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Katman_1
	this.instance = new lib.AslanGölge();
	this.instance.setTransform(-42.3,-40.6,0.1,0.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Aslan_1, new cjs.Rectangle(-42.3,-40.6,84.6,81.2), null);


(lib.Slots = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// slots
	this.tavşan = new lib.Tavşan_1();
	this.tavşan.name = "tavşan";
	this.tavşan.setTransform(848.35,408.05);

	this.maymun = new lib.Maymun_1();
	this.maymun.name = "maymun";
	this.maymun.setTransform(747.35,350.85);

	this.kuş = new lib.Kuş_1();
	this.kuş.name = "kuş";
	this.kuş.setTransform(641.35,409.55);

	this.geyik = new lib.Geyik_1();
	this.geyik.name = "geyik";
	this.geyik.setTransform(533.35,352.35);

	this.fil = new lib.Fil_1();
	this.fil.name = "fil";
	this.fil.setTransform(420.35,414.25);

	this.fare = new lib.Fare_1();
	this.fare.name = "fare";
	this.fare.setTransform(314.3,353.3);

	this.aslan = new lib.Aslan_1();
	this.aslan.name = "aslan";
	this.aslan.setTransform(209.4,410.85);

	this.zebra = new lib.Zebra_1();
	this.zebra.name = "zebra";
	this.zebra.setTransform(104.4,356.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.zebra},{t:this.aslan},{t:this.fare},{t:this.fil},{t:this.geyik},{t:this.kuş},{t:this.maymun},{t:this.tavşan}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Slots, new cjs.Rectangle(71,312,809.7,139.5), null);


(lib.StopButton = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// icon
	this.instance = new lib.Square("single",0);
	this.instance.alpha = 0.8008;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({alpha:1},0).wait(1).to({scaleX:0.9,scaleY:0.9},0).to({_off:true},1).wait(1));

	// hit
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF0000").s().p("AjvDwIAAnfIHfAAIAAHfg");
	this.shape._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(3).to({_off:false},0).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-24,-24,48,48);


(lib.PlayButton = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// icon
	this.instance = new lib.Triangle("single",0);
	this.instance.alpha = 0.8008;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({alpha:1},0).wait(1).to({scaleX:0.9,scaleY:0.9},0).to({_off:true},1).wait(1));

	// hit
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF0000").s().p("AjvDwIAAnfIHfAAIAAHfg");
	this.shape._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(3).to({_off:false},0).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-24,-24,48,48);


(lib.PauseButton = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// icon
	this.instance = new lib.PauseIcon("single",0);
	this.instance.alpha = 0.8008;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({alpha:1},0).wait(1).to({scaleX:0.9,scaleY:0.9},0).to({_off:true},1).wait(1));

	// hit
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF0000").s().p("AjvDwIAAnfIHfAAIAAHfg");
	this.shape._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(3).to({_off:false},0).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-24,-24,48,48);


(lib.Restart = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// icon
	this.instance = new lib.RestoreIcon("single",0);
	this.instance.alpha = 0.75;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({alpha:1},0).wait(1).to({rotation:-15},0).to({_off:true},1).wait(1));

	// hit
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#00FF00").s().p("AjkDlIAAnJIHJAAIAAHJg");
	this.shape.setTransform(-0.025,0.025);
	this.shape._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(3).to({_off:false},0).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-23.3,-22.9,46.2,45.9);


(lib.Zebra_2 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// highlight
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFFFFF").ss(3,1,1).p("AhZGRQg7hDhFiYQhXi8AjhNIAlhOQhPgpgXhgQgYhgA8ggQA1gcA5BJQAoAyAXBCQBPgqBaAZQAuAMAeAVQABAAAOgeQATgoARgbQA9hgA2AbQBTApgoB0QgPAtgdAiQgdAjgaADIArBZQAaBIhhC9QhHCLgqAzQgfAlg8gCQg7gBgcggg");
	this.shape.setTransform(0.5792,1.0345,1.0005,1,0,0,-1.8109);
	this.shape._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1).to({_off:false},0).wait(2));

	// icon
	this.instance_1 = new lib.Zebra();
	this.instance_1.setTransform(-33,-42,0.1,0.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(3));

	// shadow
	this.instance_2 = new lib.Zebra_1();
	this.instance_2.setTransform(-4.6,7.35);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1).to({_off:false},0).wait(2));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-38,-43.5,74.3,93.8);


(lib.Tavşan_2 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// highlight
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFFFFF").ss(3,1,1).p("AjOgRQgBgDgshBQgigygNgnQghhgAFhCQAEg5AdgPQA+ghBDBfQBEBhASCbQArgcA7ALQAeAGAWALQAGhzBChoQBGhtA+AfQAoAUAHA9QAHBCghBhQgNAngcAtQggAxgNAVQAEgCATBNQAUBTgBAtQgDBThCA+QhKBGhwgIQh6gKg/g6Qg/g7gEhuQgDhIAXhIQASg6AGAFgAjMgNQgBgCgBgC");
	this.shape.setTransform(0.0791,-0.7168,1.0005,1,0,0,-1.8109);
	this.shape._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1).to({_off:false},0).wait(2));

	// icon
	this.instance_1 = new lib.Tavşan();
	this.instance_1.setTransform(-32,-41,0.1,0.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(3));

	// shadow
	this.instance_2 = new lib.Tavşan_1();
	this.instance_2.setTransform(-4.7,3.95);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1).to({_off:false},0).wait(2));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-37,-43.1,71.4,87.9);


(lib.Maymun_2 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// highlight
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFFFFF").ss(3,1,1).p("AALFsQjVgDhmitQgzhXgIhXQhMgmgagvQgXgrAVgsQAcg7AzgQQAtgNArAYQDQjMDQBaQBpAtA/BVQAAABAQgFQAVgHATAAQBAgDAtA+QA2BJgwA/QgoAzhCAIQgMBTgxBSQhgCli1gDg");
	this.shape.setTransform(-0.8481,-0.7215,1.0005,1,0,0,-1.8109);
	this.shape._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1).to({_off:false},0).wait(2));

	// icon
	this.instance_1 = new lib.Maymun();
	this.instance_1.setTransform(-48,-37,0.1,0.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(3));

	// shadow
	this.instance_2 = new lib.Maymun_1();
	this.instance_2.setTransform(-5.45,5.25);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1).to({_off:false},0).wait(2));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-52.4,-38.6,100.9,79.6);


(lib.Kuş_2 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// highlight
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFFFFF").ss(3,1,1).p("AgGGOQimgFhehZQhNhKgWh7QgRhkAUhkQAThbAcgOQABgBgRgTQgagdgVgpQg1hnADgFQACgDAZALQBWAjBsArQBxhLCaAfQBOAQA3AeQABADBzggQB2giACAAIg5BYQg7BaAIAKQAfAkAMBdQAOBmgYBgQgeBzhPBBQhfBOicgEg");
	this.shape.setTransform(-0.8857,-0.4363,1.0005,1,0,0,-1.8109);
	this.shape._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1).to({_off:false},0).wait(2));

	// icon
	this.instance_1 = new lib.Kuş();
	this.instance_1.setTransform(-44,-39,0.1,0.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(3));

	// shadow
	this.instance_2 = new lib.Kuş_1();
	this.instance_2.setTransform(-4.25,5.15);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1).to({_off:false},0).wait(2));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-47.3,-40.5,90.8,85);


(lib.Geyik_2 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// highlight
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFFFFF").ss(3,1,1).p("AACE7QhxgBhIhBQg9g2gYhcQgUhPALhOQALhKAegYQgqgUgUhGQgPg5AFgPQCLAiATA1QBOgqB9AQQA/AIAwAPQAQgaA+gZQA6gYADAGQAUAqghBCQgQAhgUAZQAfAZAMBIQANBMgUBLQgZBYhAA0QhMA9h7gBg");
	this.shape.setTransform(-1.4086,8.8453,1.0005,1,0,0,-1.8109);
	this.shape._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1).to({_off:false},0).wait(2));

	// icon
	this.instance_1 = new lib.Geyik();
	this.instance_1.setTransform(-45,-41,0.1,0.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(3));

	// shadow
	this.instance_2 = new lib.Geyik_1();
	this.instance_2.setTransform(-4.25,4.55);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1).to({_off:false},0).wait(2));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-48.3,-41,91.4,85.9);


(lib.Fil_2 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// highlight
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFFFFF").ss(3,1,1).p("AhKE+QgqgEhCgyQghgZgZgYQg5AShKgdQhLgegxhAQg3hIAAhXQAAhmBNhqQA4hOA7gaQBnguCCBXQBOgqBfAUQAwAKAgASQAAACAigXQArgYArgFQCNgNBwDHQByDHiUCJQgzAvhDAYQg8AWgQgNQgHAYgQAcQghA4gxAUQg+AahOggQgFgCgzgZQgegOgQgBg");
	this.shape.setTransform(-0.5448,-0.3455,1.0005,1,0,0,-1.8109);
	this.shape._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1).to({_off:false},0).wait(2));

	// icon
	this.instance_1 = new lib.Fil();
	this.instance_1.setTransform(-55,-38,0.1,0.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(3));

	// shadow
	this.instance_2 = new lib.Fil_1();
	this.instance_2.setTransform(-6.55,4.3);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1).to({_off:false},0).wait(2));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-60.6,-39.2,116.7,80.7);


(lib.Fare_2 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// highlight
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFFFFF").ss(3,1,1).p("AAPGEQkJgGhGjHQgihjAShiQhWgsgVhuQgWh2BYhBQBZhCB1A5QA6AcAtAqICJAEQAIgOAdgVQAjgaApgOQB1gpBdBQQBOBBgeB4QgMAwgcApQgbAogeAPQAPBhgiBhQhEDAjxgFg");
	this.shape.setTransform(-0.2844,-0.1417,1.0005,1,0,0,-1.8109);
	this.shape._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1).to({_off:false},0).wait(2));

	// icon
	this.instance_1 = new lib.Fare();
	this.instance_1.setTransform(-45,-39,0.1,0.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(3));

	// shadow
	this.instance_2 = new lib.Fare_1();
	this.instance_2.setTransform(-3.25,4.55);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1).to({_off:false},0).wait(2));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-48.3,-40.1,94.4,84.1);


(lib.Aslan_2 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// highlight
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFFFFF").ss(3,1,1).p("AmsgvQAJiOB8hqQCBhuCzAAQCyABB6CAQBvByAFCKQAFCPi5CfQhIA+hJAlQhIAkgggJQj4hBhviqQhLhzAGhlg");
	this.shape.setTransform(-0.3943,-1.2189);
	this.shape._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1).to({_off:false},0).wait(2));

	// icon
	this.instance_1 = new lib.Aslan();
	this.instance_1.setTransform(-42,-41,0.1,0.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(3));

	// shadow
	this.instance_2 = new lib.Aslan_1();
	this.instance_2.setTransform(-4.55,3.9);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1).to({_off:false},0).wait(2));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-46.8,-43.3,90.8,87.8);


(lib.PlayPause = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(2));

	// buttons
	this.instance = new lib.PlayButton();
	new cjs.ButtonHelper(this.instance, 0, 1, 2, false, new lib.PlayButton(), 3);

	this.instance_1 = new lib.PauseButton();
	new cjs.ButtonHelper(this.instance_1, 0, 1, 2, false, new lib.PauseButton(), 3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-13.7,-12.9,27.5,25.8);


(lib.AudioPlayer = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// playPause
	this.playPauseButton = new lib.PlayPause();
	this.playPauseButton.name = "playPauseButton";
	this.playPauseButton.setTransform(-36.2,0);

	this.timeline.addTween(cjs.Tween.get(this.playPauseButton).wait(1));

	// stopButton
	this.stopButton = new lib.StopButton();
	this.stopButton.name = "stopButton";
	this.stopButton.setTransform(33.25,0);
	new cjs.ButtonHelper(this.stopButton, 0, 1, 2, false, new lib.StopButton(), 3);

	this.timeline.addTween(cjs.Tween.get(this.stopButton).wait(1));

	// rec
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.2)").s().p("AtXFSIAAqjIavAAIAAKjg");
	this.shape.setTransform(0,0.025);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.AudioPlayer, new cjs.Rectangle(-85.5,-33.7,171.1,67.5), null);


(lib.Pieces = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// pieces
	this.tavşan = new lib.Tavşan_2();
	this.tavşan.name = "tavşan";
	this.tavşan.setTransform(866.9,123);
	new cjs.ButtonHelper(this.tavşan, 0, 1, 2);

	this.maymun = new lib.Maymun_2();
	this.maymun.name = "maymun";
	this.maymun.setTransform(536.2,181.1);
	new cjs.ButtonHelper(this.maymun, 0, 1, 2);

	this.kuş = new lib.Kuş_2();
	this.kuş.name = "kuş";
	this.kuş.setTransform(435,128.3);
	new cjs.ButtonHelper(this.kuş, 0, 1, 2);

	this.geyik = new lib.Geyik_2();
	this.geyik.name = "geyik";
	this.geyik.setTransform(324.2,170.7);
	new cjs.ButtonHelper(this.geyik, 0, 1, 2);

	this.fil = new lib.Fil_2();
	this.fil.name = "fil";
	this.fil.setTransform(656.15,127.3);
	new cjs.ButtonHelper(this.fil, 0, 1, 2);

	this.fare = new lib.Fare_2();
	this.fare.name = "fare";
	this.fare.setTransform(211.2,128.3);
	new cjs.ButtonHelper(this.fare, 0, 1, 2);

	this.aslan = new lib.Aslan_2();
	this.aslan.name = "aslan";
	this.aslan.setTransform(99.95,175.3);
	new cjs.ButtonHelper(this.aslan, 0, 1, 2);

	this.zebra = new lib.Zebra_2();
	this.zebra.name = "zebra";
	this.zebra.setTransform(772.8,176.3);
	new cjs.ButtonHelper(this.zebra, 0, 1, 2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.zebra},{t:this.aslan},{t:this.fare},{t:this.fil},{t:this.geyik},{t:this.kuş},{t:this.maymun},{t:this.tavşan}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Pieces, new cjs.Rectangle(53.1,79.9,848.1999999999999,146.7), null);


// stage content:
(lib.HayvanSürüklemeOyunu = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	this.actionFrames = [0];
	this.isSingleFrame = false;
	// timeline functions:
	this.frame_0 = function() {
		if(this.isSingleFrame) {
			return;
		}
		if(this.totalFrames == 1) {
			this.isSingleFrame = true;
		}
		var root = this;
		var pieces = root.pieces;
		var slots = root.slots;
		var restart = root.restart;
		var winMessage = root.winMessage;
		var positions = [];
		
		root.setup = function()
		{
			document.body.style.backgroundColor = lib.properties.color;
			createjs.Touch.enable(stage);
			stage.mouseMoveOutside = true;
			root.drawStart = stage.on("drawstart", root.start, null, true);
		};
		
		root.start = function(e)
		{
			stage.off("drawstart", root.drawStart);
			winMessage.originalY = winMessage.y;
			
			pieces.children.forEach(function(child, index)
			{
				positions[index] = {x:child.x, y:child.y};
			});
			
			slots.children.forEach(function(child, index)
			{
				child.mouseChildren = false;
			});
		
			root.restartHandler(null);	
			restart.on("click", root.restartHandler);
			pieces.on("mousedown", root.mouseDownHandler);	
		};
		
		root.restartHandler = function(e)
		{
			pieces.count = 0;
			winMessage.text = "";
			root.shuffle();
		};
		
		root.mouseDownHandler = function(e)
		{
			e.currentTarget.setChildIndex(e.target, e.currentTarget.children.length - 1);
			e.target.offsetX = (e.stageX / stage.scaleX) - e.target.x; // imleci ortalamak icin
			e.target.offsetY = (e.stageY / stage.scaleY) - e.target.y;
			pieces.target = e.target;
			root.stageMouseMove = stage.on("stagemousemove", root.stageMouseMoveHandler);
			root.stageMouseUp = stage.on("stagemouseup", root.stageMouseUpHandler);
		};
		
		root.stageMouseMoveHandler = function(e)
		{
			if (pieces.target)
			{
				pieces.target.x = (e.stageX / stage.scaleX) - pieces.target.offsetX;
				pieces.target.y = (e.stageY / stage.scaleY) - pieces.target.offsetY;
			}	
		};
		
		root.stageMouseUpHandler = function(e)
		{
			stage.off("stagemousemove", root.stageMouseMove);
			stage.off("stagemouseup", root.stageMouseUp);
			
			if (pieces.target)
			{
				root.check();
				pieces.target = null;
			}	
		};
		
		root.shuffle = function()
		{	
			positions.sort(function(a, b)
			{
				return 0.5 - Math.random();
			});
			
			pieces.children.forEach(function(child, index)
			{
				child.originalX = positions[index].x;
				child.originalY = positions[index].y;		
				child.mouseEnabled = true;		
				createjs.Tween.get(child).to({x:child.originalX, y:child.originalY}, 350, createjs.Ease.backInOut);
			});
		};
		
		root.check = function()
		{
			var spot = slots.getObjectUnderPoint(pieces.target.x, pieces.target.y);
			
			if (!spot)
			{
				root.onMiss();
				return;
			}
			
			root.slot = spot.parent;
				
			if (root.slot)
			{		
				if (pieces.target.name === root.slot.name)
				{
					root.onMatch();
					
					if (pieces.count === pieces.children.length)
						root.onWin();
				}
				else
					root.onMiss();
				
				root.slot = null;
			}
			else
				root.onMiss();
		};
		
		root.onMatch = function()
		{	createjs.Sound.play("correct");
			pieces.target.mouseEnabled = false;
			pieces.count++;
			createjs.Tween.get(pieces.target).to({x:root.slot.x, y:root.slot.y}, 350, createjs.Ease.backInOut);
		};
		
		root.onWin = function()
		{
			createjs.Sound.play("win");
			winMessage.text = "Kazandın!";
			winMessage.alpha = 0;
			winMessage.y = winMessage.originalY + 60;
			createjs.Tween.get(winMessage).to({alpha:1, y:winMessage.originalY}, 500, createjs.Ease.backInOut);
		};
		
		root.onMiss = function()
		{	createjs.Sound.play("fail");
			createjs.Tween.get(pieces.target).to({x:pieces.target.originalX, y:pieces.target.originalY}, 350, createjs.Ease.backInOut);
		};
		
		root.setup();
		window.root = this;
		
		root.AudioPlayer = function(props)
		{
			this.target = props.target;
			this.soundLinkage = props.soundLinkage;
			this.playProps = props.playProps;
			this.target.on("click", this.onClick, this);
		};
		
		root.AudioPlayer.prototype.onClick = function(e)
		{	
			if (this.target.playPauseButton.contains(e.target))
				this.toggle();
			else if (this.target.stopButton.contains(e.target))
				this.stop();
		};
		
		root.AudioPlayer.prototype.toggle = function()
		{
			this.target.playPauseButton.gotoAndStop(this.target.playPauseButton.currentFrame + 1);
				
			if (this.target.playPauseButton.currentFrame === 0)
			{
				if (this.sound)
					this.sound.paused = true;
			}
			else
			{
				if (this.sound)
					this.sound.paused = false;
				else
					this.sound = createjs.Sound.play(this.soundLinkage, this.playProps);
			}
		};
		
		root.AudioPlayer.prototype.stop = function()
		{
			if (this.sound)
			{
				this.sound.stop();
				this.sound = null;
				this.target.playPauseButton.gotoAndStop(0);
			}
		};
		
		root.main = function()
		{
			document.body.style.backgroundColor = lib.properties.color;
			createjs.Touch.enable(stage);
			
			root.audioPlayer0 = new root.AudioPlayer({ target: root.player0, soundLinkage: "Song0", playProps: { volume: 0.1 } });
		};
		
		root.main();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// restartButton
	this.restart = new lib.Restart();
	this.restart.name = "restart";
	this.restart.setTransform(915.85,37.3);
	new cjs.ButtonHelper(this.restart, 0, 1, 2, false, new lib.Restart(), 3);

	this.timeline.addTween(cjs.Tween.get(this.restart).wait(1));

	// hayvanlar
	this.pieces = new lib.Pieces();
	this.pieces.name = "pieces";
	this.pieces.setTransform(477.2,153.2,1,1,0,0,0,477.2,153.2);

	this.timeline.addTween(cjs.Tween.get(this.pieces).wait(1));

	// çizgi
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("rgba(0,0,0,0.098)").ss(1,1,1).p("EhGdAAAMCM7AAA");
	this.shape.setTransform(480.025,270);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// gölgeler
	this.slots = new lib.Slots();
	this.slots.name = "slots";
	this.slots.setTransform(475.8,381.7,1,1,0,0,0,475.8,381.7);

	this.timeline.addTween(cjs.Tween.get(this.slots).wait(1));

	// win
	this.winMessage = new cjs.Text("", "96px 'Arial'", "#333333");
	this.winMessage.name = "winMessage";
	this.winMessage.textAlign = "center";
	this.winMessage.lineHeight = 109;
	this.winMessage.lineWidth = 931;
	this.winMessage.parent = this;
	this.winMessage.setTransform(480,134.25);

	this.timeline.addTween(cjs.Tween.get(this.winMessage).wait(1));

	// SesOynatıcı
	this.player0 = new lib.AudioPlayer();
	this.player0.name = "player0";
	this.player0.setTransform(90.05,40.35,0.66,0.66,0,0,0,0,0.1);

	this.timeline.addTween(cjs.Tween.get(this.player0).wait(1));

	// back
	this.instance = new lib.Sembol1();
	this.instance.setTransform(523.8,29.8);

	this.instance_1 = new lib.CachedBmp_1();
	this.instance_1.setTransform(-6.95,-5.05,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(415,-289,697.5999999999999,907.6);
// library properties:
lib.properties = {
	id: 'DCCA5A04F9E9EB49A3DF1304FD62D849',
	width: 960,
	height: 540,
	fps: 60,
	color: "#67209F",
	opacity: 1.00,
	manifest: [
		{src:"images/HayvanSürüklemeOyunu_atlas_1.png?1667658426792", id:"HayvanSürüklemeOyunu_atlas_1"},
		{src:"images/HayvanSürüklemeOyunu_atlas_2.png?1667658426792", id:"HayvanSürüklemeOyunu_atlas_2"},
		{src:"images/HayvanSürüklemeOyunu_atlas_3.png?1667658426792", id:"HayvanSürüklemeOyunu_atlas_3"},
		{src:"images/HayvanSürüklemeOyunu_atlas_4.png?1667658426792", id:"HayvanSürüklemeOyunu_atlas_4"},
		{src:"images/HayvanSürüklemeOyunu_atlas_5.png?1667658426792", id:"HayvanSürüklemeOyunu_atlas_5"},
		{src:"images/HayvanSürüklemeOyunu_atlas_6.png?1667658426792", id:"HayvanSürüklemeOyunu_atlas_6"},
		{src:"sounds/Song0.mp3?1667658426851", id:"Song0"},
		{src:"sounds/correct.mp3?1667658426851", id:"correct"},
		{src:"sounds/win.mp3?1667658426851", id:"win"},
		{src:"sounds/fail.mp3?1667658426851", id:"fail"}
	],
	preloads: []
};



// bootstrap callback support:

(lib.Stage = function(canvas) {
	createjs.Stage.call(this, canvas);
}).prototype = p = new createjs.Stage();

p.setAutoPlay = function(autoPlay) {
	this.tickEnabled = autoPlay;
}
p.play = function() { this.tickEnabled = true; this.getChildAt(0).gotoAndPlay(this.getTimelinePosition()) }
p.stop = function(ms) { if(ms) this.seek(ms); this.tickEnabled = false; }
p.seek = function(ms) { this.tickEnabled = true; this.getChildAt(0).gotoAndStop(lib.properties.fps * ms / 1000); }
p.getDuration = function() { return this.getChildAt(0).totalFrames / lib.properties.fps * 1000; }

p.getTimelinePosition = function() { return this.getChildAt(0).currentFrame / lib.properties.fps * 1000; }

an.bootcompsLoaded = an.bootcompsLoaded || [];
if(!an.bootstrapListeners) {
	an.bootstrapListeners=[];
}

an.bootstrapCallback=function(fnCallback) {
	an.bootstrapListeners.push(fnCallback);
	if(an.bootcompsLoaded.length > 0) {
		for(var i=0; i<an.bootcompsLoaded.length; ++i) {
			fnCallback(an.bootcompsLoaded[i]);
		}
	}
};

an.compositions = an.compositions || {};
an.compositions['DCCA5A04F9E9EB49A3DF1304FD62D849'] = {
	getStage: function() { return exportRoot.stage; },
	getLibrary: function() { return lib; },
	getSpriteSheet: function() { return ss; },
	getImages: function() { return img; }
};

an.compositionLoaded = function(id) {
	an.bootcompsLoaded.push(id);
	for(var j=0; j<an.bootstrapListeners.length; j++) {
		an.bootstrapListeners[j](id);
	}
}

an.getComposition = function(id) {
	return an.compositions[id];
}


an.makeResponsive = function(isResp, respDim, isScale, scaleType, domContainers) {		
	var lastW, lastH, lastS=1;		
	window.addEventListener('resize', resizeCanvas);		
	resizeCanvas();		
	function resizeCanvas() {			
		var w = lib.properties.width, h = lib.properties.height;			
		var iw = window.innerWidth, ih=window.innerHeight;			
		var pRatio = window.devicePixelRatio || 1, xRatio=iw/w, yRatio=ih/h, sRatio=1;			
		if(isResp) {                
			if((respDim=='width'&&lastW==iw) || (respDim=='height'&&lastH==ih)) {                    
				sRatio = lastS;                
			}				
			else if(!isScale) {					
				if(iw<w || ih<h)						
					sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==1) {					
				sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==2) {					
				sRatio = Math.max(xRatio, yRatio);				
			}			
		}
		domContainers[0].width = w * pRatio * sRatio;			
		domContainers[0].height = h * pRatio * sRatio;
		domContainers.forEach(function(container) {				
			container.style.width = w * sRatio + 'px';				
			container.style.height = h * sRatio + 'px';			
		});
		stage.scaleX = pRatio*sRatio;			
		stage.scaleY = pRatio*sRatio;
		lastW = iw; lastH = ih; lastS = sRatio;            
		stage.tickOnUpdate = false;            
		stage.update();            
		stage.tickOnUpdate = true;		
	}
}
an.handleSoundStreamOnTick = function(event) {
	if(!event.paused){
		var stageChild = stage.getChildAt(0);
		if(!stageChild.paused || stageChild.ignorePause){
			stageChild.syncStreamSounds();
		}
	}
}
an.handleFilterCache = function(event) {
	if(!event.paused){
		var target = event.target;
		if(target){
			if(target.filterCacheList){
				for(var index = 0; index < target.filterCacheList.length ; index++){
					var cacheInst = target.filterCacheList[index];
					if((cacheInst.startFrame <= target.currentFrame) && (target.currentFrame <= cacheInst.endFrame)){
						cacheInst.instance.cache(cacheInst.x, cacheInst.y, cacheInst.w, cacheInst.h);
					}
				}
			}
		}
	}
}


})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;