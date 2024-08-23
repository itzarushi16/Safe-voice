document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('submit-story-form');
    const storyText = document.getElementById('story-text');
    const storiesList = document.getElementById('stories');
    
    form.addEventListener('submit', (event) => {
        event.preventDefault();
        
        const text = storyText.value.trim();
        if (text) {
            const listItem = document.createElement('li');
            listItem.textContent = text;
            storiesList.appendChild(listItem);
            
            // Clear the form
            storyText.value = '';
        }
    });
});
