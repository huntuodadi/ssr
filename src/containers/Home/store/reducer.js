const defaultState = {
  newsList: [],
  name: 'zzy'
};
export default (state = defaultState, action) => {
  switch (action.type) {
    case 'GET_NEWS_SUCCESS':
      const { newsList } = action;
      return {...state, newsList};
    default:
      return state;
  }
}