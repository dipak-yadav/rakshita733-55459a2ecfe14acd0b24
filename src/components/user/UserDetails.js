/**
 * This Component is used for Show Country details
 *
 */
import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import axios from "axios";
import { useHistory } from "react-router-dom";
import { useParams } from "react-router-dom";

const mapStateToProps = ({ dispatch, user }) => ({
  dispatch: dispatch,
  countryName: user.countryName,
  user,
});

const UserFormDetails = ({ countryName, user }) => {
  const history = useHistory();
  const { id } = useParams();

  const [userData, setUserData] = useState([]);

  useEffect(() => {
    axios
      .get(`https://restcountries.eu/rest/v2/name/` + id)
      .then((res) => {
        setUserData(res.data);
      });
  }, [id]);

  const onClickBtn = (capital) => {
    history.push("/country-weather/" + capital);
  };

  return (
    <div>
      <div>
        <h3 className="text-center">User Details</h3>
      </div>

      {userData.map((country, index) => {
        return (
          <div className="card country-card" key={index}>
            <img
              className="card-img-top country-img"
              src={country.flag}
              alt="Card image cap"
            />
            <div className="card-body">
              <p className="card-text">Capital : {country.capital}</p>
              <p className="card-text">population : {country.population}</p>
              <p>Latitude : {country.latlng[0]}</p>
              <p>Longitude : {country.latlng[1]}</p>
            </div>
            <div className="card-footer">
              <button
                className="btn btn-primary"
                onClick={() => onClickBtn(country.capital)}
              >
                Capital Weather
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default connect(mapStateToProps)(UserFormDetails);
