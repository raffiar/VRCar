import * as RODIN from 'rodin/main';

class Teleport {
    constructor(Scene) {
        this.mainScene = Scene;
        this.portal = new RODIN.Box(0.2, 0.2);
        this.portal.position.set(0, 1.6, -1);
        this.initTeleport();
        Teleport.canMove = true;
    }

    initTeleport() {
        this.mainScene.on(RODIN.CONST.GAMEPAD_MOVE, (e) => {
            if(!this.portal.visible) {
                this.portal.visible = true;
            }
            this.portal.parent = RODIN.Scene.active;
            this.portal.position.copy(e.point)
        });
        this.mainScene.on(RODIN.CONST.GAMEPAD_BUTTON_DOWN, (e) => {
            this.buttonDownTime = Date.now();
        });
        this.mainScene.on(RODIN.CONST.GAMEPAD_HOVER_OUT, (e) => {
            this.portal.visible = false;
        });
        this.mainScene.on(RODIN.CONST.GAMEPAD_BUTTON_UP, (e) => {
            if (!this.buttonDownTime) return;
            if (Date.now() - this.buttonDownTime < 200) {
                this.teleport(undefined, e.point, e.target.name);
            }
        });
    }

    teleport(avatar = RODIN.Avatar.active, pos, place) {
        if(Teleport.canMove) {
            if (!pos) return;
            avatar.position = pos;
        }
    }
}

export default Teleport;