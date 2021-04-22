import s from './Todos.module.css';
import { Todo } from '../Todo/Todo';

import React from 'react';
import { useSelector } from 'react-redux';
import { categoriesSelector } from '../../redux/categories/categoriesSelector';
import { sortSelector, todosSelector } from '../../redux/todos/todosSelector';

export const Todos = () => {
  const { categories } = useSelector(categoriesSelector);
  const { todos } = useSelector(todosSelector);
  const { sort } = useSelector(sortSelector);

  return (
    <div>
      <h1 className={s.title}>
        {sort === 'All'
          ? sort
          : categories
              .filter((elem) => elem.id === sort)
              .map((category) => category.category)}
      </h1>
      {(sort === 'All'
        ? todos
        : todos.filter((elem) => elem.category === sort)
      ).map((elem) => {
        return (
          <Todo
            key={elem.id}
            id={elem.id}
            content={elem.content}
            status={elem.status}
            colors={elem.colors}
            editor={0}
            category={elem.category}
          />
        );
      })}
    </div>
  );
};
