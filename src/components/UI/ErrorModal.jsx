import React from 'react';

// components
import Button from './Button';
import Card from './Card';

import classes from './ErrorModal.module.css';

const ErrorModal = (props) => {
  // onConfirm : 모달창 끄게 하는거~
  return (
    <div className={classes.backdrop} onClick={props.onConfirm}>
      <Card className={classes.modal}>
        <header className={classes.header}>
          <h2>{props.title}</h2>
        </header>

        <div className={classes.content}>
          <p>{props.message}</p>
        </div>

        <footer className={classes.actions}>
          <Button onClick={props.onConfirm}>오키</Button>
        </footer>
      </Card>
    </div>
  );
};

export default ErrorModal;
