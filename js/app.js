let yir;

const scene = new THREE.Scene();
const light = new THREE.DirectionalLight('#ffffff', 1);
light.position.set(-150, 100, 300);
scene.add(light);

const camera = new THREE.PerspectiveCamera(100,
	window.innerWidth / window.innerHeight, 0.1, 10000000);
camera.position.set(150, 700, 1400);

const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

//загрузка текстуры
const laderImeg = new THREE.TextureLoader();

const objLoader = new THREE.OBJLoader();
objLoader.setPath('maya-files/');

const mtlLoader = new THREE.MTLLoader();
mtlLoader.setPath('maya-files/');

new Promise((resolve) => {
		mtlLoader.load('room.obj', (materials) => {
			resolve(materials);
		});
	})
	.then((materials) => {
		materials.preload();
		objLoader.setMaterials(materials);
		objLoader.load('room.obj', (object) => {
			yir = object;
			scene.add(object);
		});
		objLoader.load('room2.obj', (object) => {
			yir = object;
			scene.add(object);
		});
		objLoader.load('room3.obj', (object) => {
			yir = object;
			scene.add(object);
		});
		objLoader.load('room4.obj', (object) => {
			yir = object;
			scene.add(object);
		});
		objLoader.load('room5.obj', (object) => {
			yir = object;
			scene.add(object);
		});
		objLoader.load('room6.obj', (object) => {
			yir = object;
			scene.add(object);
		});
		objLoader.load('stairs.obj', (object) => {
			yir = object;
			scene.add(object);
		});
		objLoader.load('chair.obj', (object) => {
			yir = object;
			scene.add(object);
		});
		objLoader.load('chair1.obj', (object) => {
			yir = object;
			scene.add(object);
		});
		objLoader.load('chair2.obj', (object) => {
			yir = object;
			scene.add(object);
		});
		objLoader.load('chair3.obj', (object) => {
			yir = object;
			scene.add(object);
		});
		objLoader.load('chair4.obj', (object) => {
			yir = object;
			scene.add(object);
		});
	});
const controls = new THREE.OrbitControls(camera, renderer.domElement);
controls.update();


//загрузка текстуры



function animate() {
	requestAnimationFrame(animate);
	controls.update();
	renderer.render(scene, camera);
}

animate();