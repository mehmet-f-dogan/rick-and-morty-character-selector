"use client"

import { useState } from "react"
import CharacterList from "./components/character-list"

export default function Home() {
  const [status, setStatus] = useState<string | undefined>('')
  const [gender, setGender] = useState<string | undefined>('')

  return (
    <div className="bg-white max-w-4xl mx-auto p-6">
      <h1 className="text-3xl font-semibold text-center text-gray-800 mb-6">Character Selector</h1>

      <div className="flex justify-center gap-8 mb-6 text-black">
        <div className="flex flex-col items-center">
          <label htmlFor="status" className="mb-2 text-lg font-medium text-gray-700">
            Status
          </label>
          <select
            id="status"
            value={status || ''}
            onChange={(e) => setStatus(e.target.value || undefined)}
            className="w-64 p-2 border border-gray-300 rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="">Any Status</option>
            <option value="alive">Alive</option>
            <option value="dead">Dead</option>
            <option value="unknown">Unknown</option>
          </select>
        </div>

        <div className="flex flex-col items-center">
          <label htmlFor="gender" className="mb-2 text-lg font-medium text-gray-700">
            Gender
          </label>
          <select
            id="gender"
            value={gender || ''}
            onChange={(e) => setGender(e.target.value || undefined)}
            className="w-64 p-2 border border-gray-300 rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="">Any Gender</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="genderless">Genderless</option>
            <option value="unknown">Unknown</option>
          </select>
        </div>
      </div>

      <CharacterList status={status} gender={gender}/>

    </div>
  );
}
