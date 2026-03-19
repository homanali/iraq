// ==============================================
// مەخزەنی لای ڕاست (Box)
// ==============================================
function toggleSidebar() {
    document.getElementById('sidebar').classList.toggle('open');
}

// داخستنی مەخزەن کاتێک لە دەرەوەی کلیک دەکەیت
document.addEventListener('click', function(e) {
    const sidebar = document.getElementById('sidebar');
    const toggleBtn = document.querySelector('.sidebar-toggle');
    
    if (sidebar && toggleBtn) {
        if (!sidebar.contains(e.target) && !toggleBtn.contains(e.target) && sidebar.classList.contains('open')) {
            sidebar.classList.remove('open');
        }
    }
});

// ==============================================
// مۆدالەکان
// ==============================================
function openModal(type) {
    const modal = document.getElementById('modal');
    const body = document.getElementById('modal-body');
    let content = '';

    if (type === 'books') {
        content = `
            <h2 class="modal-title">پەرتووک</h2>
            <div style="text-align: center;">
                <div class="book-item">
                    <i class="fas fa-book-open"></i>
                    <span>Arduino Programming</span>
                    <p style="color: #aaa; margin-top: 8px;">فێربوونی Arduino لە سەرەتاوە</p>
                    <a href="https://www.arduino.cc/en/Tutorial/HomePage" target="_blank" class="book-link">
                        <i class="fas fa-external-link-alt"></i> بینینی پەرتووک
                    </a>
                </div>
            </div>
        `;
    } 
    else if (type === 'skills') {
        content = `
            <h2 class="modal-title">بەهرە و تواناکانم</h2>
            
            <!-- بەشی کارەبا و ئەلکترۆنیک -->
            <div class="skill-category">
                <h3 class="category-title"><i class="fas fa-bolt"></i> کارەبا و ئەلکترۆنیک</h3>
                <div class="skills-grid-new">
                    <div class="skill-card">
                        <div class="skill-icon"><i class="fas fa-bolt"></i></div>
                        <span class="skill-name">Power System</span>
                    </div>
                    <div class="skill-card">
                        <div class="skill-icon"><i class="fas fa-microchip"></i></div>
                        <span class="skill-name">ئەلکترۆنیک</span>
                    </div>
                    <div class="skill-card">
                        <div class="skill-icon"><i class="fas fa-chart-bar"></i></div>
                        <span class="skill-name">کارەبای کلاسیک</span>
                    </div>
                    <div class="skill-card">
                        <div class="skill-icon"><i class="fas fa-project-diagram"></i></div>
                        <span class="skill-name">PLC</span>
                    </div>
                    <div class="skill-card">
                        <div class="skill-icon"><i class="fas fa-microchip"></i></div>
                        <span class="skill-name">Arduino UNO</span>
                    </div>
                    <div class="skill-card">
                        <div class="skill-icon"><i class="fas fa-microchip"></i></div>
                        <span class="skill-name">Emu8086</span>
                    </div>
                </div>
            </div>
            
            <!-- بەشی نەرمەکاڵا و پرۆگرامسازی -->
            <div class="skill-category">
                <h3 class="category-title"><i class="fas fa-code"></i> نەرمەکاڵا و پرۆگرامسازی</h3>
                <div class="skills-grid-new">
                    <div class="skill-card">
                        <div class="skill-icon"><i class="fas fa-cogs"></i></div>
                        <span class="skill-name">Multisim</span>
                    </div>
                    <div class="skill-card">
                        <div class="skill-icon"><i class="fas fa-cube"></i></div>
                        <span class="skill-name">MATLAB</span>
                    </div>
                    <div class="skill-card">
                        <div class="skill-icon"><i class="fas fa-chart-line"></i></div>
                        <span class="skill-name">LabVIEW</span>
                    </div>
                    <div class="skill-card">
                        <div class="skill-icon"><i class="fab fa-python"></i></div>
                        <span class="skill-name">Python</span>
                    </div>
                    <div class="skill-card">
                        <div class="skill-icon"><i class="fas fa-code"></i></div>
                        <span class="skill-name">C++</span>
                    </div>
                    <div class="skill-card">
                        <div class="skill-icon"><i class="fas fa-database"></i></div>
                        <span class="skill-name">Data Structure</span>
                    </div>
                </div>
            </div>
            
            <!-- بەشی تۆڕ و ئاسایش -->
            <div class="skill-category">
                <h3 class="category-title"><i class="fas fa-network-wired"></i> تۆڕ و ئاسایش</h3>
                <div class="skills-grid-new">
                    <div class="skill-card">
                        <div class="skill-icon"><i class="fas fa-network-wired"></i></div>
                        <span class="skill-name">Cisco</span>
                    </div>
                    <div class="skill-card">
                        <div class="skill-icon"><i class="fas fa-shield-alt"></i></div>
                        <span class="skill-name">Wireshark</span>
                    </div>
                    <div class="skill-card">
                        <div class="skill-icon"><i class="fab fa-linux"></i></div>
                        <span class="skill-name">Linux/Kali</span>
                    </div>
                    <div class="skill-card">
                        <div class="skill-icon"><i class="fas fa-brain"></i></div>
                        <span class="skill-name">Machine Learning</span>
                    </div>
                </div>
            </div>
            
            <!-- بەشی دیزاین و میدیا -->
            <div class="skill-category">
                <h3 class="category-title"><i class="fas fa-paint-brush"></i> دیزاین و میدیا</h3>
                <div class="skills-grid-new">
                    <div class="skill-card">
                        <div class="skill-icon"><i class="fab fa-html5"></i></div>
                        <span class="skill-name">HTML/CSS</span>
                    </div>
                    <div class="skill-card">
                        <div class="skill-icon"><i class="fas fa-camera"></i></div>
                        <span class="skill-name">Adobe PR</span>
                    </div>
                    <div class="skill-card">
                        <div class="skill-icon"><i class="fas fa-film"></i></div>
                        <span class="skill-name">Adobe AE</span>
                    </div>
                    <div class="skill-card">
                        <div class="skill-icon"><i class="fas fa-image"></i></div>
                        <span class="skill-name">Adobe PS</span>
                    </div>
                    <div class="skill-card">
                        <div class="skill-icon"><i class="fas fa-cube"></i></div>
                        <span class="skill-name">2D/3D</span>
                    </div>
                </div>
            </div>
        `;
    } 
    else if (type === 'projects') {
        const projects = [
            { title: 'کارەباى كلاسيك', desc: 'دانانی پلانی خانوو', link: '#', image: '10.jpg' },
            { title: 'پرۆژەی ئاردوینۆ', desc: 'Arduino & Plc & Image', link: '#', image: '11.jpg' },
            { title: 'کۆدی پرۆگرامسازی', desc: 'Python & C++ & HTML/CSS ', link: '#', image: '12.jpg' },
            { title: 'AI robot', desc: 'Machine Learning', link: '#', image: '13.jpg' },
            { title: 'پرۆژەی Adobe', desc: 'After Effects & Photoshop & Premiere', link: '#', image: '14.jpg' },
            { title: 'سۆشیال میدیا & زانیاری کۆمپیوتەر ', desc: 'Pc', link: '#', image: '15.jpg' }
        ];
        
        content = `<h2 class="modal-title">پرۆژەکانم</h2><div class="projects-grid">`;
        
        projects.forEach(project => {
            content += `
                <div class="project-card" onclick="window.open('${project.link}', '_blank');">
                    <div class="project-image">
                        <img src="${project.image}" alt="${project.title}" onerror="this.src='https://via.placeholder.com/140x140/1a1a2a/ffd700?text=پڕۆژە'">
                    </div>
                    <div class="project-info">
                        <h4>${project.title}</h4>
                        <p>${project.desc}</p>
                        <a href="${project.link}" target="_blank" class="project-link">
                            <i class="fas fa-external-link-alt"></i> بینین
                        </a>
                    </div>
                </div>
            `;
        });
        
        content += `</div>`;
    }

    body.innerHTML = content;
    modal.classList.add('active');
}

