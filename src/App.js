import './App.css';
import { TodoList } from './components/TodoList/TodoList';
import { EditorCategory } from './components/EditorCategory/EditorCategory';
import { Route } from 'react-router-dom';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { dataSelector } from './redux/categories/categories';
import { loadCategories } from './redux/categories/categories';
import { loadTodos } from './redux/todos/todos';

function App() {
  const dispatch = useDispatch();
  const { todos, sort, categories, chosenCategory } = useSelector(dataSelector);

  useEffect(() => {
    dispatch(loadTodos(JSON.parse(localStorage.getItem('todos'))));
    dispatch(loadCategories(JSON.parse(localStorage.getItem('categories'))));
  }, [dispatch]);

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  useEffect(() => {
    localStorage.setItem('categories', JSON.stringify(categories));
  }, [categories]);

  return (
    <div className="App">
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
