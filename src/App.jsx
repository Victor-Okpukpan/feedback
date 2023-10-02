import AppRoutes from "./routes/Routes";
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <div className="">
      <BrowserRouter>
        <AppRoutes />
      </BrowserRouter>
    </div>
  );
}

export default App;
