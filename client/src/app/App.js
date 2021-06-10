import React, {useState, useEffect} from 'react'
import { AuthProvider, FirebaseProvider, FirestoreProvider } from './contexts/firebase';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import { appConfig } from './config';
import * as Routes from './routes';
import { HomePage, ProjectPage, ProjectsPage, SignInPage, Browse, MovieDetails, SerieDetails } from './pages';

import {ThemeContext} from './utilities/ThemeContext.js'

import styles from './App.module.scss';

function App() {
    const [theme, setTheme] = useState('light');

    return (
        <ThemeContext.Provider value={{theme, setTheme}}>
            <div className={styles.app} data-theme={theme}>
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
                            <Route exact path={Routes.SERIE_DETAILS} component={ SerieDetails }/>
                        </Switch>
                        </Router>
                    </FirestoreProvider>
                    </AuthProvider>
                </FirebaseProvider>
            </div>
        </ThemeContext.Provider>
    );
}

export default App;
