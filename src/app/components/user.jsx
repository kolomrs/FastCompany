import React from "react";
import Qualities from "./qualitie";
import BookMark from "./bookmark";

const User = ({ users }) => {
  return (
    <>
      {users.map((user) => (
        <tr key={user._id}>
          <td>{user.name}</td>
          <td>
            {user.qualities.map((item) => (
              <Qualities />
            ))}
          </td>
          <td>{user.profession.name}</td>
          <td>{user.completedMeetings}</td>
          <td>{user.rate} /5</td>
          <td>
            <button
              // onClick={() => handleDelete(user._id)}
              className="btn btn-danger"
            >
              delete
            </button>
          </td>
        </tr>
      ))}
    </>
  );
};

export default User;
