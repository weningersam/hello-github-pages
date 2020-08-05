import * as THREE from '../../node_modules/three/build/three.module.js';

export default function(sceneReference) {
    var camera, scene, renderer;
    var geometry, material, mesh;
    var xchange, ychange;

    document.addEventListener('click', speedUp);
    init();
    animate();

    function init() {

        camera = new THREE.PerspectiveCamera( 70, window.innerWidth / window.innerHeight, 0.01, 10 );
        camera.position.z = 1;

        scene = new THREE.Scene();

        xchange = .01;
        ychange = .02;

        geometry = new THREE.BoxGeometry( 0.2, 0.2, 0.2 );
        material = new THREE.MeshNormalMaterial();

        mesh = new THREE.Mesh( geometry, material );

       

        scene.add( mesh );

        renderer = new THREE.WebGLRenderer( { antialias: true } );
        renderer.setSize( window.innerWidth/2, window.innerHeight/2 );

        sceneReference.appendChild(renderer.domElement);
        
    }

    function speedUp(){

        xchange = xchange + .01;
        ychange = ychange + .02;
    }
    function animate() {

        requestAnimationFrame( animate );

        mesh.rotation.x += xchange;
        mesh.rotation.y += ychange;

        renderer.render( scene, camera );

    }
}