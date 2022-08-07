import { Link } from "react-router-dom";
import "./category-item.styles.scss";

const CategoryItem = ({ category }) => {
  const { imageUrl, title, id } = category;
  return (
    <div className="category-container" key={id}>
      <div
        className="background-image"
        style={{
          backgroundImage: `url(${imageUrl})`,
        }}
      />
      <div className="category-body-container">
        <h2>{title}</h2>
        <Link to={"/shop"}>
          <p>Shop Now</p>
        </Link>
      </div>
    </div>
  );
};

export default CategoryItem;
