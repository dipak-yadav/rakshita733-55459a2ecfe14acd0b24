/**
 * This Component is used for Show city weather
 *
 */
import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import axios from "axios";
import { useParams } from "react-router-dom";

const mapStateToProps = ({ dispatch, user }) => ({
  dispatch: dispatch,
  countryName: user.countryName,
});

const UserWeather = () => {
  const { id } = useParams();
  const [weatherData, setWeatherData] = useState({});

  /**
   * For weather listing
   */
  useEffect(() => {
    axios
      .get(
        `http://api.weatherstack.com/current?access_key=0f276e833b2dc84c8bc71fda875dfcff&query=${id}`
      )
      .then((res) => {
        setWeatherData(res.data.current);
      });
  }, [id]);

  return (
    <div>
      <h3 className="text-center">Weather Details</h3>
      <div className="card country-card">
        <img
          className="card-img-top country-img"
          src={weatherData.weather_icons}
          alt="Card image cap"
        />
        <div className="card-body">
          <p className="card-text">Temperature : {weatherData.temperature}</p>
          <p className="card-text">Wind Speed : {weatherData.wind_speed}</p>
          <p className="card-text">Precip : {weatherData.precip}</p>
        </div>
      </div>
    </div>
  );
};

export default connect(mapStateToProps)(UserWeather);
