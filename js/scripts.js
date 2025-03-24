// Basic search functionality
const articles = document.querySelectorAll('article');
const searchInput = document.getElementById('search-input');
const searchBtn = document.getElementById('search-btn');

searchBtn.addEventListener('click', () => {
  const searchValue = searchInput.value.toLowerCase();
  articles.forEach((article) => {
    const content = article.innerText.toLowerCase();
    if (content.includes(searchValue)) {
      article.style.display = 'block';
    } else {
      article.style.display = 'none';
    }
  });
});

// Word bank pop-up definitions
const wordDefinitions = {
  儒家: "Confucianism: A philosophical and ethical system emphasizing morality and social harmony.",
  法家: "Legalism: A school of thought advocating strict laws and governance.",
  道家: "Daoism: A philosophy emphasizing harmony with the Dao, the natural order of the universe."
};

// Handle word click event
document.querySelectorAll('.word').forEach((word) => {
  word.addEventListener('click', (e) => {
    const wordKey = e.target.dataset.word;
    showPopup(wordKey, wordDefinitions[wordKey]);
  });
});

// Display pop-up
function showPopup(title, content) {
  const popup = document.createElement('div');
  popup.classList.add('popup');
  popup.innerHTML = `
    <div class="popup-content">
      <h3>${title}</h3>
      <p>${content}</p>
      <button id="closePopup">Close</button>
    </div>
  `;
  document.body.appendChild(popup);

  // Close button event
  document.getElementById('closePopup').addEventListener('click', () => {
    popup.remove();
  });
}
