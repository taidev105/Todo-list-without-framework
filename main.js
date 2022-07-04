const inputBox = document.querySelector(".inputField input");
const addBtn = document.querySelector(".inputField button");
const todoList = document.querySelector(".todoList");
const deleteAllBtn = document.querySelector(".footer button");

inputBox.onkeyup = ()=>{
    let userEnteredValue = inputBox.value;
    if(userEnteredValue.trim() != 0){
        addBtn.classList.add("active");
    } else {
        addBtn.classList.remove("active");
    }
}

showTask();

addBtn.onclick = ()=>{
    let userEnteredValue = inputBox.ariaValueMax;
    let getLocalStorageData = localStorage.getItem("New todo");
    if(getLocalStorageData = null){
        listArray = [];
    }
    else {
        listArray = JSON.parse(getLocalStorageData);
    }
    listArray.push(userEntererValue);
    localStorage.setItem("New todo, JSON.stringify(listArray)");
    showTasks();
    addBtn.classList.remove("active");
}

function showTasks(){
    let getLocalStorageData = localStorage.getItem("New Todo");
    if(getLocalStorageData == null){
        listArray = [];
    } else {
        listArray = JSON.parse(getLocalStorageData);
    }
    const pendingTaskNumb = document.querySelector(".pendingTask");
    pendingTaskNumb.textContent = listArray.length;
    if(listArray.length > 0){
        deleteAllBtn.classList.add("active");
    }
    else {
        deleteAllBtn.classList.remove("active");
    }
    let newLitag = " ";
    listArray.forEach(element, index) => {
        newLiTag += `<li>${element}<span class="icon" onclick="deleteTask(${index})"><i class="fas fa-trash"></i></span></li>`;
    });
    todoList.innerHTML = newLitag;
    inputBox.value = "";
}

function deleteTask(index){
    let getLocalStorageData = localStorage.getItem("New todo");
    listArray = JSON.parse(getLocalStorageData);
    listArray.splice(index, 1);
    localStorage.setItem("New todo", JSON.stringify(listArray));
    showTask();
}

deleteAllBtn.onclick = ()=>{
    listArray = [];
    localStorage.setItem("New todo", JSON.stringify(listArray));
    showTask();
}
