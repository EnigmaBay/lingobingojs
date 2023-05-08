import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';

export default function AddWords(props) {
  const [response, setResponse] = useState(null);

  useEffect(() => {
    let ignore = false;

    async function addWords() {
      if (!ignore) {
        console.log(
          'AddWords received props.category, props.words',
          props.category,
          props.words
        );
        const addWordsUrl = `api/v1/words/${props.encodedPayload}`;
        const config = {
          method: 'post',
          baseURL: process.env.REACT_APP_API_SERVER,
          url: addWordsUrl,
          headers: {
            Authorization: `Bearer ${props.accessToken}`,
          },
          data: {
            category: props.category,
            words: props.words,
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

    if (props.words && props.category) {
      addWords();
    }

    return () => {
      ignore = true;
    };
  }, [setResponse, props]);

  if (!response) {
    return <div>Loading. . .</div>;
  } else {
    console.log('AddWords response:', response);
  }

  return <div>{response}</div>;
}

AddWords.propTypes = {
  category: PropTypes.string,
  words: PropTypes.string,
  encodedPayload: PropTypes.string,
  accessToken: PropTypes.string,
};
