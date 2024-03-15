const todoInput = document.getElementById("todo-input");




todoInput.addEventListener("keypress", (e) => {
    if(e.key === "Enter") {
        e.preventDefault();
        const todo = e.target.value;
        const todoList = document.getElementById("todo-list");
        const listItem = document.createElement("li");
        const removal = document.createElement("span");
        removal.classList.add("todo-list__removal");
        listItem.classList.add("todo-list__item");
        removal.innerText = "Ⅹ";
        listItem.innerText = todo;
        todoList.append(listItem);
        listItem.append(removal);
        e.target.value = "";
        const listArr = document.querySelectorAll("li")
        console.log(listArr)
        const removalButtonArr = document.querySelectorAll("span")
        console.log(removalButtonArr)
        for(let i = 0; i < listArr.length; i++) {
            removalButtonArr[i].addEventListener("click", (e) => {
                listArr[i].remove();
            })

            listArr[i].addEventListener("click", () => {
                listArr[i].classList.add("after-click")
            })
        }
    }
})