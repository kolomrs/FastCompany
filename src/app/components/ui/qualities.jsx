import React from "react";
import { useQualities } from "../../hooks/useQualities";
import PropTypes from "prop-types";

const Qualities = ({ id }) => {
    console.log(id);
    const { isLoading, getQualities } = useQualities();
    const qual = getQualities(id);
    if (!isLoading) {
        return <p>{qual.name}</p>;
    } else return "Loading...";
};

Qualities.propTypes = {
    id: PropTypes.string
};
export default Qualities;
