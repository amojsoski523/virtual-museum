import React, { useEffect, useRef } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import './App.css';

function Museum() {
  return (
    <>
      <ambientLight intensity={0.5} />
      <directionalLight position={[10, 10, 5]} intensity={1} />
      <mesh>
        <boxGeometry args={[1, 1, 1]} />
        <meshStandardMaterial color="orange" />
      </mesh>
    </>
  );
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Virtual Museum</h1>
      </header>
      <main>
        <div className="canvas-container">
          <Canvas>
            <Museum />
            <OrbitControls />
          </Canvas>
        </div>
      </main>
      <footer>
        <p>© 2025 Virtual Museum</p>
      </footer>
    </div>
  );
}

export default App; 