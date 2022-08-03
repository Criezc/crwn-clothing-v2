import { Routes, Route } from "react-router-dom";

import Home from "./routes/home/home.component";
import Navigation from "./routes/navigation/navigation.component";
import Authentication from "./routes/authentication/authentication.component";

const Shop = () => {
  return <h1>Iam the shop page</h1>;
};

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route element={<Home />} index={true} />
        <Route element={<Shop />} path="/shop" />
        <Route element={<Authentication />} path="/auth" />
      </Route>
    </Routes>
  );
};

export default App;
