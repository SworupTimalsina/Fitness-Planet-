// import React from 'react';
import './forgotpass.css';

function Forgotpass(){
    const sendResetLink = () => {
        const email = (document.getElementById('email') as HTMLInputElement).value;

        if (email) {
            alert('Password reset link sent to ' + email);
  //          window.location.href = 'forgotpass1.html';
        } else {
            alert('Please enter your email address.');
        }
    };

    return (
        <div className="container">
            <label id="ResetPassword">Reset Password</label>
        <div className="input-container">

            <input type="email" placeholder="       Email" id="email" name="email" required />
            <button type="submit" onClick={sendResetLink} style={{backgroundColor: 'red'}} id="sendbutton">
                Send Reset Link
            </button>
            <a href="/login" className="login-nav">Go to Login Page</a>
        </div>
        </div>
    );
};

export default Forgotpass;
