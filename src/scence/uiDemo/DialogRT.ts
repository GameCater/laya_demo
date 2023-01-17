import { DialogRTBase } from "./DialogRT.generated";

const { regClass, property } = Laya;

@regClass()
export default class DialogRT extends DialogRTBase {
 

    constructor() { super(); }

    onAwake(): void {

        this.dialogTitle.text = "";
        this.dialogText.text = "";

        this.closeBtn.on(Laya.Event.CLICK, this, () => {
            this.close();
        });
    }

    onOpened(param: any = null): void {
        if (param) {
            this.dialogTitle.text = param.title;
            this.dialogText.text = param.text;
        }
    }

    onDisable(): void {
    }
}