import { omit } from "lodash";

import { getLocalStorage } from "../../utils/localStorage";
import { ADD_PERSON_TO_FAVORITE, REMOVE_PERSON_FROM_FAVORITE } from "../constants/actionTypes";

const initState = getLocalStorage('store');

const favoriteReducer = (state = initState, action) => {
    switch (action.type) {
        case ADD_PERSON_TO_FAVORITE:
            return {
                ...state,
                ...action.payload
            }
    
        case REMOVE_PERSON_FROM_FAVORITE:
            return omit(state, [action.payload])
        default:
            return state;
    }
}

export default favoriteReducer