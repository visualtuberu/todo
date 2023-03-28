const newTask = document.querySelector('.newTask'),
	newTaskBtn = document.querySelector('.addTaskBtn'),
	todosWrapper = document.querySelector('.todos-wrapper');

newTaskBtn.disabled = true;
newTaskBtn.addEventListener('click', () => {
	addNewTask();
  reCountTasks();

})

newTask.addEventListener('input', (event)=>{
  
  if (newTask.value.trim() != '') newTaskBtn.disabled = false;
  else newTaskBtn.disabled = true;
})


todosWrapper.addEventListener('click', (event) => {

	if (event.target.classList.contains('del')) {
		event.target.closest('.todo-item').remove();
		reCountTasks();
	}
	if (event.target.classList.contains('done')) {
		if (event.target.value == 'Выполнено') {
			event.target.closest('.todo-item').classList.add('done-ok');
			event.target.value = 'Не выполнено';
		}
		else if (event.target.value == 'Не выполнено') {
			event.target.closest('.todo-item').classList.remove('done-ok');
			event.target.value = 'Выполнено';
		}
	}

})



function addNewTask() {

	let userTask = newTask.value;
	let taskDiv = document.createElement('div');

	taskDiv.classList.add('todo-item');
	taskDiv.innerHTML = `
		  <div class="task-wrapper"> 
			<span class="task-counter"></span>
			<span class="task">${userTask}</span>
		  </div>
          <span class= "buttons-wrapper">
			<input class="done" type="button" value="Выполнено">
          	<input class="del" type="button" value="Удалить">
		  </span>
	`;
	todosWrapper.prepend(taskDiv);
	newTask.value = '';
  newTaskBtn.disabled = true;

};

function reCountTasks() {
	let todoArr = document.querySelectorAll('.task-counter');
	console.log(todoArr);
	let counter = todoArr.length;
	todoArr.forEach(elem => {
		elem.innerHTML = counter--;
		
	});
}
function checkEmptyNewTaskInput() {
  
}
