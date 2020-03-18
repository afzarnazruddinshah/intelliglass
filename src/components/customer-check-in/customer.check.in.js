import React, { Component } from 'react';
import axios from 'axios';
import { withRouter } from 'react-router-dom';

class CustomerCheckIn extends Component {
    state = { 
        image: '',
        text: ''
     }

     goToHome = e => {
        this.props.history.push('/home');
     }
     logout = e => 
     {
         this.props.history.push('/');
     }
    handleImageChange = (e) => {
        this.setState({
          image: e.target.files[0]
        });
      }

    
    uploadImage = e => {
        e.preventDefault();
        console.log(this.state.image);
        const data = new FormData();
        data.append('file', this.uploadInput.files[0]);
        axios({
            
            method: 'POST',
            url: 'http://127.0.0.1:5000/api/uploadImage',
            data,
            headers: {
            'Content-Type': 'multipart/form-data',
            }
        })
        .then( (res)=> {
           this.setState(
               () => { return { text: res.data}},
               () => { console.log(this.state.text);}
           )
        })
        .catch( err => {
            console.log(err);
        })
    }
    render() { 
        return (
            <div>
            <h2> Mitchell Intelligent Glass</h2>
                 <br />
             <button type="button" onClick={this.goToHome}>Dashboard</button>
                <button type="button" onClick={this.logout}>Logout</button>
                <p>Scan the License:</p>
                <input ref={(ref) => { this.uploadInput = ref; }} type="file" />

                <button type="button" onClick={this.uploadImage}>Upload</button>
                <h2>License: </h2>
                <p>{this.state.text}</p>
            </div>
          );
    }
}


export default withRouter(CustomerCheckIn);