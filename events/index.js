import EventList from '@/components/events/event-list';
import EventSearch from '@/components/events/event-search';
import { fetchAllEvents } from '@/data';
import { useRouter } from 'next/router';
import React from 'react';

function EventPage() {
  const data = fetchAllEvents();
  const router = useRouter();

  const handleFilter = (year, month) => {
    router.push(`/events/${year}/${month}`);
  };

  if (!data) {
    return (
      <>
        <h1>No Data Found</h1>
      </>
    );
  }

  return (
    <>
      <EventSearch onFilter={handleFilter}></EventSearch>
      <EventList items={data}></EventList>
    </>
  );
}

export default EventPage;
