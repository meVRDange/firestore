import React, { useState } from 'react'
import { auth } from './firebase';
import { RecaptchaVerifier, signInWithPhoneNumber } from 'firebase/auth';


export default function OtpComponent() {

    const [number, setNumber] = useState('+91')
    const [numberEntered, setNumberEntered] = useState(false)
    const [otp, setOtp] = useState()

    const generateRecaptcha = async() => {
        window.recaptchaVerifier = new RecaptchaVerifier(auth,'recaptcha', {
            'size': 'invisible',
            'callback': (response) => {
                // reCAPTCHA solved, allow signInWithPhoneNumber.
                // ...
            }
        });
        await window.recaptchaVerifier.render()
    }


    const handleNumberSend = async(event) => {
        event.preventDefault();
        debugger
        setNumberEntered(true);
        await generateRecaptcha();

        let appVerifier = window.recaptchaVerifier;
        signInWithPhoneNumber(auth, number, appVerifier)
          .then((confirmationResult) => {
            // SMS sent. Prompt user to type the code from the message, then sign the
            // user in with confirmationResult.confirm(code).
            window.confirmationResult = confirmationResult;
          }).catch((error) => {
            // Error; SMS not sent
            console.log(error);
          });
    }


    if (!numberEntered) {
        return (
            <form onSubmit={handleNumberSend}>
                <p>Please enter mobile number</p>
                <input type='text' value={number} onChange={(event) => { setNumber(event.target.value) }} />
                <button type='submit' >get OTP</button>
            </form>)
    } else {
        return (
            <form >
                <p>Please enter OTP</p>
                <input type='number' value={otp} onChange={(event) => { setOtp(event.target.value) }} />
                <button type='submit' >get OTP</button>
            </form>)
    }
}
