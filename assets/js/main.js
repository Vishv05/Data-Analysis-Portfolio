/* ===========================
   MAIN.JS - Core Functionality
   =========================== */

// Initialize AOS (Animate On Scroll)
document.addEventListener('DOMContentLoaded', function () {
    // Ensure AOS library is loaded
    if (typeof AOS !== 'undefined') {
        AOS.init({
            duration: 800,
            easing: 'ease-in-out-cubic',
            once: true,
            offset: 50,
        });
    } else {
        console.warn('AOS library not loaded. Removing opacity-0 classes as fallback.');
        // Fallback: remove all data-aos opacity hiding
        setTimeout(() => {
            document.querySelectorAll('[data-aos]').forEach(el => {
                el.style.opacity = '1';
                el.style.transform = 'none';
            });
        }, 100);
    }
    
    // Ensure Typed.js is working or show static text
    if (typeof Typed === 'undefined' && document.getElementById('typed')) {
        document.getElementById('typed').textContent = 'Data Analyst | Python | SQL | Cloud';
    }
});

// ===========================
// SCROLL PROGRESS INDICATOR
// ===========================

function updateScrollProgress() {
    const scrollProgress = document.getElementById('scrollProgress');
    const windowHeight = document.documentElement.scrollHeight - window.innerHeight;
    const scrolled = (window.scrollY / windowHeight) * 100;
    scrollProgress.style.width = scrolled + '%';
}

window.addEventListener('scroll', updateScrollProgress);

// ===========================
// SMOOTH SCROLL FOR ANCHORS
// ===========================

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

// ===========================
// BACK TO TOP BUTTON
// ===========================

const backToTopBtn = document.getElementById('backToTop');

window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
        backToTopBtn.style.display = 'flex';
    } else {
        backToTopBtn.style.display = 'none';
    }
});

backToTopBtn.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

// ===========================
// TYPED.JS ANIMATION
// ===========================

const typed = new Typed('#typed', {
    strings: [
        'Data Analyst',
        'Python Developer',
        'SQL Expert',
        'Cloud Enthusiast',
        'UI/UX Designer',
        'Data Storyteller'
    ],
    typeSpeed: 50,
    backSpeed: 30,
    backDelay: 2000,
    loop: true,
    smartBackspace: true,
    cursor: '|',
    cursorChar: '_',
    contentType: 'html'
});

// ===========================
// STAT COUNTERS
// ===========================

function animateCounters() {
    const counters = document.querySelectorAll('.counter');
    
    counters.forEach(counter => {
        const target = parseInt(counter.dataset.target);
        let count = 0;
        
        const increment = target / 100;
        
        const timer = setInterval(() => {
            if (count < target) {
                count += increment;
                counter.textContent = Math.floor(count);
            } else {
                counter.textContent = target;
                clearInterval(timer);
            }
        }, 50);
    });
}

