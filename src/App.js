import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Header } from "./Components/Header";
import { SignUp } from "./Components/SignUp";
import { Container } from "react-bootstrap";
import { HomeScreen } from "./Screens/HomeScreen";
import { Login } from "./Components/Login";
import { Footer } from "./Components/Footer";
function App() {
  return (
    <Router>
      <header>
        <Header />
      </header>
      <main>
        <Container>
          <Route path="/" component={SignUp} exact />
          <Route path="/invoice" component={HomeScreen} exact />

          <Route path="/signup" component={SignUp} exact />
          <Route path="/login" component={Login} exact />
        </Container>
      </main>

      <Footer />
    </Router>
  );
}

export default App;
