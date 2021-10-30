import React from 'react';
import firebaseInitialization from '../../firebase/firebase.int';
import useAuth from '../../hooks/useAuth';

firebaseInitialization();

const Login = () => {
   const {handleGoogleSignIn} = useAuth();
    return (
        <div>
            <button className="btn btn-danger" onClick={handleGoogleSignIn}>GoogleSignIn</button>
        </div>
    );
};

export default Login;