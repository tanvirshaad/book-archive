const searchBook = () => {
    const searchBox = document.getElementById('search-box');
    const searchText = searchBox.value;
    // console.log(searchText);
    const url = `http://openlibrary.org/search.json?q=${searchText}`;
    fetch(url)
        .then((res) => res.json())
        .then((data) => displayBooks(data.docs));
};
const displayBooks = (books) => {
    console.log(books);
    const searchResult = document.getElementById('search-result');
    books.forEach((book) => {
        const div = document.createElement('div');
        div.classList.add('col');
        div.innerHTML = `
            <div class="card">
                <img src= "https://covers.openlibrary.org/b/id/${book.cover_i}-M.jpg" class="card-img-top" alt="...">
                <div class="card-body">
                    <h5 class="card-title">${book.title}</h5>
                    <p class="card-text">
                        <h6>Author Name: <span class="fst-italic fw-normal">${book.author_name}</span></h6>
                        <h6>Publisher: <span class="fw-normal">${book.publisher[0]}</span></h6>
                        <small class="text-muted">First Publish: ${book.first_publish_year}</small>
                    </p>
                </div>
            </div>
        `;
        searchResult.appendChild(div);
    });
};
