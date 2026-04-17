import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import './index.css';

/* 🔥 이거 추가 */
import { Viewfinder } from './components/Viewfinder';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    {/* 🔥 여기 추가 */}
    <Viewfinder />
    <App />
  </StrictMode>,
);