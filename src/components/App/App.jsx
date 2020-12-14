import React from 'react'
import classes from './App.module.scss';
import Header from '../Header';
import Filters from '../Filters';
import SortList from '../SortList';
import TicketsList from '../TicketsList';

function App() {
  return (
    <div className={classes.container}>
      <Header />
      <main className={classes.main}>
        <aside className={classes.main__filters}>
          <Filters />
        </aside>
        <section className={classes.main__ticket}>
          <header className={classes.ticket__header}>
            <SortList />
          </header>
          <TicketsList />
        </section>
      </main>
    </div>
  );
}

export default App;
