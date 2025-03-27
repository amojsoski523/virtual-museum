import React, { useRef, useEffect, useState } from 'react';
import { useFrame } from '@react-three/fiber';
import { Box, Text } from '@react-three/drei';
import { fetchArtworks } from '../services/api';

// Mock data for when the API fails
const MOCK_ARTWORKS = [
  {
    _id: '1',
    title: 'Sunflowers',
    artist: 'Vincent van Gogh',
    description: 'A still life painting of sunflowers in a vase',
    theme: 'sunflowers',
    imageUrl: 'https://example.com/sunflowers.jpg'
  },
  {
    _id: '2',
    title: 'Olive Trees',
    artist: 'Vincent van Gogh',
    description: 'A landscape with olive trees under a bright sky',
    theme: 'olive-trees',
    imageUrl: 'https://example.com/olive-trees.jpg'
  }
];

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
        console.error('Failed to fetch artworks:', err);
        setError('Failed to load artworks from API - using mock data instead');
        setArtworks(MOCK_ARTWORKS); // Use mock data when API fails
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

  return (
    <>
      <ambientLight intensity={0.5} />
      <directionalLight position={[10, 10, 5]} intensity={1} />
      
      {error && (
        <Text position={[0, 3, 0]} fontSize={0.3} color="red" maxWidth={2} textAlign="center">
          {error}
        </Text>
      )}
      
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