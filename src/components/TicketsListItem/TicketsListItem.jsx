import React from 'react';
import PropTypes from 'prop-types';
import { format } from 'date-fns';
import { timezone, convertedMinutes, getTransplantsTxt } from './helper';
import classes from './TicketsListItem.module.scss';

function TicketsListItem({ price, segments, carrier }) {
  const tableRow = segments.map((row) => {
    const { origin, destination, stops, date, duration } = row;
    const key = stops.length * duration + origin;

    const departureTime = format(new Date(date) - timezone, 'HH:mm');
    const arrivalTime = format(new Date(date).setMilliseconds(duration * 60 * 1000) - timezone, 'HH:mm');

    return (
      <tr key={key} className={classes['ticket-table__body-row']}>
        <th className={classes['ticket-table__body-data']}>
          <span className={classes['ticket-table__body-title']}>
            {origin} – {destination}
          </span>
          <time className={classes['ticket-table__time']}>
            {departureTime} – {arrivalTime}
          </time>
        </th>
        <th className={classes['ticket-table__body-data']}>
          <span className={classes['ticket-table__body-title']}>В пути</span>
          <time className={classes['ticket-table__travel-time']}>{convertedMinutes(duration)}</time>
        </th>
        <th className={classes['ticket-table__body-data']}>
          <span className={classes['ticket-table__body-title']}>{getTransplantsTxt(stops)}</span>
          <time className={classes['ticket-table__transfers']}>{stops.join(', ')}</time>
        </th>
      </tr>
    );
  });

  const thead = (
    <thead className={classes['ticket-table__header']}>
      <tr className={[classes['ticket-table__row'], classes['ticket-table__header-row']].join(' ')}>
        <td
          className={[
            classes['ticket-table__data'],
            classes['ticket-table__header-data'],
            classes['ticket-table__price'],
          ].join(' ')}
        >
          {price} P
        </td>
        <td
          className={[
            classes['ticket-table__data'],
            classes['ticket-table__header-data'],
            classes['ticket-table__header-logo'],
          ].join(' ')}
        >
          <img src={`https://pics.avs.io/110/36/${carrier}.png`} alt="logo" className={classes['ticket-table__img']} />
        </td>
      </tr>
    </thead>
  );
  return (
    <li className={classes['ticket-list__item']}>
      <table className={[classes['ticket-table'], classes.ticket__table].join(' ')}>
        {thead}
        <tbody className={classes['ticket-table__body']}>{tableRow}</tbody>
      </table>
    </li>
  );
}

TicketsListItem.propTypes = {
  price: PropTypes.number.isRequired,
  segments: PropTypes.arrayOf(PropTypes.object).isRequired,
  carrier: PropTypes.string.isRequired,
};

export default TicketsListItem;
