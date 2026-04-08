const btn = document.getElementById("btn");
btn.addEventListener("click", function () {
  const input = document.getElementById("input").value;
  const output = document.getElementById("output");
  output.textContent = input;
});
