# Pokeapi

Pokeapi is a web application that allows users to search and view Pokémon abilities. It integrates a React frontend with an Express backend, offering a responsive and intuitive interface for Pokémon enthusiasts.

## Project Structure

```
pokeapi/
│
├── api/                     # Main API logic
│   ├── controllers/         # API controllers
│   │   └── <controllerName>Controller.js
│   │
│   ├── mocks/                # Mock data or data-related utilities
│   │   └── <mockName>Mock.js
│   │
│   ├── routes/              # API route definitions
│   │   └── <routeName>Route.js
│   │
│   └── index.js
│
├── client/                  # React frontend
│   ├── src/                 # Main React source code
│   │   ├── components/      # React components
│   │   │   └── <componentName>Component.js
│   │   │
│   │   └── index.js
│   │
│   ├── public/              # Public assets like HTML files
│   │   └── index.html
│   │
│   └── webpack.config.js
│
├── config/                  # Server and other configurations
│   └── config.js
│
├── node_modules/            # Installed npm packages
│
├── package.json             # Lists project dependencies and scripts
│
└── server.js                # Main server file to start the Express server
```

## Getting Started

### Backend Setup:

Navigate to the project root directory.
- Install the required dependencies using npm install.
- Start the backend server using npm start.

### Frontend Setup:

- Navigate to the client directory.
- Install the required dependencies using npm install.
- Start the React development server using npm run dev.
- Open a web browser and navigate to http://localhost:8080 to access the frontend. 
- The backend API will be running on http://localhost:3000.
