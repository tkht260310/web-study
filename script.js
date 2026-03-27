let state = 0;

function change() {
  const msg = document.getElementById("message");

  state = state + 1;
  if (state > 2) state = 0;

  if (state === 0) {
    msg.textContent = "未表示";
    msg.className = "state0";
  }

  if (state === 1) {
    msg.textContent = "こんにちは";
    msg.className = "state1";
  }

  if (state === 2) {
    msg.textContent = "こんばんは";
    msg.className = "state2";
  }
}

document.getElementById("btn").addEventListener("click", change);