// Trigger counters when stats section comes into view
const statsSection = document.getElementById('stats');
const observerOptions = {
    threshold: 0.5
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            animateCounters();
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

if (statsSection) {
    observer.observe(statsSection);
}

// ===========================
// PROJECT MODAL
// ===========================

const projectModal = document.getElementById('projectModal');

if (projectModal) {
    const modalContent = document.getElementById('modalContent');
    const modalTitle = document.getElementById('modalTitle');

    const projectData = {
        1: {
            title: 'COGNIFYZ – Project 1: Exploratory Data Analysis & Data Cleaning',
            description: 'Performed structured EDA and preprocessing to transform raw datasets into analysis-ready data.',
            problem: 'Raw business datasets often contain missing values, duplicates, and inconsistent formats, making reliable analysis difficult.',
            solution: 'Used Python (Pandas) to clean and preprocess the dataset by handling null values, removing duplicates, correcting data types, and standardizing formats. Conducted exploratory analysis to understand data distributions and relationships.',
            tools: ['Python', 'Pandas', 'NumPy', 'Jupyter Notebook'],
            insights: [
                'Improved dataset quality through systematic preprocessing',
                'Identified missing value patterns and applied suitable imputation',
                'Standardized data formats for accurate downstream analysis',
                'Generated summary statistics for business understanding'
            ],
            metrics: {
                category: 'ETL',
                quality: 'Improved',
                readiness: 'Analysis-ready'
            },
            github: 'https://github.com/Vishv05/Cognifyz-Data-Analysis-Internship',
            liveDemo: ''
        },
        2: {
            title: 'COGNIFYZ – Project 2: Data Visualization & Trend Analysis',
            description: 'Created meaningful visualizations to identify trends, correlations, and patterns in structured datasets.',
            problem: 'Businesses struggle to interpret raw numerical data without clear visual representation.',
            solution: 'Built visual insights using Matplotlib and Seaborn, including distribution plots, bar charts, heatmaps, and trend graphs to highlight key patterns in the dataset.',
            tools: ['Python', 'Matplotlib', 'Seaborn', 'Pandas'],
            insights: [
                'Identified correlations using heatmap analysis',
                'Visualized category-wise distributions',
                'Highlighted key trends through time-series plots',
                'Transformed raw data into decision-support visuals'
            ],
            metrics: {
                category: 'Visualization',
                trend: 'Detected',
                decisioning: 'Improved'
            },
            github: 'https://github.com/Vishv05/Cognifyz-Data-Analysis-Internship',
            liveDemo: ''
        },
        3: {
            title: 'COGNIFYZ – Project 3: Insight Extraction & Business Reporting',
            description: 'Translated analytical findings into structured business insights for data-driven decision-making.',
            problem: 'Data analysis is ineffective without converting findings into actionable business insights.',
            solution: 'Analyzed processed data to extract meaningful insights, summarized findings in a structured report, and presented key conclusions supported by visual evidence.',
            tools: ['Python', 'Pandas', 'Matplotlib', 'Jupyter Notebook'],
            insights: [
                'Identified key performance indicators from dataset',
                'Provided insight-based recommendations',
                'Documented findings in a structured analytical report',
                'Connected technical analysis with business interpretation'
            ],
            metrics: {
                category: 'Analytics',
                output: 'Actionable insights',
                reporting: 'Structured'
            },
            github: 'https://github.com/Vishv05/Cognifyz-Data-Analysis-Internship',
            liveDemo: ''
        },
        4: {
            title: 'PRODIGY – Project 1: Data Preprocessing & Feature Analysis',
            description: 'Performed data cleaning and feature-level analysis to prepare datasets for machine learning tasks.',
            problem: 'Machine learning models require structured, clean, and well-understood input features to perform accurately.',
            solution: 'Applied preprocessing techniques such as handling missing values, encoding categorical variables, and analyzing feature distributions to prepare data for modeling.',
            tools: ['Python', 'Pandas', 'NumPy', 'Scikit-learn'],
            insights: [
                'Prepared dataset for model training',
                'Identified important features through exploratory analysis',
                'Reduced noise and inconsistencies in dataset',
                'Improved data quality for predictive modeling'
            ],
            metrics: {
                category: 'ETL',
                data_quality: 'Enhanced',
                ml_readiness: 'Prepared'
            },
            github: 'https://github.com/Vishv05/Prodigy-InfoTech-Data-Science-Internship',
            liveDemo: ''
        },
        5: {
            title: 'PRODIGY – Project 2: Data Visualization & Pattern Recognition',
            description: 'Built analytical visualizations to uncover patterns and distributions within the dataset.',
            problem: 'Understanding data behavior is critical before applying predictive models.',
            solution: 'Used visualization techniques to analyze relationships between variables, identify outliers, and detect patterns that influence outcomes.',
            tools: ['Python', 'Matplotlib', 'Seaborn'],
            insights: [
                'Identified trends and distribution behavior',
                'Detected outliers affecting model performance',
                'Visualized feature relationships for deeper understanding'
            ],
            metrics: {
                category: 'Visualization',
                outliers: 'Detected',
                patterns: 'Mapped'
            },
            github: 'https://github.com/Vishv05/Prodigy-InfoTech-Data-Science-Internship',
            liveDemo: ''
        },
        6: {
            title: 'PRODIGY – Project 3: Predictive Modeling Implementation',
            description: 'Implemented basic machine learning algorithms to build predictive models on structured datasets.',
            problem: 'Businesses require predictive insights to anticipate outcomes and optimize decision-making.',
            solution: 'Built and evaluated machine learning models using Scikit-learn, performed model validation, and interpreted results to understand predictive performance.',
            tools: ['Python', 'Scikit-learn', 'Pandas', 'NumPy'],
            insights: [
                'Trained and evaluated predictive models',
                'Compared model performance using evaluation metrics',
                'Interpreted results to assess model reliability',
                'Documented findings with structured explanations'
            ],
            metrics: {
                category: 'Machine Learning',
                validation: 'Completed',
                reliability: 'Assessed'
            },
            github: 'https://github.com/Vishv05/Prodigy-InfoTech-Data-Science-Internship',
            liveDemo: ''
        }
    };

    window.openProjectModal = function(projectId) {
        const project = projectData[projectId];
        if (!project) return;
        
        if (modalTitle && modalContent) {
            modalTitle.textContent = project.title;
            
            modalContent.innerHTML = `
                <div class="space-y-6">
                    <div>
                        <h4 class="text-lg font-semibold text-cyan-400 mb-2">Problem Statement</h4>
                        <p class="text-slate-300">${project.problem}</p>
                    </div>
                    
                    <div>
                        <h4 class="text-lg font-semibold text-cyan-400 mb-2">Solution</h4>
                        <p class="text-slate-300">${project.solution}</p>
                    </div>
                    
                    <div>
                        <h4 class="text-lg font-semibold text-cyan-400 mb-3">Key Insights</h4>
                        <ul class="space-y-2">
                            ${project.insights.map(insight => `<li class="flex items-start gap-2"><span class="text-cyan-400 mt-1">✓</span><span class="text-slate-300">${insight}</span></li>`).join('')}
                        </ul>
                    </div>
                    
                    <div>
                        <h4 class="text-lg font-semibold text-cyan-400 mb-3">Tools & Technologies</h4>
                        <div class="flex flex-wrap gap-2">
                            ${project.tools.map(tool => `<span class="px-3 py-1 bg-blue-900/40 text-blue-300 rounded-full text-sm font-semibold">${tool}</span>`).join('')}
                        </div>
                    </div>
                    
                    <div class="grid grid-cols-3 gap-4 pt-4 border-t border-slate-700">
                        ${Object.entries(project.metrics).map(([key, value]) => `
                            <div class="text-center">
                                <div class="text-2xl font-bold text-cyan-400">${value}</div>
                                <div class="text-xs text-slate-400 capitalize">${key}</div>
                            </div>
                        `).join('')}
                    </div>
                    
                    <div class="flex gap-3 pt-4">
                        <a href="${project.github}" target="_blank" rel="noopener noreferrer" class="flex-1 px-4 py-3 bg-blue-600 hover:bg-blue-700 rounded-lg text-center font-semibold transition-colors flex items-center justify-center gap-2">
                            <i class="fas fa-github"></i> View Code
                        </a>
                        <a href="${project.liveDemo || '#'}" ${project.liveDemo ? 'target="_blank" rel="noopener noreferrer"' : ''} class="flex-1 px-4 py-3 border-2 border-cyan-400 text-cyan-400 hover:bg-cyan-400/10 rounded-lg text-center font-semibold transition-colors flex items-center justify-center gap-2 ${project.liveDemo ? '' : 'opacity-60 cursor-not-allowed'}" ${project.liveDemo ? '' : 'onclick="event.preventDefault()"'}>
                            <i class="fas fa-external-link-alt"></i> ${project.liveDemo ? 'Live Demo' : 'N/A'}
                        </a>
                    </div>
                </div>
            `;
            
            projectModal.style.display = 'flex';
        }
    }

    window.closeProjectModal = function() {
        projectModal.style.display = 'none';
    }

    // Close modal when clicking outside
    projectModal.addEventListener('click', (e) => {
        if (e.target === projectModal) {
            window.closeProjectModal();
        }
    });

    // Close modal with Escape key
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && projectModal.style.display === 'flex') {
            window.closeProjectModal();
        }
    });
}

