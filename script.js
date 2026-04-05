const btn = document.getElementById("submit-btn");
btn.addEventListner("click", function () {
  const input = document.getElementById("text-input");
  const text = document.getElementById("text-input").value;
  const output = document.getElementById("output");

  output.textContent = text;
});
