import { projectArray } from "./new-project";

export default function viewProjects() {
    // Clear div container
    const formContainer = document.getElementById('form-container'); 
    formContainer.innerHTML = '';

    // Title
    const title = document.createElement('h1');
    title.innerText = 'My Projects';
    title.style.textAlign = 'center';
    title.style.fontSize = '3rem';
    title.style.marginTop = '3rem';
    formContainer.appendChild(title);

    // Creating the list
    const list = document.createElement('ul'); // Creating an unordered list for the projects
    list.style.textAlign = 'center'; 
    list.style.display = 'flex'; 
    list.style.flexDirection = 'column'
    list.style.justifyContent = 'center'
    list.style.alignItems = 'center'
    projectArray.forEach((project) => {
        const listItem = document.createElement('li');
        listItem.style.fontSize = '1.5rem'; 
        listItem.style.margin = '1.5rem 0'; 
        listItem.style.width = '2rem'
        listItem.style.textAlign = 'center'
        listItem.textContent = project;
        list.appendChild(listItem);
    });
    formContainer.appendChild(list); // Append the list to the form container
}
