import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Button, Card, Image } from 'semantic-ui-react'
import { setCurrentPoem, setDisplayType, setMarkovInput, setPoemList } from '../actions/index'
import Adapter from '../Adapter'

class Poem extends Component {

  setAndDisplayPoem = () => {
    this.props.setCurrentPoem(this.props.poem)
    this.props.setDisplayType()
  }

  handleSlice = () => {
    return this.props.poem.body.length >= 50  ? `${this.props.poem.body.slice(0,50)}...` : this.props.poem.body
  }

  handleAddition = (poemTitle, poemBody) => {
    Adapter.postPoem(poemTitle, poemBody, this.props.currentUser.id)
      .then( poem => {
        const poemListUpdated = Array.from(this.props.poemList)
        poemListUpdated.unshift(poem)
        this.props.setPoemList(poemListUpdated)
    })
  }

  render() {
    return (
        <Card.Group centered>
          <Card>
            <Card.Content id={this.props.poem.id} onClick={() => this.setAndDisplayPoem()}>
              <Image floated='right' size='mini' src='https://www.thoughtco.com/thmb/ZN0M8gc9tVZ_6-x3nk8Oq6jW83U=/768x0/filters:no_upscale():max_bytes(150000):strip_icc()/4654256961_9bec940158_b-5953f0505f9b584bfedd6d07.jpg' />
              <Card.Header>{this.props.poem.title}</Card.Header>
              <Card.Meta>Backdoor Poetry Presents</Card.Meta>
              <Card.Description>
              {this.handleSlice()}
              </Card.Description>
            </Card.Content>
            <Card.Content extra>
              <div className='ui two buttons'>
                <Button basic color='green' onClick={() => {this.props.setMarkovInput(this.props.poem.body)}}>
                  Add to Markov
                </Button>
                <Button basic color='blue' onClick={() => {this.handleAddition(this.props.poem.title, this.props.poem.body)}}>
                  Add to My Poems
                </Button>
              </div>
            </Card.Content>
          </Card>
          </Card.Group>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    currentPoem: state.currentPoem,
    poemList: state.poemList,
    currentUser: state.currentUser
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
      setCurrentPoem: (poem) => {
        dispatch(setCurrentPoem(poem))
    },
      setMarkovInput: (poemText) => {
        dispatch(setMarkovInput(poemText))
      },
      setDisplayType: () => {
        dispatch(setDisplayType("display"))
      },
      setPoemList: (poemListUpdated) => {
        dispatch(setPoemList(poemListUpdated))
      }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Poem)
