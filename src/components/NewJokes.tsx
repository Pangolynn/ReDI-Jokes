import {Joke} from "./Joke.tsx";
import {useEffect} from "react";
import {useOutletContext} from "react-router";

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
    useEffect(() => {
        fetchJokes();
    },[])

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
            { jokes.map(joke => (
                <Joke key={joke.id} joke={joke} onSave={handleSave} />
            ))
            }
        </div>
    )
}