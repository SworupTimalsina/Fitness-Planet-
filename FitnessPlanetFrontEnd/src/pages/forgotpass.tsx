// src/App.tsx

import React from 'react';
import './forgotpass.css';

const Forgotpass: React.FC = () => {
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
        <div className="input-container">
            <label id="ResetPassword">Reset Password</label>
            <input type="email" placeholder="Email" id="email" name="email" required />
            <button type="submit" onClick={sendResetLink} style={{backgroundColor: 'red'}}>
                Send Reset Link
            </button>
        </div>
    );
};

export default Forgotpass;
