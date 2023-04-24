import React, { useEffect, useState } from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';

export default function AddWord(props) {
  const [response, setResponse] = useState(null);

  useEffect(() => {
    let ignore = false;

    async function addWord() {
      if (!ignore) {
        const addWordUrl = `api/v1/word/${props.encodedPayload}`;
        const config = {
          method: 'post',
          baseURL: process.env.REACT_APP_API_SERVER,
          url: addWordUrl,
          headers: {
            Authorization: `Bearer ${props.accessToken}`,
          },
          data: {
            category: props.category,
            word: props.newWord,
          },
        };

        axios(config)
          .then((apiResponse) => {
            console.log(
              'got status, data from axios call',
              apiResponse.status,
              apiResponse.data
            );
            setResponse(apiResponse.data);
          })
          .catch((error) => {
            setResponse(error.name);
            console.error(error.name, error.message);
          });
      }
    }

    if (props.word && props.category) {
      addWord();
    }

    return () => {
      ignore = true;
    };
  }, [setResponse, props]);

  if (!response) {
    return <div>Loading. . .</div>;
  } else {
    console.log('AddWord response:', response);
  }

  return <div>{response}</div>;
}

AddWords.PropTypes = {
  encodedPayload: PropTypes.string,
  accessToken: PropTypes.string,
  category: PropTypes.string,
  newWord: PropTypes.string,
  word: PropTypes.string,
};
