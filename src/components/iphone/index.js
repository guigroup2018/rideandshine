// import preact
import { h, render, Component } from 'preact';
// import stylesheets for ipad & button
import style from './style';
import style_iphone from '../button/style_iphone';
// import jquery for API calls
import $ from 'jquery';
// import the Button component
import CloudButton from '../weatherbuttons/cloudbutton';
import SunButton from '../weatherbuttons/sunbutton';
import RainButton from '../weatherbuttons/rainbutton';
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
		this.fetchAstronomyData();
		this.fetchHourlyData();
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

	}

	fetchAstronomyData = () => {
		// API URL with a structure of : ttp://api.wunderground.com/api/key/feature/q/country-code/city.json
		var url = "http://api.wunderground.com/api/f6ba841d9cd4c902/astronomy/q/France/Paris.json";
		$.ajax({
			url: url,
			dataType: "jsonp",
			success : this.parseResponseTwo,
			error : function(req, err){ console.log('API call failed ' + err); }
		})

	}

	fetchHourlyData = () => {
		// API URL with a structure of : ttp://api.wunderground.com/api/key/feature/q/country-code/city.json
		var url = "http://api.wunderground.com/api/f6ba841d9cd4c902/forecast/q/France/Paris.json";
		$.ajax({
			url: url,
			dataType: "jsonp",
			success : this.parseResponseThree,
			error : function(req, err){ console.log('API call failed ' + err); }
		})

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

                <div class= {style_iphone.container}>
				    <button id="settings"><img src = "../../assets/images/settings.png" height = "22"/></button>
				    <button id="today">TODAY</button>
				    <button id="tomorrow">TOMORROW</button>
				    <button id="settings"><img src = "../../assets/images/commute.png" height = "22"/></button>
				</div>

				<div class={ style.bike_container }> {/* Container for our GIF */}
                    <div class={ style.city }>{ this.state.locate }
                    </div>
                    <div class={ style.refresh}>{this.state.lastupdate}
                    </div>
                    <div class={style.poll_vis}>
				        <p>Pollution</p>
				      <div class={ style.sunrise}> Sunset:{this.state.sunset}:{this.state.sunsetmin} Sunrise: {this.state.sunrise}:{this.state.sunrisemin}
								</div>
				    </div>
				</div>

                <div class = { style.weatherinfo }>

                    <div class= { style.weatheritem}>
            	       { this.state.cond==='Clear' ? <SunButton class = {style_iphone.button } /> : null }
                        { this.state.cond==='Rain' ? <RainButton class ={style_iphone.button } /> :  null }
                        { this.state.cond==='Clouds' ? <CloudButton class = {style_iphone.button } /> : null }
                    </div>

                    <div class={ style.weatheritem }> { this.state.windkph }
                        <font size = "6"> kph</font>
                    </div>

                    <div class={ style.weatheritem }> { this.state.temp }
                        &deg;<font size = "4">C</font>
                    </div>

				    <div class= { style.weatheritem}>{ this.state.poperc }% 
                    </div>

                </div>

			</div>


		);
	}

	parseResponse = (parsed_json) => {
		var location = parsed_json['current_observation']['display_location']['city'];
		var temp_c = parsed_json['current_observation']['temp_c'];
        var conditions = 'Clear';
		//var conditions = parsed_json['current_observation']['weather'];
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

	parseResponseTwo = (parsed_json) => {
			var sunset = parsed_json['sun_phase']['sunset']['hour'];
			var sunsetmin = parsed_json['sun_phase']['sunset']['minute'];
			var sunrise = parsed_json['sun_phase']['sunrise']['hour'];
			var sunrisemin = parsed_json['sun_phase']['sunrise']['minute'];

			this.setState({

			sunset: sunset,
			sunsetmin: sunsetmin,
			sunrise: sunrise,
			sunrisemin: sunrisemin

		});

	}

	parseResponseThree = (parsed_json) => {
			var poperc = parsed_json['forecast']['txt_forecast']['forecastday'][0]['pop'];


			this.setState({

				poperc: poperc


		});

	}


}
