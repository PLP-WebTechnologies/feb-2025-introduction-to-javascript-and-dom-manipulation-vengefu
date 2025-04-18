// Wait for DOM to be fully loaded before executing script
document.addEventListener('DOMContentLoaded', function() {
    // Get references to DOM elements
    const welcomeMessage = document.getElementById('welcome-message');
    const changeTextBtn = document.getElementById('change-text-btn');
    const changeStyleBtn = document.getElementById('change-style-btn');
    const addElementBtn = document.getElementById('add-element-btn');
    const removeElementBtn = document.getElementById('remove-element-btn');
    const itemList = document.getElementById('item-list');
    const infoParagraph = document.querySelector('.info-paragraph');
    
    // Task 1: Change text content dynamically
    changeTextBtn.addEventListener('click', function() {
        welcomeMessage.textContent = 'Text changed using JavaScript!';
        infoParagraph.textContent = 'The text content was updated when you clicked the button.';
    });
    
    // Task 2: Modify CSS styles via JavaScript
    changeStyleBtn.addEventListener('click', function() {
        // Toggle between two style states
        if (contentSection.style.backgroundColor === 'lightblue') {
            contentSection.style.backgroundColor = '';
            welcomeMessage.style.color = '';
            infoParagraph.style.fontStyle = '';
        } else {
            contentSection.style.backgroundColor = 'lightblue';
            welcomeMessage.style.color = 'darkred';
            infoParagraph.style.fontStyle = 'italic';
        }
    });
    
    // Task 3: Add an element when a button is clicked
    addElementBtn.addEventListener('click', function() {
        const newItem = document.createElement('li');
        const itemCount = itemList.children.length + 1;
        newItem.textContent = `Another Technology ${itemCount} added dynamically`;
        itemList.appendChild(newItem);
    });
    
    // Task 4: Remove an element when a button is clicked
    removeElementBtn.addEventListener('click', function() {
        if (itemList.children.length > 0) {
            itemList.removeChild(itemList.lastElementChild);
        } else {
            alert('No more items to remove!');
        }
    });
    
    // Bonus: Get the content section element
    const contentSection = document.getElementById('content-section');
});