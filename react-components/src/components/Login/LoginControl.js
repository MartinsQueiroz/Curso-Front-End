import React from 'react'
import Greeting from './index'

export default class LoginControl extends React.Component {
    constructor(props) {
        super(props)

        this.handleLoging = this.handleLoging.bind(this)

        this.handleLogout = this.handleLogout.bind(this)

        this.handleName = this.handleName.bind(this)

        this.state = {
                isLoggedIn: false,
                name: ''
        }
    }

    handleLoging() {
        this.setState({isLoggedIn: true})
    }

    handleLogout() {
        this.setState({isLoggedIn: false})
    }

    handleName(name){
        this.setState({name: name})
    }

    render() {
        const isLoggedIn = this.state.isLoggedIn

        let button

        if(isLoggedIn) {
            button = <button onClick={this.handleLogout}>Sair</button>
        } else {
            button = <div>
                    <input placeholder='digite seu nome' onChange={e => this.handleName(e.target.value)} /> 
                    <button onClick={this.handleLoging}>Entrar</button>
                </div>
        }
        return(
            <div>
                <Greeting isLoggedIn={isLoggedIn} name={this.state.name} />
                {button}
            </div>
        )
    }
}