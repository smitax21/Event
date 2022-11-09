import React from "react";
import Event from "./Event";
import data from "./data";
import "./EventList.css";

const EventList = () => {
  const createEvents = () => {
    let EventsList = data.map((event, i) => {
      return (
        <Event
          key={i}
          name={event.name}
          description={event.description}
          location={event.location}
          date={event.date}
          time={event.time}
          attendance={event.attendance}
          id={event._id}
        />
      );
    });
    return EventsList;
  };
  return <div className="eventList">{createEvents()}</div>;
};

export default EventList;
