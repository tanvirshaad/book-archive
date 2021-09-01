const searchBook = () => {
    const searchBox = document.getElementById('search-box');
    const searchText = searchBox.value;
    // console.log(searchText);
    const url = `http://openlibrary.org/search.json?q=${searchText}`;
    fetch(url)
        .then((res) => res.json())
        .then((data) => console.log(data));
};
