import React, { useState } from 'react';
import classes from './AddUser.module.css';

// components
import Card from '../UI/Card';
import Button from '../UI/Button';
import ErrorModal from '../UI/ErrorModal';
import Wrapper from '../Helpers/Wrapper';

const AddUser = (props) => {
  const [enteredUsername, setEnteredUsername] = React.useState('');
  const [enteredAge, setEnteredAge] = React.useState('');
  const [error, setError] = useState();

  const addUserHandler = (e) => {
    e.preventDefault();
    // 유효성 검사
    if (enteredUsername.trim().length === 0 || enteredAge.trim().length === 0) {
      // 공백없는 문자열의 경우
      setError({
        title: '올바르지 않은 입력이에용',
        message: '유효한 이름이나 나이인지 확인해주세요 (빈칸안됨)',
      });
      return;
    } else if (+enteredAge < 1) {
      setError({
        title: '나이를 확인해주세요',
        message: '나이는 1살 이상이어야 합니다',
      });
      return;
    }
    // 추가된 정보 출력
    props.onAddUser(enteredUsername, enteredAge);

    setEnteredUsername('');
    setEnteredAge('');
  };

  const errorHandler = () => {
    setError(null);
  };

  const usernameChangeHandler = (e) => {
    setEnteredUsername(e.target.value);
  };
  const ageChangeHandler = (e) => {
    setEnteredAge(e.target.value);
  };

  // 괄호가 있으면 바로 함수를 실행
  return (
    <Wrapper>
      {error && <ErrorModal title={error.title} message={error.message} onConfirm={errorHandler}/>}
      <Card className={classes.input}>
        <form onSubmit={addUserHandler}>
          <label htmlFor='username'>사용자 이름</label>
          <input id='username' type='text' value={enteredUsername} onChange={usernameChangeHandler} />

          <label htmlFor='age'>나이</label>
          <input id='age' type='number' value={enteredAge} onChange={ageChangeHandler} />

          <Button type='submit'>회원등록</Button>
        </form>
      </Card>
    </Wrapper>
  );
};

export default AddUser;
