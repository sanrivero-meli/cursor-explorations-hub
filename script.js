// Navigation filtering functionality
document.addEventListener('DOMContentLoaded', function() {
    const navLinks = document.querySelectorAll('.nav-link');
    const explorationCards = document.querySelectorAll('.exploration-card');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            // Remove active class from all nav links
            navLinks.forEach(nav => nav.classList.remove('active'));
            // Add active class to clicked link
            this.classList.add('active');
            
            const category = this.getAttribute('data-category');
            
            // Filter cards
            explorationCards.forEach(card => {
                if (category === 'all' || card.getAttribute('data-category') === category) {
                    card.classList.remove('hidden');
                    card.classList.add('show');
                } else {
                    card.classList.add('hidden');
                    card.classList.remove('show');
                }
            });
        });
    });
    
    // Add smooth scrolling for navigation links
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            const explorationsSection = document.querySelector('.explorations');
            explorationsSection.scrollIntoView({ 
                behavior: 'smooth',
                block: 'start'
            });
        });
    });
    
    // Add click tracking for explore buttons (you can replace these with actual URLs)
    const exploreButtons = document.querySelectorAll('.explore-btn');
    exploreButtons.forEach((button, index) => {
        button.addEventListener('click', function(e) {
            e.preventDefault();
            
            // Get the project title for identification
            const projectCard = this.closest('.exploration-card');
            const projectTitle = projectCard.querySelector('h3').textContent;
            
            // You can replace this alert with actual navigation logic
            alert(`Opening ${projectTitle}...\n\nReplace this alert with actual navigation to your project!`);
            
            // Example of how you might handle different projects:
            switch(projectTitle) {
                case 'E-commerce Platform':
                    // window.location.href = '/path/to/ecommerce-project';
                    console.log('Navigate to E-commerce Platform (Product Development)');
                    break;
                case 'Design System Library':
                    // window.location.href = '/path/to/design-system';
                    console.log('Navigate to Design System Library (Product Development)');
                    break;
                case 'Habit Tracker App':
                    // window.location.href = '/path/to/habit-tracker';
                    console.log('Navigate to Habit Tracker App (Product Development)');
                    break;
                case 'Code Review Assistant':
                    // window.location.href = '/path/to/code-review-ai';
                    console.log('Navigate to Code Review Assistant (AI Labs)');
                    break;
                case 'Predictive Analytics Dashboard':
                    // window.location.href = '/path/to/analytics-dashboard';
                    console.log('Navigate to Predictive Analytics Dashboard (AI Labs)');
                    break;
                case 'Developer CLI Toolkit':
                    // window.location.href = '/path/to/cli-toolkit';
                    console.log('Navigate to Developer CLI Toolkit (Explorations)');
                    break;
                case 'Database Migration Tool':
                    // window.location.href = '/path/to/migration-tool';
                    console.log('Navigate to Database Migration Tool (Explorations)');
                    break;
                case 'WebAssembly Game Engine':
                    // window.location.href = '/path/to/wasm-game-engine';
                    console.log('Navigate to WebAssembly Game Engine (Explorations)');
                    break;
                case 'AR Code Visualization':
                    // window.location.href = '/path/to/ar-code-viz';
                    console.log('Navigate to AR Code Visualization (Explorations)');
                    break;
                // Add more cases for other projects
                default:
                    console.log(`Navigate to ${projectTitle}`);
            }
        });
    });
    
    // Add click handler for submit idea button
    const submitBtn = document.querySelector('.submit-btn');
    if (submitBtn) {
        submitBtn.addEventListener('click', function(e) {
            e.preventDefault();
            
            // You can replace this with a modal, form, or navigation to idea submission page
            const ideaText = prompt('What\'s your exploration idea?\n\nDescribe your project concept:');
            
            if (ideaText && ideaText.trim()) {
                alert(`Thanks for your idea: "${ideaText}"\n\nWe'll review it and get back to you soon!`);
                
                // Here you could send the idea to a backend service
                console.log('New idea submitted:', ideaText);
                
                // Example of how you might submit to a backend:
                // submitIdea(ideaText);
            }
        });
    }
    
    // Add hover effects and animations
    const cards = document.querySelectorAll('.exploration-card, .stat-card, .add-project-card');
    cards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-10px)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
        });
    });
    
    // Dynamic stats counter animation (optional enhancement)
    function animateStats() {
        const statNumbers = document.querySelectorAll('.stat-card h3');
        
        statNumbers.forEach(stat => {
            const finalValue = parseInt(stat.textContent);
            let currentValue = 0;
            const increment = finalValue / 30; // Animate over 30 frames
            
            const timer = setInterval(() => {
                currentValue += increment;
                if (currentValue >= finalValue) {
                    currentValue = finalValue;
                    clearInterval(timer);
                }
                stat.textContent = Math.floor(currentValue);
            }, 50);
        });
    }
    
    // Trigger stats animation when page loads
    setTimeout(animateStats, 500);
    
    // Add search functionality (bonus feature)
    function addSearchFunctionality() {
        // Create search input
        const nav = document.querySelector('.navigation .container');
        const searchContainer = document.createElement('div');
        searchContainer.style.cssText = 'display: flex; justify-content: center; margin-top: 1rem;';
        
        const searchInput = document.createElement('input');
        searchInput.type = 'text';
        searchInput.placeholder = 'Search explorations...';
        searchInput.style.cssText = `
            padding: 0.5rem 1rem;
            border: 2px solid #e5e7eb;
            border-radius: 25px;
            width: 300px;
            font-size: 0.9rem;
            outline: none;
            transition: all 0.3s ease;
        `;
        
        searchInput.addEventListener('focus', function() {
            this.style.borderColor = '#4f46e5';
            this.style.boxShadow = '0 0 0 3px rgba(79, 70, 229, 0.1)';
        });
        
        searchInput.addEventListener('blur', function() {
            this.style.borderColor = '#e5e7eb';
            this.style.boxShadow = 'none';
        });
        
        searchInput.addEventListener('input', function() {
            const searchTerm = this.value.toLowerCase();
            
            explorationCards.forEach(card => {
                const title = card.querySelector('h3').textContent.toLowerCase();
                const description = card.querySelector('p').textContent.toLowerCase();
                const techs = Array.from(card.querySelectorAll('.tech')).map(tech => tech.textContent.toLowerCase()).join(' ');
                
                if (title.includes(searchTerm) || description.includes(searchTerm) || techs.includes(searchTerm)) {
                    card.style.display = 'block';
                    card.classList.add('show');
                } else {
                    card.style.display = 'none';
                    card.classList.remove('show');
                }
            });
            
            // Reset category filter when searching
            if (searchTerm) {
                navLinks.forEach(nav => nav.classList.remove('active'));
            }
        });
        
        searchContainer.appendChild(searchInput);
        nav.appendChild(searchContainer);
    }
    
    // Uncomment to add search functionality
    // addSearchFunctionality();
});

