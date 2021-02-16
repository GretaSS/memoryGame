const Reducer = (state, action) => {
    switch (action.type) {
        case 'GET':
            return {
                ...state,
                value: action.value
            };
        case 'SET':
            return {
                ...state,
                value: action.value
            };
        case 'REMOVE':
            return {
                ...state,
                posts: state.posts.filter(post => post.id !== action.payload)
            };
        case 'SET_ERROR':
            return {
                ...state,
                error: action.payload
            };
        default:
            return state;
    }
};

export default Reducer;