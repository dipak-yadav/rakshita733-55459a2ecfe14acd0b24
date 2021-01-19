/**
 * This Component is used for Show User Country form
 *
 */
import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { connect } from "react-redux";

const mapStateToProps = ({ dispatch }) => ({
  dispatch: dispatch,
});

const UserForm = ({ dispatch }) => {
  const history = useHistory();

  const [countryName, setCountryName] = useState("");
  const [isDisable, setIsDisable] = useState(true);

  useEffect(() => {}, []);

  /**
   * Method used for submit form data
   */
  const onSubmit = () => {
    dispatch({
      type: "user/ADD_USER_COUNTRY",
      payload: { country: countryName },
    });
    history.push("/country-details/" + countryName);
  };

/**
 * Method for on change event
 * @param {*} event 
 */
  const onHandleChange = (event) => {
    setCountryName(event.target.value);
    if (event.target.value !== "") {
      setIsDisable(false);
    } else {
      setIsDisable(true);
    }
  };

  return (
    <div>
      <h3>User Details</h3>
      <div className="container"></div>
      <form>
        <div classNames="form-group">
          <label for="country">Country</label>
          <input
            type="country"
            classNames="form-control"
            id="country"
            placeholder=" Enter country"
            required
            value={countryName}
            onChange={(e) => onHandleChange(e)}
          />
        </div>

        <button
          type="submit"
          classNames="btn btn-primary"
          disabled={isDisable}
          onClick={onSubmit}
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default connect(mapStateToProps)(UserForm);
