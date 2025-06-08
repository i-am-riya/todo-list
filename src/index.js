import "./style.css";

import { showForm, hideForm } from "./ui.js";
import { FormData, handleFormSubmission } from "./form.js";
import { FormData2, handleProjectSubmission } from "./project.js";

let addTask = document.getElementById('addTask');
let cancel = document.getElementById('cancel');
let submit = document.getElementById('submit');
let addProject = document.getElementById('addProject');
let cancel2 = document.getElementById('cancel2');
let submit2 = document.getElementById('submit2');

const userTitleText = document.querySelector(".userTitle");
const userDateText = document.querySelector(".userDate");
const userPriorityText = document.querySelector(".userPriority");
const userProjectsText = document.querySelector(".userProjects");
const userDescriptionText = document.querySelector(".userDescription")
const projects = document.getElementById("projects");

const tabs = document.querySelectorAll('.sidebar-btn');
const todoCards = document.querySelectorAll('.todo-card');
const todoList = document.querySelector('.list');
const complete = document.querySelector(".complete");
const deleteBtn = document.querySelector(".delete");

const formDataObj = new FormData("myForm");
const projectDataObj = new FormData2("projectForm");


// form
addTask.addEventListener('click', () => {
    showForm('form')
});

cancel.addEventListener('click', () => {
    hideForm('form')
});

document.addEventListener('DOMContentLoaded', () => {
    const formDataObj = new FormData('form');

    submit.addEventListener('click', (e) => {
        e.preventDefault();
        handleFormSubmission(formDataObj);
        hideForm('form');
    });
})

// project
addProject.addEventListener('click', () => {
    showForm('form2');
});

cancel2.addEventListener('click', () => {
    hideForm('form2');
});

submit2.addEventListener('click', (e) => {
    e.preventDefault();
    handleProjectSubmission(projectDataObj, projects);
    hideForm('form2');
})

// buttons

document.addEventListener('DOMContentLoaded', () => {
    function setActiveTab(selectedTab) {
        tabs.forEach((tab) => {
            if (tab === selectedTab) {
                tab.classList.add('active');
                tab.setAttribute('aria-selected', 'true');
            }
            else {
                tab.classList.remove('active');
                tab.setAttribute('aria-selected', 'false');
            }
        })
    }

    function filterTodoCards(project) {
        todoCards.forEach((card) => {
            const cardProject = (card.dataset.project || '').toLowerCase();
            const filterProject = (project || '').toLowerCase();
            console.log(filterProject)
            if (project === 'all' || cardProject === filterProject) {
                card.style.display = '';
                console.log("done");
            } else {
                card.style.display = 'none';
                console.log("none");

            }
        });
    }

    tabs.forEach((tab) => {
        tab.addEventListener('click', () => {
            const project = tab.dataset.project;
            setActiveTab(tab);
            filterTodoCards(project);
        })
    })

    setActiveTab(document.querySelector('.sidebar-btn[data-project="all"]'));
    filterTodoCards('all');
});

// complete botton
// complete.addEventListener('click', () => {
//     if (complete.innerHTML === "Complete") {
//         console.log("comp.")
//         complete.innerHTML = "Completed";
//         complete.style.backgroundColor = "grey";
//     } else {
//         complete.innerHTML = "Complete";
//     }
// })

// delete button
todoList.addEventListener('click', (event) => {
    if (event.target.classList.contains('complete')) {
        const todoCard = event.target.closest('.todo-card');
        if (todoCard) {
            if (event.target.innerHTML === "Complete") {
                console.log("comp.")
                event.target.innerHTML = "Completed";
                event.target.style.backgroundColor = "grey";
            } else {
                event.target.innerHTML = "Complete";
                event.target.style.backgroundColor = "";

            }
        }
    }

    if (event.target.classList.contains('delete')) {
        const todoCard = event.target.closest('.todo-card');
        if (todoCard) {
            todoCard.remove();
        }
    }
});