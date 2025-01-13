// Select elements from the DOM
const input = document.querySelector('#favchap');
const button = document.querySelector('button');
const list = document.querySelector('#list');

// Add an event listener to the button
button.addEventListener('click', function () {
    // Check if the input field is empty
    if (input.value.trim() === '') {
        alert('Please enter a chapter!');
        return;
    }

    // Create a new list item and delete button
    const li = document.createElement('li');
    const deleteButton = document.createElement('button');

    // Set the content for the list item and delete button
    li.textContent = input.value;
    deleteButton.textContent = '❌';
    deleteButton.classList.add('delete');

    // Append the delete button to the list item
    li.append(deleteButton);

    // Append the list item to the unordered list
    list.append(li);

    // Clear the input field
    input.value = '';

    // Add an event listener to the delete button
    deleteButton.addEventListener('click', function () {
        list.removeChild(li);
    });
});