import React from "react";
import "./App.css";
import NavigationBar from "./Components/NavigationBar";
import Footer from "./Components/HomePage/Footer";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Pricing from "./Components/Pricing/Price";
import About from "./Components/About/About";
import Features from "./Components/Features/Features";
import Contact from "./Components/ContactUs/ContactUs";
import HomePage from "./Components/HomePage/HomePage";
import "@devexpress/dx-react-chart-bootstrap4/dist/dx-react-chart-bootstrap4.css";

function App() {
  return (
    <Router>
      <NavigationBar />
      <Switch>
        <div style={{ marginTop: "5%" }}>
          <Route path="/" exact component={HomePage} />
          <Route path="/features" exact component={Features} />
          <Route path="/pricing" exact component={Pricing} />
          <Route path="/contactus" exact component={Contact} />
          <Route path="/about" exact component={About} />
        </div>
      </Switch>
      <Footer />
    </Router>

    // <Router>
    //   <Container>
    //     <Row>
    //       <NavigationBar />
    //     </Row>
    //     <Row style={{ marginTop: marginTop }}>
    //       <Col style={marginTop}>
    //         <Switch>
    //           <Route path="/" exact component={HomePage} />
    //           <Route path="/features" exact component={Features} />
    //           <Route path="/pricing" exact component={Pricing} />
    //           <Route path="/contactus" exact component={Contact} />
    //           <Route path="/about" exact component={About} />
    //         </Switch>
    //       </Col>
    //     </Row>

    //     <Footer fixed="bottom" />
    //   </Container>
    // </Router>
  );
}

export default App;
