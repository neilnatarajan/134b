import React from 'react';
import {Link} from 'react-router';

class signup extends React.Component {
    render() {
        return (
            <div>
			<img className = "myImg" src= "waves.jpg"/>
			<h1 className= "pageHeader">Sign Up</h1>
			<p className="pageHeader">Welcome!</p>
			<div className= "forms" id="signupForm">
				<form action="javascript:;" onSubmit="signup()">
					First name:<br/>
					<input type="text" name="firstname" id="firstname"/><br/>
					Last name:<br/>
					<input type="text" name="lastname" id="lastname"/><br/>
					Address:<br/>
					<input type="text" name="address" id="address"/><br/>
					Email:<br/>
					<input type="text" name="email" id="email"/><br/>
					Insurance Info:<br/>
					<input type="text" name="insurance" id="insurance"/><br/>
					Register As:<br/>
					<input type="radio" name="userType" value="Driver" checked/> Driver<br/>
					<input type="radio" name="userType" value="Mechanic"/> Mechanic<br/>
					<input type="radio" name="userType" value="Actuary"/> Actuary<br/>
					<input type="radio" name="userType" value="Other"/> Other<br/>	
					<input type="submit" name="submit" value="Submit"/><br/>	  
				</form>
			</div>
			<div className = "footers">
				<footer>		
					<p><center>Contact information: <a href="mailto:someone@example.com">someone@example.com</a>.</center></p>
				</footer>
			</div>
            </div>  
        );
    }
  }
  
  export default signup;
  