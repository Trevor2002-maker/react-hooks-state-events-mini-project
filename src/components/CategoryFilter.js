import React from "react";

function CategoryFilter(props) {
  const {CATEGORIES, selectedCategory, onSelectCategory} = props;

  const handleSelectCategory = (CATEGORIES)=>{
    onSelectCategory(CATEGORIES);
  };

  return (
    <div className="categories">
      <h5>Category filters</h5>
      <button className={selectedCategory == "All" ? "selected" : ""}
      onClick={()=>handleSelectCategory("All")}
    ></button>
    {CATEGORIES.map((CATEGORIES)=>(
      <button key={CATEGORIES} className={selectedCategory === CATEGORIES ? "selected": ""}
      onClick={()=>handleSelectCategory(CATEGORIES)}
    >{CATEGORIES}</button>
    ))}
    </div>
  );
}

export default CategoryFilter;
