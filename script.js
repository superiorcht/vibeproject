const projects = [
    {
        title: "Interactive Particle System",
        category: "3d",
        emoji: "✨",
        description: "Three.js particle field with gesture controls.",
        link: "#"
    },
    {
        title: "Retro Snake Evolution",
        category: "games",
        emoji: "🐍",
        description: "A modern take on the classic arcade game.",
        link: "#"
    },
    {
        title: "AI Detection Engine",
        category: "tools",
        emoji: "🤖",
        description: "Tool to analyze and detect AI-generated imagery.",
        link: "#"
    }
];

const gallery = document.getElementById('project-gallery');

function displayProjects(filter = 'all') {
    gallery.innerHTML = '';
    
    const filtered = filter === 'all' 
        ? projects 
        : projects.filter(p => p.category === filter);

    filtered.forEach(project => {
        const card = `
            <div class="card">
                <div class="card-img">${project.emoji}</div>
                <div class="card-info">
                    <span class="tag">${project.category}</span>
                    <h3>${project.title}</h3>
                    <p>${project.description}</p>
                    <a href="${project.link}" class="btn-link">View Project →</a>
                </div>
            </div>
        `;
        gallery.innerHTML += card;
    });
}

// Initial Load
displayProjects();

// Filter Event Listeners
document.querySelectorAll('.filter-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
        document.querySelector('.active').classList.remove('active');
        e.target.classList.add('active');
        displayProjects(e.target.dataset.filter);
    });
});
