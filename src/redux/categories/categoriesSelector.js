export const dataSelector = ({ todos, categories }) => {
  return {
    todos: todos.todos,
    sort: todos.sort,
    isLoadingTodos: todos.isLoadingTodos,
    categories: categories.categories,
    chosenCategory: categories.chosenCategory,
    isLoadingCategories: categories.isLoadingCategories,
  };
};
