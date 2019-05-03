import { combineReducers } from 'redux';

const initState = [
    'a - 0',
    'b - 0',
    'c - 0'
];

const items = {
    'a - 0': '1 - 0',
    'b - 0': '2 - 0',
    'c - 0': '3 - 0',
    'z - 0': '0 - 0'
};

export default combineReducers({
    list1: (state = initState, action) => {
        switch (action.type) {
            case 'CHANGE_ITEM_1':
                const newState = [...state];
                const lastSymbolIndex = state[action.index].length - 1;
                const count = parseInt(state[action.index][lastSymbolIndex]);
                const string = state[action.index].substr(0, lastSymbolIndex);
                newState[action.index] = `${string}${isNaN(count) ? 0 : count + 1}`;
                return newState;
            case 'ADD_ITEMS_1':
                return state.concat(['z - 0']);
            default:
                return state;
        }
    },
    list2: (state = initState, action) => {
        switch (action.type) {
            case 'CHANGE_ITEM_2':
                const newState = [...state];
                const lastSymbolIndex = state[action.index].length - 1;
                const count = parseInt(state[action.index][lastSymbolIndex]);
                const string = state[action.index].substr(0, lastSymbolIndex);
                newState[action.index] = `${string}${isNaN(count) ? 0 : count + 1}`;
                return newState;
            case 'ADD_ITEMS_2':
                return state.concat(['z - 0']);
            default:
                return state;
        }
    },
    list3: (state = initState, action) => {
        switch (action.type) {
            case 'ADD_ITEMS_3':
                return state.concat(['z - 0']);
            default:
                return state;
        }
    },
    items: (state = items, action) => {
        switch (action.type) {
            case 'CHANGE_ITEM_3':
                const newState = {...state};
                const lastSymbolIndex = state[action.id].length - 1;
                const count = parseInt(state[action.id][lastSymbolIndex]);
                const string = state[action.id].substr(0, lastSymbolIndex);
                newState[action.id] = `${string}${(isNaN(count)) ? 0 : count + 1}`;
                return newState;
            default:
                return state;
        }
    }
});
