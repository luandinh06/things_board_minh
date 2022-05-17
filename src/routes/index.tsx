import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { privateRoutes, publicRoutes } from './routesData';
import { Helmet } from 'react-helmet';
import PrivateRoute from './PrivateRoute';

const Routes = (
  <>
    <Helmet>
      <html lang='en' />
      <title>IOT</title>
      <meta property='og:title' content='' />
      <meta property='twitter:title' content='' />
      <meta name='description' content='' />
      <meta property='og:description' content='' />
      <meta property='twitter:description' content='' />
    </Helmet>
    <Switch>
      {publicRoutes.map((route) => (
        <Route key={route.path} path={route.path} component={route.component} exact />
      ))}
      {privateRoutes.map((route) => (
        <PrivateRoute key={route.path} path={route.path} component={route.component} exact />
      ))}
    </Switch>
  </>
);

export default Routes;
