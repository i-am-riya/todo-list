// form.js
class FormData {
    constructor(myForm) {
        this.form = document.getElementById(myForm);
    }

    getFormData() {
        const formData = {
            title: this.form.querySelector("#title")?.value,
            description: this.form.querySelector("#description")?.value,
            date: this.form.querySelector("#date")?.value,
            priority: this.form.querySelector("#priority")?.value,
            projects: this.form.querySelector("#projectsSelect")?.value,
        };
        console.log(formData);
        return formData;
    }
}

const createTodoCard = (todo) => {
    const todoCard = document.createElement('div');
    todoCard.classList.add('todo-card');

    const detailsDiv = document.createElement('div');
    detailsDiv.classList.add('details');

    const dateDiv = document.createElement('div');
    dateDiv.classList.add('userDate');
    dateDiv.textContent = todo.date;

    const projectsDiv = document.createElement('div');
    projectsDiv.classList.add('userProjects');
    projectsDiv.textContent = todo.projects;

    const priorityDiv = document.createElement('div');
    priorityDiv.classList.add('userPriority');
    priorityDiv.textContent = todo.priority;

    const titleElement = document.createElement('h2');
    titleElement.classList.add('userTitle');
    titleElement.textContent = todo.title;

    const descriptionElement = document.createElement('p');
    descriptionElement.classList.add('userDescription');
    descriptionElement.textContent = todo.description;

    const buttonGroup = document.createElement('div');
    buttonGroup.classList.add('button-group');

    const completeButton = document.createElement('button');
    completeButton.classList.add('complete');
    completeButton.textContent = 'Complete';

    const deleteButton = document.createElement('button');
    deleteButton.classList.add('delete');
    deleteButton.textContent = 'Delete';

    // Append elements to the card
    detailsDiv.appendChild(dateDiv);
    detailsDiv.appendChild(projectsDiv);
    detailsDiv.appendChild(priorityDiv);
    todoCard.appendChild(detailsDiv);
    todoCard.appendChild(titleElement);
    todoCard.appendChild(descriptionElement);
    buttonGroup.appendChild(completeButton);
    buttonGroup.appendChild(deleteButton);
    todoCard.appendChild(buttonGroup);

    return todoCard; // Return the constructed todo card
};


const handleFormSubmission = (formDataObj) => {
    const formData = formDataObj.getFormData();

    // card
  const todoCard = createTodoCard(formData);
    // append card to list
    document.querySelector('.list').appendChild(todoCard);

    // save form data to local storage
    saveToLocalStorage(formData);

    // reset the form
    document.getElementById('myForm').reset();

}

const saveToLocalStorage = (formData) => {
    let todos = JSON.parse(localStorage.getItem('todos')) || [];
    todos.push(formData);
    localStorage.setItem('todos', JSON.stringify(todos));
};

// const handleFormSubmission = (formDataObj, userTitleText, userDateText, userDescriptionText, userPriorityText, userProjectsText) => {
//     const formData = formDataObj.getFormData();
//     const fields = [
//         { text: userTitleText, key: 'title' },
//         { text: userDateText, key: 'date' },
//         { text: userDescriptionText, key: 'description'},
//         { text: userPriorityText, key: 'priority' },
//         { text: userProjectsText, key: 'projects' },
//     ];

//     fields.forEach((field) => {
//         field.text.textContent = formData[field.key];
//         localStorage.setItem(field.key, formData[field.key]);
//     });

//     document.getElementById('myForm').reset();
// };

export { FormData, handleFormSubmission };
