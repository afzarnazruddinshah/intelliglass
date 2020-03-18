import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

class Dashboard extends Component {
    state = {  }

    goToCustCheckIn = e => {
        this.props.history.push('/customer-check-in');
    }

    vehCheckIn = e => 
    {
        alert("Vehicle Check-in is under construction");
    }

    logout = e => {
        this.props.history.push('/');
    }
    render() { 
        return ( 
            <div>
                <h2> Mitchell Intelligent Glass</h2>
                        <br />
                     
                <button type="button" onClick={this.goToCustCheckIn}>Customer Check In</button>
                <button type="button" onClick={this.vehCheckIn}>Vehicle Check In</button>
                    &nbsp;
                <button type="button" onClick={this.logout}>Logout</button>
            </div>
         );
    }
}
 
export default withRouter(Dashboard);