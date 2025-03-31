import * as THREE from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';

export const setupBackground = () => {
    const container = document.getElementById('background-canvas');
    
    // Create scene
    const scene = new THREE.Scene();
    
    // Create camera
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    camera.position.z = 5;
    
    // Create renderer
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(window.devicePixelRatio);
    container.appendChild(renderer.domElement);
    
    // Add light
    const ambientLight = new THREE.AmbientLight(0x404040);
    scene.add(ambientLight);
    
    const pointLight = new THREE.PointLight(0xd4b996, 1);
    pointLight.position.set(5, 5, 5);
    scene.add(pointLight);
    
    const pointLight2 = new THREE.PointLight(0xc4a77d, 1);
    pointLight2.position.set(-5, -5, 3);
    scene.add(pointLight2);
    
    // Create particles
    const particlesGeometry = new THREE.BufferGeometry();
    const particlesCount = 2000;
    
    const posArray = new Float32Array(particlesCount * 3);
    
    for (let i = 0; i < particlesCount * 3; i++) {
        posArray[i] = (Math.random() - 0.5) * 20;
    }
    
    particlesGeometry.setAttribute('position', new THREE.BufferAttribute(posArray, 3));
    
    const particlesMaterial = new THREE.PointsMaterial({
        size: 0.02,
        color: 0xd4b996,
        transparent: true,
        opacity: 0.8
    });
    
    const particlesMesh = new THREE.Points(particlesGeometry, particlesMaterial);
    scene.add(particlesMesh);
    
    // Create floating objects
    const geometries = [
        new THREE.TorusGeometry(1, 0.3, 16, 100),
        new THREE.OctahedronGeometry(1, 0),
        new THREE.TetrahedronGeometry(1, 0)
    ];
    
    const material = new THREE.MeshStandardMaterial({
        color: 0xd4b996,
        wireframe: true
    });
    
    const floatingObjects = [];
    
    for (let i = 0; i < 5; i++) {
        const geometry = geometries[Math.floor(Math.random() * geometries.length)];
        const mesh = new THREE.Mesh(geometry, material);
        
        mesh.position.x = (Math.random() - 0.5) * 15;
        mesh.position.y = (Math.random() - 0.5) * 15;
        mesh.position.z = (Math.random() - 0.5) * 10 - 5;
        
        mesh.rotation.x = Math.random() * Math.PI;
        mesh.rotation.y = Math.random() * Math.PI;
        
        mesh.scale.set(
            Math.random() * 0.5 + 0.1,
            Math.random() * 0.5 + 0.1,
            Math.random() * 0.5 + 0.1
        );
        
        floatingObjects.push({
            mesh,
            rotationSpeed: {
                x: (Math.random() - 0.5) * 0.005,
                y: (Math.random() - 0.5) * 0.005,
                z: (Math.random() - 0.5) * 0.005
            },
            movementSpeed: {
                x: (Math.random() - 0.5) * 0.005,
                y: (Math.random() - 0.5) * 0.005
            }
        });
        
        scene.add(mesh);
    }
    
    // Handle window resize
    window.addEventListener('resize', () => {
        camera.aspect = window.innerWidth / window.innerHeight;
        camera.updateProjectionMatrix();
        renderer.setSize(window.innerWidth, window.innerHeight);
    });
    
    // Animation loop
    const animate = () => {
        requestAnimationFrame(animate);
        
        // Rotate and move floating objects
        floatingObjects.forEach(obj => {
            obj.mesh.rotation.x += obj.rotationSpeed.x;
            obj.mesh.rotation.y += obj.rotationSpeed.y;
            obj.mesh.rotation.z += obj.rotationSpeed.z;
            
            obj.mesh.position.x += obj.movementSpeed.x;
            obj.mesh.position.y += obj.movementSpeed.y;
            
            // Boundary check
            if (Math.abs(obj.mesh.position.x) > 10) {
                obj.movementSpeed.x *= -1;
            }
            
            if (Math.abs(obj.mesh.position.y) > 10) {
                obj.movementSpeed.y *= -1;
            }
        });
        
        // Rotate particles
        particlesMesh.rotation.x += 0.0003;
        particlesMesh.rotation.y += 0.0005;
        
        renderer.render(scene, camera);
    };
    
    animate();
};