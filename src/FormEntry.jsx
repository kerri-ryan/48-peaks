import React from 'react';
import { TextField, Button, Typography } from '@material-ui/core';
import { withRouter } from 'react-router-dom';
import {
  makeStyles,
  MuiThemeProvider,
  createMuiTheme,
} from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  formFields: {
    flexGrow: 1,
    padding: '4px',
  },
  multilineColor: {
    color: '#181818',
    backgroundColor: '#dddfd4',
  },
  button: {
    backgroundColor: '#fae596',
    color: '#181818',
  },
  container: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: theme.spacing(1),
    backgroundColor: '#173e43',
  },
  title: {
    flexGrow: 1,
    color: '#fae596',
    fontWeight: '900',
  },
}));

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#fae596',
    },
    secondary: {
      main: '#D1D7E0',
    },
  },
});

const FormEntry = (props) => {
  const classes = useStyles();
  const { values, handleChange, handleSubmit } = props;
  return (
    <div className={classes.container}>
      <MuiThemeProvider theme={theme}>
        <Typography variant="h5" className={classes.title}>
          SIGN UP
        </Typography>
        <TextField
          className={classes.formFields}
          variant="outlined"
          label="First Name"
          name="firstName"
          InputProps={{
            className: classes.multilineColor,
          }}
          defaultValue={values.firstName}
          onChange={handleChange}
        />
        <TextField
          className={classes.formFields}
          variant="outlined"
          label="Last Name"
          name="lastName"
          InputProps={{
            className: classes.multilineColor,
          }}
          defaultValue={values.lastName}
          onChange={handleChange}
        />
        <TextField
          className={classes.formFields}
          variant="outlined"
          label="Email"
          name="email"
          InputProps={{
            className: classes.multilineColor,
          }}
          defaultValue={values.email}
          onChange={handleChange}
        />
        <TextField
          className={classes.formFields}
          variant="outlined"
          label="City"
          name="city"
          InputProps={{
            className: classes.multilineColor,
          }}
          defaultValue={values.city}
          onChange={handleChange}
        />
        <TextField
          className={classes.formFields}
          variant="outlined"
          label="When did you start?"
          name="dateStarted"
          type="date"
          InputLabelProps={{
            shrink: true,
          }}
          InputProps={{
            className: classes.multilineColor,
          }}
          defaultValue={values.dateStarted}
          onChange={handleChange}
        />
        <Button
          variant="contained"
          className={classes.button}
          onClick={handleSubmit}
        >
          Submit
        </Button>
      </MuiThemeProvider>
    </div>
  );
};

export default withRouter(FormEntry);
