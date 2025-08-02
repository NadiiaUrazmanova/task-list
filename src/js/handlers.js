import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";
import { nanoid } from "nanoid";
import { tasks } from "./data";
import { renderTasks } from "./render-tasks";



export function onHeaderFormSubmit(e) {
    e.preventDefault()
    
    
    const { taskName, taskDescription } = e.target.elements;

    const taskNameValue = taskName.value.trim();
    const taskDescriptionValue = taskDescription.value.trim();

    if (taskNameValue === '' || taskDescriptionValue === '') {
        iziToast.error({
            message: 'Не всі поля заповнені',
            position: 'topLeft'
        });
        return;
    }

    const task = {
        name: taskNameValue,
        description: taskDescriptionValue,
        id: nanoid()
    }
    tasks.push(task);
    renderTasks(tasks);
    e.target.reset();
}

export function onTaskDelete(e) {
    
}




