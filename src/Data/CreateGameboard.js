import React, { useEffect, useState } from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';

export default function CreateGameboard(props) {
  const [linkUrl, setLinkUrl] = useState('');

  useEffect(() => {
    let ignore = false;

    async function createNewGameboard() {
      if (!ignore) {
        const createGameboardUrl = `api/v1/gameboard/${props.category}/${props.encodedPayload}`;
        const config = {
          method: 'post',
          baseURL: process.env.REACT_APP_API_SERVER,
          url: createGameboardUrl,
          headers: {
            Authorization: `Bearer ${props.accessToken}`,
          },
        };

        axios(config)
          .then((response) => {
            console.log(
              'CreateGameboard got data from axios call',
              response.data
            );
            setLinkUrl(response.data.gameboardUri);
          })
          .catch((error) => {
            setLinkUrl('Error');
            console.error(error.name, error.message);
          });
      }
    }

    if (props.category) {
      createNewGameboard();
    }

    return () => {
      ignore = true;
    };
  }, [setLinkUrl, props.category, props.encodedPayload, props.accessToken]);

  if (!linkUrl) {
    return <div>Loading. . .</div>;
  }

  if (linkUrl.length > 0) {
    console.log(
      'CreateGameboard props:',
      props.encodedPayload,
      '(redacted access token)',
      props.category
    );
  }

  return <div>Share this web link with your attendees: {linkUrl}</div>;
}

CreateGameboard.propTypes = {
  category: PropTypes.string,
  encodedPayload: PropTypes.string,
  accessToken: PropTypes.string,
};
