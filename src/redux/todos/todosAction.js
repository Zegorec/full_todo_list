export const actions = {
  ADD: 'ADD/TODO',
  DONE: 'DONE/TODO',
  DELETE: 'DELETE/TODO',
  DELETEALL: 'DELETEALL',
  CHOSESORT: 'CHOSESORT',
  TODOS_REQUEST: 'TODOS_REQUEST',
  TODOS_SUCCESS: 'TODOS_SUCCESS',
};

export const addTodo = (todo) => {
  return {
    type: actions.ADD,
    payload: todo,
  };
};

export const doneTodo = (id) => {
  return {
    type: actions.DONE,
    payload: id,
  };
};

export const deleteTodo = (id) => {
  return {
    type: actions.DELETE,
    payload: id,
  };
};

export const choseTodos = (category) => {
  return {
    type: actions.CHOSESORT,
    payload: category,
  };
};

export const todosRequest = () => {
  return {
    type: actions.TODOS_REQUEST,
  };
};

export const todosSuccess = (todos) => {
  return {
    type: actions.TODOS_SUCCESS,
    payload: todos,
  };
};
