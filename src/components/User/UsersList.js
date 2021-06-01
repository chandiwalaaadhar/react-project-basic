import React from "react";
import Card from "../UI/Card";
import classes from "../User/UsersList.module.css";

const UsersList = (props) => {
  return (
    <Card className={classes.users}>
      <ul>
        {props.users.map((user) => (
          <li key={user.name}>
            {user.name}({user.age} years Old)
          </li>
        ))}
      </ul>
    </Card>
  );
};

export default UsersList;
