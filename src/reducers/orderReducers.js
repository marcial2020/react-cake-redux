const { CREATE_ORDER, CLEAR_ORDER } = require("../types");

const orderReducer = (state = {}, action) => {
    switch (action.type) {
        case CREATE_ORDER:
            return {order: action.payload};
        case CLEAR_ORDER: 
            return {order: null};
        default:
            return state;
    }
};

export { orderReducer };