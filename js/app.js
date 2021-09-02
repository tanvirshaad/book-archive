const displayMessage = document.getElementById('display-message');
// getting searched text
const searchBook = () => {
    const searchBox = document.getElementById('search-box');
    const searchText = searchBox.value;
    searchBox.value = '';
    if (searchText === '') {
        displayMessage.innerText = 'Please write something to get result';
    } else {
        displayMessage.innerText = '';
        const url = `http://openlibrary.org/search.json?q=${searchText}`;
        fetch(url)
            .then((res) => res.json())
            .then((data) => displayBooks(data));
    }
};
//displaying books and result
const displayBooks = (data) => {
    const searchResult = document.getElementById('search-result');
    if (data.numFound === 0) {
        displayMessage.innerText = 'No result found';
    } else {
        //getting result number
        const resultNum = document.getElementById('result-number');
        resultNum.innerHTML = `${data.numFound} Result Found`;
        //displaying books
        searchResult.textContent = '';
        const books = data.docs;
        books.forEach((book) => {
            const div = document.createElement('div');
            div.classList.add('col');
            div.innerHTML = `
                <div class="card">
                    <img src= "https://covers.openlibrary.org/b/id/${book.cover_i}-M.jpg" class="card-img-top" alt="...">
                    <div class="card-body">
                        <h5 class="card-title">${book.title}</h5>
                        <p class="card-text">
                            <h5>Author Name: <span class="fst-italic fw-normal">${book.author_name}</span></h6>
                            <h6>Publisher: <span class="fw-normal">${book.publisher[0]}</span></h6>
                            <small class="text-muted">First Publish: ${book.first_publish_year}</small>
                        </p>
                    </div>
                </div>
            `;
            searchResult.appendChild(div);
        });
    }
};
