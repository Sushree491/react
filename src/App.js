import { useState } from 'react';
import './App.css';

function App() {
  const [users, setUsers] = useState([]);
  const loadUsers = async () => {
    const response = await fetch("https://reqres.in/api/users?page=1");
    const jsonresponse = await response.json();
    // console.log(jsonresponse);
    setUsers(jsonresponse.data);
  };
  return (
    <div className="App">
      <h1>Hello All</h1>
      <button onClick={loadUsers}>Get Data</button>
      <h2>Users:</h2>
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            {/* {user} */}
            Name:{user.first_name}
            Surname:{user.last_name}
            Avatar: {user.avatar}{" "}
            Mail_id:{user.email}
          </li>

        ))}

      </ul>

    </div>
  );
};

export default App;
