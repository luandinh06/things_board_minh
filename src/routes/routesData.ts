import HomePage from 'pages/Home';
import Sensor from 'pages/Sensor';

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
  sensor = '/sensor',
  gps = '/gps'
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
];
export { privateRoutes, publicRoutes };
