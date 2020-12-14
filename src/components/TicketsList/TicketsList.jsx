import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { allTicketsLoading, getTicketsData } from '../../actions/tickets';
import TicketsListItem from '../TicketsListItem';
import Spinner from '../Spinner';
import classes from './TicketsList.module.scss';

function TicketsList({ tickets: { visibleTicketsData, loading }, sort, filters, allTicketsLoading, getTicketsData }) {
  useEffect(() => {
    allTicketsLoading();
  }, [allTicketsLoading]);

  useEffect(() => {
    const activeFilters = filters.filter((filter) => filter.isChecked === true);

    getTicketsData(sort, activeFilters);
  }, [sort, filters, getTicketsData]);

  if (loading) return <Spinner />;
  if (!visibleTicketsData.length) return <h2>Ничего не найдено</h2>;

  const tickets = visibleTicketsData.map((item) => {
    const { price, segments, carrier } = item;
    const key = price * segments.length + carrier;
    return <TicketsListItem key={key} price={price} segments={segments} carrier={carrier} />;
  });

  return <ul className={classes['ticket-list']}>{tickets}</ul>;
}

TicketsList.propTypes = {
  visibleTicketsData: PropTypes.arrayOf(PropTypes.object),
  loading: PropTypes.bool,
  sort: PropTypes.arrayOf(PropTypes.object).isRequired,
  filters: PropTypes.arrayOf(PropTypes.object).isRequired,
  allTicketsLoading: PropTypes.func.isRequired,
  getTicketsData: PropTypes.func.isRequired,
};

const mapStateToProps = ({ tickets, sort, filters }) => ({ tickets, sort, filters });

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(
    {
      allTicketsLoading,
      getTicketsData,
    },
    dispatch
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(TicketsList);
