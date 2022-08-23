import { Link } from "react-router-dom";
import {BackgroundImage,Body,DirectoryItemContainer} from './directory-item.styles'

const CategoryItem = ({ category }) => {
  const { imageUrl, title, id } = category;
  return (
    <DirectoryItemContainer key={id}>
      <BackgroundImage
        imageUrl={imageUrl}
      />
      <Body>
        <h2>{title}</h2>
        <Link to={"/shop"}>
          <p>Shop Now</p>
        </Link>
      </Body>
    </DirectoryItemContainer>
  );
};

export default CategoryItem;
