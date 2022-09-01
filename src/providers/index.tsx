import React from "react";
import AuthProviderDashboard from "./authContextDashboard";
import AuthProviderLogin from "./authContextLogin";
import AuthProviderRegister from "./authContextRegister";

const AuthProvidersMain = ({ children }: any) => {
  return (
    <AuthProviderLogin>
      <AuthProviderRegister>
        <AuthProviderDashboard>{children}</AuthProviderDashboard>
      </AuthProviderRegister>
    </AuthProviderLogin>
  );
};

export default AuthProvidersMain;
