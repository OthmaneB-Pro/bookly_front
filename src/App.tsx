import { BrowserRouter, Route, Routes } from "react-router-dom";
import LoginPage from "./components/pages/login/LoginPage";
import ResourcePage from "./components/pages/resource/ResourcePage";
import ErrorPage from "./components/pages/error/ErrorPage";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={"/"} element={<LoginPage />} />
        <Route path={"*"} element={<ErrorPage />} />
        <Route path={"/home"} element={<ResourcePage />} />
      </Routes>
    </BrowserRouter>
  );
}
