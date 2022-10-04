import "./NewActivity.css";
import ActivityForm from "./ActivityForm";

function NewActivity(props) {
  const saveActivityDataHandler = (enteredActivityData) => {
    const activityData = {
      ...enteredActivityData,
      id: Math.random().toString(),
    };
    console.log(activityData);
    props.onAddActivity(activityData);
  };
  return (
    <div className="new-expense">
      <ActivityForm onSaveActivityData={saveActivityDataHandler} />
    </div>
  );
}

export default NewActivity;
