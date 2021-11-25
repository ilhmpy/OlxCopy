import { Main } from "./pages/Main/Main";
import { Header } from "./components/Header/Header";
import { Route, BrowserRouter as Router} from "react-router-dom";

function App() {  
  return (
    <div>
      <Header />
      <Router>
        <Route path="/" component={Main} exact />
      </Router>
    </div>
  );
} 

export default App;
