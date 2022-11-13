import React from 'react';

import Card from '../UI/Card';

import classes from './AddUser.module.css';

const AddUser = (props) => {
  const addUserHandler = (e) => {
    e.preventDefault();
  };

  // 괄호가 있으면 바로 함수를 실행
  return (
    <Card className={classes.input}>
      <form onSubmit={addUserHandler}>
        <label htmlFor='username'>사용자 이름</label>
        <input id='username' type='text' />

        <label htmlFor='age'>나이</label>
        <input id='age' type='number' />

        <button type='submit'>회원등록</button>
      </form>
    </Card>
  );
};

export default AddUser;
