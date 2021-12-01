
import Navbar from "./Components/Navbar/Navbar"
import {Home} from "./Components/Home/Dashboard";
import {Switch, Route} from "react-router-dom";
import {Orders} from "./Components/Orders/Orders";

function App() {
  return (
    <div className="App">
     
      <Navbar />
      <Switch>
        <Route exact path = "/">
          <div style = {{marginTop: "20px"}}>
            <Home />
          </div>
      </Route>
      <Route path = "/orders">
        <div style = {{marginTop: "20px"}}>
          <Orders />
        </div>
      </Route>
      </Switch>
    </div>
  );
}

export default App;
