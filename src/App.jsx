import "./App.css";
import { Toast } from "./Components/toast";
import AuthProviter from "./contexts/authContext";
import RouteMain from "./Routers";
import { Global } from "./Style/global";

function App() {
  return (
    <>
      <AuthProviter>
        <Global />
        <RouteMain />
        <Toast />
      </AuthProviter>
    </>
  );
}

export default App;
