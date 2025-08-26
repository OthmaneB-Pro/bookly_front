import { BrowserRouter, Route, Routes } from "react-router-dom";
import LoginPage from "./components/pages/login/LoginPage";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={"/"} element={<LoginPage />} />
      </Routes>
    </BrowserRouter>
  );
}
