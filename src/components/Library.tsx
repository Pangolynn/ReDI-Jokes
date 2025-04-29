import {JokeOutletContext} from "./NewJokes.tsx";
import {Joke} from "./Joke.tsx";
import { useOutletContext } from "react-router";

export const Library = () => {
    const { jokes, setJokes } = useOutletContext<JokeOutletContext>();
    const savedJokes = jokes.filter(joke => joke.saved);
    // update whether a joke is saved
    const handleSave = (id: number) => {
        setJokes((prevJokes) =>
            prevJokes.map((joke) =>
                joke.id === id ? { ...joke, saved: !joke.saved } : joke
            )
        );
    };

    return (
        <div className={"flex flex-1 flex-col w-96 h-60 gap-4"}>
            { savedJokes.map(joke => (
                <Joke key={joke.id} joke={joke} onSave={handleSave} />
            ))
            }
        </div>
    )
}
