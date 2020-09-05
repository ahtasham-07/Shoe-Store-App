import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Card from './card';
import data from './data.json';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  cardgrid: {
    margin: 'auto',
  }
}));

export default function CenteredGrid() {
  const classes = useStyles();
  let descript = "A shoe is an item of footwear intended to protect and comfort the human foot. Shoes are also used as an item of decoration and fashion.";
  let items  = Object.keys(data)
  let products = items.map((i)=>{

    return(
        <Grid item xs={12} sm={4} className={classes.cardgrid} key={i}><Card name={data[i].name} descrip={descript} img={data[i].imgurl} price={data[i].price} id={i} /></Grid>
    )
  })
  
  
  return (
    <div className={classes.root}>

      <Grid container spacing={3}>
        {products}
      </Grid>
      
    </div>
  );
}
