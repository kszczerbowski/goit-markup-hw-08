const filtersArea = document.querySelector('ul.filters');
const products = document.querySelectorAll('li.products__product');
filtersArea.addEventListener("click", (event) => {
    if (event.target.nodeName !== "BUTTON") return;
    products.forEach(product => {
        product.classList.remove("displayNone");
        if (!product.classList.contains(event.target.textContent) && event.target.textContent !== "Wszystkie") {
            product.classList.add("displayNone");
        }
    })
})