import React, { useState } from "react";
import TinderCard from "react-tinder-card";
import Grid from "@material-ui/core/Grid";

import "./Tinder.css";

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

function Tinder() {
  const characters = db;
  const [lastDirection, setLastDirection] = useState();

  const swiped = (direction, nameToDelete) => {
    console.log("removing: " + nameToDelete);
    setLastDirection(direction);
  };

  const outOfFrame = (name) => {
    console.log(name + " left the screen!");
  };
  return (
    <Grid container>
      <Grid item xs={11} sm={11} md={8} lg={8}>
        <div className="tinder">
          <link
            href="https://fonts.googleapis.com/css?family=Damion&display=swap"
            rel="stylesheet"
          />
          <link
            href="https://fonts.googleapis.com/css?family=Alatsi&display=swap"
            rel="stylesheet"
          />
          <div className="cardContainer">
            {characters.map((character) => (
              <TinderCard
                className="swipe"
                key={character.name}
                onSwipe={(dir) => swiped(dir, character.name)}
                onCardLeftScreen={() => outOfFrame(character.name)}
                preventSwipe={["up", "down"]}
              >
                <div
                  style={{ backgroundImage: "url(" + character.url + ")" }}
                  className="card"
                >
                  <h3>{character.name}</h3>
                </div>
                <div className="cardDetails">
                  <h2>User Name</h2>
                  <p>
                    This is my profile and some of my details which will help
                    you learn few more things about me except of my name
                  </p>
                  <p>
                    This is my profile and some of my details which will help
                    you learn few more things about me except of my name
                  </p>
                  <p>
                    This is my profile and some of my details which will help
                    you learn few more things about me except of my name
                  </p>
                  <p>
                    This is my profile and some of my details which will help
                    you learn few more things about me except of my name
                  </p>
                  <p>
                    This is my profile and some of my details which will help
                    you learn few more things about me except of my name
                  </p>
                  <p>
                    This is my profile and some of my details which will help
                    you learn few more things about me except of my name
                  </p>
                </div>
              </TinderCard>
            ))}
          </div>
          {lastDirection ? (
            <h2 className="infoText">You swiped {lastDirection}</h2>
          ) : null}
        </div>
      </Grid>
      <Grid className="tinder__messages" item xs={11} sm={11} md={4} lg={4}>
        <h1>@Messages</h1>
        <br />
        <h3>UserName</h3>
        <p>Last Message</p>
        <br />
        <h3>UserName</h3>
        <p>Last Message</p>
      </Grid>
    </Grid>
  );
}

export default Tinder;
