
const quoteElement = document.getElementById('quote')
const authorElement = document.getElementById('author')
const generateBtn = document.getElementById('generate-btn')


const quotes = [
  {
    text: "Be the change that you wish to see in the world.",
    author: "Mahatma Gandhi",
    isFavorite: false,
  },
  {
    text: "The only limit to our realization of tomorrow is our doubts of today.",
    author: "Franklin D. Roosevelt",
    isFavorite: false,
  },
  {
    text: "Success is not final, failure is not fatal: It is the courage to continue that counts.",
    author: "Winston Churchill",
    isFavorite: false,
  },
  {
    text: "In the middle of every difficulty lies opportunity.",
    author: "Albert Einstein",
    isFavorite: false,
  },
  {
    text: "Do not wait to strike till the iron is hot; but make it hot by striking.",
    author: "William Butler Yeats",
    isFavorite: false,
  },
  {
    text: "Your time is limited, don’t waste it living someone else’s life.",
    author: "Steve Jobs",
    isFavorite: false,
  },
  {
    text: "Life is what happens when you’re busy making other plans.",
    author: "John Lennon",
    isFavorite: false,
  },
  {
    text: "The purpose of our lives is to be happy.",
    author: "Dalai Lama",
    isFavorite: false,
  },
  {
    text: "It is never too late to be what you might have been.",
    author: "George Eliot",
    isFavorite: false,
  },
  {
    text: "Happiness is not something ready made. It comes from your own actions.",
    author: "Dalai Lama",
    isFavorite: false,
  },
  {
    text: "You only live once, but if you do it right, once is enough.",
    author: "Mae West",
    isFavorite: false,
  },
  {
    text: "The best way to predict the future is to create it.",
    author: "Peter Drucker",
    isFavorite: false,
  },
  {
    text: "The only impossible journey is the one you never begin.",
    author: "Tony Robbins",
    isFavorite: false,
  },
  {
    text: "It does not matter how slowly you go as long as you do not stop.",
    author: "Confucius",
    isFavorite: false,
  },
  {
    text: "If you want to lift yourself up, lift up someone else.",
    author: "Booker T. Washington",
    isFavorite: false,
  },
  {
    text: "What lies behind us and what lies before us are tiny matters compared to what lies within us.",
    author: "Ralph Waldo Emerson",
    isFavorite: false,
  },
  {
    text: "I have not failed. I’ve just found 10,000 ways that won’t work.",
    author: "Thomas A. Edison",
    isFavorite: false,
  },
  {
    text: "Act as if what you do makes a difference. It does.",
    author: "William James",
    isFavorite: false,
  },
  {
    text: "Do what you can with all you have, wherever you are.",
    author: "Theodore Roosevelt",
    isFavorite: false,
  },
  {
    text: "Dream big and dare to fail.",
    author: "Norman Vaughan",
    isFavorite: false,
  },
];

console.log(quotes[0]);







function generateRandomQuote  () {
  const randomIndex = Math.floor(Math.random() * quotes.length)
  const randomQuote = quotes[randomIndex]

  
  quoteElement.innerHTML = randomQuote.text
  authorElement.innerHTML = randomQuote.author
  console.log(quoteElement);
  

}

generateBtn.addEventListener('click', generateRandomQuote)

// generateRandomQuote()