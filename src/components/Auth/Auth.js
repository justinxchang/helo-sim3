import React, {Component} from 'react'
import axios from 'axios'
import {connect} from 'react-redux'
import {updateInfo} from '../../ducks/reducer'

class Auth extends Component {
    constructor(props){
        super(props)

        this.state = {
            username: '',
            password: ''
        }
        this.handleUsername = this.handleUsername.bind(this)
        this.handlePassword = this.handlePassword.bind(this)
        this.login = this.login.bind(this)
        this.register = this.register.bind(this)
    }

    handleUsername(value){
        this.setState({username: value})
    }

    handlePassword(value){
        this.setState({password: value})
    }

    login(){
        const user = {
            username: this.state.username,
            password: this.state.password
        }
        axios.post('/api/login', user)
            .then(res => {
                console.log(res.data)
            })
    }

    register(){
        const user = {
            username: this.state.username,
            password: this.state.password
        }
        // const {username, password} = this.state
        axios.post('/api/register', user)
            .then(res => {
                console.log(res.data)
            })
    }

    render(){
        return (
            <div>
                <input value={this.state.username} onChange={(event) => this.handleUsername(event.target.value)} type="text" placeholder="username"/>
                <input value={this.state.password} onChange={(event) => this.handlePassword(event.target.value)} type="text" placeholder="password"/>
                <button onClick={this.login}>Login</button>
                <button onClick={this.register}>Register</button>
            </div>
        )
    }
}

export default connect (null, {updateInfo})(Auth)