import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import { Link } from 'react-router-dom';

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
    margin: 'auto',

  },
  Link:{
    color: '#202020',
    textDecoration: 'none'
  }
});

export default function ImgMediaCard({ name, descrip, img, price, id }) {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <Link to={`/products/${id}`} className={classes.Link}>
      <CardActionArea>
        <CardMedia
          component="img"
          alt="shoe img"
          height="230"
          image={ img }
          title={name}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {name}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {descrip}
          </Typography>
          <Typography variant="h5" color="textSecondary" component="p">
            Rs. {price}
          </Typography>
        </CardContent>
      </CardActionArea>
      </Link>
    </Card>
  );
}
