import { Route, BrowserRouter as Router} from "react-router-dom";
import { Main } from "./pages/Main/Main";
import { Header } from "./components/Header/Header";
import { Footer } from "./components/Footer/Footer";
import { Auth } from './pages/Auth/Auth';

function App() {  
  return (
    <div>
      <Header />
      <Router>
        <Route path="/" component={Main} exact />
        <Route path="/auth" component={Auth} exact />
      </Router>
      <Footer />
    </div>
  );
} 

export default App;
