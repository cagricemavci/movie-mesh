import React, {useState} from 'react'
import { useHistory } from 'react-router-dom'
import { auth } from '../utilities/firebase';

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
        <div>
            <h2>Register</h2>
            <form type="submit" onSubmit={registerUser}>
                <div>
                    <label>E-mail</label>
                    <input type="email" placeholder="example" required="required" onChange={(e) => setMail(e.target.value)} />
                </div>
                <div>
                    <label>Password</label>
                    <input type="password" placeholder="******" minLength="6" required="required" onChange={(e) => setPassword(e.target.value)}></input>
                </div>
                
                <button type="submit">Register</button>
            </form>
        </div>
    )
}

export default RegisterPage
