import s from './EditorCategory.module.css';

import React from 'react';
import { Todo } from '../Todo/Todo';
import { TodoInput } from '../TodoInput/TodoInput';
import { Link } from 'react-router-dom';
import { deleteAll } from '../../redux/categories/categories';
import { useDispatch } from 'react-redux';

export const EditorCategory = ({ todos, chosenCategory }) => {
  const dispatch = useDispatch();

  const onClickDelete = () => {
    dispatch(deleteAll(chosenCategory[0].category));
  };
  return (
    <div className={`${s.editor} ${chosenCategory[0].colors}`}>
      <div className={s.wrapper}>
        <div className={s.inner}>
          <h1 className={s.title}>{chosenCategory[0].category}</h1>
          <p className={s.subtitle}>
            {
              todos.filter(
                (elem) => elem.category === chosenCategory[0].category
              ).length
            }{' '}
            task
          </p>
        </div>
        <div className={s.buttons}>
          <Link to="/">
            <button className={s.prevList} />
          </Link>
          <Link to="/">
            <button className={s.delete} onClick={onClickDelete} />
          </Link>
        </div>
      </div>
      <TodoInput
        category={chosenCategory[0].category}
        colors={chosenCategory[0].colors}
      />
      {todos
        .filter((elem) => elem.category === chosenCategory[0].category)
        .map((elem) => {
          return (
            <Todo
              key={elem.id}
              id={elem.id}
              content={elem.content}
              status={elem.status}
              editor={1}
            />
          );
        })}
    </div>
  );
};
