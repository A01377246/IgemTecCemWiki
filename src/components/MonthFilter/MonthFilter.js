import "./MonthFilter.css";

function Monthfilter(props) {
  const MonthChangeHandler = (event) => {
    props.onMonthSelection(event.target.value);
  };

  return (
    <div className="expenses-filter">
      <div className="expenses-filter__control">
        <label>Filter activities by month</label>
        <select value={props.selected} onChange={MonthChangeHandler}>
          <option>January</option>
          <option>February</option>
          <option>March</option>
          <option>April</option>
          <option>May</option>
          <option>June</option>
          <option>July</option>
          <option>August</option>
          <option>September</option>
          <option>October</option>
          <option>November</option>
          <option>December</option>
        </select>
      </div>
    </div>
  );
}
export default Monthfilter;
