import { Routes, Route } from "react-router-dom";
import MapPage from "../Pages/MapPage";
import TicketBookFunction from "../Pages/TicketPage";
// import other pages if needed
import ButtonBar from "../Components/ButtomBar";

function ReactRouter() {
  return (
    <>
      <Routes>
        <Route path="/" element={<MapPage />} />
        <Route path="/ticket" element={<TicketBookFunction />} />
        {/* other routes */}
      </Routes>
    </>
  );
}

export default ReactRouter;
