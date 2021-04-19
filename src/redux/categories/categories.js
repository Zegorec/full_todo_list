export const dataSelector = ({ todos, categories }) => {
  return {
    todos: todos.todos,
    sort: todos.sort,
    categories: categories.categories,
    chosenCategory: categories.chosenCategory,
  };
};

const initStore = {
  categories: [],
  chosenCategory: 'category__13831',
};

export const categoriesReducer = (state = initStore, action) => {
  if (action.type === actions.ADD) {
    return {
      ...state,
      categories: [...state.categories, action.payload],
    };
  }
  if (action.type === actions.CHOSE) {
    return {
      ...state,
      chosenCategory: action.payload,
    };
  }
  if (action.type === actions.LOADED) {
    return {
      ...state,
      categories: action.payload,
    };
  }
  if (action.type === actions.DELETEALL) {
    return {
      ...state,
      categories: [
        ...state.categories.filter((elem) => elem.category !== action.payload),
      ],
    };
  }
  return state;
};

const actions = {
  ADD: 'ADD/CATEGORY',
  CHOSE: 'CHOSE/CATEGORY',
  LOADED: 'LOADED/CATEGORIES',
  DELETEALL: 'DELETEALL',
};

export const addCategory = (category) => {
  return {
    type: actions.ADD,
    payload: category,
  };
};

export const deleteCategory = (id) => {
  return {
    type: actions.DELETE,
    payload: id,
  };
};

export const choseCategory = (id) => {
  return {
    type: actions.CHOSE,
    payload: id,
  };
};

export const loadCategories = (categories) => {
  return {
    type: actions.LOADED,
    payload: categories,
  };
};

export const deleteAll = (category) => {
  return {
    type: actions.DELETEALL,
    payload: category,
  };
};