function openContactModal() {
    document.getElementById('contact-modal').classList.add('active');
}

function closeModal() {
    document.getElementById('modal').classList.remove('active');
}

function closeContactModal() {
    document.getElementById('contact-modal').classList.remove('active');
}

window.addEventListener('click', function(e) {
    const modal = document.getElementById('modal');
    const cModal = document.getElementById('contact-modal');
    if (e.target === modal) closeModal();
    if (e.target === cModal) closeContactModal();
});

// ==============================================
// فۆڕمی پەیوەندی (ناردن بۆ ئیمەیڵ)
// ==============================================
document.getElementById('contactForm')?.addEventListener('submit', function(e) {
    e.preventDefault();
    
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const subject = document.getElementById('subject').value;
    const message = document.getElementById('message').value;
    
    const feedback = document.getElementById('form-feedback');
    feedback.style.display = 'block';
    feedback.innerHTML = '⏳ پەیامەکەت دەنێردرێت بۆ homanali375@gmail.com...';
    
    // دروستکردنی لینکی mailto
    const mailtoLink = `mailto:homanali375@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(
        `ناو: ${name}\nئیمەیڵ: ${email}\n\nپەیام:\n${message}`
    )}`;
    
    // نیشاندانی پەیامی سەرکەوتن
    setTimeout(() => {
        feedback.innerHTML = '✅ پەیامەکەت ئامادەیە! تکایە لە ئیمەیڵەکەتدا ناردنی پەسەند بکە.';
        feedback.style.color = '#4caf50';
        
        // کردنەوەی ئیمەیڵ بۆ ناردن
        window.location.href = mailtoLink;
        
        document.getElementById('contactForm').reset();
        
        setTimeout(() => {
            closeContactModal();
            feedback.style.display = 'none';
            feedback.innerHTML = '';
        }, 5000);
    }, 1000);
});

// ==============================================
// ژمێرەری سەردانکەران
// ==============================================
function initVisitorCounter() {
    let count = localStorage.getItem('visitorCount');
    count = count ? parseInt(count) + 1 : 1;
    localStorage.setItem('visitorCount', count);
    
    const digits = ['٠','١','٢','٣','٤','٥','٦','٧','٨','٩'];
    const element = document.getElementById('visitor-count');
    if (element) {
        element.textContent = count.toString().split('').map(d => digits[parseInt(d)]).join('');
    }
}

// ==============================================
// ڕێکخستنی لینکی CV
// ==============================================
function setupCVLink() {
    const cvLink = document.getElementById('cv-link');
    if (cvLink) {
        cvLink.href = '#'; // لە جێگەی #، لینکی CV ی خۆت دابنێ
    }
}

// ==============================================
// دەستپێکردن
// ==============================================
document.addEventListener('DOMContentLoaded', function() {
    initVisitorCounter();
    setupCVLink();
    
    const counterElement = document.querySelector('.visitor-counter');
    if (counterElement) {
        counterElement.addEventListener('dblclick', function() {
            if (confirm('دڵنیایت دەتەوێت ژمێرەر ڕێک بخەیتەوە؟')) {
                localStorage.removeItem('visitorCount');
                initVisitorCounter();
            }
        });
    }
});