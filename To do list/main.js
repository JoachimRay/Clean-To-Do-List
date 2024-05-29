// Select the input field and the checklist
const input = document.querySelector('#todo-input');
input.setAttribute('autocomplete', 'off'); // disables
const checklist = document.querySelector('#checklist');

const labels = checklist.querySelectorAll('label');
for (let i = 0; i < 3 && i < labels.length; i++){
    labels[i].classList.add('new-label');
}

// Listen for 'keypress' event in the input field
input.addEventListener('keypress', function(e) {
    if(e.key === 'Enter') {
        e.preventDefault();

        const task = this.value;
        const checkboxes = checklist.querySelectorAll('input[type="checkbox"]');
        const labels = checklist.querySelectorAll('label');

        // Find the first empty label
        const emptyLabel = Array.from(labels).find(label => label.textContent.trim() === '');

        if (emptyLabel) {
            // Update the empty label
            emptyLabel.textContent = task;
        } else {
            // Create a new checkbox and label
            const uncheckedCheckbox = document.createElement('input');
            uncheckedCheckbox.type = 'checkbox';
            uncheckedCheckbox.name = 'r';
            uncheckedCheckbox.id = `0${checkboxes.length + 1}`;

            const label = document.createElement('label');
            label.for = uncheckedCheckbox.id;

             // Update the label text
             label.textContent = task;

            label.classList.add('new-label'); // Add the new-label class

            checklist.appendChild(uncheckedCheckbox);
            checklist.appendChild(label);

            // Change the state of the label
           label.addEventListener('animationend', () => {
            label.classList.remove('new-label');
           })
        }

        // Clear the input field
        this.value = '';
    }
});