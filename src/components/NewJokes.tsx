import {Joke} from "./Joke.tsx";
import {useEffect, useState} from "react";

export type JokeType = {
    type: string;
    setup: string;
    punchline: string;
    id: number;
}

export const NewJokes = () => {
    const [jokes, setJokes] = useState<JokeType[]>([]);

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

    useEffect(() => {
        fetchJokes();
    },[])

    return (
        <>
            { jokes.map(joke => (
                <Joke key={joke.id} joke={joke}/>
            ))
            }
        </>
    )
}