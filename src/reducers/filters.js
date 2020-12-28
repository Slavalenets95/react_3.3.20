import { HANDLE_FILTER } from '../actions/filters'

const filtersState = [
  { id: 1, title: 'Все', value: 'all', isChecked: true },
  { id: 2, title: 'Без пересадок', value: 0, isChecked: true },
  { id: 3, title: '1 пересадка', value: 1, isChecked: true },
  { id: 4, title: '2 пересадки', value: 2, isChecked: true },
  { id: 5, title: '3 пересадки', value: 3, isChecked: true },
];

function filters(state = filtersState, action) {
  switch (action.type) {
    case HANDLE_FILTER:
      return action.payload
    default:
      return state;
  }
}

export default filters;