// ===========================
// CONTACT FORM HANDLING
// ===========================

// ===========================
// SKILL BARS ANIMATION
// ===========================

const skillObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const skillBars = entry.target.querySelectorAll('.skill-bar');
            skillBars.forEach(bar => {
                bar.style.animation = 'none';
                // Trigger reflow to restart animation
                void bar.offsetWidth;
                bar.style.animation = 'fillBar 0.8s ease forwards';
            });
            skillObserver.unobserve(entry.target);
        }
    });
}, { threshold: 0.5 });

const skillsSection = document.getElementById('skills');
if (skillsSection) {
    skillObserver.observe(skillsSection);
}

// ===========================
// PAGE LOAD ANIMATION
// ===========================

window.addEventListener('load', () => {
    // Add a subtle fade-in effect to the page
    document.body.style.animation = 'fadeIn 0.8s ease-out';
});

// ===========================
// HEADER SCROLL EFFECT
// ===========================

let lastScrollPosition = 0;
const header = document.querySelector('header');

window.addEventListener('scroll', () => {
    const scrollPosition = window.scrollY;
    
    if (scrollPosition > 50) {
        // Add scroll effect when scrolled
    }
    
    lastScrollPosition = scrollPosition;
});

// ===========================
// PROJECT FILTERS
// ===========================

