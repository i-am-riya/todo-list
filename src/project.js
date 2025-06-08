// project.js
class FormData2 {
    constructor(projectForm) {
        this.projectTitle = document.getElementById(projectForm);
    }

    getProjectData() {
        const projectData = {
            name: this.projectTitle.querySelector("#project")?.value,
        };
        return projectData;
    }
}

const handleProjectSubmission = (projectDataObj, projects) => {
    const projectData = projectDataObj.getProjectData();
    const projectName = projectData.name;
    projects.textContent = projectName;
    localStorage.setItem("name", projectName);
    const formProject = document.createElement('option');
    formProject.textContent = projectName;
    document.getElementById('projectsSelect').appendChild(formProject)
    document.getElementById('projectForm').reset();

};

export { FormData2, handleProjectSubmission };
