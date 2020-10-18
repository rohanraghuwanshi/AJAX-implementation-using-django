window.onload = initAll;

function initAll() {
    saveBookButton = document.getElementById("save_book");
    saveBookButton.onclick = saveBook;
}

function saveBook() {
    var name = document.getElementById("book_name").value;
    var price = document.getElementById("book_price").value;
    var pages = document.getElementById("book_pages").value;

    var url = "/save-book?name=" + name + "&price=" + price + "&pages=" + pages;

    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            document.getElementById("demo").innerHTML = this.responseText;
        }
    };
    xhttp.open("GET", url, true);
    xhttp.send();
}