const filterBtns = document.querySelectorAll('.filter-btn');
const projectCards = document.querySelectorAll('.project-card');

filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        const filter = btn.dataset.filter;
        
        // Update active button
        filterBtns.forEach(b => {
            b.classList.remove('active', 'bg-gradient-to-r', 'from-blue-500', 'to-cyan-500', 'text-white');
            b.classList.add('bg-slate-800/50', 'border', 'border-slate-700', 'text-slate-300');
        });
        btn.classList.add('active', 'bg-gradient-to-r', 'from-blue-500', 'to-cyan-500', 'text-white');
        btn.classList.remove('bg-slate-800/50', 'border', 'border-slate-700', 'text-slate-300');
        
        // Filter projects with animation
        projectCards.forEach((card, index) => {
            const categories = card.dataset.category;
            
            if (filter === 'all' || categories.includes(filter)) {
                setTimeout(() => {
                    card.style.display = 'block';
                    card.style.animation = 'fadeIn 0.5s ease-out';
                }, index * 50);
            } else {
                card.style.animation = 'fadeOut 0.3s ease-out';
                setTimeout(() => {
                    card.style.display = 'none';
                }, 300);
            }
        });
    });
});

// ===========================
// CONTACT FORM HANDLER
// ===========================

const emailJsConfig = {
    publicKey: 'LcFnpaFulo2V0vkNR',
    serviceId: 'service_m25mnoa',
    contactTemplateId: 'template_0ghi4qm',
    autoReplyTemplateId: 'template_b7oalvq'
};

let isEmailJsInitialized = false;

function isEmailJsConfigured() {
    return Object.values(emailJsConfig).every(value => typeof value === 'string' && value && !value.startsWith('YOUR_EMAILJS_'));
}

function initializeEmailJs() {
    if (isEmailJsInitialized) return true;
    if (!window.emailjs) return false;

    window.emailjs.init({
        publicKey: emailJsConfig.publicKey
    });

    isEmailJsInitialized = true;
    return true;
}

const contactForm = document.getElementById('contactForm');

