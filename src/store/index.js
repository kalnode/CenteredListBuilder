import { createStore } from 'redux'

// All global variables defined in one object
const initialState = {



  // Store pre-loaded list
  listPlaceholder: "Item 1\nItem 2\nItem 3\nItem 4\nItem 5\netc...",

  // Store user-generated list
  listOutput: "",


  // Unused, keeping for reference
  items: [],
  
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
          posts: state.items.concat(action.payload)
        })
      }

  return state
}

const store = createStore(reducer);

export default store;