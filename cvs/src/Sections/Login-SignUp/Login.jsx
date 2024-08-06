import React, { useState } from 'react';
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


    <div className='container'>
        <div className='header'>
          <div className='text'>{action}</div>
          <div className='underline'></div>
        </div>

        <div className='inputs'>

          <div className='input'>
            <img src={user} alt='' />
            <input type='text' placeholder='Name' />
          </div>

          <div className='input'>
            <img src={pass} alt='' />
            <input type='email' placeholder='Email' />
          </div>

          <div className='input'>
            <img src={email} alt='' />
            <input type='password' placeholder='Password' />
          </div>

          </div>

          <center><div className='forgot-pass'> <a href=''>Forget Password </a> </div></center>
          <div className='sumbit-container'>
          <div className='submit'> <button>Sign Up</button> </div>
          <div className='submit'><button>Login</button> </div>
          </div>


        </div>

        </body>

  );
};

export default Login