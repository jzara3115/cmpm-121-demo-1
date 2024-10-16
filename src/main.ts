import "./style.css";

const app: HTMLDivElement = document.querySelector("#app")!;

const gameName = "BARELY STARTING?!?!?!";
document.title = gameName;

const header = document.createElement("h1");
header.innerHTML = gameName;
app.append(header);

const mybutton = document.createElement("button");
mybutton.textContent = "🍪";

mybutton.addEventListener("click", () => {
  //console.log('Button was clicked!');
});

app.append(mybutton);
