const defaultState = {
  poemList: [],
  currentPoem: null,
  currentPoemTitle: null,
  currentPoemBody: null,
  markovState: [],
  title: "",
  body: "",
  alive: true
}

const reducer = (state = defaultState, action) => {

  switch(action.type) {
    case "TITLE_AND_BODY":
      return {...state, [action.payload.target.name]: action.payload.target.value}
    case "POST_TO_SIDEBAR":
      return {...state, poemList: [...state.poemList, action.payload]}
    case "GENERATE_SIDEBAR":
      return {...state, poemList: [...state.poemList.concat(action.payload)]}
    case "DISPLAY_POEM":
      return {...state, currentPoem: action.payload, currentPoemTitle: action.payload.title, currentPoemBody: action.payload.body}
    case "UPDATE_POEMLIST":
      return {...state, poemList: action.payload}
    case "RESET_CURRENT_POEM_STATE":
      return {...state, currentPoem: null, currentPoemTitle: null, currentPoemBody: null}
    case "UPDATE_AFTER_UPDATE":
      return {...state, currentPoem: action.payload, currentPoemTitle: action.payload.title, currentPoemBody: action.payload.body}
    case "UPDATE_POEMLIST_AFTER_UPDATE":
      return {...state, poemList: action.payload}
    default:
      return state
  }
}

export default reducer;











// store.dispatch(action);
// const action = { type: "CLICK_EVENT"}
