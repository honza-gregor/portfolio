import { useEffect, useRef } from 'react';
import * as THREE from 'three';

const Scene3D = () => {
    const mountRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (!mountRef.current) return;

        // Scene setup
        const scene = new THREE.Scene();
        const camera = new THREE.PerspectiveCamera(75, mountRef.current.clientWidth / mountRef.current.clientHeight, 0.1, 1000);
        const renderer = new THREE.WebGLRenderer({
            antialias: true,
            alpha: true,
            powerPreference: "high-performance"
        });

        renderer.setPixelRatio(window.devicePixelRatio);
        renderer.setSize(mountRef.current.clientWidth, mountRef.current.clientHeight);
        mountRef.current.appendChild(renderer.domElement);

        // Create code particles
        const particlesCount = 2000;
        const particlesGeometry = new THREE.BufferGeometry();
        const positions = new Float32Array(particlesCount * 3);
        const colors = new Float32Array(particlesCount * 3);

        for (let i = 0; i < particlesCount * 3; i += 3) {
            positions[i] = (Math.random() - 0.5) * 20;
            positions[i + 1] = (Math.random() - 0.5) * 20;
            positions[i + 2] = (Math.random() - 0.5) * 20;

            // Use a more subtle color palette
            colors[i] = Math.random() * 0.3 + 0.2;     // R
            colors[i + 1] = Math.random() * 0.3 + 0.4; // G
            colors[i + 2] = Math.random() * 0.3 + 0.6; // B
        }

        particlesGeometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
        particlesGeometry.setAttribute('color', new THREE.BufferAttribute(colors, 3));

        const particlesMaterial = new THREE.PointsMaterial({
            size: 0.03,
            vertexColors: true,
            transparent: true,
            opacity: 0.4
        });

        const particlesMesh = new THREE.Points(particlesGeometry, particlesMaterial);
        scene.add(particlesMesh);

        // Create floating icons
        const iconGeometry = new THREE.PlaneGeometry(1, 1);
        const iconMaterial = new THREE.MeshBasicMaterial({
            color: '#2B81EB',
            transparent: true,
            opacity: 0.2
        });

        const icons: THREE.Mesh[] = [];
        for (let i = 0; i < 8; i++) {
            const icon = new THREE.Mesh(iconGeometry, iconMaterial);
            icon.position.set(
                (Math.random() - 0.5) * 15,
                (Math.random() - 0.5) * 15,
                (Math.random() - 0.5) * 15
            );
            icons.push(icon);
            scene.add(icon);
        }

        // Lighting
        const ambientLight = new THREE.AmbientLight(0xffffff, 0.3);
        scene.add(ambientLight);

        const pointLight1 = new THREE.PointLight(0x2B81EB, 1);
        pointLight1.position.set(2, 3, 4);
        scene.add(pointLight1);

        const pointLight2 = new THREE.PointLight(0x4D87C0, 1);
        pointLight2.position.set(-2, -3, -4);
        scene.add(pointLight2);

        // Position camera
        camera.position.z = 10;

        // Mouse movement effect
        let mouseX = 0;
        let mouseY = 0;
        let targetX = 0;
        let targetY = 0;
        const windowHalfX = window.innerWidth / 2;
        const windowHalfY = window.innerHeight / 2;

        const handleMouseMove = (event: MouseEvent) => {
            mouseX = (event.clientX - windowHalfX);
            mouseY = (event.clientY - windowHalfY);
        };

        document.addEventListener('mousemove', handleMouseMove);

        // Animation
        const animate = () => {
            requestAnimationFrame(animate);

            targetX = mouseX * 0.0005; // Reduced movement sensitivity
            targetY = mouseY * 0.0005;

            // Animate particles
            particlesMesh.rotation.y += 0.001;
            particlesMesh.rotation.x += 0.0005;

            // Animate icons
            icons.forEach((icon, index) => {
                icon.position.y += Math.sin(Date.now() * 0.0005 + index) * 0.005;
                icon.rotation.z += 0.005;
            });

            // Camera movement
            camera.position.x += (targetX - camera.position.x) * 0.02;
            camera.position.y += (targetY - camera.position.y) * 0.02;

            renderer.render(scene, camera);
        };

        animate();

        // Handle window resize
        const handleResize = () => {
            if (!mountRef.current) return;

            const width = mountRef.current.clientWidth;
            const height = mountRef.current.clientHeight;

            camera.aspect = width / height;
            camera.updateProjectionMatrix();
            renderer.setSize(width, height);
        };

        window.addEventListener('resize', handleResize);

        // Cleanup
        return () => {
            window.removeEventListener('resize', handleResize);
            document.removeEventListener('mousemove', handleMouseMove);
            if (mountRef.current) {
                mountRef.current.removeChild(renderer.domElement);
            }
            particlesGeometry.dispose();
            particlesMaterial.dispose();
            iconGeometry.dispose();
            iconMaterial.dispose();
        };
    }, []);

    return (
        <div
            ref={mountRef}
            className="absolute inset-0 w-full h-full"
            style={{
                background: 'transparent',
                pointerEvents: 'none'
            }}
        />
    );
};

export default Scene3D; 