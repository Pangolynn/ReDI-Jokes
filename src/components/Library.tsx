import { JokeOutletContext } from "./NewJokes.tsx";
import { Joke } from "./Joke.tsx";
import { useOutletContext } from "react-router";
import { useSaveJoke } from "./useSaveJoke.tsx";

export const Library = () => {
    const { jokes, setJokes } = useOutletContext<JokeOutletContext>();
    // only display saved jokes
    const savedJokes = jokes.filter(joke => joke.saved);

    // update whether a joke is saved to library
    const { handleSave }  = useSaveJoke(setJokes);

    return (
        <div className={"flex flex-1 flex-col w-96 h-60 gap-4"}>
            { savedJokes.map(joke => (
                <Joke key={joke.id} joke={joke} onSave={handleSave} />
            ))
            }
        </div>
    )
}
