import React, { Component } from 'react';
import { Form, Grid, Segment } from 'semantic-ui-react';
import { updateCurrentUser } from '../actions/index'
import { connect } from "react-redux"
import Adapter from '../Adapter'
import { Link } from 'react-router-dom';

class LoginForm extends Component {
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
    fetch(`http://localhost:3000/sessions/`, {
      method: 'POST',
      headers: {
        "Content-Type": 'application/json'
      },
      body: JSON.stringify(this.state)
    })
      .then(res => res.json())
      .then(json => {
      if(json.errors) {
        alert(`${json.errors}`)
      }
      else {
        localStorage.setItem('token', json.token);
        this.props.updateCurrentUser(json)
        this.props.history.push("/poems");
      }
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
              <Form.Button type="submit" color='green' content="Login" />
                <h3>Not a user? Not a problem</h3> <Link className="ui basic inverted item" to="/register">Register Here!</Link>
              </Form>
            </Segment>
          </Grid.Row>
        </Grid>
      </React.Fragment>
    )
  }
}


function mapStateToProps(state) {
  return {
    currentUser: state.currentUser
  }
}

function mapDispatchToProps(dispatch){
  return {
    updateCurrentUser: (user) => {
      dispatch(updateCurrentUser(user))
    }
  }
}


  export default connect(mapStateToProps, mapDispatchToProps)(LoginForm)
