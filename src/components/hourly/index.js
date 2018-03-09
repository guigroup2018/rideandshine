// import preact
import { h, render, Component } from 'preact';
// import stylesheets for ipad & button
import style from './style';
import style_iphone from '../button/style_iphone';
// import jquery for API calls
import $ from 'jquery';
import { Link } from 'preact-router/match';

export default class Hourly extends Component {
//var Iphone = React.createClass({

	// constructor which calls the methods to get weather data
	constructor(props){
		super(props);
		this.fetchWeatherData() ;
	}

	// a call to fetch weather data via wunderground
	fetchWeatherData = () => {
		// API URL with a structure of : ttp://api.wunderground.com/api/key/feature/q/country-code/city.json
		var url = "http://api.wunderground.com/api/a0f5a50344818e43/hourly/q/autoip.json";

		$.ajax({
			url: url,
			dataType: "jsonp",
			success : this.parseResponseHourly,
			error : function(req, err){ console.log('API call failed ' + err); }
		})

	}
    
	// the main render method
	render() {

		return (
            //Main container
			<div class={ style.container }>

                {/* Ride&Shine logo container */}
				<div class={ style.logo_container }>
				    <img src="../../assets/images/logo.png" height="100"/>
                </div>
            
                {/* Navigation bar container SETTINGS TODAY TOMORROW COMMUTE */}
                <div class= { style_iphone.container }>
				    <button id="settings"><img src = "../../assets/images/settings.png" height = "22"/></button>
				    <Link href="/"><button id="today">TODAY</button></Link>
				    <Link href="/tomorrow"><button id="tomorrow">TOMORROW</button></Link>
				    <div class = { style_iphone.commute }><Link href="/commute"><button id="commute"><img src = "../../assets/images/commute.png" height = "22"/></button></Link>
				    </div>
				</div>

                {/* Hourly info display */}
				<div class={ style.row_light }>

                    {/* Hour 1 */}
                    <div class={ style.time }>{ this.state.hour1 }:00
                    </div>

                    <div class={ style.conditions}>
						{
			 			 this.state.cond1==='Clear' ? <img src = "../../assets/icons/sun.png" height = "40" align = "middle" /> :
						 this.state.cond1==='Rain' ? <img src = "../../assets/icons/rain.png" height = "40" align = "middle" /> :
						 this.state.cond1==='Cloudy' ? <img src = "../../assets/icons/cloud.png" height = "40" align = "middle" /> :
						 this.state.cond1==='Snow' ? <img src = "../../assets/icons/snow.png" height = "40" align = "middle" /> :
						 this.state.cond1==='Mostly Sunny' ? <img src = "../../assets/icons/mostlysunny.png" height = "40" align = "middle" /> :
						 this.state.cond1==='Partly Sunny' ? <img src = "../../assets/icons/partlysunny.png" height = "40" align = "middle" /> :
						 this.state.cond1==='Hazy' ? <img src = "../../assets/icons/hazy.png" height = "40" align = "middle" /> :
						 this.state.cond1==='Partly Cloudy' ? <img src = "../../assets/icons/partlycloudy.png" height = "40" align = "middle" /> :
						 this.state.cond1==='Mostly Cloudy' ? <img src = "../../assets/icons/mostlycloudy.png" height = "40" align = "middle" /> :
						 this.state.cond1==='Thunderstorm' ? <img src = "../../assets/icons/tstorms.png" height = "40" align = "middle" /> :
						 this.state.cond1==='Sleet' ? <img src = "../../assets/icons/sleet.png" height = "40" align = "middle" /> :
						 this.state.cond1==='Flurries' ? <img src = "../../assets/icons/flurries.png" height = "40" align = "middle" /> :
						 this.state.cond1==='Fog' ? <img src = "../../assets/icons/hazy.png" height = "40" align = "middle" />
						 : <img src = "../../assets/icons/cloud.png" height = "40" align = "middle" />
						 }
                    </div>

				    <div class={ style.weatheritem }> { this.state.temp1 }
								&deg;<font size = "3"><b>C</b></font>
				    </div>
                    <div class={ style.wind} >
							<div class={ style.wspeed }> { this.state.ws1 }
							</div>
							<div class={ style.wdir }>  {
								this.state.wd1==='N'  ? <img src = "../../assets/icons/arrowN.png" height = "20" /> :
								this.state.wd1==='NW'|| this.state.wd1==='NNW' || this.state.wd1==='WNW'  ? <img src = "../../assets/icons/arrowNW.png" height = "20" /> :
								this.state.wd1==='NE' || this.state.wd1==='NNE' || this.state.wd1==='ENE' ? <img src = "../../assets/icons/arrowNE.png" height = "20" /> :
								this.state.wd1==='E'  ? <img src = "../../assets/icons/arrowE.png" height = "20"/> :
								this.state.wd1==='SE' || this.state.wd1==='SSE'|| this.state.wd1==='ESE'?  <img src = "../../assets/icons/arrowSE.png" height = "20" /> :
								this.state.wd1==='S'  ? <img src = "../../assets/icons/arrowS.png" height = "20" /> :
								this.state.wd1==='SW' || this.state.wd1==='SSW'|| this.state.wd1==='WSW'?  <img src = "../../assets/icons/arrowSW.png" height = "20" />
								: <img src = "../../assets/icons/arrowW.png" height = "20" align="bottom"/>
								}
							</div>
						</div>
						<div class={ style.precip }>
							<div class={ style.pop }> { this.state.pop1 }
							</div>
							<div class={ style.drop }><img src = "../../assets/icons/chancerain.png" height = "30"/>
							</div>
				        </div>
				</div>

                {/* Hour 2 */}
				<div class={ style.row_dark }>
                    <div class={ style.time }>{ this.state.hour2 }:00
                    </div>
                    <div class={ style.conditions}>
						{
			 			 this.state.cond2==='Clear' ? <img src = "../../assets/icons/sun.png" height = "40" align = "middle" /> :
						 this.state.cond2==='Rain' ? <img src = "../../assets/icons/rain.png" height = "40" align = "middle" /> :
						 this.state.cond2==='Cloudy' ? <img src = "../../assets/icons/cloud.png" height = "40" align = "middle" /> :
						 this.state.cond2==='Snow' ? <img src = "../../assets/icons/snow.png" height = "40" align = "middle" /> :
						 this.state.cond2==='Mostly Sunny' ? <img src = "../../assets/icons/mostlysunny.png" height = "40" align = "middle" /> :
						 this.state.cond2==='Partly Sunny' ? <img src = "../../assets/icons/partlysunny.png" height = "40" align = "middle" /> :
						 this.state.cond2==='Hazy' ? <img src = "../../assets/icons/hazy.png" height = "40" align = "middle" /> :
						 this.state.cond2==='Partly Cloudy' ? <img src = "../../assets/icons/partlycloudy.png" height = "40" align = "middle" /> :
						 this.state.cond2==='Mostly Cloudy' ? <img src = "../../assets/icons/mostlycloudy.png" height = "40" align = "middle" /> :
						 this.state.cond2==='Thunderstorm' ? <img src = "../../assets/icons/tstorms.png" height = "40" align = "middle" /> :
						 this.state.cond2==='Sleet' ? <img src = "../../assets/icons/sleet.png" height = "40" align = "middle" /> :
						 this.state.cond2==='Flurries' ? <img src = "../../assets/icons/flurries.png" height = "40" align = "middle" /> :
						 this.state.cond2==='Fog' ? <img src = "../../assets/icons/hazy.png" height = "40" align = "middle" />
						 : <img src = "../../assets/icons/cloud.png" height = "40" align = "middle" />
						 }
                    </div>
				    <div class={ style.weatheritem }> { this.state.temp2 }
								&deg;<font size = "3"><b>C</b></font>
				    </div>
                    <div class={ style.wind} >
							<div class={ style.wspeed }> { this.state.ws2 }
							</div>
							<div class={ style.wdir }>
							{
							 this.state.wd2==='N'  ? <img src = "../../assets/icons/arrowN.png" height = "20" /> :
							 this.state.wd2==='NW'|| this.state.wd2==='NNW' || this.state.wd2==='WNW'  ? <img src = "../../assets/icons/arrowNW.png" height = "20" /> :
							 this.state.wd2==='NE' || this.state.wd2==='NNE' || this.state.wd2==='ENE' ? <img src = "../../assets/icons/arrowNE.png" height = "20" /> :
							 this.state.wd2==='E'  ? <img src = "../../assets/icons/arrowE.png" height = "20"/> :
							 this.state.wd2==='SE' || this.state.wd2==='SSE'|| this.state.wd2==='ESE'?  <img src = "../../assets/icons/arrowSE.png" height = "20" /> :
							 this.state.wd2==='S'  ? <img src = "../../assets/icons/arrowS.png" height = "20" /> :
							 this.state.wd2==='SW' || this.state.wd2==='SSW'|| this.state.wd2==='WSW'?  <img src = "../../assets/icons/arrowSW.png" height = "20" />
							 : <img src = "../../assets/icons/arrowW.png" height = "20"/>
							 }
							</div>
				    </div>
				    <div class={ style.precip }>
				        <div class={ style.pop }> { this.state.pop2 }
				        </div>
				        <div class={ style.drop }><img src = "../../assets/icons/chancerain.png" height = "30"/>
				        </div>
				    </div>
				</div>
            
        {/* Hour 3 */}
        <div class={ style.row_light }>
            <div class={ style.time }>{ this.state.hour3 }:00
            </div>
            <div class={ style.conditions}>
						{
			 			 this.state.cond3==='Clear' ? <img src = "../../assets/icons/sun.png" height = "40" align = "middle" /> :
						 this.state.cond3==='Rain' ? <img src = "../../assets/icons/rain.png" height = "40" align = "middle" /> :
						 this.state.cond3==='Cloudy' ? <img src = "../../assets/icons/cloud.png" height = "40" align = "middle" /> :
						 this.state.cond3==='Snow' ? <img src = "../../assets/icons/snow.png" height = "40" align = "middle" /> :
						 this.state.cond3==='Mostly Sunny' ? <img src = "../../assets/icons/mostlysunny.png" height = "40" align = "middle" /> :
						 this.state.cond3==='Partly Sunny' ? <img src = "../../assets/icons/partlysunny.png" height = "40" align = "middle" /> :
						 this.state.cond3==='Hazy' ? <img src = "../../assets/icons/hazy.png" height = "40" align = "middle" /> :
						 this.state.cond3==='Partly Cloudy' ? <img src = "../../assets/icons/partlycloudy.png" height = "40" align = "middle" /> :
						 this.state.cond3==='Mostly Cloudy' ? <img src = "../../assets/icons/mostlycloudy.png" height = "40" align = "middle" /> :
						 this.state.cond3==='Thunderstorm' ? <img src = "../../assets/icons/tstorms.png" height = "40" align = "middle" /> :
						 this.state.cond3==='Sleet' ? <img src = "../../assets/icons/sleet.png" height = "40" align = "middle" /> :
						 this.state.cond3==='Flurries' ? <img src = "../../assets/icons/flurries.png" height = "40" align = "middle" /> :
						 this.state.cond3==='Fog' ? <img src = "../../assets/icons/hazy.png" height = "40" align = "middle" />
						 : <img src = "../../assets/icons/cloud.png" height = "40" align = "middle" />
						 }
            </div>
						<div class={ style.weatheritem }> { this.state.temp3 }
								&deg;<font size = "3"><b>C</b></font>
						</div>
            <div class={ style.wind} >
							<div class={ style.wspeed }> { this.state.ws3 }
							</div>
							<div class={ style.wdir }>
							{
							 this.state.wd3==='N'  ? <img src = "../../assets/icons/arrowN.png" height = "20" /> :
							 this.state.wd3==='NW'|| this.state.wd3==='NNW' || this.state.wd3==='WNW'  ? <img src = "../../assets/icons/arrowNW.png" height = "20" /> :
							 this.state.wd3==='NE' || this.state.wd3==='NNE' || this.state.wd3==='ENE' ? <img src = "../../assets/icons/arrowNE.png" height = "20" /> :
							 this.state.wd3==='E'  ? <img src = "../../assets/icons/arrowE.png" height = "20"/> :
							 this.state.wd3==='SE' || this.state.wd3==='SSE'|| this.state.wd3==='ESE'?  <img src = "../../assets/icons/arrowSE.png" height = "20" /> :
							 this.state.wd3==='S'  ? <img src = "../../assets/icons/arrowS.png" height = "20" /> :
							 this.state.wd3==='SW' || this.state.wd3==='SSW'|| this.state.wd3==='WSW'?  <img src = "../../assets/icons/arrowSW.png" height = "20" />
							 : <img src = "../../assets/icons/arrowW.png" height = "20"/>
							 }
							</div>
						</div>
						<div class={ style.precip }>
							<div class={ style.pop }> { this.state.pop3 }
							</div>
							<div class={ style.drop }><img src = "../../assets/icons/chancerain.png" height = "30"/>
							</div>
						</div>
				</div>

            {/* Hour 4 */}
            <div class={ style.row_dark }>
                <div class={ style.time }>{ this.state.hour4 }:00
                </div>
                <div class={ style.conditions}>
						{
			 			 this.state.cond4==='Clear' ? <img src = "../../assets/icons/sun.png" height = "40" align = "middle" /> :
						 this.state.cond4==='Rain' ? <img src = "../../assets/icons/rain.png" height = "40" align = "middle" /> :
						 this.state.cond4==='Cloudy' ? <img src = "../../assets/icons/cloud.png" height = "40" align = "middle" /> :
						 this.state.cond4==='Snow' ? <img src = "../../assets/icons/snow.png" height = "40" align = "middle" /> :
						 this.state.cond4==='Mostly Sunny' ? <img src = "../../assets/icons/mostlysunny.png" height = "40" align = "middle" /> :
						 this.state.cond4==='Partly Sunny' ? <img src = "../../assets/icons/partlysunny.png" height = "40" align = "middle" /> :
						 this.state.cond4==='Hazy' ? <img src = "../../assets/icons/hazy.png" height = "40" align = "middle" /> :
						 this.state.cond4==='Partly Cloudy' ? <img src = "../../assets/icons/partlycloudy.png" height = "40" align = "middle" /> :
						 this.state.cond4==='Mostly Cloudy' ? <img src = "../../assets/icons/mostlycloudy.png" height = "40" align = "middle" /> :
						 this.state.cond4==='Thunderstorm' ? <img src = "../../assets/icons/tstorms.png" height = "40" align = "middle" /> :
						 this.state.cond4==='Sleet' ? <img src = "../../assets/icons/sleet.png" height = "40" align = "middle" /> :
						 this.state.cond4==='Flurries' ? <img src = "../../assets/icons/flurries.png" height = "40" align = "middle" /> :
						 this.state.cond4==='Fog' ? <img src = "../../assets/icons/hazy.png" height = "40" align = "middle" />
						 : <img src = "../../assets/icons/cloud.png" height = "40" align = "middle" />
						 }
            </div>
						<div class={ style.weatheritem }> { this.state.temp4 }
								&deg;<font size = "3"><b>C</b></font>
						</div>
            <div class={ style.wind} >
							<div class={ style.wspeed }> { this.state.ws4 }
							</div>
							<div class={ style.wdir }>
							{
							 this.state.wd4==='N'  ? <img src = "../../assets/icons/arrowN.png" height = "20" /> :
							 this.state.wd4==='NW'|| this.state.wd4==='NNW' || this.state.wd4==='WNW'  ? <img src = "../../assets/icons/arrowNW.png" height = "20" /> :
							 this.state.wd4==='NE' || this.state.wd4==='NNE' || this.state.wd4==='ENE' ? <img src = "../../assets/icons/arrowNE.png" height = "20" /> :
							 this.state.wd4==='E'  ? <img src = "../../assets/icons/arrowE.png" height = "20"/> :
							 this.state.wd4==='SE' || this.state.wd4==='SSE'|| this.state.wd4==='ESE'?  <img src = "../../assets/icons/arrowSE.png" height = "20" /> :
							 this.state.wd4==='S'  ? <img src = "../../assets/icons/arrowS.png" height = "20" /> :
							 this.state.wd4==='SW' || this.state.wd4==='SSW'|| this.state.wd4==='WSW'?  <img src = "../../assets/icons/arrowSW.png" height = "20" />
							 : <img src = "../../assets/icons/arrowW.png" height = "20"/>
							 }
							</div>
						</div>
						<div class={ style.precip }>
							<div class={ style.pop }> { this.state.pop4 }
							</div>
							<div class={ style.drop }><img src = "../../assets/icons/chancerain.png" height = "30"/>
							</div>
						</div>
				</div>

            {/* Hour 5 */}
				<div class={ style.row_light }>
            <div class={ style.time }>{ this.state.hour5 }:00
            </div>
            <div class={ style.conditions}>
						{
			 			 this.state.cond5==='Clear' ? <img src = "../../assets/icons/sun.png" height = "40" align = "middle" /> :
						 this.state.cond5==='Rain' ? <img src = "../../assets/icons/rain.png" height = "40" align = "middle" /> :
						 this.state.cond5==='Cloudy' ? <img src = "../../assets/icons/cloud.png" height = "40" align = "middle" /> :
						 this.state.cond5==='Snow' ? <img src = "../../assets/icons/snow.png" height = "40" align = "middle" /> :
						 this.state.cond5==='Mostly Sunny' ? <img src = "../../assets/icons/mostlysunny.png" height = "40" align = "middle" /> :
						 this.state.cond5==='Partly Sunny' ? <img src = "../../assets/icons/partlysunny.png" height = "40" align = "middle" /> :
						 this.state.cond5==='Hazy' ? <img src = "../../assets/icons/hazy.png" height = "40" align = "middle" /> :
						 this.state.cond5==='Partly Cloudy' ? <img src = "../../assets/icons/partlycloudy.png" height = "40" align = "middle" /> :
						 this.state.cond5==='Mostly Cloudy' ? <img src = "../../assets/icons/mostlycloudy.png" height = "40" align = "middle" /> :
						 this.state.cond5==='Thunderstorm' ? <img src = "../../assets/icons/tstorms.png" height = "40" align = "middle" /> :
						 this.state.cond5==='Sleet' ? <img src = "../../assets/icons/sleet.png" height = "40" align = "middle" /> :
						 this.state.cond5==='Flurries' ? <img src = "../../assets/icons/flurries.png" height = "40" align = "middle" /> :
						 this.state.cond5==='Fog' ? <img src = "../../assets/icons/hazy.png" height = "40" align = "middle" />
						 : <img src = "../../assets/icons/cloud.png" height = "40" align = "middle" />
						 }
            </div>
						<div class={ style.weatheritem }> { this.state.temp5 }
								&deg;<font size = "3"><b>C</b></font>
						</div>
            <div class={ style.wind} >
							<div class={ style.wspeed }> { this.state.ws5 }
							</div>
							<div class={ style.wdir }>
							{
							 this.state.wd5==='N'  ? <img src = "../../assets/icons/arrowN.png" height = "20" /> :
							 this.state.wd5==='NW'|| this.state.wd5==='NNW' || this.state.wd5==='WNW'  ? <img src = "../../assets/icons/arrowNW.png" height = "20" /> :
							 this.state.wd5==='NE' || this.state.wd5==='NNE' || this.state.wd5==='ENE' ? <img src = "../../assets/icons/arrowNE.png" height = "20" /> :
							 this.state.wd5==='E'  ? <img src = "../../assets/icons/arrowE.png" height = "20"/> :
							 this.state.wd5==='SE' || this.state.wd5==='SSE'|| this.state.wd5==='ESE'?  <img src = "../../assets/icons/arrowSE.png" height = "20" /> :
							 this.state.wd5==='S'  ? <img src = "../../assets/icons/arrowS.png" height = "20" /> :
							 this.state.wd5==='SW' || this.state.wd5==='SSW'|| this.state.wd5==='WSW'?  <img src = "../../assets/icons/arrowSW.png" height = "20" />
							 : <img src = "../../assets/icons/arrowW.png" height = "20"/>
							 }
							</div>
						</div>
						<div class={ style.precip }>
							<div class={ style.pop }> { this.state.pop5 }
							</div>
							<div class={ style.drop }><img src = "../../assets/icons/chancerain.png" height = "30"/>
							</div>
						</div>
				</div>

            {/* Hour 6 */}
				<div class={ style.row_dark }>
            <div class={ style.time }>{ this.state.hour6 }:00
            </div>
            <div class={ style.conditions}>
						{
			 			 this.state.cond6==='Clear' ? <img src = "../../assets/icons/sun.png" height = "40" align = "middle" /> :
						 this.state.cond6==='Rain' ? <img src = "../../assets/icons/rain.png" height = "40" align = "middle" /> :
						 this.state.cond6==='Cloudy' ? <img src = "../../assets/icons/cloud.png" height = "40" align = "middle" /> :
						 this.state.cond6==='Snow' ? <img src = "../../assets/icons/snow.png" height = "40" align = "middle" /> :
						 this.state.cond6==='Mostly Sunny' ? <img src = "../../assets/icons/mostlysunny.png" height = "40" align = "middle" /> :
						 this.state.cond6==='Partly Sunny' ? <img src = "../../assets/icons/partlysunny.png" height = "40" align = "middle" /> :
						 this.state.cond6==='Hazy' ? <img src = "../../assets/icons/hazy.png" height = "40" align = "middle" /> :
						 this.state.cond6==='Partly Cloudy' ? <img src = "../../assets/icons/partlycloudy.png" height = "40" align = "middle" /> :
						 this.state.cond6==='Mostly Cloudy' ? <img src = "../../assets/icons/mostlycloudy.png" height = "40" align = "middle" /> :
						 this.state.cond6==='Thunderstorm' ? <img src = "../../assets/icons/tstorms.png" height = "40" align = "middle" /> :
						 this.state.cond6==='Sleet' ? <img src = "../../assets/icons/sleet.png" height = "40" align = "middle" /> :
						 this.state.cond6==='Flurries' ? <img src = "../../assets/icons/flurries.png" height = "40" align = "middle" /> :
						 this.state.cond6==='Fog' ? <img src = "../../assets/icons/hazy.png" height = "40" align = "middle" />
						 : <img src = "../../assets/icons/cloud.png" height = "40" align = "middle" />
						 }
            </div>
						<div class={ style.weatheritem }> { this.state.temp6 }
								&deg;<font size = "3"><b>C</b></font>
						</div>
            <div class={ style.wind} >
							<div class={ style.wspeed }> { this.state.ws6 }
							</div>
							<div class={ style.wdir }>
							{
							 this.state.wd6==='N'  ? <img src = "../../assets/icons/arrowN.png" height = "20" /> :
							 this.state.wd6==='NW'|| this.state.wd6==='NNW' || this.state.wd6==='WNW'  ? <img src = "../../assets/icons/arrowNW.png" height = "20" /> :
							 this.state.wd6==='NE' || this.state.wd6==='NNE' || this.state.w6==='ENE' ? <img src = "../../assets/icons/arrowNE.png" height = "20" /> :
							 this.state.wd6==='E'  ? <img src = "../../assets/icons/arrowE.png" height = "20"/> :
							 this.state.wd6==='SE' || this.state.wd6==='SSE'|| this.state.wd6==='ESE'?  <img src = "../../assets/icons/arrowSE.png" height = "20" /> :
							 this.state.wd6==='S'  ? <img src = "../../assets/icons/arrowS.png" height = "20" /> :
							 this.state.wd6==='SW' || this.state.wd6==='SSW'|| this.state.wd6==='WSW'?  <img src = "../../assets/icons/arrowSW.png" height = "20" />
							 : <img src = "../../assets/icons/arrowW.png" height = "20"/>
							 }
							</div>
						</div>
						<div class={ style.precip }>
							<div class={ style.pop }> { this.state.pop6 }
							</div>
							<div class={ style.drop }><img src = "../../assets/icons/chancerain.png" height = "30"/>
							</div>
						</div>
				</div>

                {/* Hour 7 */}
				<div class={ style.row_light }>
            <div class={ style.time }>{ this.state.hour7 }:00
            </div>
            <div class={ style.conditions}>
						{
			 			 this.state.cond7==='Clear' ? <img src = "../../assets/icons/sun.png" height = "40" align = "middle" /> :
						 this.state.cond7==='Rain' ? <img src = "../../assets/icons/rain.png" height = "40" align = "middle" /> :
						 this.state.cond7==='Cloudy' ? <img src = "../../assets/icons/cloud.png" height = "40" align = "middle" /> :
						 this.state.cond7==='Snow' ? <img src = "../../assets/icons/snow.png" height = "40" align = "middle" /> :
						 this.state.cond7==='Mostly Sunny' ? <img src = "../../assets/icons/mostlysunny.png" height = "40" align = "middle" /> :
						 this.state.cond7==='Partly Sunny' ? <img src = "../../assets/icons/partlysunny.png" height = "40" align = "middle" /> :
						 this.state.cond7==='Hazy' ? <img src = "../../assets/icons/hazy.png" height = "40" align = "middle" /> :
						 this.state.cond7==='Partly Cloudy' ? <img src = "../../assets/icons/partlycloudy.png" height = "40" align = "middle" /> :
						 this.state.cond7==='Mostly Cloudy' ? <img src = "../../assets/icons/mostlycloudy.png" height = "40" align = "middle" /> :
						 this.state.cond7==='Thunderstorm' ? <img src = "../../assets/icons/tstorms.png" height = "40" align = "middle" /> :
						 this.state.cond7==='Sleet' ? <img src = "../../assets/icons/sleet.png" height = "40" align = "middle" /> :
						 this.state.cond7==='Flurries' ? <img src = "../../assets/icons/flurries.png" height = "40" align = "middle" /> :
						 this.state.cond7==='Fog' ? <img src = "../../assets/icons/hazy.png" height = "40" align = "middle" />
						 : <img src = "../../assets/icons/cloud.png" height = "40" align = "middle" />
						 }
            </div>
						<div class={ style.weatheritem }> { this.state.temp7 }
								&deg;<font size = "3"><b>C</b></font>
						</div>
            <div class={ style.wind} >
							<div class={ style.wspeed }> { this.state.ws7 }
							</div>
							<div class={ style.wdir }>
							{
							 this.state.wd7==='N'  ? <img src = "../../assets/icons/arrowN.png" height = "20" /> :
							 this.state.wd7==='NW'|| this.state.wd7==='NNW' || this.state.wd7==='WNW'  ? <img src = "../../assets/icons/arrowNW.png" height = "20" /> :
							 this.state.wd7==='NE' || this.state.wd7==='NNE' || this.state.wd7==='ENE' ? <img src = "../../assets/icons/arrowNE.png" height = "20" /> :
							 this.state.wd7==='E'  ? <img src = "../../assets/icons/arrowE.png" height = "20"/> :
							 this.state.wd7==='SE' || this.state.wd7==='SSE'|| this.state.wd7==='ESE'?  <img src = "../../assets/icons/arrowSE.png" height = "20" /> :
							 this.state.wd7==='S'  ? <img src = "../../assets/icons/arrowS.png" height = "20" /> :
							 this.state.wd7==='SW' || this.state.wd7==='SSW'|| this.state.wd7==='WSW'?  <img src = "../../assets/icons/arrowSW.png" height = "20" />
							 : <img src = "../../assets/icons/arrowW.png" height = "20"/>
							 }
							</div>
						</div>
						<div class={ style.precip }>
							<div class={ style.pop }> { this.state.pop7 }
							</div>
							<div class={ style.drop }><img src = "../../assets/icons/chancerain.png" height = "30"/>
							</div>
						</div>
				</div>

				<div class={ style.row_dark }>
            <div class={ style.time }>{ this.state.hour8 }:00
            </div>
            <div class={ style.conditions}>
						{
			 			 this.state.cond8==='Clear' ? <img src = "../../assets/icons/sun.png" height = "40" align = "middle" /> :
						 this.state.cond8==='Rain' ? <img src = "../../assets/icons/rain.png" height = "40" align = "middle" /> :
						 this.state.cond8==='Cloudy' ? <img src = "../../assets/icons/cloud.png" height = "40" align = "middle" /> :
						 this.state.cond8==='Snow' ? <img src = "../../assets/icons/snow.png" height = "40" align = "middle" /> :
						 this.state.cond8==='Mostly Sunny' ? <img src = "../../assets/icons/mostlysunny.png" height = "40" align = "middle" /> :
						 this.state.cond8==='Partly Sunny' ? <img src = "../../assets/icons/partlysunny.png" height = "40" align = "middle" /> :
						 this.state.cond8==='Hazy' ? <img src = "../../assets/icons/hazy.png" height = "40" align = "middle" /> :
						 this.state.cond8==='Partly Cloudy' ? <img src = "../../assets/icons/partlycloudy.png" height = "40" align = "middle" /> :
						 this.state.cond8==='Mostly Cloudy' ? <img src = "../../assets/icons/mostlycloudy.png" height = "40" align = "middle" /> :
						 this.state.cond8==='Thunderstorm' ? <img src = "../../assets/icons/tstorms.png" height = "40" align = "middle" /> :
						 this.state.cond8==='Sleet' ? <img src = "../../assets/icons/sleet.png" height = "40" align = "middle" /> :
						 this.state.cond8==='Flurries' ? <img src = "../../assets/icons/flurries.png" height = "40" align = "middle" /> :
						 this.state.cond8==='Fog' ? <img src = "../../assets/icons/hazy.png" height = "40" align = "middle" />
						 : <img src = "../../assets/icons/cloud.png" height = "40" align = "middle" />
						 }
            </div>
						<div class={ style.weatheritem }> { this.state.temp8 }
								&deg;<font size = "3"><b>C</b></font>
						</div>
            <div class={ style.wind} >
							<div class={ style.wspeed }> { this.state.ws8 }
							</div>
							<div class={ style.wdir }>
							{
							 this.state.wd8==='N'  ? <img src = "../../assets/icons/arrowN.png" height = "20" /> :
							 this.state.wd8==='NW'|| this.state.wd8==='NNW' || this.state.wd8==='WNW'  ? <img src = "../../assets/icons/arrowNW.png" height = "20" /> :
							 this.state.wd8==='NE' || this.state.wd8==='NNE' || this.state.wd8==='ENE' ? <img src = "../../assets/icons/arrowNE.png" height = "20" /> :
							 this.state.wd8==='E'  ? <img src = "../../assets/icons/arrowE.png" height = "20"/> :
							 this.state.wd8==='SE' || this.state.wd8==='SSE'|| this.state.wd8==='ESE'?  <img src = "../../assets/icons/arrowSE.png" height = "20" /> :
							 this.state.wd8==='S'  ? <img src = "../../assets/icons/arrowS.png" height = "20" /> :
							 this.state.wd8==='SW' || this.state.wd8==='SSW'|| this.state.wd8==='WSW'?  <img src = "../../assets/icons/arrowSW.png" height = "20" />
							 : <img src = "../../assets/icons/arrowW.png" height = "20"/>
							 }
							</div>
						</div>
						<div class={ style.precip }>
							<div class={ style.pop }> { this.state.pop8 }
							</div>
							<div class={ style.drop }><img src = "../../assets/icons/chancerain.png" height = "30"/>
							</div>
						</div>
				</div>


			</div>

		);
	}

