import "./style.css";

const app: HTMLDivElement = document.querySelector("#app")!;

let cookedNum: number = 0;

const gameName = "BARELY STARTING?!?!?!";
document.title = gameName;

const header = document.createElement("h1");
header.innerHTML = gameName;
app.append(header);

const mybutton = document.createElement("button");
const counter = document.createElement("div");
mybutton.textContent = "🍪";

mybutton.addEventListener("click", () => {
  cookedNum++;
  console.log(cookedNum);
  counter.innerHTML = "Cookies baked: " + cookedNum;
});

app.append(mybutton);
app.append(counter);