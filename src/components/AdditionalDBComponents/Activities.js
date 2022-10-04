import "./Activities.css";
import Card from "../Card";
import Monthfilter from "../MonthFilter/MonthFilter";
import React, { useState } from "react";
import ActivityList from "./ActivitiyList";

function Activities(props) {
  const [filteredMonth, setFilteredMonth] = useState("February");

  const extractActivityMonth = (activity) => {
    return new Date(activity).toLocaleString("en-US", { month: "long" }); //Obtain name of the month of the activity
  };

  const filteredActivities = props.items.filter((activity) => {
    return extractActivityMonth(activity.date) === filteredMonth;
  });

  const MonthSelectionHandler = (month) => {
    setFilteredMonth(month);
  };

  return (
    <div>
      <Card className="expenses">
        <Monthfilter
          selected={filteredMonth}
          onMonthSelection={MonthSelectionHandler}
        />
        <ActivityList items={filteredActivities}></ActivityList>
      </Card>
    </div>
  );
}

export default Activities;
