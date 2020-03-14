import React, { Component } from "react";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import Button from "@material-ui/core/Button";
import TextField from "material-ui/TextField";
class Login extends Component {
  render() {
    return (
      <form>
        <div>
          <MuiThemeProvider>
            <div>
              <p>
                {" "}
                <h1>LOGIN</h1>{" "}
              </p>
              <TextField
                hintText="Enter your Username"
                floatingLabelText="Username"
                onChange={(event, newValue) =>
                  this.setState({ username: newValue })
                }
              />
              <br />
              <TextField
                type="password"
                hintText="Enter your Password"
                floatingLabelText="Password"
                onChange={(event, newValue) =>
                  this.setState({ password: newValue })
                }
              />
              <br />
              <Button type="submit" variant="contained" color="primary">
                {" "}
                LOGIN
              </Button>
            </div>
          </MuiThemeProvider>
        </div>
      </form>
    );
  }
}
const style = {
  margin: 15
};
export default Login;
