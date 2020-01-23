/* eslint-disable no-unused-vars */
import axios from "axios";

const state = {
  todos: [
    {
      id: 1,
      title: "Todo One"
    },
    {
      id: 2,
      title: "todo teo"
    }
  ]
};

const getters = {
  allTodos: state => state.todos
};

const actions = {
  async fetchTodos({ commit }) {
    const respose = await axios.get(
      "https://jsonplaceholder.typicode.com/todos"
    );

    commit("setTodos", respose.data);
  },
  async addTodo({ commit }, title) {
    const respose = await axios.post(
      "https://jsonplaceholder.typicode.com/todos",
      {
        title,
        completed: false
      }
    );

    commit("newTodo", respose.data);
  },
  async deleteTodo({ commit }, id) {
    await axios.delete(`https://jsonplaceholder.typicode.com/todos/${id}`);
    commit("removeTodo", id);
  },
  async filterTodos({ commit }, e) {
    // console.log(e);
    const limit = parseInt(e.target.value);
    console.log(limit);
    const respose = await axios.get(
      `https://jsonplaceholder.typicode.com/todos?_limit=${limit}`
    );

    commit("setTodos", respose.data);
  }
};

const mutations = {
  setTodos: (state, todos) => (state.todos = todos),
  newTodo: (state, todo) => state.todos.unshift(todo),
  removeTodo: (state, id) =>
    (state.todos = state.todos.filter(todo => todo.id != id))
};

export default {
  state,
  getters,
  actions,
  mutations
};
