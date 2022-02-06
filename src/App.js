import React, { Suspense } from 'react';
import { Route, BrowserRouter } from "react-router-dom";

import { GlobalProvider } from './context/GlobalState';
import ThemeProviderApp from './themeProvider';

import { appRoutes } from './routes';

import { Loader } from './components';

const mapRoutes = ({ route, isPrivate, Component }) => {

  return (<Route
    exact path={route}
    render={props => (<Component {...props} />)}
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
