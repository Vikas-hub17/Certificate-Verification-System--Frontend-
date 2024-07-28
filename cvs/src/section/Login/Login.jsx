import React from 'react';
import styles from './Loginstyles.css';

function Login() {
  return (
    <section id='login-form'>

<div>
    <div class="wave"></div>
    <div class="wave"></div>
    <div class="wave"></div>
 </div>

    <form className='sign-in'>
  <div class="form-row">
    <div class="form-group col-md-6">
      <label for="inputEmail4">Email</label>
      <input type="email" class="form-control" id="inputEmail4" placeholder="Email" />
    </div>
    <div class="form-group col-md-6">
      <label for="inputPassword4">Password</label>
      <input type="password" class="form-control" id="inputPassword4" placeholder="Password" />
    </div>
  </div>
  <button type="submit" class="btn btn-primary">Sign in</button>
</form>
    </section>
  )
}

export default Login