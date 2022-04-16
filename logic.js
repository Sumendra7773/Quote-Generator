// @ts-check

'use strict';
const quoteContainer = document.getElementById('quote-container');
const quoteText = document.getElementById('quote');
const authorText = document.getElementById('author');
const twitterBtn = document.getElementById('twitter');
const newQuoteBtn = document.getElementById('new-quote');

let quotes = [];

//get Quotes from API
async function getQuotes() {
	const apiUrl = 'https://type.fit/api/quotes';
	try {
		const response = await fetch(apiUrl);
		quotes = await response.json();
		newQuote();
	} catch (error) {
		// catch error Here
		console.log(error);
	}
}
// on load
getQuotes();

// show New Quote
function newQuote() {
	// pick a random quote from apiQuery array
	const quote = quotes[Math.floor(Math.random() * quotes.length)];
	// Check if Author field is blank and replace it with 'Maurya jii'
	if (!quote.author) authorText.textContent = '- Maurya jii';
	else authorText.textContent = `- ${quote.author}`;

	// Check Quote length to determine styling
	if (quote.text.Length > 50) quoteText.classList.add('long-quote');
	else quoteText.classList.remove('long-quote');
	// Set Quote, Hide Loader
	quoteText.textContent = quote.text;
	console.log(quote);
}

newQuoteBtn.addEventListener('click', newQuote);

// Tweet Quote
function tweetQuote() {
	const twitterUrl = `https://twitter.com/intent/tweet?text=${quoteText.textContent}%20%0A%20%20%20%20%20%20%20%20%20 ${authorText.textContent}`;
	window.open(twitterUrl, '_blank');
}

// Event Listeners
newQuoteBtn.addEventListener('click', newQuote);
twitterBtn.addEventListener('click', tweetQuote);
