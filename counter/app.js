const $ = document.querySelector.bind(document);
const store = window.localStorage;

let counter = parseInt(store.getItem("counter")) || 0;
$(".counter").textContent = counter;

function change(currentValue, changeValue) {
  let newValue = currentValue + changeValue;
  $(".counter").textContent = newValue;
  store.setItem("counter", newValue);
  return newValue;
}

$(".btn-decrease").onclick = () => {
  counter = change(counter, -1);
};

$(".btn-increase").onclick = () => {
  counter = change(counter, +1);
};
