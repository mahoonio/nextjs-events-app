import Link from 'next/link';
import Button from '../ui/Button';
import classes from './event-item.module.css';
import AddressIcon from '../icons/address-icon';
import DateIcon from '../icons/date-icon';
import ArrowRightIcon from '../icons/arrow-right-icon';
const EventItem = (props) => {
  const { title, image, date, location, id } = props;
  const formatedDate = new Date(date).toLocaleDateString('en-US', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  });
  const exploreLink = `/events/${id}`;
  const formatedAddress = location.replace(', ', '\n');
  return (
    <li className={classes.item}>
      <img src={'/' + image} alt={title} />
      <div className={classes.content}>
        <div className={classes.summary}>
          <div>
            <h2>{title}</h2>
            <div className={classes.date}>
              <DateIcon />
              <time>{formatedDate}</time>
            </div>
            <div className={classes.address}>
              <AddressIcon />
              <address>{formatedAddress}</address>
            </div>
          </div>
        </div>
        <div className={classes.actions}>
          <Button link={exploreLink}>
            <span>Explore Event</span>
            <span className={classes.icon}>
              <ArrowRightIcon />
            </span>
          </Button>
        </div>
      </div>
    </li>
  );
};

export default EventItem;
