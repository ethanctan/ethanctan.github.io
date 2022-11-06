//Global variables for scene
let camera, scene, renderer, composer;

//World objects
let ico;
let stars = [];

//Mouse detection
let mouseX = 0;
let mouseY = 0;
document.addEventListener("mousemove", (bg) => {
  mouseX = bg.clientX;
  mouseY = bg.clientY;
});

init();
animate();

function init() {

  //Initialize camera and scene

  scene = new THREE.Scene();

  camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);

  renderer = new THREE.WebGLRenderer({
  canvas: document.querySelector('#bg'),
  });

  renderer.setPixelRatio(window.devicePixelRatio);
  renderer.setSize(window.innerWidth, window.innerHeight);
  camera.position.setZ(0);
  camera.position.setX(0);

  // WORLD

  // background image
  const space = new THREE.TextureLoader().load('space3.png');
  scene.background = space;

  // icosahedron (starting shape)
  const geometry = new THREE.IcosahedronGeometry(1.5, 2);
  const material = new THREE.MeshNormalMaterial({ wireframe:false });
  ico = new THREE.Mesh(geometry, material);
  scene.add(ico);
  ico.position.z += -4.5;
  ico.position.x += -0.05;
  ico.position.y += -0.1;

  // starfield
  let starCount = 700;
  for (let i = 0; i < starCount; i++){
    addStar();
  }

  // lighting
  const pointLight = new THREE.PointLight(0xffffff);
  pointLight.position.set(5, 5, 5);
  const ambientLight = new THREE.AmbientLight(0xffffff);
  scene.add(pointLight, ambientLight);

  // postprocessing
  composer = new THREE.EffectComposer(renderer);
  composer.addPass(new THREE.RenderPass(scene, camera));

  const bloomPass = new THREE.BloomPass(
    1,    // strength
    21,   // kernel size
    0.1,    // sigma ?
    400,  // blur render target resolution
  );
  composer.addPass(bloomPass);

  const filmPass = new THREE.FilmPass(
    0.1,   // noise intensity
    0.15,  // scanline intensity
    300,    // scanline count
    false,  // grayscale
  );
  filmPass.renderToScreen = true;
  composer.addPass(filmPass);

  // responsiveness
  window.addEventListener('resize', onWindowResize);
}

// add stars
function addStar() {
  const geometry = new THREE.OctahedronGeometry(0.1, 0);
  const material = new THREE.MeshStandardMaterial({ color: 0xffffff, transparent: true, opacity: 0.5 });
  let star = new THREE.Mesh(geometry, material);

  const [x, y, z] = Array(3)
    .fill()
    .map(() => THREE.MathUtils.randFloatSpread(100));

  star.position.set(x, y, z);

  stars.push(star);
  scene.add(star);
}

function onWindowResize() {

  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();

  renderer.setSize(window.innerWidth, window.innerHeight);

}

function animate() {

  requestAnimationFrame(animate);

  // Object movements
  ico.rotation.x += 0.001;
  ico.rotation.y += 0.0005;
  ico.rotation.z += 0.001;
  stars.forEach( star => {
  	star.rotation.x += 0.01;
    star.rotation.y += 0.005;
    star.rotation.z += 0.007;
  });
  camera.position.x = mouseX * 0.0001;
  camera.position.y = mouseY * -0.0001;

  composer.render();

}





