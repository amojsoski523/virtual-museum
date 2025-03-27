# Virtual Museum

A 3D virtual museum built with React, Three.js, and Node.js.

## Project Overview

This virtual museum allows users to explore different themed rooms dedicated to Van Gogh's artwork. Users can navigate between rooms, view artworks, and learn about the paintings in an immersive 3D environment.

## Features

- Interactive 3D environment built with Three.js and React Three Fiber
- Themed rooms (Sunflower Room, Olive Trees Room, and Wheat Fields Room)
- Artwork information display
- RESTful API for artwork data
- MongoDB database integration

## Tech Stack

- **Frontend**: React, Three.js, @react-three/fiber, @react-three/drei
- **Backend**: Node.js, Express
- **Database**: MongoDB
- **Deployment**: Vercel (frontend), Heroku (backend)

## Getting Started

### Prerequisites

- Node.js (>= 18.0.0)
- MongoDB

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/amojsoski523/virtual-museum.git
   cd virtual-museum
   ```

2. Install frontend dependencies:
   ```bash
   npm install
   ```

3. Install backend dependencies:
   ```bash
   cd backend
   npm install
   ```

### Running the project

1. Start the backend server:
   ```bash
   cd backend
   npm run dev
   ```

2. Start the frontend development server:
   ```bash
   # In the project root
   npm start
   ```

3. Open your browser and navigate to `http://localhost:3000`

## Project Structure

- `/src` - Frontend React application
- `/backend` - Express server and API
- `/public` - Static assets

## License

MIT