import React from "react";
import { Link } from "react-router-dom";
const Sorting = props => {
  return (
    <div className="item-listing__tools">
      <select className="form-control" name="" id="">
        {props.sortBy.map(sortType => (
          <option
            key={sortType.id}
            value={sortType.id}
            onClick={() => props.onSortChange(sortType)}
          >
            {sortType.name}
          </option>
        ))}
      </select>
      <Link className="action-btn" to="/products/addproduct">
        <i className="fas fa-plus"></i>
      </Link>
    </div>
  );
};

export default Sorting;
