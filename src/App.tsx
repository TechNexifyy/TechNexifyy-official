import { Routes, Route } from "react-router-dom";
import ViewHome from "./page/content-home/home";

const App = () => {
  return(
    <Routes>
      <Route path="/" element={<ViewHome />} />
    </Routes>
  );
};

 export default App;
