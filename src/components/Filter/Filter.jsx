import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import classes from './Filter.module.scss';


function Filter({ title, id, value, checked, handleFilter, filters }) {
  return (
    <div>
      <input
          type="checkbox"
          id={id}
          className={classes.check__input}
          checked={checked}
          value={value}
          onChange={(e) => handleFilter(value, e.target.checked)}
        />
      <label htmlFor={id} className={[classes.check, classes['filters__group-label']].join(' ')}>
        {title}
      </label>
    </div>
  );
}

Filter.propTypes = {
  title: PropTypes.string.isRequired,
  checked: PropTypes.bool.isRequired,
  handleFilter: PropTypes.func.isRequired,
  value: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number
  ]).isRequired
};

const mapStateToProps = ({ filters }) => ({ filters });

export default connect(mapStateToProps)(Filter);
