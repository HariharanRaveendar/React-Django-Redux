import axios  from "axios";
import { createMessage, returnErrors } from './messages';
import { tokenConfig ,tokenConfig2} from './auth';

import { GET_ARTICLES,DELETE_ARTICLE,ADD_ARTICLES,GET_SINGLE_ARTICLE} from "./types";

//GET_ARTICLES

export const getArticles = () => (dispatch, getState) => {
    axios
      .get('/api/articles/', tokenConfig(getState))
      .then((res) => {
        dispatch({
          type: GET_ARTICLES,
          payload: res.data,
        });
      })
      .catch((err) => dispatch(returnErrors(err.response.data, err.response.status)));
  };

export const allArticles = () => (dispatch) => {
  axios
    .get('/api/allarticles/', )
    .then((res) => {
      dispatch({
        type: GET_ARTICLES,
        payload: res.data,
      });
    })
    .catch((err) => dispatch(returnErrors(err.response.data, err.response.status)));
};
  
//DELETE_ARTICLE
export const deleteArticle = (id) => (dispatch,getState) => {
    axios.delete(`api/articles/${id}/`,tokenConfig(getState))
    .then(res =>{
        dispatch(createMessage({DELETE_ARTICLE:'Article Deleted'}));
        dispatch({
            type: DELETE_ARTICLE,
            payload: id
        });
    })
    .catch(err => console.log(err));
}


//ADD_ARTICLE
export const addArticle = (article) => (dispatch, getState) => {
    axios
      .post('/api/articles/', article, tokenConfig2(getState))
      .then((res) => {
        dispatch(createMessage({ addArticle: 'Article Added' }));
        dispatch({
          type: ADD_ARTICLES,
          payload: res.data,
        });
      })
      .catch((err) => dispatch(returnErrors(err.response.data, err.response.status)));
  };

//Update_Article
export const updateArticle = (article,id) => (dispatch, getState) => {
  axios
    .put(`/api/articles/${id}/`, article, tokenConfig2(getState))
    .then((res) => {
      dispatch(createMessage({ addArticle: 'Article Updated' }));
      dispatch({
        type: ADD_ARTICLES,
        payload: res.data,
      });
    })
    .catch((err) => dispatch(returnErrors(err.response.data, err.response.status)));
};