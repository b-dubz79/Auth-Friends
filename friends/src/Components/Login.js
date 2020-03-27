import React, { useState } from 'react'
import axios from 'axios'
import {axiosWithAuth} from '../Utils/axiosWithAuth'

class Login extends React.Component {
   constructor(props){
   super(props);
    this.state = {
        credentials: {
        username: '',
        password: ''
        }
    }
}

    handleChange = e => {
        this.setState({
            credentials: {
                ...this.state.credentials,
                [e.target.name]: e.target.value
            }
        })
    }



        //post request sending credentials to api
            login = e => {
            e.preventDefault();
            axiosWithAuth()
            .post('/api/login', this.state.credentials)
        .then(res => {
            localStorage.setItem('token', res.data.payload);
            this.props.history.push('/FriendsList')
    })
        .catch(err => console.log(err))
        }       
    
    
    render(){
        return(
            <div>
                <form onSubmit={this.login}>
                    <input
                    type='text'
                    name='username'
                    value={this.state.credentials.username}
                    onChange={this.handleChange}
                    />
                     <input
                    type='text'
                    name='password'
                    value={this.state.credentials.password}
                    onChange={this.handleChange}
                    />
                    <button>Log in</button>
                   
                </form>
            </div>
        )
    }
    
}

export default Login