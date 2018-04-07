var label = document.querySelector(".search-input-label"),
    button = document.querySelector(".search-button"),
    input = document.querySelector(".search-input"),
    body = document.querySelector("body");

label.addEventListener("click", function() {
  label.classList.add("active");
});

button.addEventListener("click", function() {
  input.classList.toggle("input-opened");
  label.classList.toggle("input-label-opened");
});
