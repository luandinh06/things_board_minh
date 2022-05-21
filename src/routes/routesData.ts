import HomePage from 'pages/Home';
import Sensor from 'pages/Sensor';
import GPS from 'pages/GPS';

import { FunctionComponent } from 'react';

type RouteType = {
  path: string;
  component: FunctionComponent;
  exact?: boolean;
};

/**
 * * Reused when you want to redirect to any page.
 */
export enum routesEnum {
  home = '/',
  sensor = '/dashboard',
  gps = '/GPS'
}

const privateRoutes: RouteType[] = [];
const publicRoutes: RouteType[] = [
  {
    path: routesEnum.sensor,
    component: Sensor,
    exact: true
  },
  {
    path: routesEnum.home,
    component: HomePage,
    exact: true
  },
  {
    path: routesEnum.gps,
    component: GPS,
    exact: true
  }
];
export { privateRoutes, publicRoutes };
