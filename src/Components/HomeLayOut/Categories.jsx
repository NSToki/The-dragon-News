import React, { use } from "react";
import { Link, NavLink } from "react-router";

const categoryPromise = fetch("/categories.json").then((res) => res.json());

const Categories = () => {
  const categories = use(categoryPromise);

  return (
    <div>
      <h2 className="font-bold font-[Poppins]">
        All Categories ({categories.length})
      </h2>

      <div className="grid grid-cols-1 mt-5 gap-3">
        {categories.map((category) => (
          <NavLink
            key={category.id}
            to={`/category/${category.id}`}
            className={"btn bg-none border-0 hover:bg-[#e3e3e3] font-semibold text-accent"}
          >
            {category.name}
          </NavLink>
        ))}
      </div>
    </div>
  );
};

export default Categories;
