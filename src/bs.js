const newPoem = this.props.poemList.find( poem => {
  return poem.id === this.props.currentPoem.id
})
newPoem.title = this.props.currentPoemTitle
newPoem.body = this.props.currentPoemBody
this.props.afterUpdateUpdateCurrentPoem(newPoem)
this.props.afterUpdateUpdatePoemList(this.props.poemList)

...state.poemList.filter( poem => poem.id != currentPoem.id)


            this.props.addPostToSidebar(poem)
