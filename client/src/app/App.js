import { AuthProvider, FirebaseProvider, FirestoreProvider } from './contexts/firebase';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import { appConfig } from './config';
import * as Routes from './routes';
import { HomePage, ProjectPage, ProjectsPage, SignInPage, Browse, MovieDetails, SerieDetails } from './pages';

import styles from './App.module.scss';

function App() {
  return (
    <div className={styles.app}>
      <FirebaseProvider>
        <AuthProvider>
          <FirestoreProvider>
            <Router basename={appConfig.basicURL}>
              <Switch>
                  <Route exact path={Routes.LANDING} component={ HomePage }/>
                  <Route from={Routes.HOME} to={Routes.LANDING}/>
                  <Route exact path={Routes.PROJECT_DETAILS} component={ ProjectPage }/>
                  <Route exact path={Routes.PROJECTS} component={ ProjectsPage }/>
                  <Route exact path={Routes.AUTH_SIGN_IN} component={ SignInPage }/>
                  <Route exact path={Routes.BROWSE} component={ Browse }/>
                  <Route exact path={Routes.MOVIE_DETAILS} component={ MovieDetails }/>
                  <Route exact path={Routes.SERIE_DETAILS} component={ MovieDetails }/>
              </Switch>
            </Router>
          </FirestoreProvider>
        </AuthProvider>
      </FirebaseProvider>
    </div>
  );
}

export default App;
