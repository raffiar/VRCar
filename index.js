import * as RODIN from 'rodin/main';
import MainComponent from './main/main.js';
import {Car} from './main/Car.js';
import {Building} from './main/Building.js';

RODIN.start();

console.log(RODIN.Scene.renderer);
RODIN.Scene.renderer.shadowMap.enabled = true;
RODIN.Scene.renderer.shadowMap.type = THREE.PCFSoftShadowMap;

RODIN.Scene.add(new RODIN.Sculpt(new THREE.AmbientLight(0xe3f0ff, 0.2)));

const lightThree = new THREE.DirectionalLight(0xfff1d4, 0.6);
lightThree.castShadow = true;
lightThree.shadow.mapSize.width = 512;
lightThree.shadow.mapSize.height = 512;
lightThree.shadow.camera.near = 0.5;
lightThree.shadow.camera.far = 100;
const light =new RODIN.Sculpt(lightThree);
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

const sky = new RODIN.Sphere( 80, new THREE.MeshBasicMaterial({
    color: 0xa9d1ff,
    map: RODIN.Loader.loadTexture('./textures/sky.jpg'),
    side: THREE.DoubleSide
}));
RODIN.Scene.add(sky);


//
// const sphereGeometry = new THREE.SphereBufferGeometry( 0.5, 32, 32 );
// const sphereMaterial = new THREE.MeshStandardMaterial( { color: 0xff0000 } );
// const sphere = new THREE.Mesh( sphereGeometry, sphereMaterial );
// sphere.castShadow = true; //default is false
// sphere.receiveShadow = false; //default
// const building_02 = new RODIN.Sculpt(sphere);
// building_02.position.x = -5;
// RODIN.Scene.add( building_02 );

//Create a plane that receives shadows (but does not cast them)
// const planeGeometry = new THREE.PlaneBufferGeometry( 2, 2, 32, 32 );
// const planeMaterial = new THREE.MeshStandardMaterial( { color: 0x00ff00 } );
// const plane = new THREE.Mesh( planeGeometry, planeMaterial );
// plane.receiveShadow = true;
//
// const building_01 = new RODIN.Sculpt(plane);
// building_01.position.z = -5;
// building_01.rotation.x = -Math.PI / 2;
// RODIN.Scene.add( building_01 );


//////////////////////////
const models = new RODIN.Sculpt();
RODIN.Scene.add(models);
models.position.z = -5;

models.add(MainComponent.mainContainer);

const z4 = new Car();
z4.rotation.y = Math.PI/6;
models.add(z4);

const building = new Building();
models.add(building);