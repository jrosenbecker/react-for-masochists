import { FC, useState } from 'react';
import randomWords from 'random-words';

export const RandomWords: FC = () => {
  let [words, setWords] = useState<string[]>([]);

  const addWord = () => {
    const newWord = randomWords(1)[0];
    words.push(newWord);
    setWords(words);
    console.log(`Adding word: ${newWord}`)
  }

  const clearWords = () => {
    setWords([]);
    console.log('Cleared words');
  }

  return (
    <div className="flex flex-col flex-small-gap rounded bg-red p4">
      <div className="m2">
        <strong>RandomWords - Incorrect</strong>
      </div>
      {words.length ? (
        <ul>
        {words.map((word, index) => (
          <li key={`failure-word-${index}`}>{word}</li>
        ))}
        </ul>
      ) : (
        <div>No words generated yet...</div>
      )}
     
      <button onClick={addWord}>Add random word</button>
      <button onClick={clearWords}>Clear</button>
    </div>
  )
}