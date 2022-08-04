import React, {
  useState,
  createContext,
} from 'react';
import { API_HOST } from '../Constants';
import Axios from 'axios';

export const UserContext = createContext();

function UserProvider(props) {

  // User
  const [phoneNumber, setPhoneNumber] = useState(null);

  const value = {
    // Data

  };
  return (
    <UserContext.Provider value={value}>{props.children}</UserContext.Provider>
  );
};

export default UserProvider;