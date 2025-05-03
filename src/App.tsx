import './App.css'
import { Link, Outlet } from "react-router";
import { useState} from "react";
import { JokeType } from "./components/NewJokes.tsx";

function App() {
    // state for our list of fetched jokes
    const [jokes, setJokes] = useState<JokeType[]>([]);

    return (
    <div className={"flex flex-col items-center font-comfortaa"}>
        <div className={"flex items-center gap-4 my-8"}>
            <Link className={"px-4 py-2 bg-amber-500 text-white rounded hover:bg-amber-700 inline-block"} to="/" >Jokes</Link>
            <Link className={"px-4 py-2 bg-amber-500 text-white rounded hover:bg-amber-700 inline-block"} to="/library">Library</Link>
        </div>
      <Outlet context={{ jokes, setJokes }}/>
    </div>
  )
}

export default App
