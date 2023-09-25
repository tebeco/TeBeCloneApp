import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { IonApp, setupIonicReact } from '@ionic/react';
import './App.css'
import { AppUrlListener } from './AppUrlListener';
import { ExternalRedirect } from './components/ExternalRedirect';

setupIonicReact();

const App = () => {
  return (
    <IonApp>
      <BrowserRouter>
        <AppUrlListener></AppUrlListener>
        <Switch>
          <Route exact path="/" render={() => (<>this is the root page</>)} />

          <ExternalRedirect path="/external-redirect" />
        </Switch>
      </BrowserRouter>
    </IonApp>
  );
};

export default App
