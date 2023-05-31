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
          <div>
            <li key={user.id}>
              {/* {user} */}
              Name:{user.first_name} <br/>
              Surname:{user.last_name} <br/>
              Avatar: <img src={user.avatar} height={100} /> <br/>
              Mail_id:{user.email}
            </li>
            <br/>
          </div>
        ))}

      </ul>

    </div>
  );
};

export default App;
