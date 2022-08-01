import { Routes, Route } from "react-router-dom";

import Home from "./routes/home/home.component";
import Navigation from "./routes/navigation/navigation.component";
import SignIn from "./routes/sign-in/sign-in.component";

const Shop = () => {
  return <h1>Iam the shop page</h1>;
};

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route element={<Home />} index={true} />
        <Route element={<Shop />} path="/shop" />
        <Route element={<SignIn />} path="/signIn" />
      </Route>
    </Routes>
  );
};

export default App;
