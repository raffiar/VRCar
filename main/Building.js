import * as RODIN from 'rodin/main';

export class Building extends RODIN.Sculpt{
    constructor() {
        super();
        const building_02 = new RODIN.Sculpt('./models/building/building_02.obj');
        building_02.on(RODIN.CONST.READY, (evt) => {
            evt.target._threeObject = mergeModel(evt.target._threeObject);
            evt.target._threeObject.castShadow = true;
            evt.target._threeObject.receiveShadow  = false;
            this.add(evt.target);
        });

        const building_03 = new RODIN.Sculpt('./models/building/building_03.obj');
        building_03.on(RODIN.CONST.READY, (evt) => {
            evt.target._threeObject = mergeModel(evt.target._threeObject);
            evt.target._threeObject.castShadow = true;
            evt.target._threeObject.receiveShadow  = false;
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