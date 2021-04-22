import s from './TodoList.module.css';

import React from 'react';
import { Todos } from '../Todos/Todos';
import { Categories } from '../Categories/Categories';

export const TodoList = () => {
  return (
    <div className={s.container}>
      <Todos />
      <Categories />
    </div>
  );
};
