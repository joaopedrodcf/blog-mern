import actionTypes from '../actions/actionsTypes';

const authentication = (state = [], action) => {
    switch (action.type) {
        case actionTypes.LOGIN_START:
            return {
                ...state
            };
        case actionTypes.LOGIN_SUCCESS:
            return {
                ...state,
                isAuthenticated: true,
                errorMessage: 'success',
                email: action.payload.email
            };
        case actionTypes.LOGIN_ERROR:
            return {
                ...state,
                errorMessage: action.payload.err.response.data.message
            };
        case actionTypes.REGISTER_START:
            return {
                ...state
            };
        case actionTypes.REGISTER_SUCCESS:
            return {
                ...state,
                isAuthenticated: true,
                errorMessage: 'success',
                email: action.payload.email
            };
        case actionTypes.REGISTER_ERROR:
            return {
                ...state,
                errorMessage: 'The user already exists' // needs dev in BE to pass error message correctly
            };
        case actionTypes.LOGOUT_START:
            return {
                ...state
            };
        case actionTypes.LOGOUT_SUCCESS:
            return {
                ...state,
                isAuthenticated: false
            };
        case actionTypes.LOGOUT_ERROR:
            return {
                ...state
            };
        default:
            return state;
    }
};

export default authentication;
