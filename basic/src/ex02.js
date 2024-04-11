
import * as THREE from "three";

export default function example() {
  console.log("THREE", THREE);
// 동적으로 캔버스
// const renderer = new THREE.WebGLRenderer();
//
// renderer.setSize(window.innerWidth, window.innerHeight);
// document.body.appendChild(renderer.domElement); // 랜더러가 가지고 있는 캔버스

  const canvas = document.querySelector('#three-canvas');
  const renderer = new THREE.WebGLRenderer({
    canvas,
    antialias: true, // 각진 부분을 부드럽게 해주는 요소
  });
  renderer.setSize(window.innerWidth, window.innerHeight);
  console.log("window.devicePixelRatio", window.devicePixelRatio)
  renderer.setPixelRatio(window.devicePixelRatio > 1 ? 2 : 1);
// scene
  const scene = new THREE.Scene();

// camera
// Perspective Camera
// const camera = new THREE.PerspectiveCamera(
//   75, // 시야각
//   window.innerWidth / window.innerHeight, // 종횡비
//   0.1, // near
//   1000 // far
// );
//
// camera.position.x = 1;
// camera.position.y = 2;
// camera.position.z = 5;


// Orthographic Camera
// 렌더링된 이미지에서 객체의 크기는 카메라와의 거리에 관계없이 일정하게 유지됨.
  const camera = new THREE.OrthographicCamera(
    -(window.innerWidth / window.innerHeight),
    (window.innerWidth / window.innerHeight),
    1,
    -1,
    0.1,
    1000
  );

  camera.position.x = 1;
  camera.position.y = 2;
  camera.position.z = 10;
  camera.lookAt(0, 0, 0);
  camera.zoom = 0.5;
  camera.updateProjectionMatrix();
  scene.add(camera);

// Mesh

  const geometry = new THREE.BoxGeometry(1, 1, 1);
  const material = new THREE.MeshBasicMaterial({
    color: "#FF0000",
  })

  const mesh = new THREE.Mesh(geometry, material);
  scene.add(mesh);

  // 그리기
  renderer.render(scene, camera);

  function setSize() {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.render(scene, camera);
  }

  window.addEventListener('resize', setSize)
}