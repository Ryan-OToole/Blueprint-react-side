import React, { Component } from 'react';
import { Form, Grid, Segment } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

class RegistrationForm extends Component {
  state = {
    username: "",
    password: "",
  }

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    })
  }

  handleSubmit = (event) => {
    event.preventDefault();

    fetch(`http://localhost:3000/users/`, {
      method: 'POST',
      headers: {
        "Content-Type": 'application/json'
      },
      body: JSON.stringify(this.state)
    })
      .then(res => res.json())
      .then(json => {
        console.log("json now", json);
        localStorage.setItem('token', json.token);
        localStorage.setItem('user', json.username)
        // this.props.history.push("/");
      })
  }

  render() {
    return (
      <React.Fragment>
        <h3>Badass Poetry Presents</h3>
        <p>Register then login and create your own poems, share poems with the community, and use the Markov Generator to play with</p>
          <img src="https://www.selfpublishbooks.ie/wp-content/uploads/2016/04/poetry-pencil.jpg" alt="" height="200" width="200" />
        <Grid>
          <Grid.Row centered>
            <Segment padded='very' style={{width: '40%'}}>
              <Form onSubmit={this.handleSubmit}>
                <Form.Input
                  label='Username'
                  type="text"
                  name="username"
                  placeholder="Username"
                  onChange={this.handleChange}
                  value={this.state.username}
                />
                <Form.Input
                  label="Password"
                  type="password"
                  name="password"
                  placeholder="Password"
                  onChange={this.handleChange}
                  value={this.state.password}
                />
              <Form.Button type="submit" color='blue' content="Register" />
              </Form>
            </Segment>
          </Grid.Row>
        </Grid>
        Already a user? <Link className="ui basic inverted item" to="/login">Login here</Link>
      </React.Fragment>
    )
  }
}

export default RegistrationForm;
