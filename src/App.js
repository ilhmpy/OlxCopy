import { useRoutes } from "react-router-dom";
import { Main } from "./pages/Main/Main";
import { Auth } from './pages/Auth/Auth';
import { Favorites } from "./pages/Favorites/Favorites";
import { PageTitle } from "./components/PageTitle/PageTitle";
import { Routes } from "./consts/routes";

function App() {    
  const routing = useRoutes([
    { path: Routes.Main, element: (
      <PageTitle title={"Главная"}>
        <Main />
      </PageTitle> 
    ) },
    { path: Routes.Auth, element: (
      <PageTitle title={"Авторизация"}>
        <Auth /> 
      </PageTitle>
    )},
    { path: Routes.Fav, element: (
      <PageTitle title="Избранные объявления">
        <Favorites /> 
      </PageTitle>
    )},
  ]);
  return routing;
} 

export default App;
 