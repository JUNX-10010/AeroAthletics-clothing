import Directory from "../../components/directory/directory.component";
import Categories from "../../api/categories"
import { Outlet } from "react-router";

const Home = () => {
  return (
    <>
      <Directory categories={Categories}/>
      <Outlet/>
    </>
  );
};
export default Home;