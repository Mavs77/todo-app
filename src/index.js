
import "./style.css";
import newProject from './new-project';
import { extractAndAddProject } from "./new-project";
import viewProjects from "./view-projects";

// Set up event listeners for tab buttons
document.getElementById('new-project').onclick = () => {
    newProject(); // Call the function to render the new project form
    init(); // Initialize after the new project form is rendered
};

document.getElementById('view-projects').onclick = viewProjects; // Call to view projects

function init() {
    const submitButton = document.getElementById('submit-button'); // Ensure this ID matches the button in your form

    // Check if the submit button exists before adding the event listener
    if (submitButton) {
        submitButton.addEventListener('click', () => {
            const form = document.getElementById('project-form'); // Access the form
            if (form) {
                extractAndAddProject(form); // Pass the form to the function
            } else {
                console.error('Form not found!');
            }
        });
    }
}

// Call the init function to set up the event listener when the script loads
init();



