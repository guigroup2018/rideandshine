// import preact
import { h, render, Component } from 'preact';
// import stylesheets for ipad & button
import style from './style';
import style_iphone from '../button/style_iphone';
// import jquery for API calls
import $ from 'jquery';
// import the Button component
import Button from '../button';
import { Link } from 'preact-router/match';

export default class Tomorrow extends Component {
//var Tomorrow = React.createClass({

	// a constructor with initial set states
	constructor(props){
		super(props);
		this.fetchWeatherData() ;
		//this.fetchLocationData();

	}

	// a call to fetch weather data via wunderground
	fetchWeatherData = () => {
		// API URL with a structure of : ttp://api.wunderground.com/api/key/feature/q/country-code/city.json

		var url = "http://api.wunderground.com/api/84d1dff8599a94b2/forecast/conditions/q/autoip.json";
        		$.ajax({
			url: url,
			dataType: "jsonp",
			success : this.parseResponse,
			error : function(req, err){ console.log('API call failed ' + err); }
		})

	}
/*
	fetchLocationData = () => {
		// API URL with a structure of : ttp://api.wunderground.com/api/key/feature/q/country-code/city.json
		var url = "http://api.wunderground.com/api/84d1dff8599a94b2/conditions/q/autoip.json";
		$.ajax({
			url: url,
			dataType: "jsonp",
			success : this.parseResponseThree,
			error : function(req, err){ console.log('API call failed ' + err); }
		})

	}
*/

	render() {

		return (
			<div class={ style.container }>

				<div class={ style.logo_container }>
				    <img src="../../assets/images/logo.png" height="100"/>
                </div>

            <div class= { style_iphone.container }>
				<button id="settings"><img src = "../../assets/images/settings.png" height = "22"/></button>
				<Link href="/"><button id="today">TODAY</button></Link>

				<Link href="/tomorrow"><button id="tomorrow"><span style="background-color:#ffcd60;"><font color='#6dae9d'><u>TOMORROW</u></font></span></button></Link>
				<div class = { style_iphone.commute }><Link href="/commute"><button id="commute"><img src = "../../assets/images/commute.png" height = "22"/></button></Link>
				</div>
            </div>

            <div class={ style.bike_container }> {/* Container for our GIF */}
                <div class={ style.city }>{ this.state.location }
                </div>
                <div class={ style.refresh}>{this.state.tomorrowday}
                </div>
            </div>

            <div class ={ style.gradient }>
            </div>

            <div class = { style.weatherinfo }>
                <div class= { style.weatheritem}>
              
            	   {
					this.state.cond==='Clear' ? <img src = "../../assets/icons/sun.png" height = "100" align = "middle" /> :
					this.state.cond==='Rain' ? <img src = "../../assets/icons/rain.png" height = "100" align = "middle" /> :
					this.state.cond==='Cloudy' ? <img src = "../../assets/icons/cloud.png" height = "100" align = "middle" /> :
					this.state.cond==='Snow' ? <img src = "../../assets/icons/snow.png" height = "100" align = "middle" /> :
 					this.state.cond==='Mostly Sunny' ? <img src = "../../assets/icons/mostlysunny.png" height = "100" align = "middle" /> :
 					this.state.cond==='Partly Sunny' ? <img src = "../../assets/icons/partlysunny.png" height = "100" align = "middle" /> :
					this.state.cond==='Hazy' ? <img src = "../../assets/icons/hazy.png" height = "100" align = "middle" /> :
 					this.state.cond==='Partly Cloudy' ? <img src = "../../assets/icons/partlycloudy.png" height = "100" align = "middle" /> :
 					this.state.cond==='Mostly Cloudy' ? <img src = "../../assets/icons/mostlycloudy.png" height = "100" align = "middle" /> :
					this.state.cond==='Thunderstorm' ? <img src = "../../assets/icons/tstorms.png" height = "100" align = "middle" /> :
					this.state.cond==='Sleet' ? <img src = "../../assets/icons/sleet.png" height = "100" align = "middle" /> :
					this.state.cond==='Flurries' ? <img src = "../../assets/icons/flurries.png" height = "100" align = "middle" /> :
					this.state.cond==='Fog' ? <img src = "../../assets/icons/hazy.png" height = "100" align = "middle" />
					: <img src = "../../assets/icons/cloud.png" height = "100" align = "middle" />
				    }
                </div>

                <div class={ style.weatheritem }> { this.state.windspeed }
                    <font size = "6"> kph</font>
			             {/*}

						{ this.state.winddir==='N'  ? <img src = "../../assets/wind/N.png" height = "45"/> :
						this.state.winddir==='NW'|| this.state.winddir==='NNW' || this.state.winddir==='WNW'  ? <img src = "../../assets/wind/NW.png" height = "45"/> :
						this.state.winddir==='NE' || this.state.winddir==='NNE' || this.state.winddir==='ENE' ? <img src = "../../assets/wind/NE.png" height = "45"/> :
						this.state.winddir==='E'  ? <img src = "../../assets/wind/E.png" height = "45"/> :
						this.state.winddir==='SE' || this.state.winddir==='SSE'|| this.state.winddir==='ESE'?  <img src = "../../assets/wind/SE.png" height = "45"/> :
						this.state.winddir==='S'  ? <img src = "../../assets/wind/S.png" height = "45"/> :
						this.state.winddir==='SW' || this.state.winddir==='SSW'|| this.state.winddir==='WSW'?  <img src = "../../assets/wind/SW.png" height = "45"/>
						: null
						}
                        */}
                </div>

                <div class={ style.weatheritem }>
                    <div class={ style.temperatureinfo }>
                        <div class={ style.weatheritem }><font size="6">Hi: </font>
                        { this.state.tempmax } <font size="4">&deg; C</font></div>
                        <div class={ style.weatheritem }><font size="6">Low: </font>
                        { this.state.tempmin } <font size="4">&deg; C</font></div>
                    </div>
                </div>

				<div class= { style.weatheritem}>{ this.state.rainprob }<img src = "../../assets/icons/chancerain.png" height = "60" align = "middle"/>
                </div>

            </div>

        </div>


		);
	}

	parseResponse = (parsed_json) => {
		// var location = parsed_json['current_observation']['display_location']['city'];
		var conditions = parsed_json['forecast']['simpleforecast']['forecastday'][1]['conditions'];
        var wind_kph = parsed_json['forecast']['simpleforecast']['forecastday'][1]['avewind']['kph'];
        var wind_dir = parsed_json['forecast']['simpleforecast']['forecastday'][1]['avewind']['dir'];
        var temp_c_max = parsed_json['forecast']['simpleforecast']['forecastday'][1]['high']['celsius'];
        var temp_c_min = parsed_json['forecast']['simpleforecast']['forecastday'][1]['low']['celsius'];
        var rainprob = parsed_json['forecast']['txt_forecast']['forecastday'][1]['pop'];
	    var day = parsed_json['forecast']['simpleforecast']['forecastday'][1]['date']['weekday'];
			var location = parsed_json['current_observation']['display_location']['city'];

		// set states for fields so they could be rendered later on
		this.setState({
            cond : conditions,
            windspeed : wind_kph,
            winddir : wind_dir,
            tempmax : temp_c_max,
            tempmin : temp_c_min,
            rainprob : rainprob,
            tomorrowday : day,
						location: location

		});
	}

/*
	parseResponseThree = (parsed_json) => {
			var location = parsed_json['current_observation']['display_location']['city'];

			this.setState({
				location: location
		});
	}
*/

}
