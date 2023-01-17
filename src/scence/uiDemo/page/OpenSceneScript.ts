const { regClass, property } = Laya;
import OpenScene from "./OpenScene";
import BaseUI from "./BaseUI";

@regClass()
export default class OpenSceneScript extends BaseUI { //统一继承自BaseUI，可以统一设置页面的关闭

    private ui: OpenScene;
    constructor() { super(); }

    onEnable(): void {

        //获得OpenScene runtime对象 
        this.ui = this.owner as OpenScene;

        //可以调用OpenScene runtime对象的属性和方法
        this.ui.name1 = "我在使用OpenSceneScript";
        this.ui.getName();

        //调用BaseUI基类，做通用处理
        this.baseUI(this.ui);

        //只对window做事件监听，可以拖拽window窗口
        this.ui.window.on(Laya.Event.MOUSE_DOWN, this, () => { this.ui.window.startDrag(); });        
    }

    onDisable(): void {
    }
}