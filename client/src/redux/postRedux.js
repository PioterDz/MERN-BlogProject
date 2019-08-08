import axios from 'axios';
import { API_URL } from '../config';
// action name creator
const reducerName = 'posts';
const createActionName = name => `app/${reducerName}/${name}`;

/* SELECTORS */

export const getPosts = ({ posts }) => posts;
export const loadPosts = payload => ({ payload, type: LOAD_POSTS });
export const getNumberOfPost = number => ({number, type: NUMBER_OF_POST});

/* ACTIONS */

export const LOAD_POSTS = createActionName('LOAD_POSTS');
export const NUMBER_OF_POST = createActionName('NUMBER_OF_POST');

/* INITIAL STATE */

const initialState = [];

/* THUNK */

export const loadPostsRequest = () => {
  return async dispatch => {

    try {

      let res = await axios.get(`${API_URL}/posts`);
      dispatch(loadPosts(res.data));

    } catch(e) {
      console.log(e.message);
    }

  };
};

/* REDUCER */

export default function reducer(statePart = initialState, action = {}) {
    switch (action.type) {
      case LOAD_POSTS:
        return [ ...action.payload ];
      default:
        return statePart;
    }
};