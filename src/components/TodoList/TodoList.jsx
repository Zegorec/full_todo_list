import s from './TodoList.module.css';

import React from 'react';
import { Todos } from '../Todos/Todos';
import { Categories } from '../Categories/Categories';

export const TodoList = ({ todos, categories, sort }) => {
  return (
    <div className={s.container}>
      <Todos todos={todos} sort={sort} />
      <Categories categories={categories} todos={todos} />
    </div>
  );
};
