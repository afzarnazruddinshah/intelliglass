import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import axios from 'axios';
import {connect } from 'react-redux';
import { LoginToApp, LogoutFromApp } from '../../actions/auth';

class Login extends Component {
    state = { 
        email: '',
        pwd: ''
     }

     componentDidMount()
     {
        this.props.onLogoutFromApp();  
     }

     onLoginToApp = (username, fname, token) =>
    {
        localStorage.setItem('token', token);
        this.props.onLoginToApp(username, fname, token);
    }

     onLogoutFromApp = () => {
        this.props.onLogoutFromApp();
    }


    handleSetState = (key, value) => 
    {
        this.setState(
            () => { return { [key]: value};},
            () => { console.log(this.state);}
        )
    }
    handleInputChange = e => {
        this.handleSetState(e.target.name, e.target.value);
    }
   loginUser = e =>{
    axios({
        method: 'post',
        url: "http://localhost:3001/api/auth",
        data: {
            email: this.state.email,
            password: this.state.pwd
        },
        headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json'
        }
    })
    .then(res => {
        if(res.data.error === false)
        {
            // Login to Application and Redux Store update
            this.onLoginToApp(String(this.state.email), String(res.data.payload.result.fname), String(res.data.payload.token));
            this.props.history.push('/home');
        }
        else if(res.data.error === true && res.data.payload.errormsg === 'exception')
        {
            this.handleSetState('networkerr', true);
        }
        else if(res.data.error === true && res.data.payload.errormsg === 'notfound')
        {
            this.handleSetState('loginerrorvisibility', true);
        }
        })
        .catch( (err)=> {
            //console.log(Object.getOwnPropertyNames(err));//**** */ to know the Properties of an Error-Object ******
            //console.log(Object.getOwnPropertyDescriptor(err, 'stack'));
            //console.log(Object.getOwnPropertyDescriptor(err, 'message'));
            var errmsg = Object.getOwnPropertyDescriptor(err, 'message').value;
            console.log(err);
            if ( errmsg === 'Network Error')
            {
                this.handleSetState('networkerr', true);
            }
        });

      
   }
    render() { 
        return ( 
        <div className="App">
        <h2> Mitchell Intelligent Glass</h2>
        <br />
            { this.state.loginerrorvisibility && 'Login Error'}
            <input type="email" name="email" onChange={this.handleInputChange} />
            <input type="password" name="pwd" onChange={this.handleInputChange} />
            <button type="button" onClick={this.loginUser}>Login</button>
        </div>);
    }
}
const mapStateToProps = (state) =>
{
    return state;
}

const mapActionsToProps = {
    onLogoutFromApp : LogoutFromApp,
    onLoginToApp : LoginToApp,
}

export default withRouter(connect(mapStateToProps, mapActionsToProps)(Login));