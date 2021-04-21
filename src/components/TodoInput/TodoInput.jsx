import s from './TodoInput.module.css';

import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTodo } from '../../redux/todos/todosAction';

export const TodoInput = ({ category, colors }) => {
  const dispatch = useDispatch();
  const [content, setContent] = useState('');

  const onInput = (e) => {
    setContent(e.target.value);
  };

  const onClickAdd = () => {
    dispatch(
      addTodo({
        id: `todo__${Math.round(Math.random() * 100000)}`,
        content: content,
        status: false,
        category: category,
        colors: colors,
      })
    );
    setContent('');
  };

  return (
    <div className={s.todoInput}>
      <button className={s.add} onClick={onClickAdd} />
      <input
        type="text"
        className={s.input}
        placeholder="What do you want to do?"
        onChange={onInput}
        value={content}
      />
    </div>
  );
};
