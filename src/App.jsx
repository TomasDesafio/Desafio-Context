
import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import { MyContextProvider } from "./context/PhotosContext";

import Favorites from "./views/Favorites";
import Home from "./views/Home";



const App = () => {
  return (
    <div>
      <MyContextProvider>
      <Navbar />

      <Routes>
        <Route
          path="/"
          element={<Home />}
        />
        <Route
          path="/favoritos"
          element={<Favorites />}
        />
      </Routes>
      </MyContextProvider>
    </div>
  );
};
export default App;