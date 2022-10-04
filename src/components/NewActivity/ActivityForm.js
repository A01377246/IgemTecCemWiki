import "./ActivityForm.css";
import React, { useState } from "react";
import AreaComponent from "./AreaComponent.js";
import { db } from "../../firebaseConfig";
import { collection, addDoc } from "firebase/firestore";

const activityCollectionReference = collection(db, "Activities");

function ActivityForm(props) {
  //Multiple states can be used or a single used state can receive an object that contains the the different values that will be stored
  const [enteredActivityTitle, setEnteredActivityTitle] = useState("");
  const [enteredDate, setEnteredDate] = useState("");
  const [enteredArea, setEnteredArea] = useState("Degradation");
  const [enteredDescription, setEnteredDescription] = useState("");
  const [enteredPageNumber, setEnteredPageNumber] = useState(0);

  const titleChangeHandler = (event) => {
    setEnteredActivityTitle(event.target.value);
  };

  const descriptionChangeHandler = (event) => {
    setEnteredDescription(event.target.value);
  };

  const pageNumberHandler = (event) => {
    setEnteredPageNumber(event.target.value);
  };

  const dateChangeHandler = (event) => {
    let dateObject = new Date(event.target.value.replace(/-/g, "/"));
    const month = dateObject.toLocaleString("en-US", { month: "2-digit" });
    const day = dateObject.toLocaleString("en-US", { day: "2-digit" });
    const year = dateObject.getFullYear();
    setEnteredDate(
      year.toString() + "-" + month.toString() + "-" + day.toString()
    );
    //console.log(month + "-" + day + "-" + year);
  };

  const areaChangeHandler = (event) => {
    setEnteredArea(event.target.value);
  };

  const createActivityOnDB = async (activityData) => {
    console.log("Adding date:", activityData["date"]);
    await addDoc(activityCollectionReference, activityData);
    alert("Activity added succesfully");
  };

  const submitHandler = (event) => {
    event.preventDefault(); //Prevents the page from reloading when the submit button is clicked

    const activityData = {
      activityName: enteredActivityTitle,
      area: enteredArea,
      date: enteredDate,
      description: enteredDescription,
      bookPage: enteredPageNumber,
    };

    createActivityOnDB(activityData);

    //Clear input fields by using two way binding (passing a value back to the input)

    props.onSaveActivityData(activityData); // call a function defined on the parent component
    setEnteredActivityTitle("");
    setEnteredDescription("");
    setEnteredArea("Degradation");
    setEnteredDate("");
    setEnteredPageNumber(0);
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Activity Title</label>
          <input
            type="text"
            value={enteredActivityTitle}
            onChange={titleChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Description</label>
          <input
            type="text"
            onChange={descriptionChangeHandler}
            value={enteredDescription}
          />
        </div>
        <div className="new-expense__control">
          <label>Area</label>
          <AreaComponent onChange={areaChangeHandler} value={enteredArea} />
        </div>
        <div className="new-expense__control">
          <label>Book Page</label>
          <input
            type="number"
            onChange={pageNumberHandler}
            min={0}
            max={200}
            value={enteredPageNumber}
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            min="2022/01/01"
            max="2022/10/12"
            onChange={dateChangeHandler}
            value={enteredDate}
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="submbit">Add Activity</button>
      </div>
    </form>
  );
}

export default ActivityForm;
