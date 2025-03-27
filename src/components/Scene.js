import React, { useRef, useEffect, useState } from 'react';
import { useFrame } from '@react-three/fiber';
import { Box, Text } from '@react-three/drei';
import { fetchArtworks } from '../services/api';

function Scene() {
  const [artworks, setArtworks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const cubeRef = useRef();

  useEffect(() => {
    const loadArtworks = async () => {
      try {
        const data = await fetchArtworks();
        setArtworks(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    loadArtworks();
  }, []);

  useFrame((state, delta) => {
    if (cubeRef.current) {
      cubeRef.current.rotation.x += delta * 0.5;
      cubeRef.current.rotation.y += delta * 0.5;
    }
  });

  if (loading) {
    return (
      <Text position={[0, 0, 0]} fontSize={0.5} color="black">
        Loading...
      </Text>
    );
  }

  if (error) {
    return (
      <Text position={[0, 0, 0]} fontSize={0.5} color="red">
        Error: {error}
      </Text>
    );
  }

  return (
    <>
      <ambientLight intensity={0.5} />
      <directionalLight position={[10, 10, 5]} intensity={1} />
      <Box ref={cubeRef} args={[1, 1, 1]}>
        <meshStandardMaterial color="orange" />
      </Box>
      {artworks.map((artwork, index) => (
        <Text
          key={artwork._id}
          position={[index * 2 - 2, 2, 0]}
          fontSize={0.3}
          color="black"
        >
          {artwork.title}
        </Text>
      ))}
    </>
  );
}

export default Scene; 