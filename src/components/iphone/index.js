// import preact
import { h, render, Component } from 'preact';
// import stylesheets for ipad & button
import style from './style';
import style_iphone from '../button/style_iphone';
// import jquery for API calls
import $ from 'jquery';
// import the Button component
import Button from '../button';

export default class Iphone extends Component {
//var Iphone = React.createClass({

	// a constructor with initial set states
	constructor(props){
		super(props);
		// temperature state
		this.state.temp = "";
		// button display state
		this.setState({ display: true });
		this.fetchWeatherData() ;
	}

	// a call to fetch weather data via wunderground
	fetchWeatherData = () => {
		// API URL with a structure of : ttp://api.wunderground.com/api/key/feature/q/country-code/city.json
		var url = "http://api.wunderground.com/api/f6ba841d9cd4c902/conditions/q/France/Paris.json";
		$.ajax({
			url: url,
			dataType: "jsonp",
			success : this.parseResponse,
			error : function(req, err){ console.log('API call failed ' + err); }
		})
		// once the data grabbed, hide the button
		this.setState({ display: false });
	}



	// the main render method for the iphone component
	render() {
		// check if temperature data is fetched, if so add the sign styling to the page
		const tempStyles = this.state.temp ? `${style.temperature} ${style.filled}` : style.temperature;
			// display all weather data
		return (
			<div class={ style.container }>
				<div class={ style.logo_container }>
				<img src="../../assets/images/logo.png" height="100"/>

					</div>
					<div class= { style_iphone.body }>
		{/*}			<div class= { style_iphone.container }>
						<Button class = {style_iphone.button }   />
						<Button class = {style_iphone.button }  />
						<Button class = {style_iphone.button }  />
						<Button class = {style_iphone.button }  /> */}
						<div class= {style_iphone.container}>
							<button id="settings"><img src = "../../assets/images/settings.png" height = "22"/></button>
							<button id="today">TODAY</button>
							<button id="tomorrow">TOMORROW</button>
							<button id="settings"><img src = "../../assets/images/commute.png" height = "22"/></button>
						</div>
		{/*}			</div> */}
					<div class={ style.bike_container }> {/* Container for our GIF */}

						<div class={ style.city }>{ this.state.locate }</div>
						<div class={ style.refresh}>{this.state.lastupdate}</div>
						<div class={style.poll_vis}>
							<p>Pollution</p>
							<p>Visibility</p>
						</div>
					</div>

									<div class= { style_iphone.container }></div>

					<div class={ style.conditions }>{ this.state.cond }</div>
					<span class={ tempStyles }>{ this.state.temp }</span>


				<div class={ style.details }></div>
				<div class= { style.wind }>{this.state.windkph} km/h {this.state.winddir}</div>
				<div class= { style.precip }>{this.state.precip} </div>

			</div>

				</div>
		);
	}

	parseResponse = (parsed_json) => {
		var location = parsed_json['current_observation']['display_location']['city'];
		var temp_c = parsed_json['current_observation']['temp_c'];
		var conditions = parsed_json['current_observation']['weather'];
		var wind_kph = parsed_json['current_observation']['wind_kph'];
		var last_update = parsed_json['current_observation']['observation_time'];
		var precip = parsed_json['current_observation']['precip_today_metric'];
		var wind_dir = parsed_json['current_observation']['wind_dir'];

		// set states for fields so they could be rendered later on
		this.setState({
			locate: location,
			temp: temp_c,
			cond : conditions,
			windkph : wind_kph,
			lastupdate: last_update,
			precip : precip,
			winddir: wind_dir
		});
	}
}
