import './App.css';
import { TodoList } from './components/TodoList/TodoList';
import { EditorCategory } from './components/EditorCategory/EditorCategory';
import { Route } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { categoriesSelector } from './redux/categories/categoriesSelector';
import { todosSelector } from './redux/todos/todosSelector';
import { todosRequest } from './redux/todos/todosAction';
import { categoriesRequest } from './redux/categories/categoriesAction';
import { useEffect } from 'react';

function App() {
  const dispatch = useDispatch();
  const { categories, chosenCategory, isLoadingCategories } = useSelector(
    categoriesSelector
  );
  const { todos, isLoadingTodos, sort } = useSelector(todosSelector);

  const fetchTodos = () => {
    dispatch(todosRequest());
    dispatch(categoriesRequest());
  };

  return isLoadingTodos && isLoadingCategories ? (
    <div className="App">
      <h1>ABOBA</h1>
    </div>
  ) : (
    <div className="App">
      <button onClick={fetchTodos}>Получить данные</button>
      <Route path="/" exact>
        <TodoList
          todos={
            sort === 'All'
              ? todos
              : todos.filter((elem) => elem.category === sort)
          }
          categories={categories}
          sort={sort}
        />
      </Route>
      <Route path="/Editor" exact>
        <EditorCategory
          todos={todos}
          chosenCategory={categories.filter(
            (elem) => elem.id === chosenCategory
          )}
        />
      </Route>
    </div>
  );
}

export default App;
