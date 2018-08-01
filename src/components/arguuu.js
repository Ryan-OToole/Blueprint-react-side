import React, { Component, Fragment } from 'react';
import '../App.css';
import LoginForm from './LoginForm';
import RegistrationForm from './RegistrationForm'
import Sidebar from './Sidebar'
import CreatePoemForm from './CreatePoemForm'
import DisplayPoem from './DisplayPoem'
import { connect } from "react-redux"
import UpdatePoemForm from './UpdatePoemForm'
import Adapter from '../Adapter'
import MarkovMaker from './MarkovMaker'
import MarkovMade from './MarkovMade'
import {Grid, Segment} from 'semantic-ui-react'
import MarkovFillerBtns from './MarkovFillerBtns'
import { setPoemList } from '../actions/index'
import NavBar from './NavBar'
import { Link, Route, withRouter, Switch, Redirect } from 'react-router-dom'
import Home from './Home'

class App extends Component {

  componentDidMount() {
    Adapter.getPoems()
      .then(this.props.fillPoemList)
  }

  renderDisplayType = () => {
    switch(this.props.displayType) {
        case "display":
          return <DisplayPoem />
        case "create":
          return <CreatePoemForm />
        case "update":
          return <UpdatePoemForm />
        default:
          return null
    }
  }





  render() {

    return (
      <div className="App">

      <Switch>

                      <Fragment>
                        <Route exact path="/register" component={(props) => <RegistrationForm {...props} />} />
                        <Route exact path="/login" component={(props) => <LoginForm {...props} />} />
                      </Fragment>
      <Route exact path="/Poems" component={(props) => {
               return (
                      <Fragment>
                            <NavBar { ...props } />
                            <Grid columns={3} divided>
                             <Grid.Row stretched>
                               <Grid.Column centered="true">
                                 <Segment><Sidebar /></Segment>
                               </Grid.Column>
                               <Grid.Column>
                                 <Segment>{ this.renderDisplayType() }</Segment>
                               </Grid.Column>
                               <Grid.Column>
                                 <Segment>  <MarkovMaker /> <MarkovMade /> </Segment>
                               </Grid.Column>
                             </Grid.Row>
                           </Grid>
                         </Fragment>

                  )
                }
             }
           }
          </Switch>
     </div>
    )
  }
}



                      <Fragment>
                        <Route exact path="/register" component={(props) => <RegistrationForm {...props} />} />
                        <Route exact path="/login" component={(props) => <LoginForm {...props} />} />
                      </Fragment>


function mapStateToProps(state) {
  return {
    displayType: state.displayType
  }
}

function mapDispatchToProps(dispatch) {
  return {
    fillPoemList: (poemsArr) => {
      dispatch(setPoemList(poemsArr))
    }
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App))

















render() {

  return (
    <div className="App">


    <Switch>


      <Route exact path="/login" component={(props) => {
          return ( <LoginForm {...props} /> ) }} />
      <Route exact path="/registrationform" component={(props) => {
          return  ( <RegistrationForm {...props} /> ) }} />


      <Route exact path="/" component={(props) => {
             return (
                  <Fragment>
                    <NavBar { ...props } />
                    <Home { ...props } />
                  </Fragment>
             )
           }
         }
      />



    <Route exact path="/Poems" component={(props) => {
             return (
               <Fragment>
                     <NavBar { ...props } />
                     <Grid columns={3} divided>
                      <Grid.Row stretched>
                        <Grid.Column centered="true">
                          <Segment><Sidebar /></Segment>
                        </Grid.Column>
                        <Grid.Column>
                          <Segment>{ this.renderDisplayType() }</Segment>
                        </Grid.Column>
                        <Grid.Column>
                          <Segment>  <MarkovMaker /> <MarkovMade /> </Segment>
                        </Grid.Column>
                      </Grid.Row>
                    </Grid>
                  </Fragment>

            )
           }
         }
      />
  </Switch>
   </div>
  )
}
}


















  render() {

    return (
      <div className="App">
        <Switch>



          <Route exact path="/Poems" component={(props) => {
                   return (
                     <Fragment>
                           <NavBar { ...props } />
                           <Grid columns={3} divided>
                            <Grid.Row stretched>
                              <Grid.Column centered="true">
                                <Segment><Sidebar /></Segment>
                              </Grid.Column>
                              <Grid.Column>
                                <Segment>{ this.renderDisplayType() }</Segment>
                              </Grid.Column>
                              <Grid.Column>
                                <Segment>  <MarkovMaker /> <MarkovMade /> </Segment>
                              </Grid.Column>
                            </Grid.Row>
                          </Grid>
                        </Fragment>



                      <Route exact path="/login" component={(props) => {
                          return ( <LoginForm {...props} /> ) }} />

                      <Route exact path="/registrationform" component={(props) => {
                          return  ( <RegistrationForm {...props} /> ) }} />

                      <Route exact path="/" component={(props) => {
                             return (
                                  <Fragment>
                                    <NavBar { ...props } />
                                    <Home { ...props } />
                                  </Fragment>
                             )
                           }
                         }
                      />

          </Switch>
       </div>
        }
      }
    }
  }





  render() {

    return (

      <div>
        <switch>

          <Route exact path="/" component={(props) => {
                 return (
                      <Fragment>
                        <NavBar { ...props } />
                        <Home { ...props } />
                      </Fragment>
                 )
               }
             }
          />


          <Route exact path="/Poems" component={(props) => {
                   return (
                     <Fragment>
                           <NavBar { ...props } />
                           <Grid columns={3} divided>
                            <Grid.Row stretched>
                              <Grid.Column centered="true">
                                <Segment><Sidebar /></Segment>
                              </Grid.Column>
                              <Grid.Column>
                                <Segment>{ this.renderDisplayType() }</Segment>
                              </Grid.Column>
                              <Grid.Column>
                                <Segment>  <MarkovMaker /> <MarkovMade /> </Segment>
                              </Grid.Column>
                            </Grid.Row>
                          </Grid>
                        </Fragment>

                  )
                 }
               }
            />


        </switch>
      </div>
  );



          <i className="home icon" />

              console.log(grimm.replace(/\W/g, ''))

              .fillers {
                background: url('https://cdn.pixabay.com/photo/2017/08/30/01/05/milky-way-2695569_1280.jpg');
              }
