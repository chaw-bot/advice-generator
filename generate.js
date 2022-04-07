import axios from 'https://cdn.skypack.dev/axios';

const baseURL = 'https://api.adviceslip.com/advice';

const getRandomAdvice = async () => {
  const response = await axios.get(baseURL);
  const randomQuote = response.data.slip;
  return randomQuote;
};

const quoteContainer = document.getElementById('container');
const button = document.getElementById('button');

getRandomAdvice().then((adviceInfo) => {
  const htmlText = `<div id="quote-container">
                      <h1 id="advice-num">ADVICE # ${adviceInfo.id}</h1>
                      <p id="quote">"${adviceInfo.advice}"</p>
                      <img src="images/pattern-divider-mobile.svg" alt="rated svg" class="image" />
                    </div>
                  <button type="button" id="button"><img src="images/icon-dice.svg" alt="rated svg" class="icon" /></button>`;

  quoteContainer.innerHTML = htmlText;
});
