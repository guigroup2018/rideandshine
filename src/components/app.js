// import preact
import { h, Component } from 'preact';

// import required Components from 'components/'
import Iphone from './iphone';
import Ipad from './ipad';
import Tomorrow from './tomorrow';
import { Router } from 'preact-router';

export default class App extends Component {
//var App = React.createClass({

	handleRoute = e =>{
		this.currentUrl = e.url;
	}

	render(){

			return (
				<div id="app">
				<Router onChange={this.handleRoute}>
					<Iphone path = '/' />
					<Tomorrow path = '/tomorrow/' />
					</Router>
				</div>
			);
		}
	}
