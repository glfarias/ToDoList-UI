function addNewTask() {
    const newTask = document.getElementById("new-task-input");
    const ul = document.querySelector(".tasks");

    trimmedTask = newTask.value.trim();
    const newTaskCapitalized = trimmedTask.charAt(0).toUpperCase() + trimmedTask.slice(1);

    ul.innerHTML +=
    `
    <li class="task">
        <ion-icon class="task-delete" name="trash-outline"></ion-icon>
        <p class="task-description">${newTaskCapitalized}</p>
    </li>
    `;

    console.log(newTaskCapitalized.split(" "));
    console.log(newTaskCapitalized.split(" ").join(" "));
    console.log(newTaskCapitalized);
    newTask.value = "";
    newTask.focus();
}