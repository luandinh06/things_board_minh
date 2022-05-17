import React from 'react';
import { ConnectedRouter } from 'connected-react-router';
import store, { history } from 'store';
import { Provider } from 'react-redux';
import routes from 'routes';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const App: React.FC = () => (
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <Header>
        <Link to='/'>Control Container</Link>
        <Link to='/sensor'>Sensor Container</Link>
      </Header>
      {routes}
    </ConnectedRouter>
  </Provider>
);
const Header = styled.div`
  width: 100%;
  height: 30px;
  a {
    margin: 20px 20px;
    color: white;
    text-decoration: none;
    color: black;
    cursor: pointer;
    font-size: 20px;
    &:hover {
      color: blue;
    }
  }
`;
export default App;