// Function to add new exploration cards dynamically
function addExplorationCard(cardData) {
    const grid = document.querySelector('.explorations-grid');
    const cardHTML = `
        <div class="exploration-card" data-category="${cardData.category}">
            <div class="card-header">
                <i class="${cardData.icon} ${cardData.category}-icon"></i>
                <span class="category-badge ${cardData.category}">${cardData.categoryLabel}</span>
            </div>
            <h3>${cardData.title}</h3>
            <p>${cardData.description}</p>
            <div class="card-footer">
                <div class="tech-stack">
                    ${cardData.technologies.map(tech => `<span class="tech">${tech}</span>`).join('')}
                </div>
                <a href="${cardData.url || '#'}" class="explore-btn">
                    <i class="fas fa-external-link-alt"></i>
                    Explore
                </a>
            </div>
        </div>
    `;
    
    grid.insertAdjacentHTML('beforeend', cardHTML);
}

// Example usage for new categories:
/*
// Product Development example
addExplorationCard({
    category: 'product-dev',
    categoryLabel: 'Product Dev',
    icon: 'fas fa-code',
    title: 'New React App',
    description: 'A new product development project in React.',
    technologies: ['React', 'TypeScript', 'Vite'],
    url: '/path/to/react-app'
});

// AI Labs example
addExplorationCard({
    category: 'ai-labs',
    categoryLabel: 'AI Labs',
    icon: 'fas fa-robot',
    title: 'ML Model Training',
    description: 'Advanced machine learning model for prediction.',
    technologies: ['Python', 'TensorFlow', 'Jupyter'],
    url: '/path/to/ml-project'
});

// Explorations example
addExplorationCard({
    category: 'explorations',
    categoryLabel: 'Explorations',
    icon: 'fas fa-flask',
    title: 'Experimental Tool',
    description: 'Exploring new technologies and approaches.',
    technologies: ['Rust', 'WebAssembly', 'Canvas'],
    url: '/path/to/experimental-project'
});
*/

// Function to update stats
function updateStats(stats) {
    const statCards = document.querySelectorAll('.stat-card h3');
    if (statCards.length >= 4) {
        statCards[0].textContent = stats.activeProjects || '12';
        statCards[1].textContent = stats.teamMembers || '8';
        statCards[2].textContent = stats.explorations || '47';
        statCards[3].textContent = stats.ideasInQueue || '23';
    }
}

// Function to handle idea submissions (replace with actual backend integration)
function submitIdea(ideaText) {
    // Example of how you might submit to a backend
    /*
    fetch('/api/ideas', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            idea: ideaText,
            timestamp: new Date().toISOString(),
            author: 'Current User' // You might get this from authentication
        })
    })
    .then(response => response.json())
    .then(data => {
        console.log('Idea submitted successfully:', data);
    })
    .catch(error => {
        console.error('Error submitting idea:', error);
    });
    */
    
    console.log('Idea submitted:', ideaText);
}