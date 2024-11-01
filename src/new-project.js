
export default function newProject() {
    // Create form
    const form = document.createElement('form'); 
    form.style.display = 'flex'
    form.style.justifyContent = 'center'
    form.style.marginTop = '5rem'
    form.style.fontSize = '2rem'
    form.style.gap = '2rem'

    // Create a Name Label and input 
    const nameLabel = document.createElement('label'); 
    nameLabel.for = 'add-project'; 
    nameLabel.textContent = 'Project Name'
    const projectInput = document.createElement('input')
    projectInput.style.fontSize = '2rem'
    projectInput.type = 'text'; 
    projectInput.id = 'add-project'
    projectInput.name = 'add project'
    projectInput.placeholder = 'Enter project name'
    projectInput.required = true; 

    //create submit button 
    const submitButton = document.createElement('button'); 
    submitButton.style.fontSize = '2rem'
    submitButton.type = 'submit'; 
    submitButton.textContent = 'add project'

    //Append elements to the form 
    form.appendChild(nameLabel)
    form.appendChild(projectInput)
    form.appendChild(submitButton)

    //Append form to container
    const container = document.getElementById('form-container')
    container.appendChild(form)
}