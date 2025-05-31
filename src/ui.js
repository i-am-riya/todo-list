// ui.js
const showForm = (formId) => {
    document.getElementById(formId).style.display = "flex";
};

const hideForm = (formId) => {
    document.getElementById(formId).style.display = "none";
};

export { showForm, hideForm };

