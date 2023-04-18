import React, { useEffect, useState } from 'react';
import axios from 'axios';

export default function FetchWords(props) {
  const [words, setWords] = useState(null);

  useEffect(() => {
    let ignore = false;

    async function fetchWords() {
      if (!ignore) {
        const getWordsUrl = `api/v1/words/${props.category}/${props.encodedPayload}`;
        const config = {
          method: 'get',
          baseURL: process.env.REACT_APP_API_SERVER,
          url: getWordsUrl,
          headers: {
            Authorization: `Bearer ${props.accessToken}`,
          },
        };

        axios(config)
          .then((response) => {
            console.log('got data from axios call', response.data);
            setWords(response.data);
          })
          .catch((error) => {
            setWords(['Error']);
            console.error(error.name, error.message);
          });
      }
    }

    if (props.category) {
      fetchWords();
    }

    return () => {
      ignore = true;
    };
  }, [setWords, props.category, props.encodedPayload, props.accessToken]);

  if (!words) {
    return <div>Loading. . .</div>;
  }

  console.log('fetchWords props:', props.encodedPayload, props.accessToken);
  if (words) {
    console.log('fetchWords fetched these words', words);
  }

  return (
    <ul>
      {words.wordList.map((word, idx) => {
        return <li key={idx}>{word}</li>;
      })}
    </ul>
  );
}
