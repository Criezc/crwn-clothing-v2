import CategoryItem from "../directory-item/directory-item.component";
import "./directory.styles.scss";

const Directory = ({ Categories }) => {
  return (
    <div className="directory-container">
      {Categories.map((category) => {
        return <CategoryItem key={category.id} category={category} />;
      })}
    </div>
  );
};

export default Directory;
