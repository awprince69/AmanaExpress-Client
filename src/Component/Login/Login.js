import React from 'react';
import firebase from "firebase/app";
import "firebase/auth";
import { firebaseConfig } from './firebase.config';
import { Button } from 'react-bootstrap';
import { useState } from 'react';
import { UserContext } from '../../App';
import { useContext } from 'react';
import './Login.css'
import { useHistory, useLocation } from 'react-router';
if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}

const Login = () => {
    const [user, setUser] = useState({
        error: '',
        name: ''
    });
    const [loggedIn, setLoggedIn] = useContext(UserContext);
    const history = useHistory();
    const location = useLocation();
    const { from } = location.state || { from: { pathname: "/" } };
    const provider = new firebase.auth.GoogleAuthProvider();
    const handleGoogle = () => {
        firebase.auth()
            .signInWithPopup(provider)
            .then((result) => {
                var credential = result.credential;
                var token = credential.accessToken;
                const { email, displayName } = result.user;
                const signInGoogle = { email, name: displayName }
                setUser(signInGoogle)
                setLoggedIn(signInGoogle)
                history.replace(from);
            }).catch((error) => {
                const newUserInfo = {};
                newUserInfo.error = error.message;
                setUser(newUserInfo);
            });
    }

    return (
        <div className="loginContainer">
            <Button className="loginButton" variant="outline-success" onClick={handleGoogle}>Google</Button>
        </div>
    );
};

export default Login;