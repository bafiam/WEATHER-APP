const apiKey = '621a2461eb1625ba23f9dbc6e5977943';

const fetchUrl = (cityName) => {
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}&units=metric`;
  return url;
};

const makeRequest = async url => {
  const response = await fetch(url);
  if (response.ok) {
    return response;
  }
  // eslint-disable-next-line prefer-promise-reject-errors
  return Promise.reject({ error: 'That is not a invalid city name' });
};

const fetchData = async (url) => {
  try {
    const response = await makeRequest(url);
    return response.json();
  } catch (error) {
    return error;
  }
};

export { fetchUrl, fetchData };
