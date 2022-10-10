import Link from 'next/link';
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
    <li>
      <img src={'/' + image} alt={title} />
      <div>
        <div>
          <div>
            <h2>{title}</h2>
            <div>
              <time>{formatedDate}</time>
            </div>
            <div>
              <address>{formatedAddress}</address>
            </div>
          </div>
        </div>
        <div>
          <Link href={exploreLink}>Explore Event</Link>
        </div>
      </div>
    </li>
  );
};

export default EventItem;
