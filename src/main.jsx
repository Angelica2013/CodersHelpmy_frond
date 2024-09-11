import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';
import { router } from './router';
import GlobalStyle from './styled/GlobalStyles';


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <GlobalStyle />
      <RouterProvider router={router} />
  </React.StrictMode>
);
