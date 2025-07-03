

// 1. Завдання
const input = document.getElementById("inputText");
const button = document.getElementById("changeBtn");
button.addEventListener("click", () => {
  button.textContent = input.value;
});

// 2. Завдання
const image = document.getElementById("mainImage");
image.src = "https://i0.web.de/image/836/40923836,pd=1/lamine-yamal.jpg";

// 3. Завдання
const linkImg = document.getElementById("linkImage");
const link = document.getElementById("customLink2");
link.href =
  "https://ss.sport-express.ru/userfiles/materials/207/2077795/volga.jpg";
linkImg.alt = "MDN Logo";

// 4. Завдання
const list = document.getElementById("myList");
const firstItem = list.querySelector("li");
firstItem.textContent = "Nazar";
