const quoteContainer = document.getElementById('quote-container');
const button = document.getElementById('button');
const baseURL = 'https://api.adviceslip.com/advice';

button.addEventListener('click', () => {
  quoteContainer.insertAdjacentHTML('afterbegin', '<h1 id="advice-num">ADVICE #</h1><p id="quote">"Some random advice"</p>');
});
