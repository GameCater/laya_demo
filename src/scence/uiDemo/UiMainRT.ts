const { regClass, property } = Laya;

import IframeElementRT from "./page/IframeElementRT";
import { UiMainRTBase } from "./UiMainRT_gen";


@regClass()
export default class UiMainRT extends UiMainRTBase {    

    constructor() {
        super();
    }

    onEnable(): void {
        //在开启物理辅助线的情况下，设置默认隐藏
        Laya.PhysicsDebugDraw.I && Laya.PhysicsDebugDraw.I.visible && (Laya.PhysicsDebugDraw.I.visible = false);

        this.tabBindViewStack();
        // this.onClicked();
        this.topTab.selectedIndex = 0;
        this.item0Tab.selectedIndex = 0;
    }

    /**侦听某些点击事件  */
    // onClicked(): void {
    //     let openSceneBtn: Laya.Button = this.item2Tab.getChildByName("item2") as Laya.Button,
    //         openSceneBtn2: Laya.Button = this.item2Tab.getChildByName("item3") as Laya.Button,
    //         openDialogBtn: Laya.Button = this.item2Tab.getChildByName("item4") as Laya.Button;

    //     openSceneBtn.on(Laya.Event.MOUSE_DOWN, this, () => { 
    //         console.log('open scene ok');
    //         Laya.Scene.open("Scenes/uiDemo/page/OpenMainScene.ls", false) 
    //     });
    //     openSceneBtn2.on(Laya.Event.MOUSE_DOWN, this, () => { Laya.Scene.open("Scenes/uiDemo/page/OpenScene.ls", false) });
    //     openDialogBtn.on(Laya.Event.MOUSE_DOWN, this, () => { Laya.Scene.open("Scenes/uiDemo/page/Dialog.ls", false, { "title": "弹窗的标题", "text": "弹窗的具体文本……" }) });
    // }

    /**关联tab与ViewStack的索引关系*/
    tabBindViewStack(): void {
        //关联顶部tab的选项与ViewStack的索引关系
        this.topTab.selectHandler = new Laya.Handler(this, (index: number) => {
            this.tabPage.selectedIndex = index;
            if( index == 1 )
                this.item1Tab.selectedIndex = 0;
            if( index == 2 )
                this.item2Tab.selectedIndex = 0;
            if( index == 3 )
                this.item3Tab.selectedIndex = 0;
            if( index == 4 )
                this.item4Tab.selectedIndex = 0;
            //处理物理辅助线
            Laya.PhysicsDebugDraw.I && Laya.PhysicsDebugDraw.I.visible && (Laya.PhysicsDebugDraw.I.visible = false);
            //处理DOM视频
            !!IframeElementRT.instance.iframeElement && IframeElementRT.instance.closeVideo();
            index == 2 && this.item2Page.selectedIndex == 1 && !IframeElementRT.instance.iframeElement && IframeElementRT.instance.createElementVideo();
            
        });

        //关联子级tab选项与ViewStack的索引关系
        this.item0Tab.selectHandler = new Laya.Handler(this, (index: number) => {
            this.item0Page.selectedIndex = index;
        });
        this.item1Tab.selectHandler = new Laya.Handler(this, (index: number) => {
            this.item1Page.selectedIndex = index;
            if (index !== 4 && Laya.PhysicsDebugDraw.I && Laya.PhysicsDebugDraw.I.visible) Laya.PhysicsDebugDraw.I.visible = false;
            else if (index == 4 && Laya.PhysicsDebugDraw.I && !Laya.PhysicsDebugDraw.I.visible) Laya.PhysicsDebugDraw.I.visible = true;
        });
        this.item2Tab.selectHandler = new Laya.Handler(this, (index: number) => {
            this.item2Page.selectedIndex = index;
            switch (index) {
                case 1:
                    !IframeElementRT.instance.iframeElement && IframeElementRT.instance.createElementVideo();
                    break;
                case 2:
                    Laya.Scene.open("Scenes/uiDemo/page/OpenMainScene.ls", false);
                    break;
                case 3:
                    Laya.Scene.open("Scenes/uiDemo/page/OpenScene.ls", false);
                    break;
                case 4:
                    
                    Laya.Scene.open("Scenes/uiDemo/page/Dialog.ls", false, { "title": "弹窗的标题", "text": "弹窗的具体文本……" });
                    break;
            }

            index !== 1 && !!IframeElementRT.instance.iframeElement && IframeElementRT.instance.closeVideo();
        });
        this.item3Tab.selectHandler = new Laya.Handler(this, (index: number) => {
            this.item3Page.selectedIndex = index
        });
        this.item4Tab.selectHandler = new Laya.Handler(this, (index: number) => {
            this.item4Page.selectedIndex = index
        });
    }

    onDisable(): void {
        console.log('disabled');
    }
}