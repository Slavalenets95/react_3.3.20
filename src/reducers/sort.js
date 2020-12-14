const sortState = [
  { id: 1, label: 'Самый дешевый', value: 'cheap', isSelected: false },
  { id: 2, label: 'Самый быстрый', value: 'fast', isSelected: false },
];

function handleSort(state, value) {
  return state.map((item) => (item.value === value ? { ...item, isSelected: true } : { ...item, isSelected: false }));
}

const sort = (state = sortState, action) => {
  switch (action.type) {
    case 'HANDLE_SORT':
      return handleSort(state, action.value);
    default:
      return state;
  }
};

export default sort;
