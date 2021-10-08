import { ReactElement } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Navigation } from 'components/Navigation';
import { Home, Saved } from 'views';
import { Center } from '@chakra-ui/react';

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
    <Center height="calc(100vh - 70px)" overflow="auto">
      <Routes>
        {routes.map(({ path, Component }) => (
          <Route key={path} element={<Component />} path={path} />
        ))}
      </Routes>
    </Center>
  </Router>
);
