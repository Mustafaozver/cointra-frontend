import React, { useState } from 'react';

const defaultLoginState = {
  isPopupOpen: false,
  reasonText: null,
};

export const LoginContext = React.createContext(defaultLoginState);

const LoginProvider = (props) => {
  const { children } = props;

  const [loginInfos, setLoginInfos] = useState(defaultLoginState);

  return (
    <LoginContext.Provider value={[loginInfos, setLoginInfos]}>
      {children}
    </LoginContext.Provider>
  );
};

export default LoginProvider;
