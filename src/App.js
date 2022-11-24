import React from 'react';

// components
import AddUser from './components/Users/AddUser';
import UsersList from './components/Users/UsersList';

function App() {
  const [usersList, setUsersList] = React.useState([]);

  const addUserHandler = (uName, uAge) => {
    setUsersList((prevUserList) => {
      return [...prevUserList, { name: uName, age: uAge }];
    });
  };

  return (
    <div>
      <AddUser onAddUser={addUserHandler} />
      <UsersList users={usersList} />
    </div>
  );
}

export default App;
