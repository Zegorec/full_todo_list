import './App.css';
import { TodoList } from './components/TodoList/TodoList';
import { EditorCategory } from './components/EditorCategory/EditorCategory';
import { Route } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import {
  categoriesSelector,
  chosenCategorySelector,
  isLoadingCategoriesSelector,
} from './redux/categories/categoriesSelector';
import { isLoadingTodosSelector } from './redux/todos/todosSelector';
import { todosRequest } from './redux/todos/todosAction';
import { categoriesRequest } from './redux/categories/categoriesAction';
import { useEffect } from 'react';

function App() {
  const dispatch = useDispatch();
  const { categories } = useSelector(categoriesSelector);
  const { isLoadingCategories } = useSelector(isLoadingCategoriesSelector);
  const { isLoadingTodos } = useSelector(isLoadingTodosSelector);
  const { chosenCategory } = useSelector(chosenCategorySelector);

  useEffect(() => {
    dispatch(todosRequest());
    dispatch(categoriesRequest());
  }, [dispatch]);

  return isLoadingTodos && isLoadingCategories ? (
    <div className="App">
      <h1>ABOBA</h1>
    </div>
  ) : (
    <div className="App">
      <Route path="/" exact>
        <TodoList />
      </Route>
      <Route path="/Editor" exact>
        <EditorCategory
          chosenCategory={categories.filter(
            (elem) => elem.id === chosenCategory
          )}
        />
      </Route>
    </div>
  );
}

export default App;
