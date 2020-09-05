import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import img1 from "./img/1.jpg";
import img4 from "./img/4.jpg";
import img3 from "./img/3.jpg";
import Typography from '@material-ui/core/Typography';

function getWindowDimensions() {
  const { innerWidth: width, innerHeight: height } = window;
  return {
    width,
    height,
  };
}
function App() {
  const { width } = getWindowDimensions();

  return (
    <div>
      <h1
        style={{
          textAlign: "center",
          color: "white",
          backgroundColor: "lightcoral",
          fontFamily: "serif",
          fontVariant: "small-caps",
        }}
      >
        Shoe Store
      </h1>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={3}>
          <img
            src={img1}
            alt="shoe img"
            height={270}
            style={{ float: "left" }}
          />
        </Grid>

        <Grid item xs={12} sm={9}>
        <Typography variant="body2" gutterBottom style={{ textAlign: "justify" }}>
            With the S-Works 7 Road Shoes Specialized took a no-holds-barred
            approach to transferring every bit of your power to the pedals. The
            lighter and stiffer Powerline™ carbon sole is new and brought to you
            by the same team that developed Rider-First Engineering. Why’s this
            special? Because it led to their lightest and stiffest carbon
            outsole to date. A completely refined Padlock™ Heel, meanwhile,
            packs in more comfort with the same exceptional heel hold that you
            found in the previous iteration. And finally, the space-grade
            Dyneema™ material used in the upper doesn’t stretch when pulled on,
            making sure that your foot stays where it’s supposed to. With these
            all features combined, you can be sure that Specialized kept in line
            with the motto “every watt is sacred.”
            </Typography>
        </Grid>
        <Grid
          item
          xs={12}
          sm={3}
          style={{ display: width <= 600 ? "block" : "none" }}
        >
          <img
            src={img4}
            alt="shoe img"
            height={250}
            style={{ float: "right" }}
          />
        </Grid>
        <Grid item xs={12} sm={9}>
        <Typography variant="body2" gutterBottom  style={{ textAlign: "justify" }}>
            Kickflip into a classic style with a cool retro twist in the new Old
            Skool Checkerboard Skate Shoe from Vans! This 90's-inspired Old
            Skool Checkerboard Skate Shoe is all that and a bag of ships,
            featuring a sturdy suede and canvas upper with signature side
            stripes, iconic checkerboard prints, and classic vulcanized sole
            construction for flexible grip and traction. Vans® is the original
            action sports footwear and apparel brand. Since day one, Vans® has
            celebrated the lifestyle and creative self-expression of musicians,
            artists, and athletes on boards and bikes all around the world. From
            timeless footwear, apparel, accessories, and snowboard boots, to
            progressive events like the Vans Warped Tour® and surfing’s most
            prestigious contest, the Vans US Open of Surfing®, Vans® continues
            to support today’s innovators and those who live “Off the Wall”.
            </Typography>
        </Grid>
        <Grid
          item
          xs={12}
          sm={3}
          style={{ display: width <= 600 ? "none" : "block" }}
        >
          <img
            src={img4}
            alt="shoe img"
            height={250}
            style={{ float: "right" }}
          />
        </Grid>
        <Grid item xs={12} sm={3}>
          <img
            src={img3}
            alt="shoe img"
            height={300}
            style={{ float: "left" }}
          />
        </Grid>
        <Grid item xs={12} sm={9}>
          <Typography variant="body2" gutterBottom style={{ textAlign: "justify" }}>
            The Santos Tour Down Under inspires us all by kicking-off the new
            racing season, so we’re bringing you a new S-works 7 shoe, inspired
            by the Australian Budgie. Flocks of blue, green, and yellow that
            echo the peloton itself, manifest in the best race shoe ever made,
            the S-Works 7. This limited colourway, like the bird itself, will
            move fast, so don’t miss out. What makes the perfect cycling shoe?
            Is it exceptional power transfer? Superior Comfort? Undeniable
            style? The simple answer is “Yes,” to all of the above. With the
            S-Works 7 Road shoe, you get high-performance shoes with no
            compromises. With the S-Works 7 Road Shoes Specialized took a
            no-holds-barred approach to transferring every bit of your power to
            the pedals. The lighter and stiffer Powerline™ carbon sole is new
            and brought to you by the same team that developed Rider-First
            Engineering. Why’s this special? Because it led to their lightest
            and stiffest carbon outsole to date. A completely refined Padlock™
            Heel, meanwhile, packs in more comfort with the same exceptional
            heel hold that you found in the previous iteration. And finally, the
            space-grade Dyneema™ material used in the upper doesn’t stretch when
            pulled on, making sure that your foot stays where it’s supposed to.
            With these all features combined, you can be sure that Specialized
            kept in line with the motto “every watt is sacred.”
            </Typography>
        </Grid>
      </Grid>
    </div>
  );
}

export default App;
