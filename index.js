var btn = document.getElementById("button");
var icons = document.querySelectorAll(
  ".icon-box .icon .material-symbols-outlined"
);

function translate() {
  document.getElementById("changeContents").innerText = "Korean";
}

function brighten() {
  btn.style.filter = "brightness(1.2)";
}

function dark() {
  btn.style.filter = "brightness(1)";
}

btn.addEventListener("click", translate);
btn.addEventListener("mouseenter", brighten);
btn.addEventListener("mouseleave", dark);

for (let i = 0; i < icons.length; i++) {
  icons[i].addEventListener("mouseover", function () {
    icons[i].style.color = "rgb(86, 194, 86)";
  });

  icons[i].addEventListener("mouseleave", function () {
    icons[i].style.color = "black";
  });
}
