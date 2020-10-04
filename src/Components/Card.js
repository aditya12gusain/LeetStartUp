import React from "react";

import { makeStyles } from "@material-ui/core/styles";
import MaterialCard from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";

const useStyles = makeStyles({
  profile: {},
  profileImage: {
    width: "100%",
    height: "350px",
    borderTopLeftRadius: "10px",
    borderBottomLeftRadius: "10px",
  },
  profileDetails: {},
});

export default function Card({ item: { title, text, url } }) {
  const classes = useStyles();

  return (
    <Grid container className={classes.profile}>
      <Grid item xs={12} sm={12} md={6} lg={6}>
        <img className={classes.profileImage} src={url} />
      </Grid>
      <Grid
        className={classes.profileDetails}
        item
        xs={12}
        sm={12}
        md={6}
        lg={6}
      >
        <h1>{title}</h1>
        <p>{text}</p>
        <p>{text}</p>
        <p>{text}</p>
        <p>{text}</p>
        <p>{text}</p>
        <p>{text}</p>
        <p>{text}</p>
        <p>{text}</p>
        <p>{text}</p>
        <p>{text}</p>
      </Grid>
    </Grid>
  );
}
