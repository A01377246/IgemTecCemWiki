import "./AreaComponent.css";

function AreaComponent(props) {
  return (
    <div className="new-expense__controls">
      <div className="new-expense__control">
        <select onChange={props.onChange} value={props.value}>
          <option>Degradation</option>
          <option>Biosensor</option>
          <option>Safety</option>
        </select>
      </div>
    </div>
  );
}

export default AreaComponent;
