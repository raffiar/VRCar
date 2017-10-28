import * as RODIN from 'rodin/main';
import MainComponent from './main/main.js';
import {Car} from './main/Car.js';
import {Building} from './main/Building.js';

RODIN.start();
RODIN.Scene.renderer.shadowMap.enabled = true;
RODIN.Scene.renderer.shadowMap.type = THREE.PCFSoftShadowMap;

RODIN.Scene.add(new RODIN.Sculpt(new THREE.AmbientLight(0xe3f0ff, 0.2)));

const lightThree = new THREE.DirectionalLight(0xfff1d4, 0.6);
lightThree.castShadow = true;
lightThree.shadow.mapSize.width = 512;
lightThree.shadow.mapSize.height = 512;
lightThree.shadow.camera.near = 0.5;
lightThree.shadow.camera.far = 100;
const light = new RODIN.Sculpt(lightThree);
light.position.set(-20, 30, 25);
RODIN.Scene.add(light);

// const lightContrThree = new THREE.DirectionalLight(0xfff1d4, 0.1);
// lightContrThree.castShadow = true;
// lightContrThree.shadow.mapSize.width = 512;
// lightContrThree.shadow.mapSize.height = 512;
// lightContrThree.shadow.camera.near = 0.5;
// lightContrThree.shadow.camera.far = 100;
// const lightContr =new RODIN.Sculpt( lightContrThree);
// lightContr.position.set(25, 20, -25);
// RODIN.Scene.add(lightContr);

const sky = new RODIN.Sphere(80, new THREE.MeshBasicMaterial({
    color: 0xa9d1ff,
    map: RODIN.Loader.loadTexture('./textures/sky.jpg'),
    side: THREE.DoubleSide
}));
RODIN.Scene.add(sky);

const models = new RODIN.Sculpt();
RODIN.Scene.add(models);
models.position.z = -5;

models.add(MainComponent.mainContainer);

const z4 = new Car();
z4.rotation.y = (2* Math.PI) / 3;
models.add(z4);
const building = new Building();
models.add(building);