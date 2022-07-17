import todos from "../apis/todos";
import history from "../history";
import {
  SIGN_IN,
  SIGN_OUT,
  CREATE_TODO,
  FETCH_TODOS,
  FETCH_TODO,
  DELETE_TODO,
  EDIT_TODO,
} from "./types";

export const signIn = (userId) => {
  return {
    type: SIGN_IN,
    payload: userId,
  };
};

export const signOut = () => {
  return {
    type: SIGN_OUT,
  };
};

export const createTodo = (formValues) => async (dispatch, getState) => {
  const { userId } = getState().auth;
  // makes a POST api call using redux-thunk to get response for action
  const response = await todos.post("/todos", { ...formValues, userId });

  // then dispatching the action to create a todo
  dispatch({ type: CREATE_TODO, payload: response.data });

  // programmatic navigation to get user back to root route
  history.push("/");
};

export const fetchTodos = () => async (dispatch) => {
  const response = await todos.get("/todos");

  dispatch({ type: FETCH_TODOS, payload: response.data });
};

export const fetchTodo = (id) => async (dispatch) => {
  const response = await todos.get(`/todos/${id}`);

  dispatch({ type: FETCH_TODO, payload: response.data });
};

export const editTodo = (id, formValues) => async (dispatch) => {
  const response = await todos.put(`/todos/${id}`, formValues);

  dispatch({ type: EDIT_TODO, payload: response.data });
};

export const deleteTodo = (id) => async (dispatch) => {
  await todos.delete(`/todos/${id}`);

  dispatch({ type: DELETE_TODO, payload: id });
};
