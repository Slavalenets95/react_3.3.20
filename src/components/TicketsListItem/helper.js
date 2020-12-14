export const timezone = new Date().getTimezoneOffset() * -60000;

export const convertedMinutes = (min) => {
  const minutes = min % 60;
  const hours = Math.floor(min / 60);

  return `${hours}ч ${minutes}м`;
};

export const getTransplantsTxt = (transplants) => {
  const result =
    transplants.length === 0
      ? 'Без пересадок'
      : transplants.length === 1
      ? '1 пересадка'
      : `${transplants.length} пересадки`;

  return result;
};
