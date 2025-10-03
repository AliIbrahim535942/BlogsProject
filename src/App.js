import { BrowserRouter, Switch, Route } from "react-router-dom";
import Navbar from "./components/navbar";
import Home from "./pages/Home";
import BlogDetails from "./pages/BlogDetails";
import Create from "./pages/Create";
import NotFound from "./pages/NotFound";
function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <div className="content">
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route exact path="/create">
              <Create />
            </Route>
            <Route exact path="/blogs/:id">
              <BlogDetails />
            </Route>
            <Route path="*">
              <NotFound />
            </Route>
          </Switch>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;

