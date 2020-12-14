import { setSearchId, clearSearchId, getTickets } from '../services/ticketService';

export const ALL_TICKETS_LOADING = 'ALL_TICKETS_LOADING';

export const ALL_TICKETS_LOADED = 'ALL_TICKETS_LOADED';

export const GET_TICKETS_DATA = 'GET_TICKETS_DATA';

export const allTicketsLoading = () => (dispatch) => {
  setSearchId().then(() =>
    getTickets().then(({ tickets, stop }) => {
      if (stop) {
        clearSearchId();
        dispatch({ type: ALL_TICKETS_LOADED });
      }
      if (!stop) {
        dispatch({ type: ALL_TICKETS_LOADING, ticketsData: tickets });
        dispatch(allTicketsLoading());
      }
    })
  );
};

export const getTicketsData = (sort, filters) => ({ type: GET_TICKETS_DATA, sort, filters });
