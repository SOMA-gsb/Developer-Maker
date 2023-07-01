/*global chrome*/
import { useState } from 'react';
import './Login.css'

function Login({onLoginChange}) {
    const [enterEamil, setEnterEmail] = useState('');
    const [enterPassword, setEnterPassword] = useState('');

    function emailChangeHandler(event) {
        setEnterEmail(event.target.value);
    }
    function passwordChangeHandler(event) {
        setEnterPassword(event.target.value);
    }

    function submitHandler(event) {
        event.preventDefault();
        const data = {
            email: enterEamil,
            pw: enterPassword
        };
        
        chrome.storage.local.set({
            loginCheck: true
        })
        onLoginChange();
    }

    return (
        <>
            <div>
                <h1 className="login-title">Developer Maker</h1>
            </div>
            <form onSubmit={submitHandler}>
                <div className="login-wrapper">
                    <input type="text" placeholder="Email" className="login-form" required onChange={emailChangeHandler}/>
                </div>
                <div className="login-wrapper">
                    <input type="password" placeholder="Password" className="login-form" required onChange={passwordChangeHandler}/>
                </div>
                <div className="button-wrapper">
                    <button className="login-bt">Log in</button>
                </div>
            </form>
            <div className="others">
                <a href="#" className="pw-forgot">Forgot Password?</a>
                <a href="#" className="create">Create An Account!</a>
            </div>
        </>
    );
}

export default Login;