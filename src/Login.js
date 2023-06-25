import React from 'react';
import './Login.css';
import { auth, provider } from './firebase';
import { Button } from '@mui/material';
import { login } from './features/userSlice';
import { useDispatch } from 'react-redux';
import {signInWithPopup,GoogleAuthProvider } from 'firebase/auth'

export default function Login() {
  const dispatch = useDispatch();

  const signIn = () =>{
    signInWithPopup(auth,provider)
    .then(({user}) =>{
        // console.log('user', user)
        dispatch(login({
            displayName: user.displayName,
            email: user.email,
            photoUrl:user.url,
        }))
    }).catch(error => alert(error.message))

  }
  return (
    <div className='login'>
        <div className='login_container'>
            <img src='https://images.macrumors.com/t/QY0KdwbObUzURWrw5C2buSSZseY=/400x0/article-new/2020/10/newgmaillogo.0.jpg?lossy' alt=''/>
            <Button variant='container' onClick={signIn}>Login</Button>
        </div>

    </div>
  )
}
