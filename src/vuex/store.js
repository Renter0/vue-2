import { createStore } from "vuex";
import axios from "axios";

export default createStore({
  state: {
    news: [],
    post: {},
  },
  mutations: {
    SET_NEWS_TO_STATE(state, news) {
      state.news = news;
    },
    SET_POST(state, post) {
      state.post = post;
    },
  },
  actions: {
    GET_POSTS_FROM_JSON({ commit }) {
      return axios("https://jsonplaceholder.typicode.com/posts", {
        method: "GET",
      })
        .then((news) => {
          commit("SET_NEWS_TO_STATE", news.data);
          return news;
        })
        .catch((error) => {
          console.log(error);
          return error;
        });
    },
    GET_POST_BY_ID({commit}, id) {
      return axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`)
        .then((post) => {
          commit("SET_POST", post.data)
          return post.data;
        })
        .catch((error) => {
          console.log(error);
          return error;
        });
    }
  },
  getters: {
    NEWS(state) {
      return state.news;
    },
    POST(state) {
      return state.post;
    }
  },
});
