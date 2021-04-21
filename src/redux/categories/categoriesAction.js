export const actions = {
  ADD: 'ADD/CATEGORY',
  CHOSE: 'CHOSE/CATEGORY',
  LOADED: 'LOADED/CATEGORIES',
  DELETEALL: 'DELETEALL',
  CATEGORIES_REQUEST: 'CATEGORIES_REQUEST',
  CATEGORIES_SUCCESS: 'CATEGORIES_SUCCESS',
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

export const deleteAll = (category) => {
  return {
    type: actions.DELETEALL,
    payload: category,
  };
};

export const categoriesRequest = () => {
  return {
    type: actions.CATEGORIES_REQUEST,
  };
};

export const categoriesSuccess = (categories) => {
  return {
    type: actions.CATEGORIES_SUCCESS,
    payload: categories,
  };
};
