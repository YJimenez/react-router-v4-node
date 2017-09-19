import React, { Component } from 'react';

export default class Home extends Component {
	handleClick(e){
		alert('click works');
		console.log(e);
	}
	
	render() {
		return (
			<div>
				<h1>Home</h1>
				<button onClick={this.handleClick}>Click</button>
			</div>
		);
	}
}