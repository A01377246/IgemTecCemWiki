import ActivityItem from "./ActivityItem";
import "./ActivityList.css";

function ActivityList(props) {
  if (props.items.length === 0) {
    return (
      <h2 className="expenses-list__fallback">
        No activities have been registered for this month
      </h2>
    );
  }

  return (
    <ul className="expenses-list">
      activitiesContent ={" "}
      {props.items.map((activity) => (
        <ActivityItem
          key={activity.id}
          activityName={activity.activityName}
          area={activity.area}
          date={new Date(activity.date.replace(/-/g, "/"))}
          booKPage={activity.bookPage}
        />
      ))}
      ;
    </ul>
  );
}

export default ActivityList;
