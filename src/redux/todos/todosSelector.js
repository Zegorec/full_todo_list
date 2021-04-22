export const todosSelector = ({ todos }) => {
  return {
    todos: todos.todos,
    sort: todos.sort,
    isLoadingTodos: todos.isLoadingTodos,
  };
};
