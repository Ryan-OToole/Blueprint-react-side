import React, { Component } from 'react';
import { Form, Grid, Segment } from 'semantic-ui-react';


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
        this.props.history.push("/");
      })
  }

  componentWillMount() {
    document.body.className = 'background_image'
  }

  render() {
    return (
      <React.Fragment>
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
      </React.Fragment>
    )
  }
}

export default RegistrationForm;
