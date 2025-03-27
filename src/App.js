import React from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import Scene from './components/Scene';

function App() {
  return (
    <div style={{ width: '100vw', height: '100vh' }}>
      <Canvas
        camera={{ position: [0, 0, 5], fov: 75 }}
        style={{ background: '#f0f0f0' }}
      >
        <Scene />
        <OrbitControls />
      </Canvas>
    </div>
  );
}

export default App; 