if (contactForm) {
    const formStatus = document.getElementById('formStatus');
    const submitBtn = document.getElementById('submitBtn');
    const btnText = document.getElementById('btnText');

    contactForm.addEventListener('submit', async (e) => {
        e.preventDefault();
        
        // Get form data
        const formData = {
            name: document.getElementById('name').value.trim(),
            email: document.getElementById('email').value.trim(),
            subject: document.getElementById('subject').value.trim(),
            message: document.getElementById('message').value.trim()
        };
        
        // Basic validation
        if (!formData.name || !formData.email || !formData.subject || !formData.message) {
            showFormStatus('Please fill in all required fields.', 'error');
            return;
        }
        
        // Email validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(formData.email)) {
            showFormStatus('Please enter a valid email address.', 'error');
            return;
        }
        
        // Show loading state
        submitBtn.disabled = true;
        btnText.innerHTML = '<i class="fas fa-spinner fa-spin mr-2"></i>Sending...';
        formStatus.classList.add('hidden');

        if (!isEmailJsConfigured()) {
            showFormStatus('⚠️ Email service is not configured. Add your EmailJS keys in assets/js/main.js.', 'error');
            submitBtn.disabled = false;
            btnText.innerHTML = '<i class="fas fa-paper-plane mr-2"></i>Send Message';
            return;
        }

        if (!initializeEmailJs()) {
            showFormStatus('⚠️ EmailJS SDK failed to load. Refresh and try again.', 'error');
            submitBtn.disabled = false;
            btnText.innerHTML = '<i class="fas fa-paper-plane mr-2"></i>Send Message';
            return;
        }
        
        try {
            const templateParams = {
                from_name: formData.name,
                from_email: formData.email,
                reply_to: formData.email,
                subject: formData.subject,
                message: formData.message,
                to_name: 'Vishv Bhavsar',
                sent_at: new Date().toLocaleString()
            };

            await window.emailjs.send(
                emailJsConfig.serviceId,
                emailJsConfig.contactTemplateId,
                templateParams
            );

            const autoReplyParams = {
                to_name: formData.name,
                to_email: formData.email,
                from_name: 'Vishv Bhavsar',
                subject: formData.subject,
                original_message: formData.message,
                reply_message: 'Thank you for reaching out. I have received your message and will get back to you soon.'
            };

            await window.emailjs.send(
                emailJsConfig.serviceId,
                emailJsConfig.autoReplyTemplateId,
                autoReplyParams
            );

            showFormStatus('✅ Message sent successfully! Auto-reply has been sent to your email.', 'success');
            contactForm.reset();
            console.log('EmailJS submission succeeded:', {
                from: formData.email,
                subject: formData.subject
            });
            
        } catch (error) {
            // ERROR - Show error message
            showFormStatus('❌ Failed to send message. Please try again or email directly.', 'error');
            console.error('EmailJS submission error:', error);
        } finally {
            // Reset button state
            submitBtn.disabled = false;
            btnText.innerHTML = '<i class="fas fa-paper-plane mr-2"></i>Send Message';
        }
    });

    function showFormStatus(message, type) {
        formStatus.textContent = message;
        formStatus.classList.remove('hidden', 'bg-green-500/20', 'text-green-400', 'border', 'border-green-500/50', 'bg-red-500/20', 'text-red-400', 'border-red-500/50');
        
        if (type === 'success') {
            formStatus.classList.add('bg-green-500/20', 'text-green-400', 'border', 'border-green-500/50');
        } else {
            formStatus.classList.add('bg-red-500/20', 'text-red-400', 'border', 'border-red-500/50');
        }
        formStatus.classList.remove('hidden');
        
        // Auto-hide after 5 seconds
        setTimeout(() => {
            formStatus.classList.add('hidden');
        }, 5000);
    }
}

// Log initialization
console.log('✨ Portfolio site loaded successfully!');
console.log('🚀 All animations and interactions are ready.');
