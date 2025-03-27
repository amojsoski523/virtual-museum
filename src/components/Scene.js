import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Box } from '@react-three/drei';

function Scene() {
  const cubeRef = useRef();

  useFrame((state, delta) => {
    cubeRef.current.rotation.x += delta * 0.5;
    cubeRef.current.rotation.y += delta * 0.5;
  });

  return (
    <>
      <ambientLight intensity={0.5} />
      <directionalLight position={[10, 10, 5]} intensity={1} />
      <Box ref={cubeRef} args={[1, 1, 1]}>
        <meshStandardMaterial color="orange" />
      </Box>
    </>
  );
}

export default Scene; 