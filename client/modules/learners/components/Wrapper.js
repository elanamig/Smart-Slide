import React, { Component } from 'react';
import socket from '../../../socket'


class Wrapper extends Component {
	constructor(props) {
		super(props);
		this.state = {
			name: name
		};
		this.handleSubmit = this.handleSubmit.bind(this)
	}
	handleSubmit(e){
		e.preventDefault()
		socket.emit('addLearner', this.input.value)
		this.props.makeCurrent(this.input.value)
	}
	render() {
		return (
			<div>
				Test form
				{this.props.learners.current ?
				<div>
					<div>
						<h1>Instructor</h1>
						<div>{this.props.instructor.name}</div>
					</div>
					<div>
						<h1>Learners</h1>
					</div>

						{this.props.learners.list.map((learner, ind) => <div key={ind}>{learner.name}</div>)}
					</div> :
					<form onSubmit={this.handleSubmit}>
						<input ref={input => this.input = input}name="name"/>
						<button>submit</button>
					</form>
				}



			</div>
		);
	}

}

export default Wrapper;
