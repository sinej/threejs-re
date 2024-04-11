
import * as THREE from "three";


console.log("THREE", THREE);
// 동적으로 캔버스
// const renderer = new THREE.WebGLRenderer();
//
// renderer.setSize(window.innerWidth, window.innerHeight);
// document.body.appendChild(renderer.domElement); // 랜더러가 가지고 있는 캔버스

const canvas = document.querySelector('#three-canvas');
const renderer = new THREE.WebGLRenderer({ canvas });
renderer.setSize(window.innerWidth, window.innerHeight);


// scene
const scene = new THREE.Scene();

// camera
const camera = new THREE.PerspectiveCamera(
  75, // 시야각
  window.innerWidth / window.innerHeight, // 종횡비
  0.1, // near
  1000 // far
)

camera.position.z = 5;
scene.add(camera);