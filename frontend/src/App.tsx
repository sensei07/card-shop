import React, { FC } from 'react';
import { Route, Routes } from 'react-router-dom';

import { ROUTES, ADMIN_ROUTES } from './constants/routes';
import { NotFound } from './main/pages/NotFound';

const role = 'ADMIN';

const App: FC = () => {
  const routes = role === 'ADMIN' ? [...ADMIN_ROUTES, ...ROUTES] : ROUTES;

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
