import React from "react";
import Qualities from "./qualitie";
import BookMark from "./bookmark";
import PropTypes from "prop-types";

const User = ({
    _id,
    bookmark,
    completedMeetings,
    name,
    profession,
    qualities,
    rate,
    rest
}) => {
    return (
        <>
            <tr>
                <td>{name}</td>
                <td>
                    {qualities.map((qual) => (
                        <Qualities key={qual._id} {...qual} />
                    ))}
                </td>
                <td>{profession.name}</td>
                <td>{completedMeetings}</td>
                <td>{rate} /5</td>
                <td>
                    {
                        <BookMark
                            status={bookmark}
                            onToggle={rest.onToggle}
                            usId={_id}
                        />
                    }
                </td>
                <td>
                    <button
                        onClick={() => rest.onDelete(_id)}
                        className="btn btn-danger"
                    >
                        delete
                    </button>
                </td>
            </tr>
        </>
    );
};

User.propTypes = {
    _id: PropTypes.number.isRequired,
    bookmark: PropTypes.func.isRequired,
    completedMeetings: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    profession: PropTypes.number.isRequired,
    qualities: PropTypes.number.isRequired,
    rate: PropTypes.number.isRequired,
    rest: PropTypes.number.isRequired
};
export default User;
