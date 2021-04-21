import { actions } from './categoriesAction';

const initStore = {
  categories: [],
  chosenCategory: '',
  isLoadingCategories: false,
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
  if (action.type === actions.DELETEALL) {
    return {
      ...state,
      categories: [
        ...state.categories.filter((elem) => elem.category !== action.payload),
      ],
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
