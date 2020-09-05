import React from 'react';
import data from './data.json';
import { useParams } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        backgroundColor:'rgb(240,128,128, 0.5)'
        
    },
    paper: {
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary,
        
    },
    name: {
        color: 'black',
        fontSize: 40,
        fontWeight: 'bold',
    }
}));

export default function () {
    const classes = useStyles();
    let { id } = useParams();
    let item = data[id];

    return (
        <div className={classes.root}>
            <br />
            <Grid container spacing={3}>
                <Grid item xs={11} style={{ margin: 'auto' }}>
                    <Paper className={classes.paper}>
                        <Typography gutterBottom variant="h5" className={classes.name}>
                            {item.name}
                        </Typography>
                        <img src={item.imgurl} alt="img" style={{maxWidth:300}} />
                        <Typography variant="h4" color="textSecondary" component="p" style={{textAlign:'left', width:200}}>
                            Rs. {item.price}
                        </Typography>
                        <Typography variant="h5" color="textSecondary" component="p" style={{textAlign:'left'}}>
                            Shipping: {item.shipping}
                        </Typography>
                    </Paper>
                </Grid>
            </Grid>
        </div>
    )
}