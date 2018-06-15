import POSTS from './post-action-types';

export const gotPosts = posts => ({
  type: POSTS.GOT_POSTS,
  payload: {
    status: 'loaded',
    posts
  }
});

export const gotSinglePost = post => ({
    type: POSTS.GOT_SINGLE_POST,
    payload: {
        status: 'loaded',
        post
    }
})

export const addedPost = newPost => ({
  type: POSTS.ADDED_POST,
  payload: {
    status: 'loaded',
    newPost
  }
})

export const requestedPost = () => ({
  type: POSTS.REQUESTED_POST,
  payload: {
    status: 'loading'
  }
});

export const failedPost = () => ({
  type: POSTS.LOAD_FAILED,
  payload: {
    status: 'failed'
  }
});
