import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

const Cn = () => {
    const canvasRef = useRef(null);

    useEffect(() => {
        // Create a scene
        const scene = new THREE.Scene();

        // Create a camera
        const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
        camera.position.z = 5;

        // Create a renderer
        const renderer = new THREE.WebGLRenderer({ antialias: true });
        renderer.setSize(window.innerWidth, window.innerHeight);
        canvasRef.current.appendChild(renderer.domElement);

        // Create a geometry
        const geometry = new THREE.SphereGeometry(1, 32, 32);

        // Create a material
        const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });

        // Create a mesh
        const sphere = new THREE.Mesh(geometry, material);
        scene.add(sphere);

        // Create text
        const loader = new THREE.FontLoader();
        loader.load('/path/to/font.json', (font) => {
            const textGeometry = new THREE.TextGeometry('CN', {
                font: font,
                size: 0.5,
                height: 0.2,
            });
            const textMaterial = new THREE.MeshBasicMaterial({ color: 0xffffff });
            const textMesh = new THREE.Mesh(textGeometry, textMaterial);
            textMesh.position.set(-0.75, -0.75, 0);
            scene.add(textMesh);
        });

        // Animation loop
        const animate = () => {
            requestAnimationFrame(animate);
            sphere.rotation.x += 0.01;
            sphere.rotation.y += 0.01;
            renderer.render(scene, camera);
        };

        animate();

        // Clean up
        return () => {
            renderer.dispose();
        };
    }, []);

    return <div ref={canvasRef} />;
};

export default Cn;
