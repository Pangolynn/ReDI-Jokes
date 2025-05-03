import {JokeType} from "./NewJokes.tsx";
import {useState} from "react";
import bookmark from "../assets/bookmark.svg";
import filledBookmark from "../assets/bookmarkFilled.svg";

type JokeProps = {
    joke: JokeType;
    onSave: (id: number) => void;
}
export const Joke = ({ joke, onSave }: JokeProps) => {
    const [show, setShow] = useState(false);
    // handle showing or hiding the joke punchline
    const handleShow = () => {
        setShow((prev) => !prev);
    }

    return (
        <div
            className="mx-auto flex flex-col sm:flex-row sm:justify-between sm:items-center w-96 min-h-64 rounded-sm bg-green-50 p-4 sm:p-6 shadow-lg outline outline-green-200 dark:bg-green-100 dark:shadow-none dark:-outline-offset-1 dark:outline-green-700">
            <div className="flex flex-col gap-y-2 h-full">
                <p className="italic font-roboto font-thin text-emerald-800 text-sm">{joke.type}</p>
                <h3 className="font-bold">{joke.setup}</h3>
                {show && <p className="text-sm">{joke.punchline}</p>}
                {!show && <p className="text-sm">...</p>}
                <button
                    className="w-50 mt-2 rounded bg-green-500 px-4 py-2 text-sm font-semibold text-white hover:bg-green-600 transition-colors"
                    onClick={handleShow}>
                    {show ? 'Hide' : 'Show'}
                </button>
            </div>
            <button
                onClick={() => onSave(joke.id)}
                className="mt-4 sm:mt-0 sm:ml-4 sm:mr-0"
                aria-label={joke.saved ? 'Remove from library' : 'Save joke to library'}>
                <img
                    className="w-8 h-8 sm:w-8 sm:h-10 mx-auto object-contain"
                    src={joke.saved ? filledBookmark : bookmark}
                    alt="Bookmark"
                />
            </button>
        </div>
    )
}