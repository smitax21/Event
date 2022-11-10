import React, { useState, useEffect } from "react";

const CreateEvent = (props) => {
  const [formData, changeFormData] = useState({ name: "" });
  const [disabled, setDisabled] = useState(false);

  const submitHandler = (e) => {
    e.preventDefault();
    setDisabled(true);
    let result;
    if (props.currentAd) {
      // if there is a current post
      // udate the current post
      // take the current post
      //populate it into my form
      // so that we can mutate it

      result = props.client.updateEvent(
        props.currentAd._id,
        e.target.name.value,
        e.target.description.value,
        e.target.location.value,
        e.target.date.value,
        e.target.time.value,
        e.target.attendance.value
      );
    } else {
      result = props.client.addEvent(
        e.target.name.value,
        e.target.description.value,
        e.target.location.value,
        e.target.date.value,
        e.target.time.value,
        e.target.attendance.value
      );
    }
    result
      .then(() => {
        setDisabled(false);
        // document.getElementById("addForm").reset();
        console.log(props);
        props.refreshList();
      })
      .catch((error) => {
        console.log(error);
        alert("an error occured, please try again");
        setDisabled(false);
      });
  };

  useEffect(() => {
    changeFormData({
      name: props.currentAd ? props.currentAd.name : "",
    });
  }, [props.currentAd]);

  const handleInput = (e) => {
    let newState = { ...formData };
    newState.name = e.target.value;
    console.log(newState);
    changeFormData(newState);
  };

  return (
    <>
      <form onSubmit={(e) => submitHandler(e)}>
        <input
          type="text"
          value={formData.name}
          name="name"
          onInput={(e) => {
            handleInput(e);
          }}
          placeholder="Event Name"
          disabled={disabled}
        />
        <input
          type="text"
          defaultValue={props.currentAd?.description}
          name="description"
          placeholder="Description"
          disabled={disabled}
        />
        <input
          type="text"
          defaultValue={props.currentAd?.location}
          name="location"
          placeholder="Location"
          disabled={disabled}
        />
        <input
          type="date"
          defaultValue={props.currentAd?.date}
          name="date"
          placeholder="Date"
          disabled={disabled}
        />
        <input
          type="time"
          defaultValue={props.currentAd?.time}
          name="time"
          placeholder="Time"
          disabled={disabled}
        />
        <input
          type="text"
          defaultValue={props.currentAd?.attendance}
          name="attendance"
          placeholder="Registration required"
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
