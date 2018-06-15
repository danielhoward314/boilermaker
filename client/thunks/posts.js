import {
  gotPosts,
  gotSinglePost,
  addedPost,
  requestedPost,
  failedPost
} from '../actions/post-action-creators'

import axios from 'axios'

export const getPosts = () => async dispatch => {
  try {
    dispatch(requestedPost());
    const allPosts = await axios.get('/api/posts');
    const posts = allPosts.data;
    dispatch(gotPosts(posts));
  } catch (err) {
    dispatch(failedPost());
    console.error(err);
  }
};

export const getSinglePost = id => async dispatch => {
  try {
    dispatch(requestedPost());
    const singlePost = await axios.get(`/api/posts/${id}`);
    const post = singlePost.data;
    dispatch(gotSinglePost(post));
  } catch (err) {
    dispatch(failedPost());
    console.error(err);
  }
};

export const addPost = postInfo => async dispatch => {
  try {
    const newPost = await axios.post(`/api/posts/`, postInfo);
    const { data } = newPost;
    dispatch(addedPost(data));
  } catch (err) {
    dispatch(failedPost());
    console.error(err);
  }
};
