import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { withRouter } from 'react-router-dom';
import { Paper } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: theme.spacing(2),
  },
  paper: {
    color: '#FEFFFF',
    padding: '4px',
    backgroundColor: '#3fb0ac',
    boxShadow: '5px 10px #173e43',
    marginLeft: theme.spacing(20),
    marginRight: theme.spacing(20),
  },
}));

const FormConfirmation = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Paper className={classes.paper}>
        <h6>
          Copper mug poke blog, bespoke before they sold out organic gentrify
          man bun pok pok tilde yuccie swag mixtape lomo. Raclette wayfarers
          prism quinoa, air plant twee actually artisan cloud bread tousled
          cred.
        </h6>
      </Paper>
    </div>
  );
};

export default withRouter(FormConfirmation);
