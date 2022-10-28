const auto = document.querySelector("#auto");
x = 0;
setInterval(() => {
  if (x < 330) {
    x++;
    auto.style.left = x + "px";
    auto.style.top = "283px";
  }
}, 5);
setInterval(() => {
  if (x >= 330 && x < 333) {
    auto.style.top = "329px";
    auto.style.left = x + "px";
    auto.style.transform = "rotate(40deg)";
    x++;
  }
}, 250);
setInterval(() => {
  if (x >= 333 && x < 590) {
    auto.style.top = "380px";
    auto.style.left = x + "px";
    auto.style.transform = "rotate(0deg)";
    x++;
  }
}, 2);

setInterval(() => {
  if (x >= 590 && x < 594) {
    auto.style.top = "300px";
    x = x + 1;
    auto.style.transform = "rotate(-40deg)";
    auto.style.left = x + "px";
  }
}, 100);
setInterval(() => {
  if (x >= 594 && x < 1000) {
    auto.style.top = "283px";
    x = x + 1;
    auto.style.transform = "rotate(0deg)";
    auto.style.left = x + "px";
  }
  if (x == 900) {
    auto.style.visibility = "hidden";
  }
  if (x == 990) {
    x = -290;
  }

  if (x == 0) {
    auto.style.visibility = "visible";
  }
}, 5);
