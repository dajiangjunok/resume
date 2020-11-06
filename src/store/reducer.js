// import { combineReducers } from "redux-immutable";
import { combineReducers } from "redux";
import { reducer as blogReducer } from '../page/blog/store'

const rootReducer = combineReducers({
  blog: blogReducer
})

export default rootReducer