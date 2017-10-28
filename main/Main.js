import * as RODIN from 'rodin/main';
import Teleport from "./Teleport.js";

class MainComponent {
    constructor() {
        const planeGeometry = new THREE.PlaneBufferGeometry( 14.5, 14.5, 16, 16 );
        const plane = new THREE.Mesh( planeGeometry );
        plane.castShadow = false;
        plane.receiveShadow = true;
        this.mainContainer = new RODIN.Sculpt(plane);
        this.mainContainer._threeObject.material = new THREE.MeshStandardMaterial( {
            color: 0xb8b8b8,
            map: RODIN.Loader.loadTexture('./textures/CeramicTilesDiff.jpg'),} );
        this.mainContainer.rotation.x = -Math.PI / 2;
        this.teleportScene = new Teleport(this.mainContainer);
    }
}


export default new MainComponent();