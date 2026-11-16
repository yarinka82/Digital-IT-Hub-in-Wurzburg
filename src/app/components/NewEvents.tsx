import Icon from "./common/Icon";
import NavLink from "./common/NavLink";

export type EventType = "workshop" | "project" | "event";

export type NewEventsProp = {
  id: string;
  type: EventType;
  image?: string;
  title: string;
  description: string;
  date: string;
  time?: string;
  place?: string;
};

export default function NewEvents(event: NewEventsProp) {
  const link = `/news?type=${event.type}&id=${event.id}`;
  return (
    <article>
      <Icon src={event.image} />
      <h3>{event.title} </h3>
      <p> {event.description} </p>
      <ul>
        <li>Date: {event.date}</li>
        <li> Time: {event.time} </li>
        <li>Place: {event.place}</li>
        <li>
          <NavLink
            href={link}
            className="text-blue-400 hover:text-blue-600 inline-block"
          >
            Mehr Informationen
          </NavLink>
        </li>
      </ul>
    </article>
  );
}
