export default function CallApiAuthorize(token) {
  const apiServer = process.env.REACT_APP_API_SERVER;
  const endPoint = 'api/v1/authorize';
  const uri = `${apiServer}${endPoint}`;
  console.log('callApiAuthorize assembled uri, token:', uri, token);

  fetch(uri, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  })
    .then((response) => {
      console.log('callApiAuthorize response is:', response);
      return response.json();
    })
    .then((data) => {
      console.log('Get Authorization data:', data);
    })
    .catch((error) => {
      console.error('Get Authorization error: ', error);
    });
}
