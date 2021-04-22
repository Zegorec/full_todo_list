export const todosSelector = ({ todos }) => {
  return {
    todos: todos.todos,
  };
};

export const sortSelector = ({ todos }) => {
  return {
    sort: todos.sort,
  };
};

export const isLoadingTodosSelector = ({ todos }) => {
  return {
    isLoadingTodos: todos.isLoadingTodos,
  };
};
