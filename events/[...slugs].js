import EventList from '@/components/events/event-list';
import EventSearch from '@/components/events/event-search';
import { filterData } from '@/data';
import { useRouter } from 'next/router';
import React from 'react';

function EventsFiltered() {
  const router = useRouter();

  const handlerFilter = (year, month) => {
    router.push(`/events/${year}/${month}`);
  };
  const { slugs } = router.query;

  const year = +slugs[0];
  const month = +slugs[1];

  const data = filterData(year, month);

  if (!data || data.length === 0) {
    return (
      <>
        <h1>No Data Found</h1>
      </>
    );
  }

  return (
    <>
      <EventSearch onFilter={handlerFilter}></EventSearch>
      <EventList items={data}></EventList>
    </>
  );
}

export default EventsFiltered;
