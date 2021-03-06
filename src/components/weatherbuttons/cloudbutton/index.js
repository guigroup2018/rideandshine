// import preact
import { h, render, Component } from 'preact';

export default class CloudButton extends Component {

	// rendering a function when the button is clicked
	render({clickFunction}) {
		if(!clickFunction){
			clickFunction = () => {
				console.log("passed something as 'clickFunction' that wasn't a function !");
			}
		}
		return (
			<div>
				<img src="../../assets/icons/cloud.png"/>
			</div>
		);
	}
}
