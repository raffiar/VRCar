import * as RODIN from 'rodin/main';
import carBody from './car_details.js';
export class Car extends RODIN.Sculpt {
    constructor() {
        super();
        this.add(carBody);
        this.gazePoint = new RODIN.GazePoint();

        this.startBtn = new RODIN.Sculpt('./models/car/start_btn.obj');
        this.startBtn.on(RODIN.CONST.READY, (evt) => {
            evt.target.position.set(-0.22, 0.895, -0.03);
            this.add(evt.target);
        });

        this.startBtn.on(RODIN.CONST.GAMEPAD_HOVER, this.onStartBtnHover.bind(this));
        this.startBtn.on(RODIN.CONST.GAMEPAD_HOVER_OUT, this.onStartBtnHoverOut.bind(this));

        this.door = new RODIN.Sculpt('./models/car/door.obj');
        this.door.on(RODIN.CONST.READY, (evt) => {
            evt.target.position.set(-1.029, 0.763, -0.4);
            this.add(evt.target);
        });

        this.door.on(RODIN.CONST.GAMEPAD_HOVER, this.onDoorHover.bind(this));
        this.door.on(RODIN.CONST.GAMEPAD_HOVER_OUT, this.onDoorHoverOut.bind(this));

        this.door.on(RODIN.CONST.GAMEPAD_BUTTON_DOWN, (e) => {
            e.stopPropagation();
            RODIN.Avatar.active.position = {x: -.1, y: -0.3, z: -4.35}
        });
        this.transmission = new RODIN.Sculpt('./models/car/ruchnik.obj');

        this.transmission.on(RODIN.CONST.READY, (evt) => {
            evt.target.position.set(-0.008, 0.537, 0.272);
            this.add(evt.target);
        });

        this.transmission.on(RODIN.CONST.GAMEPAD_HOVER, this.onTransHover.bind(this));

        this.transmission.on(RODIN.CONST.GAMEPAD_HOVER_OUT, this.onTransHoverOut.bind(this));

        this.transmission.on(RODIN.CONST.GAMEPAD_BUTTON_DOWN, (e) => {
            e.stopPropagation();
        });

    }

    onDoorHover() {
        this.updateEmissive({childs: this.door._threeObject.children, b: .05, r: .002});
        this.gazePoint.Sculpt.scale.set(2, 2, 2)
    }

    onDoorHoverOut() {
        this.updateEmissive({childs: this.door._threeObject.children});
        this.gazePoint.Sculpt.scale.set(0, 0, 0)
    }

    onTransHover() {
        this.updateEmissive({childs: this.transmission._threeObject.children, r:.32,b:.32,g: .32});
        this.gazePoint.Sculpt.scale.set(2, 2, 2)
    }

    onTransHoverOut() {
        this.updateEmissive({childs: this.transmission._threeObject.children});
        this.gazePoint.Sculpt.scale.set(0, 0, 0)
    }

    onStartBtnHover() {

    }

    onStartBtnHoverOut() {

    }
    updateEmissive({childs, r = 0, g = 0, b = 0}) {
        childs.map((el) => {
            if (el.material.emissive) {
                el.material.emissive = {r, g, b}
            }
        });
    }
}