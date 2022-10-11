import { useRouter } from 'next/router';
import EventList from '../../components/events/EventList';
import EventsSearch from '../../components/events/EventsSearch';
import { getAllEvents } from '../../dummy-data';

const AllEventsPage = () => {
  const allEvents = getAllEvents();
  const router = useRouter();
  const onSubmit = (selectedYear, selectedMonth) => {
    router.push(`/events/${selectedYear}/${selectedMonth}`);
  };
  return (
    <div>
      <EventsSearch onSubmit={onSubmit} />
      <EventList events={allEvents} />
    </div>
  );
};

export default AllEventsPage;
