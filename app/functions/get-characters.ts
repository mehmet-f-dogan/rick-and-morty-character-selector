"use server"

export interface Character {
    name: string
    status: string
    species: string
    gender: string
    image: string
}

export async function getCharacters(status?: string, gender?: string) : Promise<Character[]> {

    let url = 'https://rickandmortyapi.com/api/character/?'

    const queryParams: string[] = []

    if (status) {
        queryParams.push(`status=${status}`)
    }

    if (gender) {
        queryParams.push(`gender=${gender}`)
    }

    if (queryParams.length > 0) {
        url += queryParams.join('&')
    }

    const response = await fetch(url, {cache: "force-cache"})

    if (response.ok) {
        return (await response.json()).results
    }

    return []

}