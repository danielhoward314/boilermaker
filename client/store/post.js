import POSTS from '../actions/post-action-types';

// Initial State
const initialState = {
  posts: [],
  singlePost: {},
  status: 'unasked'
};

// Reducer
export default function(state = initialState, action) {
  switch (action.type) {
    case POSTS.GOT_POSTS: {
      return {
        ...state,
        posts: action.payload.posts,
        status: action.payload.status
      };
    }
    case POSTS.GOT_SINGLE_POST: {
      return {
        ...state,
        singlePost: action.payload.post,
        status: action.payload.status
      };
    }
    case POSTS.ADDED_POST: {
      return {
        ...state,
        posts: [...state.posts, action.payload.newPost],
        status: action.payload.status
      };
    }
    case POSTS.REQUESTED_POST: {
      return {
        ...state,
        status: action.payload.status
      };
    }
    case POSTS.LOAD_FAILED: {
      return {
        ...state,
        status: action.payload.status
      };
    }
    default: {
      return state;
    }
  }
}
