let bList = [];
let elem = document.body.style.backgroundColor = "pink"

function addBook() {
    let newBook = document.querySelector("#books");
    let val = newBook.value;
    console.log(val);
    bList.push(val);
}
function dispList() {
    let myBookList = document.querySelectorAll(".disp");
    myBookList[0].innerHTML = "<ul>";
    for (let product of bList) {
        myBookList[0].innerHTML +=
        '<li id="' +
        product +
        '" onClick = "markBook(' +
        product +
        ')">' +
        product +
        "</li>";
    }
    myBookList[0].innerHTML += "</ul>";

}
function markBook(listItem) {



        listItem.style.textDecoration = "line-through";

}
