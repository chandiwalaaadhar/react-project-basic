import React from "react";
import Card from "./Card";
import Button from "./Button";
import classes from "./ErrorModal.module.css";

const ErrorModal = (props) => {
  return (
    <div>
      <div className={classes.backdrop} onClick={props.onSubmit}></div>
      <Card className={classes.modal}>
        <header className={classes.header}>
          <h2>{props.title}</h2>
        </header>
        <div className={classes.actions}>{props.message}</div>
        <footer className={classes.actions}>
          <Button onClick={props.onSubmit}>Okay</Button>
        </footer>
      </Card>
    </div>
  );
};

export default ErrorModal;
