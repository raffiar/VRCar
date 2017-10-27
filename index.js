import * as R from 'rodin/main';
import MainComponent from './main/main.js';


R.start();

R.Scene.add(MainComponent.mainContainer);


RODIN.Scene.add(new RODIN.Sculpt(new THREE.AmbientLight(0.3)));

const l = new RODIN.Sculpt(new THREE.DirectionalLight());
l.position.set(-20, 0, 30);
RODIN.Scene.add(l);

const z4 = new RODIN.Sculpt();
z4.position.z = -5;
z4.on(RODIN.CONST.UPDATE, (evt)=>{
    evt.target.rotation.y += 0.001;
});

RODIN.Scene.add(z4);

const body = new RODIN.Sculpt('./assets/models/body.obj');
body.on(RODIN.CONST.READY, (evt) => {
    z4.add(evt.target);
});


const startBtn = new RODIN.Sculpt('./assets/models/start_btn.obj');
startBtn.on(RODIN.CONST.READY, (evt) => {
    z4.add(evt.target);
    evt.target.position.set(-0.22, 0.895, -0.03);
});


const door = new RODIN.Sculpt('./assets/models/door.obj');
door.on(RODIN.CONST.READY, (evt) => {
    z4.add(evt.target);
    evt.target.position.set(-1.029, 0.763, -0.4)
});


const ruchnik = new RODIN.Sculpt('./assets/models/ruchnik.obj');
ruchnik.on(RODIN.CONST.READY, (evt) => {
    z4.add(evt.target);
    evt.target.position.set(-0.008, 0.537, 0.272);
});