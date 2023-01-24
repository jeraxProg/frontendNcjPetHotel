import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { ReservationsContextProvider } from './context/ReservationsContext';
import { AuthContextProvider } from './context/AuthContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <AuthContextProvider>
    <ReservationsContextProvider>
      <App />
    </ReservationsContextProvider>
    </AuthContextProvider>
  </React.StrictMode>
);
