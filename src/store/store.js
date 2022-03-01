import { createStore } from "redux";

import { setLocalStorage } from "../utils/localStorage";

import rootReducer from './reducers'

const store = createStore(rootReducer)


store.subscribe(() => {
    setLocalStorage('store', store.getState().favoriteReducer)
})

export default store