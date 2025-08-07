# Cursor Team Explorations Hub

A beautiful, modern landing page to showcase and organize all Cursor team explorations and projects.

## 🚀 Features

- **Modern Design**: Clean, professional interface with glassmorphism effects
- **Responsive Layout**: Works perfectly on desktop, tablet, and mobile devices
- **Category Filtering**: Organize projects by Product Development, AI Labs, and Explorations
- **Interactive Elements**: Hover effects, smooth animations, and clickable project cards
- **Easy to Customize**: Simple to add new projects and update content

## 📋 Categories

### 🛍️ Product Development
Customer-facing applications and commercial products
- E-commerce Platform
- Design System Library
- Habit Tracker App

### 🤖 AI Labs
Artificial intelligence and machine learning projects
- Code Review Assistant
- Predictive Analytics Dashboard

### 🔬 Explorations
Experimental tools, research, and innovative concepts
- Developer CLI Toolkit
- Database Migration Tool
- WebAssembly Game Engine
- AR Code Visualization

## 🛠️ Technologies Used

- **HTML5**: Semantic markup with modern structure
- **CSS3**: Advanced styling with flexbox, grid, and animations
- **JavaScript**: Interactive filtering and dynamic functionality
- **Font Awesome**: Beautiful icons
- **Google Fonts**: Inter typography

## 🚀 Getting Started

1. Clone this repository
2. Open `index.html` in your browser
3. Customize the projects and links to match your explorations

## 📝 Customization

### Adding New Projects

Use the `addExplorationCard()` function in `script.js`:

```javascript
addExplorationCard({
    category: 'product-dev', // or 'ai-labs', 'explorations'
    categoryLabel: 'Product Dev',
    icon: 'fas fa-code',
    title: 'Your Project Name',
    description: 'Brief description of your project.',
    technologies: ['React', 'Node.js', 'MongoDB'],
    url: '/path/to/your/project'
});
```

### Updating Project Links

Edit the explore button URLs in `index.html` or modify the switch statement in `script.js`.

## 🌐 Live Demo

Visit the live page: [Cursor Explorations Hub](https://yourusername.github.io/cursor-explorations-hub)

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

---

Built with ❤️ and curiosity by the Cursor Team