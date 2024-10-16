import "./style.css";

const app: HTMLDivElement = document.querySelector("#app")!;

let cookedNum: number = 0;
let cookRate: number = 1;

const upgradeOneCost: number = 10;

const gameName = "Flowers!!!";
document.title = gameName;

const header = document.createElement("h1");
header.innerHTML = gameName;
app.append(header);

const mybutton = document.createElement("button");
const counter = document.createElement("div");
const upgradeOne = document.createElement("button");

mybutton.textContent = "🍪";
counter.textContent = `Flowers Grown: ${cookedNum}`;
upgradeOne.textContent = `A bee, allows for one more picked /s: ${upgradeOneCost}`;

app.append(mybutton);
app.append(counter);
app.append(upgradeOne);

upgradeOne.disabled = true;

mybutton.addEventListener("click", () => {
  cookedNum++;
  console.log(cookedNum);
});

upgradeOne.addEventListener("click", () => {
    cookRate++;
    cookedNum = cookedNum - upgradeOneCost;
  });

function addRate() {
  cookedNum = cookRate + cookedNum;
}

setInterval(addRate, 1000);

function updateCounter() {
  counter.textContent = `Cookies Baked: ${cookedNum}`;

  if(cookedNum >= upgradeOneCost){
    upgradeOne.disabled = false;
} else {
    upgradeOne.disabled = true;
}

  requestAnimationFrame(updateCounter);
}

updateCounter();
