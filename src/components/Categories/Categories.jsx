import s from './Categories.module.css';

import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Category } from '../Category/Category';
import { addCategory } from '../../redux/categories/categoriesAction';
import { choseTodos } from '../../redux/todos/todosAction';
import { categoriesSelector } from '../../redux/categories/categoriesSelector';

export const Categories = () => {
  const { categories } = useSelector(categoriesSelector);

  const dispatch = useDispatch();
  const [categoryName, setCategoryName] = useState('');
  const [colors, setColors] = useState('Black');

  const onInput = (e) => {
    setCategoryName(e.target.value);
  };

  const onClickAdd = () => {
    dispatch(
      addCategory({
        id: `category__${Math.round(Math.random() * 100000)}`,
        category: categoryName,
        colors: colors,
      })
    );
    setCategoryName('');
  };

  const onChoseCategory = (e) => {
    dispatch(choseTodos(e.target.dataset.category));
  };

  const choseColors = (e) => {
    setColors(e.target.dataset.colors);
  };

  return (
    <div className={s.categories}>
      <button className={s.all} data-category="All" onClick={onChoseCategory}>
        Show All
      </button>
      <div className={s.editor}>
        <input
          className={s.input}
          type="text"
          placeholder="New category"
          onChange={onInput}
          value={categoryName}
        />
        <button
          data-colors="Blue"
          className={`${s.button} Blue`}
          onClick={choseColors}
        />
        <button
          data-colors="Purple"
          className={`${s.button} Purple`}
          onClick={choseColors}
        />
        <button
          data-colors="Yellow"
          className={`${s.button} Yellow`}
          onClick={choseColors}
        />
        <button
          data-colors="Red"
          className={`${s.button} Red`}
          onClick={choseColors}
        />
        <button
          data-colors="Green"
          className={`${s.button} Green`}
          onClick={choseColors}
        />
        <button className={s.add} onClick={onClickAdd} />
      </div>
      {categories.map((elem) => {
        return (
          <Category
            key={elem.id}
            category={elem.category}
            colors={elem.colors}
            id={elem.id}
          />
        );
      })}
    </div>
  );
};
