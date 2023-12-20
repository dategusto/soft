import * as THREE from "three";
import { GLTFLoader } from "three/addons/loaders/GLTFLoader.js";

//Scene
//Camera
//Renderer

var containerthree = document.getElementById("three");

var scene, renderer, camera;
var gltf2;

async function init() {
  scene = new THREE.Scene(); //creamos la escena
  scene.background = new THREE.Color(0xffffff);
  camera = new THREE.PerspectiveCamera(
    75,
    window.innerWidth / window.innerHeight,
    0.1,
    1000
  ); //creamos la camara y nos pide dos parametros el primero es el fov que indica cuanta altitud queremos lo normal es 75 y el segundo parametro es el aspect que es el radio de la camara una formula es dividir el ancho entre el alto.

  camera.position.z = 5;

  renderer = new THREE.WebGLRenderer(); //los renderizamos con esta linea
  renderer.setSize(window.innerWidth, window.innerHeight);
  containerthree.appendChild(renderer.domElement); // lo ponemos como hijo del cuerpo es decir hijo del index.html
  console.log("cargo THREE");

  var light = new THREE.AmbientLight();
  //light.intensity = 5;
  scene.add(light);

  var dir = new THREE.DirectionalLight(0xffffff, 1);
  scene.add(dir);

  var gltf = await loadLGB("./../../public/models/glb1.glb");
  gltf2 = await loadLGB("./../../public/models/glb2.glb");

  gltf2.scene.traverse(function (node) {
    if (node.isMesh) {
      node.position.x = -2;
    }
  });

  scene.add(gltf.scene);
  scene.add(gltf2.scene);
}

async function loadLGB(url) {
  var loader = new GLTFLoader();
  var gltf = await loader.loadAsync(url);
  return gltf;
}

function animate() {
  requestAnimationFrame(animate);
  renderer.render(scene, camera);
  console.log("actualizacion del render");
}

init();
animate();
