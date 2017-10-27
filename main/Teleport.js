import * as R from 'rodin/main';

class Teleport {
    constructor(Scene) {
        this.mainScene = Scene;
        this.portal = new R.Box(0.5, 0.5);
        this.portal.position.set(0, 1.6, -1);
        this.initTeleport();
    }

    initTeleport() {
        this.mainScene.on(R.CONST.GAMEPAD_MOVE, (e) => {
            if (e.gamepad instanceof R.MouseGamePad) {
                this.portal.visible = true;
                this.portal.parent = R.Scene.active;
                this.portal.position.copy(e.point)
            }
        });
        this.mainScene.on(R.CONST.GAMEPAD_BUTTON_DOWN, (e) => {
            if (e.button.keyCode === R.CONST.MOUSE_LEFT) {
                this.buttonDownTime = Date.now();
            }
        });
        this.mainScene.on(R.CONST.GAMEPAD_HOVER_OUT, (e) => {
            if (e.gamepad instanceof R.MouseGamePad) {
                this.portal.visible = false;
            }
        });
        this.mainScene.on(R.CONST.GAMEPAD_BUTTON_UP, (e) => {
            if (e.button.keyCode === R.CONST.MOUSE_LEFT) {
                if(!this.buttonDownTime) return;
                if(Date.now() - this.buttonDownTime < 200){
                    this.teleport(undefined, e.point, e.target.name);
                }

            }
        });
    }
    teleport(avatar = R.Avatar.active, pos, place) {
        if (!pos) return;
        avatar.position = pos;
    }
}

export default Teleport;