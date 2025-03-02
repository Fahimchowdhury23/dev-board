const discover = document.getElementById("discover");
if (discover) {
  discover.addEventListener("click", function (e) {
    e.preventDefault();
    window.location.href = "./blog.html";
  });
}

const btnBack = document.getElementById("back-btn");
if (btnBack) {
  btnBack.addEventListener("click", function (e) {
    e.preventDefault();
    window.history.back();
  });
}

const currentDate = new Date();

const formattedDate = currentDate.toLocaleDateString("en-US", {
  weekday: "long",
  year: "numeric",
  month: "long",
  day: "numeric",
});

document.getElementById("date").innerText = formattedDate;

const formattedTime = currentDate.toLocaleTimeString("en-US", {
  hour: "2-digit",
  minute: "2-digit",
  second: "2-digit",
});

function getRandomColor() {
  const r = Math.floor(Math.random() * 256);
  const g = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);
  return `rgb(${r}, ${g}, ${b})`;
}

const changeTheme = document.getElementById("change-theme-box");
changeTheme.addEventListener("click", function () {
  document.body.style.backgroundColor = getRandomColor();
});

const CompletedBtns = document.querySelectorAll(".completed-btn");
const TaskNum = document.getElementById("task-number");
const navNum = document.getElementById("nav-number");
const activity = document.getElementById("activity");

let clickBtns = 0;
const totalClickBtns = CompletedBtns.length;

for (const button of CompletedBtns) {
  button.addEventListener("click", function (e) {
    e.preventDefault();
    alert("Board Completed Successfully!");

    let newTaskName = parseInt(TaskNum.innerText) - 1;
    TaskNum.innerText = newTaskName;

    let newNavNumber = parseInt(navNum.innerText) + 1;
    navNum.innerText = newNavNumber;

    button.setAttribute("disabled", true);

    const div = document.createElement("div");
    div.innerHTML = `<p class="mt-3 rounded-xl m-4 p-2 bg-[rgb(244,247,255)]"> You have Complete The Task Add Dark Mode at ${formattedTime}</p>`;

    activity.appendChild(div);

    clickBtns++;

    if (clickBtns === totalClickBtns) {
      alert("Congrats!! You have been completed all the current tasks.");
    }
  });
}

document
  .getElementById("clear-history-btn")
  .addEventListener("click", function () {
    activity.innerText = "";
  });
