function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const input = document.querySelector("input");
const create = document.querySelector("[data-create]");
const destroy = document.querySelector("[data-destroy]");
const boxes = document.querySelector("#boxes");

input.classList.add("input-task-six");
create.classList.add("create-btn");
destroy.classList.add("destroy-btn");

const createBoxes = (amount) => {
  boxes.innerHTML = "";

  const divArr = [];
  let width = 30;

  for (let i = 0; i < amount; i++) {
    const div = document.createElement("div");

    div.style.backgroundColor = getRandomHexColor();
    div.style.width = `${width}px`;
    div.style.height = `${width}px`;
    width += 10;

    divArr.push(div);
  }

  boxes.append(...divArr);
};

const createFunk = (e) => {
  const inputValue = Number(input.value);
  if (inputValue <= 100 && inputValue >= 1) {
    createBoxes(inputValue);
  }
};

function destroyFunk() {
  boxes.innerHTML = "";
  // boxes.remove()
}

create.addEventListener("click", createFunk);
destroy.addEventListener("click", destroyFunk);