import "./style.css";

const app: HTMLDivElement = document.querySelector("#app")!;

let cookedNum: number = 0;
const cookRate: number = 1;

const gameName = "Flowers!!!";
document.title = gameName;

const header = document.createElement("h1");
header.innerHTML = gameName;
app.append(header);

const mybutton = document.createElement("button");
const counter = document.createElement("div");

mybutton.textContent = "🍪";
counter.textContent = `Cookies Baked: ${cookedNum}`;

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

function updateCounter() {
  counter.textContent = `Cookies Baked: ${cookedNum}`;
  requestAnimationFrame(updateCounter);
}

updateCounter();
