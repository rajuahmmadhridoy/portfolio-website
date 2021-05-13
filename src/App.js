
import './App.css';
import React, { useEffect, useState } from "react";
import Home from './Component/Home/Home/Home';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import About from './Component/Home/About/About/About';
import Navbar from './Component/Home/Navbar/Navbar';
import ClimbingBoxLoader
  from "react-spinners/ClimbingBoxLoader";
// import ShortInfo from './Component/Home/About/ShortInfo/ShortInfo';
function App() {
  const [loading, setLoading] = useState(false);
  let [color, setColor] = useState("#2E150B");
  useEffect(() => {
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
    }, 2000)
  }, [])
  return (
    <div>
      {
        loading ? (
          <div className="loder">
            <ClimbingBoxLoader
              className="loder" color={color} loading={loading} size={30} />
          </div>
          // <p className="loder">Loading</p>
        ) : (
          <Router>
            <Navbar />
            <Switch>
              <Route exact path="/">
                <Home />
              </Route>
              <Route path="/about">
                <About />
              </Route>

              {/* <Route path="/shortinfo">
         <ShortInfo />
       </Route> */}
            </Switch>
          </Router>
        )}
    </div>
  );
}

export default App;
