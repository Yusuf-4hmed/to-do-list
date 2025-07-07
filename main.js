const toDoInput = document.getElementById('to-do-input');
const addButton = document.getElementById('add-button');
const toDoListContainer = document.getElementById('to-do-list-container')

const addToDo = () => {
    toDoListContainer.innerHTML += `<li class="to-do"><p>${toDoInput.value}</p> <p class="delete">x</p></li>`;
    toDoInput.value = '';
    saveToDo()
}

addButton.addEventListener('click', addToDo)

toDoListContainer.addEventListener('click', (e) => {
        if (e.target.classList.contains('delete')){
           e.target.parentElement.remove() 
        }
        saveToDo()
    });

saveToDo = () => {
   localStorage.setItem('toDoData', toDoListContainer.innerHTML) 
} 

loadToDo = () => {
    toDoListContainer.innerHTML = localStorage.getItem('toDoData')
}

loadToDo()

