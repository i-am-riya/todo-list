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

const formDataObj = new FormData("myForm");
const projectDataObj = new FormData2("projectForm");

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
