import s from './Todo.module.css';

import React from 'react';
import { useDispatch } from 'react-redux';
import { doneTodo } from '../../redux/todos/todosAction';
import { deleteTodo } from '../../redux/todos/todosAction';

export const Todo = ({ id, content, status, colors, editor }) => {
  const dispatch = useDispatch();

  const onClickDone = () => {
    dispatch(doneTodo(id));
  };

  const onClickDelete = () => {
    dispatch(deleteTodo(id));
  };

  return (
    <div className={s.todo}>
      <div className={s.myCheckbox}>
        <input
          type="checkbox"
          id={id}
          className={s.checkbox}
          checked={status}
          onChange={onClickDone}
        />
        <label htmlFor={id} className={s.toggle} />
      </div>
      <p className={`${s.text} ${editor ? 'white' : 'black'}`}>{content}</p>
      {editor ? (
        <div className={s.inner}>
          <button className={s.edit} />
          <button className={s.delete} onClick={onClickDelete} />
        </div>
      ) : (
        <div className={`${s.color} ${colors}`} />
      )}
    </div>
  );
};
