export default (state = true, { type }) => {
  switch (type) {
    case 'ON':
      return true;
    case 'OFF':
      return false;
    default: 
      return !state;
  }
};
