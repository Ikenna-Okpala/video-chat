import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import { UsernameProvider } from './context/userContext';
import { SocketProvider } from './context/socket.context';
import { PeerProvider } from './context/peer.context';

//reactstrict mode causes app to render twice

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

  <BrowserRouter>
    <SocketProvider>
      <UsernameProvider>
        <PeerProvider>
          <App />
        </PeerProvider>

      </UsernameProvider>
    </SocketProvider>

  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
