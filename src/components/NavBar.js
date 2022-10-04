import "./NavBar.css";
import { BrowserRouter as Router, Link } from "react-router-dom";

function Navbar(props) {
  const mapNavElementsToList = (navElementList) => {
    //Maps each element of the navbar to a list item and assigns a route to it
    return navElementList.map((element) => (
      <Router>
        <li className="listElement">
          <Link to={"/" + element.replace(/\s/g, "")}>{element}</Link>
        </li>
      </Router>
    ));
  };
  console.log("Hooray");
  console.log(props.elements);
  return (
    <div>
      <ul className="list">{mapNavElementsToList(props.elements)}</ul>
    </div>
  );
}
export default Navbar;
