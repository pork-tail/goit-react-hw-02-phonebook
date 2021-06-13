import React from "react";
import styles from "./Filter.module.css";
// import PropTypes from "prop-types";

const Filter = ({ filter, handleChange }) => {
  return (
    <label className={styles.title}>
      Find contacts by name
      <input
        className={styles.input}
        id="filter"
        name="filter"
        type="text"
        value={filter}
        onChange={handleChange}
      />
    </label>
  );
};

Filter.propTypes = {};

export default Filter;
