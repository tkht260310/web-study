function changeMessage() {
  var message = document.getElementById("message");

  if (message.textContent === "未表示") {
    message.textContent = "こんにちは";
    message.className = "on";
  } else {
    message.textContent = "未表示";
    message.className = "off";
  }
}

var button = document.getElementById("toggleButton");
button.addEventListener("click", changeMessage);
