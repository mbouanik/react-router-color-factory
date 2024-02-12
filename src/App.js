import { BrowserRouter } from "react-router-dom";
import "./App.css";
import RouterList from "./RouterList";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <RouterList />
      </BrowserRouter>
    </div>
  );
}

export default App;
