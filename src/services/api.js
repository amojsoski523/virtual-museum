const API_URL = process.env.REACT_APP_API_URL || 'http://localhost:5000';

export const fetchArtworks = async (theme = null) => {
  const url = theme ? `${API_URL}/api/artworks/${theme}` : `${API_URL}/api/artworks`;
  const response = await fetch(url);
  if (!response.ok) {
    throw new Error('Failed to fetch artworks');
  }
  return response.json();
};

export const createArtwork = async (artworkData) => {
  const response = await fetch(`${API_URL}/api/artworks`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(artworkData),
  });
  if (!response.ok) {
    throw new Error('Failed to create artwork');
  }
  return response.json();
}; 