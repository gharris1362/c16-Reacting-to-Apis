import React, { useState, useEffect } from "react";
import Films from './components/Films'
import People from './components/People'
import Ghiblifield from './assets/garfield.png'

const App = () => {
  let [filmsLoaded, setFilmsLoaded] = useState(false);
  let [peopleLoaded, setPeopleLoaded] = useState(false);

  let showFilms = () => {
    setPeopleLoaded(false);
    setFilmsLoaded(true);
  };

  let showPeople = () => {
    setFilmsLoaded(false);
    setPeopleLoaded(true);
  };

  if (filmsLoaded == true) {
    return (
      <>
              <img src={Ghiblifield} alt="garfield"  style={{height: "300px", width: '100%'}}/>
        <div className='d-flex justify-content-center align-items-center m-4 flex-column'>
          <h1>Welcome To Ghibli API Lab</h1>
          <div>
          <button className="btn btn-primary m-4" onClick={showFilms}>
            Films
          </button>
          <button className="btn btn-primary m-4" onClick={showPeople}>
            People
          </button>
        </div>
        </div>
        <div className="container d-flex flex-column justify-content-center align-items-center">
        <Films/>
        </div>
      </>
    );
  } else if (peopleLoaded == true) {
    return (
      <>
          <img src={Ghiblifield} alt="garfield"  style={{height: "300px", width: '100%'}}/>
        <div className='d-flex justify-content-center align-items-center m-4 flex-column'>
          <h1>Welcome To Ghibli API Lab</h1>
          <div>
          <button className="btn btn-primary m-4" onClick={showFilms}>
            Films
          </button>
          <button className="btn btn-primary m-4" onClick={showPeople}>
            People
          </button>
        </div>
        </div> 
        <div className="container d-flex flex-column justify-content-center align-items-center">
        <People/>
        </div>
      </>
    );
  } else {
    return (
      <>
        <img src={Ghiblifield} alt="garfield"  style={{height: "300px", width: '100%'}}/>
        <div className='d-flex justify-content-center align-items-center m-4 flex-column'>
          <h1>Welcome To Ghibli API Lab</h1>
          <div>
          <button className="btn btn-primary m-4" onClick={showFilms}>
            Films
          </button>
          <button className="btn btn-primary m-4" onClick={showPeople}>
            People
          </button>
        </div>
        <h1>This is the Home Page</h1> 
        </div>

      </>
    );
  }
};

export default App;
