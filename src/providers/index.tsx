import React from "react";
import AuthProviderDashboard from "./authContextDashboard.tsx";
import AuthProviderLogin from "./authContextLogin.tsx";
import AuthProviderRegister from "./authContextRegister.tsx";

const AuthProvidersMain = ({ children }) => {
  return (
    <AuthProviderLogin>
      <AuthProviderRegister>
        <AuthProviderDashboard>{children}</AuthProviderDashboard>
      </AuthProviderRegister>
    </AuthProviderLogin>
  );
};

export default AuthProvidersMain;
