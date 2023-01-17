import { OpenSceneBase } from "./OpenScene.generated";

const { regClass, property } = Laya;

@regClass()
export default class OpenScene extends OpenSceneBase {


    public name1: string = "我是OpenSceneRuntime";
    constructor() { super(); }

    onEnable(): void {
        
        console.log("OpenScene onEnable：" + this.name1);

    }

    getName(): void
    {
        console.log(this.name1);
    }

    onDisable(): void {
    }
}