import EventItem from '../EventItem';

const EventList = (props) => {
  const { events } = props;
  return (
    <ul>
      {events.map((event) => (
        <EventItem event={event} />
      ))}
    </ul>
  );
};

export default EventList;
