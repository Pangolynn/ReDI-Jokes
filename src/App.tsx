import './App.css'
import {NewJokes} from "./components/NewJokes.tsx";
import {Link, Outlet} from "react-router";
import {Library} from "./components/Library.tsx";

function App() {
  return (
    <>
      <Outlet />
        <Link to="/" >New Jokes</Link>
        <Link to="/library">Library</Link>
    </>
  )
}

export default App
