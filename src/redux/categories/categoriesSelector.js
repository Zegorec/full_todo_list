export const categoriesSelector = ({ categories }) => {
  return {
    categories: categories.categories,
    chosenCategory: categories.chosenCategory,
    isLoadingCategories: categories.isLoadingCategories,
  };
};
