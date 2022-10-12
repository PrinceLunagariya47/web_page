const initialState = [];

const cart = (state = initialState, action) => {
    console.log('state', state);
    console.log('action', action);
    switch (action.type) {
        case 'ADDITEM':
            state.push(action.payload)
            return state

        default:
            return state;
    }
}

export default cart;