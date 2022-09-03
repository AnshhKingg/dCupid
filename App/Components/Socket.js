import io from 'socket.io-client';
import { ip } from '../Components/ipAddress';
import React from 'react'

export const socket = io(`${ip}`, { reconnection: false, forceNew: true, transports: ['websocket'] })

export const SocketContext = React.createContext();
// socket.on('connect', () => {
//     console.log('Socket connected')
// })

// socket.off('disconnect', () => {
//     console.log('Socket disconnected');
// })