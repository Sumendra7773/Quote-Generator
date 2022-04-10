const quoteContainer = document.getElementById('quote-container');
const quotText = document.getElementById('quote');
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
	authorText.textContent = `- ${quote.author}`;
	quotText.textContent = quote.text;
	console.log(quotes.length);
}

newQuoteBtn.addEventListener('click', newQuote);
