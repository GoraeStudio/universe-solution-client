import { BrowserRouter as Router } from "react-router";
import RouteSetting from "./routes/RouteSetting";
function App() {
  

  return (
    <div style={{ width: "100vw", minHeight: "100vh" }}>
      <Router>
        <RouteSetting />
      </Router>
    </div>
  );
}

export default App
