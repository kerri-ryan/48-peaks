import React from 'react';
import { withRouter } from 'react-router-dom';
import FormEntry from './FormEntry';
import FormConfirmation from './FormConfirmation';

class Signup extends React.Component {
  constructor() {
    super();
    this.state = {
      step: 1,
      submitted: false,
      firstName: '',
      lastName: '',
      email: '',
      city: '',
      dateStarted: Date.now(),
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }
  handleSubmit(evt) {
    evt.preventDefault();
    this.setState({
      submitted: true,
      step: 2,
    });
  }

  handleChange(evt) {
    this.setState({ [evt.target.name]: evt.target.value });
  }

  render() {
    const { step } = this.state;
    const { handleSubmit } = this;
    const { handleChange } = this;
    const { firstName, lastName, email, city, dateStarted } = this.state;
    const values = { firstName, lastName, email, city, dateStarted };

    switch (step) {
      case 1:
        return (
          <FormEntry
            handleChange={handleChange}
            handleSubmit={handleSubmit}
            values={values}
          />
        );
      case 2:
        return <FormConfirmation />;
      default:
        return [];
    }
  }
}

export default withRouter(Signup);
