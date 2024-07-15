const ham = document.getElementById("ham");
const cross = document.getElementById("cross");
const nav = document.querySelector("nav ul");
const searchbox = document.querySelector(".search-box");

function mobilenav() {
  ham.addEventListener("click", function () {
    if (nav.style.display === "none") {
      nav.style.display = "flex";
      searchbox.style.display = "flex"; // Add searchbox toggle (optional)
    } else {
      nav.style.display = "none";
      searchbox.style.display = "none"; // Add searchbox toggle (optional)
    }
  });
}

window.onload = () => {
  mobilenav();
  fetchNews("india"); // Initial fetch
  // searchnews('politics')
};



const politics = document.getElementById('politics')

politics.addEventListener('click', function () {
 politicsnews()
})

async function politicsnews() {

  const response = await fetch(`https://newsapi.org/v2/everything?q=politics
&language=en&from=2024-06-15&sortBy=publishedAt&apiKey=f02f5566c1c94f8889f319cc0d2ee958`);
  const data = await response.json();
  const articles = data.articles;


  const main = document.querySelector('main');


  main.innerHTML = '';

  articles.forEach(news => {
    let content = document.createElement('div');
    content.classList.add('newscard');

    let newsImage = news.urlToImage ? `<img decoding="async" src="${news.urlToImage}" alt="news-image" id="news-img">` : '';

    content.innerHTML = `
      <div class="card-header">
        ${newsImage}
      </div>
      <div class="card-content">
        <h3><a href="${news.url || ''}" id="news-title">${news.title}</a></h3>
        <h6 class="news-source" id="news-source">${news.source.name || "Unknown Source"}</h6>
        <p class="news-desc" id="news-desc">${news.description ? news.description.substring(0, 150) + "..." : ""}</p>
        <h5 class="news-date" id="news-date">${news.publishedAt || ""}</h5>
      </div>
    `;

    main.appendChild(content);
  });
}




const technology = document.getElementById('technology')

technology.addEventListener('click', function () {

  technologynews()

  async function technologynews() {

    const response = await fetch(`https://newsapi.org/v2/everything?q=technology
  &from=2024-06-15&sortBy=publishedAt&apiKey=f02f5566c1c94f8889f319cc0d2ee958`);
    const data = await response.json();
    const articles = data.articles;
    console.log(articles)

    const main = document.querySelector('main');


    main.innerHTML = '';

    articles.forEach(news => {
      let content = document.createElement('div');
      content.classList.add('newscard');

      let newsImage = news.urlToImage ? `<img decoding="async" src="${news.urlToImage}" alt="news-image" id="news-img">` : '';

      content.innerHTML = `
        <div class="card-header">
          ${newsImage}
        </div>
        <div class="card-content">
          <h3><a href="${news.url || ''}" id="news-title">${news.title}</a></h3>
          <h6 class="news-source" id="news-source">${news.source.name || "Unknown Source"}</h6>
          <p class="news-desc" id="news-desc">${news.description ? news.description.substring(0, 150) + "..." : ""}</p>
          <h5 class="news-date" id="news-date">${news.publishedAt || ""}</h5>
        </div>
      `;

      main.appendChild(content);
    });
  }



})

const cricket = document.getElementById('cricket')

cricket.addEventListener('click', function () {

cricketnews()
  async function cricketnews() {

    const response = await fetch(`https://newsapi.org/v2/everything?q=cricket
  &language=en&sortBy=publishedAt&apiKey=f02f5566c1c94f8889f319cc0d2ee958`);
    const data = await response.json();
    const articles = data.articles;
    console.log(articles)

    const main = document.querySelector('main');


    main.innerHTML = '';

    articles.forEach(news => {
      let content = document.createElement('div');
      content.classList.add('newscard');

      let newsImage = news.urlToImage ? `<img decoding="async" src="${news.urlToImage}" alt="news-image" id="news-img">` : '';

      content.innerHTML = `
        <div class="card-header">
          ${newsImage}
        </div>
        <div class="card-content">
          <h3><a href="${news.url || ''}" id="news-title">${news.title}</a></h3>
          <h6 class="news-source" id="news-source">${news.source.name || "Unknown Source"}</h6>
          <p class="news-desc" id="news-desc">${news.description ? news.description.substring(0, 150) + "..." : ""}</p>
          <h5 class="news-date" id="news-date">${news.publishedAt || ""}</h5>
        </div>
      `;

      main.appendChild(content);
    });
  }



})


const search = document.getElementById('Searchinput');

search.addEventListener('keypress', function (event) {
  if (event.keyCode === 13) {
    const searchValue = search.value;
    searchnews(searchValue)

  }
});

async function searchnews(searchValue) {
  // Validate search input (optional)
  if (!searchValue.trim()) {
    console.warn("Please enter a search term.");
    return; // Exit the function if search term is empty
  }

  const response = await fetch(`https://newsapi.org/v2/everything?q=${searchValue}&language=en
&from=2024-06-15&sortBy=publishedAt&apiKey=f02f5566c1c94f8889f319cc0d2ee958`);
  const data = await response.json();
  const articles = data.articles;
  console.log(articles)

  const main = document.querySelector('main');

  // Clear existing content before adding new articles (optional)
  main.innerHTML = ''; // Uncomment if you want to clear previous results

  articles.forEach(news => {
    let content = document.createElement('div');
    content.classList.add('newscard');

    let newsImage = news.urlToImage ? `<img decoding="async" src="${news.urlToImage}" alt="news-image" id="news-img">` : '';

    content.innerHTML = `
      <div class="card-header">
        ${newsImage}
      </div>
      <div class="card-content">
        <h3><a href="${news.url || ''}" id="news-title">${news.title}</a></h3>
        <h6 class="news-source" id="news-source">${news.source.name || "Unknown Source"}</h6>
        <p class="news-desc" id="news-desc">${news.description ? news.description.substring(0, 150) + "..." : ""}</p>
        <h5 class="news-date" id="news-date">${news.publishedAt || ""}</h5>
      </div>
    `;

    main.appendChild(content);
  });
}











async function fetchNews(quary) {
  const response = await fetch(`https://newsapi.org/v2/everything?q=${quary}&from=2024-06-15&sortBy=publishedAt&apiKey=f02f5566c1c94f8889f319cc0d2ee958`)
  const data = await response.json();
  const articles = data.articles;

  articles.forEach(news => {
    let content = document.createElement('div');
    content.classList.add('newscard');

    let newsImage = news.urlToImage ? `<img decoding="async" src="${news.urlToImage}" alt="news-image" id="news-img">` : '';

    content.innerHTML = `
      <div class="card-header">
        ${newsImage}
      </div>
      <div class="card-content">
        <h3><a href="${news.url || ''}" id="news-title">${news.title}</a></h3>
        <h6 class="news-source" id="news-source">${news.source.name || "Unknown Source"}</h6>
        <p class="news-desc" id="news-desc">${news.description ? news.description.substring(0, 150) + "..." : ""}</p>
        <h5 class="news-date" id="news-date">${news.publishedAt || ""}</h5>
      </div>
    `;

    document.querySelector('main').appendChild(content);
  });


};






