import React from 'react';
import styles from './Login-styles.css';
import email from "../../assests/email.png";
import user from "../../assests/user.png";
import pass from "../../assests/password.png";


function Login() {
  return (

  <body>

  <div>
     <div class="wave"></div>
     <div class="wave"></div>
     <div class="wave"></div>
  </div>


    <div className='Login'>
        <div className='header'>
          <div className='text'>Sign Up</div>
          <div className='underline'></div>
        </div>

        <div className='inputs'>

          <div className='input'>
            <img src={user} alt='' />
            <input type='text' />
          </div>

          <div className='input'>
            <img src={pass} alt='' />
            <input type='email' />
          </div>

          <div className='input'>
            <img src={email} alt='' />
            <input type='password' />
          </div>

          </div>

          <div className='forgot-pass'>Forget Password </div>
          <div className='sumbit-container'>
          <div className='submit'> <button>Sign Up</button> </div>
          <div className='submit'> <button>Login</button> </div>
          </div>


        </div>

        </body>

  );
};

export default Login