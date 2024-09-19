const quoteWrapper = document.querySelector(".quote-wrapper");

function fetchRandomQuote() {
  fetch("https://api.quotable.io/random")
    .then((response) => response.json())
    .then((result) => displayQuote(result[0])) // Pass the fetched quote data
    .catch((e) => console.log(e));
}

function displayQuote(getQuote) {
  console.log(getQuote);
  quoteWrapper.innerHTML = `
        <div class="quote-item">
            <p>Author: ${getQuote.author}</p>
            <p>Quote: ${getQuote.content}</p>
            <p>Date Added: ${getQuote.dateAdded}</p>
            <p>Tags: ${getQuote.tags.join(
              ", "
            )}</p> <!-- Display tags properly -->
        </div>
    `;
}

fetchRandomQuote();
