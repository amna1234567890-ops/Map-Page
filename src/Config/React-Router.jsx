import { BrowserRouter, Routes, Route } from "react-router-dom";
import MapPage from '../Pages/MapPage';

function ReactRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MapPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default ReactRouter;
