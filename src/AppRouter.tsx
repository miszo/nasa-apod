import React, { ReactElement } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Navigation } from 'components/Navigation';
import { Home, Saved } from 'views';

export enum RouteDefinition {
  home = '/',
  saved = '/zapisane',
}

const routes = [
  {
    path: RouteDefinition.home,
    Component: Home,
  },
  {
    path: RouteDefinition.saved,
    Component: Saved,
  },
];

export const AppRouter = (): ReactElement => (
  <Router>
    <Navigation />
    <Routes>
      {routes.map(({ path, Component }) => (
        <Route key={path} element={<Component />} path={path} />
      ))}
    </Routes>
  </Router>
);
