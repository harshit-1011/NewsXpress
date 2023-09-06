
let articlesperPage;
let totalPages;
let query = window.location.search.split("?")[1].split("&")[0].split("=")[1];
let page = parseInt(window.location.search.split("?")[1].split("&")[1].split("=")[1]);
console.log(query, page)

const fetchNews = async (query, pageno) => {
      let a = await fetch(`https://newsapi.org/v2/everything?q=${query}&apiKey=3a8da01219134ed0a9aa8d4d307c4419&pageSize=10&page=${pageno}`)
      let r = await a.json()
      console.log(r);
      queryText.innerHTML = query.replace("+"," ");
      queryResults.innerHTML = r.totalResults;
      totalPages = Math.ceil(r.totalResults / articlesperPage);
      pre.href = `/?q=${query}&pageno=${page - 1}`;
      next.href = `/?q=${query}&pageno=${page + 1}`;
      let str = ""
      for (let item of r.articles) {
            str = str + `
            <div class="card m-2" style="width: 16rem">
        <img src="${item.urlToImage}" class="card-img-top" alt="..." />
        <div class="card-body">
          <h5 class="card-title">${item.title}</h5>
          <span class="fw-bold">Published : ${item.publishedAt} </span>
          <p class="card-text">${item.description}</p>
          <a target="_blank" href="${item.url}" class="btn btn-primary">Read more...</a>
        </div>
      </div>
     
            `
            content.innerHTML = str;
      }
}
fetchNews(query, page)
