const BASE_URL = 'https://31.javascript.htmlacademy.pro/kekstagram';

const route = {
  GET_DATA: '/data',
  SEND_DATA: '/',
};

const getData = () => fetch(
  `${BASE_URL}${route.GET_DATA}`)
  .then((response) => response.json());

const sendData = (body) => fetch(
  `${BASE_URL}${route.SEND_DATA}`,
  {
    method: 'POST',
    body,
  })
  .then((response) => {
    if (!response.ok) {
      throw new Error();
    }
  });

export { getData, sendData };

