export const api_base = 'https://front-test.beta.aviasales.ru';

export const setSearchId = async () => {
  if (!localStorage.getItem('searchId')) {
    const res = await fetch(`${api_base}/search`);
    const { searchId } = await res.json();
    localStorage.setItem('searchId', searchId);
  }
};

export const clearSearchId = async () => {
  localStorage.removeItem('searchId');
};

export const getTickets = async () => {
  const res = await fetch(`${api_base}/tickets?searchId=${localStorage.getItem('searchId')}`);
  if (!res.ok) return getTickets();
  return await res.json();
};
