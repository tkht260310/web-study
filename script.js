let count = 0;
const minusButton = document.getElementById("minus");
const plusButton = document.getElementById("plus");

plusButton.addEventListener("click", function () {
  count++;
  document.getElementById("count").textContent = count;
});

minusButton.addEventListener("click", function () {
  if (count > 0) {
    count--;
    document.getElementById("count").textContent = count;
  }
});
