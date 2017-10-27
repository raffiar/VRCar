/**
 * Created by Reinchard on 10/27/2017.
 */
import * as R from 'rodin/main';
import Teleport from "./Teleport.js";

class MainComponent {
    constructor() {
        this.mainContainer = new R.Plane(10,10, new THREE.MeshBasicMaterial({
            color: 0x2196F3,
        }));
        this.mainContainer.position.set(0, 0, -2);
        this.mainContainer.rotation.x = -Math.PI / 2;
        this.teleportScene = new Teleport(this.mainContainer);
    }
}


export default new MainComponent();