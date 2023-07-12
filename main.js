const aboutList = document.querySelector(".about__list");
const productList = document.querySelector(".product__list");
const prevButton = document.getElementById("prevButton");
const nextButton = document.getElementById("nextButton");
const btnPaginator = document.querySelector(".btn_pag-item");

fetch("./items.json")
  .then((response) => response.json())
  .then((data) => {
    console.log(data);

    if (data) {
      data.forEach((item) => {
        const liElement = document.createElement("li");
        liElement.className = "about__list-item";
        liElement.innerHTML = `
    <img src="${item.image}" alt="Image ${item.id}">
    <h3>${item.title}</h3>
    <p>${item.text}</p>
  `;
        aboutList.appendChild(liElement);
      });
    }
  })
  .catch((error) => {
    console.error("Error:", error);
  });

fetch("./product.json")
  .then((response) => response.json())
  .then((data) => {
    items = data;
    updateSlider();
  })
  .catch((error) => {
    console.error("Error:", error);
  });
let currentIndex = 0;

function updateSlider() {
  productList.innerHTML = "";

  const activeItem = items[currentIndex];

  const liElement = document.createElement("li");
  liElement.className = "product__list-item";
  liElement.innerHTML = `
    <div>
      <h3>${activeItem.title}</h3>
      <p>${activeItem.text}</p>
    </div>
    <img src=" ${activeItem.image}" alt="Image ${activeItem.id}">
  `;

  productList.appendChild(liElement);
}

nextButton.addEventListener("click", () => {
  currentIndex++;

  if (currentIndex >= items.length) {
    currentIndex = 0;
  }

  updateSlider();
});

prevButton.addEventListener("click", () => {
  currentIndex--;

  if (currentIndex < 0) {
    currentIndex = items.length - 1;
  }

  updateSlider();
});

updateSlider();
