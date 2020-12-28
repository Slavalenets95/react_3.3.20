export const api_base = 'https://front-test.beta.aviasales.ru';

export const setSearchId = async () => {
  if (!localStorage.getItem('searchId')) {
    const { searchId } = await getSearchId();
    localStorage.setItem('searchId', searchId);
  }
};

const getSearchId = async () => {
  try {
    const res = await fetch(`${api_base}/search`)
    return await res.json()
  } catch {
    throw new Error('Ops, something went wrong')
  }
}

export const clearSearchId = () => {
  localStorage.removeItem('searchId');
};


export const getTickets = async () => {
  const searchId = localStorage.getItem('searchId');
  const res = await fetch(`${api_base}/tickets?searchId=${searchId}`);
  if (!res.ok) return getTickets();
  return await res.json();
};
