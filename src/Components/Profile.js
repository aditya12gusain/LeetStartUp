import { Grid } from "@material-ui/core";
import { Link } from "react-router-dom";
import React from "react";
import "./Profile.css";
import CancelIcon from "@material-ui/icons/Cancel";
import CheckCircleIcon from "@material-ui/icons/CheckCircle";
import IconButton from "@material-ui/core/IconButton";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";

const db = [
  {
    name: "Richard Hendricks",
    url: "./img/richard.jpg",
  },
  {
    name: "Erlich Bachman",
    url: "./img/erlich.jpg",
  },
  {
    name: "Monica Hall",
    url: "./img/monica.jpg",
  },
  {
    name: "Jared Dunn",
    url: "./img/jared.jpg",
  },
  {
    name: "Dinesh Chugtai",
    url: "./img/dinesh.jpg",
  },
];

function Profile() {
  const characters = db;

  return (
    <Grid
      className="profile"
      container
      direction="row"
      justify="space-around"
      alignItems="center"
    >
      <Grid className="profile__show" item xs={11} sm={11} md={7} lg={7}>
        <Paper className="profile__details" elevation={3}>
          <Grid className="profile__display" container>
            <Grid item xs={12} sm={12} md={6} lg={6}>
              <img
                className="profile__photo"
                src="./img/richard.jpg"
                alt="{username}"
              />
            </Grid>
            <Grid className="profile__info" item xs={12} sm={12} md={6} lg={6}>
              <h1 className="profile__name">@ Username</h1>
              <div className="padding__rapper">
                <div style={{ textAlign: "left" }}>
                  <h3>College</h3>
                  <p>HMRITM</p>
                  <Typography variant="body1">
                    This is something about the user
                  </Typography>
                  <br />
                  <h3>Startup Idea</h3>
                  <Typography variant="body1">
                    Whatever you think your idea is and the reason for choosing
                    this idea Whatever you think your idea is and the reason for
                    choosing this idea
                  </Typography>
                  <br />
                  <h3>Most fit with?</h3>
                  <Typography>
                    Describe the people whome you would like to connect with.
                    What kind of prople you are looking for to connect with.
                    Helps people to understnd you better.
                  </Typography>
                  <br />
                  <h3>Associates Required</h3>
                  <Typography>
                    Buisness <br />
                    Marketing <br />
                    Technology <br />
                    Content Writer
                  </Typography>
                </div>
              </div>
            </Grid>
          </Grid>
        </Paper>
        <Grid
          container
          direction="row"
          justify="space-between"
          alignItems="center"
        >
          <Grid item sm={6} md={4}>
            <IconButton>
              <CancelIcon className="profile__icons profile__icons__danger" />
            </IconButton>
          </Grid>
          <Grid item sm={6} md={4} align="right">
            <IconButton>
              <CheckCircleIcon className="profile__icons profile__icons__noDanger" />
            </IconButton>
          </Grid>
        </Grid>
      </Grid>
      <Grid className="profile__messages" item xs={11} sm={11} md={4} lg={4}>
        <h1>@ Messages</h1>
        <br />
        <h3 className="profile__messageType">Groups</h3>
        <Link to="#">
          <div className="profile__message">
            <img
              className="profile__message__avatar"
              src="./img/monica.jpg"
              alt=""
            />
            <div style={{ paddingLeft: "10%" }}>
              <h4>@ Username</h4>
              <p>last message should be displayed here.</p>
            </div>
          </div>
        </Link>
        <Link to="#">
          <div className="profile__message">
            <img
              class="profile__message__avatar"
              src="./img/dinesh.jpg"
              alt=""
            />
            <div style={{ paddingLeft: "10%" }}>
              <h4>@ Username</h4>
              <p>last message should be displayed here.</p>
            </div>
          </div>
        </Link>
        <Link to="#">
          <div className="profile__message">
            <img
              class="profile__message__avatar"
              src="./img/richard.jpg"
              alt=""
            />
            <div style={{ paddingLeft: "10%" }}>
              <h4>@ Username</h4>
              <p>last message should be displayed here.</p>
            </div>
          </div>
        </Link>
        <br />
        <h3 className="profile__messageType">Individuals</h3>
        <Link to="#">
          <div className="profile__message">
            <img
              className="profile__message__avatar"
              src="./img/monica.jpg"
              alt=""
            />
            <div style={{ paddingLeft: "10%" }}>
              <h4>@ Username</h4>
              <p>last message should be displayed here.</p>
            </div>
          </div>
        </Link>
        <Link to="#">
          <div className="profile__message">
            <img
              class="profile__message__avatar"
              src="./img/dinesh.jpg"
              alt=""
            />
            <div style={{ paddingLeft: "10%" }}>
              <h4>@ Username</h4>
              <p>last message should be displayed here.</p>
            </div>
          </div>
        </Link>
        <Link to="#">
          <div className="profile__message">
            <img
              class="profile__message__avatar"
              src="./img/richard.jpg"
              alt=""
            />
            <div style={{ paddingLeft: "10%" }}>
              <h4>@ Username</h4>
              <p>last message should be displayed here.</p>
            </div>
          </div>
        </Link>
      </Grid>
    </Grid>
  );
}

export default Profile;
