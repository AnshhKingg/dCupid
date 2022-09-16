import io from 'socket.io-client';
import {ip} from '../Components/ipAddress';
import React from 'react';

export const socket = io(`${ip}`, {
  transports: ['websocket'],
  pingInterval: 1000 * 60 * 5,
  pingTimeout: 1000 * 60 * 3,
});

export const SocketContext = React.createContext();
