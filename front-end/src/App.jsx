import { BrowserRouter } from "react-router-dom";
import AppRouter from "./component/routes/Routes";
function App() {
  return (
    <BrowserRouter>
      <AppRouter />
    </BrowserRouter>
  );
}

export default App;
