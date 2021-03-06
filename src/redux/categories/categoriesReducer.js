import { actions } from './categoriesAction';

const initStore = {
  categories: [],
  chosenCategory: '',
  isLoadingCategories: false,
};

export const categoriesReducer = (state = initStore, action) => {
  if (action.type === actions.CHOSE) {
    return {
      ...state,
      chosenCategory: action.payload,
    };
  }
  if (action.type === actions.CATEGORIES_REQUEST) {
    return {
      ...state,
      isLoadingCategories: true,
    };
  }
  if (action.type === actions.CATEGORIES_SUCCESS) {
    return {
      ...state,
      categories: action.payload,
      isLoadingCategories: false,
    };
  }
  return state;
};
