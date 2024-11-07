import { useEffect, useState } from "react"
import { Character, getCharacters } from "../functions/get-characters"

interface CharacterListProps {
    status: string | undefined
    gender: string | undefined
}

const CharacterList: React.FC<CharacterListProps> = ({ status, gender }) => {

    const [characters, setCharacters] = useState<Character[]>([])
    const [loading, setLoading] = useState<boolean>(false)
    const [error, setError] = useState<string | null>(null)

    const fetchCharacters = async () => {
        setLoading(true)
        setError(null)
        setCharacters([])

        try {
            const data = await getCharacters(status, gender)
            setCharacters(data)
        } catch (error) {
            setError('An error occurred while fetching the characters.')
        } finally {
            setLoading(false)
        }
    }

    useEffect(() => {
        fetchCharacters()
    }, [status, gender])


    return (
        <div className="text-center">
            {loading && <p className="text-xl text-gray-500">Loading...</p>}
            {error && <p className="text-red-500 text-lg">{error}</p>}

            {characters.length > 0 ? (
                <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                    {characters.map((character: any) => (
                        <li
                            key={character.id}
                            className="bg-white rounded-lg shadow-lg overflow-hidden p-4 hover:shadow-xl transition-shadow duration-200"
                        >
                            <img
                                src={character.image}
                                alt={character.name}
                                className="w-full h-64 object-cover mb-4 rounded-md"
                            />
                            <div className="text-center">
                                <h3 className="text-xl font-medium text-gray-800">{character.name}</h3>
                                <p className="text-gray-600">{character.status} - {character.gender}</p>
                            </div>
                        </li>
                    ))}
                </ul>
            ) :
                !loading ?
                    (
                        <p className="text-xl text-gray-500">No characters found.</p>
                    ) : <></>}
        </div>
    );

}

export default CharacterList