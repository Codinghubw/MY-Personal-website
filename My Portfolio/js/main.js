// Typed.js initialization
document.addEventListener('DOMContentLoaded', function() {
    const typed = new Typed('.typed-text', {
        strings: ['Full-stack Web Developer', 'UI/UX Designer', 'Problem Solver'],
        typeSpeed: 50,
        backSpeed: 30,
        backDelay: 2000,
        loop: true
    });

    // Project filtering
    const filterButtons = document.querySelectorAll('.project-filters .btn');
    const projectGrid = document.getElementById('project-grid');

    // Sample project data
    const projects = [
        {
            title: 'E-commerce Platform',
            category: 'web',
            image: 'assets/projects/ecommerce.jpg',
            description: 'A full-stack e-commerce platform with payment integration',
            technologies: ['React', 'Node.js', 'MongoDB'],
            demoLink: '#',
            githubLink: '#'
        },
        {
            title: 'Task Management App',
            category: 'app',
            image: 'assets/projects/task-app.jpg',
            description: 'A mobile-first task management application',
            technologies: ['Vue.js', 'Firebase'],
            demoLink: '#',
            githubLink: '#'
        },
        {
            title: 'Portfolio Website',
            category: 'design',
            image: 'assets/projects/portfolio.jpg',
            description: 'A responsive portfolio website with dark mode',
            technologies: ['HTML', 'CSS', 'JavaScript'],
            demoLink: '#',
            githubLink: '#'
        }
    ];

    // Populate projects
    function displayProjects(category = 'all') {
        const filteredProjects = category === 'all' 
            ? projects 
            : projects.filter(project => project.category === category);

        projectGrid.innerHTML = filteredProjects.map(project => `
            <div class="col-md-6 col-lg-4">
                <div class="project-card">
                    <img src="${project.image}" alt="${project.title}" class="img-fluid">
                    <div class="p-4">
                        <h4>${project.title}</h4>
                        <p>${project.description}</p>
                        <div class="technologies mb-3">
                            ${project.technologies.map(tech => 
                                `<span class="badge bg-primary me-2">${tech}</span>`
                            ).join('')}
                        </div>
                        <div class="d-flex gap-2">
                            <a href="${project.demoLink}" class="btn btn-primary btn-sm">Live Demo</a>
                            <a href="${project.githubLink}" class="btn btn-outline-primary btn-sm">GitHub</a>
                        </div>
                    </div>
                </div>
            </div>
        `).join('');
    }

    // Initialize projects
    displayProjects();

    // Filter projects
    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            filterButtons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');
            displayProjects(button.getAttribute('data-filter'));
        });
    });

    // Blog posts data
    const blogPosts = [
        {
            title: 'Getting Started with React Hooks',
            date: 'July 15, 2023',
            excerpt: 'Learn how to use React Hooks to manage state and side effects in your functional components.',
            image: 'assets/blog1.jpg',
            category: 'React',
            link: '#'
        },
        {
            title: 'Building RESTful APIs with Node.js',
            date: 'June 28, 2023',
            excerpt: 'A comprehensive guide to creating scalable RESTful APIs using Node.js and Express.',
            image: 'assets/blog2.jpg',
            category: 'Backend',
            link: '#'
        },
        {
            title: 'Modern CSS Techniques',
            date: 'June 10, 2023',
            excerpt: 'Explore modern CSS features and techniques for building beautiful user interfaces.',
            image: 'assets/blog3.jpg',
            category: 'CSS',
            link: '#'
        }
    ];

    // Populate blog posts
    function displayBlogPosts() {
        const blogGrid = document.getElementById('blog-posts');
        blogGrid.innerHTML = blogPosts.map(post => `
            <div class="col-md-6 col-lg-4 fade-in">
                <div class="blog-card">
                    <img src="${post.image}" alt="${post.title}" class="img-fluid">
                    <div class="p-4">
                        <span class="badge bg-primary mb-2">${post.category}</span>
                        <h4>${post.title}</h4>
                        <p class="text-muted">${post.date}</p>
                        <p>${post.excerpt}</p>
                        <a href="${post.link}" class="btn btn-outline-primary btn-sm">Read More</a>
                    </div>
                </div>
            </div>
        `).join('');
    }

    // Initialize blog posts
    displayBlogPosts();

    // Skills data
    const frontendSkills = [
        { name: 'HTML/CSS', level: 90 },
        { name: 'JavaScript', level: 85 },
        { name: 'React.js', level: 80 },
        { name: 'Vue.js', level: 75 }
    ];

    const backendSkills = [
        { name: 'Node.js', level: 85 },
        { name: 'Python', level: 80 },
        { name: 'MongoDB', level: 75 },
        { name: 'SQL', level: 70 }
    ];

    // Populate skills
    function displaySkills(skills, container) {
        const skillBars = document.querySelector(container);
        skillBars.innerHTML = skills.map(skill => `
            <div class="skill-item">
                <div class="skill-info">
                    <span>${skill.name}</span>
                    <span>${skill.level}%</span>
                </div>
                <div class="progress">
                    <div class="progress-bar" role="progressbar" style="width: 0%"
                         aria-valuenow="${skill.level}" aria-valuemin="0" aria-valuemax="100">
                    </div>
                </div>
            </div>
        `).join('');
    }

    displaySkills(frontendSkills, '#skills .col-md-6:first-child .skill-bars');
    displaySkills(backendSkills, '#skills .col-md-6:last-child .skill-bars');

    // Animate skill bars on scroll
    function animateSkillBars() {
        const skillBars = document.querySelectorAll('.progress-bar');
        skillBars.forEach(bar => {
            const value = bar.getAttribute('aria-valuenow');
            bar.style.width = value + '%';
        });
    }

    // Intersection Observer for animations
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                if (entry.target.classList.contains('skill-bars')) {
                    animateSkillBars();
                } else {
                    entry.target.classList.add('visible');
                }
            }
        });
    }, { threshold: 0.1 });

    // Observe elements for animation
    document.querySelectorAll('.fade-in, .skill-bars').forEach(el => observer.observe(el));

    // Contact form handling
    const contactForm = document.getElementById('contact-form');
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        // Add your form submission logic here
        alert('Thank you for your message! I will get back to you soon.');
        contactForm.reset();
    });
});