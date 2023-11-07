import { useState, useEffect } from 'react'
import { Button } from 'react-native'
import Joke from './Joke'
import Punchline from './Punchline'

export default function JokesList() {
  const [jokes, setJokes] = useState()
  const [currentJoke, setCurrentJoke] = useState(0)

  useEffect(() => {
    fetch('https://api.sampleapis.com/jokes/goodJokes')
      .then(res => res.json())
      .then(setJokes)
      .catch(alert)
      .finally(shuffleJokes)
  }, [])

  const shuffleJokes = () => {
    const j = Math.floor(Math.random() * jokes.length)
    setCurrentJoke(j)
  }

  return (
    <>
      <Joke
        joke={!jokes ? 'Loading...' : jokes[currentJoke].setup} />
      <Punchline
        punchline={jokes && jokes[currentJoke].punchline} />
      <Button onPress={shuffleJokes} title='Next Joke' />
    </>
  )
}
