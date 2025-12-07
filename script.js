const quotes = [
    {text: "La vie est ce qui arrive quand on est occupé à faire d'autres projets.", author: "John Lennon"},
    {text: "Le succès n'est pas final, l'échec n'est pas fatal : c'est le courage de continuer qui compte.", author: "Winston Churchill"},
    {text: "Ne rêve pas ta vie, vis tes rêves.", author: "Anonyme"},
    {text: "Tout ce dont vous avez besoin est déjà en vous.", author: "Anonyme"},
    {text: "Fais de ta vie un rêve, et d'un rêve, une réalité.", author: "Antoine de Saint-Exupéry"},
    {text: "Croyez en vous et tout sera possible.", author: "Anonyme"},
];

const quoteText = document.getElementById('quote');
const quoteAuthor = document.getElementById('author');
const newQuoteBtn = document.getElementById('new-quote');

function generateQuote() {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    const randomQuote = quotes[randomIndex];
    quoteText.textContent = `"${randomQuote.text}"`;
    quoteAuthor.textContent = `- ${randomQuote.author}`;
}

newQuoteBtn.addEventListener('click', generateQuote);

generateQuote();
