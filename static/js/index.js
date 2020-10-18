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
            if (xhttp.responseText == "true") {
                alert("Book Saved");
                document.getElementById("book_name").value = "";
                document.getElementById("book_price").value = "";
                document.getElementById("book_pages").value = "";
            }
        }
    };
    xhttp.open("GET", url, true);
    xhttp.send();
}

function showAllBooks() {
    var xhttp = new XMLHttpRequest();

    url = "/getAllBooks";

    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            var booksList = eval(xhttp.responseText);
            var div = document.getElementById("showBooksDiv");
            div.innerHTML = "";

            var table = document.createElement("table");

            var row = table.insertRow(0);
            var name = row.insertCell(0);
            var price = row.insertCell(1);
            var pages = row.insertCell(2);

            name.innerHTML = "Name";
            price.innerHTML = "Price";
            pages.innerHTML = "Number of Pages";

            for (var i = 0; i < booksList.length; i++) {
                var row = table.insertRow(i + 1);
                var name = row.insertCell(0);
                var price = row.insertCell(1);
                var pages = row.insertCell(2);

                name.innerHTML = booksList[i].name;
                price.innerHTML = booksList[i].price;
                pages.innerHTML = booksList[i].pages;
            }
            div.appendChild(table);
            table.className = "table text-center table-striped";
        }
    };
    xhttp.open("GET", url, true);
    xhttp.send();
}
