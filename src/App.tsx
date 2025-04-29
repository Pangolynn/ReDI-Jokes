import './App.css'
import {Link, Outlet} from "react-router";
import { useState} from "react";

function App() {
    const [jokes, setJokes] = useState([]);

    return (
    <div className={"flex flex-col items-center font-comfortaa"}>
        <div className={"flex items-center"}>
            <Link to="/" >New Jokes</Link>
            <Link to="/library">Library</Link>
        </div>
      <Outlet context={{ jokes, setJokes }}/>

    </div>
  )
}

export default App
