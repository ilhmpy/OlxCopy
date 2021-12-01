import { Route, Routes, useRoutes } from "react-router-dom";
import { Main } from "./pages/Main/Main";
import { Header } from "./components/Header/Header";
import { Footer } from "./components/Footer/Footer";
import { Auth } from './pages/Auth/Auth';

function App() {   
  const routing = useRoutes([
    { path: "/", element: <Main /> },
    { path: "/auth", element: <Auth /> }
  ]);
  return routing;
} 

export default App;
