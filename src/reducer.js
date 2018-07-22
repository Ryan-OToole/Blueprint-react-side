const defaultState = {
  poemList: [],
  currentPoem: {},
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
    case "GENERATE_SIDEBAR":
      return {...state, poemList: [...state.poemList, action.payload]}
    default:
      return state
  }
}




export default reducer











// store.dispatch(action);
// const action = { type: "CLICK_EVENT"}
