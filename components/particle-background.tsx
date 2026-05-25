"use client";



import { useRef, useMemo, useEffect, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";

function Particles({ count = 1800 }: { count?: number }) {
  const mesh = useRef<THREE.Points>(null);
  const [particles, setParticles] = useState<any>(null);

  const particleTexture = useMemo(() => {
    const canvas = document.createElement('canvas');
    canvas.width = 64;
    canvas.height = 64;
    const ctx = canvas.getContext('2d')!;

    const gradient = ctx.createRadialGradient(32, 32, 6, 32, 32, 32);
    gradient.addColorStop(0, '#ffffff');
    gradient.addColorStop(0.5, '#d4c3ff');
    gradient.addColorStop(1, 'transparent');

    ctx.fillStyle = gradient;
    ctx.beginPath();
    ctx.arc(32, 32, 32, 0, Math.PI * 2);
    ctx.fill();

    return new THREE.CanvasTexture(canvas);
  }, []);

  useEffect(() => {
    const positions = new Float32Array(count * 3);
    const velocities = new Float32Array(count * 3); // vx, vy, vz
    const sizes = new Float32Array(count);

    for (let i = 0; i < count; i++) {
      const i3 = i * 3;

      // Vị trí ban đầu ngẫu nhiên trong không gian rộng
      positions[i3]     = (Math.random() - 0.5) * 35;   // x
      positions[i3 + 1] = (Math.random() - 0.5) * 28;   // y
      positions[i3 + 2] = (Math.random() - 0.5) * 20;   // z

      // Tốc độ bay chậm, ngẫu nhiên
      velocities[i3]     = (Math.random() - 0.5) * 0.018;
      velocities[i3 + 1] = (Math.random() - 0.5) * 0.018;
      velocities[i3 + 2] = (Math.random() - 0.5) * 0.015;

      sizes[i] = 0.4 + Math.random() * 1.6;
    }

    setParticles({ positions, velocities, sizes });
  }, [count]);

  useFrame((state) => {
    if (!mesh.current || !particles) return;
    const time = state.clock.getElapsedTime();
    const pos = mesh.current.geometry.attributes.position.array as Float32Array;
    const vel = particles.velocities;

    for (let i = 0; i < count; i++) {
      const i3 = i * 3;

      // Cập nhật vị trí theo vận tốc
      pos[i3]     += vel[i3];
      pos[i3 + 1] += vel[i3 + 1];
      pos[i3 + 2] += vel[i3 + 2];

      // Thêm chuyển động nhẹ nhàng (wobble) như bay trong không gian
      pos[i3]     += Math.sin(time * 0.8 + i) * 0.008;
      pos[i3 + 1] += Math.cos(time * 1.1 + i * 1.3) * 0.009;
      pos[i3 + 2] += Math.sin(time * 0.6 + i * 2.1) * 0.007;

      // Reset khi ra khỏi giới hạn (tạo cảm giác vô tận)
      if (Math.abs(pos[i3]) > 20 || 
          Math.abs(pos[i3 + 1]) > 18 || 
          Math.abs(pos[i3 + 2]) > 15) {
        
        pos[i3]     = (Math.random() - 0.5) * 25;
        pos[i3 + 1] = (Math.random() - 0.5) * 20;
        pos[i3 + 2] = (Math.random() - 0.5) * 12;
      }
    }

    mesh.current.geometry.attributes.position.needsUpdate = true;

    // Xoay chậm toàn bộ đám mây để tăng chiều sâu
    mesh.current.rotation.y = time * 0.00015;
  });

  if (!particles) return null;

  return (
    <points ref={mesh}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" args={[particles.positions, 3]} />
        <bufferAttribute attach="attributes-size" args={[particles.sizes, 1]} />
      </bufferGeometry>
      <pointsMaterial
        map={particleTexture}
        size={0.055}
        color="#d4c3ff"
        transparent
        opacity={0.88}
        sizeAttenuation={true}
        blending={THREE.AdditiveBlending}
        depthWrite={false}
      />
    </points>
  );
}
function DustParticles({ count = 400 }: { count?: number }) {
  const mesh = useRef<THREE.Points>(null);
  const [particles, setParticles] = useState<any>(null);

  useEffect(() => {
    const positions = new Float32Array(count * 3);
    const sizes = new Float32Array(count);
    const speeds = new Float32Array(count);

    for (let i = 0; i < count; i++) {
      positions[i * 3]     = (Math.random() - 0.5) * 40;
      positions[i * 3 + 1] = (Math.random() - 0.5) * 35 - 18;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 15 - 8;

      speeds[i] = Math.random() * 0.022 + 0.008;   // Chậm hơn main layer
      sizes[i] = Math.random() * 0.7 + 0.25;
    }

    setParticles({ positions, sizes, speeds });
  }, [count]);

  useFrame((state) => {
    if (!mesh.current || !particles) return;
    const pos = mesh.current.geometry.attributes.position.array as Float32Array;

    for (let i = 0; i < count; i++) {
      const i3 = i * 3;
      pos[i3 + 1] += particles.speeds[i];

      if (pos[i3 + 1] > 20) {
        pos[i3 + 1] = -20;
      }
    }

    mesh.current.geometry.attributes.position.needsUpdate = true;
  });

  if (!particles) return null;

  return (
    <points ref={mesh}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" args={[particles.positions, 3]} />
        <bufferAttribute attach="attributes-size" args={[particles.sizes, 1]} />
      </bufferGeometry>
      <pointsMaterial
        size={0.06}
        color="#a0a0ff"
        transparent
        opacity={0.9}
        sizeAttenuation={true}
        blending={THREE.AdditiveBlending}
        depthWrite={false}
      />
    </points>
  );
}


export default function ParticleBackground() {
  return (
    <div className="fixed inset-0 z-10 pointer-events-none">
      <Canvas
        camera={{ position: [0, 0, 9], fov: 55 }}
        dpr={[1, 2]}
        gl={{ antialias: true, alpha: true }}
        style={{ background: 'transparent' }}
      >
        <DustParticles count={120} />
        <Particles count={1000} />
      </Canvas>
    </div>
  );
}