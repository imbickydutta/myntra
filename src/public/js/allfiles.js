function sort() {
  let menu = document.getElementById("type");
  menu.addEventListener("change", generateData);

  function generateData(event) {
    if (menu.value == "1") {
      window.location.href = `http://localhost:3000/products/sorthtol/tshirt/`;
    } else if (menu.value == "2") {
      window.location.href = `http://localhost:3000/products/sortltoh/tshirt/`;
    } else if (menu.value == "3") {
      window.location.href = `http://localhost:3000/products/sort/tshirt/`;
    } else if (menu.value == "4") {
      window.location.href = `http://localhost:3000/products/type/tshirt/`;
    }
  }
}
sort();

function filter(x) {

  window.location.href = `http://localhost:3000/products/type/tshirt/${x}`;

}

function priceFilter(x, y) {
  window.location.href = `http://localhost:3000/products/price/${x}/${y}/tshirt/`;


}

function colorFilter(x) {
  window.location.href = `http://localhost:3000/products/color/${x}/tshirt/`;
}

function nextPage(id) {
  window.location.href = `http://localhost:3000/moda/${id}`
}