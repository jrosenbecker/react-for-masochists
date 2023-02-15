import { FC, useState } from 'react';
import randomWords from 'random-words';

export const RandomWords: FC = () => {
  let [words, setWords] = useState<string[]>([]);

  const addWord = () => {
    // This adds the new word to the array directly. This will update the words array, HOWEVER,
    // the object reference of words did NOT change. React doesn't know that this component needs to update.
    const newWord = randomWords(1)[0];
    words.push(newWord);
    console.log(`Adding word: ${newWord}`)
  }

  const addWordWithSetState = () => {
    const newWord = randomWords(1)[0];
    setWords([...words, newWord])
    console.log(`Adding word: ${newWord}`)
  }

  const clearWords = () => {
    setWords([]);
    console.log('Cleared words');
  }

  return (
    <div className="flex flex-col flex-small-gap rounded bg-green p4">
      {words.length ? (
        <ul>
        {words.map((word, index) => (
          <li key={`word-${index}`}>{word}</li>
        ))}
        </ul>
      ) : (
        <div>No words generated yet...</div>
      )}
     
      <button onClick={addWord}>Add word without set state</button>
      <button onClick={addWordWithSetState}>Add word with set state</button>
      <button onClick={clearWords}>Clear</button>
    </div>
  )
}