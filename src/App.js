import './App.css';
import { TodoList } from './components/TodoList/TodoList';
import { EditorCategory } from './components/EditorCategory/EditorCategory';
import { Route } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { dataSelector } from './redux/categories/categoriesSelector';
import { todosRequest } from './redux/todos/todosAction';
import { categoriesRequest } from './redux/categories/categoriesAction';

function App() {
  const dispatch = useDispatch();
  const {
    todos,
    isLoadingTodos,
    sort,
    categories,
    chosenCategory,
    isLoadingCategories,
  } = useSelector(dataSelector);

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
