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
      .then( poem => {
        const newPoemList = this.props.poemList.filter( poem => poem.id !== this.props.currentPoem.id)
        newPoemList.push(poem)
        this.props.afterUpdateUpdatePoemList(newPoemList)
      })
      .then( this.setState({clicked: false}) )
}
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
