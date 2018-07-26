import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Button, Card, Image } from 'semantic-ui-react'

class Poem extends Component {

  render() {
    return (
        <Card.Group centered>
          <Card>
            <Card.Content id={this.props.poem.id} onClick={() => {this.props.setCurrentPoem(this.props.poem)}}>
              <Image floated='right' size='mini' src='https://www.thoughtco.com/thmb/ZN0M8gc9tVZ_6-x3nk8Oq6jW83U=/768x0/filters:no_upscale():max_bytes(150000):strip_icc()/4654256961_9bec940158_b-5953f0505f9b584bfedd6d07.jpg' />
              <Card.Header>{this.props.poem.title}</Card.Header>
              <Card.Meta>Badass Poetry Presents</Card.Meta>
              <Card.Description>
              {this.props.poem.body.slice(0,50)}
              </Card.Description>
            </Card.Content>
            <Card.Content extra>
              <div className='ui two buttons'>
                <Button basic color='green' onClick={() => {this.props.setMarkovInput(this.props.poem)}}>
                  Add to Markov
                </Button>
                <Button basic color='red'>
                  Community
                </Button>
              </div>
            </Card.Content>
          </Card>
          </Card.Group>
    )
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
      setCurrentPoem: (poem) => {
        dispatch({type: "SET_CURRENT_POEM", payload: poem})
    },
      setMarkovInput: (poem) => {
        dispatch({type: "SET_MARKOV_INPUT", payload: poem})
      }
  }
}

export default connect(null, mapDispatchToProps)(Poem)
