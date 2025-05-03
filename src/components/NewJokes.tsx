import { Joke } from "./Joke.tsx";
import { useEffect } from "react";
import { useOutletContext } from "react-router";
import { useSaveJoke } from "./useSaveJoke.tsx";

export type JokeType = {
    type: string;
    setup: string;
    punchline: string;
    id: number;
    saved: boolean;
}

export type JokeOutletContext = {
    jokes: JokeType[];
    setJokes: React.Dispatch<React.SetStateAction<JokeType[]>>;
};

export const NewJokes = () => {
    const { jokes, setJokes } = useOutletContext<JokeOutletContext>();

    // get the jokes from the API and save them in jokes state
    const fetchJokes = async () => {
        try {
            const data = await fetch('https://official-joke-api.appspot.com/random_ten');

            if(!data.ok) {
                throw new Error('Did not receive a 200 response');
            }

            const json = await data.json();
            setJokes(json);

        } catch(error) {
            console.log(error)
        }
    }

    // get the jokes when the component is being rendered
    // only if we don't have jokes already
    useEffect(() => {
        if(jokes.length === 0) {
            fetchJokes();
        }
    },[])

    // update whether a joke is saved to library
    const { handleSave }  = useSaveJoke(setJokes);

    return (
        <>
            <div className={"flex flex-1 flex-col w-96 gap-4"}>
                { jokes.map(joke => (
                    <Joke key={joke.id} joke={joke} onSave={handleSave} />
                ))
                }
            </div>
            <div className="mt-6 mb-10">
                {/* Retrieve new jokes from API */}
                <button
                    className="rounded bg-amber-500 px-4 py-2 text-sm font-semibold text-white hover:bg-amber-700 transition-colors"
                    onClick={fetchJokes}>
                    Load New Jokes
                </button>
            </div>
        </>
    )
}