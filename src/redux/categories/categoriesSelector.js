export const categoriesSelector = ({ categories }) => {
  return {
    categories: categories.categories,
  };
};

export const chosenCategorySelector = ({ categories }) => {
  return { chosenCategory: categories.chosenCategory };
};

export const isLoadingCategoriesSelector = ({ categories }) => {
  return { isLoadingCategories: categories.isLoadingCategories };
};
