import React from 'react';
import { useHistory, useLocation } from 'react-router';
import firebaseInitialization from '../../firebase/firebase.int';
import useAuth from '../../hooks/useAuth';

firebaseInitialization();

const Login = () => {
   const {signInUsingGoogle} = useAuth();
   const location = useLocation();
   const history = useHistory();
   const redirect_uri = location.state?.from || '/home';

   const handleGoogleLogin = () =>
   signInUsingGoogle()
   .then(result=> {
       history.push(redirect_uri);
   })
    return (
        <div>
            <button className="btn btn-danger" onClick={handleGoogleLogin}>GoogleSignIn</button>
        </div>
    );
};

export default Login;