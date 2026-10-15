import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { useReducedMotion } from '../../hooks/useReducedMotion';
import './SceneBackground.css';

export function SceneBackground() {
  const canvasRef = useRef(null);
  const prefersReducedMotion = useReducedMotion();

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    let renderer;
    let animationFrameId;

    try {
      // 1. Renderer Setup
      renderer = new THREE.WebGLRenderer({
        canvas,
        alpha: true,
        antialias: true,
        powerPreference: 'high-performance'
      });
      renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));
      renderer.setSize(window.innerWidth, window.innerHeight, false);

      // 2. Scene & Camera
      const scene = new THREE.Scene();
      const camera = new THREE.PerspectiveCamera(55, window.innerWidth / window.innerHeight, 0.1, 100);
      camera.position.z = 9;

      const group = new THREE.Group();
      scene.add(group);

      // 3. Floating 3D Geometric Objects
      const createMesh = (geometry, color, x, y, z) => {
        const material = new THREE.MeshBasicMaterial({
          color,
          wireframe: true,
          transparent: true,
          opacity: 0.35
        });
        const mesh = new THREE.Mesh(geometry, material);
        mesh.position.set(x, y, z);
        group.add(mesh);
        return mesh;
      };

      const meshes = [
        createMesh(new THREE.IcosahedronGeometry(2.2, 1), 0x7aa2ff, 3.2, 0.4, -2),
        createMesh(new THREE.TorusKnotGeometry(1.0, 0.28, 100, 14), 0xff6b9a, -4.5, -2.5, -4),
        createMesh(new THREE.OctahedronGeometry(1.2), 0x7aa2ff, -3, 3, -6)
      ];

      // 4. Ambient Starfield Points
      const particleCount = 700;
      const positions = new Float32Array(particleCount * 3);
      for (let i = 0; i < particleCount * 3; i++) {
        positions[i] = (Math.random() - 0.5) * 40;
      }

      const pointsGeometry = new THREE.BufferGeometry();
      pointsGeometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
      
      const pointsMaterial = new THREE.PointsMaterial({
        size: 0.045,
        color: 0xece9e2,
        transparent: true,
        opacity: 0.65
      });
      
      const points = new THREE.Points(pointsGeometry, pointsMaterial);
      scene.add(points);

      // 5. Interactive Pointer & Scroll Physics
      let mouseX = 0;
      let mouseY = 0;

      const handlePointerMove = (e) => {
        mouseX = e.clientX / window.innerWidth - 0.5;
        mouseY = e.clientY / window.innerHeight - 0.5;
      };

      const handleResize = () => {
        if (!renderer || !camera) return;
        const width = window.innerWidth;
        const height = window.innerHeight;
        renderer.setSize(width, height, false);
        camera.aspect = width / height;
        camera.updateProjectionMatrix();
      };

      window.addEventListener('pointermove', handlePointerMove, { passive: true });
      window.addEventListener('resize', handleResize);

      // 6. Animation Loop
      const animate = (time) => {
        const speed = prefersReducedMotion ? 0 : time * 0.0002;

        meshes.forEach((mesh, index) => {
          mesh.rotation.x = speed * (1 + index * 0.4);
          mesh.rotation.y = speed * 1.3;
        });

        points.rotation.y = speed * 0.35;

        const scrollOffset = window.scrollY || 0;
        group.position.y = scrollOffset * 0.0016;
        points.position.y = scrollOffset * 0.0008;

        if (!prefersReducedMotion) {
          camera.position.x += (mouseX * 1.2 - camera.position.x) * 0.04;
          camera.position.y += (-mouseY * 0.8 - camera.position.y) * 0.04;
        }

        camera.lookAt(0, 0, 0);
        renderer.render(scene, camera);
        animationFrameId = requestAnimationFrame(animate);
      };

      animationFrameId = requestAnimationFrame(animate);

      // 7. Cleanup on Unmount
      return () => {
        cancelAnimationFrame(animationFrameId);
        window.removeEventListener('pointermove', handlePointerMove);
        window.removeEventListener('resize', handleResize);
        
        // Dispose geometries & materials
        meshes.forEach((m) => {
          m.geometry.dispose();
          m.material.dispose();
        });
        pointsGeometry.dispose();
        pointsMaterial.dispose();
        renderer.dispose();
      };
    } catch (err) {
      console.warn("WebGL initialization note:", err);
    }
  }, [prefersReducedMotion]);

  return <canvas ref={canvasRef} id="bg-canvas" className="scene-background-canvas" aria-hidden="true" />;
}
