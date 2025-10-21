import React from "react";

interface UserContextType {
  username: string;
  setUsername: (name: string) => void;
}

const UserContext = React.createContext<UserContextType>({
  username: "",
  setUsername: () => {},
});
console.log("This is UserContext", UserContext);
export default UserContext;
