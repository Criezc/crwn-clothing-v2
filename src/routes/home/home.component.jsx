import { Outlet } from "react-router-dom";
import Directory from "../../components/directory/directory.component";
import Categories from "../../Data/categories.json";

const Home = () => {
  return (
    <>
      <Directory Categories={Categories} />
      <Outlet />
    </>
  );
};

export default Home;
