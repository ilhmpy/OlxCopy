import { Main } from "./pages/Main/Main";
import { Header } from "./components/Header/Header";
import { Footer } from "./components/Footer/Footer";
import { Route, BrowserRouter as Router} from "react-router-dom";

function App() {  
  return (
    <div>
      <Header />
      <Router>
        <Route path="/" component={Main} exact />
      </Router>
      <Footer />
    </div>
  );
} 

export default App;
