import { fetchEvent } from '@/data';
import { useRouter } from 'next/router';
import React from 'react';

function EventDetailPage() {
  const router = useRouter();

  const query = router.query;

  const data = fetchEvent(+query.id);

  if (!data) {
    return (
      <>
        <h1>No Data Found</h1>
      </>
    );
  }

  return (
    <>
      <div>
        <span>Event - </span>
        <span>{data.title}</span>
      </div>
      <div>
        <span>Date - </span>
        <span>{data.eventDateeventDate}</span>
      </div>
      <div>
        <span>Description - </span>
        <span>{data.description}</span>
      </div>
    </>
  );
}

export default EventDetailPage;
