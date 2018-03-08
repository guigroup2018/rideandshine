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
	//	this.fetchAstronomyData();
	//	this.fetchDailyData();
		this.fetchPollution();

	}

	// a call to fetch weather data via wunderground
	fetchWeatherData = () => {
		// API URL with a structure of : ttp://api.wunderground.com/api/key/feature/q/country-code/city.json

		var url = "http://api.wunderground.com/api/a0f5a50344818e43/astronomy/conditions/forecast/q/autoip.json";

		$.ajax({
			url: url,
			dataType: "jsonp",
			success : this.parseResponse,
			error : function(req, err){ console.log('API call failed ' + err); }
		})

	}
/*
	fetchAstronomyData = () => {
		// API URL with a structure of : ttp://api.wunderground.com/api/key/feature/q/country-code/city.json
		var url = "http://api.wunderground.com/api/f6ba841d9cd4c902/astronomy/q/autoip.json";
		$.ajax({
			url: url,
			dataType: "jsonp",
			success : this.parseResponseTwo,
			error : function(req, err){ console.log('API call failed ' + err); }
		})

	}

	fetchDailyData = () => {
		// API URL with a structure of : ttp://api.wunderground.com/api/key/feature/q/country-code/city.json
		var url = "http://api.wunderground.com/api/f6ba841d9cd4c902/forecast/q/autoip.json";
		$.ajax({
			url: url,
			dataType: "jsonp",
			success : this.parseResponseThree,
			error : function(req, err){ console.log('API call failed ' + err); }
		})

	}
*/
	fetchPollution = () => {
		// API URL with a structure of : ttp://api.wunderground.com/api/key/feature/q/country-code/city.json
		var url = "http://api.airvisual.com/v2/nearest_city?key=rTa9J2P3FXqYAmWNP";
		$.ajax({
			url: url,
			dataType: "json",
			success : this.parseResponseFour,
			error : function(req, err){ console.log('API call failed ' + err); }
		})

	}

	openNav = () =>  {
	    document.getElementById("mySidenav").style.width = "250px";
	}

	/* Set the width of the side navigation to 0 */
closeNav = () => {
	    document.getElementById("mySidenav").style.width = "0";
	}

	// the main render method for the iphone component
	render() {
        // display all weather data
		return (

			<div class={ style.container }>
			<div class= { style_iphone.container} >
			<div  id ="mySidenav" class= { style.sidenav }>

			 <button className="settings" onclick= {this.closeNav} ><img src = "../../assets/images/settings.png" height = "22"/></button>

			 <div class ={style.sideBtns} onclick= {this.closeNav}>

			 <p>Settings</p>
			 </div>
			 </div>
			</div>

				<div class={ style.logo_container }>
				    <img src="../../assets/images/logo.png" height="100"/>
                </div>
            <div class= { style_iphone.container} >

{/*
						<div class = { style.dropdown} >
						<select>
						  <option value="grapefruit">Grapefruit</option>
						  <option value="lime">Lime</option>
						  <option selected value="coconut">Coconut</option>
						  <option value="mango">Mango</option>
						</select>
						</div>
*/}

					<button className="settings" onclick= {this.openNav} ><img src = "../../assets/images/settings.png" height = "22"/></button>
					 <button id="today"><u>TODAY</u></button>
				    <Link href="/tomorrow"><button id="tomorrow">TOMORROW</button></Link>
				    <div class = { style_iphone.commute }><Link href="/commute"><button id="commute"><img src = "../../assets/images/commute.png" height = "22"/></button></Link>

			</div>
				</div>

				<div class={ style.bike_container }> {/* Container for our GIF */}
                    <div class={ style.city }>{ this.state.locate }
                    </div>
                    <div class={ style.refresh}>{this.state.lastupdate}
                    </div>
                    <div class={style.poll_vis}>
				        {   this.state.pollution <= 50 ? <font color = 'green' size = "5">&#9670;</font> :
				            this.state.pollution <= 100 ? <font color = 'yellow' size = "5">&#9670;</font> :
							this.state.pollution <= 150 ? <font color = 'orange' size = "5">&#9670;</font>:
							this.state.pollution > 150 ? <font color = 'red' size = "5">&#9670;</font>
							: null
						} POLLUTION
				            <div><img src = "../../assets/icons/sunset.png" height = "14" width = "22"/>{this.state.sunrise}:{this.state.sunrisemin} | {this.state.sunset}:{this.state.sunsetmin}
				            </div>
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

                    <div class={ style.weatheritem }>  { this.state.windkph }

			             {/*  <font size = "6"> kph</font> */}


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

                    <div class={ style.weatheritem }> { this.state.temp }
                        &deg;<font size = "4"><b>C</b></font>
                    </div>

				    <div class= { style.weatheritem}>{ this.state.poperc }<img src = "../../assets/icons/chancerain.png" height = "60" align = "top"/>
                    </div>

                </div>

			<div class = { style_iphone.arrow }><Link href = "/hourly"><button id = "arrow"><img src = "../../assets/icons/arrowhead.png" height = '18'/></button></Link></div>

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
		var sunset = parsed_json['sun_phase']['sunset']['hour'];
		var sunsetmin = parsed_json['sun_phase']['sunset']['minute'];
		var sunrise = parsed_json['sun_phase']['sunrise']['hour'];
		var sunrisemin = parsed_json['sun_phase']['sunrise']['minute'];
		var poperc = parsed_json['forecast']['txt_forecast']['forecastday'][0]['pop'];

		// set states for fields so they could be rendered later on
		this.setState({
			locate: location,
			temp: temp_c,
			cond : conditions,
		//	cond: 'clear',
			windkph : wind_kph,
			lastupdate: last_update,
			precip : precip,
			winddir: wind_dir,
			sunset: sunset,
			sunsetmin: sunsetmin,
			sunrise: sunrise,
			sunrisemin: sunrisemin,
			poperc: poperc


		});
	}

/*
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
*/
	parseResponseFour = (parsed_json) => {
			var pollution = parsed_json['data']['current']['pollution']['aqius'];

			this.setState({
					pollution: pollution
		});

	}



}
