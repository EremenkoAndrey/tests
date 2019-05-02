import { combineReducers } from 'redux';

const initState = [
    'a - 0',
    'b - 0',
    'c - 0'
];

export default combineReducers({
    list1: (state = initState, action) => {
        switch (action.type) {
            case 'CHANGE_ITEM_1':
                const newState = [...state];
                const count = parseInt(state[action.index][state[action.index].length - 1]);
                const string = state[action.index].substr(0, 4);
                newState[action.index] = `${string}${isNaN(count) ? 0 : count + 1}`;
                return newState;
            default:
                return state;
        }
    },
    list2: (state = initState, action) => {
        switch (action.type) {
            case 'CHANGE_ITEM_2':
                const newState = [...state];
                const count = parseInt(state[action.index][state[action.index].length - 1]);
                const string = state[action.index].substr(0, 4);
                newState[action.index] = `${string}${isNaN(count) ? 0 : count + 1}`;
                return newState;
            default:
                return state;
        }
    }
});
