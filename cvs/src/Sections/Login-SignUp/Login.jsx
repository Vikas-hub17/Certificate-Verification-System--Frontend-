import React from 'react';

function Login() {
  return (

    <div className='Login'>
        <div className='header'>
          <div className='text'>Sign Up</div>
          <div className='underline'></div>
        </div>

        <div className='inputs'>

          <div className='input'>
            <img src='' alt='' />
            <input type='text' />
          </div>

          <div className='input'>
            <img src='' alt='' />
            <input type='email' />
          </div>

          <div className='input'>
            <img src='' alt='' />
            <input type='password' />
          </div>

          </div>

          <div className='forgot-pass'>Forget Password </div>
          <div className='sumbit-container'>
          <div className='submit'> Sign Up</div>
          <div className='submit'> Login </div>
          </div>



        </div>

  );
};

export default Login