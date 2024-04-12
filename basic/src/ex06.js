
import * as THREE from "three";

export default function example() {

  const canvas = document.querySelector('#three-canvas');
  const renderer = new THREE.WebGLRenderer({
    canvas,
    antialias: true, // 각진 부분을 부드럽게 해주는 요소
    // alpha: true,
  });
  renderer.setSize(window.innerWidth, window.innerHeight);
  console.log("window.devicePixelRatio", window.devicePixelRatio)
  renderer.setPixelRatio(window.devicePixelRatio > 1 ? 2 : 1);
// scene
  const scene = new THREE.Scene();

// camera
// Perspective Camera
  const camera = new THREE.PerspectiveCamera(
    75, // 시야각
    window.innerWidth / window.innerHeight, // 종횡비
    0.1, // near
    1000 // far
  );

  camera.position.z = 5;

  scene.add(camera);

  const light = new THREE.DirectionalLight(0xffffff, 1);
  light.position.x = 2;
  light.position.z = 2;
  scene.add(light);

// Mesh

  const geometry = new THREE.BoxGeometry(1, 1, 1);
  const material = new THREE.MeshBasicMaterial({
    color: "#FF0000",
  })

  const mesh = new THREE.Mesh(geometry, material);
  scene.add(mesh);

  // 그리기

  const clock = new THREE.Clock();
  function draw() {
    // 경과된 시간 값을 가지고 있음.
    // const time = clock.getElapsedTime();
    const delta = clock.getDelta(); // draw 실행될때마다 시간차

    // mesh.rotation.y += THREE.MathUtils.degToRad(1);
    mesh.rotation.y += 2 * delta
    mesh.position.y += delta;

    if (mesh.position.y > 3) {
      mesh.position.y = 0;
    }
    renderer.render(scene, camera);

    // requestAnimationFrame(draw);
    renderer.setAnimationLoop(draw);
  }

  function setSize() {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.render(scene, camera);
  }

  window.addEventListener('resize', setSize)

  draw();
}