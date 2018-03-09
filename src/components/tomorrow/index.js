// import preact
import { h, render, Component } from 'preact';
// import stylesheets for ipad & button
import style from './style';
import style_iphone from '../button/style_iphone';
// import jquery for API calls
import $ from 'jquery';
import { Link } from 'preact-router/match';

export default class Tomorrow extends Component {
//var Tomorrow = React.createClass({

	// a constructor with initial set states
	constructor(props){
		super(props);
        //calls function to get weather data
		this.fetchWeatherData() ;
	}

	// function to fetch weather data for tomorrow via wunderground
	fetchWeatherData = () => {
		// API URL with a structure of : ttp://api.wunderground.com/api/key/feature/q/country-code/city.json

		var url = "http://api.wunderground.com/api/a0f5a50344818e43/conditions/forecast/q/autoip.json";
        		$.ajax({
			url: url,
			dataType: "jsonp",
			success : this.parseResponse,
			error : function(req, err){ console.log('API call failed ' + err); }
		})

	}

	render() {

		return (
            /*  Main container */
			<div class={ style.container }>

                {/*  Ride&Shine logo container */} 
				<div class={ style.logo_container }>
				    <img src="../../assets/images/logo.png" height="100"/>
                </div>

                {/*  Navigation bar container: SETTINGS TODAY TOMORROW COMMUTE  */}    
                <div class= { style_iphone.container }>
                    {/*  Settings button  */}
				    <button id="settings"><img src = "../../assets/images/settings.png" height = "22"/></button>
                    {/*  TODAY button  */}
				    <Link href="/"><button id="today">TODAY</button></Link>
                    {/*  TOMORROW button  */}
				    <Link href="/tomorrow"><button id="tomorrow"><span style="background-color:#ffcd60;"><font color='#6dae9d'><u>TOMORROW</u></font></span></button></Link>
                    {/*  COMMUTE button  */}
				    <div class = { style_iphone.commute }><Link href="/commute"><button id="commute"><img src = "../../assets/images/commute.png" height = "22"/></button></Link>
				    </div>
                </div>

                {/*  Bike animation container  */} 
                <div class={ style.bike_container }>
                    {/*  Display current city  */} 
                    <div class={ style.city }>{ this.state.location }
                    </div>
                    {/*  Display last refresh */} 
                    <div class={ style.refresh}>{this.state.tomorrowday}
                    </div>
                </div>

                {/* Gradient container  */} 
                <div class ={ style.gradient }>
                </div>

                {/*  Container for the 2x2 grid displaying weather information. */}
                <div class = { style.weatherinfo }>
            
                  {/*  TOP LEFT: Display conditions for tomorrow icon via ternary condition */}
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
                
                 {/*  TOP RIGHT: Display tomorrows wind information */}
                <div class={ style.weatheritem }> { this.state.windspeed }

								{
								this.state.winddir==='N'  ? <img src = "../../assets/icons/arrowN.png" height = "26" align= "middle" hspace="10"/> :
								this.state.winddir==='NW'|| this.state.winddir==='NNW' || this.state.winddir==='WNW'  ? <img src = "../../assets/icons/arrowNW.png" height = "26" align= "middle" hspace="10"/> :
								this.state.winddir==='NE' || this.state.winddir==='NNE' || this.state.winddir==='ENE' ? <img src = "../../assets/icons/arrowNE.png" height = "26" align= "middle" hspace="10"/> :
								this.state.winddir==='E'  ? <img src = "../../assets/icons/arrowE.png" height = "26" align= "middle" hspace="10"/> :
								this.state.winddir==='SE' || this.state.winddir==='SSE'|| this.state.winddir==='ESE'?  <img src = "../../assets/icons/arrowSE.png" height = "26" align= "middle" hspace="10"/> :
								this.state.winddir==='S'  ? <img src = "../../assets/icons/arrowS.png" height = "26" align= "middle" hspace="10"/> :
								this.state.winddir==='SW' || this.state.winddir==='SSW'|| this.state.winddir==='WSW'?  <img src = "../../assets/icons/arrowSW.png" height = "26" align= "middle" hspace="10"/>
								: <img src = "../../assets/icons/arrowW.png" height = "26" align= "middle" hspace="10"/>
								}
                </div>

                {/*  BOTTOM LEFT: Display tomorrows temperature information */}
                <div class={ style.weatheritem }>
                    <div class={ style.temperatureinfo }>
                        <div class={ style.weatheritem }><font size="6">Hi: </font>
                        { this.state.tempmax } <font size="4">&deg; C</font>
                        </div>
                        <div class={ style.weatheritem }><font size="6">Low: </font>
                        { this.state.tempmin } <font size="4">&deg; C</font>
                        </div>
                    </div>
                </div>

                {/*  BOTTOM RIGHT: Display tomorrows chance of rain */}
				<div class= { style.weatheritem}>{ this.state.rainprob }<img src = "../../assets/icons/chancerain.png" height = "60" align = "middle"/>
                </div>

            </div>

        </div>


		);
	}

    // Parse responses from weather API call. The 1 signifies the tomorrow period.
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

		// Use the parsed responses to set states
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

}
