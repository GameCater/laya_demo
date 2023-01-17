import { IndexRTBase } from "./IndexRT.generated";

const { regClass, property } = Laya;

@regClass()
export default class IndexRT extends IndexRTBase {

    constructor() { super(); }

    onEnable(): void {

        console.log("IndexRT onEnable")
        //侦听ui按钮点击事件
        this.uiBtn.on(Laya.Event.CLICK, this, () => {
            //点击后，打开UI场景示例
            console.log("uiBtn");
            Laya.Scene.open("Scenes/UiMain.ls");//不要使用Laya.Scene.open("./Scenes/PhysicsGameMain.ls");
        });

        //侦听物理按钮点击事件
        this.phyBtn.on(Laya.Event.CLICK, this, () => {
            //点击后，打开物理游戏示例
            console.log("phyBtn");
            Laya.Scene.open("Scenes/PhysicsGameMain.ls");//不要使用Laya.Scene.open("./Scenes/PhysicsGameMain.ls");
        });

        //侦听3D混合按钮点击事件
        this.d3Btn.on(Laya.Event.CLICK, this, () => {
            //点击后，打开3D混合场景示例
            console.log("d3Btn");
            Laya.Scene.open("Scenes/D3Main.ls");//不要使用Laya.Scene.open("./Scenes/D3Main.ls");
        });

        
    }

    onDestroy(): void {

        if( this.uiBtn.hasListener( Laya.Event.CLICK ) )
            console.log("uiBtn有点击事件监听");

    }
}