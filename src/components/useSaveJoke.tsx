import { useCallback } from "react";
import { JokeType } from "./NewJokes.tsx";

// custom hook to save/unsave a joke
export const useSaveJoke = (
    setJokes: React.Dispatch<React.SetStateAction<JokeType[]>>
) => {
    const handleSave = useCallback((id: number) => {
       setJokes(prev =>
        prev.map(joke => joke.id === id ? { ...joke, saved: !joke.saved } : joke)
       );
    }, [setJokes]);

    return { handleSave };
}