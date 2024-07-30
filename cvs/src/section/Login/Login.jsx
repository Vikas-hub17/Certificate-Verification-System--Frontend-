import React, { useState } from 'react';
import _styles from '../Login/Loginstyles.css';

const Login = () => {
	const [email, setEmail] = useState("");
	const [password, setPasswword] = useState("");
	const [confirmPassword, setconfirmPassword] = useState("");

	const handleLogin = (e) => {
		e.preventDefault();
		console.log("signup email:" , email, "password:" , password);
	};

  return (

<div className="main">  	
		<input type="checkbox" id="chk" aria-hidden="true" />

			<div className="signup">
				<form>
					<label for="chk" aria-hidden="true">Sign up</label>
					<input type="email" name="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} required />
                    <input type="password" name="new_pswd" placeholder="New Password" value={password} onChange={(e) => setPasswword(e.target.value)} required />
					<input type="password" name="confirm_pswd" placeholder="Confirm Password" value={confirmPassword} onChange={(e) => setconfirmPassword(e.target.value)}  required />
					<button>Sign up</button>
        </form>
	    </div>
		

			<div className="login">
				<form>
					<label for="chk" aria-hidden="true">Login</label>
					<input type="email" name="email" placeholder="Email" required />
					<input type="password" name="pswd" placeholder="Password" required />
					<button>Login</button>
        </form>
      </div>
</div>

  );
};

export default Login;