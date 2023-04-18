import React, { useEffect, useState } from 'react';
import axios from 'axios';

export default function FetchCategories(props) {
  const [categories, setCategories] = useState(null);

  useEffect(() => {
    let ignore = false;

    async function fetchCategories() {
      if (!ignore) {
        // configure axios request
        const getCategoriesUrl = `api/v1/categories/${props.encodedPayload}`;
        const config = {
          method: 'get',
          baseURL: process.env.REACT_APP_API_SERVER,
          url: getCategoriesUrl,
          headers: {
            Authorization: `Bearer ${props.accessToken}`,
          },
        };

        // call api using configured axios instance but catch any error
        axios(config)
          .then((response) => {
            console.log('got data from axios call', response.data);
            setCategories(response.data);
          })
          .catch((error) => {
            setCategories(['Error']);
            // log error for debugging
            console.error(error.name, error.message);
          });
      }
    }

    fetchCategories();

    return () => {
      ignore = true;
    };
  }, [setCategories, props.encodedPayload, props.accessToken]);

  if (!categories) {
    return <div>Loading. . .</div>;
  }

  console.log(
    'fetchCategories props:',
    props.encodedPayload,
    props.accessToken
  );

  return (
    <ul>
      {categories.map((category, idx) => {
        return <li key={idx}>{category}</li>;
      })}
    </ul>
  );
}
