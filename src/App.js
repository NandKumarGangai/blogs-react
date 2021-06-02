import React, { Suspense } from 'react';
import { Redirect, Route, BrowserRouter } from "react-router-dom";

import { GlobalProvider } from './context/GlobalState';
import ThemeProviderApp from './themeProvider';

import { appRoutes } from './routes';

import { Loader } from './components';

const STORAGE = {
  getToken: () => { }
};

const RedirectComponent = () => <Redirect to='/login' />;

const mapRoutes = ({ route, isPrivate, Component }) => {
  const isLogin = STORAGE.getToken() || false;
  console.log('login status: ', isLogin);

  return (<Route
    exact path={route}
    render={props => (
      isPrivate && STORAGE.getToken()
        ? <Component {...props} />
        : (isPrivate ? <RedirectComponent /> : <Component />)
    )}
  />);
}

const createRoutes = (appRoutes) => appRoutes.map(mapRoutes);

const App = () => {
  return (
    <GlobalProvider>
      <BrowserRouter>
        <ThemeProviderApp>
          <Suspense fallback={<Loader />}>
            {
              createRoutes(appRoutes)
            }
          </Suspense>
        </ThemeProviderApp>
      </BrowserRouter>
    </GlobalProvider>
  );
}

export default App;
