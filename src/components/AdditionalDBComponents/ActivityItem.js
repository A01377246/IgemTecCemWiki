import "./ActivityItem.css";
import ActivityDate from "./ActivityDate";
import Card from "./Card";
function ActivityItem(props) {
  return (
    <Card className="expense-item">
      <ActivityDate date={props.date} />
      <div className="expense-item__description">
        <h2>{props.activityName}</h2>
      </div>
      <div className="activity_area">{props.area}</div>
    </Card>
  );
}

export default ActivityItem;
