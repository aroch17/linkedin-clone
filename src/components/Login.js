import React, { useState } from 'react'
import { auth } from '../firebase'
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import './styles/Login.css'
import { useDispatch } from 'react-redux';
import { login } from '../features/userSlice';
import { signInWithEmailAndPassword } from 'firebase/auth';

function Login() {
    const [fullName, setFullName] = useState('')
    const [url, setUrl] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const dispatch = useDispatch()

    const register = () => {
        if (!fullName) {
            alert('Please enter a full name!')
        }

        createUserWithEmailAndPassword(auth, email, password)
            .then((userAuth) => {
                updateProfile(userAuth.user, { // create user auth in firebase
                    displayName: fullName,
                    photoURL: url,
                })
                return userAuth
            })
            .then((userAuth) => {
                dispatch(login({ // then dispatch to redux store
                    email: userAuth.user.email,
                    uid: userAuth.user.uid,
                    displayName: fullName,
                    profilePic: url,
                }))
            })
            .catch((err) => {alert(err)})
    }

    const loginToApp = (event) => {
        event.preventDefault()
        signInWithEmailAndPassword(auth, email, password)
            .then((userAuth) => {
                dispatch(login({
                    email: userAuth.user.email,
                    uid: userAuth.user.uid,
                    displayName: userAuth.user.displayName,
                    profilePic: userAuth.user.photoURL
                }))
            })
            .catch(err => alert(err))
    }

    return (
        <div className='login'>
            <img src="https://upload.wikimedia.org/wikipedia/commons/0/01/LinkedIn_Logo.svg" alt="" />

            <form>
                <input type="text" placeholder='Full Name (required if registering)' value={fullName} onChange={e => setFullName(e.target.value)}/>
                <input type="text" placeholder='Profile Picture URL (optional) ' value={url} onChange={e => setUrl(e.target.value)}/>
                <input type="email" placeholder='Email' value={email} onChange={e => setEmail(e.target.value)}/>
                <input type="password" placeholder='Password' value={password} onChange={e => setPassword(e.target.value)}/>
                <button type='submit' onClick={loginToApp}>Sign In</button>
            </form>

            <p>Not a member? {" "}
                <span className='login__register' onClick={register}>Register Now</span>
            </p>
        </div>
    )
}

export default Login