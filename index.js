import EventList from '@/components/events/event-list';
import { fetchEventFeatured } from '@/data';

export default function Home() {
  const data = fetchEventFeatured();

  if (!data) {
    return <h1>No Featured Event Found</h1>;
  }

  return (
    <>
      <EventList items={data}></EventList>
    </>
  );
}
