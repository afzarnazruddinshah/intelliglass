import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
class LoginContainer extends Component {
    state = {  }

    loginUser = e =>
    {
        this.props.history.push('/login')
    }

    render() { 
        return ( <div className="App">
        <h2> Mitchell Intelligent Glass</h2>
        <br />
        <button type="button" onClick={this.loginUser}>Login</button>
    </div> );
    }
}
 
export default withRouter(LoginContainer);