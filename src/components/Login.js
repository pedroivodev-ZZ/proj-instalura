import React, {Component} from 'react'

export default class Login extends Component {

    constructor(props) {
        super(props)

        const search = props.location.search;
        const params = new URLSearchParams(search);

        this.state = {
            msg: params.get('msg')
        }

        this.enviarDados = this.enviarDados.bind(this)
    }

    enviarDados(event) {
        event.preventDefault()

        const requestInfo = {
            method: 'POST',
            headers: new Headers({
                'Content-Type': 'application/json'
            }),
            body: JSON.stringify({
                login: this.login.value,
                senha: this.senha.value
            }) 
        }

        fetch('http://localhost:8080/api/public/login', requestInfo)
        .then(response => {
            if (response.ok) {
                return response.text()
            } else {
                throw new Error('Login inválido')
            }
        })
        .then(token => {
            localStorage.setItem('auth-token', token)
            this.props.history.push('/timeline')
        }).catch(err => this.setState({msg: err.message}))
    }

    render() {
        return (
            <div className="login-box">
                <h1 className="header-logo">Instalura</h1>
                <span>{this.state.msg}</span>
                <form onSubmit={this.enviarDados}> 
                    <input type="text" ref={(input) => this.login = input} />
                    <input type="password" ref={(input) => this.senha = input} />
                    <input type="submit" value="login"/>
                </form>
            </div>
        )
    }
}