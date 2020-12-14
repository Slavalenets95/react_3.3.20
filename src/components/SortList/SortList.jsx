import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as sortActions from '../../actions/sort';
import SortListItem from '../SortListItem';
import classes from './SortList.module.scss';

function SortList({ sortData, actions }) {
  return (
    <ul className={classes['sort-list']}>
      {sortData.map((sortItem) => {
        const { id, label, value, isSelected } = sortItem;
        return (
          <SortListItem key={id} label={label} value={value} isSelected={isSelected} handleSort={actions.handleSort} />
        );
      })}
    </ul>
  );
}

SortList.propTypes = {
  sortData: PropTypes.arrayOf(PropTypes.object).isRequired,
  actions: PropTypes.objectOf(PropTypes.func).isRequired,
};

const mapStateToProps = ({ sort }) => ({ sortData: sort });

const mapDispatchToProps = (dispatch) => ({ actions: bindActionCreators(sortActions, dispatch) });

export default connect(mapStateToProps, mapDispatchToProps)(SortList);
