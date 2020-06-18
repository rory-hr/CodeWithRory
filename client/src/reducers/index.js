import { combineReducers } from 'redux';

const test = (state = 'TEST', { type, payload }) => {
  switch (type) {
    default:
      return state;
  }
};

export default combineReducers({
  test
});