    //parse responses for Hourly data calls
	parseResponseHourly = (parsed_json) => {
		var hour1 = parsed_json['hourly_forecast'][0]['FCTTIME']['hour_padded'];
		var hour2 = parsed_json['hourly_forecast'][1]['FCTTIME']['hour_padded'];
		var hour3 = parsed_json['hourly_forecast'][2]['FCTTIME']['hour_padded'];
		var hour4 = parsed_json['hourly_forecast'][3]['FCTTIME']['hour_padded'];
		var hour5 = parsed_json['hourly_forecast'][4]['FCTTIME']['hour_padded'];
		var hour6 = parsed_json['hourly_forecast'][5]['FCTTIME']['hour_padded'];
		var hour7 = parsed_json['hourly_forecast'][6]['FCTTIME']['hour_padded'];
		var hour8 = parsed_json['hourly_forecast'][7]['FCTTIME']['hour_padded'];
		var temp1 = parsed_json['hourly_forecast'][0]['temp']['metric'];
		var temp2 = parsed_json['hourly_forecast'][1]['temp']['metric'];
		var temp3 = parsed_json['hourly_forecast'][2]['temp']['metric'];
		var temp4 = parsed_json['hourly_forecast'][3]['temp']['metric'];
		var temp5 = parsed_json['hourly_forecast'][4]['temp']['metric'];
		var temp6 = parsed_json['hourly_forecast'][5]['temp']['metric'];
		var temp7 = parsed_json['hourly_forecast'][6]['temp']['metric'];
		var temp8 = parsed_json['hourly_forecast'][7]['temp']['metric'];
		var cond1 = parsed_json['hourly_forecast'][0]['condition'];
		var cond2 = parsed_json['hourly_forecast'][1]['condition'];
		var cond3 = parsed_json['hourly_forecast'][2]['condition'];
		var cond4 = parsed_json['hourly_forecast'][3]['condition'];
		var cond5 = parsed_json['hourly_forecast'][4]['condition'];
		var cond6 = parsed_json['hourly_forecast'][5]['condition'];
		var cond7 = parsed_json['hourly_forecast'][6]['condition'];
		var cond8 = parsed_json['hourly_forecast'][7]['condition'];
		var ws1 = parsed_json['hourly_forecast'][0]['wspd']['metric'];
		var ws2 = parsed_json['hourly_forecast'][1]['wspd']['metric'];
		var ws3 = parsed_json['hourly_forecast'][2]['wspd']['metric'];
		var ws4 = parsed_json['hourly_forecast'][3]['wspd']['metric'];
		var ws5 = parsed_json['hourly_forecast'][4]['wspd']['metric'];
		var ws6 = parsed_json['hourly_forecast'][5]['wspd']['metric'];
		var ws7 = parsed_json['hourly_forecast'][6]['wspd']['metric'];
		var ws8 = parsed_json['hourly_forecast'][7]['wspd']['metric'];
		var wd1 = parsed_json['hourly_forecast'][0]['wdir']['dir'];
		var wd2 = parsed_json['hourly_forecast'][1]['wdir']['dir'];
		var wd3 = parsed_json['hourly_forecast'][2]['wdir']['dir'];
		var wd4 = parsed_json['hourly_forecast'][3]['wdir']['dir'];
		var wd5 = parsed_json['hourly_forecast'][4]['wdir']['dir'];
		var wd6 = parsed_json['hourly_forecast'][5]['wdir']['dir'];
		var wd7 = parsed_json['hourly_forecast'][6]['wdir']['dir'];
		var wd8 = parsed_json['hourly_forecast'][7]['wdir']['dir'];
		var pop1 = parsed_json['hourly_forecast'][0]['pop'];
		var pop2 = parsed_json['hourly_forecast'][1]['pop'];
		var pop3 = parsed_json['hourly_forecast'][2]['pop'];
		var pop4 = parsed_json['hourly_forecast'][3]['pop'];
		var pop5 = parsed_json['hourly_forecast'][4]['pop'];
		var pop6 = parsed_json['hourly_forecast'][5]['pop'];
		var pop7 = parsed_json['hourly_forecast'][6]['pop'];
		var pop8 = parsed_json['hourly_forecast'][7]['pop'];


		// use parsed respones to set states
		this.setState({
			hour1: hour1,
			hour2: hour2,
			hour3: hour3,
			hour4: hour4,
			hour5: hour5,
			hour6: hour6,
			hour7: hour7,
			hour8: hour8,
			temp1: temp1,
			temp2: temp2,
			temp3: temp3,
			temp4: temp4,
			temp5: temp5,
			temp6: temp6,
			temp7: temp7,
			temp8: temp8,
			cond1: cond1,
			cond2: cond2,
			cond3: cond3,
			cond4: cond4,
			cond5: cond5,
			cond6: cond6,
			cond7: cond7,
			cond8: cond8,
			ws1: ws1,
			ws2: ws2,
			ws3: ws3,
			ws4: ws4,
			ws5: ws5,
			ws6: ws6,
			ws7: ws7,
			ws8: ws8,
			wd1: wd1,
			wd2: wd2,
			wd3: wd3,
			wd4: wd4,
			wd5: wd5,
			wd6: wd6,
			wd7: wd7,
			wd8: wd8,
			pop1: pop1,
			pop2: pop2,
			pop3: pop3,
			pop4: pop4,
			pop5: pop5,
			pop6: pop6,
			pop7: pop7,
			pop8: pop8

		});
	}
}
