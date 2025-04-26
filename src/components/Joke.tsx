import {JokeType} from "./NewJokes.tsx";
import {useState} from "react";

type JokeProps = {
    joke: JokeType;
}
export const Joke = ({ joke }: JokeProps) => {
    const [show, setShow] = useState(false);

    const handleShow = () => {
        setShow((prev) => !prev);
    }

    return (
        <>
            <h3>{joke.type}</h3>
            <h1>{joke.setup}</h1>
            <button onClick={handleShow}>{ show ? 'Show' : 'Hide' }</button>
            { show && <p>{joke.punchline}</p> }
            <button>Save</button>
        </>
    )
}