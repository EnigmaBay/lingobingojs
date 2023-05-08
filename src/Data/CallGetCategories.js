export default function CallGetCategories(token) {
  const apiServer = process.env.REACT_APP_API_SERVER;
  const endPoint = 'api/v1/categories';
  const uri = `${apiServer}${endPoint}`;
  console.log('callGetCategories assembled uri:', uri);

  fetch(uri, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  })
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      console.log('Get Categories data:', data);
    })
    .catch((error) => {
      console.error('Get Categories error: ', error);
    });
}
