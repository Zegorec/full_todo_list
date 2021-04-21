import s from './Category.module.css';

import React from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { choseCategory } from '../../redux/categories/categoriesAction';
import { choseTodos } from '../../redux/todos/todosAction';

export const Category = ({ category, colors, total, id }) => {
  const dispatch = useDispatch();

  const onClickCategory = () => {
    dispatch(choseTodos(category));
  };

  const onClickMore = (e) => {
    dispatch(choseCategory(e.target.dataset.id));
  };

  return (
    <div className={`${s.category} ${colors}`}>
      <div className={s.text} onClick={onClickCategory}>
        <h1 className={s.title}>{category}</h1>
        <p className={s.subtitle}>{total} task</p>
      </div>
      <Link to="/Editor">
        <button className={s.more} data-id={id} onClick={onClickMore} />
      </Link>
    </div>
  );
};
