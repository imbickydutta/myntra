const searchWrapper = document.querySelector(".search-div");
const inputBox = searchWrapper.querySelector("input");
const suggBox = document.querySelector(".autocom");

console.log(suggBox);


suggestions = [
    ["mens tshirts", "/type/tshirt"],
    ["womens tops", "/type/Top"],
    ["womens sarees", "/type/Saree"],
    ["womens sarees", "/type/Saree"],
    ["womens sarees", "/type/Saree"],
    ["womens sarees", "/type/Saree"],
    ["womens sarees", "/type/Saree"]
]

inputBox.onkeyup = (e) => {
    suggBox.style.display = "flex"
    let userData = e.target.value; //user enetered data
    let emptyArray = [];
    if (userData) {

        emptyArray = suggestions.filter((data) => {
            //filtering array value and user characters to lowercase and return only those words which start with user enetered chars
            return data[0].toLocaleLowerCase().startsWith(userData.toLocaleLowerCase());
        });
        emptyArray = emptyArray.map((data) => {
            // passing return data inside li tag
            return data = `<a class="ac-results" href="/products${data[1]}">${data[0]}</a>`;
        });
        showSuggestions(emptyArray);
    }

    function showSuggestions(list) {
        let listData;
        if (!list.length) {
            userValue = inputBox.value;
            listData = `<a>No Search Results</a>`;

        } else {
            listData = list.join('');
        }
        suggBox.innerHTML = listData;
    }
}