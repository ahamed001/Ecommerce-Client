// import logo from './logo.svg';
import { Route, Routes } from "react-router-dom";
import "./App.css";
import ClientRoutes from "./Routes/ClientRoutes";
import AdminRoutes from "./Routes/AdminRoutes";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/*" element={<ClientRoutes />}></Route>
        <Route path="/admin/*" element={<AdminRoutes />}></Route>
      </Routes>
    </div>
  );
}

export default App;
