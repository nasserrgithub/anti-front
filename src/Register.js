import React, {Component} from 'react';
import './Register.css';

class Register extends Component {

	constructor(props) {
		super(props)
		this.state = {
			code: '',
			ign: ''
		}
	}

	onCodeChange = (event) => {
		this.setState({code: event.target.value})
	}

	onNameChange = (event) => {
		this.setState({ign: event.target.value})
	}

	onSubmit = () => {
		if (this.state.code === 'roadto#1'){
			fetch('http://localhost:3000/register', {
				method: 'post',
				headers: {'Content-Type': 'application/json'},
				body: JSON.stringify({
					ign: this.state.ign
				})
			})
			.then(response => response.json())
			.then(player => {
				if(player.id){
					this.props.onRouteChange('worldboss')
				}
			})
		}
	}

	render() {
		return (
			<div>
				<h1 style={{marginTop: '100px'}}>Welcome to Anti!</h1>
				<input onChange={this.onCodeChange} type="password" class="form-control" id="inputPassword" placeholder="Enter code given by Python"/>
				<input onChange={this.onNameChange} type="text" class="form-control" id="inputPassword" placeholder="Enter your IGN"/>
				<button
					onClick={this.onSubmit}
					type="button" 
					class="btn btn-dark">Register to World Boss
				</button>
			</div>
		)
	}
}

export default Register;