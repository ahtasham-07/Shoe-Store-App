import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    
  },
  title: {
    flexGrow: 1,
  },
  link: {
    color: 'white',
    padding: 20,
    textDecoration:'none',
    '&:hover': {
      backgroundColor: '#99f',
  },
  '&:active': {
    textDecoration: 'underline'
  }
  },

}));

export default function ButtonAppBar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static" style={{ background: 'lightcoral' }}>
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            <Link to="/" className={classes.link}>Home</Link>
            <Link to="/products" className={classes.link}>Products</Link>
            <Link to="/about" className={classes.link}>About</Link>
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
  );
}