import React, { Fragment, useState } from "react";
import Card from "../UI/Card";
import classes from "./AddUser.module.css";
import Button from "../UI/Button";
import ErrorModal from "../UI/ErrorModal";

const User = (props) => {
  const [userName, setUserName] = useState("");
  const [age, setAge] = useState("");
  const [error, setError] = useState();

  const onSubmitHandler = (event) => {
    event.preventDefault();
    if (+age < 1) {
      setError({ title: "Error Occured", message: "Please Enter a valid Age" });
      return;
    }
    if (userName.trim().length < 1 || age.trim().length < 1) {
      setError({
        title: "Error Occured",
        message: "Please Enter a valid Age or Valid Name",
      });
      return;
    }
    props.onAddUser(userName, age);
    setUserName("");
    setAge("");
  };

  const usernameChangeHandler = (event) => {
    setUserName(event.target.value);
  };

  const ageChangeHandler = (event) => {
    setAge(event.target.value);
  };

  const errorSubmitHandler = () => {
    setError();
  };
  return (
    <Fragment>
      {error && (
        <ErrorModal
          title={error.title}
          message={error.message}
          onSubmit={errorSubmitHandler}
        />
      )}
      <Card className={classes.input}>
        <form onSubmit={onSubmitHandler}>
          <label htmlFor="username">Username</label>
          <input
            id="username"
            type="text"
            value={userName}
            onChange={usernameChangeHandler}
          />
          <label htmlFor="Age">Age</label>
          <input
            id="age"
            type="number"
            value={age}
            onChange={ageChangeHandler}
          />
          <Button type="submit">Add User</Button>
        </form>
      </Card>
    </Fragment>
  );
};

export default User;
