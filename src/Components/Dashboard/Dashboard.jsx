import React, { useState, useEffect } from "react";
import Event from "../EventList/Event";
import CreateEvent from "./../CreateEvent/CreateEvent";
import "./Dashboard.css";

const Dashboard = (props) => {
  const [event, setEvent] = useState([]);
  const [current, setCurrent] = useState(undefined);

  const refreshList = () => {
    props.client.getEvent().then((response) => setEvent(response.data));
  };

  const removeEvent = (id) => {
    props.client.removeEvent(id).then(() => refreshList());
  };

  const updateEvent = (item) => {
    setCurrent(item);
    console.log(item);
  };

  useEffect(() => {
    refreshList();
  }, []);

  const buildrows = () => {
    return event.map((item) => {
      return (
        <div className="event-wrapp">
          <Event
            key={item._id}
            name={item.name}
            description={item.description}
            location={item.location}
            date={item.date}
            time={item.time}
            attendance={item.attendance}
            // id={item._id}
          />
          <div className="btn-wrapp">
            <button className="btn" onClick={() => updateEvent(item)}>
              {" "}
              Update
            </button>
            <button className="btn" onClick={() => removeEvent(item._id)}>
              Delete
            </button>
          </div>
        </div>
      );
    });
  };

  return (
    <>
      <div className="eventList">{buildrows()}</div>
      <CreateEvent
        client={props.client}
        refreshList={() => {
          props.refreshList();
          setCurrent(undefined);
        }}
        currentAd={current}
      />
    </>
  );
};

export default Dashboard;
