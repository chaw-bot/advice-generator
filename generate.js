import axios from 'https://cdn.skypack.dev/axios';

const baseURL = 'https://api.adviceslip.com/advice';

const getRandomAdvice = async () => {
  const response = await axios.get(baseURL);
  const randomQuote = response.data.slip;
  console.log(`Random quote: ${randomQuote}`);
  return randomQuote;
};

getRandomAdvice();

