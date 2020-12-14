import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as filtersActions from '../../actions/filters';
import Filter from '../Filter';
import classes from './Filters.module.scss';

function Filters({ filters, actions }) {
  const filtersGroup = filters.map((filter) => {
    const { title, id, value, isChecked } = filter;
    return <Filter key={id} id={id} title={title} checked={isChecked} value={value} handleFilter={actions.handleFilter} />;
  });
  return (
    <fieldset className={classes.filters__group}>
      <p className={classes['filters__group-title']}>Количество пересадок</p>
      {filtersGroup}
    </fieldset>
  );
}

Filters.propTypes = {
  filters: PropTypes.arrayOf(PropTypes.object).isRequired,
  actions: PropTypes.objectOf(PropTypes.func).isRequired,
};

const mapStateToProps = ({ filters }) => ({ filters });

const mapDispatchToProps = (dispatch) => ({ actions: bindActionCreators(filtersActions, dispatch) });

export default connect(mapStateToProps, mapDispatchToProps)(Filters);
