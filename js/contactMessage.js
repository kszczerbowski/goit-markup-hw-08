const contactLink = document.querySelector("a#contact");
contactLink.addEventListener("click", (event) => {
    event.preventDefault();
    event.target.blur();
    window.alert("Strona w budowie. Przepraszamy za niedogodności!");
})