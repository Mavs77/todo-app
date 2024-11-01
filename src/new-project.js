// Array to store project names

export default function newProject() {
    //clear div container
    const formContainer = document.getElementById('form-container'); 
    formContainer.innerHTML = ''

    // Create form
    const form = document.createElement('form'); 
    form.id = 'project-form'
    form.style.display = 'flex'
    form.style.justifyContent = 'center'
    form.style.marginTop = '5rem'
    form.style.fontSize = '2rem'
    form.style.gap = '2rem'

    // Create a Name Label and input 
    const nameLabel = document.createElement('label'); 
    nameLabel.setAttribute('for', 'project-input'); 
    nameLabel.textContent = 'Project Name'
    const projectInput = document.createElement('input')
    projectInput.style.fontSize = '2rem'
    projectInput.type = 'text'; 
    projectInput.id = 'project-input'
    projectInput.name = 'project'
    projectInput.placeholder = 'Enter project name'
    projectInput.required = true; 

    //create submit button 
    const submitButton = document.createElement('button'); 
    submitButton.id = 'submit-button'
    submitButton.style.fontSize = '2rem'
    submitButton.type = 'button'; 
    submitButton.textContent = 'add project'

    //Append elements to the form 
    form.appendChild(nameLabel)
    form.appendChild(projectInput)
    form.appendChild(submitButton)

    //Append form to container
    const container = document.getElementById('form-container')
    container.appendChild(form)
    return form
}


const projectArray = [];


// Function to extract text from input within the form and add to array
export function extractAndAddProject(form) {
    // Access the input element using the form parameter
    const inputElement = form.querySelector('#project-input');

    // Get the value from the input field
    const enteredText = inputElement.value;

    // Validate the input: Check if it's empty or whitespace
    if (enteredText.trim() === '') {
        console.log('No project name entered.');
        return; // Exit if input is invalid
    }

    // Add the valid project name to the array
    projectArray.push(enteredText.trim());

    // Log the added project name and updated array
    console.log(`Project added: ${enteredText.trim()}`);
    console.log('Current project array:', projectArray);

    // Clear the input field
    inputElement.value = '';

    // Return the updated array so it can be used elsewhere
    return projectArray;
}


