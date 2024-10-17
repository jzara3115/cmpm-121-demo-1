import "./style.css";

const app: HTMLDivElement = document.querySelector("#app")!;

let cookedNum: number = 0;
let cookRate: number = 1;
const upgradeCostGrowth: number = 1.15;

let upgradeOneCost: number = 10;
const upgradeOneRate: number = 1;

let upgradeTwoCost: number = 50;
const upgradeTwoRate: number = 5;

let upgradeThreeCost: number = 100;
const upgradeThreeRate: number = 10;

const gameName = "Flowers!!!";
document.title = gameName;

const header = document.createElement("h1");
header.innerHTML = gameName;
app.append(header);

const mybutton = document.createElement("button");
const counter = document.createElement("div");
const upgradeOne = document.createElement("button");
const upgradeTwo = document.createElement("button");
const upgradeThree = document.createElement("button");

mybutton.textContent = "🍪";

app.append(mybutton);
app.append(counter);
app.append(upgradeOne);
app.append(upgradeTwo);
app.append(upgradeThree);

upgradeOne.disabled = true;
upgradeTwo.disabled = true;
upgradeThree.disabled = true;

mybutton.addEventListener("click", () => {
  cookedNum++;
  console.log(cookedNum);
});

upgradeOne.addEventListener("click", () => {
  cookRate = cookRate + upgradeOneRate;
  cookedNum = cookedNum - upgradeOneCost;
  upgradeOneCost = upgradeOneCost * upgradeCostGrowth;
});

upgradeTwo.addEventListener("click", () => {
  cookRate = cookRate + upgradeTwoRate;
  cookedNum = cookedNum - upgradeTwoCost;
  upgradeTwoCost = upgradeTwoCost * upgradeCostGrowth;
});

upgradeThree.addEventListener("click", () => {
  cookRate = cookRate + upgradeThreeRate;
  cookedNum = cookedNum - upgradeThreeCost;
  upgradeThreeCost = upgradeThreeCost * upgradeCostGrowth;
});

function addRate() {
  cookedNum = cookRate + cookedNum;
}

setInterval(addRate, 1000);

function updateCounter() {
  counter.textContent = `Flowers Grown: ${Math.floor(cookedNum)}, Growth/s: ${cookRate}`;
  upgradeOne.textContent = `A bee, allows for one more picked /s: ${Math.floor(upgradeOneCost)}`;
  upgradeTwo.textContent = `Grandmother, She likes picking through the garden /s: ${Math.floor(upgradeTwoCost)}`;
  upgradeThree.textContent = `Botonist, needs these flowers to conduct her research /s: ${Math.floor(upgradeThreeCost)}`;

  if (cookedNum >= upgradeOneCost) {
    upgradeOne.disabled = false;
  } else {
    upgradeOne.disabled = true;
  }

  if (cookedNum >= upgradeTwoCost) {
    upgradeTwo.disabled = false;
  } else {
    upgradeTwo.disabled = true;
  }

  if (cookedNum >= upgradeThreeCost) {
    upgradeThree.disabled = false;
  } else {
    upgradeThree.disabled = true;
  }

  requestAnimationFrame(updateCounter);
}

updateCounter();

