let yir;


const scene = new THREE.Scene();
const light = new THREE.DirectionalLight('#ffffff', 0.9);
light.position.set(150, 300, 150);
scene.add(light);


const camera = new THREE.PerspectiveCamera(100,
	window.innerWidth / window.innerHeight, 0.1, 10000000);
camera.position.set(100, 750, 1000);

const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);



const objLoader = new THREE.OBJLoader();
objLoader.setPath('maya-files/');

const mtlLoader = new THREE.MTLLoader();
mtlLoader.setPath('maya-files/');

new Promise((resolve) => {
		mtlLoader.load('stena.obj', (materials) => {
			resolve(materials);
		});
	})
	.then((materials) => {
		materials.preload();
		objLoader.setMaterials(materials);
		for (i = 1; i < 29; i++) {
			objLoader.load(i + '.obj', (object) => {
				yir = object;
				scene.add(object);
			});
		}
	});


const controls = new THREE.OrbitControls(camera, renderer.domElement);
controls.update();


function animate() {
	requestAnimationFrame(animate);
	controls.update();
	renderer.render(scene, camera);
}

animate();