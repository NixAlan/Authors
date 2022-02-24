import "./App.css";
import { Router } from "@reach/router";
import CreateAuthor from "./views/CreateAuthor";
import AllAuthors from "./components/AllAuthors";
import EditAuthor from "./views/EditAuthor";
function App() {
  return (
    <div className="App">
      <Router>
        <AllAuthors path="/home" default />
        <CreateAuthor path="authors/create" />
        <EditAuthor path="authors/edit/:id" />
      </Router>
    </div>
  );
}

export default App;
