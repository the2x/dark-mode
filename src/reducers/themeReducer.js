const initialState = {
    theme: 'light'
}

const themeReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'CHANGE_THEME':
            return ({
                ...state,
                checked: !state.checked,
                theme: action.payload
            })
        default:
            return ({
                ...state
            })
    }
}

export default themeReducer