import React, { useState, useEffect } from "react";
import "./App.css";
import "./resources/images/fondoLab.png";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";

/*<div className="App">
      <header className="App-header">
        <img src={loadingBottle} className="App-logo" alt="logo" />
        <p>IGEM TEC CEM</p>
        <ExpenseItem />
      </header>
    </div>*/

//const activityCollectionReference = collection(db, "Activities");

// Your web app's Firebase configuration

function App() {
  /*
  const [activities, setActivities] = useState([]);

  useEffect(() => {
    const getActivities = async () => {
      const data = await getDocs(activityCollectionReference);
      setActivities(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
      console.log(data);
    };
    getActivities();
  }, []);

  const addActivityHandler = (activity) => {
    setActivities((prevActivities) => {
      return [activity, ...prevActivities];
    });
  };


  /*return (
    <div className="labBg">
      <NewActivity onAddActivity={addActivityHandler} />
      <Activities items={activities} />
    </div>
  );*/

  const navbarOptions = [
    "Home",
    "Project",
    "Laboratory",
    "Social Impact",
    "Team",
    "Awards",
  ];

  return (
    <div className="labBg">
      <div className="NavBar">
        <NavBar elements={navbarOptions}></NavBar>
      </div>

      <div className="Footer">
        <Footer></Footer>
      </div>
    </div>
  );
}

export default App;
