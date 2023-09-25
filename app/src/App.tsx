import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { IonApp, setupIonicReact } from '@ionic/react';
import './App.css'

setupIonicReact();

const App = () => {
  return (
    <IonApp>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" render={() => (<>this is the root page</>)} />
        </Switch>
      </BrowserRouter>
    </IonApp>
  );
};

export default App
