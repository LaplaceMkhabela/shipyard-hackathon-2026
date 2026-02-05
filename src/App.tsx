import { Redirect, Route } from 'react-router-dom';
import { IonApp, IonRouterOutlet, setupIonicReact } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import Home from './pages/Home';
import Menu from './pages/Menu';
import CreateList from './pages/CreateList';
import ListDisplay from './pages/ListDisplay';
import RecipeGenerator from './pages/Ingredients';

/* Core CSS */
import '@ionic/react/css/core.css';
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';
import '@ionic/react/css/padding.css';

setupIonicReact();

const App: React.FC = () => (
  <IonApp>
    <IonReactRouter>
      <IonRouterOutlet>
        {/* Route to Splash Page */}
        <Route exact path="/home" component={Home} />
        
        {/* Route to Main Menu Page */}
        <Route exact path="/menu" component={Menu} />

        <Route exact path="/createList" component={CreateList} />
        <Route exact path="/list-display" component={ListDisplay} />
        <Route exact path="/ingredients" component={RecipeGenerator} />
        {/* Default route */}
        <Route exact path="/">
          <Redirect to="/home" />
        </Route>
      </IonRouterOutlet>
    </IonReactRouter>
  </IonApp>
);

export default App;