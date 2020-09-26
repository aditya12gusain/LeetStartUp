import React from "react";
import "./Signup.css";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import { Typography } from "@material-ui/core";
import { Link } from "react-router-dom";

function Login() {
  return (
    <div>
      <Grid
        className="signup"
        container
        direction="row"
        justify="center"
        alignItems="center"
      >
        <Grid item xs={9} sm={5} lg={5}>
          <Paper className="signup__paper">
            <h2 className="signup__title">Create Account</h2>
            <TextField
              className="signup__input"
              id="outlined-basic"
              label="User Name"
              variant="outlined"
            />
            <TextField
              className="signup__input"
              id="outlined-basic"
              label="User Email"
              variant="outlined"
            />
            <TextField
              className="signup__input"
              id="outlined-password-input"
              label="Password"
              type="password"
              autoComplete="current-password"
              variant="outlined"
            />
            <TextField
              className="signup__input"
              id="outlined-password-input"
              label="Confirm Password"
              type="password"
              autoComplete="current-password"
              variant="outlined"
            />
            <Button variant="contained" color="primary" disableElevation>
              Create Account
            </Button>
            <Typography className="signup__loginLink" align="right">
              Already have a account ? <Link to="/login">Click Hear</Link>
            </Typography>
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
}

export default Login;
