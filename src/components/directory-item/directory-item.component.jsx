import { Link } from "react-router-dom";
import "./directory-item.styles.scss";

const CategoryItem = ({ category }) => {
  const { imageUrl, title, id } = category;
  return (
    <div className="directory-item-container" key={id}>
      <div
        className="background-image"
        style={{
          backgroundImage: `url(${imageUrl})`,
        }}
      />
      <div className="directory-item-body">
        <h2>{title}</h2>
        <Link to={"/shop"}>
          <p>Shop Now</p>
        </Link>
      </div>
    </div>
  );
};

export default CategoryItem;
