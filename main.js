// Data
const skills = {
    "Programming & DBs": {
        icon: "fas fa-code",
        skills: ["Python", "R", "Java", "SQL (PL/SQL)", "MongoDB", "XML"]
    },
    "Data Analysis & ML": {
        icon: "fas fa-brain",
        skills: ["Pandas", "NumPy", "Scikit-learn", "TensorFlow", "PyTorch", "CUDA"]
    },
    "Visualization & BI": {
        icon: "fas fa-chart-bar",
        skills: ["Tableau", "Power BI", "Excel (VBA)"]
    },
    "Big Data & Cloud": {
        icon: "fas fa-cloud",
        skills: ["Apache Spark", "Hadoop", "AWS (S3, EC2)"]
    },
    "DevOps & Tools": {
        icon: "fas fa-tools",
        skills: ["GitHub", "Linux Bash", "Docker", "Kubernetes", "Airflow", "Kafka"]
    },
    "Statistics": {
        icon: "fas fa-calculator",
        skills: ["Regression", "Hypothesis Testing", "A/B Testing", "Trend Analysis"]
    }
};

const projects = [
    {
        title: "Synthia - Synthetic Financial Data Generator",
        category: "ai",
        description: "A generative AI platform that creates high-fidelity, privacy-preserving synthetic financial data using GANs and LLMs for training ML models without exposing sensitive customer information.",
        technologies: ["GANs", "LLMs", "Python", "Cloud Computing"],
        github: "https://github.com/manojkumartechie/synthia-ai",
        demo: "#"
    },
    {
        title: "QuantumLeap - Explainable Credit Scoring",
        category: "fintech",
        description: "Advanced credit scoring model incorporating alternative data sources with Explainable AI (XAI) to provide highly accurate risk scores and transparent decision-making.",
        technologies: ["XGBoost", "SHAP", "LIME", "Python", "Big Data"],
        github: "https://github.com/manojkumartechie/quantumleap-credit",
        demo: "#"
    },
    {
        title: "Cerberus - Multi-Layered Fraud Detection",
        category: "ai",
        description: "Real-time fraud detection engine analyzing credit, debit, and trading transactions using supervised and unsupervised ML models to detect known and emerging fraud patterns.",
        technologies: ["Graph Neural Networks", "Autoencoders", "Kafka", "Python"],
        github: "https://github.com/manojkumartechie/cerberus-fraud",
        demo: "#"
    },
    {
        title: "Prism - Personal Finance Dashboard",
        category: "analytics",
        description: "Comprehensive dashboard providing 360-degree view of financial life, aggregating data from all accounts with real-time analysis and predictive insights.",
        technologies: ["Plaid API", "D3.js", "React", "Real-time Analytics"],
        github: "https://github.com/manojkumartechie/prism-dashboard",
        demo: "#"
    },
    {
        title: "Optimus - RL Portfolio Optimization",
        category: "ai",
        description: "Portfolio management system using reinforcement learning to dynamically adjust asset allocations, learning from real-time market data to develop adaptive trading policies.",
        technologies: ["Deep Q-Networks", "Time-Series Analysis", "Python", "Cloud Computing"],
        github: "https://github.com/manojkumartechie/optimus-portfolio",
        demo: "#"
    },
    {
        title: "Pulse - Market Sentiment Analysis",
        category: "analytics",
        description: "Real-time platform analyzing news, social media, and regulatory filings to gauge market sentiment using advanced NLP for predictive market insights.",
        technologies: ["NLP", "Apache Flink", "Python", "Real-time Processing"],
        github: "https://github.com/manojkumartechie/pulse-sentiment",
        demo: "#"
    }
];

// Typing animation
const typingTexts = ["Data Scientist", "AI Engineer", "ML Specialist", "Analytics Expert"];
let textIndex = 0;
let charIndex = 0;
let isDeleting = false;
let typingSpeed = 150;

function typeText() {
    const currentText = typingTexts[textIndex];
    const typedElement = document.getElementById('typed-text');
    
    if (isDeleting) {
        typedElement.textContent = currentText.substring(0, charIndex - 1);
        charIndex--;
        typingSpeed = 50;
    } else {
        typedElement.textContent = currentText.substring(0, charIndex + 1);
        charIndex++;
        typingSpeed = 150;
    }
    
    if (!isDeleting && charIndex === currentText.length) {
        isDeleting = true;
        typingSpeed = 2000;
    } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        textIndex = (textIndex + 1) % typingTexts.length;
    }
    
    setTimeout(typeText, typingSpeed);
}

