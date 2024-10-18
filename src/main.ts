import "./style.css";

const app: HTMLDivElement = document.querySelector("#app")!;

let cookedNum: number = 0;
let cookRate: number = 1;
const upgradeCostGrowth: number = 1.15;

interface Item {
  name: string,
  cost: number,
  rate: number
};

const availableItems : Item[] = [
  {name: "A singular bee, pollinates and supports flower growth. + 1/s: ", cost: 10, rate: 1},
  {name: "Grandmother, she likes helping through the garden. + 5/s: ", cost: 50, rate: 5},
  {name: "Botonist, needs these flowers to conduct her research. + 10/s: ", cost: 100, rate: 10},
  {name: "Research Lab, focused on finding the optimal flower dna for faster growth. + 50/s: ", cost: 500, rate: 50},
  {name: "Arboretum, absolutely filled with flowers, growing its land for its sole purpose of flowers. + 100/s: ", cost: 1000, rate: 100},
];



const gameName = "Flowers!!!";
document.title = gameName;

const header = document.createElement("h1");
header.innerHTML = gameName;
app.append(header);

const mybutton = document.createElement("button");
const counter = document.createElement("div");

mybutton.textContent = "🌸";

app.append(mybutton);
app.append(counter);

mybutton.addEventListener("click", () => {
  cookedNum++;
  console.log(cookedNum);
});

function addRate() {
  cookedNum = cookRate + cookedNum;
}

setInterval(addRate, 1000);

for(let i:number = 0; i < availableItems.length; i++){
  const newButton = document.createElement("button");
  app.append(newButton);
  newButton.textContent = availableItems[i].name + `${Math.floor(availableItems[i].cost)}`;

  if (cookedNum < availableItems[i].cost){
    newButton.disabled = true;
  }

  newButton.addEventListener("click", () => {
    cookRate = cookRate + availableItems[i].rate;
    cookedNum = cookedNum - availableItems[i].cost;
    availableItems[i].cost = availableItems[i].cost * upgradeCostGrowth;
    newButton.textContent = availableItems[i].name + `${Math.floor(availableItems[i].cost)}`;
  });

  function updateButton(){
    if (cookedNum < availableItems[i].cost){
      newButton.disabled = true;
    } else {
      newButton.disabled = false;
    }

    requestAnimationFrame(updateButton);
  }

  updateButton();
}

function updateCounter() {
  counter.textContent = `Flowers Grown: ${Math.floor(cookedNum)}, Growth/s: ${cookRate}`;

  requestAnimationFrame(updateCounter);
}

updateCounter();
