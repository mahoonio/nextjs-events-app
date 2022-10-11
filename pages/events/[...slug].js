import { useRouter } from 'next/router';
import { getFilteredEvents } from '../../dummy-data';
import EventList from '../../components/events/EventList';
import { useEffect } from 'react';
const FilteredEventsPage = () => {
  const router = useRouter();
  console.log(router.query);
  const filteredEvents = null;
  const filterData = router.query.slug;
  if (!filterData) {
    return <p className="center">Loading...</p>;
  }
  const year = filterData[0];
  const month = filterData[1];
  const numYear = +year;
  const numMonth = +month;
  if (
    isNaN(numYear) ||
    isNaN(numMonth) ||
    numYear > 2030 ||
    numYear < 2021 ||
    numMonth > 12 ||
    numMonth < 1
  ) {
    return <p>Invalid filters. please adjust your values!</p>;
  }
  const dateObj = { year: numYear, month: numMonth };
  filteredEvents = getFilteredEvents(dateObj);

  if (!filteredEvents || filteredEvents.length === 0) {
    return <p className="center">No Events Found</p>;
  }

  return (
    <div>
      <EventList events={filteredEvents} />
    </div>
  );
};

export default FilteredEventsPage;
