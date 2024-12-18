import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './app/App';
import './globals.scss';

const enableMocking = async () => {
  // if (process.env.NODE_ENV === 'development') {
  const { worker } = await import('./mocks/browser');

  return worker.start({ onUnhandledRequest: 'bypass' });
  // }
};

const container = document.querySelector('#root') as HTMLElement;
const root = createRoot(container);

enableMocking().then(() => {
  root.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
});
