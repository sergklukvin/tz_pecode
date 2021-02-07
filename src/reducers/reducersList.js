export function reducerHasErrored(state = false, action) {
  switch (action.type) {
    case 'HAS_ERRORED':
      return action.hasErrored;

    default:
      return state;
  }
}

export function reducerIsLoading(state = false, action) {
  switch (action.type) {
    case 'IS_LOADING':
      return action.isLoading;

    default:
      return state;
  }
}

export function reducerFatch(state = [], action) {
  switch (action.type) {
    case 'FETCH_DATA_SUCCESS':
      return action.items;

    default:
      return state;
  }
}
