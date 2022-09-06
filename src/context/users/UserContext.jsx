import React, { useState } from 'react';

const defaultUserState = {
  favoriteCount: 0,
  userInfos: null,
};

export const UserContext = React.createContext(defaultUserState);

const UserProvider = (props) => {
  const { children } = props;

  const [userInfos, setUserInfos] = useState(defaultUserState);

  return (
    <UserContext.Provider value={[userInfos, setUserInfos]}>
      {children}
    </UserContext.Provider>
  );
};

export default UserProvider;
