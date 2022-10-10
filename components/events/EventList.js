import EventItem from './EventItem';
import classes from './event-list.module.css';
const EventList = (props) => {
  const { events } = props;
  return (
    <ul className={classes.list}>
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
