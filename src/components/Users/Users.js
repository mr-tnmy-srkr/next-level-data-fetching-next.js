"use client";
import { useEffect, useState } from "react";
import styles from "./Users.module.css"

const Users = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => setUsers(data));
  }, []);

  return (
    <div>
      <h1 className={styles.header_text}>Total users : {users.length}</h1>
      {users.map((user) => {
        return (
          <div
            key={user.id}
            className="card bg-base-100 my-5 shadow-xl w-1/2 mx-auto"
          >
            <div className="card-body">
              <h2 className="card-title">{user.name}</h2>
              <p>{user.email}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Users;
