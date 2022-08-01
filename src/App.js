import Directory from "./components/directory/directory.component";

import Categories from "./Data/categories.json";

const App = () => {
  return <Directory Categories={Categories} />;
};

export default App;
