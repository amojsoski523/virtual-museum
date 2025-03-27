const API_URL = process.env.REACT_APP_API_URL || 'http://localhost:5000';

/**
 * Fetches artworks from the API with optional theme filter
 * @param {string|null} theme Optional theme to filter artworks
 * @returns {Promise<Array>} Array of artwork objects
 */
export const fetchArtworks = async (theme = null) => {
  try {
    const url = theme ? `${API_URL}/api/artworks/${theme}` : `${API_URL}/api/artworks`;
    
    // Add timeout to fetch request
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 5000); // 5 second timeout
    
    const response = await fetch(url, { 
      signal: controller.signal,
      headers: {
        'Accept': 'application/json'
      }
    });
    
    clearTimeout(timeoutId);
    
    if (!response.ok) {
      throw new Error(`Server responded with ${response.status}: ${response.statusText}`);
    }
    
    return await response.json();
  } catch (error) {
    if (error.name === 'AbortError') {
      throw new Error('Request timeout - the server took too long to respond');
    }
    
    if (error.message.includes('Failed to fetch')) {
      throw new Error('Cannot connect to the API server. Please check your connection or the server may be offline.');
    }
    
    throw error;
  }
};

/**
 * Creates a new artwork via the API
 * @param {Object} artworkData The artwork data to create
 * @returns {Promise<Object>} The created artwork
 */
export const createArtwork = async (artworkData) => {
  try {
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 5000);
    
    const response = await fetch(`${API_URL}/api/artworks`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify(artworkData),
      signal: controller.signal
    });
    
    clearTimeout(timeoutId);
    
    if (!response.ok) {
      throw new Error(`Server responded with ${response.status}: ${response.statusText}`);
    }
    
    return await response.json();
  } catch (error) {
    if (error.name === 'AbortError') {
      throw new Error('Request timeout - the server took too long to respond');
    }
    
    if (error.message.includes('Failed to fetch')) {
      throw new Error('Cannot connect to the API server. Please check your connection or the server may be offline.');
    }
    
    throw error;
  }
}; 