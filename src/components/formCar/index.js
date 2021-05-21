import React from "react";
import countries from "./countries";
import years from "./years";
import marcas from "./marcas";
import "bootstrap/dist/css/bootstrap.min.css";

class FormCar extends React.Component {
  constructor(props) {
    super(props);
    this.state = { value: "" };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  handleSubmit(event) {
    alert("A name was submitted: " + this.state.value);
    event.preventDefault();
  }

  render() {
    const marca = "";
    const password = "";
    const year = "";
    const country = "";
    const acceptedTerms = false;

    return (
      <form>
        <h3>Sign In</h3>
        <div className="form-group">
          <label>
            Year:
            <select
              name="country"
              value={year}
              onChange={(e) => (this.year = e.target.value)}
              required
            >
              <option key=""></option>

              {years.map((year) => (
                <option key={year}>{year}</option>
              ))}
            </select>
          </label>
        </div>

        <div className="form-group">
          <label>
            Companie:
            <select name="country" value={marca} required>
              <option key=""></option>
              {marcas.map((marca) => (
                <option key={marca}>{marca}</option>
              ))}
            </select>
          </label>
        </div>

        <div className="form-group">
          <label>Email address</label>
          <input
            type="email"
            className="form-control"
            placeholder="Enter email"
          />
        </div>

        <div className="form-group">
          <label>Password</label>
          <input
            type="password"
            className="form-control"
            placeholder="Enter password"
          />
        </div>

        <div className="form-group">
          <label>
            Country:
            <select name="country" value={country} required>
              <option key=""></option>
              {countries.map((country) => (
                <option key={country}>{country}</option>
              ))}
            </select>
          </label>
        </div>

        <div className="form-group">
          <div className="custom-control custom-checkbox">
            <input
              type="checkbox"
              className="custom-control-input"
              id="customCheck1"
            />
            <label className="custom-control-label" htmlFor="customCheck1">
              Remember me
            </label>
          </div>
        </div>

        <button type="submit" className="btn btn-primary btn-block">
          Submit
        </button>
        <p className="forgot-password text-right">
          Forgot <a href="#">password?</a>
        </p>
      </form>
    );
  }
}

export default FormCar;
