import EventItem from '../EventItem';

const EventList = (props) => {
  const { events } = props;
  return (
    <ul>
      {events.map((event) => (
        <EventItem
          title={event.title}
          id={event.id}
          location={event.location}
          date={event.date}
          image={event.image}
          key={event.id}
        />
      ))}
    </ul>
  );
};

export default EventList;
