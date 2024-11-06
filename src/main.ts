import "./style.css";

const app: HTMLDivElement = document.querySelector("#app")!;
app.style.backgroundColor = "lightblue";

let cookedNum: number = 0;
let cookRate: number = 0;
const upgradeCostGrowth: number = 1.1;

interface Item {
  name: string;
  cost: number;
  rate: number;
}

const availableItems: Item[] = [
  {
    name: "A singular bee, pollinates and supports flower growth. + 1/s: ",
    cost: 10,
    rate: 100,
  },
  {
    name: "Grandmother, she likes helping through the garden. + 5/s: ",
    cost: 50,
    rate: 5,
  },
  {
    name: "Botonist, needs these flowers to conduct her research. + 10/s: ",
    cost: 100,
    rate: 10,
  },
  {
    name: "Research Lab, focused on finding the optimal flower dna for faster growth. + 50/s: ",
    cost: 500,
    rate: 50,
  },
  {
    name: "Arboretum, absolutely filled with flowers, growing its land for its sole purpose of flowers. + 100/s: ",
    cost: 1000,
    rate: 100,
  },
];

const gameName = "Flowers!!!";
document.title = gameName;

const header = document.createElement("h1");
header.innerHTML = gameName;
app.append(header);

const myButton = document.createElement("button");
const counter = document.createElement("div");

myButton.textContent = "🌸";

app.append(myButton);
app.append(counter);

myButton.addEventListener("click", () => {
  cookedNum++;
  console.log(cookedNum);
  updateCounter();
  addFlower();
});

function addRate() {
  cookedNum = cookRate + cookedNum;
  updateCounter();
  addFlower();
}

const updateInterval = 1000;
const disabled = true;
const enabled = false;

function updateButtonState(button: HTMLButtonElement, condition: boolean) {
  button.disabled = condition ? disabled : enabled;
}

function handleButtonClick(index: number, button: HTMLButtonElement) {
  cookRate = cookRate + availableItems[index].rate;
  cookedNum = cookedNum - availableItems[index].cost;
  availableItems[index].cost = availableItems[index].cost * upgradeCostGrowth;
  button.textContent =
    availableItems[index].name + `${Math.floor(availableItems[index].cost)}`;
}

function updateButton(index: number, button: HTMLButtonElement) {
  updateButtonState(button, cookedNum < availableItems[index].cost);
  requestAnimationFrame(() => updateButton(index, button));
}

setInterval(addRate, updateInterval);

for (let i = 0; i < availableItems.length; i++) {
  const newButton = document.createElement("button");
  app.append(newButton);
  newButton.textContent =
    availableItems[i].name + `${Math.floor(availableItems[i].cost)}`;

  if (cookedNum < availableItems[i].cost) {
    newButton.disabled = true;
  }

  newButton.addEventListener("click", () => handleButtonClick(i, newButton));

  updateButton(i, newButton);
}

function updateCounter() {
  counter.textContent = `Flowers Grown: ${Math.floor(cookedNum)}, Growth/s: ${cookRate}`;

  requestAnimationFrame(updateCounter);
}

function addFlower() {
  const flowerCount = Math.floor(cookedNum / 10);
  const existingFlowers = document.querySelectorAll('.flower').length;
  const flowerSize = 20;
  const maxWidth = window.innerWidth;

  if (flowerCount > existingFlowers) {
    const flower = document.createElement("div");
    flower.textContent = "🌸";
    flower.className = 'flower';
    flower.style.position = "absolute";
    flower.style.bottom = `${Math.floor(existingFlowers * flowerSize / maxWidth) * flowerSize}px`;
    flower.style.left = `${(existingFlowers * flowerSize) % maxWidth}px`;
    app.append(flower);
  }
}

updateCounter();
