import { Button } from '@material-ui/core';
import React from 'react'
import { auth, provider } from './firebase';
import './Login.css';
import { useStateValue } from './StateProvider';
import { actionTypes } from './reducer';


function Login() {
    const [{}, dispatch] = useStateValue();

    const signIn = () =>{
        auth.signInWithPopup(provider).then((result) =>{
            dispatch({
                    type: actionTypes.SET_USER,
                    user: result.user,
            })

        })
        .catch((error) => alert(error.message));

    }
    return (
        <div className="login">

            <div className="login__container">
                
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/WhatsApp.svg/598px-WhatsApp.svg.png" alt="new"></img>
                <div className="login__text">
                    <h1>Sign in to whatsapp</h1>

                </div>

                <Button  variant="contained" type="submit" onClick={signIn}> Sign in with Google </Button>
            </div>
            
        </div>
    )
}

export default Login
