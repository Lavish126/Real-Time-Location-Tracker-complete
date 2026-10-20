# Real-Time Location Tracker

A real-time location tracking web application that uses geolocation and Socket.IO to share location updates between connected clients.

## Features

- **Real-Time Location Tracking:** Tracks location updates using the browser's Geolocation API.
- **Live Location Sharing:** Sends latitude and longitude to the server using Socket.IO.
- **Interactive Map:** Displays users' locations on a map and updates markers as they move.
- **Live Updates:** Receives location changes without refreshing the page.
- **Connection Handling:** Handles users connecting and disconnecting.

## Technologies Used

- **HTML5** — Application structure
- **CSS3** — Styling and layout
- **JavaScript** — Client-side functionality
- **Node.js** — Server-side runtime
- **Express.js** — Web server
- **Socket.IO** — Real-time, bidirectional communication
- **Geolocation API** — Retrieves the user's location

## Project Structure

```text
RealTimeLocationTracker/
├── public/
│   ├── js/
│   │   └── script.js
│   └── ...
├── server.js
├── package.json
├── package-lock.json
└── README.md
```

*The exact files inside `public/` may vary depending on your implementation.*

## Installation and Setup

### 1. Clone the repository

```bash
git clone https://github.com/Lavish126/Real-Time-Location-Tracker-complete.git
```

### 2. Navigate to the project directory

```bash
cd Real-Time-Location-Tracker-complete
```

### 3. Install dependencies

```bash
npm install
```

### 4. Start the server

```bash
node server.js
```

If your `package.json` defines a start script, you can alternatively run:

```bash
npm start
```

### 5. Open the application

Visit the local URL shown in your terminal, commonly:

```text
http://localhost:3000
```

Allow location access when prompted by your browser.

## How It Works

1. The browser requests the user's permission to access their location.
2. The Geolocation API obtains location coordinates.
3. The client sends latitude and longitude to the server through Socket.IO.
4. The server broadcasts location updates to connected clients.
5. The map updates the corresponding location markers in real time.
6. When a user disconnects, the application can remove their marker from the map.

## Usage

1. Start the Node.js server.
2. Open the application in a browser.
3. Grant location permission.
4. Open the application in another browser or device connected to the same server.
5. Move the device and observe location updates, provided location access and connectivity are available.

## Important Notes

- Location tracking requires the user's permission.
- Geolocation generally requires HTTPS or a secure context such as `localhost`.
- To access the application from another device, the server must be reachable from that device.
- Do not publish users' precise location data without their consent.

## Learning Outcomes

- Working with the browser Geolocation API
- Building a Node.js and Express application
- Implementing real-time communication using Socket.IO
- Handling client connections and disconnections
- Updating map markers dynamically

## Project Status

**Completed — Day 2 (Final Day)**

This project was completed as a hands-on exercise in real-time web development and location tracking.

## Author

**Lavish**

GitHub: [@Lavish126](https://github.com/Lavish126)

---

If you found this project useful, feel free to explore the repository and learn from the implementation.
