import "./App.css";
import { Toast } from "./Components/toast";
import RouteMain from "./Routers";
import { Global } from "./Style/global";

function App() {
  return (
    <>
      <Global />
      <RouteMain />
      <Toast />
    </>
  );
}

export default App;
