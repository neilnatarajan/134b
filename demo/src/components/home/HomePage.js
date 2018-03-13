import React from 'react';
import {Link} from 'react-router';

class HomePage extends React.Component {
  render() {
    return (
      <div className="jumbotron">
        <form action="default.html" method="post">
        <h1 id="company">NZ Connections</h1>
        <h2 id="tagline">Helping you with Insurance Claims</h2>
        <div>
            <input type="text" placeholder="Enter Username" name="uname" required/>
        </div>
        <div>
            <input type="password" placeholder="Enter Password" name="psw" required/>
        </div>
        <div>
            <button type="submit">Login</button>
        </div>
        <div>
            <button type="button" onClick="location.href = 'signup.html';"id="signup">Don't have an account? Sign up here!</button>
        </div>
    </form>
      </div>
    );
  }
}

export default HomePage;
