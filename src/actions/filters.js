export const HANDLE_FILTER = 'HANDLE_FILTER';

export const handleFilter = (value, checked) => (dispatch, getState) => {
    const { filters } = getState()
    let newFilters = [ ...filters ]

    if (value === 'all') newFilters = checkAll(newFilters, checked);
    
    newFilters = newFilters.map((item) => {
        return item.value === value ? { ...item, isChecked: checked } : item;
    });
    
    newFilters = isAllChecked(newFilters) ? checkAll(newFilters, checked) : removeAllCheck(newFilters);

    dispatch({ type: HANDLE_FILTER, payload: newFilters})
}

const isAllChecked = (state) => state.every((filter) => (filter.value === 'all' ? true : filter.isChecked));

const removeAllCheck = (state) =>
    state.map((filter) => (filter.value === 'all' ? { ...filter, isChecked: false } : filter));

const checkAll = (state, bool) => state.map((filter) => ({ ...filter, isChecked: bool }));


