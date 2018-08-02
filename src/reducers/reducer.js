const defaultState = {
  poemList: [],
  poemListFilter: [],
  currentPoem: null,
  currentPoemTitle: null,
  currentPoemBody: null,
  title: "",
  body: "",
  displayType: "",
  markov: "",
  markovOutput: "",
  currentUser: null,
  searchTerm: ""
}


const reducer = (state = defaultState, action) => {

  switch(action.type) {
    case "SET_POEMLIST":
      return {...state, poemList: action.payload}
    case "SET_POEMLIST_FILTER":
      return {...state, poemListFilter: action.payload}
    case "SET_CURRENT_POEM":
      return {...state, currentPoem: action.payload, currentPoemTitle: action.payload.title, currentPoemBody: action.payload.body}
    case "CONTROLLED_COMPONENT":
      return {...state, [action.payload.target.name]: action.payload.target.value}
    case "SET_DISPLAY_TYPE":
      return {...state, displayType: action.payload}
    case "SET_MARKOV_INPUT":
      return {...state, markov: state.markov + action.payload}
    case "CLEAR_MARKOV":
      return {...state, markov: action.payload}
    case "SET_MARKOV_OUTPUT":
      return {...state, markovOutput: action.payload}
    case "UPDATE_CURRENT_USER":
      return {...state, currentUser: action.payload}
    case "CLEAR_CREATE_FORM":
      return {...state, title: action.payload, body: action.payload}
    case "CLEAR_MARKOV_OUTPUT_TITLE":
      return {...state, title: action.payload}
    default:
      return state
  }
}

export default reducer;
