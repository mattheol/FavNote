import axios from 'axios';

export const removeItemAction = (itemType, id) => ({
  type: 'REMOVE_ITEM',
  payload: { itemType, id },
});

export const addItemAction = (itemType, itemContent) => ({
  type: 'ADD_ITEM',
  payload: {
    itemType,
    item: {
      id: 5,
      ...itemContent,
    },
  },
});

export const authenticate = (username, password) => dispatch => {
  dispatch({ type: 'AUTHENTICATE_REQUEST' });
  return axios
    .post('http://localhost:8080/user/login', { username, password })
    .then(payload => dispatch({ type: 'AUTHENTICATE_SUCCESS', payload }))
    .catch(err => dispatch({ type: 'AUTHENTICATE_FAILURE' }));
};

export const fetchNotes = notesType => (dispatch, getState) => {
  dispatch({ type: 'FETCH_NOTES_REQUEST' });

  return axios
    .get(`http://localhost:8080/notes/type`, {
      params: { type: notesType, userID: getState().userID },
    })
    .then(({ data }) =>
      dispatch({ type: 'FETCH_NOTES_SUCCESS', payload: { data, notesType } }),
    )
    .catch(err => dispatch({ type: 'FETCH_NOTES_FAILURE' }));
};
