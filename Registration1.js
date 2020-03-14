import React from "react";

class Registration1 extends React.Component {
  constructor() {
    super();
    this.state = {
      fields: {},
      errors: {}
    };

    this.handleChange = this.handleChange.bind(this);
    this.submituserRegistration1 = this.submituserRegistration1.bind(this);
  }

  handleChange(e) {
    let fields = this.state.fields;
    fields[e.target.name] = e.target.value;
    this.setState({
      fields
    });
  }

  submituserRegistration1(e) {
    e.preventDefault();
    if (this.validateForm()) {
      let fields = {};
      fields["address"] = "";
      fields["emailid"] = "";
      fields["mobileno"] = "";
      fields["password"] = "";
      fields["username"] = "";
      fields["shopname"] = "";
      fields["landmark"] = "";
      fields["pincode"] = "";
      fields["gstno"] = "";
      this.setState({ fields: fields });
      alert("Form submitted");
    }
  }

  validateForm() {
    let fields = this.state.fields;
    let errors = {};
    let formIsValid = true;

    if (!fields["username"]) {
      formIsValid = false;
      errors["username"] = "*Please enter your username.";
    }

    if (typeof fields["username"] !== "undefined") {
      if (!fields["username"].match(/^[a-zA-Z ]*$/)) {
        formIsValid = false;
        errors["username"] = "*Please enter alphabet characters only.";
      }
    }
    if (!fields["shopname"]) {
      formIsValid = false;
      errors["shopname"] = "*Please enter your shopname.";
    }

    if (typeof fields["shopname"] !== "undefined") {
      if (!fields["shopname"].match(/^[a-zA-Z0-9 ]*$/)) {
        formIsValid = false;
        errors["shopname"] = "*Please enter alphabet characters only.";
      }
    }

    if (!fields["landmark"]) {
      formIsValid = false;
      errors["landmark"] = "*Please enter your landmark.";
    }

    if (typeof fields["landmark"] !== "undefined") {
      if (!fields["landmark"].match(/^[a-zA-Z0-9 ]*$/)) {
        formIsValid = false;
        errors["landmark"] = "*Please enter alphabet characters only.";
      }
    }

    if (!fields["address"]) {
      formIsValid = false;
      errors["address"] = "*Please enter your address.";
    }

    if (typeof fields["address"] !== "undefined") {
      if (!fields["shopname"].match(/^[a-zA-Z0-9 ]*$/)) {
        formIsValid = false;
        errors["address"] = "*Address can not be blank";
      }
    }

    if (!fields["emailid"]) {
      formIsValid = false;
      errors["emailid"] = "*Please enter your email-ID.";
    }

    if (typeof fields["emailid"] !== "undefined") {
      //regular expression for email validation
      var pattern = new RegExp(
        /^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i
      );
      if (!pattern.test(fields["emailid"])) {
        formIsValid = false;
        errors["emailid"] = "*Please enter valid email-ID.";
      }
    }

    if (!fields["mobileno"]) {
      formIsValid = false;
      errors["mobileno"] = "*Please enter your mobile no.";
    }

    if (typeof fields["mobileno"] !== "undefined") {
      if (!fields["mobileno"].match(/^[0-9]{10}$/)) {
        formIsValid = false;
        errors["mobileno"] = "*Please enter valid mobile no.";
      }
    }

    if (!fields["pincode"]) {
      formIsValid = false;
      errors["pincode"] = "*Please enter your pincode";
    }

    if (typeof fields["pincode"] !== "undefined") {
      if (!fields["pincode"].match(/^[0-9]{6}$/)) {
        formIsValid = false;
        errors["pincode"] = "*Please enter a valid pincode";
      }
    }

    if (!fields["gstno"]) {
      formIsValid = false;
      errors["gstno"] = "*Please enter your gst no";
    }

    if (typeof fields["gstno"] !== "undefined") {
      if (!fields["gstno"].match(/^[a-zA-Z0-9 ]*$/)) {
        formIsValid = false;
        errors["gstno"] = "*Not a Valid GST No.";
      }
    }

    if (!fields["password"]) {
      formIsValid = false;
      errors["password"] = "*Please enter your password.";
    }

    if (typeof fields["password"] !== "undefined") {
      if (
        !fields["password"].match(
          /^.*(?=.{8,})(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%&]).*$/
        )
      ) {
        formIsValid = false;
        errors["password"] = "*Please enter secure and strong password.";
      }
    }

    this.setState({
      errors: errors
    });
    return formIsValid;
  }

  render() {
    return (
      <div id="main-registration-container">
        <div id="register">
          <div id="bolds">
            <h1>REGISTRATION FORM</h1>
          </div>
          <form
            method="post"
            name="userRegistration1"
            onSubmit={this.submituserRegistration1}
          >
            <label>Name</label>
            <input
              type="text"
              name="username"
              value={this.state.fields.username}
              onChange={this.handleChange}
            />
            <div className="errorMsg">{this.state.errors.username}</div>

            <label>ShopName</label>
            <input
              type="text"
              name="shopname"
              value={this.state.fields.shopname}
              onChange={this.handleChange}
            />
            <div className="errorMsg">{this.state.errors.shopname}</div>

            <label>Email ID:</label>
            <input
              type="text"
              name="emailid"
              value={this.state.fields.emailid}
              onChange={this.handleChange}
            />
            <div className="errorMsg">{this.state.errors.emailid}</div>

            <label>Address</label>
            <input
              type="text"
              name="address"
              value={this.state.fields.address}
              onChange={this.handleChange}
            />
            <div className="errorMsg">{this.state.errors.address}</div>

            <label>Mobile No:</label>
            <input
              type="text"
              name="mobileno"
              value={this.state.fields.mobileno}
              onChange={this.handleChange}
            />
            <div className="errorMsg">{this.state.errors.mobileno}</div>

            <label>Pincode</label>
            <input
              type="text"
              name="pincode"
              value={this.state.fields.pincode}
              onChange={this.handleChange}
            />
            <div className="errorMsg">{this.state.errors.pincode}</div>

            <label>Landmark</label>
            <input
              type="text"
              name="landmark"
              value={this.state.fields.landmark}
              onChange={this.handleChange}
            />
            <div className="errorMsg">{this.state.errors.landmark}</div>

            <label>GST Number</label>
            <input
              type="text"
              name="gstno"
              value={this.state.fields.gstno}
              onChange={this.handleChange}
            />
            <div className="errorMsg">{this.state.errors.gstno}</div>

            <label>Password</label>
            <input
              type="password"
              name="password"
              value={this.state.fields.password}
              onChange={this.handleChange}
            />
            <div className="errorMsg">{this.state.errors.password}</div>
            <input type="submit" className="button" value="Register" />
          </form>
        </div>
      </div>
    );
  }
}

export default Registration1;
