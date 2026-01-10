import {
  PerspectiveCamera,
  Scene,
  WebGLRenderer,
  BufferGeometry,
  Points,
  PointsMaterial,
  Float32BufferAttribute,
  MathUtils,
  TextureLoader,
  Group,
  /*  Clock, */
} from 'three';

const slideHome = document.querySelector('.slide-home');

// import pour debug
/* import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'; */

// charge le logo png pour particule
const textureLoader = new TextureLoader();
const circleTexture = textureLoader.load('/circle.png');

// ************** crée la scene *****************
const scene = new Scene();

// nbre de particules
const count = 200;

// distance en les points éloignés et proche (entre -2 et 2)
const distance = 2;

// ***********  ajoute dans la scene *************

// crée caméra qui regarde la scene
const camera = new PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.8, 1000);

//change position de la camera vers moi
camera.position.z = 1;
camera.position.y = 0.5;
camera.position.x = 0.5;

// ajoute caméra a la scene
scene.add(camera);

// tableau des points (x,y,z)
const points = new Float32Array(count * 3);

for (let i = 0; i < points.length; i++) {
  //x
  points[i] = MathUtils.randFloatSpread(distance * 2); // place les points aléatoirement
  //y
  points[i + 1] = MathUtils.randFloatSpread(distance * 2);
  //z
  points[i + 2] = MathUtils.randFloatSpread(distance * 2);
}

//******** ajoute des particules (objet position, texture) ***********

//taille
const geometry = new BufferGeometry();
geometry.setAttribute('position', new Float32BufferAttribute(points, 3));

const pointMaterial = new PointsMaterial({
  color: 0xDCF7FF,
  size: 0.01,
  map: circleTexture, // texture des points
  alphaTest: 0.01, // transparent
  transparent: true,
  /* sizeAttenuation: false, pour que les points ne changent pas de taille*/
});

const pointsObject = new Points(geometry, pointMaterial);

const group = new Group();

group.add(pointsObject);

// ajoute caméra a la scene
scene.add(group);

// ****************** rend la scene ***************

//objet en option active l antialiasing
const renderer = new WebGLRenderer({
  antialias: true,
});

// fond transparent
renderer.setClearColor(0x000000, 0);

// taille  du rendu (fullscreen)
 renderer.setSize(window.innerWidth, window.innerHeight); 

// si ecran > fullHD
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

// ajoute au DOM
slideHome.appendChild(renderer.domElement);

// *********** OrbitControls (controle a la souris définie) **********
/* const controls = new OrbitControls(camera, renderer.domElement); */

// permet de définir une vitesse de mouvement par rapport a un temps
/* const clock = new Clock(); */

// bouger en déplacant la souris
let mouseX = 0;
let mouseY = 0;

// écoute la position de la souris
window.addEventListener('mousemove', (e) => {
  mouseX = e.clientX;
  mouseY = e.clientY;
});

// fait le rendu par rapport a la camera
renderer.render(scene, camera);

// crée une fonction qui fera un rendu
function tick() {
  renderer.render(scene, camera);

  // vitesse animation identique quelquesoit la fréquence de l ecran utilisateur)
  // compte le temps écoulé
  /*   const time = clock.getElapsedTime(); */
  /* group.rotation.y = time * 0.1 */

  //dire a la camera de regarder depuis le centre
  camera.lookAt(0, 0, 0);
  /*  controls.update(); */
  // rejouer
  requestAnimationFrame(tick);

  const ratioX = (mouseX / window.innerWidth - 0.5) * 2;
  const ratioY = (mouseY / window.innerWidth - 0.5) * 2;

  group.rotation.y = ratioX * Math.PI * 0.5;
  group.rotation.x = ratioY * Math.PI * 0.5;
}

tick();

// **************** responsive de la scene ********

// écoute le changement de taille fenetre
window.addEventListener('resize', () => {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
});

// pour avoir l'animation au mouvement de la souris (apparement en supprimant le OrbitControls pas besoin)

/*  document.body.addEventListener('pointermove', onPointerMove); */

// anime au mouvement de la sourie
/*   function onPointerMove(event) {
    requestAnimationFrame(tick);
  } */
