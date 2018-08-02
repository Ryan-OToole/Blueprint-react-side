export function setPoemList(poems) {
  return {
    type: "SET_POEMLIST",
    payload: poems
  }
}

export function setPoemListFilter(poems) {
  return {
    type: "SET_POEMLIST_FILTER",
    payload: poems
  }
}

export function setCurrentPoem(poem) {
  return {
    type: "SET_CURRENT_POEM",
    payload: poem
  }
}

export function controlledComponent(event) {
  return {
    type: "CONTROLLED_COMPONENT",
    payload: event
  }
}

export function setDisplayType(string) {
  return {
    type: "SET_DISPLAY_TYPE",
    payload: string
  }
}

export function setMarkovInput(string) {
  return {
    type: "SET_MARKOV_INPUT",
    payload: string
  }
}

export function clearMarkov(string) {
  return {
    type: "CLEAR_MARKOV",
    payload: string
  }
}

export function setMarkovOutput(string) {
  return {
    type: "SET_MARKOV_OUTPUT",
    payload: string
  }
}

export function updateCurrentUser(user) {
  return {
    type: "UPDATE_CURRENT_USER",
    payload: user
  }
}

export function clearCreateForm(string) {
  return {
    type: "CLEAR_CREATE_FORM",
    payload: string
  }
}

export function clearMarkovOutputTitle(string) {
  return {
    type: "CLEAR_MARKOV_OUTPUT_TITLE",
    payload: string
  }
}
