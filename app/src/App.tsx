import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { IonApp, setupIonicReact } from '@ionic/react';
import './App.css'
import { AppUrlListener } from './AppUrlListener';
import { ExternalRedirect } from './components/ExternalRedirect';
import { Landing } from './Landing';
import { Home } from './Home';
import { OidcCallback } from './OidcCallback';

setupIonicReact();

const App = () => {
  return (
    <IonApp>
      <BrowserRouter>
        <AppUrlListener></AppUrlListener>
        <Switch>
          <Route exact path="/" component={Landing} />
          <Route path="/landing" component={Landing} exact={true} />
          <Route path="/home" component={Home} exact={true} />

          <Route path={`${import.meta.env.VITE_OIDC_REDIRECT_URI}`} component={OidcCallback} exact={true} />

          <ExternalRedirect path="/external-redirect" />
        </Switch>
      </BrowserRouter>
    </IonApp>
  );
};

export default App
