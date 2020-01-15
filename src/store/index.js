import { createStore } from 'redux'

// All global variables defined in one object
const initialState = {


  // Main app global vars
  listInput: "Original list",
  listOutput: "Final list",

  // Items is old, keeping for reference.
  items: [],

  // Presuming the mini-app may have a modal.
  settingsModal: {
    open: false
  }


}

// Defining store actions
const reducer = (state = initialState, action) => {

      if (action.type === 'INPUT_LIST') {
        console.log("applying payload to listInput: " + action.payload)
        return Object.assign({}, state, {
          listInput: action.payload
        })
      }

      if (action.type === 'OUTPUT_LIST') {
        console.log("applying payload to listOutput: " + action.payload)
        return Object.assign({}, state, {
            listOutput: action.payload
          })
      }

      if (action.type === 'ADD_ITEM') {
        return Object.assign({}, state, {
          posts: state.posts.concat(action.payload)
        })
      }

  return state
}


const singleStateVariable = "test";

const reducer2 = (state = singleStateVariable, action) => {

      if (action.type === 'MY_ACTION') {
        state = action.payload
      }

  return state
}

const store = createStore(reducer);

export default store;