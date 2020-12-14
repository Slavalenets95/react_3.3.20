const filtersState = [
  { id: 1, title: 'Все', value: 'all', isChecked: true },
  { id: 2, title: 'Без пересадок', value: 0, isChecked: true },
  { id: 3, title: '1 пересадка', value: 1, isChecked: true },
  { id: 4, title: '2 пересадки', value: 2, isChecked: true },
  { id: 5, title: '3 пересадки', value: 3, isChecked: true },
];

const isAllChecked = (state) => state.every((filter) => (filter.value === 'all' ? true : filter.isChecked));

const removeAllCheck = (state) =>
  state.map((filter) => (filter.value === 'all' ? { ...filter, isChecked: false } : filter));

const checkAll = (state, bool) => state.map((filter) => ({ ...filter, isChecked: bool }));

function handleFilter(state, checked, value) {
  if (value === 'all') return checkAll(state, checked);

  const newState = state.map((item) => {
    return item.value === value ? { ...item, isChecked: checked } : item;
  });

  return isAllChecked(newState) ? checkAll(state, checked) : removeAllCheck(newState);
}

function filters(state = filtersState, action) {
  switch (action.type) {
    case 'HANDLE_FILTER':
      return handleFilter(state, action.checked, action.value);
    default:
      return state;
  }
}

export default filters;
