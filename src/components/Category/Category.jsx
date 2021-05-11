import s from './Category.module.css';

import React from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { choseCategory } from '../../redux/categories/categoriesAction';
import { choseTodos } from '../../redux/todos/todosAction';
import { todosSelector } from '../../redux/todos/todosSelector';

export const Category = ({ category, colors, id }) => {
  const { todos } = useSelector(todosSelector);

  const dispatch = useDispatch();

  const onClickCategory = () => {
    dispatch(choseTodos(id));
  };

  const onClickMore = (e) => {
    dispatch(choseCategory(e.target.dataset.id));
  };

  return (
    <div className={`${s.category} ${colors}`}>
      <div className={s.text} onClick={onClickCategory}>
        <h1 className={s.title}>{category}</h1>
        <p className={s.subtitle}>
          {todos.filter((elem) => elem.category === id).length} task
        </p>
      </div>
      <Link to="/Editor">
        <button className={s.more} data-id={id} onClick={onClickMore} />
      </Link>
    </div>
  );
};
