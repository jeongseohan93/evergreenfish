import React from "react";
import CategoryCard from "../components/CategoryCard";
import { categories } from "../components/data/categoryData"; 
import style from "../styles/CategoryGrid.module.css";

function CategoryGrid() {
  return (
    <div className={style.grid}>
      {categories.map((cat) => (
        <CategoryCard
          key={cat.label}
          icon={cat.icon}
          label={cat.label}
          color={cat.color}
        />
      ))}
    </div>
  );
}

export default CategoryGrid;
