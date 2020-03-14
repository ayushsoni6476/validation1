import React from "react";
import Button from "@material-ui/core/Button";

class Form9 extends React.Component {
  constructor() {
    super();
    this.state = {
      fields: {},
      errors: {}
    };

    this.handleChange = this.handleChange.bind(this);
    this.submituserForm9 = this.submituserForm9.bind(this);
  }

  handleChange(e) {
    let fields = this.state.fields;
    fields[e.target.name] = e.target.value;
    this.setState({
      fields
    });
  }

  submituserForm9(e) {
    e.preventDefault();
    if (this.validateForm()) {
      let fields = {};
      //fields["ProductId"] = "";
      fields["ProductName"] = "";
      fields["ProductPrice"] = "";
      fields["ShopId"] = "";
      fields["ProductDescription "] = "";
      fields["EstimatedDelivery"] = "";
      // fields["ProductImage"] = "";
      this.setState({ fields: fields });
      alert("Form submitted");
    }
  }

  validateForm() {
    let fields = this.state.fields;
    let errors = {};
    let formIsValid = true;

    if (!fields["ProductName"]) {
      formIsValid = false;
      errors["ProductName"] = "*Please enter your Product Name.";
    }
    if (typeof fields["ProductName"] !== "undefined") {
      if (!fields["ProductName"].match(/^[a-zA-Z0-9]*$/)) {
        formIsValid = false;
        errors["ProductName"] = "*Please enter your Product Name";
      }
    }

    if (!fields["ProductPrice"]) {
      formIsValid = false;
      errors["ProductPrice"] = "*Please enter your Product Price";
    }
    if (typeof fields["ProductPrice"] !== "undefined") {
      if (!fields["ProductPrice"].match(/^[0-9]*$/)) {
        formIsValid = false;
        errors["ProductPrice"] = "*Please enter Numerical value";
      }
    }

    if (!fields["ShopId"]) {
      formIsValid = false;
      errors["ShopId"] = "*Please enter your Shop Id";
    }
    if (typeof fields["ShopId"] !== "undefined") {
      if (!fields["ShopId"].match(/^[0-9]*$/)) {
        formIsValid = false;
        errors["ShopId"] = "*Please enter Numerical value for Shop Id";
      }
    }

    if (!fields["ProductDescription"]) {
      formIsValid = false;
      errors["ProductDescription"] = "*Please enter your Product Description";
    }
    if (typeof fields["ProductDescription"] !== "undefined") {
      if (!fields["ProductDescription"].match(/^[a-zA-Z0-9 ]*$/)) {
        formIsValid = false;
        errors["ProductDescription"] = "*Required";
      }
    }

    if (!fields["EstimatedDelivery"]) {
      formIsValid = false;
      errors["EstimatedDelivery"] = "*Please enter your Estimated Delivery";
    }
    if (typeof fields["EstimatedDelivery"] !== "undefined") {
      if (!fields["EstimatedDelivery"].match(/^[a-zA-Z0-9]*$/)) {
        formIsValid = false;
        errors["EstimatedDelivery"] = "*Please enter Valid Days of Delivery";
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
            <h1>ADD PRODUCT</h1>
          </div>
          <form
            method="post"
            name="addproductForm9"
            onSubmit={this.submituserForm9}
          >
            <label>Shop Id</label>
            <input
              type="text"
              name="ShopId"
              value={this.state.fields.ShopId}
              onChange={this.handleChange}
            />
            <div className="errorMsg">{this.state.errors.ShopId}</div>

            <label>Product Name</label>
            <input
              type="text"
              name="ProductName"
              value={this.state.fields.ProductName}
              onChange={this.handleChange}
            />
            <div className="errorMsg">{this.state.errors.ProductName}</div>

            <label>Product Price</label>
            <input
              type="text"
              name="ProductPrice"
              value={this.state.fields.ProductPrice}
              onChange={this.handleChange}
            />
            <div className="errorMsg">{this.state.errors.ProductPrice}</div>

            <label>Product Description</label>
            <input
              type="text"
              id="sty"
              name="ProductDescription"
              value={this.state.fields.ProductDescription}
              onChange={this.handleChange}
            />
            <div className="errorMsg">
              {this.state.errors.ProductDescription}
            </div>

            <label>Delivery Date</label>
            <input
              type="text"
              name="EstimatedDelivery"
              value={this.state.fields.EstimatedDelivery}
              onChange={this.handleChange}
            />
            <div className="errorMsg">
              {this.state.errors.EstimatedDelivery}
            </div>

            <Button
              type="submit"
              className="button"
              value="Add"
              variant="contained"
              color="primary"
            >
              Add
            </Button>
          </form>
        </div>
      </div>
    );
  }
}

export default Form9;
