
// Function to filter projects by category
function filterProjects(category) {
    const projects = document.querySelectorAll('.project');
    projects.forEach(project => {
        if (category === 'all' || project.dataset.category === category) {
            project.style.display = 'block';
        } else {
            project.style.display = 'none';
        }
    });
    highlightActiveFilter(category);
}

// Function to highlight the active filter button
function highlightActiveFilter(activeCategory) {
    const buttons = document.querySelectorAll('.filters .btn');
    buttons.forEach(button => {
        if (button.textContent.includes(activeCategory) || activeCategory === 'الكل') {
            button.classList.add('active');
        } else {
            button.classList.remove('active');
        }
    });
}
