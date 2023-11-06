// socket.js
import io from 'socket.io-client';

// This will create a singleton instance of the socket connection
const SOCKET_URL = 'http://localhost:5000';
const socket = io.connect(SOCKET_URL);

export default socket;
