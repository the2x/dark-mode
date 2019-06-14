import themeReducer from '../reducers/themeReducer'
import { createStore } from 'redux'

const store = createStore(themeReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

export default store;