import { useRouter } from 'next/router';
import { getFilteredEvents } from '../../dummy-data';
import EventList from '../../components/events/EventList';
import { Fragment } from 'react';
import ErrorAlert from '../../components/ui/error-alert/error-alert';
import Button from '../../components/ui/Button';
const FilteredEventsPage = () => {
  const router = useRouter();
  console.log(router.query);
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
    return (
      <Fragment>
        <ErrorAlert>
          <p>Invalid filters. please adjust your values!</p>
        </ErrorAlert>
        <div className="center">
          <Button link={'/events'}>Browse All Events</Button>
        </div>
      </Fragment>
    );
  }
  const dateObj = { year: numYear, month: numMonth };
  const filteredEvents = getFilteredEvents(dateObj);

  if (!filteredEvents || filteredEvents.length === 0) {
    return (
      <Fragment>
        <ErrorAlert>
          <p>No Events Found</p>
          <div className="center">
            <Button link={'/events'}>Browse All Events</Button>
          </div>
        </ErrorAlert>
      </Fragment>
    );
  }

  return (
    <div>
      <EventList events={filteredEvents} />
    </div>
  );
};

export default FilteredEventsPage;
