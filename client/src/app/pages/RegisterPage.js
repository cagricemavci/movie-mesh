import React, {useState} from 'react'
import { useHistory } from 'react-router-dom'
import { auth } from '../utilities/firebase';

import styles from './SignInPage.module.scss';
import { BaseLayout } from '../layouts';

const RegisterPage = () => {
    const history = useHistory();

    const [mail, setMail] = useState();
    const [password, setPassword] = useState();

    const registerUser = (e) => {
        e.preventDefault();

        auth.createUserWithEmailAndPassword(mail, password);
        history.goBack()
    }

    return (
        <BaseLayout>
            <div className={styles.SignInPage}>
                <div className="container">
                    <form type="submit" onSubmit={registerUser}>
                        <h2>CREATE ACCOUNT</h2>
                        <div>
                            <label>Email address</label>
                            <input type="email" placeholder="example" required="required" onChange={(e) => setMail(e.target.value)} placeholder="example@example.com..."/>
                        </div>
                        <div>
                            <label>Password</label>
                            <input type="password" placeholder="******" minLength="6" required="required" onChange={(e) => setPassword(e.target.value)} placeholder="Min. 6 characters..."></input>
                        </div>
                        
                        <button type="submit">REGISTER</button>
                    </form>
                </div>
            </div>
        </BaseLayout>
    )
}

export default RegisterPage
