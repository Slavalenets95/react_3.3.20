import { ALL_TICKETS_LOADING, ALL_TICKETS_LOADED, GET_TICKETS_DATA } from '../actions/tickets'

const ticketsState = {
  ticketsData: [],
  loading: true,
  visibleTicketsAmount: 5,
  visibleTicketsData: [],
};

const allTicketsLoading = (state, ticketsData) => {
  return {
    ...state,
    ticketsData: [...state.ticketsData, ...ticketsData],
  };
};

const allTicketsLoaded = (state) => {
  return {
    ...state,
    loading: false,
    visibleTicketsData: state.ticketsData.slice(0, state.visibleTicketsAmount),
  };
};

const getRenderData = (state, sort, filters) => {
  return {
    ...state,
    visibleTicketsData: filtering(sorting(state.ticketsData, sort), filters).slice(0, state.visibleTicketsAmount),
  };
};

const filtering = (data, filtering) => {
  const activeFilters = filtering.filter((filter) => filter.isChecked).map((filter) => filter.value);

  if (activeFilters.length === 0) return [];
  if (activeFilters.find((filter) => filter.value === 'all')) return data;

  const filteredData = data.filter((ticket) => {
    const arrivalTicketStop = ticket.segments[0].stops.length;
    const departureTicketStop = ticket.segments[1].stops.length;

    const arrivalFilterResult = activeFilters.find((filterValue) => filterValue === arrivalTicketStop);
    const departureFilterResult = activeFilters.find((filterValue) => filterValue === departureTicketStop);

    return arrivalFilterResult && departureFilterResult;
  });
  return filteredData;
};

const sorting = (data, sort) => {
  const activeSort = sort.find((sort) => sort.isSelected === true);
  if (!activeSort) return data;

  const { value: activeSortValue } = activeSort;
  const resultData = [...data];
  switch (activeSortValue) {
    case 'cheap':
      return resultData.sort((a, b) => a.price - b.price);
    case 'fast':
      return resultData.sort(
        (a, b) => a.segments[0].duration + a.segments[1].duration - (b.segments[0].duration + b.segments[1].duration)
      );
    default:
      return data;
  }
};

const tickets = (state = ticketsState, action) => {
  switch (action.type) {
    case ALL_TICKETS_LOADING:
      return allTicketsLoading(state, action.ticketsData);
    case ALL_TICKETS_LOADED:
      return allTicketsLoaded(state);
    case GET_TICKETS_DATA:
      return getRenderData(state, action.sort, action.filters);
    default:
      return state;
  }
};

export default tickets;
