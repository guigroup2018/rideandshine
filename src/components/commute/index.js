// import preact
import { h, render, Component } from 'preact';
// import stylesheets for ipad & button
import style from './style';
import style_iphone from '../button/style_iphone';
// import jquery for API calls
import $ from 'jquery';
import { Link } from 'preact-router/match';

export default class Commute extends Component {


  // constructor
  constructor(props){
    super(props);
    // call the getTimes function to get commute times from Settings info
    this.getTimes();
    // call the functions to fetch weather data from API.
    this.fetchWeatherDataOne();
    this.fetchWeatherDataTwo();
  }

  // a call to fetch weather data via wunderground, for the outgoing commute time/place
  fetchWeatherDataOne = () => {
    // API URL with a structure of : ttp://api.wunderground.com/api/key/feature/q/country-code/city.json

    var url = "http://api.wunderground.com/api/a0f5a50344818e43/conditions/forecast/q/51.537978,-0.106155.json";

    $.ajax({
      url: url,
      dataType: "jsonp",
      success : this.parseResponseWeatherOne,
      error : function(req, err){ console.log('API call failed ' + err); }
    })

  }

  // a call to fetch weather data for the returning commute time/place
  fetchWeatherDataTwo = () => {
    // API URL with a structure of : ttp://api.wunderground.com/api/key/feature/q/country-code/city.json

    var url = "http://api.wunderground.com/api/a0f5a50344818e43/conditions/forecast/q/51.524340,-0.040298.json";

    $.ajax({
      url: url,
      dataType: "jsonp",
      success : this.parseResponseWeatherTwo,
      error : function(req, err){ console.log('API call failed ' + err); }
    })

  }

  // the main render method for the iphone component
  render() {
      
    return (

       // Main container
      <div class={ style.container }>

        {/* Commute header */}
        <div class={ style.header }>
            <div class= { style.back }>
              <Link href="/"><button id="back"><img src = "../../assets/icons/back.png" height="20"/></button></Link>
            </div>
            COMMUTE
        </div>

        {/* Outgoing commute info */}
        <div class={ style.info_container }>
                    {/* Outgoing commute location and time */}
                    <div class={ style.city }>{ this.state.locate }
                    </div>
                    <div class={ style.saved_time}>{ this.state.day_one } { this.state.time_one }
                    </div>

            <div class = { style.weatherinfo }>

                {/* Outgoing commute conditions */}
                <div class= { style.weathericon }>
                    {
                      this.state.cond==='Clear' ? <img src = "../../assets/icons/sun.png" height = "160" align = "middle" /> :
                      this.state.cond==='Rain' ? <img src = "../../assets/icons/rain.png" height = "160" align = "middle" /> :
                      this.state.cond==='Cloudy' ? <img src = "../../assets/icons/cloud.png" height = "160" align = "middle" /> :
                      this.state.cond==='Overcast' ? <img src = "../../assets/icons/cloud.png" height = "160" align = "middle" /> :
                      this.state.cond==='Snow' ? <img src = "../../assets/icons/snow.png" height = "160" align = "middle" /> :
                      this.state.cond==='Mostly Sunny' ? <img src = "../../assets/icons/mostlysunny.png" height = "160" align = "middle" /> :
                      this.state.cond==='Partly Sunny' ? <img src = "../../assets/icons/partlysunny.png" height = "160" align = "middle" /> :
                      this.state.cond==='Hazy' ? <img src = "../../assets/icons/hazy.png" height = "160" align = "middle" /> :
                      this.state.cond==='Partly Cloudy' ? <img src = "../../assets/icons/partlycloudy.png" height = "160" align = "middle" /> :
                      this.state.cond==='Mostly Cloudy' ? <img src = "../../assets/icons/mostlycloudy.png" height = "160" align = "middle" /> :
                      this.state.cond==='Thunderstorm' ? <img src = "../../assets/icons/tstorms.png" height = "160" align = "middle" /> :
                      this.state.cond==='Sleet' ? <img src = "../../assets/icons/sleet.png" height = "160" align = "middle" /> :
                      this.state.cond==='Flurries' ? <img src = "../../assets/icons/flurries.png" height = "160" align = "middle" /> :
                      this.state.cond==='Fog' ? <img src = "../../assets/icons/hazy.png" height = "160" align = "middle" />
                      : <img src = "../../assets/icons/cloud.png" height = "160" align = "middle" />
                      }
                </div>

                {/* Outgoing commute temperature */}
                <div class = { style.temperature }> { this.state.temp }
                    &deg;<font size = "4"><b>C</b></font>
                </div>

                {/* Outgoing commute chance of rain */}
                <div class = { style.precip }>{ this.state.poperc }
                    <img src = "../../assets/icons/chancerain.png" height = "60" align = "top"/>
                </div>

                {/* Outgoing commute wind info */}
                <div class = { style.wind }> { this.state.windkph }

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
            </div>
        </div>

        {/* Return commute info */}
        <div class={ style.info_container }>

                    {/* Return commute place and time info */}
                    <div class={ style.city }>{ this.state.locate_two }
                    </div>
                    <div class={ style.saved_time}>{ this.state.day_two } { this.state.time_two }
                    </div>


                    <div class = { style.weatherinfo }>
                        {/* Return commute conditions */}
                        <div class= { style.weathericon }>
                        {
                        this.state.cond_two==='Clear' ? <img src = "../../assets/icons/sun.png" height = "160" align = "middle" /> :
                        this.state.cond_two==='Rain' ? <img src = "../../assets/icons/rain.png" height = "160" align = "middle" /> :
                        this.state.cond_two==='Cloudy' ? <img src = "../../assets/icons/cloud.png" height = "160" align = "middle" /> :
                        this.state.cond_two==='Overcast' ? <img src = "../../assets/icons/cloud.png" height = "160" align = "middle" /> :
                        this.state.cond_two==='Snow' ? <img src = "../../assets/icons/snow.png" height = "160" align = "middle" /> :
                        this.state.cond_two==='Mostly Sunny' ? <img src = "../../assets/icons/mostlysunny.png" height = "160" align = "middle" /> :
                        this.state.cond_two==='Partly Sunny' ? <img src = "../../assets/icons/partlysunny.png" height = "160" align = "middle" /> :
                        this.state.cond_two==='Hazy' ? <img src = "../../assets/icons/hazy.png" height = "160" align = "middle" /> :
                        this.state.cond_two==='Partly Cloudy' ? <img src = "../../assets/icons/partlycloudy.png" height = "160" align = "middle" /> :
                        this.state.cond_two==='Mostly Cloudy' ? <img src = "../../assets/icons/mostlycloudy.png" height = "160" align = "middle" /> :
                        this.state.cond_two==='Thunderstorm' ? <img src = "../../assets/icons/tstorms.png" height = "160" align = "middle" /> :
                        this.state.cond_two==='Sleet' ? <img src = "../../assets/icons/sleet.png" height = "160" align = "middle" /> :
                        this.state.cond_two==='Flurries' ? <img src = "../../assets/icons/flurries.png" height = "160" align = "middle" /> :
                        this.state.cond_two==='Fog' ? <img src = "../../assets/icons/hazy.png" height = "160" align = "middle" />
                        : <img src = "../../assets/icons/cloud.png" height = "160" align = "middle" />
                        }
                    </div>

                    {/* Return commute temperature */}
                    <div class = { style.temperature }> { this.state.temp_two }
                        &deg;<font size = "4"><b>C</b></font>
                    </div>

                    {/* Return commute chance of rain */}
                    <div class = { style.precip }>{ this.state.poperc_two }<img src = "../../assets/icons/chancerain.png" height = "60" align = "top"/>
                    </div>

                    {/* Return commute wind info */}
                    <div class = { style.wind }> { this.state.windkph_two }
                    {
                    this.state.winddir_two==='N'  ? <img src = "../../assets/icons/arrowN.png" height = "26" align= "middle" hspace="10"/> :
                    this.state.winddir_two==='NW'|| this.state.winddir_two==='NNW' || this.state.winddir_two==='WNW'  ? <img src = "../../assets/icons/arrowNW.png" height = "26" align= "middle" hspace="10"/> :
                    this.state.winddir_two==='NE' || this.state.winddir_two==='NNE' || this.state.winddir_two==='ENE' ? <img src = "../../assets/icons/arrowNE.png" height = "26" align= "middle" hspace="10"/> :
                    this.state.winddir_two==='E'  ? <img src = "../../assets/icons/arrowE.png" height = "26" align= "middle" hspace="10"/> :
                    this.state.winddir_two==='SE' || this.state.winddir_two==='SSE'|| this.state.winddir_two==='ESE'?  <img src = "../../assets/icons/arrowSE.png" height = "26" align= "middle" hspace="10"/> :
                    this.state.winddir_two==='S'  ? <img src = "../../assets/icons/arrowS.png" height = "26" align= "middle" hspace="10"/> :
                    this.state.winddir_two==='SW' || this.state.winddir_two==='SSW'|| this.state.winddir_two==='WSW'?  <img src = "../../assets/icons/arrowSW.png" height = "26" align= "middle" hspace="10"/>
                    : <img src = "../../assets/icons/arrowW.png" height = "26" align= "middle" hspace="10"/>
                    }

                    </div>
            </div>
        
        </div>

    </div>

    );
  }

