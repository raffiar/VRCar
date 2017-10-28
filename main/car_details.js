import * as RODIN from 'rodin/main';

function mergeModel(obj, materialIndex = 0) {
    let finalGeo =new THREE.Geometry();
    for (let i = 0; i < obj.children.length; i++) {
        finalGeo.merge(new THREE.Geometry().fromBufferGeometry(obj.children[""+i].geometry));
    }
    return new THREE.Mesh(finalGeo, obj.children[""+materialIndex].material);
}

const carBody = new RODIN.Sculpt();

const body = new RODIN.Sculpt('./models/car/body.obj');
body.on(RODIN.CONST.READY, (evt) => {
    evt.target._threeObject = mergeModel(evt.target._threeObject);
    evt.target._threeObject.castShadow = true;
    evt.target._threeObject.receiveShadow  = false;
    carBody.add(evt.target);
});

const black = new RODIN.Sculpt('./models/car/black.obj');
black.on(RODIN.CONST.READY, (evt) => {
    evt.target._threeObject = mergeModel(evt.target._threeObject);
    evt.target._threeObject.castShadow = true;
    evt.target._threeObject.receiveShadow  = false;
    carBody.add(evt.target);
});

const fari_back = new RODIN.Sculpt('./models/car/fari_back.obj');
fari_back.on(RODIN.CONST.READY, (evt) => {
    evt.target._threeObject = mergeModel(evt.target._threeObject);
    carBody.add(evt.target);
});

const fari_metal_dark = new RODIN.Sculpt('./models/car/fari_metal_dark.obj');
fari_metal_dark.on(RODIN.CONST.READY, (evt) => {
    evt.target._threeObject = mergeModel(evt.target._threeObject);
    carBody.add(evt.target);
});

const glass = new RODIN.Sculpt('./models/car/glass.obj');
glass.on(RODIN.CONST.READY, (evt) => {
    evt.target._threeObject = mergeModel(evt.target._threeObject);
    evt.target._threeObject.material.side = THREE.DoubleSide;
    carBody.add(evt.target);
});

const interier_black = new RODIN.Sculpt('./models/car/interier_black.obj');
interier_black.on(RODIN.CONST.READY, (evt) => {
    evt.target._threeObject = mergeModel(evt.target._threeObject);
    evt.target._threeObject.castShadow = true;
    evt.target._threeObject.receiveShadow  = false;
    carBody.add(evt.target);
});

const interier_metalic = new RODIN.Sculpt('./models/car/interier_metalic.obj');
interier_metalic.on(RODIN.CONST.READY, (evt) => {
    evt.target._threeObject = mergeModel(evt.target._threeObject);
    evt.target._threeObject.castShadow = true;
    evt.target._threeObject.receiveShadow  = false;
    carBody.add(evt.target);
});

const interier_plastik = new RODIN.Sculpt('./models/car/interier_plastik.obj');
interier_plastik.on(RODIN.CONST.READY, (evt) => {
    evt.target._threeObject = mergeModel(evt.target._threeObject);
    evt.target._threeObject.castShadow = true;
    evt.target._threeObject.receiveShadow  = false;
    carBody.add(evt.target);
});

const light_fari = new RODIN.Sculpt('./models/car/light_fari.obj');
light_fari.on(RODIN.CONST.READY, (evt) => {
    evt.target._threeObject = mergeModel(evt.target._threeObject);
    carBody.add(evt.target);
});

const logo = new RODIN.Sculpt('./models/car/logo.obj');
logo.on(RODIN.CONST.READY, (evt) => {
    evt.target._threeObject = mergeModel(evt.target._threeObject);
    carBody.add(evt.target);
});

const mirror = new RODIN.Sculpt('./models/car/mirror.obj');
mirror.on(RODIN.CONST.READY, (evt) => {
    evt.target._threeObject = mergeModel(evt.target._threeObject);
    carBody.add(evt.target);
});

const red = new RODIN.Sculpt('./models/car/red.obj');
red.on(RODIN.CONST.READY, (evt) => {
    evt.target._threeObject = mergeModel(evt.target._threeObject);
    evt.target._threeObject.castShadow = true;
    evt.target._threeObject.receiveShadow  = false;
    carBody.add(evt.target);
});

const ruil = new RODIN.Sculpt('./models/car/ruil.obj');
ruil.on(RODIN.CONST.READY, (evt) => {
    evt.target._threeObject = mergeModel(evt.target._threeObject);
    evt.target._threeObject.castShadow = true;
    evt.target._threeObject.receiveShadow  = false;
    carBody.add(evt.target);
});

const setka = new RODIN.Sculpt('./models/car/setka.obj');
setka.on(RODIN.CONST.READY, (evt) => {
    evt.target._threeObject = mergeModel(evt.target._threeObject);
    carBody.add(evt.target);
});

const stool = new RODIN.Sculpt('./models/car/stool.obj');
stool.on(RODIN.CONST.READY, (evt) => {
    evt.target._threeObject = mergeModel(evt.target._threeObject);
    evt.target._threeObject.castShadow = true;
    evt.target._threeObject.receiveShadow  = true;
    carBody.add(evt.target);
});

const vstavka = new RODIN.Sculpt('./models/car/vstavka.obj');
vstavka.on(RODIN.CONST.READY, (evt) => {
    evt.target._threeObject = mergeModel(evt.target._threeObject);
    evt.target._threeObject.castShadow = true;
    evt.target._threeObject.receiveShadow  = false;
    carBody.add(evt.target);
});

const weel_01 = new RODIN.Sculpt('./models/car/weel_01.obj');
weel_01.on(RODIN.CONST.READY, (evt) => {
    evt.target._threeObject = mergeModel(evt.target._threeObject);
    carBody.add(evt.target);
});

const weel_02 = new RODIN.Sculpt('./models/car/weel_02.obj');
weel_02.on(RODIN.CONST.READY, (evt) => {
    evt.target._threeObject = mergeModel(evt.target._threeObject);
    carBody.add(evt.target);
});

export default carBody