import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Menu from './menu.jsx'
import Home from './home.jsx'
import NotFound from './notfound.jsx'

class App extends Component{
	
	render(){	
		return (
			<div>
				<Menu />
				<hr/>
				<Switch>
					<Route 
						exact path="/"
						render={ () =>
							<Home
								
							/>
						}
					/> 
					<Route path="/about" component={About} /> 
					<Route path="/contact" component={Contact} /> 
					<Route component={NotFound}/>  
				</Switch> 
			</div> 
		);
	}
}

export default App;

//About
const About = ()=>(
	<div>
		<h1>About</h1>
		<p>This is about</p>
	</div>
)

//contact
const Contact = ()=>(
	<div>
		<h1>Contact</h1>
		<p>This is contact</p>
	</div>
)