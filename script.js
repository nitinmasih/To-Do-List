const input = document.querySelector(".inputBox input");
const addBtn = document.querySelector(".inputBox button");
const listContainer = document.querySelector(".ul");

addBtn.addEventListener("click", () => {
  if (input.value === "") {
    alert("write something to add");
  } else {
    let li = document.createElement("li");
    li.innerHTML = input.value;
    listContainer.appendChild(li);
    let span = document.createElement("span");
    li.appendChild(span);
    span.innerHTML = "x";
    saveData()
  }
  input.value = "";
});

listContainer.addEventListener("click", (e) => {
  if (e.target.tagName === "LI") {
    e.target.classList.add("checked");
    saveData();
  } else if (e.target.tagName === "SPAN") {
    e.target.parentElement.remove();
    saveData();
  }
});

saveData = () => {
  localStorage.setItem("data", listContainer.innerHTML);
};
showTask = () => {
  listContainer.innerHTML = localStorage.getItem("data");
};
showTask();
