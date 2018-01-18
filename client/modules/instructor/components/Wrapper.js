import React, { Component } from 'react';
import socket from '../../../socket'

class Wrapper extends Component {
	constructor(props) {
		super(props);
		this.handleSubmit=this.handleSubmit.bind(this)
	}
	handleSubmit(e){
		e.preventDefault()
		socket.emit('addInstructor', this.input.value)
	}
	render() {
		return (
			<div>
				Instructor
				{!this.props.instructor.name ?
					<form onSubmit={this.handleSubmit}>
					<input ref={input => this.input = input} name="name"/>
					<button>submit</button>
				</form>
				:
				<div>
					<h1>Learners</h1>
					{this.props.learners.list.map(learner => <div key={learner.name}>{learner.name}</div>)}
				</div>
			}
			</div>
		);
	}

}

export default Wrapper;
