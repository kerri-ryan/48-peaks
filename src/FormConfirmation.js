import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { withRouter } from 'react-router-dom';
import { Grid, Paper } from '@material-ui/core';

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
    color: '#181818',
    padding: '4px',
    backgroundColor: '#D1D7E0',
    border: '2px solid #802BB1',
  },
  quote: {
    fontStyle: 'italic',
  },
}));

const FormConfirmation = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Paper className={classes.paper}>
        <h6>
          Thanks for signing up! Please visit our trails page to begin adding
          your hikes.
        </h6>
        <h6 className={classes.quote}>Hike more, worry less</h6>
      </Paper>
    </div>
  );
};

export default withRouter(FormConfirmation);
