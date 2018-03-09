// import preact
import { h, Component } from 'preact';

//import Router
import { Router } from 'preact-router';

// import required Components from 'components/'
import Iphone from './iphone';
import Ipad from './ipad';
import Tomorrow from './tomorrow';
import Commute from './commute';
import Hourly from './hourly';


export default class App extends Component {
//var App = React.createClass({

    //Function to deal with routing. Receives the page to navigate
    //to as props when link is clicked, and changes URL accordingly
	handleRoute = e =>{
		this.currentUrl = e.url;
	}

	render(){
			return (
				<div id="app">
                
                    {/*  Sets URL paths within the app; */}
				    <Router onChange={this.handleRoute}>
					   <Iphone path = '/' />
					   <Tomorrow path = '/tomorrow/' />
					   <Commute path = '/commute'/>
					   <Hourly path = '/hourly'/>
				    </Router>
				</div>
			);
		}
	}
