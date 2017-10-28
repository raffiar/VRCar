import * as RODIN from 'rodin/main';

export class Car extends RODIN.Sculpt{
    constructor() {
        super();

        const body = new RODIN.Sculpt('./models/car/body.obj');
        body.on(RODIN.CONST.READY, (evt) => {
            this.add(evt.target);
        });

        const startBtn = new RODIN.Sculpt('./models/car/start_btn.obj');
        startBtn.on(RODIN.CONST.READY, (evt) => {
            evt.target.position.set(-0.22, 0.895, -0.03);
            this.add(evt.target);
        });

        const door = new RODIN.Sculpt('./models/car/door.obj');
        door.on(RODIN.CONST.READY, (evt) => {
            evt.target.position.set(-1.029, 0.763, -0.4);
            this.add(evt.target);
        });

        const ruchnik = new RODIN.Sculpt('./models/car/ruchnik.obj');
        ruchnik.on(RODIN.CONST.READY, (evt) => {
            evt.target.position.set(-0.008, 0.537, 0.272);
            this.add(evt.target);
        });

        function mergeModel(obj, materialIndex = 0) {
            let finalGeo =new THREE.Geometry();
            for (let i = 0; i < obj.children.length; i++) {
                finalGeo.merge(new THREE.Geometry().fromBufferGeometry(obj.children[""+i].geometry));
            }
            return new THREE.Mesh(finalGeo, obj.children[""+materialIndex].material);
        }
    }
}