  //Parse respones from wunderground call for outgoing commute weather
  parseResponseWeatherOne = (parsed_json) => {
    var location = parsed_json['current_observation']['display_location']['city'];
    var temp_c = parsed_json['current_observation']['temp_c'];
    var conditions = parsed_json['current_observation']['weather'];
    var wind_kph = parsed_json['current_observation']['wind_kph'];
    var last_update = parsed_json['current_observation']['observation_time'];
    var wind_dir = parsed_json['current_observation']['wind_dir'];
    var poperc = parsed_json['forecast']['txt_forecast']['forecastday'][0]['pop'];


    // Used parsed respones to set states
    this.setState({
      locate: location,
      temp: temp_c,
      cond : conditions,
      windkph : wind_kph,
      lastupdate: last_update,
      winddir: wind_dir,
      poperc: poperc


    });
  }

 //Parse respones from wunderground call for return commute weather
  parseResponseWeatherTwo = (parsed_json) => {
    var location = parsed_json['current_observation']['display_location']['city'];
    var temp_c = parsed_json['current_observation']['temp_c'];
    var conditions = parsed_json['current_observation']['weather'];
    var wind_kph = parsed_json['current_observation']['wind_kph'];
    var wind_dir = parsed_json['current_observation']['wind_dir'];
    var poperc = parsed_json['forecast']['txt_forecast']['forecastday'][0]['pop'];


    // Used parsed responses to set states
    this.setState({
      locate_two: location,
      temp_two: temp_c,
      cond_two : conditions,
      windkph_two : wind_kph,
      winddir_two: wind_dir,
      poperc_two: poperc
    });
  }

//get commute times and places from Settings info
getTimes = () => {
      var time_one = '9:00AM';
      var time_two = '6:00PM';
      var day_one = 'TODAY';
      var day_two = 'TODAY';

      this.setState({
        time_one: time_one,
        time_two: time_two,
        day_one: day_one,
        day_two: day_two
      });

  }

}
