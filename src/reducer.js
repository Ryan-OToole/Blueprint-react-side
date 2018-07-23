const defaultState = {
  poemList: [],
  currentPoem: null,
  markovState: [],
  title: "",
  body: "",
  alive: true
}

const reducer = (state = defaultState, action) => {

  switch(action.type) {
    case "CLICK_EVENT":
      return {...state, alive: false}
    case "TITLE_AND_BODY":
      return {...state, [action.payload.target.name]: action.payload.target.value}
    case "POST_TO_SIDEBAR":
      return {...state, poemList: [...state.poemList, action.payload]}
    case "GENERATE_SIDEBAR":
      return {...state, poemList: [...state.poemList.concat(action.payload)]}
    case "DISPLAY_POEM":
      return {...state, currentPoem: action.payload}
    case "UPDATE_POEMLIST":
      return {...state, poemList: action.payload}
    default:
      return state
  }
}

export default reducer;











// store.dispatch(action);
// const action = { type: "CLICK_EVENT"}
