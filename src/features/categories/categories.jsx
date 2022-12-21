import React from 'react';
import Category from './category';
import '../../App.css';
import { useSelector, useDispatch } from 'react-redux';
import { selectAllCategories } from './categoriesSlice';
import { updateCategory } from './categoriesSlice'

const Categories = () => {
  const allCategories = useSelector(selectAllCategories);
  const dispatch = useDispatch();

  const handleCategoryChange = (e) => {
    const categoryName = e.target.value;
    console.log('categoryName :>> ', categoryName);
    dispatch(updateCategory(categoryName))
  };

  return (
    <div className="categories-container comp">
    <p>Categories: </p>
    {allCategories.map((category, index) => (
      <Category
      key={index}
      value={category}
      handleClick={handleCategoryChange}
      >
      {category}
      </Category>
      ))}
      <br />
      <p>Choose a category that you want to explore and dig in.</p>
    </div>
  );
};

export default Categories;
