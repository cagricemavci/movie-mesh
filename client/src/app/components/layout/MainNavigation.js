import {
  Link
} from "react-router-dom";

import * as Routes from '../../routes';
import { useAuth } from '../../contexts/firebase/auth.context';

import styles from './MainNavigation.module.scss';
import SwitchThemes from "./SwitchThemes";
import Search from "./Search";

const MainNavigation = () => {
  const {currentUser, signOut} = useAuth();

  return (
    <nav>
        <Search />
        <SwitchThemes />
      <ul>
        <li>
          <Link to={Routes.LANDING}>Home</Link>
        </li>
        <li>
          <Link to={Routes.BROWSE}>Browse</Link>
        </li>
        <li>
          {!!currentUser
          ? <button onClick={signOut}><img className={styles.user__avatar} src={currentUser.photoURL} alt={currentUser.email}/>Logout</button>
          : <Link to={Routes.AUTH_SIGN_IN}>Sign In</Link>
          }    
        </li>
        <li>
            {!currentUser && <Link to={Routes.AUTH_REGISTER}>Register</Link>}
        </li>
      </ul>
    </nav>
  );
};

export default MainNavigation;