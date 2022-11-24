import React from 'react';
import classes from './AddUser.module.css';

// components
import Card from '../UI/Card';
import Button from '../UI/Button';
import ErrorModal from '../UI/ErrorModal';

const AddUser = (props) => {
  const [enteredUsername, setEnteredUsername] = React.useState('');
  const [enteredAge, setEnteredAge] = React.useState('');

  const addUserHandler = (e) => {
    e.preventDefault();
    // 유효성 검사
    if (enteredUsername.trim().length === 0 || enteredAge.trim().length === 0) {
      // 공백없는 문자열의 경우
      alert('장난하니?');
      return;
    } else if (+enteredAge < 1) {
      return;
    }
    // 추가된 정보 출력
    console.log('🚀 ⁝ AddUser', enteredUsername, enteredAge);
    props.onAddUser(enteredUsername, enteredAge);
    setEnteredUsername('');
    setEnteredAge('');
  };

  const usernameChangeHandler = (e) => {
    setEnteredUsername(e.target.value);
  };
  const ageChangeHandler = (e) => {
    setEnteredAge(e.target.value);
  };

  // 괄호가 있으면 바로 함수를 실행
  return (
    <>
      <ErrorModal title='에러가 발생함요' message='뭔가 잘못되었슈' />
      <Card className={classes.input}>
        <form onSubmit={addUserHandler}>
          <label htmlFor='username'>사용자 이름</label>
          <input id='username' type='text' value={enteredUsername} onChange={usernameChangeHandler} />

          <label htmlFor='age'>나이</label>
          <input id='age' type='number' value={enteredAge} onChange={ageChangeHandler} />

          <Button type='submit'>회원등록</Button>
        </form>
      </Card>
    </>
  );
};

export default AddUser;
