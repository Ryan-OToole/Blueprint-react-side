const defaultState = {
  poemList: [],
  currentPoem: null,
  currentPoemTitle: null,
  currentPoemBody: null,
  markovState: [],
  title: "",
  body: "",
  displayType: ""
}

const reducer = (state = defaultState, action) => {

  switch(action.type) {
    case "FILL_POEMLIST":
      return {...state, poemList: action.payload}
    case "SET_CURRENT_POEM":
      return {...state, currentPoem: action.payload, currentPoemTitle: action.payload.title, currentPoemBody: action.payload.body, displayType: "display"}
    case "TITLE_AND_BODY":
      return {...state, [action.payload.target.name]: action.payload.target.value}
    case "SET_DISPLAY_TYPE":
      return {...state, displayType: action.payload}
    case "ADD_TO_POEMLIST":
      return {...state, poemList: [...state.poemList, action.payload]}
    case "UPDATE_POEMLIST":
      return {...state, poemList: action.payload}
    case "UPDATE_AFTER_UPDATE":
      return {...state, currentPoem: action.payload}
    case "UPDATE_POEMLIST_AFTER_UPDATE":
      return {...state, poemList: action.payload}
    default:
      return state
  }
}

export default reducer;
