import React, { Component } from "react";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

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

class Registration extends Component {
  state = { initialState };

  handleChange = event => {
    //const isCheckbox = event.target.type === "checkbox";
    console.log("change occur");
  };

  reqval() {
    var name = document.getElementById("standard-basic").value;
    if (name === " ") {
      document.getElementById("rq").innerHTML = "Required";
      return false;
    }
  }
  validate = () => {
    let nameError = "";
    let shopnameError = "";
    let emailError = "";
    let addressError = "";
    let pincodeError = "";
    let landmarkError = "";
    let mobile_noError = "";
    let gst_noError = "";
    let passwordError = "";

    if (!this.state.name) {
      nameError = "Name cannot be blank";
    }
    if (!this.state.shopname) {
      shopnameError = "Shopname cannot be blank";
    }
    if (!this.state.email.includes("@" && ".")) {
      emailError = "invalid email";
    }

    if (!this.state.address) {
      addressError = "Address cannot be blank";
    }
    if (this.state.pincode < 6) {
      pincodeError = "Invalid Pincode";
    }
    if (!this.state.landmark) {
      landmarkError = "Landmark cannot be blank";
    }
    if (this.state.mobine_no < 10) {
      mobile_noError = "Invalid Mobile No.";
    }
    if (!this.state.gst_no) {
      gst_noError = "Mobile No. cannot be blank";
    }
    if (!this.state.password) {
      passwordError = "Password Required";
    }

    if (
      emailError &&
      nameError &&
      shopnameError &&
      addressError &&
      pincodeError &&
      landmarkError &&
      mobile_noError &&
      gst_noError &&
      passwordError
    ) {
      this.setState({
        emailError,
        nameError,
        shopnameError,
        addressError,
        pincodeError,
        landmarkError,
        mobile_noError,
        gst_noError,
        passwordError
      });
      return false;
    }
    return true;
  };

  render() {
    return (
      <form onSubmit="return reqval()">
        <div>
          <p>
            {" "}
            <h1>REGISTRATION FORM</h1>{" "}
          </p>

          <p align="right">
            <h4>*- Mandatory Field</h4>
          </p>
          <div class="center">
            <p>
              {" "}
              NAME*{" "}
              <TextField
                name="name"
                value={this.state.name}
                onChange={this.handleChange}
                id="standard-basic"
                label="  Enter Full Name"
              />
              <span id="rq" />
            </p>

            <p>
              {" "}
              SHOP NAME*{" "}
              <TextField
                name="shopname"
                value={this.state.shopname}
                onChange={this.handleChange}
                id="standard-basic"
                label="  Enter shop Name"
              />
            </p>
            <div style={{ fontSize: 10, color: "red" }}>
              {this.state.shopnameError}
            </div>

            <p>
              {" "}
              EMAIL ID*{" "}
              <TextField
                name="email"
                value={this.state.email}
                onChange={this.handleChange}
                id="standard-basic"
                label="  Email Id"
              />
            </p>
            <div style={{ fontSize: 10, color: "red" }}>
              {this.state.emailError}
            </div>

            <p>
              {" "}
              ADDRESS*{" "}
              <TextField
                name="address"
                value={this.state.address}
                onChange={this.handleChange}
                id="standard-basic"
                label="  Address"
              />
            </p>
            <div style={{ fontSize: 10, color: "red" }}>
              {this.state.addressError}
            </div>

            <p>
              {" "}
              PIN CODE*{" "}
              <TextField
                name="pincode"
                value={this.state.pincode}
                onChange={this.handleChange}
                id="standard-basic"
                label="  Pin Code"
              />
            </p>
            <div style={{ fontSize: 10, color: "red" }}>
              {this.state.pincodeError}
            </div>

            <p>
              {" "}
              LANDMARK*{" "}
              <TextField
                name="landmark"
                value={this.state.landmark}
                onChange={this.handleChange}
                id="standard-basic"
                label="  Landmark"
              />
            </p>
            <div style={{ fontSize: 10, color: "red" }}>
              {this.state.landmarkError}
            </div>

            <p>
              {" "}
              MOBILE NO.*{" "}
              <TextField
                name="mobile_no"
                value={this.state.mobile_no}
                onChange={this.handleChange}
                id="standard-basic"
                label="  Mobile no."
              />
            </p>
            <div style={{ fontSize: 10, color: "red" }}>
              {this.state.mobile_noError}
            </div>

            <p>
              {" "}
              GST NO*.{" "}
              <TextField
                name="gst_no"
                value={this.state.gst_no}
                onChange={this.handleChange}
                id="standard-basic"
                label="  GST no."
              />
            </p>
            <div style={{ fontSize: 10, color: "red" }}>
              {this.state.gst_noError}
            </div>

            <p>
              {" "}
              PASSWORD*{" "}
              <TextField
                type="password"
                name="password"
                value={this.state.password}
                onChange={this.handleChange}
                id="standard-basic"
                label="  Password"
              />
            </p>
            <div style={{ fontSize: 10, color: "red" }}>
              {this.state.passwordError}
            </div>
          </div>
          <br />
          <Button type="submit" variant="contained" color="primary">
            {" "}
            SUBMIT
          </Button>
        </div>
      </form>
    );
  }
}
export default Registration;
