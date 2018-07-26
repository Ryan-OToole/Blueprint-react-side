const newPoem = this.props.poemList.find( poem => {
  return poem.id === this.props.currentPoem.id
})
newPoem.title = this.props.currentPoemTitle
newPoem.body = this.props.currentPoemBody
this.props.afterUpdateUpdateCurrentPoem(newPoem)
this.props.afterUpdateUpdatePoemList(this.props.poemList)

...state.poemList.filter( poem => poem.id != currentPoem.id)


            this.props.addPostToSidebar(poem)



  handleSubmit = (event) => {
    event.preventDefault()
    const config = {
      method: "POST",
      headers: {'Content-Type':'application/json'},
      body: JSON.stringify({
          title: this.props.title,
          body: this.props.body,
          user_id:1
      })
    }
    fetch('http://localhost:3000/poems', config)
      .then( r=>r.json() )
      .then( poem => {
        this.props.addPostToSidebar(poem)
      })
      .then(this.setState({
        state: true
      }))



      <Fragment>
        <h3> {this.props.title} </h3>
        <p> {this.props.body} </p>
        <button onClick={this.handleClick}> Edit Poem </button>
        <button onClick={this.deletePoemFromServer}> Delete Poem </button>
      </Fragment>


//  bottom part of PATCH request

}


// store.dispatch(action);
// const action = { type: "CLICK_EVENT"}


Adapter.getAnimal().then(json => )



//from displayPoem
handleChange: (event) => {
  dispatch({type: "TITLE_AND_BODY", payload: event})
},
afterUpdateUpdateCurrentPoem: (newPoem) => {
  dispatch({type: "UPDATE_AFTER_UPDATE", payload: newPoem})
},
afterUpdateUpdatePoemList: (poemList) => {
  dispatch({type: "UPDATE_POEMLIST_AFTER_UPDATE", payload: poemList})
},
addPostToSidebar: (poem) => {
  dispatch({type: "POST_TO_SIDEBAR", payload: poem})
}





<div
  onClick={() => {this.props.setCurrentPoem(this.props.poem)}}
  id={this.props.poem.id}
  >
  <h3>{this.props.poem.title}</h3>
</div>





const CardExampleGroups = () => (
  <Card.Group>
    <Card>
      <Card.Content>
        <Image floated='right' size='mini' src='/images/avatar/large/steve.jpg' />
        <Card.Header>Steve Sanders</Card.Header>
        <Card.Meta>Friends of Elliot</Card.Meta>
        <Card.Description>
          Steve wants to add you to the group <strong>best friends</strong>






<Grid.Column centered>
  <Segment><Sidebar /></Segment>
  <Segment>2</Segment>
  <Segment>3</Segment>
</Grid.Column>


onClick={(event) => {this.props.setCurrentPoem(this.props.poem)}



#sidebar {
    float:left;
    width: 100%;
}
#poem-details {
    text-align: left;
    float:left;
    width: 100%;
}

#markov-madness {
  text-align: right;
  float:right;
  width: 100%;
}
