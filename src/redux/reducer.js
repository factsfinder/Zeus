import { UPDATE_ACCOUNT } from "./actions";
import _ from 'lodash';

function reducer(state = {}, action) {
  switch (action.type) {
    case UPDATE_ACCOUNT:
      return _.merge({}, state, action.data);
    default:
      return { ...state };
  }
}

export default reducer;