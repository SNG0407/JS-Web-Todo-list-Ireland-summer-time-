const todoClick1 = document.querySelector("#todoClick1");
const todoList = document.querySelector(".todoList");
const Botton_ON = "fa-chevron-circle-right",
    Botton_OFF = "fa-chevron-circle-left";
const tl = new TimelineMax();

function openTodo(){
    if (todoClick1.classList.contains(Botton_ON)){
        todoClick1.classList.remove(Botton_ON);
        todoClick1.classList.add(Botton_OFF);
        todoList.classList.remove("off"); 
        tl.fromTo(todoList, 1, {x:"-300px"}, {x:"0%"});
        //열어라
    }else {
        todoClick1.classList.remove(Botton_OFF);
        todoClick1.classList.add(Botton_ON);
        // todoList.classList.add("off");
        tl.fromTo(todoList, 1, {x:"0%"}, {x:"-300px"});
        //닫아라
    }
}

function initBtn() {
    todoClick1.addEventListener("click", openTodo);
}
initBtn();

/////////////////////Todo 내부////////////////////////////////

const form = document.querySelector(".todoForm"),
input = document.querySelector("#input"),
clear = document.querySelector(".clear"),
deteElement = document.querySelector("#date"),
list = document.querySelector(".listTodo");

const TODOS_LS = 'toDos';


const CHECKED = "fa-check-circle",
    UNCHECKED = "fa-circle-thin",
    LINE_THROUGH = "lineThrough"

let LIST = [],
    id = 0;

const options = {weekday : "long", month:"short", day:"numeric"};
const today = new Date();
deteElement.innerHTML = today.toLocaleDateString("en-US", options);

function saveToDos(){
    localStorage.setItem(TODOS_LS, JSON.stringify(LIST));
}

function addTodo(toDo, id, done, trash){
    if(trash){return;};
    const Done = done ? CHECKED : UNCHECKED;
    const LINE = done ? LINE_THROUGH : "";
    const text = `<li class="todo-li"> 
                    <i class="fa ${Done} co" job ="complete" id="${id}"></i>
                    <p class="text ${LINE}"> ${toDo}</p>
                    <i class="fas fa-minus-circle de" job ="delete" id="${id}"></i>
                </li>`;
                
    list.insertAdjacentHTML("beforeend", text); 
    // const position = "beforeend";
    LIST.push({
        name: toDo,
        id : id,
        done: false,
        trash : false
    })
    saveToDos();
    id++;
}

function handleSubmit(event){
    event.preventDefault();
    const toDo = input.value;
    addTodo(toDo, id, false, false);
    

    input.value ="";
    
}

function completeTodo(element){
    element.classList.toggle(CHECKED);
    element.classList.toggle(UNCHECKED);
    element.parentNode.querySelector(".text").classList.toggle(LINE_THROUGH);

    LIST[element.id].done = LIST[element.id].done ? false : true;
    
}

function removeTodo(element){
    element.parentNode.parentNode.removeChild(element.parentNode);
    LIST[element.id].trash = true;

}

function jobTodo(event){
    const element = event.target;
    const elementJob = element.attributes.job.value;

    if(elementJob == "complete"){
        completeTodo(element);
    } else if(elementJob == "delete"){
        removeTodo(element);
    }
    saveToDos();
}

function loadTodos(){
    const loadedTodos = localStorage.getItem(TODOS_LS);
    if(loadedTodos !== null){
        // console.log(loadedTodos);
        const parsedTodos = JSON.parse(loadedTodos);
        parsedTodos.forEach(function(toDo){
            addTodo(toDo.name, toDo.id, toDo.done, toDo.trash);
        });
    } else {
        LIST = [];
        id = 0; 
    }
    saveToDos();
}


function initTodo(){
    loadTodos();
    form.addEventListener("submit", handleSubmit);
    list.addEventListener("click", jobTodo);
}

initTodo();











