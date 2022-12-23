import React, { FC } from 'react';
import { Route, Routes } from 'react-router-dom';

import { PRIVATE_ROUTES, ROUTES } from './constants/routes';
import { NotFound } from './main/pages/NotFound';

const role = 'ADMIN';

const App: FC = () => {
  const routes = role === 'ADMIN' ? PRIVATE_ROUTES : ROUTES;

  return (
    <Routes>
      {routes.map((route) => (
        <Route key={route.path} path={route.path} element={<route.element />} />
      ))}
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default App;
