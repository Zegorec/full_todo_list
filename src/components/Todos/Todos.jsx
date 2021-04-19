import s from './Todos.module.css';
import { Todo } from '../Todo/Todo';

import React from 'react';

export const Todos = ({ todos, sort }) => {
  return (
    <div>
      <h1 className={s.title}>{sort}</h1>
      {todos.map((elem) => {
        return (
          <Todo
            key={elem.id}
            id={elem.id}
            content={elem.content}
            status={elem.status}
            colors={elem.colors}
            editor={0}
          />
        );
      })}
    </div>
  );
};
