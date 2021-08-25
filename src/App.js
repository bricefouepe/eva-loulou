import './App.css';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import GlobalStyle from "./globalStyles";
import {Navbar} from "./components";
import Home from "./pages/HomePage/Home";
import Footer from "./components/Footer/Footer";

function App() {
  return (
      <Router>
          <GlobalStyle />
          <Navbar />
          <Switch>
              <Route path='/' exact component={Home} />
              <Route path='/our-care'/>
              <Route path='/our-shops' />
              <Route path='/products' />
              <Route path='/contact' />
          </Switch>
          <Footer />
      </Router>
  );
}

export default App;
