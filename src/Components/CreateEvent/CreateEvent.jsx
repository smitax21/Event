import React, { useState } from "react";

const CreateEvent = (props) => {
  const [disabled, setDisabled] = useState(false);

  const submitHandler = (e) => {
    e.preventDefault();
    setDisabled(true);
    let result;
    if (props.currentEvent) {
      result = props.client.updateEvent(
        props.currentEvent._id,
        e.target.name.value,
        e.target.description.value,
        e.target.location.value,
        e.target.date.value,
        e.target.time.value
      );
    } else {
      result = props.client.addEvent(
        e.target.name.value,
        e.target.description.value,
        e.target.location.value,
        e.target.date.value,
        e.target.time.value
      );
    }
    result
      .then(() => {
        setDisabled(false);
        document.getElementById("addForm").reset();
        props.refreshList();
      })
      .catch(() => {
        alert("an error occured, please try again");
        setDisabled(false);
      });
  };
  return (
    <>
      {props.currentEvent ? "Update" : "Add"}
      <br />

      <form onSubmit={(e) => submitHandler(e)}>
        <input
          type="text"
          defaultValue={props.currentEvent?.name}
          name="name"
          placeholder="Event Name"
          disabled={disabled}
        />
        <input
          type="text"
          defaultValue={props.currentEvent?.description}
          name="description"
          placeholder="Description"
          disabled={disabled}
        />
        <input
          type="text"
          defaultValue={props.currentEvent?.location}
          name="location"
          placeholder="Location"
          disabled={disabled}
        />
        <input
          type="date"
          defaultValue={props.currentEvent?.date}
          name="date"
          placeholder="Date"
          disabled={disabled}
        />
        <input
          type="time"
          defaultValue={props.currentEvent?.time}
          name="time"
          placeholder="Time"
          disabled={disabled}
        />
        <br />
        <br />
        <button type="submit" disabled={disabled}>
          {" "}
          Submit{" "}
        </button>
      </form>
    </>
  );
};

export default CreateEvent;
