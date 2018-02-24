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

export default class Commute extends Component {


  // a constructor with initial set states
  constructor(props){
    super(props);
    // temperature state
    this.state.temp = "";
    // button display state
    this.setState({ display: true });
    this.getTimes();
    this.fetchWeatherDataOne();
    this.fetchHourlyDataOne();
    this.fetchWeatherDataTwo();
    this.fetchHourlyDataTwo();
  }

  // a call to fetch weather data via wunderground
  fetchWeatherDataOne = () => {
    // API URL with a structure of : ttp://api.wunderground.com/api/key/feature/q/country-code/city.json

    var url = "http://api.wunderground.com/api/7958870baaf0dfee/conditions/q/autoip.json";

    $.ajax({
      url: url,
      dataType: "jsonp",
      success : this.parseResponseWeatherOne,
      error : function(req, err){ console.log('API call failed ' + err); }
    })

  }



  fetchHourlyDataOne = () => {
    // API URL with a structure of : ttp://api.wunderground.com/api/key/feature/q/country-code/city.json
    var url = "http://api.wunderground.com/api/7958870baaf0dfee/forecast/q/autoip.json";
    $.ajax({
      url: url,
      dataType: "jsonp",
      success : this.parseResponseForecastOne,
      error : function(req, err){ console.log('API call failed ' + err); }
    })

  }


  fetchWeatherDataTwo = () => {
    // API URL with a structure of : ttp://api.wunderground.com/api/key/feature/q/country-code/city.json

    var url = "http://api.wunderground.com/api/7958870baaf0dfee/conditions/q/Hungary/Budapest.json";

    $.ajax({
      url: url,
      dataType: "jsonp",
      success : this.parseResponseWeatherTwo,
      error : function(req, err){ console.log('API call failed ' + err); }
    })

  }



  fetchHourlyDataTwo = () => {
    // API URL with a structure of : ttp://api.wunderground.com/api/key/feature/q/country-code/city.json
    var url = "http://api.wunderground.com/api/7958870baaf0dfee/forecast/q/Hungary/Budapest.json";
    $.ajax({
      url: url,
      dataType: "jsonp",
      success : this.parseResponseForecastTwo,
      error : function(req, err){ console.log('API call failed ' + err); }
    })

  }

  // the main render method for the iphone component
  render() {
    // check if temperature data is fetched, if so add the sign styling to the page
    //const tempStyles = this.state.temp ? `${style.temperature} ${style.filled}` : style.temperature;
      // display all weather data
    return (
      <div class={ style.container }>

        <div class={ style.header }>
            <div class= { style.back }>
              <Link href="/"><button id="back"><img src = "../../assets/icons/back.png" height="20"/></button></Link>
            </div>
            COMMUTE
        </div>

        <div class={ style.info_container }>
                    <div class={ style.city }>{ this.state.locate }
                    </div>
                    <div class={ style.saved_time}>{ this.state.day_one } { this.state.time_one }
                    </div>




                <div class = { style.weatherinfo }>
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
                      : 'No API info'
                      }
                    </div>


                    <div class = { style.temperature }> { this.state.temp }
                        &deg;<font size = "4"><b>C</b></font>

                    </div>

                    <div class = { style.precip }>{ this.state.poperc }<img src = "../../assets/icons/chancerain.png" height = "60" align = "top"/>
                    </div>

                    <div class = { style.wind }> { this.state.windkph }
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





                </div>
        </div>

        <div class={ style.info_container }>
                    <div class={ style.city }>{ this.state.locate_two }
                    </div>
                    <div class={ style.saved_time}>{ this.state.day_two } { this.state.time_two }
                    </div>




                <div class = { style.weatherinfo }>
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
                      : 'No API info'
                      }
                    </div>


                    <div class = { style.temperature }> { this.state.temp_two }
                        &deg;<font size = "4"><b>C</b></font>

                    </div>

                    <div class = { style.precip }>{ this.state.poperc_two }<img src = "../../assets/icons/chancerain.png" height = "60" align = "top"/>
                    </div>

                    <div class = { style.wind }> { this.state.windkph_two }
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





                </div>
        </div>


      </div>


    );
  }

  parseResponseWeatherOne = (parsed_json) => {
    var location = parsed_json['current_observation']['display_location']['city'];
    var temp_c = parsed_json['current_observation']['temp_c'];
    var conditions = parsed_json['current_observation']['weather'];
    var wind_kph = parsed_json['current_observation']['wind_kph'];
    var last_update = parsed_json['current_observation']['observation_time'];
    var wind_dir = parsed_json['current_observation']['wind_dir'];


    // set states for fields so they could be rendered later on
    this.setState({
      locate: location,
      temp: temp_c,
      cond : conditions,
    //	cond: 'clear',
      windkph : wind_kph,
      lastupdate: last_update,
      winddir: wind_dir


    });
  }



  parseResponseForecastOne = (parsed_json) => {
      var poperc = parsed_json['forecast']['txt_forecast']['forecastday'][0]['pop'];

      this.setState({
        poperc: poperc
    });

  }

  parseResponseWeatherTwo = (parsed_json) => {
    var location = parsed_json['current_observation']['display_location']['city'];
    var temp_c = parsed_json['current_observation']['temp_c'];
    var conditions = parsed_json['current_observation']['weather'];
    var wind_kph = parsed_json['current_observation']['wind_kph'];
    var wind_dir = parsed_json['current_observation']['wind_dir'];


    // set states for fields so they could be rendered later on
    this.setState({
      locate_two: location,
      temp_two: temp_c,
      cond_two : conditions,
    //	cond: 'clear',
      windkph_two : wind_kph,
      winddir_two: wind_dir


    });
  }



  parseResponseForecastTwo = (parsed_json) => {
      var poperc = parsed_json['forecast']['txt_forecast']['forecastday'][0]['pop'];

      this.setState({
        poperc_two: poperc
    });

  }

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
