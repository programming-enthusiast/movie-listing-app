import 'antd/dist/antd.css';

import AppLayout from './layouts/AppLayout/AppLayout'
import Home from './routes/Home'
import { BrowserRouter, Switch, Link, Route, Redirect } from 'react-router-dom'
import MovieDataProvider from './contexts/MovieDataProvider'
import styled from 'styled-components'

function App({ className }) {
  return (
    <BrowserRouter>
      <div className={className}>
        <MovieDataProvider>
          <AppLayout className="app-layout">
            <Switch>
              <Route exact path="/">
                <Home />
              </Route>
            </Switch>
          </AppLayout>
        </MovieDataProvider>
      </div>
    </BrowserRouter>
    
  );
}

export default styled(App)`
  width: 100%;
  height: 100%;
`;
