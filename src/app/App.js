import React, { useState, useEffect } from "react";
import Users from "./components/users";

import api from "./api";

function App() {
    const [users, setUsers] = useState();
    useEffect(() => {
        api.users.fetchAll().then((data) => setUsers(data));
    }, []);

    const handleDelete = (userId) => {
        setUsers(users.filter((user) => user._id !== userId));
    };
    const handleToggleBookMark = (id) => {
        // console.log(id);
        setUsers(
            users.map((mark) => {
                if (mark._id === id) {
                    return { ...mark, bookmark: !mark.bookmark };
                } else return mark;
            })
        );
    };
    return (
        <>
            <Users
                users={users}
                onDelete={handleDelete}
                onToggle={handleToggleBookMark}
            />
        </>
    );
}

export default App;
