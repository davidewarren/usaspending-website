/**
 * Created by Emily Gullo 07/25/2017
 */

import { concat } from 'lodash';

const initialState = [];

const naicsReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'SET_AUTOCOMPLETE_NAICS': {
            return concat([], action.naics);
        }
        default:
            return state;
    }
};

export default naicsReducer;
