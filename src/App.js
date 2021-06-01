import React, { useState } from "react";
import User from "../src/components/User/AddUser";
import UsersList from "../src/components/User/UsersList";

function App() {
  const [enteredUserList, setEnteredUserList] = useState([]);
  const addUserHandler = (uName, uAge) => {
    setEnteredUserList((previousList) => {
      return [...previousList, { key: uName, name: uName, age: uAge }];
    });
  };
  return (
    <div>
      <User onAddUser={addUserHandler} />
      <UsersList users={enteredUserList} />
    </div>
  );
}

export default App;
