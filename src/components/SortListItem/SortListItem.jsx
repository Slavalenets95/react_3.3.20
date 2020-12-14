import React from 'react';
import PropTypes from 'prop-types';
import classes from './SortListItem.module.scss';


function SortListItem({ label, value, isSelected, handleSort }) {
  return (
    <li
      className={
        isSelected
          ? [classes['sort-list__item'], classes['sort-list__item--selected']].join(' ')
          : classes['sort-list__item']
      }
    >
      <button type='button' className={classes['sort-list__btn']} value={value} onClick={() => handleSort(value)}>
        {label}
      </button>
    </li>
  );
}

SortListItem.propTypes = {
  label: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  isSelected: PropTypes.bool.isRequired,
  handleSort: PropTypes.func.isRequired,
};

export default SortListItem;
