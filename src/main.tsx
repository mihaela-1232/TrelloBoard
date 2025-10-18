import { BrowserRouter } from 'react-router';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.tsx';
import { CategoryProvider } from './contexts/CategoryContext.tsx';
import { ColumnCardProvider } from './contexts/ColumnCardContext.tsx';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <CategoryProvider>
        <ColumnCardProvider>
          <App />
        </ColumnCardProvider>
      </CategoryProvider>
    </BrowserRouter>
  </StrictMode>
);