// Navigation functionality
function initNavigation() {
    const navToggle = document.getElementById('nav-toggle');
    const navMenu = document.getElementById('nav-menu');
    const navLinks = document.querySelectorAll('.nav-link');
    
    navToggle.addEventListener('click', () => {
        navMenu.classList.toggle('active');
        navToggle.classList.toggle('active');
    });
    
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            navMenu.classList.remove('active');
            navToggle.classList.remove('active');
        });
    });
    
    // Navbar scroll effect
    window.addEventListener('scroll', () => {
        const navbar = document.getElementById('navbar');
        if (window.scrollY > 50) {
            navbar.style.background = 'rgba(255, 255, 255, 0.98)';
            if (document.documentElement.getAttribute('data-theme') === 'dark') {
                navbar.style.background = 'rgba(17, 24, 39, 0.98)';
            }
        } else {
            navbar.style.background = 'rgba(255, 255, 255, 0.95)';
            if (document.documentElement.getAttribute('data-theme') === 'dark') {
                navbar.style.background = 'rgba(17, 24, 39, 0.95)';
            }
        }
    });
}

// Skills rendering
function renderSkills() {
    const skillsGrid = document.getElementById('skills-grid');
    
    Object.entries(skills).forEach(([category, data]) => {
        const skillCard = document.createElement('div');
        skillCard.className = 'skill-category fade-in-up';
        
        skillCard.innerHTML = `
            <h3><i class="${data.icon}"></i> ${category}</h3>
            <div class="skill-tags">
                ${data.skills.map(skill => `<span class="skill-tag">${skill}</span>`).join('')}
            </div>
        `;
        
        skillsGrid.appendChild(skillCard);
    });
}

// Projects rendering and filtering
function renderProjects() {
    const projectsGrid = document.getElementById('projects-grid');
    
    projects.forEach(project => {
        const projectCard = document.createElement('div');
        projectCard.className = `project-card fade-in-up`;
        projectCard.setAttribute('data-category', project.category);
        
        projectCard.innerHTML = `
            <div class="project-header">
                <h3 class="project-title">${project.title}</h3>
                <span class="project-category">${project.category.toUpperCase()}</span>
            </div>
            <div class="project-content">
                <p class="project-description">${project.description}</p>
                <div class="project-tech">
                    ${project.technologies.map(tech => `<span class="tech-tag">${tech}</span>`).join('')}
                </div>
                <div class="project-links">
                    <a href="${project.github}" target="_blank" class="project-link">
                        <i class="fab fa-github"></i> GitHub
                    </a>
                    <a href="${project.demo}" class="project-link">
                        <i class="fas fa-external-link-alt"></i> Demo
                    </a>
                </div>
            </div>
        `;
        
        projectsGrid.appendChild(projectCard);
    });
}

// Project filtering
function initProjectFiltering() {
    const filterBtns = document.querySelectorAll('.filter-btn');
    const projectCards = document.querySelectorAll('.project-card');
    
    filterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            // Remove active class from all buttons
            filterBtns.forEach(b => b.classList.remove('active'));
            // Add active class to clicked button
            btn.classList.add('active');
            
            const filter = btn.getAttribute('data-filter');
            
            projectCards.forEach(card => {
                if (filter === 'all' || card.getAttribute('data-category') === filter) {
                    card.classList.remove('hidden');
                } else {
                    card.classList.add('hidden');
                }
            });
        });
    });
}

// Theme toggle
function initThemeToggle() {
    const themeToggle = document.getElementById('theme-toggle');
    const themeIcon = themeToggle.querySelector('i');
    
    // Check for saved theme preference or default to light mode
    const currentTheme = localStorage.getItem('theme') || 'light';
    document.documentElement.setAttribute('data-theme', currentTheme);
    
    if (currentTheme === 'dark') {
        themeIcon.className = 'fas fa-sun';
    } else {
        themeIcon.className = 'fas fa-moon';
    }
    
    themeToggle.addEventListener('click', () => {
        const currentTheme = document.documentElement.getAttribute('data-theme');
        const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
        
        document.documentElement.setAttribute('data-theme', newTheme);
        localStorage.setItem('theme', newTheme);
        
        if (newTheme === 'dark') {
            themeIcon.className = 'fas fa-sun';
        } else {
            themeIcon.className = 'fas fa-moon';
        }
    });
}

// Smooth scrolling for anchor links
function initSmoothScrolling() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
}

// Intersection Observer for animations
function initScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);
    
    // Observe elements with fade-in-up class
    document.querySelectorAll('.fade-in-up').forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
}

// Contact form handling (if needed)
function initContactForm() {
    // Add contact form functionality here if you add a form
    // For now, we're using direct links to email/phone
}

// Initialize everything when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    // Start typing animation
    setTimeout(typeText, 1000);
    
    // Initialize all functionality
    initNavigation();
    renderSkills();
    renderProjects();
    initProjectFiltering();
    initThemeToggle();
    initSmoothScrolling();
    
    // Initialize scroll animations after a short delay to ensure all elements are rendered
    setTimeout(initScrollAnimations, 100);
});

// Handle window resize
window.addEventListener('resize', () => {
    // Add any resize-specific functionality here
});

// Add loading animation
window.addEventListener('load', () => {
    document.body.classList.add('loaded');
});