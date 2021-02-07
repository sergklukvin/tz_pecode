export function hasErrored(bool) {
  console.log(bool);
  return {
    type: 'DATA_HAS_ERRORED',
    hasErrored: bool,
  };
}

export function isLoading(bool) {
  return {
    type: 'DATA_IS_LOADING',
    isLoading: bool,
  };
}

export function fetchDataSuccess(items) {
  return {
    type: 'FETCH_DATA_SUCCESS',
    items,
  };
}

export function fetchData(url) {
  return (dispatch) => {
    dispatch(isLoading(true));

    fetch(url)
      .then((response) => {
        if (!response.ok) {
          throw Error(response.statusText);
        }

        dispatch(isLoading(false));
        return response;
      })
      .then((response) => {
        return response.json();
      })
      .then((items) => {
        dispatch(fetchDataSuccess(items));
      })
      .catch(() => dispatch(hasErrored(true)));
  };
}

export function addDataSuccess(items) {
  return {
    type: 'ADD_DATA_SUCCESS',
    items,
  };
}
