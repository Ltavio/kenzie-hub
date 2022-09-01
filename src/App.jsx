import "./App.css";
import { Toast } from "./Components/toast";
import AuthProvidersMain from "./providers/index.tsx";
import RouteMain from "./Routers/index.tsx";
import { Global } from "./Style/global.ts";

function App() {
  return (
    <>
      <AuthProvidersMain>
        <Global />
        <RouteMain />
        <Toast />
      </AuthProvidersMain>
    </>
  );
}

export default App;
