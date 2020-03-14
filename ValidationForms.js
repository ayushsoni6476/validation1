import React, { Component } from "react";
const initialState = {
  name: "",
  shopname: "",
  email: "",
  address: "",
  pincode: "",
  landmark: "",
  mobile_no: "",
  gst_no: "",
  password: "",
  nameError: "",
  shopnameError: "",
  emailError: "",
  addressError: "",
  pincodeError: "",
  landmarkError: "",
  mobile_noError: "",
  gst_noError: "",
  passwordError: ""
};

export default class ValiationForms extends Component {
  state = initialState;

  handleChange = event => {
    const isCheckbox = event.target.type === "checkbox";
    this.setState({
      [event.target.name]: isCheckbox
        ? event.target.checked
        : event.target.value
    });
  };

  validate = () => {
    let nameError = "";
    let shopnameError = "";
    let emailError = "";
    let addressError = "";
    let pincodeError = "";
    let landmarkError = "";
    let mobile_no = "";
    let gst_noError = "";
    let passwordError = "";

    if (!this.state.name) {
      nameError = "Name cannot be blank";
    }
    if (!this.state.shopname) {
      shopnameError = "Shopname cannot be blank";
    }
    if (!this.state.email.includes("@" || ".")) {
      emailError = "invalid email";
    }

    if (!this.state.address) {
      addressError = "Address cannot be blank";
    }
    if (!this.state.pincode) {
      pincodeError = "Pincode cannot be blank";
    }
    if (!this.state.landmark) {
      landmarkError = "Landmark cannot be blank";
    }
    if (!this.state.mobine_no) {
      mobile_noError = "Mobile No. cannot be blank";
    }
    if (!this.state.gst_no) {
      gst_noError = "Mobile No. cannot be blank";
    }

    if (
      emailError ||
      nameError ||
      shopname ||
      address ||
      pincode ||
      landmark ||
      mobile_no ||
      gst_no
    ) {
      this.setState({ emailError, nameError });
      return false;
    }

    return true;
  };
  handleSubmit = event => {
    event.preventDefault();
    const isValid = this.validate();
    if (isValid) {
      console.log(this.state);
      // clear form
      this.setState(initialState);
    }
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div>
          <input
            name="name"
            placeholder="name"
            value={this.state.name}
            onChange={this.handleChange}
          />
          <div style={{ fontSize: 10, color: "red" }}>
            {this.state.nameError}
          </div>
        </div>
        <div>
          <input
            name="shopname"
            placeholder="shopname"
            value={this.state.shopname}
            onChange={this.handleChange}
          />
          <div style={{ fontSize: 10, color: "red" }}>
            {this.state.shopnameError}
          </div>
        </div>
        <div>
          <input
            name="email"
            placeholder="email"
            value={this.state.email}
            onChange={this.handleChange}
          />
          <div style={{ fontSize: 10, color: "red" }}>
            {this.state.emailError}
          </div>
        </div>
        <div>
          <input
            name="address"
            placeholder="address"
            value={this.state.address}
            onChange={this.handleChange}
          />
          <div style={{ fontSize: 10, color: "red" }}>
            {this.state.addressError}
          </div>
        </div>
        <div>
          <input
            name="pincode"
            placeholder="pincode"
            value={this.state.pincode}
            onChange={this.handleChange}
          />
          <div style={{ fontSize: 10, color: "red" }}>
            {this.state.pincodeError}
          </div>
        </div>
        <div>
          <input
            name="landmark"
            placeholder="landmark"
            value={this.state.landmark}
            onChange={this.handleChange}
          />
          <div style={{ fontSize: 10, color: "red" }}>
            {this.state.landmarkError}
          </div>
        </div>
        <div>
          <input
            name="mobile_no"
            placeholder="mobile_no"
            value={this.state.mobile_no}
            onChange={this.handleChange}
          />
          <div style={{ fontSize: 10, color: "red" }}>
            {this.state.mobile_noError}
          </div>
        </div>
        <div>
          <input
            name="gst_no"
            placeholder="gst_no"
            value={this.state.gst_no}
            onChange={this.handleChange}
          />
          <div style={{ fontSize: 10, color: "red" }}>
            {this.state.gst_noError}
          </div>
        </div>
        <div>
          <input
            type="password"
            name="password"
            placeholder="password"
            value={this.state.password}
            onChange={this.handleChange}
          />
          <div style={{ fontSize: 10, color: "red" }}>
            {this.state.passwordError}
          </div>
        </div>
        <button type="submit">submit</button>
      </form>
    );
  }
}
