import produce from 'immer';
import * as actionTypes from './contants';

const initialState = {
  isLogin: false
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.GET_LOGIN:
      return produce(state, draft => {
        draft.isLogin = action.isLogin;
      });

    default:
      return state;
  }
}

export default reducer;