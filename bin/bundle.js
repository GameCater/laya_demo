
function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
        r = Reflect.decorate(decorators, target, key, desc);
    else
        for (let i = decorators.length - 1; i >= 0; i--)
            if (d = decorators[i])
                r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}

function __metadata(k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") {
        return Reflect.metadata(k, v);
    }
}

var _regClass = window._regClass;
var _dummyRegClass = Laya.regClass();
function __$decorate(assetId, codePath) {
    return function(...args) {
        if(args[0][0] == _dummyRegClass) {
            if(_regClass)
                args[0][0] = _regClass(assetId, codePath);
            else
                args[0][0] = function(constructor) { Laya.ClassUtils.regClass(assetId, constructor); };
        }
        return __decorate(...args);
    }
}

(() => {
  var __defProp = Object.defineProperty;
  var __name = (target, value) => __defProp(target, "name", { value, configurable: true });

  // E:/projects/laya3/demo_1_2d/src/IndexRT.generated.ts
  var IndexRTBase = class extends Laya.Scene {
  };
  __name(IndexRTBase, "IndexRTBase");

  // E:/projects/laya3/demo_1_2d/src/IndexRT.ts
  var __decorate = __$decorate("c2d4957a-f24c-44f0-8120-fa761cf86aa7", "../src/IndexRT.ts");
  var { regClass, property } = Laya;
  var IndexRT = /* @__PURE__ */ __name(class IndexRT2 extends IndexRTBase {
    constructor() {
      super();
    }
    onEnable() {
      console.log("IndexRT onEnable");
      this.uiBtn.on(Laya.Event.CLICK, this, () => {
        console.log("uiBtn");
        Laya.Scene.open("Scenes/UiMain.ls");
      });
      this.phyBtn.on(Laya.Event.CLICK, this, () => {
        console.log("phyBtn");
        Laya.Scene.open("Scenes/PhysicsGameMain.ls");
      });
      this.d3Btn.on(Laya.Event.CLICK, this, () => {
        console.log("d3Btn");
        Laya.Scene.open("Scenes/D3Main.ls");
      });
    }
    onDestroy() {
      if (this.uiBtn.hasListener(Laya.Event.CLICK))
        console.log("uiBtn\u6709\u70B9\u51FB\u4E8B\u4EF6\u76D1\u542C");
    }
  }, "IndexRT");
  IndexRT = __decorate([
    regClass(),
    __metadata("design:paramtypes", [])
  ], IndexRT);

  // E:/projects/laya3/demo_1_2d/src/ItemBox.generated.ts
  var ItemBoxBase = class extends Laya.Box {
  };
  __name(ItemBoxBase, "ItemBoxBase");

  // E:/projects/laya3/demo_1_2d/src/ItemBox.ts
  var __decorate2 = __$decorate("73edd2a2-7bbb-4563-a6e4-44f2d93ac172", "../src/ItemBox.ts");
  var { regClass: regClass2, property: property2 } = Laya;
  var Script = /* @__PURE__ */ __name(class Script2 extends ItemBoxBase {
    constructor() {
      super();
      this.text = "";
    }
    get dataSource() {
      return super.dataSource;
    }
    set dataSource(value) {
      super.dataSource = value;
      if (!value)
        return;
      if (value.avatar) {
        let redHot = this.getChildByName("avatar").getChildByName("redHot");
        redHot.visible = value.avatar.redHot.visible;
      }
      if (value.flag) {
        let flagText = this.getChildByName("flag").getChildByName("flagText");
        flagText.changeText(value.flag.flagText.text);
      }
    }
  }, "Script");
  __decorate2([
    property2(),
    __metadata("design:type", String)
  ], Script.prototype, "text", void 0);
  Script = __decorate2([
    regClass2(),
    __metadata("design:paramtypes", [])
  ], Script);

  // E:/projects/laya3/demo_1_2d/src/LoadingRT.generated.ts
  var LoadingRTBase = class extends Laya.Scene {
  };
  __name(LoadingRTBase, "LoadingRTBase");

  // E:/projects/laya3/demo_1_2d/src/LoadingRT.ts
  var __decorate3 = __$decorate("c6669a60-6f00-435c-82d3-ba6bfc9bf23c", "../src/LoadingRT.ts");
  var { regClass: regClass3, property: property3 } = Laya;
  var LoadingRT = /* @__PURE__ */ __name(class LoadingRT2 extends LoadingRTBase {
    onAwake() {
      Laya.loader.load(
        ["resources/UI/image.png", "resources/UI/progress.png", "resources/UI/progress$bar.png"]
      ).then(() => {
        let resArr = [
          "resources/UI/images/bg/background.jpg",
          "resources/UI/images/bg/bg14.png",
          "resources/UI/images/bg/img_bg4.png",
          "resources/UI/images/bg/bg.png",
          "resources/UI/images/demo/fcs.jpg",
          "resources/UI/images/demo/whs.jpg",
          { url: "resources/UI/images/atlas_bag.atlas", type: Laya.Loader.ATLAS },
          { url: "resources/UI/images/atlas_bg.atlas", type: Laya.Loader.ATLAS },
          { url: "resources/UI/images/atlas_cd.atlas", type: Laya.Loader.ATLAS },
          { url: "resources/UI/images/atlas_comp.atlas", type: Laya.Loader.ATLAS },
          { url: "resources/UI/images/atlas_test.atlas", type: Laya.Loader.ATLAS },
          { url: "resources/UI/role/atlasAni/139x.atlas", type: Laya.Loader.ATLAS },
          { url: "resources/UI/role/frameAni/role.atlas", type: Laya.Loader.ATLAS },
          { url: "resources/UI/role/spineAni/dragon.sk", type: Laya.Loader.BUFFER },
          { url: "resources/UI/role/spineAni/goblins.sk", type: Laya.Loader.BUFFER },
          { url: "Scenes/Index.ls", type: Laya.Loader.HIERARCHY },
          { url: "Scenes/UiMain.ls", type: Laya.Loader.HIERARCHY },
          { url: "Scenes/PhysicsGameMain.ls", type: Laya.Loader.HIERARCHY },
          { url: "Scenes/D3Main.ls", type: Laya.Loader.HIERARCHY },
          { url: "Scenes/uiDemo/Msg.ls", type: Laya.Loader.HIERARCHY },
          { url: "Scenes/uiDemo/page/Dialog.ls", type: Laya.Loader.HIERARCHY },
          { url: "Scenes/uiDemo/page/OpenMainScene.ls", type: Laya.Loader.HIERARCHY },
          { url: "Scenes/uiDemo/page/OpenScene.ls", type: Laya.Loader.HIERARCHY },
          { url: "resources/prefab/uiDemo/useUI/ChangeTexture.lh", type: Laya.Loader.HIERARCHY },
          { url: "resources/prefab/uiDemo/useUI/MouseThrough.lh", type: Laya.Loader.HIERARCHY },
          { url: "resources/prefab/uiDemo/useUI/PhysicalCollision.lh", type: Laya.Loader.HIERARCHY },
          { url: "resources/prefab/uiDemo/useUI/Progress.lh", type: Laya.Loader.HIERARCHY },
          { url: "resources/prefab/uiDemo/useUI/TextShow.lh", type: Laya.Loader.HIERARCHY },
          { url: "resources/prefab/uiDemo/page/IframeElement.lh", type: Laya.Loader.HIERARCHY },
          { url: "resources/prefab/uiDemo/page/UsePanel.lh", type: Laya.Loader.HIERARCHY },
          { url: "resources/prefab/uiDemo/list/BagList.lh", type: Laya.Loader.HIERARCHY },
          { url: "resources/prefab/uiDemo/list/ComboBox.lh", type: Laya.Loader.HIERARCHY },
          { url: "resources/prefab/uiDemo/list/LoopList.lh", type: Laya.Loader.HIERARCHY },
          { url: "resources/prefab/uiDemo/list/MailList.lh", type: Laya.Loader.HIERARCHY },
          { url: "resources/prefab/uiDemo/list/Refresh.lh", type: Laya.Loader.HIERARCHY },
          { url: "resources/prefab/uiDemo/list/TreeBox.lh", type: Laya.Loader.HIERARCHY },
          { url: "resources/prefab/uiDemo/list/TreeList.lh", type: Laya.Loader.HIERARCHY },
          { url: "resources/prefab/uiDemo/animation/AtlasAni.lh", type: Laya.Loader.HIERARCHY },
          { url: "resources/prefab/uiDemo/animation/FrameAni.lh", type: Laya.Loader.HIERARCHY },
          { url: "resources/prefab/uiDemo/animation/SkeletonAni.lh", type: Laya.Loader.HIERARCHY },
          { url: "resources/prefab/uiDemo/animation/TimelineAni.lh", type: Laya.Loader.HIERARCHY },
          { url: "resources/prefab/uiDemo/animation/TweenAni.lh", type: Laya.Loader.HIERARCHY },
          { url: "resources/prefab/uiDemo/interactive/Astar.lh", type: Laya.Loader.HIERARCHY },
          { url: "resources/prefab/uiDemo/interactive/Joystick.lh", type: Laya.Loader.HIERARCHY },
          { url: "resources/prefab/uiDemo/interactive/ShapeDetection.lh", type: Laya.Loader.HIERARCHY },
          { url: "resources/prefab/uiDemo/interactive/tiledMap.lh", type: Laya.Loader.HIERARCHY },
          { url: "resources/prefab/Bullet.lh", type: Laya.Loader.HIERARCHY },
          { url: "resources/prefab/closeBtn.lh", type: Laya.Loader.HIERARCHY },
          { url: "resources/prefab/ComboList.lh", type: Laya.Loader.HIERARCHY },
          { url: "resources/prefab/defaultButton.lh", type: Laya.Loader.HIERARCHY },
          { url: "resources/prefab/defaultLabel.lh", type: Laya.Loader.HIERARCHY },
          { url: "resources/prefab/DropBox.lh", type: Laya.Loader.HIERARCHY },
          { url: "resources/prefab/LoopImg.lh", type: Laya.Loader.HIERARCHY },
          { url: "resources/prefab/role.lh", type: Laya.Loader.HIERARCHY },
          { url: "resources/prefab/ani/cd.lh", type: Laya.Loader.HIERARCHY },
          { url: "resources/prefab/ani/refresh.lh", type: Laya.Loader.HIERARCHY },
          { url: "resources/3d/girl/girl.lh", type: Laya.Loader.HIERARCHY },
          { url: "resources/3d/LayaMonkey/LayaMonkey.lh", type: Laya.Loader.HIERARCHY },
          { url: "resources/3d/trail/Cube.lh", type: Laya.Loader.HIERARCHY },
          { url: "resources/prefab/ani/refresh.lh", type: Laya.Loader.HIERARCHY },
          { url: "resources/prefab/ani/cd.lh", type: Laya.Loader.HIERARCHY },
          { url: "resources/sound/destroy.wav", type: Laya.Loader.BUFFER },
          { url: "resources/sound/hit.wav", type: Laya.Loader.BUFFER },
          { url: "resources/files/layaAir.mp4", type: Laya.Loader.BUFFER }
        ];
        Laya.loader.load(resArr, null, Laya.Handler.create(this, this.onLoading, null, false)).then(() => {
          this.progress.value = 0.98;
          console.log("\u52A0\u8F7D\u7ED3\u675F", this.progress.value);
          Laya.timer.once(1e3, this, () => {
            Laya.Scene.open("Scenes/Index.ls");
          });
        });
        Laya.loader.on(Laya.Event.ERROR, this, this.onError);
      });
    }
    onError(err) {
      console.log("\u52A0\u8F7D\u5931\u8D25: " + err);
    }
    onLoading(progress) {
      if (progress > 0.92)
        this.progress.value = 0.95;
      else
        this.progress.value = progress;
      console.log("\u52A0\u8F7D\u8FDB\u5EA6: " + progress, this.progress.value);
    }
  }, "LoadingRT");
  LoadingRT = __decorate3([
    regClass3()
  ], LoadingRT);

  // E:/projects/laya3/demo_1_2d/src/prefab/Bullet.ts
  var __decorate4 = __$decorate("8485cffa-ef7f-45f7-88c0-f2e13463631b", "../src/prefab/Bullet.ts");
  var { regClass: regClass4, property: property4 } = Laya;
  var Bullet = /* @__PURE__ */ __name(class Bullet2 extends Laya.Script {
    constructor() {
      super();
    }
    onEnable() {
      let rig = this.owner.getComponent(Laya.RigidBody);
      rig.setVelocity({ x: 0, y: -10 });
    }
    onTriggerEnter(other, self, contact) {
      this.owner.removeSelf();
    }
    onUpdate() {
      if (this.owner.y < -10) {
        this.owner.removeSelf();
      }
    }
    onDisable() {
      Laya.Pool.recover("bullet", this.owner);
    }
  }, "Bullet");
  Bullet = __decorate4([
    regClass4(),
    __metadata("design:paramtypes", [])
  ], Bullet);

  // E:/projects/laya3/demo_1_2d/src/prefab/CloseBtn.ts
  var __decorate5 = __$decorate("0d00ae76-294e-46f3-af30-cee14c7f22ef", "../src/prefab/CloseBtn.ts");
  var { regClass: regClass5, property: property5 } = Laya;
  var CloseBtn = /* @__PURE__ */ __name(class CloseBtn2 extends Laya.Script {
    constructor() {
      super();
    }
    onEnable() {
      this.owner.on(Laya.Event.MOUSE_DOWN, this, this.onClick);
    }
    onClick(e) {
      Laya.stage.width = 1334;
      Laya.stage.height = 750;
      Laya.stage.scaleMode = Laya.Stage.SCALE_FIXED_WIDTH;
      Laya.Scene.open("Scenes/Index.ls");
    }
    onDisable() {
      this.owner.off(Laya.Event.MOUSE_DOWN, this);
    }
  }, "CloseBtn");
  CloseBtn = __decorate5([
    regClass5(),
    __metadata("design:paramtypes", [])
  ], CloseBtn);

  // E:/projects/laya3/demo_1_2d/src/scence/physicsDemo/PhysicsGameMain.ts
  var __decorate6 = __$decorate("e622606d-f0a2-4a7e-9173-cba901f1ed8c", "../src/scence/physicsDemo/PhysicsGameMain.ts");
  var _a;
  var _b;
  var { regClass: regClass6, property: property6 } = Laya;
  var PhysicsGameMain = /* @__PURE__ */ __name(class PhysicsGameMain2 extends Laya.Script {
    constructor() {
      super();
      this.createBoxInterval = 1e3;
      this._time = 0;
      this._started = false;
      this.updateStop = false;
    }
    onEnable() {
      let resArr = [
        "resources/UI/images/test/b1.png"
      ];
      Laya.loader.load(resArr).then((res) => {
        this._time = Date.now();
        this._gameBox = this.owner.getChildByName("gameBox");
        Laya.stage.on(Laya.Event.BLUR, this, () => {
          this.updateStop = true;
        });
        Laya.stage.on(Laya.Event.FOCUS, this, () => {
          this.updateStop = false;
        });
        Laya.stage.on(Laya.Event.MOUSE_DOWN, this, this.onStageClick);
      });
    }
    onStart() {
      let _ground = this.owner.getChildByName("ground").getComponent(Laya.BoxCollider);
      _ground.width = Laya.stage.width;
    }
    onUpdate() {
      if (this.updateStop)
        return;
      let now = Date.now();
      if (now - this._time > this.createBoxInterval && this._started) {
        this._time = now;
        this.createBox();
      }
    }
    createBox() {
      let box = Laya.Pool.getItemByCreateFun("dropBox", this.dropBox.create, this.dropBox);
      box.pos(Math.random() * (Laya.stage.width - 100), -100);
      this._gameBox.addChild(box);
    }
    onStageClick(e) {
      e.stopPropagation();
      let flyer = Laya.Pool.getItemByCreateFun("bullet", this.bullet.create, this.bullet);
      flyer.pos(Laya.stage.mouseX, Laya.stage.mouseY);
      this._gameBox.addChild(flyer);
    }
    startGame() {
      if (!this._started) {
        this._started = true;
        this.enabled = true;
      }
    }
    stopGame() {
      this._started = false;
      this.enabled = false;
      this.createBoxInterval = 1e3;
      this._gameBox.removeChildren();
    }
  }, "PhysicsGameMain");
  __decorate6([
    property6(),
    __metadata("design:type", typeof (_a = typeof Laya !== "undefined" && Laya.Prefab) === "function" ? _a : Object)
  ], PhysicsGameMain.prototype, "dropBox", void 0);
  __decorate6([
    property6(),
    __metadata("design:type", typeof (_b = typeof Laya !== "undefined" && Laya.Prefab) === "function" ? _b : Object)
  ], PhysicsGameMain.prototype, "bullet", void 0);
  PhysicsGameMain = __decorate6([
    regClass6(),
    __metadata("design:paramtypes", [])
  ], PhysicsGameMain);
  var PhysicsGameMain_default = PhysicsGameMain;

  // E:/projects/laya3/demo_1_2d/src/scence/physicsDemo/PhysicsGameMainRT.generated.ts
  var PhysicsGameMainRTBase = class extends Laya.Scene {
  };
  __name(PhysicsGameMainRTBase, "PhysicsGameMainRTBase");

  // E:/projects/laya3/demo_1_2d/src/scence/physicsDemo/PhysicsGameMainRT.ts
  var __decorate7 = __$decorate("63952401-a6e2-4e05-8565-09c12f512913", "../src/scence/physicsDemo/PhysicsGameMainRT.ts");
  var PhysicsGameMainRT_1;
  var { regClass: regClass7, property: property7 } = Laya;
  var PhysicsGameMainRT = PhysicsGameMainRT_1 = /* @__PURE__ */ __name(class PhysicsGameMainRT2 extends PhysicsGameMainRTBase {
    constructor() {
      super();
      PhysicsGameMainRT_1.instance = this;
    }
    onEnable() {
      this._control = this.getComponent(PhysicsGameMain_default);
      this.tipLbll.on(Laya.Event.CLICK, this, this.onTipClick);
    }
    onTipClick(e) {
      this.tipLbll.visible = false;
      this._score = 0;
      this.scoreLbl.text = "\u5206\u6570\uFF1A";
      this._control.startGame();
    }
    addScore(value = 1) {
      this._score += value;
      this.scoreLbl.text = "\u5206\u6570\uFF1A" + this._score;
      if (this._control.createBoxInterval > 600 && this._score % 20 == 0)
        this._control.createBoxInterval -= 20;
    }
    stopGame() {
      this.tipLbll.visible = true;
      this.tipLbll.text = "\u6E38\u620F\u7ED3\u675F\u4E86\uFF0C\u70B9\u51FB\u5C4F\u5E55\u91CD\u65B0\u5F00\u59CB";
      this._control.stopGame();
    }
  }, "PhysicsGameMainRT");
  PhysicsGameMainRT = PhysicsGameMainRT_1 = __decorate7([
    regClass7(),
    __metadata("design:paramtypes", [])
  ], PhysicsGameMainRT);
  var PhysicsGameMainRT_default = PhysicsGameMainRT;

  // E:/projects/laya3/demo_1_2d/src/prefab/DropBox.ts
  var __decorate8 = __$decorate("dcbdb734-214b-4808-9e50-0a6a4eb56809", "../src/prefab/DropBox.ts");
  var { regClass: regClass8, property: property8 } = Laya;
  var DropBox = /* @__PURE__ */ __name(class DropBox2 extends Laya.Script {
    constructor() {
      super();
      this.level = 1;
    }
    onEnable() {
      this._rig = this.owner.getComponent(Laya.RigidBody);
      this.level = Math.round(Math.random() * 5) + 1;
      this._text = this.owner.getChildByName("levelTxt");
      this._text.text = this.level + "";
    }
    onUpdate() {
      this.owner.rotation++;
    }
    onTriggerEnter(other, self, contact) {
      var owner = this.owner;
      if (other.label === "buttle") {
        if (this.level > 1) {
          this.level--;
          this._text.changeText(this.level + "");
          owner.getComponent(Laya.RigidBody).setVelocity({ x: 0, y: -10 });
          Laya.SoundManager.playSound("resources/sound/hit.wav");
        } else {
          if (owner.parent) {
            let effect = Laya.Pool.getItemByCreateFun("effect", this.createEffect, this);
            effect.pos(owner.x, owner.y);
            owner.parent.addChild(effect);
            effect.play(0, true);
            owner.removeSelf();
            Laya.SoundManager.playSound("resources/sound/destroy.wav");
          }
        }
        PhysicsGameMainRT_default.instance.addScore(1);
      } else if (other.label === "ground") {
        owner.removeSelf();
        PhysicsGameMainRT_default.instance.stopGame();
      }
    }
    createEffect() {
      let ani = new Laya.Animation();
      ani.loadAnimation("resources/ani/TestAni.ani");
      ani.on(Laya.Event.COMPLETE, null, recover);
      function recover() {
        ani.removeSelf();
        Laya.Pool.recover("effect", ani);
      }
      __name(recover, "recover");
      return ani;
    }
    onDisable() {
      Laya.Pool.recover("dropBox", this.owner);
    }
  }, "DropBox");
  __decorate8([
    property8(),
    __metadata("design:type", Number)
  ], DropBox.prototype, "level", void 0);
  DropBox = __decorate8([
    regClass8(),
    __metadata("design:paramtypes", [])
  ], DropBox);

  // E:/projects/laya3/demo_1_2d/src/prefab/Role.ts
  var __decorate9 = __$decorate("0e49c2ec-1e7b-4998-bed3-d333d3dd9d69", "../src/prefab/Role.ts");
  var _a2;
  var { regClass: regClass9, property: property9 } = Laya;
  var Event = Laya.Event;
  var Keyboard = Laya.Keyboard;
  var KeyBoardManager = Laya.InputManager;
  var Role = /* @__PURE__ */ __name(class Role2 extends Laya.Script {
    constructor() {
      super();
    }
    onEnable() {
      this._animator = this.role1.getComponent(Laya.Animator2D);
      this._owner = this.owner;
      this.bg = this.owner.parent;
      Laya.stage.on(Event.KEY_UP, this, this.onKeyUp);
    }
    playRoleAni(name, type = "stand") {
      if (type == "run") {
        this._animator.play("run" + name.substring(0, 1).toUpperCase() + name.substring(1, name.length));
      } else {
        this._animator.play(name);
      }
    }
    onUpdate() {
      this.lastRoleDirection = this.roleDirection;
      if (KeyBoardManager.hasKeyDown(Keyboard.UP) || KeyBoardManager.hasKeyDown(Keyboard.W)) {
        this.roleDirection = "up";
        this._owner.y -= 2;
        this._owner.y < 80 && (this._owner.y = 80);
      } else if (KeyBoardManager.hasKeyDown(Keyboard.DOWN) || KeyBoardManager.hasKeyDown(Keyboard.S)) {
        this.roleDirection = "down";
        this._owner.y += 2;
        this._owner.y > this.bg.height - 130 && (this._owner.y = this.bg.height - 130);
      } else if (KeyBoardManager.hasKeyDown(Keyboard.LEFT) || KeyBoardManager.hasKeyDown(Keyboard.A)) {
        this.roleDirection = "left";
        this._owner.x -= 2;
        this._owner.x < 30 && (this._owner.x = 30);
      } else if (KeyBoardManager.hasKeyDown(Keyboard.RIGHT) || KeyBoardManager.hasKeyDown(Keyboard.D)) {
        this.roleDirection = "right";
        this._owner.x += 2;
        this._owner.x > this.bg.width - 130 && (this._owner.x = this.bg.width - 130);
      }
      this.lastRoleDirection !== this.roleDirection && this.playRoleAni(this.roleDirection, "run");
    }
    onKeyUp(e) {
      this.playRoleAni(this.roleDirection);
      this.roleDirection = "";
    }
    onDisable() {
    }
  }, "Role");
  __decorate9([
    property9(),
    __metadata("design:type", typeof (_a2 = typeof Laya !== "undefined" && Laya.Sprite) === "function" ? _a2 : Object)
  ], Role.prototype, "role1", void 0);
  Role = __decorate9([
    regClass9(),
    __metadata("design:paramtypes", [])
  ], Role);

  // E:/projects/laya3/demo_1_2d/src/scence/d3Demo/D3Main.ts
  var __decorate10 = __$decorate("41ed26b5-2273-4bb9-aa52-9b34b141c8c5", "../src/scence/d3Demo/D3Main.ts");
  var { regClass: regClass10, property: property10 } = Laya;
  var KeyBoardManager2 = Laya.InputManager;
  var Keyboard2 = Laya.Keyboard;
  var Vector3 = Laya.Vector3;
  var D3Main = /* @__PURE__ */ __name(class D3Main2 extends Laya.Script {
    constructor() {
      super(...arguments);
      this.scene3D = new Laya.Scene3D();
      this.turnLeft = true;
      this._rotation = new Vector3(0, 0, 0);
      this.rotationW = new Vector3(0, 180, 0);
      this.rotationS = new Vector3(0, 0, 0);
      this.rotationA = new Vector3(0, -90, 0);
      this.rotationD = new Vector3(0, 90, 0);
      this.sp3Role = new Laya.Sprite3D();
    }
    onEnable() {
      this.spDude = this.owner.getChildByName("spDude");
      this.spMonkey = this.owner.getChildByName("spMonkey");
      this.spTrail = this.owner.getChildByName("spTrail");
      this.setStage();
      this.sceneInit();
      this._3Dto2D("resources/3d/girl/girl.lh", this.spDude, 1, true);
      this.spDude.pos(30, 768);
      this._3Dto2D("resources/3d/LayaMonkey/LayaMonkey.lh", this.spMonkey, 2);
      this.spMonkey.pos(150, 110);
      this._3Dto2D("resources/3d/trail/Cube.lh", this.spTrail, 5);
      this.spTrail.pos(100, 500);
    }
    sceneInit() {
      Laya.stage.addChild(this.scene3D);
      let directionLight = new Laya.DirectionLight();
      this.scene3D.addChild(directionLight);
      directionLight.intensity = 0.9;
    }
    setStage() {
      Laya.stage.width = 640;
      Laya.stage.height = 1136;
      if (Laya.Browser.onPC) {
        Laya.stage.useRetinalCanvas = false;
        Laya.stage.scaleMode = Laya.Stage.SCALE_SHOWALL;
        Laya.stage.alignH = Laya.Stage.ALIGN_CENTER;
        Laya.stage.alignV = Laya.Stage.ALIGN_MIDDLE;
      } else {
        Laya.stage.screenMode = Laya.Stage.SCREEN_VERTICAL;
        Laya.stage.scaleMode = Laya.Stage.SCALE_FIXED_HEIGHT;
      }
    }
    _3Dto2D(lh, sp, layer, isRole = false) {
      Laya.loader.load(lh).then((res) => {
        let sp3 = res.create();
        this.scene3D.addChild(sp3);
        let _camera = new Laya.Camera(0, 0.1, 1e3);
        this.scene3D.addChild(_camera);
        _camera.transform.rotate(new Vector3(-45, 0, 0), false, false);
        _camera.clearColor = new Laya.Color(0, 0, 0, 0);
        _camera.orthographic = true;
        _camera.orthographicVerticalSize = 10;
        _camera.removeAllLayers();
        _camera.addLayer(layer);
        if (isRole)
          sp3.getChildAt(0).getChildAt(1).layer = layer;
        else
          sp3.getChildAt(0).getChildAt(0).layer = layer;
        let _tempPos = new Vector3(0, 0, 0);
        _camera.convertScreenCoordToOrthographicCoord(new Vector3(220, 900, 0), _tempPos);
        sp3.transform.position = _tempPos;
        if (isRole)
          sp3.transform.localScale = new Vector3(3, 3, 3);
        else
          sp3.transform.localScale = new Vector3(1, 1, 1);
        _camera.renderTarget = new Laya.RenderTexture(256, 256, Laya.RenderTargetFormat.R8G8B8A8, Laya.RenderTargetFormat.DEPTHSTENCIL_24_8);
        sp.texture = new Laya.Texture(_camera.renderTarget);
        isRole && (this.sp3Role = sp3);
        if (isRole) {
          this._animator = sp3.getChildAt(0).getComponent(Laya.Animator);
          Laya.stage.on(Laya.Event.KEY_UP, this, () => {
            this.switchAni("Idle");
          });
        }
      });
    }
    onUpdate() {
      if (this.spTrail.x < 20 && this.turnLeft)
        this.turnLeft = false;
      else if (this.spTrail.x > Laya.stage.width - 200 && !this.turnLeft)
        this.turnLeft = true;
      if (this.turnLeft)
        this.spTrail.x -= 1;
      else
        this.spTrail.x += 1;
      if (KeyBoardManager2.hasKeyDown(Keyboard2.W)) {
        this.spDude.y -= 1;
        this.rotateRole(this.rotationW);
      } else if (KeyBoardManager2.hasKeyDown(Keyboard2.S)) {
        this.spDude.y += 1;
        this.rotateRole(this.rotationS);
      } else if (KeyBoardManager2.hasKeyDown(Keyboard2.A)) {
        this.spDude.x -= 1;
        this.rotateRole(this.rotationA);
      } else if (KeyBoardManager2.hasKeyDown(Keyboard2.D)) {
        this.spDude.x += 1;
        this.rotateRole(this.rotationD);
      }
    }
    rotateRole(r) {
      this.switchAni("Run");
      if (r === this._rotation)
        return;
      this.sp3Role.transform.rotationEuler = r;
      this._rotation = r;
    }
    switchAni(aniType) {
      if (aniType == "Run") {
        if (aniType !== this.lastRunAniName) {
          this._animator.play(aniType);
        }
      } else {
        this._animator.play(aniType);
      }
      this.lastRunAniName = aniType;
    }
    onDisable() {
      Laya.stage.useRetinalCanvas = true;
      Laya.stage.screenMode = Laya.Stage.SCREEN_HORIZONTAL;
      Laya.stage.width = 1334;
      Laya.stage.height = 750;
      Laya.stage.scaleMode = Laya.Stage.SCALE_FIXED_WIDTH;
      this.scene3D.destroy();
    }
  }, "D3Main");
  D3Main = __decorate10([
    regClass10()
  ], D3Main);

  // E:/projects/laya3/demo_1_2d/src/scence/uiDemo/DialogRT.generated.ts
  var DialogRTBase = class extends Laya.Scene {
  };
  __name(DialogRTBase, "DialogRTBase");

  // E:/projects/laya3/demo_1_2d/src/scence/uiDemo/DialogRT.ts
  var __decorate11 = __$decorate("602c94e7-a923-481c-8c58-fe4b599761c0", "../src/scence/uiDemo/DialogRT.ts");
  var { regClass: regClass11, property: property11 } = Laya;
  var DialogRT = /* @__PURE__ */ __name(class DialogRT2 extends DialogRTBase {
    constructor() {
      super();
    }
    onAwake() {
      this.dialogTitle.text = "";
      this.dialogText.text = "";
      this.closeBtn.on(Laya.Event.CLICK, this, () => {
        this.close();
      });
    }
    onOpened(param = null) {
      if (param) {
        this.dialogTitle.text = param.title;
        this.dialogText.text = param.text;
      }
    }
    onDisable() {
    }
  }, "DialogRT");
  DialogRT = __decorate11([
    regClass11(),
    __metadata("design:paramtypes", [])
  ], DialogRT);

  // E:/projects/laya3/demo_1_2d/src/scence/uiDemo/MsgRT_gen.ts
  var MsgRTBase = class extends Laya.Scene {
  };
  __name(MsgRTBase, "MsgRTBase");

  // E:/projects/laya3/demo_1_2d/src/scence/uiDemo/MsgRT.ts
  var __decorate12 = __$decorate("f6418ece-96db-48e5-9202-637497d56d7d", "../src/scence/uiDemo/MsgRT.ts");
  var { regClass: regClass12, property: property12 } = Laya;
  var MsgRT = /* @__PURE__ */ __name(class MsgRT2 extends MsgRTBase {
    constructor() {
      super();
    }
    onOpened(param) {
      if (param) {
        this.msgLab.x = param.point && param.point.x ? param.point.x : Laya.stage.mouseX - 50;
        this.msgLab.y = param.point && param.point.y ? param.point.y : Laya.stage.mouseY - 80;
        this.msgLab.changeText(param.text);
        Laya.Tween.to(this.msgLab, { y: this.msgLab.y - 100, alpha: 0 }, 1e3, Laya.Ease.linearNone);
      }
    }
  }, "MsgRT");
  MsgRT = __decorate12([
    regClass12(),
    __metadata("design:paramtypes", [])
  ], MsgRT);

  // E:/projects/laya3/demo_1_2d/src/scence/uiDemo/page/IframeElementRT.ts
  var __decorate13 = __$decorate("66d331a0-91d0-4d68-a98c-65b2195e758d", "../src/scence/uiDemo/page/IframeElementRT.ts");
  var IframeElementRT_1;
  var _a3;
  var _b2;
  var _c;
  var { regClass: regClass13, property: property13 } = Laya;
  var Browser = Laya.Browser;
  var Render = Laya.Render;
  var SpriteUtils = Laya.SpriteUtils;
  var IframeElementRT = IframeElementRT_1 = /* @__PURE__ */ __name(class IframeElementRT2 extends Laya.Script {
    constructor() {
      super();
      IframeElementRT_1.instance = this;
    }
    onEnable() {
      this.videoBtn.on(Laya.Event.MOUSE_DOWN, this, () => {
        this.createElementVideo();
      });
    }
    createElementVideo() {
      Browser.window.IframeElementRT = this;
      this.createScript();
      this.createDiv();
      this.createIframe("resources/files/video.html?url=layaAir.mp4");
      this.setDOMElementInArea();
      Laya.stage.on(Laya.Event.RESIZE, this, this.setDOMElementInArea);
    }
    setDOMElementInArea() {
      if (this.iframeElement != null && this.divElement != null) {
        SpriteUtils.fitDOMElementInArea(this.divElement, this.closeBox, 0, 0, this.closeBox.width, this.closeBox.height);
        SpriteUtils.fitDOMElementInArea(this.iframeElement, this.iframeBox, 0, 0, this.iframeBox.width, this.iframeBox.height);
      }
    }
    createScript() {
      this.scriptElement = Browser.document.createElement("script");
      Browser.document.body.appendChild(this.scriptElement);
      this.scriptElement.innerHTML = "function closeVideo(){IframeElementRT.closeVideo() }";
    }
    createIframe(url) {
      this.iframeElement = Browser.createElement("iframe");
      Browser.document.body.appendChild(this.iframeElement);
      this.iframeElement.style.zIndex = Render.canvas.style.zIndex + 998;
      this.iframeElement.src = url;
      this.iframeElement.style.margin = "0";
      this.iframeElement.style.scrolling = "no";
      this.iframeElement.style.frameborder = "0";
      this.iframeElement.style.padding = "0";
      this.iframeElement.style.left = "0";
      this.iframeElement.style.top = "0px";
      this.iframeElement.style.position = "absolute";
    }
    createDiv() {
      this.divElement = Laya.Browser.createElement("div");
      Laya.Browser.document.body.appendChild(this.divElement);
      this.divElement.innerHTML = "<img src='resources/files/x.png' width='60px' height='60px' onclick='closeVideo()'/>";
      this.divElement.style.zIndex = Render.canvas.style.zIndex + 999;
    }
    closeVideo() {
      Laya.Browser.document.body.removeChild(this.scriptElement);
      Laya.Browser.document.body.removeChild(this.iframeElement);
      Laya.Browser.document.body.removeChild(this.divElement);
      this.scriptElement = this.iframeElement = this.divElement = null;
      Laya.stage.off(Laya.Event.RESIZE, this, this.setDOMElementInArea);
    }
  }, "IframeElementRT");
  __decorate13([
    property13(),
    __metadata("design:type", typeof (_a3 = typeof Laya !== "undefined" && Laya.Button) === "function" ? _a3 : Object)
  ], IframeElementRT.prototype, "videoBtn", void 0);
  __decorate13([
    property13(),
    __metadata("design:type", typeof (_b2 = typeof Laya !== "undefined" && Laya.Box) === "function" ? _b2 : Object)
  ], IframeElementRT.prototype, "closeBox", void 0);
  __decorate13([
    property13(),
    __metadata("design:type", typeof (_c = typeof Laya !== "undefined" && Laya.Box) === "function" ? _c : Object)
  ], IframeElementRT.prototype, "iframeBox", void 0);
  IframeElementRT = IframeElementRT_1 = __decorate13([
    regClass13(),
    __metadata("design:paramtypes", [])
  ], IframeElementRT);
  var IframeElementRT_default = IframeElementRT;

  // E:/projects/laya3/demo_1_2d/src/scence/uiDemo/UiMainRT_gen.ts
  var UiMainRTBase = class extends Laya.Scene {
  };
  __name(UiMainRTBase, "UiMainRTBase");

  // E:/projects/laya3/demo_1_2d/src/scence/uiDemo/UiMainRT.ts
  var __decorate14 = __$decorate("81b00a18-b16d-4395-8beb-e36956870010", "../src/scence/uiDemo/UiMainRT.ts");
  var { regClass: regClass14, property: property14 } = Laya;
  var UiMainRT = /* @__PURE__ */ __name(class UiMainRT2 extends UiMainRTBase {
    constructor() {
      super();
    }
    onEnable() {
      Laya.PhysicsDebugDraw.I && Laya.PhysicsDebugDraw.I.visible && (Laya.PhysicsDebugDraw.I.visible = false);
      this.tabBindViewStack();
      this.topTab.selectedIndex = 0;
      this.item0Tab.selectedIndex = 0;
    }
    tabBindViewStack() {
      this.topTab.selectHandler = new Laya.Handler(this, (index) => {
        this.tabPage.selectedIndex = index;
        if (index == 1)
          this.item1Tab.selectedIndex = 0;
        if (index == 2)
          this.item2Tab.selectedIndex = 0;
        if (index == 3)
          this.item3Tab.selectedIndex = 0;
        if (index == 4)
          this.item4Tab.selectedIndex = 0;
        Laya.PhysicsDebugDraw.I && Laya.PhysicsDebugDraw.I.visible && (Laya.PhysicsDebugDraw.I.visible = false);
        !!IframeElementRT_default.instance.iframeElement && IframeElementRT_default.instance.closeVideo();
        index == 2 && this.item2Page.selectedIndex == 1 && !IframeElementRT_default.instance.iframeElement && IframeElementRT_default.instance.createElementVideo();
      });
      this.item0Tab.selectHandler = new Laya.Handler(this, (index) => {
        this.item0Page.selectedIndex = index;
      });
      this.item1Tab.selectHandler = new Laya.Handler(this, (index) => {
        this.item1Page.selectedIndex = index;
        if (index !== 4 && Laya.PhysicsDebugDraw.I && Laya.PhysicsDebugDraw.I.visible)
          Laya.PhysicsDebugDraw.I.visible = false;
        else if (index == 4 && Laya.PhysicsDebugDraw.I && !Laya.PhysicsDebugDraw.I.visible)
          Laya.PhysicsDebugDraw.I.visible = true;
      });
      this.item2Tab.selectHandler = new Laya.Handler(this, (index) => {
        this.item2Page.selectedIndex = index;
        switch (index) {
          case 1:
            !IframeElementRT_default.instance.iframeElement && IframeElementRT_default.instance.createElementVideo();
            break;
          case 2:
            Laya.Scene.open("Scenes/uiDemo/page/OpenMainScene.ls", false);
            break;
          case 3:
            Laya.Scene.open("Scenes/uiDemo/page/OpenScene.ls", false);
            break;
          case 4:
            Laya.Scene.open("Scenes/uiDemo/page/Dialog.ls", false, { "title": "\u5F39\u7A97\u7684\u6807\u9898", "text": "\u5F39\u7A97\u7684\u5177\u4F53\u6587\u672C\u2026\u2026" });
            break;
        }
        index !== 1 && !!IframeElementRT_default.instance.iframeElement && IframeElementRT_default.instance.closeVideo();
      });
      this.item3Tab.selectHandler = new Laya.Handler(this, (index) => {
        this.item3Page.selectedIndex = index;
      });
      this.item4Tab.selectHandler = new Laya.Handler(this, (index) => {
        this.item4Page.selectedIndex = index;
      });
    }
    onDisable() {
      console.log("disabled");
    }
  }, "UiMainRT");
  UiMainRT = __decorate14([
    regClass14(),
    __metadata("design:paramtypes", [])
  ], UiMainRT);

  // E:/projects/laya3/demo_1_2d/src/script/mouse/BgImg.ts
  var __decorate15 = __$decorate("73bd7e32-83f6-448c-82ad-d0407e39c883", "../src/script/mouse/BgImg.ts");
  var { regClass: regClass15, property: property15 } = Laya;
  var bgImg = /* @__PURE__ */ __name(class bgImg2 extends Laya.Script {
    constructor() {
      super(...arguments);
      this.maxX = 0;
      this.minX = -90;
      this.maxY = 0;
      this.minY = -580;
      this.scaleSize = 0.1;
      this.lastDistance = 0;
    }
    onEnable() {
      this._owner = this.owner;
      this._owner.on(Laya.Event.MOUSE_DOWN, this, this.onMouseDown);
      this.onMouseWheel();
    }
    onMouseWheel() {
      this.owner.on(Laya.Event.MOUSE_WHEEL, this, (e) => {
        let point = this._owner.globalToLocal(new Laya.Point(Laya.stage.mouseX, Laya.stage.mouseY));
        if (e.delta > 0) {
          this._owner.scaleX += this.scaleSize;
          this._owner.scaleY += this.scaleSize;
        }
        if (e.delta < 0) {
          this._owner.scaleX -= this.scaleSize;
          this._owner.scaleY -= this.scaleSize;
          this._owner.scaleX < 1 && (this._owner.scaleX = 1);
          this._owner.scaleY < 1 && (this._owner.scaleY = 1);
        }
        let point2 = this._owner.globalToLocal(new Laya.Point(Laya.stage.mouseX, Laya.stage.mouseY));
        let _offsetX = (point2.x - point.x) * this._owner.scaleX;
        let _offsetY = (point2.y - point.y) * this._owner.scaleY;
        _offsetX += this._owner.x;
        _offsetY += this._owner.y;
        this.updateLimit();
        if (_offsetX > this.maxX)
          this._owner.x = this.maxX;
        else if (_offsetX < this.minX)
          this._owner.x = this.minX;
        else
          this._owner.x = _offsetX;
        if (_offsetY > this.maxY)
          this._owner.y = this.maxY;
        else if (_offsetY < this.minY)
          this._owner.y = this.minY;
        else
          this._owner.y = _offsetY;
      });
    }
    onStart() {
      this.updateLimit();
    }
    updateLimit() {
      let _parent = this.owner.parent.parent;
      this.minX = _parent.width - this._owner.width * this._owner.scaleY;
      this.minY = _parent.height - this._owner.height * this._owner.scaleY;
    }
    onMouseDown(e) {
      e.stopPropagation();
      if (e.touches && e.touches.length > 1) {
        let lastPivot = this.setPivot(e);
        if (!lastPivot.x || !lastPivot.y) {
          console.log("(((((((((((((((((((((((", this.lastPivot, JSON.parse(JSON.stringify(e.touches)));
        } else {
          this.lastDistance = this.getDistance(e);
          this.lastPivot = lastPivot;
          this._owner.on(Laya.Event.MOUSE_MOVE, this, this.mouseMove);
        }
      } else if (Laya.Browser.onPC)
        this._owner.startDrag();
    }
    onMouseUp(e) {
      this._owner.off(Laya.Event.MOUSE_MOVE, this, this.mouseMove);
    }
    getDistance(e) {
      var distance = 0;
      if (e.touches && e.touches.length > 1) {
        let dx = e.touches[0].pos.x - e.touches[1].pos.y;
        let dy = e.touches[0].pos.x - e.touches[1].pos.y;
        distance = Math.sqrt(dx * dx + dy * dy);
      }
      return distance;
    }
    mouseMove(e) {
      let distance = this.getDistance(e);
      this._owner.scaleX += (distance - this.lastDistance) * (this.scaleSize / 10);
      this._owner.scaleY += (distance - this.lastDistance) * (this.scaleSize / 10);
      this._owner.scaleX < 1 && (this._owner.scaleX = 1);
      this._owner.scaleY < 1 && (this._owner.scaleY = 1);
      this._owner.scaleX > 5 && (this._owner.scaleX = 5);
      this._owner.scaleY > 5 && (this._owner.scaleY = 5);
      let nowPivot = this.setPivot(e);
      if (!nowPivot.x || !nowPivot.y) {
        console.log("$$$$$$$$$$$", nowPivot, JSON.parse(JSON.stringify(e.touches)));
      } else {
        this.updateLimit();
        let _offsetX = (nowPivot.x - this.lastPivot.x) * this._owner.scaleX;
        let _offsetY = (nowPivot.y - this.lastPivot.y) * this._owner.scaleY;
        _offsetX += this._owner.x;
        _offsetY += this._owner.y;
        if (_offsetX > this.maxX)
          this._owner.x = this.maxX;
        else if (_offsetX < this.minX)
          this._owner.x = this.minX;
        else
          this._owner.x = _offsetX;
        if (_offsetY > this.maxY)
          this._owner.y = this.maxY;
        else if (_offsetY < this.minY)
          this._owner.y = this.minY;
        else
          this._owner.y = _offsetY;
        this.lastDistance = distance;
      }
    }
    setPivot(e) {
      let Point0 = this._owner.globalToLocal(new Laya.Point(e.touches[0].pos.x, e.touches[0].pos.y));
      let Point1 = this._owner.globalToLocal(new Laya.Point(e.touches[1].pos.x, e.touches[1].pos.y));
      return new Laya.Point((Point0.x + Point1.x) / 2, (Point0.y + Point1.y) / 2);
    }
    onUpdate() {
      this._owner.x > this.maxX && (this._owner.x = this.maxX);
      this._owner.x < this.minX && (this._owner.x = this.minX);
      this._owner.y > this.maxY && (this._owner.y = this.maxY);
      this._owner.y < this.minY && (this._owner.y = this.minY);
    }
    addTestPoint(point, color = "#ff0000", size = 2) {
      let spTest = new Laya.Sprite();
      spTest.graphics.drawCircle(0, 0, size, color);
      this.owner.addChild(spTest);
      spTest.pos(point.x, point.y);
    }
  }, "bgImg");
  bgImg = __decorate15([
    regClass15()
  ], bgImg);

  // E:/projects/laya3/demo_1_2d/src/scence/uiDemo/interactive/ShapeDetection.ts
  var __decorate16 = __$decorate("9da23b19-add9-433b-b01f-16576e269913", "../src/scence/uiDemo/interactive/ShapeDetection.ts");
  var { regClass: regClass16, property: property16 } = Laya;
  var Rectangle = Laya.Rectangle;
  var ShapeDetection = /* @__PURE__ */ __name(class ShapeDetection2 extends Laya.Script {
    constructor() {
      super(...arguments);
      this._rect1 = Rectangle.TEMP;
      this._rect2 = Rectangle.TEMP;
    }
    rectDetection(self, target) {
      return !(self.x > target.x + target.width || self.x + self.width < target.x || self.y > target.y + target.height || self.y + self.height < target.y);
    }
    collisionWith(self, targets, type) {
      let collisionNodes = [];
      if (type == 0) {
        var p1 = Laya.Point.create(), p1PivotX = self.width / 2, p1PivotY = self.height / 2, p2 = Laya.Point.create(), p1Radius, p2Radius;
        p1.x = self.x + p1PivotX;
        p1.y = self.y + p1PivotY;
        p1Radius = this.rectToRadius(self.width, self.height);
      } else if (type == 2) {
        var targetVertices, selfVertices;
        selfVertices = this.arrayToPoint(self);
      }
      for (let i = 0; i < targets.length; i++) {
        if (self == targets[i])
          continue;
        switch (type) {
          case 0:
            p2.x = targets[i].x + targets[i].width / 2;
            p2.y = targets[i].y + targets[i].height / 2;
            p2Radius = this.rectToRadius(targets[i].width, targets[i].height);
            this.circleDetection(p1, p2, p1Radius + p2Radius) && collisionNodes.push(targets[i]);
            break;
          case 1:
            this.rectDetection(self, targets[i]) && collisionNodes.push(targets[i]);
            break;
          case 2:
            if (self.name === "c1") {
              targetVertices = this.arrayToPoint(targets[i]);
              this.circleAndPolygonDetection(self, targetVertices, targets[i]) && collisionNodes.push(targets[i]);
            } else if (targets[i].name === "c1") {
              this.circleAndPolygonDetection(targets[i], selfVertices, self) && collisionNodes.push(targets[i]);
            } else {
              targetVertices = this.arrayToPoint(targets[i]);
              this.polygonDetection(selfVertices, targetVertices, self, targets[i]) && collisionNodes.push(targets[i]);
            }
            break;
        }
      }
      return collisionNodes;
    }
    circleAndPolygonDetection(circel, polygonVertices, polygonNode) {
      let sides = this.getSides(polygonVertices), axises = [], circelCenter = Laya.Point.create(), nearestPoint = Laya.Point.create(), radius = circel.hitArea._hit._cmds[0].radius, targetList = this.getNodeCoord(polygonVertices, polygonNode);
      circelCenter.x = circel.x + circel.hitArea._hit._cmds[0].x;
      circelCenter.y = circel.y + circel.hitArea._hit._cmds[0].y;
      nearestPoint = this.getNearestPoint(circelCenter, targetList);
      axises.push(new Laya.Point(nearestPoint.x - circelCenter.x, nearestPoint.y - circelCenter.y));
      for (let i = 0, len = sides.length; i < len; i++)
        axises.push(this.perpendicular(sides[i]));
      for (let i = 0, len = axises.length; i < len; i++) {
        let axis = axises[i], s = this.getCircleProjection(circelCenter, axis, radius), t = this.getPolygonProjection(targetList, axis);
        if (!this.isOverlap(s, t))
          return false;
      }
      return true;
    }
    getNearestPoint(circelCenter, list) {
      let nearestPoint = list[0], minDistance = this.getDistance(circelCenter, nearestPoint), nowPoint, nowDistance;
      for (let i = 1; i < list.length; i++) {
        nowPoint = list[i];
        nowDistance = this.getDistance(circelCenter, nowPoint);
        if (nowDistance < minDistance) {
          minDistance = nowDistance;
          nearestPoint = nowPoint;
        }
      }
      return nearestPoint;
    }
    polygonDetection(selfVertices, targetVertices, selfNode, targetNode) {
      let sides = this.getSides(selfVertices).concat(this.getSides(targetVertices)), axises = [], selfList = this.getNodeCoord(selfVertices, selfNode), targetList = this.getNodeCoord(targetVertices, targetNode);
      for (let i = 0, len = sides.length; i < len; i++)
        axises.push(this.perpendicular(sides[i]));
      for (let i = 0, len = axises.length; i < len; i++) {
        let axis = axises[i], s = this.getPolygonProjection(selfList, axis), t = this.getPolygonProjection(targetList, axis);
        if (!this.isOverlap(s, t))
          return false;
      }
      return true;
    }
    isOverlap(self, target) {
      let min, max;
      min = self.min < target.min ? self.min : target.min;
      max = self.max > target.max ? self.max : target.max;
      return self.max - self.min + (target.max - target.min) >= max - min;
    }
    getNodeCoord(vertices, node) {
      let _arr = [];
      for (let i = 0; i < vertices.length; i++) {
        let _point = Laya.Point.create();
        _point.x = vertices[i].x + node.x + node.hitArea._hit._cmds[0].x;
        _point.y = vertices[i].y + node.y + node.hitArea._hit._cmds[0].y;
        _arr.push(_point);
      }
      return _arr;
    }
    getPolygonProjection(list, axis) {
      let min = null, max = null;
      for (let i = 0; i < list.length; i++) {
        let projection = this.dotProduct(list[i], axis) / this.getLength(axis);
        (min === null || projection < min) && (min = projection);
        (max === null || projection > max) && (max = projection);
      }
      return { min, max };
    }
    getCircleProjection(circelCenter, axis, circleRadius) {
      let projection = this.dotProduct(circelCenter, axis) / this.getLength(axis);
      return { min: projection - circleRadius, max: projection + circleRadius };
    }
    rectToRadius(width, height) {
      let radius;
      if (width == height) {
        radius = width / 2;
      } else {
        radius = Math.sqrt(width * width + height * height) / 2;
      }
      return radius;
    }
    circleDetection(p1, p2, distance) {
      return Math.sqrt(Math.pow(p1.x - p2.x, 2) + Math.pow(p1.y - p2.y, 2)) <= distance;
    }
    circlesCollision(p1, p2, p1Radius, p2Radius) {
      let axis = this.subtract(p1, p2), s = this.getCircleProjection(p1, axis, p1Radius), t = this.getCircleProjection(p2, axis, p2Radius);
      if (this.isOverlap(s, t))
        return true;
      return false;
    }
    arrayToPoint(sp) {
      let points = [], hitPoints = [];
      hitPoints = sp.hitArea._hit._cmds[0].points;
      if (hitPoints && hitPoints.length > 3) {
        for (let i = 0; i < hitPoints.length / 2; i++) {
          points[i] = Laya.Point.create();
          points[i].x = hitPoints[i * 2];
          points[i].y = hitPoints[i * 2 + 1];
        }
      }
      return points;
    }
    perpendicular(p) {
      let _temp = Laya.Point.create();
      _temp.x = p.y;
      _temp.y = -p.x;
      return _temp;
    }
    getNormal(p) {
      let sum = Math.sqrt(p.x * p.x + p.y * p.y);
      return new Laya.Point(p.y / sum, (0 - p.x) / sum);
    }
    getSides(vertices) {
      var list = vertices, length = list.length, sides = new Array();
      if (length >= 3) {
        for (var i = 1, lastPoint = list[0]; i < length; i++) {
          let nowPoint = list[i];
          sides.push(this.subtract(nowPoint, lastPoint));
          lastPoint = nowPoint;
        }
        sides.push(this.subtract(list[0], list[length - 1]));
      }
      return sides;
    }
    getLength(p) {
      return Math.sqrt(p.x * p.x + p.y * p.y);
    }
    dotProduct(p1, p2) {
      return p1.x * p2.x + p1.y * p2.y;
    }
    subtract(p2, p1) {
      let _point = Laya.Point.create();
      return _point.setTo(p2.x - p1.x, p2.y - p1.y);
    }
    getDistance(p1, p2) {
      let dx = p1.x - p2.x, dy = p1.y - p2.y;
      return Math.sqrt(dx * dx + dy * dy);
    }
  }, "ShapeDetection");
  ShapeDetection = __decorate16([
    regClass16()
  ], ShapeDetection);
  var ShapeDetection_default = ShapeDetection;

  // E:/projects/laya3/demo_1_2d/src/scence/uiDemo/interactive/ShapeDetectionRT_gen.ts
  var ShapeDetectionRTBase = class extends Laya.View {
  };
  __name(ShapeDetectionRTBase, "ShapeDetectionRTBase");

  // E:/projects/laya3/demo_1_2d/src/scence/uiDemo/interactive/ShapeDetectionRT.ts
  var __decorate17 = __$decorate("46b18764-7fd2-44e0-ab17-95f115ad39b2", "../src/scence/uiDemo/interactive/ShapeDetectionRT.ts");
  var ShapeDetectionRT_1;
  var { regClass: regClass17, property: property17 } = Laya;
  var ShapeDetectionRT = ShapeDetectionRT_1 = /* @__PURE__ */ __name(class ShapeDetectionRT2 extends ShapeDetectionRTBase {
    constructor() {
      super();
      this._detectionType = 0;
      this.collisionNodes = null;
      ShapeDetectionRT_1.i = this;
    }
    onEnable() {
      this.collisionNodes = [this.c1, this.p1, this.p2];
      this._script = this.getComponent(ShapeDetection_default);
      this.detectionType.selectHandler = new Laya.Handler(this, this.onSelected);
      this.detectionType.selectedIndex = 0;
    }
    onSelected(index) {
      console.log("onSelected:" + index);
      this._detectionType = index;
      switch (index) {
        case 0:
          this.setCircleLine([this.c11, this.p11, this.p22]);
          break;
        case 1:
          this.setRectLine([this.c11, this.p11, this.p22]);
          break;
        case 2:
          this.c11.graphics.clear();
          this.p11.graphics.clear();
          this.p22.graphics.clear();
          break;
      }
    }
    collisionWith(self) {
      let nodes;
      nodes = this._script.collisionWith(self, this.collisionNodes, this._detectionType);
      if (nodes.length > 0) {
        nodes.push(self);
        this.setLineWidth(nodes);
      } else {
        this.retsetLineWidth();
      }
    }
    setLineWidth(nodes) {
      for (let i = 0; i < nodes.length; i++) {
        nodes[i]._graphics._cmds[0].lineWidth = 3;
      }
    }
    retsetLineWidth() {
      for (let i = 0; i < this.collisionNodes.length; i++) {
        this.collisionNodes[i]._graphics._cmds[0].lineWidth = 0;
      }
    }
    setCircleLine(nodes, lineWidth = 1, lineColor = "#1e00fb") {
      for (let i = 0; i < nodes.length; i++) {
        nodes[i].graphics.clear();
        let x = nodes[i].width / 2, y = nodes[i].height / 2, radius = this._script.rectToRadius(nodes[i].width, nodes[i].height);
        nodes[i].graphics.drawCircle(x, y, radius, null, lineColor, lineWidth);
      }
    }
    setRectLine(nodes, lineWidth = 1, lineColor = "#1e00fb") {
      for (let i = 0; i < nodes.length; i++) {
        nodes[i].graphics.clear();
        nodes[i].graphics.drawRect(nodes[i].x, nodes[i].y, nodes[i].width, nodes[i].height, null, lineColor, lineWidth);
      }
    }
  }, "ShapeDetectionRT");
  ShapeDetectionRT = ShapeDetectionRT_1 = __decorate17([
    regClass17(),
    __metadata("design:paramtypes", [])
  ], ShapeDetectionRT);
  var ShapeDetectionRT_default = ShapeDetectionRT;

  // E:/projects/laya3/demo_1_2d/src/script/mouse/DragAndTips.ts
  var __decorate18 = __$decorate("a166bb15-4828-43a0-aab7-2261fc3d58db", "../src/script/mouse/DragAndTips.ts");
  var { regClass: regClass18, property: property18 } = Laya;
  var DragAndTips = /* @__PURE__ */ __name(class DragAndTips2 extends Laya.Script {
    constructor() {
      super(...arguments);
      this.tipsText = "";
      this.isDown = false;
    }
    onEnable() {
      this.tipsText.replace(/(^\s*)|(\s*$)/g, "");
    }
    onMouseDown() {
      this.owner.startDrag();
      this.isDown = true;
    }
    onMouseUp() {
      this.isDown = false;
    }
    onMouseMove() {
      this.isDown && ShapeDetectionRT_default.i.collisionWith(this.owner);
    }
    onMouseOver() {
      Laya.Mouse.cursor = "move";
      this.tipsText !== "" && Laya.Scene.open("Scenes/uiDemo/Msg.ls", false, { "text": this.tipsText });
    }
    onMouseOut() {
      Laya.Mouse.cursor = "auto";
    }
  }, "DragAndTips");
  __decorate18([
    property18(),
    __metadata("design:type", String)
  ], DragAndTips.prototype, "tipsText", void 0);
  DragAndTips = __decorate18([
    regClass18()
  ], DragAndTips);

  // E:/projects/laya3/demo_1_2d/src/script/mouse/Joystick.ts
  var __decorate19 = __$decorate("3e5e7efc-fa27-48b7-beee-60a7c5e5df47", "../src/script/mouse/Joystick.ts");
  var _a4;
  var _b3;
  var _c2;
  var { regClass: regClass19, property: property19 } = Laya;
  var Event2 = Laya.Event;
  var Panel = Laya.Panel;
  var Point = Laya.Point;
  var Joystick = /* @__PURE__ */ __name(class Joystick2 extends Laya.Script {
    constructor() {
      super();
      this.runAniName = "runRight,runRDown1,runRDown2,runRDown3,runDown,runLDown3,runLDown2,runLDown1,runLeft,runLUp1,runLUp2,runLUp3,runUp,runRUp3,runRUp2,runRUp1";
      this.standAniName = "right,Rdown,down,Ldown,left,Lup,up,Rup";
      this.stageMouse = new Point();
      this.axisPivot = new Point();
      this.angle = 0;
      this.radian = 0;
      this.isMoving = false;
      this.isRun = false;
    }
    onEnable() {
      this.joystickBG = this.owner;
      this.joystickAxis = this.owner.getChildByName("joystickAxis");
      this.maxDistance = this.joystickBG.width - this.joystickAxis.width;
      this.axisPivot.x = this.joystickAxis.x;
      this.axisPivot.y = this.joystickAxis.y;
      this.sceneWindow.on(Event2.MOUSE_DOWN, this, this.mouseDown);
      this.sceneWindow.on(Event2.MOUSE_MOVE, this, this.mouseMove);
      this.sceneWindow.on(Event2.MOUSE_UP, this, this.mouseUp);
      this.sceneWindow.on(Event2.MOUSE_OUT, this, this.mouseUp);
      this.roleAniNode = this.roleAni.create();
      this.sceneWindow.addChild(this.roleAniNode);
      this.roleAniNode.pivot(this.roleAniNode.width / 2, this.roleAniNode.height / 2);
      this.roleAniNode.x = this.sceneWindow.width / 2;
      this.roleAniNode.y = this.sceneWindow.height / 2;
      this._animator = this.roleAniNode.getComponent(Laya.Animator2D);
    }
    mouseDown(e) {
      this.touchId = e.touchId;
      this.isMoving = true;
      this.updateJoystickPoint();
    }
    updateJoystickPoint() {
      this.stageMouse.x = Laya.stage.mouseX;
      this.stageMouse.y = Laya.stage.mouseY;
      let joystickBGMouse = this.joystickBG.globalToLocal(this.stageMouse), mouseX = joystickBGMouse.x - this.joystickAxis.width / 2, mouseY = joystickBGMouse.y - this.joystickAxis.height / 2;
      this.radian = Math.atan2(mouseY - this.axisPivot.y, mouseX - this.axisPivot.x);
      this.lastAngle = this.angle;
      this.angle = Math.round(this.radian * 180 / Math.PI * 10) / 10;
      this.angle < 0 && (this.angle += 360);
      let distance = this.getDistance(this.joystickBG.width / 2, this.joystickBG.height / 2, joystickBGMouse.x, joystickBGMouse.y);
      if (distance > this.maxDistance && this.lastAngle !== this.angle) {
        this.joystickAxis.x = Math.floor(Math.cos(this.radian) * this.maxDistance) + this.axisPivot.x;
        this.joystickAxis.y = Math.floor(Math.sin(this.radian) * this.maxDistance) + this.axisPivot.y;
      } else {
        this.joystickAxis.pos(joystickBGMouse.x - this.joystickAxis.width / 2, joystickBGMouse.y - this.joystickAxis.height / 2);
      }
      this.switchAni("run");
    }
    switchAni(aniType) {
      if (aniType == "run") {
        let _runAniName = this.getOrientation(this.angle, this.runAniName);
        if (_runAniName !== this.lastRunAniName) {
          this.lastRunAniName = _runAniName;
          this._animator.play(_runAniName);
        }
        this.isRun = true;
      } else {
        this.isRun = false;
        let standS = this.getOrientation(this.angle, this.standAniName);
        this.lastAngle !== this.angle && this._animator.play(standS);
      }
    }
    mouseUp(e) {
      if (e.touchId != this.touchId)
        return;
      this.touchId = null;
      this.isMoving = false;
      this.joystickAxis.pos(this.axisPivot.x, this.axisPivot.y);
      this.switchAni("stand");
    }
    mouseMove(e) {
      if (e.touchId != this.touchId)
        return;
      this.updateJoystickPoint();
    }
    getOrientation(angle, aniName) {
      let aniArr = aniName.split(",");
      const angleConditions = 360 / aniArr.length;
      return aniArr[Math.floor(angle / angleConditions)];
    }
    onUpdate() {
      if (!this.isMoving)
        return;
      this.updateRoleMove();
    }
    updateRoleMove() {
      this.switchAni("run");
      let dx = Math.cos(this.radian) * 2;
      let dy = Math.sin(this.radian) * 2;
      (dx < 0 && this.gameMap.x < 0 || dx > 0 && this.gameMap.x > this.sceneWindow.width - this.gameMap.width) && (this.gameMap.x -= dx);
      (dy < 0 && this.gameMap.y < 0 || dy > 0 && this.gameMap.y > this.sceneWindow.height - this.gameMap.height) && (this.gameMap.y -= dy);
    }
    getDistance(centerX, centerY, mouseX, mouseY) {
      let dx = centerX - mouseX, dy = centerY - mouseY;
      return Math.sqrt(dx * dx + dy * dy);
    }
  }, "Joystick");
  __decorate19([
    property19(),
    __metadata("design:type", typeof (_a4 = typeof Laya !== "undefined" && Laya.Prefab) === "function" ? _a4 : Object)
  ], Joystick.prototype, "roleAni", void 0);
  __decorate19([
    property19(),
    __metadata("design:type", String)
  ], Joystick.prototype, "runAniName", void 0);
  __decorate19([
    property19(),
    __metadata("design:type", String)
  ], Joystick.prototype, "standAniName", void 0);
  __decorate19([
    property19(),
    __metadata("design:type", typeof (_b3 = typeof Laya !== "undefined" && Laya.Sprite) === "function" ? _b3 : Object)
  ], Joystick.prototype, "gameMap", void 0);
  __decorate19([
    property19(),
    __metadata("design:type", typeof (_c2 = typeof Panel !== "undefined" && Panel) === "function" ? _c2 : Object)
  ], Joystick.prototype, "sceneWindow", void 0);
  Joystick = __decorate19([
    regClass19(),
    __metadata("design:paramtypes", [])
  ], Joystick);

  // E:/projects/laya3/demo_1_2d/src/script/tween/Folded.ts
  var __decorate20 = __$decorate("84f93029-0bca-4136-9e05-e1291f135410", "../src/script/tween/Folded.ts");
  var { regClass: regClass20, property: property20 } = Laya;
  var Folded = /* @__PURE__ */ __name(class Folded2 extends Laya.Script {
    constructor() {
      super();
      this.isOpen = true;
    }
    onEnable() {
      this.toolbarBG = this.owner.parent;
      this._owner = this.owner;
      this.menu = this.owner.parent.getChildByName("menu");
    }
    onMouseDown(e) {
      e.stopPropagation();
      if (this.isOpen) {
        Laya.Tween.to(this.toolbarBG, { width: 106 }, 1e3, Laya.Ease.strongOut);
        Laya.Tween.to(this._owner, { x: 52, rotation: 540 }, 1e3, Laya.Ease.strongOut, Laya.Handler.create(this, () => {
          this.isOpen = false;
        }));
        Laya.Tween.to(this.menu, { alpha: 0 }, 300, Laya.Ease.strongOut, Laya.Handler.create(this, () => {
          this.menu.visible = false;
        }));
      } else {
        Laya.Tween.to(this.toolbarBG, { width: 460 }, 1e3, Laya.Ease.strongOut);
        Laya.Tween.to(this._owner, { x: 402, rotation: -360 }, 1e3, Laya.Ease.strongOut, Laya.Handler.create(this, () => {
          this.isOpen = true;
        }));
        Laya.Tween.to(this.menu, { alpha: 1 }, 200, Laya.Ease.strongOut, Laya.Handler.create(this, () => {
          this.menu.visible = true;
        }));
      }
    }
    onDisable() {
    }
  }, "Folded");
  Folded = __decorate20([
    regClass20(),
    __metadata("design:paramtypes", [])
  ], Folded);

  // E:/projects/laya3/demo_1_2d/src/scence/uiDemo/animation/AtlasAniRT.ts
  var __decorate21 = __$decorate("b6691494-c820-422d-b415-9a72ea70b56b", "../src/scence/uiDemo/animation/AtlasAniRT.ts");
  var _a5;
  var _b4;
  var _c3;
  var _d;
  var { regClass: regClass21, property: property21 } = Laya;
  var AtlasAniRT = /* @__PURE__ */ __name(class AtlasAniRT2 extends Laya.Script {
    constructor() {
      super(...arguments);
      this.isPlay = false;
    }
    onAwake() {
      console.log("\u521B\u5EFA\u52A8\u753B\u6A21\u677F");
      this.createAniTemplate("moveB");
      this.createAniTemplate("moveC");
      this.createAniTemplate("moveE");
      this.createAniTemplate("moveF");
      this.createAniTemplate("moveH");
      this.createAniTemplate("moveI");
      this.createAniTemplate("moveK");
      this.createAniTemplate("moveL");
      this.aniSource.play(0, true, "moveB");
    }
    onEnable() {
      this.playAni.on(Laya.Event.MOUSE_DOWN, this, () => {
        this.isPlay = true;
        this.aniSource.play(0, true, this.selectAni.selectedLabel);
      });
      this.stopAni.on(Laya.Event.MOUSE_DOWN, this, () => {
        this.isPlay = false;
        this.aniSource.isPlaying && this.aniSource.stop();
      });
      this.selectAni.selectHandler = new Laya.Handler(this, () => {
        this.isPlay ? this.aniSource.play(0, true, this.selectAni.selectedLabel) : this.aniSource.play(0, false, this.selectAni.selectedLabel);
      });
    }
    createAniTemplate(name, len = 8) {
      let aniFrames = [];
      for (let i = 0; i < len; i++) {
        aniFrames.push("resources/UI/role/atlasAni/139x/" + name + i + ".png");
      }
      Laya.Animation.createFrames(aniFrames, name);
    }
    onError(err) {
      console.log("\u52A0\u8F7D\u5931\u8D25: " + err);
    }
  }, "AtlasAniRT");
  __decorate21([
    property21(),
    __metadata("design:type", typeof (_a5 = typeof Laya !== "undefined" && Laya.Button) === "function" ? _a5 : Object)
  ], AtlasAniRT.prototype, "playAni", void 0);
  __decorate21([
    property21(),
    __metadata("design:type", typeof (_b4 = typeof Laya !== "undefined" && Laya.Button) === "function" ? _b4 : Object)
  ], AtlasAniRT.prototype, "stopAni", void 0);
  __decorate21([
    property21(),
    __metadata("design:type", typeof (_c3 = typeof Laya !== "undefined" && Laya.ComboBox) === "function" ? _c3 : Object)
  ], AtlasAniRT.prototype, "selectAni", void 0);
  __decorate21([
    property21(),
    __metadata("design:type", typeof (_d = typeof Laya !== "undefined" && Laya.Animation) === "function" ? _d : Object)
  ], AtlasAniRT.prototype, "aniSource", void 0);
  AtlasAniRT = __decorate21([
    regClass21()
  ], AtlasAniRT);

  // E:/projects/laya3/demo_1_2d/src/scence/uiDemo/animation/FrameAniRT.ts
  var __decorate22 = __$decorate("f20c3b15-2e22-4f5a-bc12-174ddec5a495", "../src/scence/uiDemo/animation/FrameAniRT.ts");
  var _a6;
  var _b5;
  var _c4;
  var _d2;
  var { regClass: regClass22, property: property22 } = Laya;
  var FrameAniRT = /* @__PURE__ */ __name(class FrameAniRT2 extends Laya.Script {
    constructor() {
      super(...arguments);
      this.isPlay = false;
    }
    onEnable() {
      this.isPlay = true;
      this.playAnimation(this.selectAni.selectedLabel);
      this.playAni.on(Laya.Event.MOUSE_DOWN, this, () => {
        this.isPlay = true;
        this.playAnimation(this.selectAni.selectedLabel);
      });
      this.stopAni.on(Laya.Event.MOUSE_DOWN, this, () => {
        this.isPlay = false;
        this.aniSource.isPlaying && this.aniSource.stop();
      });
      this.selectAni.selectHandler = new Laya.Handler(this, () => {
        this.isPlay ? this.playAnimation(this.selectAni.selectedLabel) : this.playAnimation(this.selectAni.selectedLabel, false);
      });
    }
    playAnimation(name, loop = true, len = 7) {
      let aniFrames = [];
      for (let i = 0; i < len; i++) {
        aniFrames.push("resources/UI/role/frameAni/" + name + i + ".png");
      }
      this.aniSource.loadImages(aniFrames).play(0, loop);
    }
  }, "FrameAniRT");
  __decorate22([
    property22(),
    __metadata("design:type", typeof (_a6 = typeof Laya !== "undefined" && Laya.Button) === "function" ? _a6 : Object)
  ], FrameAniRT.prototype, "playAni", void 0);
  __decorate22([
    property22(),
    __metadata("design:type", typeof (_b5 = typeof Laya !== "undefined" && Laya.Button) === "function" ? _b5 : Object)
  ], FrameAniRT.prototype, "stopAni", void 0);
  __decorate22([
    property22(),
    __metadata("design:type", typeof (_c4 = typeof Laya !== "undefined" && Laya.ComboBox) === "function" ? _c4 : Object)
  ], FrameAniRT.prototype, "selectAni", void 0);
  __decorate22([
    property22(),
    __metadata("design:type", typeof (_d2 = typeof Laya !== "undefined" && Laya.Animation) === "function" ? _d2 : Object)
  ], FrameAniRT.prototype, "aniSource", void 0);
  FrameAniRT = __decorate22([
    regClass22()
  ], FrameAniRT);

  // E:/projects/laya3/demo_1_2d/src/scence/uiDemo/animation/SkeletonAni.ts
  var __decorate23 = __$decorate("a93776c6-6457-4f88-b445-ef78aa5cb42e", "../src/scence/uiDemo/animation/SkeletonAni.ts");
  var { regClass: regClass23, property: property23 } = Laya;
  var Event3 = Laya.Event;
  var SpineSkeleton = Laya.SpineSkeleton;
  var SkeletonAni = /* @__PURE__ */ __name(class SkeletonAni2 extends Laya.Script {
    constructor() {
      super(...arguments);
      this.skinArray = ["goblin", "goblingirl"];
      this.skinIndex = 0;
      this.spineAniIndex = 6;
    }
    onEnable() {
      this.createLayaSpine();
      this.createSpine();
    }
    createLayaSpine() {
      this.skeletonNode = this.owner.getChildByName("skeletonNode");
      Laya.loader.load("resources/UI/role/spineAni/goblins.sk").then((templet) => {
        this.skeletonAni = templet.buildArmature(1);
        this.skeletonNode.addChild(this.skeletonAni);
        this.skeletonAni.x = 128;
        this.skeletonAni.y = 390;
        this.skeletonAni.play(0, true);
        this.changeSkin();
        this.skeletonNode.on(Event3.CLICK, this, this.changeSkin);
      });
    }
    parseComplete() {
    }
    createSpine() {
      this.spineNode = this.owner.getChildByName("spineNode");
      Laya.loader.load("resources/UI/role/spineAni/spineboy-pma.skel", Laya.Loader.SPINE).then((templet) => {
        this.spineAni = new SpineSkeleton();
        this.spineAni.templet = templet;
        this.spineNode.addChild(this.spineAni);
        this.spineAni.scale(0.3, 0.3);
        this.spineAni.pos(220, 390);
        this.spineAniNum = this.spineAni.getAnimNum();
        this.spineAni.play(this.spineAniIndex, true);
        this.spineNode.on(Event3.CLICK, this, this.changeAni);
      });
    }
    spineParseComplete() {
    }
    changeAni() {
      ++this.spineAniIndex >= this.spineAniNum && (this.spineAniIndex = 5);
      this.spineAni.play(this.spineAniIndex, true, true);
    }
    changeSkin() {
      this.skeletonAni.showSkinByName(this.skinArray[this.skinIndex]);
      ++this.skinIndex >= this.skinArray.length && (this.skinIndex = 0);
    }
  }, "SkeletonAni");
  SkeletonAni = __decorate23([
    regClass23()
  ], SkeletonAni);

  // E:/projects/laya3/demo_1_2d/src/scence/uiDemo/interactive/AStar.ts
  var __decorate24 = __$decorate("cc16f94c-6cbb-4b0b-b9fc-6a45886cd49e", "../src/scence/uiDemo/interactive/AStar.ts");
  var _a7;
  var _b6;
  var _c5;
  var { regClass: regClass24, property: property24 } = Laya;
  var Event4 = Laya.Event;
  var Panel2 = Laya.Panel;
  var Point2 = Laya.Point;
  var AStar = /* @__PURE__ */ __name(class AStar2 extends Laya.Script {
    constructor() {
      super();
      this.runAniName = "runRight,runRDown1,runRDown2,runRDown3,runDown,runLDown3,runLDown2,runLDown1,runLeft,runLUp1,runLUp2,runLUp3,runUp,runRUp3,runRUp2,runRUp1";
      this.standAniName = "right,Rdown,down,Ldown,left,Lup,up,Rup";
      this.stageMouse = new Point2();
      this.angle = 0;
      this.isMoving = false;
      this.isRun = false;
    }
    onEnable() {
      this.createMap();
      this.sceneWindow.on(Event4.MOUSE_UP, this, this.mouseUp);
      this.roleAniNode = this.roleAni.create();
      this.sceneWindow.addChild(this.roleAniNode);
      this.roleAniNode.pivot(this.roleAniNode.width / 2, this.roleAniNode.height / 2 + 26);
      this.roleAniNode.scale(0.6, 0.6);
      this.roleAniNode.x = this.lastX = 48;
      this.roleAniNode.y = this.lastY = 48;
      this._animator = this.roleAniNode.getComponent(Laya.Animator2D);
      let aniState = this._animator.getDefaultState();
      console.log(aniState.name);
      this.createWallMap();
    }
    createWallMap() {
      Laya.loader.load("resources/tiledMap/desert_new.json").then(() => {
        let _json = Laya.loader.getRes("resources/tiledMap/desert_new.json").data;
        let data = _json.layers[0].data;
        let mapData;
        mapData = new Array();
        for (var i = 0; i < 40; i++) {
          mapData[i] = new Array();
          for (var j = 0; j < 60; j++) {
            if (data[i * 60 + j] == 30)
              mapData[i][j] = 1;
            else
              mapData[i][j] = 0;
          }
        }
        this.graph = new window.Graph(mapData);
        this.opts = [];
        this.opts.closest = true;
        this.opts.heuristic = window.astar.heuristics.diagonal;
      });
    }
    mouseUp(e) {
      if (this.isMoving)
        return;
      this.stageMouse.x = Laya.stage.mouseX;
      this.stageMouse.y = Laya.stage.mouseY;
      let mapMouse = this.gameMap.globalToLocal(this.stageMouse);
      var start = this.graph.grid[Math.ceil(this.roleAniNode.y / 32) - 1][Math.ceil(this.roleAniNode.x / 32) - 1];
      var end = this.graph.grid[Math.ceil(mapMouse.y / 32) - 1][Math.ceil(mapMouse.x / 32) - 1];
      this._everyPath = window.astar.search(this.graph, start, end, {
        closest: this.opts.closest
      });
      if (this._everyPath.length > 0) {
        this.isMoving = true;
      }
      Laya.timer.loop(100, this, this.loopfun);
    }
    loopfun() {
      if (this._everyPath.length > 0) {
        let x = this._everyPath[0].y * 32 + 16;
        let y = this._everyPath[0].x * 32 + 16;
        if (x == this.lastX) {
          if (y > this.lastY)
            this.angle = 90;
          else
            this.angle = 270;
        } else {
          if (x > this.lastX)
            this.angle = 0;
          else
            this.angle = 180;
        }
        this.switchAni("run");
        this.lastX = x;
        this.lastY = y;
        Laya.Tween.to(this.roleAniNode, { x, y }, 100);
        this._everyPath.splice(0, 1);
      } else {
        this.switchAni("stand");
        Laya.timer.clear(this, this.loopfun);
        this.isMoving = false;
      }
    }
    createMap() {
      this.tiledMap = new Laya.TiledMap();
      this.tiledMap.createMap("resources/tiledMap/desert_new.json", new Laya.Rectangle(0, 0, this.sceneWindow.width, this.sceneWindow.height), new Laya.Handler(this, this.completeHandler));
    }
    onLoaded() {
      this.tiledMap.mapSprite().removeSelf();
      this.gameMap.addChild(this.tiledMap.mapSprite());
    }
    completeHandler(e = null) {
      this.onLoaded();
    }
    switchAni(aniType) {
      if (aniType == "run") {
        let runS = this.getOrientation(this.angle, this.runAniName);
        this._animator.play(runS);
        this.isRun = true;
      } else {
        this.isRun = false;
        let standS = this.getOrientation(this.angle, this.standAniName);
        this.lastAngle !== this.angle && this._animator.play(standS);
      }
    }
    getOrientation(angle, aniName) {
      let aniArr = aniName.split(",");
      const angleConditions = 360 / aniArr.length;
      return aniArr[Math.floor(angle / angleConditions)];
    }
    onDisable() {
      Laya.stage.off(Event4.MOUSE_UP, this, this.mouseUp);
      if (this.tiledMap) {
        this.tiledMap.destroy();
      }
    }
  }, "AStar");
  __decorate24([
    property24(),
    __metadata("design:type", typeof (_a7 = typeof Laya !== "undefined" && Laya.Sprite) === "function" ? _a7 : Object)
  ], AStar.prototype, "gameMap", void 0);
  __decorate24([
    property24(),
    __metadata("design:type", typeof (_b6 = typeof Laya !== "undefined" && Laya.Prefab) === "function" ? _b6 : Object)
  ], AStar.prototype, "roleAni", void 0);
  __decorate24([
    property24(),
    __metadata("design:type", String)
  ], AStar.prototype, "runAniName", void 0);
  __decorate24([
    property24(),
    __metadata("design:type", String)
  ], AStar.prototype, "standAniName", void 0);
  __decorate24([
    property24(),
    __metadata("design:type", typeof (_c5 = typeof Panel2 !== "undefined" && Panel2) === "function" ? _c5 : Object)
  ], AStar.prototype, "sceneWindow", void 0);
  AStar = __decorate24([
    regClass24(),
    __metadata("design:paramtypes", [])
  ], AStar);

  // E:/projects/laya3/demo_1_2d/src/scence/uiDemo/interactive/TileMapRT.ts
  var __decorate25 = __$decorate("9360c555-a148-404c-8c45-a12580e5ac57", "../src/scence/uiDemo/interactive/TileMapRT.ts");
  var _a8;
  var _b7;
  var _c6;
  var _d3;
  var { regClass: regClass25, property: property25 } = Laya;
  var Image = Laya.Image;
  var Event5 = Laya.Event;
  var Panel3 = Laya.Panel;
  var Point3 = Laya.Point;
  var TileMapRT = /* @__PURE__ */ __name(class TileMapRT2 extends Laya.Script {
    constructor() {
      super();
      this.runAniName = "runRight,runRDown1,runRDown2,runRDown3,runDown,runLDown3,runLDown2,runLDown1,runLeft,runLUp1,runLUp2,runLUp3,runUp,runRUp3,runRUp2,runRUp1";
      this.standAniName = "right,Rdown,down,Ldown,left,Lup,up,Rup";
      this.stageMouse = new Point3();
      this.axisPivot = new Point3();
      this.angle = 0;
      this.radian = 0;
      this.isMoving = false;
      this.isRun = false;
      this.mLastX = 0;
      this.mLastY = 0;
    }
    onEnable() {
      this.createMap();
      this.joystickAxis = this.joystickBG.getChildByName("joystickAxis");
      this.maxDistance = this.joystickBG.width - this.joystickAxis.width;
      this.axisPivot.x = this.joystickAxis.x;
      this.axisPivot.y = this.joystickAxis.y;
      this.sceneWindow.on(Event5.MOUSE_DOWN, this, this.mouseDown);
      this.sceneWindow.on(Event5.MOUSE_MOVE, this, this.mouseMove);
      this.sceneWindow.on(Event5.MOUSE_UP, this, this.mouseUp);
      this.sceneWindow.on(Event5.MOUSE_OUT, this, this.mouseUp);
      this.roleAniNode = this.roleAni.create();
      this.sceneWindow.addChild(this.roleAniNode);
      this.roleAniNode.pivot(this.roleAniNode.width / 2, this.roleAniNode.height / 2);
      this.roleAniNode.x = this.sceneWindow.width / 2;
      this.roleAniNode.y = this.sceneWindow.height / 2;
      this._animator = this.roleAniNode.getComponent(Laya.Animator2D);
      let aniState = this._animator.getDefaultState();
      console.log(aniState.name);
    }
    createMap() {
      this.tiledMap = new Laya.TiledMap();
      this.tiledMap.createMap("resources/tiledMap/desert_new.json", new Laya.Rectangle(0, 0, this.sceneWindow.width, this.sceneWindow.height), new Laya.Handler(this, this.completeHandler));
    }
    onLoaded() {
      this.tiledMap.mapSprite().removeSelf();
      this.gameMap.addChild(this.tiledMap.mapSprite());
    }
    completeHandler(e = null) {
      this.onLoaded();
    }
    mouseDown(e) {
      this.touchId = e.touchId;
      this.isMoving = true;
      this.updateJoystickPoint();
    }
    updateJoystickPoint() {
      this.stageMouse.x = Laya.stage.mouseX;
      this.stageMouse.y = Laya.stage.mouseY;
      let joystickBGMouse = this.joystickBG.globalToLocal(this.stageMouse), mouseX = joystickBGMouse.x - this.joystickAxis.width / 2, mouseY = joystickBGMouse.y - this.joystickAxis.height / 2;
      this.radian = Math.atan2(mouseY - this.axisPivot.y, mouseX - this.axisPivot.x);
      this.lastAngle = this.angle;
      this.angle = Math.round(this.radian * 180 / Math.PI * 10) / 10;
      this.angle < 0 && (this.angle += 360);
      let distance = this.getDistance(this.joystickBG.width / 2, this.joystickBG.height / 2, joystickBGMouse.x, joystickBGMouse.y);
      if (distance > this.maxDistance && this.lastAngle !== this.angle) {
        this.joystickAxis.x = Math.floor(Math.cos(this.radian) * this.maxDistance) + this.axisPivot.x;
        this.joystickAxis.y = Math.floor(Math.sin(this.radian) * this.maxDistance) + this.axisPivot.y;
      } else {
        this.joystickAxis.pos(joystickBGMouse.x - this.joystickAxis.width / 2, joystickBGMouse.y - this.joystickAxis.height / 2);
      }
      this.switchAni("run");
    }
    switchAni(aniType) {
      if (aniType == "run") {
        let _runAniName = this.getOrientation(this.angle, this.runAniName);
        if (_runAniName !== this.lastRunAniName) {
          this.lastRunAniName = _runAniName;
          this._animator.play(_runAniName);
        }
        this.isRun = true;
      } else {
        this.isRun = false;
        let standS = this.getOrientation(this.angle, this.standAniName);
        this.lastAngle !== this.angle && this._animator.play(standS);
      }
    }
    mouseUp(e) {
      if (e.touchId != this.touchId)
        return;
      this.touchId = null;
      this.isMoving = false;
      this.joystickAxis.pos(this.axisPivot.x, this.axisPivot.y);
      this.switchAni("stand");
    }
    mouseMove(e) {
      if (e.touchId != this.touchId)
        return;
      this.updateJoystickPoint();
    }
    getOrientation(angle, aniName) {
      let aniArr = aniName.split(",");
      const angleConditions = 360 / aniArr.length;
      return aniArr[Math.floor(angle / angleConditions)];
    }
    onUpdate() {
      if (!this.isMoving)
        return;
      this.updateRoleMove();
    }
    updateRoleMove() {
      this.switchAni("run");
      let dx = Math.cos(this.radian) * 2;
      let dy = Math.sin(this.radian) * 2;
      this.mLastX += dx;
      this.mLastY += dy;
      if (this.mLastX < 0)
        this.mLastX = 0;
      else if (this.mLastX > 1920 - this.sceneWindow.width)
        this.mLastX = 1920 - this.sceneWindow.width;
      if (this.mLastY < 0)
        this.mLastY = 0;
      else if (this.mLastY > 1280 - this.sceneWindow.height)
        this.mLastY = 1280 - this.sceneWindow.height;
      this.tiledMap.moveViewPort(this.mLastX, this.mLastY);
    }
    getDistance(centerX, centerY, mouseX, mouseY) {
      let dx = centerX - mouseX, dy = centerY - mouseY;
      return Math.sqrt(dx * dx + dy * dy);
    }
    onDisable() {
      Laya.stage.off(Event5.MOUSE_DOWN, this, this.mouseDown);
      Laya.stage.off(Event5.MOUSE_UP, this, this.mouseUp);
      Laya.stage.off(Event5.MOUSE_MOVE, this, this.mouseMove);
      if (this.tiledMap) {
        this.tiledMap.destroy();
      }
    }
  }, "TileMapRT");
  __decorate25([
    property25(),
    __metadata("design:type", typeof (_a8 = typeof Laya !== "undefined" && Laya.Sprite) === "function" ? _a8 : Object)
  ], TileMapRT.prototype, "gameMap", void 0);
  __decorate25([
    property25(),
    __metadata("design:type", typeof (_b7 = typeof Laya !== "undefined" && Laya.Prefab) === "function" ? _b7 : Object)
  ], TileMapRT.prototype, "roleAni", void 0);
  __decorate25([
    property25(),
    __metadata("design:type", String)
  ], TileMapRT.prototype, "runAniName", void 0);
  __decorate25([
    property25(),
    __metadata("design:type", String)
  ], TileMapRT.prototype, "standAniName", void 0);
  __decorate25([
    property25(),
    __metadata("design:type", typeof (_c6 = typeof Panel3 !== "undefined" && Panel3) === "function" ? _c6 : Object)
  ], TileMapRT.prototype, "sceneWindow", void 0);
  __decorate25([
    property25(),
    __metadata("design:type", typeof (_d3 = typeof Image !== "undefined" && Image) === "function" ? _d3 : Object)
  ], TileMapRT.prototype, "joystickBG", void 0);
  TileMapRT = __decorate25([
    regClass25(),
    __metadata("design:paramtypes", [])
  ], TileMapRT);

  // E:/projects/laya3/demo_1_2d/src/scence/uiDemo/list/BagListRT_gen.ts
  var BagListRTBase = class extends Laya.View {
  };
  __name(BagListRTBase, "BagListRTBase");

  // E:/projects/laya3/demo_1_2d/src/scence/uiDemo/list/BagListRT.ts
  var __decorate26 = __$decorate("7e299e45-3617-4f8e-9e30-7ea4a26c2125", "../src/scence/uiDemo/list/BagListRT.ts");
  var { regClass: regClass26, property: property26 } = Laya;
  var BagListRT = /* @__PURE__ */ __name(class BagListRT2 extends BagListRTBase {
    constructor() {
      super();
      this.lastIndex = -1;
    }
    onEnable() {
      const jsonPath = "resources/json/bagList.json";
      Laya.loader.fetch(jsonPath, "json").then((_json) => {
        if (_json.bagList && _json.bagList.length > 0) {
          this.bagList.array = _json.bagList;
          this.bagList.renderHandler = new Laya.Handler(this, this.onListRender);
          this.bagList.selectHandler = new Laya.Handler(this, this.onListSelect);
          this.bagList.mouseHandler = new Laya.Handler(this, this.onListMouse);
          this.bagList.vScrollBarSkin = "";
        }
      });
    }
    onListRender(item, index) {
      if (index > this.bagList.array.length || index < 0)
        return;
    }
    onListSelect(index) {
      this.tips.visible = true;
      this.bagList.array[index].listItemBG = { "skin": "resources/UI/images/bg/bg100-1.png" };
      if (this.lastIndex !== -1) {
        this.bagList.array[this.lastIndex].listItemBG = { "skin": "resources/UI/images/bg/bg100-0.png" };
      }
      this.bagList.refresh();
      this.lastIndex = index;
      this.itemImg.skin = this.bagList.array[index].listItemImg.skin;
      this.itemNumber.changeText("\u6570\u91CF " + this.bagList.array[index].listItemNumber.text);
      this.itemReadme.text = this.bagList.array[index].readme;
    }
    onListMouse(e, index) {
    }
    onDisable() {
    }
  }, "BagListRT");
  BagListRT = __decorate26([
    regClass26(),
    __metadata("design:paramtypes", [])
  ], BagListRT);

  // E:/projects/laya3/demo_1_2d/src/scence/uiDemo/list/ComboBoxRT.ts
  var __decorate27 = __$decorate("33a6c6ca-a0d2-4421-94dd-392f35eaaf47", "../src/scence/uiDemo/list/ComboBoxRT.ts");
  var _a9;
  var _b8;
  var _c7;
  var { regClass: regClass27, property: property27 } = Laya;
  var ComboBoxRT = /* @__PURE__ */ __name(class ComboBoxRT2 extends Laya.Script {
    constructor() {
      super();
    }
    onEnable() {
      var _dataSourece = this.getDataSourece();
      Laya.loader.load("resources/prefab/ComboList.lh").then((res) => {
        let node = res.create();
        this.comboList = node;
        this.comboList.array = _dataSourece;
        this.comboList.repeatY = _dataSourece.length;
        this.combo2.list = this.comboList;
        this.combo2.list.width = this.combo2.width;
        this.combo2.list.hScrollBarSkin = "";
        this.combo2.selectHandler = new Laya.Handler(this, this.onSelected2);
      });
      this.combo1.selectHandler = new Laya.Handler(this, this.onSelected1);
    }
    onSelected1(index) {
      this.selectedText.text = "\u60A8\u9009\u4E2D\u4E86\uFF1A" + this.combo1.selectedLabel;
    }
    onSelected2(index) {
      this.selectedText.text = "\u60A8\u9009\u4E2D\u4E86\uFF1A" + (index < 0 ? "" : this.comboList.array[index].label);
    }
    getDataSourece() {
      for (var _data = [], i = 0; i < 10; i++) {
        _data[i] = { "optText": { "text": "\u9009\u9879" + (i + 1) } };
      }
      return _data;
    }
    onDisable() {
    }
  }, "ComboBoxRT");
  __decorate27([
    property27(),
    __metadata("design:type", typeof (_a9 = typeof Laya !== "undefined" && Laya.ComboBox) === "function" ? _a9 : Object)
  ], ComboBoxRT.prototype, "combo1", void 0);
  __decorate27([
    property27(),
    __metadata("design:type", typeof (_b8 = typeof Laya !== "undefined" && Laya.ComboBox) === "function" ? _b8 : Object)
  ], ComboBoxRT.prototype, "combo2", void 0);
  __decorate27([
    property27(),
    __metadata("design:type", typeof (_c7 = typeof Laya !== "undefined" && Laya.Label) === "function" ? _c7 : Object)
  ], ComboBoxRT.prototype, "selectedText", void 0);
  ComboBoxRT = __decorate27([
    regClass27(),
    __metadata("design:paramtypes", [])
  ], ComboBoxRT);

  // E:/projects/laya3/demo_1_2d/src/scence/uiDemo/list/LoopListRT.ts
  var __decorate28 = __$decorate("5856a0ef-2630-47da-be88-8df538951e76", "../src/scence/uiDemo/list/LoopListRT.ts");
  var _a10;
  var { regClass: regClass28, property: property28 } = Laya;
  var LoopListRT = /* @__PURE__ */ __name(class LoopListRT2 extends Laya.Script {
    onEnable() {
      this.hList.array = this.getListDataSource();
      this.hList.repeatX = this.hList.array.length;
      this.hList.hScrollBarSkin = "";
      this.hList.scrollTo(1);
      let icon = this.hList.cells[1].getChildByName("icon");
      icon.scaleX = 2;
      icon.scaleY = 2;
      this.hList.scrollBar.on(Laya.Event.CHANGE, this, this.onScrollBarChange);
      this.leftLimit = this.getLeftLimit();
      this.rightLimit = this.getRightLimit();
    }
    onScrollBarChange() {
      var sliderValue = this.hList.scrollBar.value;
      var listArr = this.hList.array;
      if (sliderValue > this.leftLimit) {
        var cell = listArr.shift();
        listArr[listArr.length] = cell;
        this.hList.array = listArr;
        this.hList.scrollBar.value = sliderValue - this.hList.cells[0].width - this.hList.spaceX;
        this.iconTweenToLeft();
      } else if (sliderValue < this.rightLimit) {
        cell = listArr.pop();
        listArr.unshift(cell);
        this.hList.array = listArr;
        this.hList.scrollBar.value = sliderValue + this.hList.cells[0].width + this.hList.spaceX;
        this.iconTweenToRight();
      }
    }
    iconTweenToLeft(time = 200) {
      let iconOld = this.hList.cells[1].getChildByName("icon");
      iconOld.scaleX = iconOld.scaleY = 2;
      Laya.Tween.to(iconOld, { scaleX: 1, scaleY: 1 }, time);
      let icon = this.hList.cells[2].getChildByName("icon");
      icon.scaleX = icon.scaleY = 1;
      Laya.Tween.to(icon, { scaleX: 2, scaleY: 2 }, time);
    }
    iconTweenToRight(time = 200) {
      let iconOld = this.hList.cells[2].getChildByName("icon");
      iconOld.scaleX = iconOld.scaleY = 2;
      Laya.Tween.to(iconOld, { scaleX: 1, scaleY: 1 }, time);
      let icon = this.hList.cells[1].getChildByName("icon");
      icon.scaleX = icon.scaleY = 1;
      Laya.Tween.to(icon, { scaleX: 2, scaleY: 2 }, time);
    }
    getRightLimit() {
      return this.hList.cells[0].width - this.hList.spaceX;
    }
    getLeftLimit() {
      return this.hList.cells[0].width * 2 + this.hList.spaceX;
    }
    getListDataSource(length = 5) {
      let _arr = [];
      for (let i = 0; i < length; i++) {
        _arr[i] = {};
        _arr[i].icon = { "skin": `resources/UI/role/r${i}.png` };
      }
      return _arr;
    }
  }, "LoopListRT");
  __decorate28([
    property28(),
    __metadata("design:type", typeof (_a10 = typeof Laya !== "undefined" && Laya.List) === "function" ? _a10 : Object)
  ], LoopListRT.prototype, "hList", void 0);
  LoopListRT = __decorate28([
    regClass28()
  ], LoopListRT);

  // E:/projects/laya3/demo_1_2d/src/scence/uiDemo/list/MailListRT.ts
  var __decorate29 = __$decorate("1f3a493c-3504-40de-bd5e-0d556ac1dbfb", "../src/scence/uiDemo/list/MailListRT.ts");
  var _a11;
  var _b9;
  var _c8;
  var _d4;
  var { regClass: regClass29, property: property29 } = Laya;
  var MailListRT = /* @__PURE__ */ __name(class MailListRT2 extends Laya.Script {
    constructor() {
      super();
      this.optStatus = [];
      this.timestampFormat = (fmt, datetime) => {
        let _this = datetime ? new Date(datetime) : new Date();
        let o = {
          "M+": _this.getMonth() + 1,
          "D+": _this.getDate(),
          "h+": _this.getHours(),
          "m+": _this.getMinutes(),
          "s+": _this.getSeconds(),
          "S+": _this.getMilliseconds()
        };
        if (new RegExp("(Y+)").test(fmt))
          fmt = fmt.replace(RegExp.$1, (_this.getFullYear() + "").substr(4 - RegExp.$1.length));
        for (var k in o)
          if (new RegExp("(" + k + ")").test(fmt))
            fmt = fmt.replace(RegExp.$1, RegExp.$1.length == 1 ? o[k] : ("00" + o[k]).substr(("" + o[k]).length));
        return fmt;
      };
    }
    onEnable() {
      const jsonPath = "resources/json/mailList.json";
      Laya.loader.fetch(jsonPath, "json").then((data) => {
        let jsonData = data.mailList;
        if (jsonData && jsonData.length > 0) {
          this.mailList.array = jsonData;
          this.mailList.mouseHandler = new Laya.Handler(this, this.onListMouse);
          this.mailList.repeatY = 6;
          this.mailList.vScrollBarSkin = "";
        }
        this.addMail.on(Laya.Event.CLICK, this, this.addMialItem);
        this.selectDel.on(Laya.Event.CLICK, this, this.listSelectDel);
        this.selectFlag.on(Laya.Event.CLICK, this, this.listSelectFlag);
      });
    }
    listSelectFlag() {
      if (this.optStatus.length > 0) {
        for (let i = 0; i < this.optStatus.length; i++) {
          let index = this.optStatus[i];
          this.mailList.array[index].flag = 1;
          this.mailList.array[index].flagStatus = { "skin": "resources/UI/images/comp/img_mail_open.png" };
          this.mailList.array[index].flagBtn = { "label": "\u6807\u4E3A\u672A\u8BFB", "labelColors": "#3277f3,#3277f3,#3277f3" };
        }
        this.mailList.refresh();
        Laya.Scene.open("Scenes/uiDemo/Msg.ls", false, { "text": "\u5DF2\u6210\u529F\u6807\u8BB0" });
      } else
        Laya.Scene.open("Scenes/uiDemo/Msg.ls", false, { "text": "\u6CA1\u6709\u52FE\u9009\u9879\uFF0C\u8BF7\u5148\u52FE\u9009" });
    }
    listSelectDel() {
      if (this.optStatus.length > 0) {
        this.optStatus.sort(function(a, b) {
          return b - a;
        });
        for (let i = 0; i < this.optStatus.length; i++) {
          this.mailList.array.splice(this.optStatus[i], 1);
        }
        this.optStatus = [];
        this.mailList.refresh();
        Laya.Scene.open("Scenes/uiDemo/Msg.ls", false, { "text": "\u5DF2\u6210\u529F\u5220\u9664" });
      } else
        Laya.Scene.open("Scenes/uiDemo/Msg.ls", false, { "text": "\u6CA1\u6709\u52FE\u9009\u9879\uFF0C\u8BF7\u5148\u52FE\u9009" });
    }
    addMialItem() {
      var index = this.mailList.startIndex;
      let itemData = {
        "mailTitle": {
          "text": "\u8FD9\u91CC\u662F\u65B0\u589E\u52A0\u7684\u90AE\u4EF6" + index
        },
        "mailDateTime": {
          "text": this.timestampFormat("YYYY-MM-DD hh:mm")
        },
        "opt": {
          "visible": false
        },
        "flagStatus": {
          "skin": "resources/UI/images/comp/img_mail.png"
        },
        "flagBtn": {
          "label": "\u6807\u4E3A\u5DF2\u8BFB",
          "labelColors": "#000000,#000000,#000000"
        }
      };
      this.mailList.array.splice(index, 0, itemData);
      if (this.optStatus.length > 0) {
        for (let i = 0; i < this.optStatus.length; i++) {
          if (this.optStatus[i] >= index) {
            this.optStatus[i] += 1;
          }
        }
      }
      this.mailList.refresh();
    }
    onListMouse(e, index) {
      if (e.type == Laya.Event.CLICK) {
        var optIndex = this.optStatus.indexOf(index);
        switch (e.target.name) {
          case "optBG":
            if (optIndex === -1) {
              this.mailList.array[index].opt = { "visible": true };
              this.optStatus.push(index);
            } else {
              this.mailList.array[index].opt = { "visible": false };
              this.optStatus.splice(optIndex, 1);
            }
            this.mailList.refresh();
            break;
          case "mailTitle":
            Laya.Scene.open("Scenes/uiDemo/page/Dialog.ls", false, { "title": this.mailList.array[index].mailTitle.text, "text": "\u90AE\u4EF6\u5185\u5BB9\uFF0C\u6B64\u5904\u7701\u75651000\u5B57\u2026\u2026\u2026\u2026\u2026\u2026\u2026\u2026" });
            this.mailList.array[index].flag = 1;
            this.mailList.array[index].flagStatus = { "skin": "resources/UI/images/comp/img_mail_open.png" };
            this.mailList.array[index].flagBtn = { "label": "\u6807\u4E3A\u672A\u8BFB", "labelColors": "#3277f3,#3277f3,#3277f3" };
            this.mailList.refresh();
            break;
          case "flagBtn":
            if (this.mailList.array[index].flag === 1) {
              this.mailList.array[index].flag = 0;
              this.mailList.array[index].flagStatus = { "skin": "resources/UI/images/comp/img_mail.png" };
              this.mailList.array[index].flagBtn = { "label": "\u6807\u4E3A\u5DF2\u8BFB", "labelColors": "#000000,#000000,#000000" };
            } else {
              this.mailList.array[index].flag = 1;
              this.mailList.array[index].flagStatus = { "skin": "resources/UI/images/comp/img_mail_open.png" };
              this.mailList.array[index].flagBtn = { "label": "\u6807\u4E3A\u672A\u8BFB", "labelColors": "#3277f3,#3277f3,#3277f3" };
            }
            this.mailList.refresh();
            break;
          case "delBtn":
            this.mailList.deleteItem(index);
            if (optIndex > -1) {
              this.optStatus.splice(optIndex, 1);
              for (let i = optIndex; i < this.optStatus.length; i++) {
                this.optStatus[i] -= 1;
              }
            }
            this.mailList.refresh();
            Laya.Scene.open("Scenes/uiDemo/Msg.ls", false, { "text": "\u5220\u9664\u6210\u529F" });
            break;
        }
      }
    }
  }, "MailListRT");
  __decorate29([
    property29(),
    __metadata("design:type", typeof (_a11 = typeof Laya !== "undefined" && Laya.List) === "function" ? _a11 : Object)
  ], MailListRT.prototype, "mailList", void 0);
  __decorate29([
    property29(),
    __metadata("design:type", typeof (_b9 = typeof Laya !== "undefined" && Laya.Button) === "function" ? _b9 : Object)
  ], MailListRT.prototype, "addMail", void 0);
  __decorate29([
    property29(),
    __metadata("design:type", typeof (_c8 = typeof Laya !== "undefined" && Laya.Button) === "function" ? _c8 : Object)
  ], MailListRT.prototype, "selectDel", void 0);
  __decorate29([
    property29(),
    __metadata("design:type", typeof (_d4 = typeof Laya !== "undefined" && Laya.Button) === "function" ? _d4 : Object)
  ], MailListRT.prototype, "selectFlag", void 0);
  MailListRT = __decorate29([
    regClass29(),
    __metadata("design:paramtypes", [])
  ], MailListRT);

  // E:/projects/laya3/demo_1_2d/src/scence/uiDemo/list/RefreshRT.ts
  var __decorate30 = __$decorate("9b44d1f3-0d20-4db5-92bc-76d94f3ace44", "../src/scence/uiDemo/list/RefreshRT.ts");
  var _a12;
  var _b10;
  var _c9;
  var _d5;
  var _e;
  var _f;
  var { regClass: regClass30, property: property30 } = Laya;
  var RefreshRT = /* @__PURE__ */ __name(class RefreshRT2 extends Laya.Script {
    constructor() {
      super();
      this.scrollBarIsStop = false;
      this.msgIdNow = 1;
      this.itemIsOpen = false;
      this.itemOpenId = -1;
      this.redHotStatus = [];
      this.mouseDown = false;
    }
    onEnable() {
      this.refreshList.array = this.createListData(9);
      this.refreshList.repeatY = this.refreshList.array.length;
      this.refreshList.vScrollBarSkin = "";
      this.toLine.on(Laya.Event.CLICK, this, this.onToLineBtn);
      this.toTop.on(Laya.Event.CLICK, this, this.onToTopBtn);
      this.toBottom.on(Laya.Event.CLICK, this, this.onToBottomBtn);
      this.refreshList.on(Laya.Event.MOUSE_UP, this, this.stageOnMouseUp);
      this.refreshList.on(Laya.Event.MOUSE_OUT, this, this.stageOnMouseUp);
      this.refreshList.scrollBar.stopMoveLimit = this.scrollBarIsStopBind.bind(this);
      this.refreshLimit("dragTopLimit", 80);
      this.refreshLimit("dragBottomLimit", 80, 20);
      this.refreshList.mouseHandler = new Laya.Handler(this, this.onListMouse);
    }
    stageOnMouseUp() {
      this.mouseDown = false;
    }
    refreshLimit(eventName, moveLimit, distance = 0, time = 2e3) {
      if (eventName === "dragTopLimit") {
        this.refreshList.scrollBar.topMoveLimit = moveLimit;
      } else if (eventName === "dragBottomLimit") {
        this.refreshList.scrollBar.bottomMoveLimit = moveLimit;
      }
      this.refreshList.scrollBar.on(eventName, this, () => {
        console.log("\u8FBE\u5230\u4E86\u6EDA\u52A8\u9650\u5236:" + eventName);
        this.refreshLoading.visible = true;
        if (eventName === "dragTopLimit") {
          this.refreshLoading.bottom = NaN;
          this.refreshLoading.top = distance;
          var _arr = this.createListData(5, "\u9876\u90E8\u65B0\u589E\u7684\u6807\u9898");
          _arr = _arr.concat(this.refreshList.array);
          var index = 0 + 5;
          var line = 0;
          if (this.redHotStatus.length > 0) {
            for (let i = 0; i < this.redHotStatus.length; i++) {
              this.redHotStatus[i] += 5;
            }
          }
        } else if (eventName === "dragBottomLimit") {
          this.refreshList.scrollBar.disableDrag = true;
          this.refreshLoading.top = NaN;
          this.refreshLoading.bottom = distance;
          var _arr = this.createListData(5, "\u5E95\u90E8\u65B0\u589E\u7684\u6807\u9898");
          _arr = this.refreshList.array.concat(_arr);
          var index = this.refreshList.array.length - 1;
          var line = index + 5;
        }
        this.scrollBarIsStop = true;
        Laya.timer.once(time, this, () => {
          this.refreshList.array = _arr;
          this.refreshList.scrollTo(line);
          this.refreshList.selectedIndex = index;
          this.scrollBarIsStop = false;
          this.refreshList.scrollBar.backToNormal();
          this.refreshLoading.visible = false;
        });
      });
    }
    onListMouse(e, index) {
      if (e.type == Laya.Event.MOUSE_DOWN) {
        this.mouseDown = true;
        if (this.itemIsOpen) {
          this.itemIsOpen = false;
          this.itemOpenId = -1;
          Laya.Tween.to(this.openedItem, { "x": 0 }, 500, null, Laya.Handler.create(this, () => {
            this.refreshList.scrollBar.disableDrag = false;
          }));
        } else {
          this.moveLastPos = e.target.globalToLocal(new Laya.Point(Laya.stage.mouseX, Laya.stage.mouseY));
          e.target.on(Laya.Event.MOUSE_MOVE, this, this.onItemBoxMouseMove, [e.target, index]);
        }
      }
      if (e.type == Laya.Event.MOUSE_UP) {
        this.mouseDown = false;
        this.itemOnMouseUp();
      }
      if (e.type == Laya.Event.CLICK) {
        if (e.target.name == "flag")
          this.onClickFlag(index);
        if (e.target.name == "del")
          this.onClickDel(index);
      }
    }
    itemOnMouseUp() {
      if (this.itemIsOpen) {
        var targetX;
        if (this.openedItem.x < -80) {
          targetX = -262;
        } else {
          this.itemIsOpen = false;
          targetX = 0;
        }
        if (targetX !== this.openedItem.x) {
          Laya.Tween.to(this.openedItem, { "x": targetX }, 500);
        }
        this.refreshList.scrollBar.disableDrag = false;
        if (this.itemOpenId !== -1) {
          this.openedItem.off(Laya.Event.MOUSE_MOVE, this, this.onItemBoxMouseMove);
          this.itemOpenId = -1;
        }
      }
    }
    onClickFlag(index) {
      var showRedHot = this.redHotStatus.indexOf(index);
      if (showRedHot == -1) {
        this.refreshList.array[index].avatar = {};
        this.refreshList.array[index].avatar.redHot = { "visible": true };
        this.refreshList.array[index].flag = { "flagText": { "text": "\u6807\u8BB0\u5DF2\u8BFB" } };
        this.redHotStatus.push(index);
      } else {
        this.refreshList.array[index].avatar = { "redHot": { "visible": false } };
        this.refreshList.array[index].flag = { "flagText": { "text": "\u6807\u8BB0\u672A\u8BFB" } };
        this.redHotStatus.splice(showRedHot, 1);
      }
      this.refreshList.refresh();
    }
    onClickDel(index) {
      this.refreshList.array.splice(index, 1);
      this.itemOpenId = -1;
      var showRedHot = this.redHotStatus.indexOf(index);
      if (showRedHot > -1) {
        this.redHotStatus.splice(index, 1);
      }
      if (this.redHotStatus.length > 0) {
        for (let i = 0; i < this.redHotStatus.length; i++) {
          this.redHotStatus[i] > index && (this.redHotStatus[i] += 1);
        }
      }
      this.refreshList.refresh();
    }
    onItemBoxMouseMove(item, index) {
      if (this.mouseDown) {
        let mousePos = item.globalToLocal(new Laya.Point(Laya.stage.mouseX, Laya.stage.mouseY));
        let moveX = this.moveLastPos.x - mousePos.x;
        let moveY = this.moveLastPos.y - mousePos.y;
        if (Math.abs(moveX) > Math.abs(moveY) && !this.itemIsOpen) {
          this.openedItem = item;
          this.itemIsOpen = true;
          this.refreshList.scrollBar.disableDrag = true;
          this.itemOpenId = index;
        }
        if (this.itemIsOpen) {
          this.openedItem.x -= moveX;
          if (this.openedItem.x < -262)
            this.openedItem.x = -262;
          else if (this.openedItem.x > 0)
            this.openedItem.x = 0;
        }
      } else {
        this.refreshList.scrollBar.disableDrag = false;
      }
    }
    scrollBarIsStopBind() {
      return this.scrollBarIsStop;
    }
    onToLineBtn() {
      let line = parseInt(this.lineNumber.text) - 1;
      this.refreshList.scrollTo(line);
      line < this.refreshList.array.length && (this.refreshList.selectedIndex = line);
    }
    onToTopBtn() {
      this.refreshList.scrollTo(0);
      this.refreshList.selectedIndex = 0;
    }
    onToBottomBtn() {
      let line = this.refreshList.array.length - 1;
      this.refreshList.scrollTo(line);
      this.refreshList.selectedIndex = line;
    }
    createListData(max = 5, msgTitle = "\u521D\u59CB\u6D4B\u8BD5\u6807\u9898") {
      let _Date = new Date();
      let _hour = _Date.getHours() < 10 ? "0" + _Date.getHours() : "" + _Date.getHours();
      let _minute = _Date.getMinutes() < 10 ? "0" + _Date.getMinutes() : "" + _Date.getMinutes();
      var _arr = [];
      for (var i = 0; i < max; i++) {
        let msgTime = { "text": _hour + " : " + _minute };
        _arr[i] = {};
        _arr[i].msgTime = msgTime;
        _arr[i].msgTitle = { "text": msgTitle + (this.msgIdNow + i) };
        _arr[i].avatar = { "redHot": { "visible": false } };
      }
      this.msgIdNow += i;
      return _arr;
    }
    onDisable() {
    }
  }, "RefreshRT");
  __decorate30([
    property30(),
    __metadata("design:type", typeof (_a12 = typeof Laya !== "undefined" && Laya.List) === "function" ? _a12 : Object)
  ], RefreshRT.prototype, "refreshList", void 0);
  __decorate30([
    property30(),
    __metadata("design:type", typeof (_b10 = typeof Laya !== "undefined" && Laya.Button) === "function" ? _b10 : Object)
  ], RefreshRT.prototype, "toLine", void 0);
  __decorate30([
    property30(),
    __metadata("design:type", typeof (_c9 = typeof Laya !== "undefined" && Laya.Button) === "function" ? _c9 : Object)
  ], RefreshRT.prototype, "toTop", void 0);
  __decorate30([
    property30(),
    __metadata("design:type", typeof (_d5 = typeof Laya !== "undefined" && Laya.Button) === "function" ? _d5 : Object)
  ], RefreshRT.prototype, "toBottom", void 0);
  __decorate30([
    property30(),
    __metadata("design:type", typeof (_e = typeof Laya !== "undefined" && Laya.Button) === "function" ? _e : Object)
  ], RefreshRT.prototype, "refreshLoading", void 0);
  __decorate30([
    property30(),
    __metadata("design:type", typeof (_f = typeof Laya !== "undefined" && Laya.Label) === "function" ? _f : Object)
  ], RefreshRT.prototype, "lineNumber", void 0);
  RefreshRT = __decorate30([
    regClass30(),
    __metadata("design:paramtypes", [])
  ], RefreshRT);

  // E:/projects/laya3/demo_1_2d/src/scence/uiDemo/list/TreeListRT.generated.ts
  var TreeListRTBase = class extends Laya.View {
  };
  __name(TreeListRTBase, "TreeListRTBase");

  // E:/projects/laya3/demo_1_2d/src/scence/uiDemo/list/TreeListRT.ts
  var __decorate31 = __$decorate("1895ad58-5c2c-428a-8da6-3035938d92a5", "../src/scence/uiDemo/list/TreeListRT.ts");
  var { regClass: regClass31, property: property31 } = Laya;
  var TreeListRT = /* @__PURE__ */ __name(class TreeListRT2 extends TreeListRTBase {
    onEnable() {
      this.tree1.xml = this.getTreeData(true);
      this.tree2.xml = this.getTreeData(false);
    }
    getTreeData(_static) {
      let treeData = "<data>";
      if (_static) {
        treeData += "<dir itemLabel='\u4E00\u7EA7\u76EE\u5F55\u4E00' isOpen='false'><file itemLabel='\u4E8C\u7EA7\u5B50\u98791 '/><file itemLabel='\u4E8C\u7EA7\u5B50\u98792 '/><file itemLabel='\u4E8C\u7EA7\u5B50\u98793 '/><file itemLabel='\u4E8C\u7EA7\u5B50\u98794 '/><file itemLabel='\u4E8C\u7EA7\u5B50\u98795 '/></dir><dir itemLabel='\u4E00\u7EA7\u76EE\u5F55\u4E8C' isOpen='true'><file itemLabel='\u4E8C\u7EA7\u5B50\u98791 '/><file itemLabel='\u4E8C\u7EA7\u5B50\u98792 '/><file itemLabel='\u4E8C\u7EA7\u5B50\u98793 '/></dir><dir itemLabel='\u4E00\u7EA7\u76EE\u5F55\u4E09' isOpen='false'><file itemLabel='\u4E8C\u7EA7\u5B50\u98791 '/><file itemLabel='\u4E8C\u7EA7\u5B50\u98792 '/><file itemLabel='\u4E8C\u7EA7\u5B50\u98793 '/><file itemLabel='\u4E8C\u7EA7\u5B50\u98794 '/><file itemLabel='\u4E8C\u7EA7\u5B50\u98795 '/></dir><file itemLabel='\u4E00\u7EA7\u5B50\u98791 '/><file itemLabel='\u4E00\u7EA7\u5B50\u98792 '/>";
      } else {
        for (let i = 0; i < 5; i++) {
          treeData += "<item title='\u76EE\u5F55" + (i + 1) + "' isOpen='true'>";
          for (let j = 0; j < 5; j++) {
            treeData += "<subpage title='\u5B50\u9879\u6807\u9898" + (j + 1) + "' />";
          }
          treeData += "</item>";
        }
      }
      treeData += "</data>";
      return Laya.Utils.parseXMLFromString(treeData);
      ;
    }
  }, "TreeListRT");
  TreeListRT = __decorate31([
    regClass31()
  ], TreeListRT);

  // E:/projects/laya3/demo_1_2d/src/scence/uiDemo/page/BaseUI.ts
  var __decorate32 = __$decorate("ec5933e1-3ec9-439b-a3c0-d708c7d94634", "../src/scence/uiDemo/page/BaseUI.ts");
  var { regClass: regClass32, property: property32 } = Laya;
  var BaseUI = /* @__PURE__ */ __name(class BaseUI2 extends Laya.Script {
    constructor() {
      super();
    }
    baseUI(ui) {
      this.window = ui;
      this.searchCloseButton(ui);
    }
    searchCloseButton(node) {
      for (let i = 0; i < node.numChildren; i++) {
        let child = node.getChildAt(i);
        if (child instanceof Laya.Button && child.name == "closeBtn") {
          child.on(Laya.Event.MOUSE_DOWN, this, () => {
            this.window.close();
          });
          console.log("baseUI \u53D1\u73B0closeBtn\uFF0C\u7EDF\u4E00\u6DFB\u52A0\u5173\u95ED\u4E8B\u4EF6");
        } else
          this.searchCloseButton(child);
      }
    }
    onDisable() {
    }
  }, "BaseUI");
  BaseUI = __decorate32([
    regClass32(),
    __metadata("design:paramtypes", [])
  ], BaseUI);
  var BaseUI_default = BaseUI;

  // E:/projects/laya3/demo_1_2d/src/scence/uiDemo/page/OpenMainScene.generated.ts
  var OpenMainSceneBase = class extends Laya.Scene {
  };
  __name(OpenMainSceneBase, "OpenMainSceneBase");

  // E:/projects/laya3/demo_1_2d/src/scence/uiDemo/page/OpenMainScene.ts
  var __decorate33 = __$decorate("250d5f92-ad37-4e17-b0a9-05915d03e09b", "../src/scence/uiDemo/page/OpenMainScene.ts");
  var { regClass: regClass33, property: property33 } = Laya;
  var OpenMainScene = /* @__PURE__ */ __name(class OpenMainScene2 extends OpenMainSceneBase {
    onEnable() {
    }
    onDisable() {
    }
  }, "OpenMainScene");
  OpenMainScene = __decorate33([
    regClass33()
  ], OpenMainScene);

  // E:/projects/laya3/demo_1_2d/src/scence/uiDemo/page/OpenMainSceneScript.ts
  var __decorate34 = __$decorate("bad37b25-0b3f-4f78-b0e8-aa964fe6de15", "../src/scence/uiDemo/page/OpenMainSceneScript.ts");
  var { regClass: regClass34, property: property34 } = Laya;
  var OpenMainSceneScript = /* @__PURE__ */ __name(class OpenMainSceneScript2 extends BaseUI_default {
    constructor() {
      super();
    }
    onEnable() {
      this.ui = this.owner;
      this.baseUI(this.ui);
    }
    onDisable() {
    }
  }, "OpenMainSceneScript");
  OpenMainSceneScript = __decorate34([
    regClass34(),
    __metadata("design:paramtypes", [])
  ], OpenMainSceneScript);

  // E:/projects/laya3/demo_1_2d/src/scence/uiDemo/page/OpenScene.generated.ts
  var OpenSceneBase = class extends Laya.Scene {
  };
  __name(OpenSceneBase, "OpenSceneBase");

  // E:/projects/laya3/demo_1_2d/src/scence/uiDemo/page/OpenScene.ts
  var __decorate35 = __$decorate("7f7da5ee-1dfc-4f0e-baae-c9bc61757eb7", "../src/scence/uiDemo/page/OpenScene.ts");
  var { regClass: regClass35, property: property35 } = Laya;
  var OpenScene = /* @__PURE__ */ __name(class OpenScene2 extends OpenSceneBase {
    constructor() {
      super();
      this.name1 = "\u6211\u662FOpenSceneRuntime";
    }
    onEnable() {
      console.log("OpenScene onEnable\uFF1A" + this.name1);
    }
    getName() {
      console.log(this.name1);
    }
    onDisable() {
    }
  }, "OpenScene");
  OpenScene = __decorate35([
    regClass35(),
    __metadata("design:paramtypes", [])
  ], OpenScene);

  // E:/projects/laya3/demo_1_2d/src/scence/uiDemo/page/OpenSceneScript.ts
  var __decorate36 = __$decorate("982cfbc4-524c-477f-bc7c-311ac3b02bb4", "../src/scence/uiDemo/page/OpenSceneScript.ts");
  var { regClass: regClass36, property: property36 } = Laya;
  var OpenSceneScript = /* @__PURE__ */ __name(class OpenSceneScript2 extends BaseUI_default {
    constructor() {
      super();
    }
    onEnable() {
      this.ui = this.owner;
      this.ui.name1 = "\u6211\u5728\u4F7F\u7528OpenSceneScript";
      this.ui.getName();
      this.baseUI(this.ui);
      this.ui.window.on(Laya.Event.MOUSE_DOWN, this, () => {
        this.ui.window.startDrag();
      });
    }
    onDisable() {
    }
  }, "OpenSceneScript");
  OpenSceneScript = __decorate36([
    regClass36(),
    __metadata("design:paramtypes", [])
  ], OpenSceneScript);

  // E:/projects/laya3/demo_1_2d/src/scence/uiDemo/page/UsePanelRT.ts
  var __decorate37 = __$decorate("f6cd525b-d58a-46b4-a876-8e89636ed54b", "../src/scence/uiDemo/page/UsePanelRT.ts");
  var _a13;
  var _b11;
  var { regClass: regClass37, property: property37 } = Laya;
  var Event6 = Laya.Event;
  var Mouse = Laya.Mouse;
  var UsePanelRT = /* @__PURE__ */ __name(class UsePanelRT2 extends Laya.Script {
    constructor() {
      super();
    }
    onEnable() {
      if (!Laya.Browser.onPC) {
        this.topLab.changeText("\u80CC\u666F\u53EF\u62D6\u62FD\uFF0C\u53CC\u6307\u7F29\u653E\u6539\u53D8\u5927\u5C0F");
      } else {
        this.panel.on(Event6.MOUSE_OVER, this, () => {
          Mouse.cursor = "move";
        });
        this.panel.on(Event6.MOUSE_OUT, this, () => {
          Mouse.cursor = "auto";
        });
      }
    }
  }, "UsePanelRT");
  __decorate37([
    property37(),
    __metadata("design:type", typeof (_a13 = typeof Laya !== "undefined" && Laya.Label) === "function" ? _a13 : Object)
  ], UsePanelRT.prototype, "topLab", void 0);
  __decorate37([
    property37(),
    __metadata("design:type", typeof (_b11 = typeof Laya !== "undefined" && Laya.Panel) === "function" ? _b11 : Object)
  ], UsePanelRT.prototype, "panel", void 0);
  UsePanelRT = __decorate37([
    regClass37(),
    __metadata("design:paramtypes", [])
  ], UsePanelRT);

  // E:/projects/laya3/demo_1_2d/src/scence/uiDemo/useUI/ChangeTextureRT.ts
  var __decorate38 = __$decorate("ba580231-67c2-40a8-a285-22729e96c916", "../src/scence/uiDemo/useUI/ChangeTextureRT.ts");
  var _a14;
  var _b12;
  var _c10;
  var _d6;
  var { regClass: regClass38, property: property38 } = Laya;
  var ChangeTextureRT = /* @__PURE__ */ __name(class ChangeTextureRT2 extends Laya.Script {
    constructor() {
      super();
    }
    onEnable() {
      this.graphics = this.graphicsSprite.graphics;
      Laya.timer.loop(2e3, this, () => {
        this.changeImgSkin();
        this.changeSpriteTexture();
        this.changeFillTexture();
        this.changeTexture();
      });
    }
    changeImgSkin() {
      this.Img.skin = this.randomImg();
    }
    changeSpriteTexture() {
      this.spImg.loadImage(this.randomImg(true, 6, 5));
    }
    changeFillTexture() {
      this.graphics.clear();
      let imgTexture = this.randomImg(true, 4);
      Laya.loader.load(imgTexture).then((res) => {
        this.graphics.fillTexture(res, 0, 0, 1, 1);
      });
    }
    changeTexture() {
      this.textureImg.graphics.clear();
      let _texture = Laya.loader.getRes(this.randomImg(true, 8));
      this.textureImg.graphics.drawTexture(_texture);
    }
    randomImg(isMan = false, max = 8, min = 1) {
      let mum = Math.floor(Math.random() * (max - min + 1)) + min;
      if (isMan)
        return "resources/UI/role/m" + mum + ".png";
      return "resources/UI/role/w" + mum + ".png";
    }
    onDisable() {
    }
  }, "ChangeTextureRT");
  __decorate38([
    property38(),
    __metadata("design:type", typeof (_a14 = typeof Laya !== "undefined" && Laya.Image) === "function" ? _a14 : Object)
  ], ChangeTextureRT.prototype, "Img", void 0);
  __decorate38([
    property38(),
    __metadata("design:type", typeof (_b12 = typeof Laya !== "undefined" && Laya.Image) === "function" ? _b12 : Object)
  ], ChangeTextureRT.prototype, "spImg", void 0);
  __decorate38([
    property38(),
    __metadata("design:type", typeof (_c10 = typeof Laya !== "undefined" && Laya.Sprite) === "function" ? _c10 : Object)
  ], ChangeTextureRT.prototype, "graphicsSprite", void 0);
  __decorate38([
    property38(),
    __metadata("design:type", typeof (_d6 = typeof Laya !== "undefined" && Laya.Sprite) === "function" ? _d6 : Object)
  ], ChangeTextureRT.prototype, "textureImg", void 0);
  ChangeTextureRT = __decorate38([
    regClass38(),
    __metadata("design:paramtypes", [])
  ], ChangeTextureRT);

  // E:/projects/laya3/demo_1_2d/src/scence/uiDemo/useUI/MaskRT.generated.ts
  var MaskRTBase = class extends Laya.View {
  };
  __name(MaskRTBase, "MaskRTBase");

  // E:/projects/laya3/demo_1_2d/src/scence/uiDemo/useUI/MaskRT.ts
  var __decorate39 = __$decorate("cedd2b06-c112-4fd2-9526-072299ded214", "../src/scence/uiDemo/useUI/MaskRT.ts");
  var { regClass: regClass39, property: property39 } = Laya;
  var Event7 = Laya.Event;
  var MaskRT = /* @__PURE__ */ __name(class MaskRT2 extends MaskRTBase {
    onEnable() {
      this._hitArea.on(Event7.MOUSE_DOWN, this, () => {
        this._hitArea.off(Event7.MOUSE_MOVE, this, this.bg3MaskMove);
        this._hitArea.startDrag();
        this._hitArea.on(Event7.MOUSE_MOVE, this, this.bg3MaskMove);
      });
      this._mask.on(Event7.MOUSE_MOVE, this, this.maskMove);
    }
    bg3MaskMove(e) {
      e.stopPropagation();
      this.bg3Mask.x = this._hitArea.x;
      this.bg3Mask.y = this._hitArea.y;
    }
    maskMove() {
      let _point = this.globalToLocal(new Laya.Point(Laya.stage.mouseX, Laya.stage.mouseY)), maskX = _point.x - this._mask.width / this.bg2.scaleX / 2, maskY = _point.y - this._mask.height / this.bg2.scaleY / 2;
      if (maskX > 80 && maskY > 80) {
        this._mask.x = _point.x - this._mask.width / this.bg2.scaleX / 2;
        this._mask.y = _point.y - this._mask.height / this.bg2.scaleY / 2;
        this.bg2.x = (-_point.x - this._mask.width / 2) * (this.bg2.scaleX - 1);
        this.bg2.y = (-_point.y - this._mask.height / 2) * (this.bg2.scaleY - 1);
      }
    }
  }, "MaskRT");
  MaskRT = __decorate39([
    regClass39()
  ], MaskRT);

  // E:/projects/laya3/demo_1_2d/src/scence/uiDemo/useUI/MouseThroughRT.ts
  var __decorate40 = __$decorate("0262d44e-1b4d-49a5-bacc-bf56db4e60ca", "../src/scence/uiDemo/useUI/MouseThroughRT.ts");
  var _a15;
  var _b13;
  var _c11;
  var _d7;
  var _e2;
  var _f2;
  var _g;
  var { regClass: regClass40, property: property40 } = Laya;
  var TextShowRT = /* @__PURE__ */ __name(class TextShowRT2 extends Laya.Script {
    constructor() {
      super();
    }
    onEnable() {
      this.changeMouseCursor();
      this.throughTab.selectHandler = new Laya.Handler(this, this.onSwitchTab);
    }
    onSwitchTab(index) {
      switch (index) {
        case 0:
          this.leftBg.hitTestPrior = true;
          this.rightBg.hitTestPrior = true;
          break;
        case 1:
          this.leftBg.hitTestPrior = false;
          this.rightBg.hitTestPrior = false;
          break;
      }
    }
    changeMouseCursor() {
      this.leftBg.on(Laya.Event.MOUSE_OVER, this, () => {
        Laya.Mouse.cursor = "move";
      });
      this.leftBg.on(Laya.Event.MOUSE_OUT, this, () => {
        Laya.Mouse.cursor = "auto";
      });
      this.rightBg.on(Laya.Event.MOUSE_OVER, this, () => {
        Laya.Mouse.cursor = "move";
      });
      this.rightBg.on(Laya.Event.MOUSE_OUT, this, () => {
        Laya.Mouse.cursor = "auto";
      });
      this.leftBg.on(Laya.Event.CLICK, this, () => {
        Laya.Scene.open("Scenes/uiDemo/Msg.ls", false, { "text": "\u70B9\u51FB\u4E86\u5DE6\u4FA7\u7684\u53EF\u70B9\u51FB\u533A\u57DF", "point": { x: Laya.stage.mouseX - 100 } });
        console.log("click " + this.leftBg.name);
      });
      this.rightBg.on(Laya.Event.CLICK, this, () => {
        Laya.Scene.open("Scenes/uiDemo/Msg.ls", false, { "text": "\u70B9\u51FB\u4E86\u53F3\u4FA7\u7684\u53EF\u70B9\u51FB\u533A\u57DF", "point": { x: Laya.stage.mouseX - 120 } });
        console.log("click " + this.rightBg.name);
      });
      this.btn1.on(Laya.Event.CLICK, this, (e) => {
        e.stopPropagation();
        Laya.Scene.open("Scenes/uiDemo/Msg.ls", false, { "text": "\u70B9\u51FB\u4E86\u6D4B\u8BD5\u6309\u94AE1" });
        console.log("click btn1");
      });
      this.btn2.on(Laya.Event.CLICK, this, (e) => {
        e.stopPropagation();
        Laya.Scene.open("Scenes/uiDemo/Msg.ls", false, { "text": "\u70B9\u51FB\u4E86\u6D4B\u8BD5\u6309\u94AE2" });
        console.log("click btn2");
      });
      this.close1.on(Laya.Event.CLICK, this, (e) => {
        e.stopPropagation();
        Laya.Scene.open("Scenes/uiDemo/Msg.ls", false, { "text": "\u70B9\u51FB\u4E86\u5DE6\u4FA7\u5173\u95ED\u6309\u94AE", "point": { x: Laya.stage.mouseX - 100 } });
        console.log("click " + this.close1.name);
      });
      this.close2.on(Laya.Event.CLICK, this, (e) => {
        e.stopPropagation();
        Laya.Scene.open("Scenes/uiDemo/Msg.ls", false, { "text": "\u70B9\u51FB\u4E86\u53F3\u4FA7\u5173\u95ED\u6309\u94AE", "point": { x: Laya.stage.mouseX - 120 } });
        console.log("click " + this.close2.name);
      });
    }
    onDisable() {
    }
  }, "TextShowRT");
  __decorate40([
    property40(),
    __metadata("design:type", typeof (_a15 = typeof Laya !== "undefined" && Laya.Tab) === "function" ? _a15 : Object)
  ], TextShowRT.prototype, "throughTab", void 0);
  __decorate40([
    property40(),
    __metadata("design:type", typeof (_b13 = typeof Laya !== "undefined" && Laya.Sprite) === "function" ? _b13 : Object)
  ], TextShowRT.prototype, "leftBg", void 0);
  __decorate40([
    property40(),
    __metadata("design:type", typeof (_c11 = typeof Laya !== "undefined" && Laya.Sprite) === "function" ? _c11 : Object)
  ], TextShowRT.prototype, "rightBg", void 0);
  __decorate40([
    property40(),
    __metadata("design:type", typeof (_d7 = typeof Laya !== "undefined" && Laya.Button) === "function" ? _d7 : Object)
  ], TextShowRT.prototype, "btn1", void 0);
  __decorate40([
    property40(),
    __metadata("design:type", typeof (_e2 = typeof Laya !== "undefined" && Laya.Button) === "function" ? _e2 : Object)
  ], TextShowRT.prototype, "btn2", void 0);
  __decorate40([
    property40(),
    __metadata("design:type", typeof (_f2 = typeof Laya !== "undefined" && Laya.Sprite) === "function" ? _f2 : Object)
  ], TextShowRT.prototype, "close1", void 0);
  __decorate40([
    property40(),
    __metadata("design:type", typeof (_g = typeof Laya !== "undefined" && Laya.Sprite) === "function" ? _g : Object)
  ], TextShowRT.prototype, "close2", void 0);
  TextShowRT = __decorate40([
    regClass40(),
    __metadata("design:paramtypes", [])
  ], TextShowRT);

  // E:/projects/laya3/demo_1_2d/src/scence/uiDemo/useUI/PhysicalCollisionRT.ts
  var __decorate41 = __$decorate("8e9e65f1-666d-40bb-95c9-f538963105c9", "../src/scence/uiDemo/useUI/PhysicalCollisionRT.ts");
  var _a16;
  var _b14;
  var _c12;
  var _d8;
  var { regClass: regClass41, property: property41 } = Laya;
  var PhysicalCollisionRT = /* @__PURE__ */ __name(class PhysicalCollisionRT2 extends Laya.Script {
    onEnable() {
      this.bTop.getComponent(Laya.BoxCollider).width = this.bTop.width;
      this.bBottom.getComponent(Laya.BoxCollider).width = this.bBottom.width;
      this.bRight.getComponent(Laya.BoxCollider).height = this.bRight.height;
      this.bLeft.getComponent(Laya.BoxCollider).height = this.bLeft.height;
    }
  }, "PhysicalCollisionRT");
  __decorate41([
    property41(),
    __metadata("design:type", typeof (_a16 = typeof Laya !== "undefined" && Laya.Image) === "function" ? _a16 : Object)
  ], PhysicalCollisionRT.prototype, "bTop", void 0);
  __decorate41([
    property41(),
    __metadata("design:type", typeof (_b14 = typeof Laya !== "undefined" && Laya.Image) === "function" ? _b14 : Object)
  ], PhysicalCollisionRT.prototype, "bBottom", void 0);
  __decorate41([
    property41(),
    __metadata("design:type", typeof (_c12 = typeof Laya !== "undefined" && Laya.Image) === "function" ? _c12 : Object)
  ], PhysicalCollisionRT.prototype, "bRight", void 0);
  __decorate41([
    property41(),
    __metadata("design:type", typeof (_d8 = typeof Laya !== "undefined" && Laya.Image) === "function" ? _d8 : Object)
  ], PhysicalCollisionRT.prototype, "bLeft", void 0);
  PhysicalCollisionRT = __decorate41([
    regClass41()
  ], PhysicalCollisionRT);

  // E:/projects/laya3/demo_1_2d/src/scence/uiDemo/useUI/ProgressRT.generated.ts
  var ProgressRTBase = class extends Laya.View {
  };
  __name(ProgressRTBase, "ProgressRTBase");

  // E:/projects/laya3/demo_1_2d/src/scence/uiDemo/useUI/ProgressRT.ts
  var __decorate42 = __$decorate("f70f7b9f-6ad7-4638-8008-dfefce2cd03f", "../src/scence/uiDemo/useUI/ProgressRT.ts");
  var { regClass: regClass42, property: property42 } = Laya;
  var ProgressRT = /* @__PURE__ */ __name(class ProgressRT2 extends ProgressRTBase {
    onEnable() {
      this.testProgress();
      Laya.timer.frameOnce(1, this, () => {
        console.log("\u5B9A\u65F6\u5668\u5EF6\u8FDF\u4E00\u5E27\u6267\u884C");
      });
      Laya.timer.callLater(this, () => {
        console.log("\u5EF6\u8FDF\u6267\u884C");
      });
    }
    testProgress() {
      this.loading2.value = 0.01;
      this.loadText.changeText("\u8D44\u6E90\u52A0\u8F7D\u4E2D\u2026\u2026");
      Laya.timer.loop(100, this, this.changeProgress);
    }
    changeProgress() {
      this.loading2.value += 0.05;
      if (this.loading2.value == 1) {
        this.loadText.changeText("\u8D44\u6E90\u52A0\u8F7D\u5B8C\u6210");
        Laya.timer.clear(this, this.changeProgress);
        Laya.timer.once(3e3, this, () => {
          this.testProgress();
        });
      }
    }
  }, "ProgressRT");
  ProgressRT = __decorate42([
    regClass42()
  ], ProgressRT);

  // E:/projects/laya3/demo_1_2d/src/scence/uiDemo/useUI/TextShowRT.ts
  var __decorate43 = __$decorate("15c52e49-a416-4a70-aea5-7af289a9e254", "../src/scence/uiDemo/useUI/TextShowRT.ts");
  var _a17;
  var { regClass: regClass43, property: property43 } = Laya;
  var TextShowRT3 = /* @__PURE__ */ __name(class TextShowRT4 extends Laya.Script {
    onAwake() {
      this.loadBitmapFont();
    }
    loadBitmapFont() {
      let bitmapFont = new Laya.BitmapFont();
      bitmapFont.loadFont("resources/bitmapfont/gongfang.fnt", new Laya.Handler(this, this.onFontLoaded, [bitmapFont]));
    }
    onFontLoaded(bitmapFont) {
      Laya.Text.registerBitmapFont("gongfang", bitmapFont);
      this.btFont.font = "gongfang";
    }
  }, "TextShowRT");
  __decorate43([
    property43(),
    __metadata("design:type", typeof (_a17 = typeof Laya !== "undefined" && Laya.Label) === "function" ? _a17 : Object)
  ], TextShowRT3.prototype, "btFont", void 0);
  TextShowRT3 = __decorate43([
    regClass43()
  ], TextShowRT3);
})();
//# sourceMappingURL=bundle.js.map
