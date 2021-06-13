import { useState } from 'react';
import { useHistory } from "react-router-dom";

import { useAuth } from '../contexts/firebase/auth.context';

import { BaseLayout } from '../layouts';
import styles from './AuthPage.module.scss';


const SignInPage = ({children}) => {
  const history = useHistory();
  const [signInForm, setSignInForm] = useState({
    txtEmail: '',
    txtPassword: ''
  });
  const {currentUser,signInWithEmailAndPassword,signOut} = useAuth();

  const handleSubmit = async (ev) => {
    ev.preventDefault();

    const result = await signInWithEmailAndPassword(signInForm.txtEmail, signInForm.txtPassword);
    if (result) {
      history.goBack();
    }    
  }

  const handleInputChange = async (ev) => {
    setSignInForm({
      ...signInForm,
      [ev.target.name]: ev.target.value
    })
  };

  return (
    <BaseLayout>
    <div className={styles.AuthPage}>
        <div className="container">
            {!!currentUser === false &&
                <form onSubmit={(ev) => handleSubmit(ev)}>
                    <h2>MEMBER LOGIN</h2>
                    <div className="form-group">
                        <label htmlFor="txtEmail">Email address</label>
                        <input type="email" className="form-control" id="txtEmail" name="txtEmail"  aria-describedby="emailHelp" onChange={handleInputChange} value={signInForm.txtEmail} placeholder="example@example.com..."/>
                        <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
                    </div>
                    <div className="form-group">
                        <label htmlFor="txtPassword">Password</label>
                        <input type="password" className="form-control" id="txtPassword" name="txtPassword" onChange={handleInputChange} value={signInForm.txtPassword} placeholder="Min. 6 characters..."/>
                    </div>
                    <button type="submit" className="btn btn-primary">LOGIN</button>
                </form>
            }
            {!!currentUser === true && 
                <div>
                    <img src={currentUser.photoURL} alt={currentUser.email} />
                    <button onClick={() => signOut()}>Sign out</button>
                </div>
            }
        </div>
    </div>
    </BaseLayout>
  );
};

export default SignInPage;