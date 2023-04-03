import { createStore } from 'redux'

// Global store object
const initialState = {

    // Store pre-loaded list
    listPlaceholder: "Some Item\nAnother Item\nItem\nA Longer Item This Is\nItem Item\netc...",

    // Store user-generated list
    listOutput: "",

    listStyles: [
        { id: "1", title: "Dot", bullet: "•", techniques: [1, 2, 3], svg: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25'%3E%3Ctext x='50%25' y='50%25' dominant-baseline='middle' text-anchor='middle' class='text' fill='red' style='font-size:1em;font-family:sans-serif;'%3E•%3C/text%3E%3C/svg%3E");`},
        { id: "2", title: "Dash",  bullet: "-", techniques: [1, 2, 3], svg: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25'%3E%3Ctext x='50%25' y='50%25' dominant-baseline='middle' text-anchor='middle' class='text' fill='red' style='font-size:1em;font-family:sans-serif;'%3E-%3C/text%3E%3C/svg%3E");`},
        { id: "3", title: "Vertical Line", bullet: "|", techniques: [1, 2, 3], svg: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25'%3E%3Ctext x='50%25' y='50%25' dominant-baseline='middle' text-anchor='middle' class='text' fill='red' style='font-size:1em;font-family:sans-serif;'%3E|%3C/text%3E%3C/svg%3E")`},
        { id: "4", title: "Square", bullet: "■", techniques: [1, 2, 3], svg: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25'%3E%3Ctext x='50%25' y='50%25' dominant-baseline='middle' text-anchor='middle' class='text' fill='red' style='font-size:1em;font-family:sans-serif;'%3E■%3C/text%3E%3C/svg%3E");`},
        { id: "5", title: "Front Slash", bullet: "/", techniques: [1, 2, 3], svg: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25'%3E%3Ctext x='50%25' y='50%25' dominant-baseline='middle' text-anchor='middle' class='text' fill='red' style='font-size:1em;font-family:sans-serif;'%3E/%3C/text%3E%3C/svg%3E");`},
        { id: "6", title: "Back Slash", bullet: "\\", techniques: [1, 2, 3], svg: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25'%3E%3Ctext x='50%25' y='50%25' dominant-baseline='middle' text-anchor='middle' class='text' fill='red' style='font-size:1em;font-family:sans-serif;'%3E\\%3C/text%3E%3C/svg%3E");`},
    ],

    // Selected technique/style
    listTechnique: 0,
    listStyle: 0,

    // Unused, keeping for reference
    settingsModal: {
        open: false
    }

}

// Defining store actions
const reducer = (state = initialState, action) => {

    if (action.type === 'INPUT_LIST') {
        return Object.assign({}, state, {
        listInput: action.payload
        })
    }

    if (action.type === 'OUTPUT_LIST') {
        return Object.assign({}, state, {
            listOutput: action.payload
        })
    }

    if (action.type === 'ADD_ITEM') {
        return Object.assign({}, state, {
        posts: state.items.concat(action.payload)
        })
    }

    if (action.type === 'SET_TECHNIQUE') {
        return Object.assign({}, state, {
        listTechnique: action.payload
        })
    }

    if (action.type === 'SET_STYLE') {
        return Object.assign({}, state, {
        listStyle: action.payload
        })
    }

    return state
}

const store = createStore(reducer)

export default store