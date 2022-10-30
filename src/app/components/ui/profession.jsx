import React from "react";
// import { useProfessions } from "../../hooks/useProfession";
import PropTypes from "prop-types";

const Profession = ({ _id, name }) => {
    // const { isLoading, getProfession } = useProfessions();
    // const prof = getProfession(id);
    // if (!isLoading) {
    return <p key={_id}>{name}</p>;
    // } else return "Loading...";
};
Profession.propTypes = {
    _id: PropTypes.string,
    name: PropTypes.string
};
export default Profession;
