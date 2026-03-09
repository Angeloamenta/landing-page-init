'use client'

import React, { useEffect, useRef } from "react"
import * as THREE from 'three';

export default function HeroSection() {
    const mountRef = useRef(null);

    useEffect(() => {
        if (!mountRef.current) return;

        // Prendiamo le dimensioni in base al contenitore invece che dello schermo
        let w = mountRef.current.clientWidth;
        let h = mountRef.current.clientHeight;

        const scene = new THREE.Scene();

        const camera = new THREE.PerspectiveCamera(
            45,
            w / h,
            0.1,
            100
        );
        camera.position.z = 12;
        camera.position.y = 1.5;
        camera.lookAt(0, 0, 0);

        const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
        renderer.setSize(w, h);
        renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

        mountRef.current.appendChild(renderer.domElement);

        // Geometria: piano più largo per coprire di più lo schermo in orizzontale
        const width = 28;
        const height = 12;
        const segmentsX = 220;
        const segmentsY = 120;

        const geometry = new THREE.PlaneGeometry(width, height, segmentsX, segmentsY);

        // Salviamo le posizioni originali
        const positionAttribute = geometry.attributes.position;
        const originalPositions = new Float32Array(positionAttribute.array);

        const material = new THREE.PointsMaterial({
            color: 0xffffff,
            size: 0.018,
            transparent: true,
            opacity: 0.75    // Riportato più alto per essere più visibile
        });

        const points = new THREE.Points(geometry, material);
        scene.add(points);

        // Raycaster per capire dove "colpisce" il mouse sul piano
        const raycaster = new THREE.Raycaster();
        const mouse = new THREE.Vector2(999, 999);

        // Piano invisibile per intercettare il mouse
        const hitPlane = new THREE.Mesh(
            new THREE.PlaneGeometry(width, height),
            new THREE.MeshBasicMaterial({ visible: false })
        );
        scene.add(hitPlane);

        window.addEventListener("mousemove", (event) => {
            if (!mountRef.current) return;
            const rect = mountRef.current.getBoundingClientRect();

            const x = event.clientX - rect.left;
            const y = event.clientY - rect.top;

            // Se il mouse è fuori dal contenitore potremmo anche non aggiornarlo, ma così funziona globalmente
            mouse.x = (x / rect.width) * 2 - 1;
            mouse.y = -(y / rect.height) * 2 + 1;
        });

        window.addEventListener("resize", () => {
            if (!mountRef.current) return;
            const newW = mountRef.current.clientWidth;
            const newH = mountRef.current.clientHeight;
            camera.aspect = newW / newH;
            camera.updateProjectionMatrix();
            renderer.setSize(newW, newH);
            renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
        });

        const clock = new THREE.Clock();
        const hitPoint = new THREE.Vector3(999, 999, 999);

        let animationId;
        function animate() {
            animationId = requestAnimationFrame(animate);

            const time = clock.getElapsedTime();

            // Trova il punto del piano sotto il mouse
            raycaster.setFromCamera(mouse, camera);
            const intersects = raycaster.intersectObject(hitPlane);

            if (intersects.length > 0) {
                hitPoint.copy(intersects[0].point);
            }

            // Deformazione dei vertici
            for (let i = 0; i < positionAttribute.count; i++) {
                const ix = i * 3;
                const iy = i * 3 + 1;
                const iz = i * 3 + 2;

                const baseX = originalPositions[ix];
                const baseY = originalPositions[iy];

                const dx = baseX - hitPoint.x;
                const dy = baseY - hitPoint.y;
                const dist = Math.sqrt(dx * dx + dy * dy);

                // Onda base continua
                let z = Math.sin(baseX * 1.5 + time * 2) * 0.08;
                z += Math.sin(baseY * 2 + time * 1.5) * 0.08;

                // Distorsione mouse molto più pronunciata e larga
                const influence = Math.max(0, 1 - dist / 3.0);
                z += influence * 1.8;

                positionAttribute.array[iz] += (z - positionAttribute.array[iz]) * 0.08;
            }

            positionAttribute.needsUpdate = true;

            // Leggera rotazione per dare più profondità
            points.rotation.x = -0.9;
            points.rotation.z = Math.sin(time * 0.3) * 0.05;

            renderer.render(scene, camera);
        }

        animate();

        return () => {
            cancelAnimationFrame(animationId);
            if (mountRef.current && renderer.domElement) {
                mountRef.current.removeChild(renderer.domElement);
            }
            renderer.dispose();
        };
    }, [])


    return (
        <div className="relative min-h-screen flex justify-center items-center bg-black overflow-hidden font-sans">
            {/* Contenitore canvas: Maschera circolare sfumata ai bordi */}
            <div
                ref={mountRef}
                className="absolute bottom-0 left-0 w-full h-[60vh] z-0 pointer-events-none"
                style={{
                    maskImage: 'radial-gradient(ellipse at 50% 50%, black 35%, transparent 90%)',
                    WebkitMaskImage: 'radial-gradient(ellipse at 50% 50%, black 35%, transparent 90%)'
                }}
            ></div>

            <div className="relative z-10 max-w-4xl mx-auto text-center content px-4">
                {/* Badge superiore */}
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-white/80 text-sm mb-8 backdrop-blur-md shadow-lg">
                    <span className="relative flex h-2.5 w-2.5">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white/60 opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-white/90"></span>
                    </span>
                    AI used for product
                </div>

                {/* Titolo Principale */}
                <h1 className="text-5xl md:text-7xl lg:text-8xl font-medium text-white mb-6 leading-[1.05] tracking-tight">
                    How we use AI <br className="hidden md:block" /> to build the future.
                </h1>

                {/* Sottotitolo */}
                <p className="text-lg md:text-xl text-white mb-10 max-w-2xl mx-auto font-light leading-relaxed">
                    Unleash the full potential of your products by seamlessly integrating powerful artificial intelligence. Smarter, scalable, and beautifully designed.
                </p>

                {/* Pulsanti (CTA) */}
                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                    <button className="px-8 py-3.5 bg-black/30 border border-white/10 text-white rounded-full text-sm font-medium hover:bg-white/10 transition-all backdrop-blur-md">
                        Explore now
                    </button>
                </div>
            </div>
        </div>
    )
}