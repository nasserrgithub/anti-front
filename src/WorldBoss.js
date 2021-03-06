import React, {Component} from 'react';

class WorldBoss extends Component {

	constructor(props) {
		super(props);
		this.state = {
			participants: []
		}
	}

	componentDidMount() {
	    fetch('https://pure-badlands-13349.herokuapp.com/worldboss')
	      .then(response => response.json())
	      .then(data => this.setState({participants: data}))
  	}

	render() {
		const {participants} = this.state;
		const participantsArray = participants.map((player, index) => {
			return (
				<div>
					{participants[index].ign}
				</div>
			)
		})
		return (
			<div>
				<strong>WORLD BOSS PARTICIPANTS</strong>
				{participantsArray}
			</div>
		)
	}
}

export default WorldBoss;