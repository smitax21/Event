import React, { useState, useEffect } from "react";
import Event from "../EventList/Event";

const Dashboard = (props) => {
  const [event, setEvent] = useState([]);
  const [current, setCurrent] = useState(undefined);
  console.log(event);

  const refreshList = () => {
    props.client.getEvent().then((response) => setEvent(response.data));
  };

  const removeEvent = (id) => {
    props.client.removeEvent(id).then(() => refreshList());
  };

  const updateEvent = (event) => {
    setCurrent(event);
  };

  useEffect(() => {
    refreshList();
  }, []);

  const buildrows = () => {
    return event.map((item) => {
      return (
        <Event
          key={item._id}
          name={item.name}
          description={item.description}
          location={item.location}
          date={item.date}
          time={item.time}
          attendance={item.attendance}
          id={event._id}
        />
      );
    });
  };

  return <div className="eventList">{buildrows()}</div>;
};

export default Dashboard;
