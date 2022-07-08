import React, { useState } from "react";
import api from "../API";

const Users = () => {
  const [users, setUsers] = useState(api.users.fetchAll());

  const handleDelete = (userId) => {
    setUsers(users.filter((user) => user._id !== userId));
  };
  const renderPhrase = (number) => {
    number = users.length;
    if (number > 4 && number < 15) return "человек тусанет с тобой сегодня";
    if ([2, 3, 4].indexOf(number) >= 0)
      return "человека тусанут с тобой сегодня";
    if (number === 1) return "человек тусанет с тобой сегодня";
  };
  const getBageClasses = () => {
    let classes = "badge m-2 ";
    classes += users === 0 ? "bg-danger" : "bg-primary";
    return classes;
  };
  const renderTable = () => {
    return (
      <table className="table">
        <thead>
          <tr>
            <th scope="col">Имя</th>
            <th scope="col">Качества</th>
            <th scope="col">Профессия</th>
            <th scope="col">Встретился раз</th>
            <th scope="col">Оценка</th>
          </tr>
        </thead>

        <tbody>
          {users.map((user) => {
            return (
              <tr key={user._id}>
                <td>{user.name}</td>
                <td>{user.profession.name}</td>
                <td>
                  {user.qualities.map((qual) => (
                    <span
                      key={qual._id}
                      className={"badge bg-" + qual.color + " m-2"}
                    >
                      {qual.name}
                    </span>
                  ))}
                </td>
                <td>{user.completedMeetings}</td>
                <td>{user.rate}</td>
                <td>
                  <button
                    className="btn btn-danger btn-sm m-2"
                    onClick={() => handleDelete(user._id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    );
  };
  if (users.length !== 0) {
    return (
      <>
        {" "}
        <h2 className={getBageClasses()}>
          {users.length} {renderPhrase()}
        </h2>
        {renderTable()}
      </>
    );
  } else if (users.length === 0) {
    return <h2 className="badge bg-danger m-2"> Никто с тобой не тусанет </h2>;
  }
};

export default Users;
