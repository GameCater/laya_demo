import { ProgressRTBase } from "./ProgressRT.generated";

const { regClass, property } = Laya;


@regClass()
export default class ProgressRT extends ProgressRTBase {


    onEnable(): void {
        // let animator: Laya.Animator2D = this.ani1.getComponent<Laya.Animator2D>(Laya.Animator2D);
        // animator.play("cd");
        // Laya.timer.once(3000, this, () => {
        //     animator.play("cd");
        // });

        // this.ani1.on(Laya.Event.COMPLETE, this, () => {
        //     this.ani1.stop();
        //     //间隔3秒再次播放
        //     Laya.timer.once(3000, this, () => {
        //         this.ani1.play();
        //     });
        // });

        
        this.testProgress();

        Laya.timer.frameOnce(1, this, () => {
            console.log('定时器延迟一帧执行');
        });

        // 优先级更高，在渲染之前执行
        Laya.timer.callLater(this, () => {
            console.log('延迟执行');
        });
    }

    /**
     * 测试加载效果
     */
    testProgress(): void {
        this.loading2.value = 0.01;
        this.loadText.changeText("资源加载中……")
        Laya.timer.loop(100, this, this.changeProgress);
    }

    //这里仅模拟加载演示效果，正常的加载流程，请查看LoadingRuntime类
    changeProgress(): void {
        this.loading2.value += 0.05;
        if (this.loading2.value == 1) {
            this.loadText.changeText("资源加载完成")
            Laya.timer.clear(this, this.changeProgress);

            //间隔3秒再次测试
            Laya.timer.once(3000, this, () => {
                this.testProgress();
            });
        }
    }
}