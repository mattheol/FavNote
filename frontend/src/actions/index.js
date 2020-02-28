import axios from 'axios';

export const removeItemAction = (itemType, id) => ({
  type: 'REMOVE_ITEM',
  payload: { itemType, id },
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

export const addNote = (noteType, newItem) => (dispatch, getState) => {
  dispatch({ type: 'ADD_NOTE_REQUEST' });

  return axios
    .post(`http://localhost:8080/note`, {
      ...newItem,
      type: noteType,
      userID: getState().userID,
    })
    .then(({ data }) =>
      dispatch({ type: 'ADD_NOTE_SUCCESS', payload: { data, noteType } }),
    )
    .catch(err => dispatch({ type: 'ADD_NOTES_FAILURE' }));
};

export const deleteNote = (noteType, id) => dispatch => {
  dispatch({ type: 'REMOVE_NOTE_REQUEST' });

  return axios
    .delete(`http://localhost:8080/note/${id}`)
    .then(() =>
      dispatch({ type: 'REMOVE_NOTE_SUCCESS', payload: { id, noteType } }),
    )
    .catch(err => dispatch({ type: 'REMOVE_NOTES_FAILURE' }));
};
