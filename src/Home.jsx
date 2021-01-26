import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { withRouter } from 'react-router-dom';
import { Grid, Paper, Button } from '@material-ui/core';
import Image from './img/homepage.jpg';
import secondImage from './img/homepage02.jpg';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: theme.spacing(1.5),
    marginLeft: theme.spacing(1.5),
    marginRight: theme.spacing(1.5),
  },
  paperOne: {
    padding: theme.spacing(1),
    backgroundImage: `url(${Image})`,
    backgroundRepeat: 'no-repeat',
    height: '300px',
  },
  paperTwo: {
    textAlign: 'center',
    padding: theme.spacing(1),
    backgroundImage: `url(${secondImage})`,
    backgroundRepeat: 'no-repeat',
    height: '300px',
  },
  text: {
    textAlign: 'end',
    marginTop: theme.spacing(9),
    marginLeft: theme.spacing(20),
    color: '#173e43',
  },
  paper: {
    textAlign: 'center',
    padding: theme.spacing(2),
    backgroundColor: '#173e43',
    color: '#FEFFFF',
    '&:hover': {
      opacity: '0.6',
    },
  },
  smallCard: {
    height: '150 px',
  },
  button: {
    backgroundColor: '#ff6700',
    color: '#feffff',
    borderRadius: '20px',
  },
}));

const Home = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Grid container spacing={1}>
        <Grid item xs={6}>
          <Paper className={classes.paperOne}>
            <div className={classes.text}>
              <h4>Tacos bicycle rights hexagon mixtape</h4>
              <h6>
                Hoodie cred tumblr, drinking vinegar iceland tacos fam wolf
                vinyl cloud bread etsy.
              </h6>
              <Button className={classes.button}>park ramps tumblr</Button>
            </div>
          </Paper>
        </Grid>
        <Grid item xs={6}>
          <Paper className={classes.paperTwo}></Paper>
        </Grid>
        <Grid item xs={4}>
          <Paper className={classes.paper}>
            <div className={classes.smallCard}>
              <p style={{ fontWeight: 'bold', color: '#fae596' }}>
                selvage humblebrag
              </p>
              <p>
                Artisan farm-to-table wolf gentrify chicharrones wayfarers
                messenger bag blue bottle four dollar toast yuccie echo park
                ramps tumblr.
              </p>
            </div>
          </Paper>
        </Grid>
        <Grid item xs={4}>
          <Paper className={classes.paper}>
            <div className={classes.smallCard}>
              <p style={{ fontWeight: 'bold', color: '#fae596' }}>
                etsy chia celiac
              </p>
              <p>
                Hexagon before they sold out twee brunch. Bespoke ugh gochujang
                neutra health goth, cornhole 90's ennui. Photo booth vice lyft
                kinfolk neutra.
              </p>
            </div>
          </Paper>
        </Grid>
        <Grid item xs={4}>
          <Paper className={classes.paper}>
            <div className={classes.smallCard}>
              <p style={{ fontWeight: 'bold', color: '#fae596' }}>
                Ramps man braid unicorn
              </p>
              <p>
                Fam lomo truffaut coloring book, organic butcher everyday carry
                photo booth biodiesel hella copper mug offal humblebrag
                cold-pressed.
              </p>
            </div>
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
};

export default withRouter(Home);
