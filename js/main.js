const chooseColor = document.querySelectorAll(".choose__color-button");
const contentItem = document.querySelectorAll(".content-item");

chooseColor.forEach(function (element) {
  element.addEventListener("click", open);
});

function open(e) {
  const target = e.currentTarget;
  const button = target.dataset.button;
  const contentActive = document.querySelectorAll(`.${button}`);

  chooseColor.forEach(function (item) {
    item.classList.remove("choose__color-button--active");
  });

  target.classList.add("choose__color-button--active");

  contentItem.forEach(function (item) {
    item.classList.remove("content-item__active");
  });

  contentActive.forEach(function (item) {
    item.classList.add("content-item__active");
  });
}
