// Admin Panel JavaScript
document.addEventListener('DOMContentLoaded', function() {
    // Initialize admin panel
    initializeAdmin();
    
    // Load initial data
    loadDashboardData();
    loadPostsData();
    loadProjectsData();
});

// Initialize admin panel
function initializeAdmin() {
    // Load data from localStorage on startup
    loadDataFromStorage();
    
    // Sidebar navigation
    const navLinks = document.querySelectorAll('.nav-link[data-section]');
    const sections = document.querySelectorAll('.admin-section');
    const pageTitle = document.getElementById('pageTitle');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetSection = this.getAttribute('data-section');
            
            // Remove active class from all links and sections
            navLinks.forEach(l => l.classList.remove('active'));
            sections.forEach(s => s.classList.remove('active'));
            
            // Add active class to clicked link and target section
            this.classList.add('active');
            const targetElement = document.getElementById(targetSection);
            if (targetElement) {
                targetElement.classList.add('active');
            }
            
            // Update page title
            updatePageTitle(targetSection);
        });
    });
    
    // Sidebar toggle
    const sidebarToggle = document.getElementById('sidebarToggle');
    const sidebar = document.getElementById('sidebar');
    const mainContent = document.querySelector('.admin-main');
    
    sidebarToggle.addEventListener('click', function() {
        sidebar.classList.toggle('collapsed');
        mainContent.classList.toggle('expanded');
    });
    
    // Close sidebar on mobile when clicking outside
    document.addEventListener('click', function(e) {
        if (window.innerWidth <= 768) {
            if (!sidebar.contains(e.target) && !sidebarToggle.contains(e.target)) {
                sidebar.classList.remove('show');
            }
        }
    });
}

// Update page title based on section
function updatePageTitle(section) {
    const titles = {
        'dashboard': 'Dashboard',
        'posts': 'Quản lý bài viết',
        'projects': 'Quản lý dự án',
        'profile': 'Thông tin cá nhân',
        'settings': 'Cài đặt'
    };
    
    const pageTitle = document.getElementById('pageTitle');
    if (pageTitle && titles[section]) {
        pageTitle.textContent = titles[section];
    }
}

// Dashboard data
const dashboardData = {
    posts: 6,
    views: 10500,
    projects: 5,
    comments: 24
};

// Posts data
let postsData = [
    {
        id: 1,
        title: "Học C# từ cơ bản đến nâng cao - Phần 1",
        category: "C# Programming",
        status: "published",
        views: 1250,
        date: "15/01/2024",
        excerpt: "C# là một ngôn ngữ lập trình mạnh mẽ và phổ biến. Trong bài viết này, tôi sẽ chia sẻ kinh nghiệm học C# từ những kiến thức cơ bản nhất.",
        content: "Nội dung chi tiết của bài viết..."
    },
    {
        id: 2,
        title: "Thuật toán sắp xếp nhanh (Quick Sort)",
        category: "Thuật toán",
        status: "published",
        views: 980,
        date: "10/01/2024",
        excerpt: "Quick Sort là một trong những thuật toán sắp xếp hiệu quả nhất. Bài viết này sẽ giải thích chi tiết cách hoạt động và cách implement trong C#.",
        content: "Nội dung chi tiết của bài viết..."
    },
    {
        id: 3,
        title: "Xây dựng ứng dụng Web API với ASP.NET Core",
        category: "Web Development",
        status: "published",
        views: 1450,
        date: "05/01/2024",
        excerpt: "Hướng dẫn chi tiết cách tạo Web API với ASP.NET Core, từ cơ bản đến các tính năng nâng cao như authentication, validation và documentation.",
        content: "Nội dung chi tiết của bài viết..."
    },
    {
        id: 4,
        title: "Kinh nghiệm thực tập tại công ty công nghệ",
        category: "Kinh nghiệm",
        status: "published",
        views: 2100,
        date: "01/01/2024",
        excerpt: "Chia sẻ kinh nghiệm thực tập tại công ty công nghệ, từ cách chuẩn bị CV, phỏng vấn đến những kỹ năng cần thiết để thành công.",
        content: "Nội dung chi tiết của bài viết..."
    },
    {
        id: 5,
        title: "Làm việc với Database SQL Server",
        category: "Database",
        status: "published",
        views: 1680,
        date: "28/12/2023",
        excerpt: "Hướng dẫn chi tiết cách làm việc với SQL Server, từ cài đặt, tạo database đến các query phức tạp và optimization.",
        content: "Nội dung chi tiết của bài viết..."
    },
    {
        id: 6,
        title: "Cuộc sống sinh viên CNTT - Cân bằng giữa học tập và giải trí",
        category: "Cuộc sống sinh viên",
        status: "published",
        views: 3200,
        date: "25/12/2023",
        excerpt: "Chia sẻ về cuộc sống sinh viên ngành CNTT, cách cân bằng giữa việc học, làm project và thời gian giải trí.",
        content: "Nội dung chi tiết của bài viết..."
    }
];

// Projects data
let projectsData = [
    {
        id: 1,
        name: "Hệ thống quản lý thư viện",
        description: "Ứng dụng web quản lý thư viện sử dụng ASP.NET Core và SQL Server",
        technologies: "C#, ASP.NET Core, SQL Server, Bootstrap",
        status: "completed",
        link: "project-1.html"
    },
    {
        id: 2,
        name: "Website bán hàng online",
        description: "E-commerce website với ReactJS và Node.js",
        technologies: "ReactJS, Node.js, MongoDB, Stripe",
        status: "completed",
        link: "project-2.html"
    },
    {
        id: 3,
        name: "Ứng dụng quản lý sinh viên",
        description: "Desktop application quản lý thông tin sinh viên",
        technologies: "C#, WinForms, SQL Server, Entity Framework",
        status: "in-progress",
        link: "project-3.html"
    }
];

// Load dashboard data
function loadDashboardData() {
    // Dashboard data is already loaded in HTML
    // This function can be used to fetch real data from API
    console.log('Dashboard data loaded');
}

// Load posts data
function loadPostsData() {
    const tableBody = document.getElementById('allPostsTableBody');
    if (!tableBody) return;
    
    console.log('Loading posts data:', postsData); // Debug log
    
    tableBody.innerHTML = postsData.map(post => `
        <tr>
            <td>${post.id}</td>
            <td>${post.title}</td>
            <td>${post.category}</td>
            <td><span class="status-badge status-${post.status}">${getStatusText(post.status)}</span></td>
            <td>${post.views.toLocaleString()}</td>
            <td>${post.date}</td>
            <td>
                <button class="btn btn-sm btn-primary" onclick="editPost(${post.id})">Sửa</button>
                <button class="btn btn-sm btn-danger" onclick="deletePost(${post.id})">Xóa</button>
            </td>
        </tr>
    `).join('');
}

// Load projects data
function loadProjectsData() {
    const tableBody = document.getElementById('projectsTableBody');
    if (!tableBody) return;
    
    tableBody.innerHTML = projectsData.map(project => `
        <tr>
            <td>${project.id}</td>
            <td>${project.name}</td>
            <td>${project.description}</td>
            <td>${project.technologies}</td>
            <td><span class="status-badge status-${project.status}">${getProjectStatusText(project.status)}</span></td>
            <td>
                <button class="btn btn-sm btn-primary" onclick="editProject(${project.id})">Sửa</button>
                <button class="btn btn-sm btn-danger" onclick="deleteProject(${project.id})">Xóa</button>
            </td>
        </tr>
    `).join('');
}

// Get status text
function getStatusText(status) {
    const statusTexts = {
        'published': 'Đã xuất bản',
        'draft': 'Bản nháp',
        'archived': 'Đã lưu trữ'
    };
    return statusTexts[status] || status;
}

// Get project status text
function getProjectStatusText(status) {
    const statusTexts = {
        'completed': 'Hoàn thành',
        'in-progress': 'Đang phát triển',
        'planned': 'Dự kiến'
    };
    return statusTexts[status] || status;
}

// Modal functions
function showAddPostModal() {
    const modal = document.getElementById('addPostModal');
    modal.classList.add('show');
    document.body.style.overflow = 'hidden';
}

function showAddProjectModal() {
    const modal = document.getElementById('addProjectModal');
    modal.classList.add('show');
    document.body.style.overflow = 'hidden';
}

function showEditProfileModal() {
    const modal = document.getElementById('editProfileModal');
    modal.classList.add('show');
    document.body.style.overflow = 'hidden';
}

function closeModal(modalId) {
    const modal = document.getElementById(modalId);
    modal.classList.remove('show');
    document.body.style.overflow = 'auto';
}

// Close modal when clicking outside
document.addEventListener('click', function(e) {
    if (e.target.classList.contains('modal')) {
        e.target.classList.remove('show');
        document.body.style.overflow = 'auto';
    }
});

// Save post
function savePost() {
    const form = document.getElementById('addPostForm');
    const formData = new FormData(form);
    const data = Object.fromEntries(formData);
    
    // Validate form
    if (!data.title || !data.category || !data.content) {
        showAlert('Vui lòng điền đầy đủ thông tin bắt buộc!', 'error');
        return;
    }
    
    // Create new post
    const newPost = {
        id: postsData.length + 1,
        title: data.title,
        category: data.category,
        status: data.status,
        views: 0,
        date: new Date().toLocaleDateString('vi-VN'),
        excerpt: data.excerpt,
        content: data.content
    };
    
    // Add to data
    postsData.unshift(newPost);
    
    // Update tables
    loadPostsData();
    loadDashboardData();
    
    // Close modal
    closeModal('addPostModal');
    
    // Reset form
    form.reset();
    
    // Show success message
    showAlert('Bài viết đã được thêm thành công!', 'success');
}

// Save project
function saveProject() {
    const form = document.getElementById('addProjectForm');
    const formData = new FormData(form);
    const data = Object.fromEntries(formData);
    
    // Validate form
    if (!data.name || !data.description) {
        showAlert('Vui lòng điền đầy đủ thông tin bắt buộc!', 'error');
        return;
    }
    
    // Create new project
    const newProject = {
        id: projectsData.length + 1,
        name: data.name,
        description: data.description,
        technologies: data.technologies,
        status: data.status,
        link: data.link
    };
    
    // Add to data
    projectsData.unshift(newProject);
    
    // Update tables
    loadProjectsData();
    loadDashboardData();
    
    // Close modal
    closeModal('addProjectModal');
    
    // Reset form
    form.reset();
    
    // Show success message
    showAlert('Dự án đã được thêm thành công!', 'success');
}

// Save profile
function saveProfile() {
    const form = document.getElementById('editProfileForm');
    const formData = new FormData(form);
    const data = Object.fromEntries(formData);
    
    // Validate form
    if (!data.name || !data.email) {
        showAlert('Vui lòng điền đầy đủ thông tin bắt buộc!', 'error');
        return;
    }
    
    // Update personal info data
    personalInfo = {
        name: data.name,
        birthday: data.birthday,
        hometown: data.hometown,
        email: data.email,
        phone: data.phone,
        university: data.university || "Đại học Công nghệ TP.HCM (HUTECH)",
        major: data.major || "Công nghệ Thông tin",
        specialization: data.specialization || "Công nghệ phần mềm",
        gpa: data.gpa || "3.5/4.0",
        studyPeriod: data.studyPeriod || "2022 - 2026"
    };
    
    console.log('Profile updated:', personalInfo);
    
    // Save to localStorage
    saveDataToStorage();
    
    // Update form display
    updatePersonalInfoForm();
    
    // Close modal
    closeModal('editProfileModal');
    
    // Show success message
    showAlert('Thông tin cá nhân đã được cập nhật!', 'success');
    
    // Trigger sync with homepage
    setTimeout(() => {
        syncPersonalInfo();
    }, 1000);
}

// Edit post
function editPost(id) {
    const post = postsData.find(p => p.id === id);
    if (!post) return;
    
    // Show edit modal with pre-filled data
    showEditPostModal(post);
}

// Edit project
function editProject(id) {
    const project = projectsData.find(p => p.id === id);
    if (!project) return;
    
    // Show edit modal with pre-filled data
    showEditProjectModal(project);
}

// Delete post
function deletePost(id) {
    const post = postsData.find(p => p.id === id);
    if (!post) return;
    
    if (confirm(`Bạn có chắc chắn muốn xóa bài viết "${post.title}"?`)) {
        postsData = postsData.filter(p => p.id !== id);
        loadPostsData();
        loadDashboardData();
        showAlert('Bài viết đã được xóa!', 'success');
    }
}

// Delete project
function deleteProject(id) {
    const project = projectsData.find(p => p.id === id);
    if (!project) return;
    
    if (confirm(`Bạn có chắc chắn muốn xóa dự án "${project.name}"?`)) {
        projectsData = projectsData.filter(p => p.id !== id);
        loadProjectsData();
        loadDashboardData();
        showAlert('Dự án đã được xóa!', 'success');
    }
}

// Show alert
function showAlert(message, type = 'info') {
    // Remove existing alerts
    const existingAlerts = document.querySelectorAll('.alert');
    existingAlerts.forEach(alert => alert.remove());
    
    // Create alert element
    const alert = document.createElement('div');
    alert.className = `alert alert-${type === 'error' ? 'error' : 'success'}`;
    alert.textContent = message;
    
    // Add styles
    alert.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        z-index: 10000;
        max-width: 300px;
        animation: slideIn 0.3s ease;
    `;
    
    // Add animation
    const style = document.createElement('style');
    style.textContent = `
        @keyframes slideIn {
            from { transform: translateX(100%); opacity: 0; }
            to { transform: translateX(0); opacity: 1; }
        }
    `;
    document.head.appendChild(style);
    
    // Add to page
    document.body.appendChild(alert);
    
    // Auto remove after 3 seconds
    setTimeout(() => {
        alert.style.animation = 'slideIn 0.3s ease reverse';
        setTimeout(() => {
            alert.remove();
        }, 300);
    }, 3000);
}

// Search functionality
function searchPosts(query) {
    if (!query) {
        loadPostsData();
        return;
    }
    
    const filteredPosts = postsData.filter(post => 
        post.title.toLowerCase().includes(query.toLowerCase()) ||
        post.category.toLowerCase().includes(query.toLowerCase()) ||
        post.excerpt.toLowerCase().includes(query.toLowerCase())
    );
    
    const tableBody = document.getElementById('allPostsTableBody');
    if (!tableBody) return;
    
    tableBody.innerHTML = filteredPosts.map(post => `
        <tr>
            <td>${post.id}</td>
            <td>${post.title}</td>
            <td>${post.category}</td>
            <td><span class="status-badge status-${post.status}">${getStatusText(post.status)}</span></td>
            <td>${post.views.toLocaleString()}</td>
            <td>${post.date}</td>
            <td>
                <button class="btn btn-sm btn-primary" onclick="editPost(${post.id})">Sửa</button>
                <button class="btn btn-sm btn-danger" onclick="deletePost(${post.id})">Xóa</button>
            </td>
        </tr>
    `).join('');
}

// Search projects
function searchProjects(query) {
    if (!query) {
        loadProjectsData();
        return;
    }
    
    const filteredProjects = projectsData.filter(project => 
        project.name.toLowerCase().includes(query.toLowerCase()) ||
        project.description.toLowerCase().includes(query.toLowerCase()) ||
        project.technologies.toLowerCase().includes(query.toLowerCase())
    );
    
    const tableBody = document.getElementById('projectsTableBody');
    if (!tableBody) return;
    
    tableBody.innerHTML = filteredProjects.map(project => `
        <tr>
            <td>${project.id}</td>
            <td>${project.name}</td>
            <td>${project.description}</td>
            <td>${project.technologies}</td>
            <td><span class="status-badge status-${project.status}">${getProjectStatusText(project.status)}</span></td>
            <td>
                <button class="btn btn-sm btn-primary" onclick="editProject(${project.id})">Sửa</button>
                <button class="btn btn-sm btn-danger" onclick="deleteProject(${project.id})">Xóa</button>
            </td>
        </tr>
    `).join('');
}

// Export data
function exportData() {
    const data = {
        posts: postsData,
        projects: projectsData,
        exportDate: new Date().toISOString()
    };
    
    const blob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `blog-backup-${new Date().toISOString().split('T')[0]}.json`;
    a.click();
    URL.revokeObjectURL(url);
    
    showAlert('Dữ liệu đã được xuất thành công!', 'success');
}

// Import data
function importData(file) {
    if (!file) return;
    
    const reader = new FileReader();
    reader.onload = function(e) {
        try {
            const data = JSON.parse(e.target.result);
            
            if (data.posts) {
                postsData = data.posts;
                loadPostsData();
            }
            
            if (data.projects) {
                projectsData = data.projects;
                loadProjectsData();
            }
            
            showAlert('Dữ liệu đã được nhập thành công!', 'success');
        } catch (error) {
            showAlert('Lỗi khi đọc file. Vui lòng kiểm tra định dạng file!', 'error');
        }
    };
    reader.readAsText(file);
}

// Keyboard shortcuts
document.addEventListener('keydown', function(e) {
    // Escape key to close modals
    if (e.key === 'Escape') {
        const modals = document.querySelectorAll('.modal.show');
        modals.forEach(modal => {
            modal.classList.remove('show');
            document.body.style.overflow = 'auto';
        });
    }
    
    // Ctrl + N for new post
    if (e.ctrlKey && e.key === 'n') {
        e.preventDefault();
        showAddPostModal();
    }
    
    // Ctrl + P for new project
    if (e.ctrlKey && e.key === 'p') {
        e.preventDefault();
        showAddProjectModal();
    }
});

// Auto-save functionality (for forms)
function enableAutoSave() {
    const forms = document.querySelectorAll('form');
    forms.forEach(form => {
        const inputs = form.querySelectorAll('input, textarea, select');
        inputs.forEach(input => {
            input.addEventListener('input', function() {
                // Save to localStorage
                const formData = new FormData(form);
                const data = Object.fromEntries(formData);
                localStorage.setItem(`form-${form.id}`, JSON.stringify(data));
            });
        });
    });
}

// Load auto-saved data
function loadAutoSavedData() {
    const forms = document.querySelectorAll('form');
    forms.forEach(form => {
        const savedData = localStorage.getItem(`form-${form.id}`);
        if (savedData) {
            try {
                const data = JSON.parse(savedData);
                Object.keys(data).forEach(key => {
                    const input = form.querySelector(`[name="${key}"]`);
                    if (input) {
                        input.value = data[key];
                    }
                });
            } catch (error) {
                console.error('Error loading auto-saved data:', error);
            }
        }
    });
}

// Initialize auto-save
enableAutoSave();
loadAutoSavedData();

// Real-time statistics update
function updateStatistics() {
    // Update dashboard cards with real-time data
    const postCount = postsData.length;
    const totalViews = postsData.reduce((sum, post) => sum + post.views, 0);
    const projectCount = projectsData.length;
    
    // Update DOM elements if they exist
    const postCountElement = document.querySelector('.dashboard-card:nth-child(1) .card-value');
    const viewsElement = document.querySelector('.dashboard-card:nth-child(2) .card-value');
    const projectElement = document.querySelector('.dashboard-card:nth-child(3) .card-value');
    
    if (postCountElement) postCountElement.textContent = postCount;
    if (viewsElement) viewsElement.textContent = totalViews.toLocaleString();
    if (projectElement) projectElement.textContent = projectCount;
}

// Update statistics every 30 seconds
setInterval(updateStatistics, 30000);

// Initialize statistics
updateStatistics();

// Show edit post modal with pre-filled data
function showEditPostModal(post) {
    console.log('Opening edit modal for post:', post); // Debug log
    
    const modal = document.getElementById('editPostModal');
    const form = document.getElementById('editPostForm');
    
    if (!modal || !form) {
        showAlert('Lỗi: Không tìm thấy modal hoặc form!', 'error');
        return;
    }
    
    // Fill form with post data
    document.getElementById('editPostId').value = post.id;
    document.getElementById('editPostTitle').value = post.title;
    document.getElementById('editPostCategory').value = post.category;
    document.getElementById('editPostExcerpt').value = post.excerpt;
    document.getElementById('editPostContent').value = post.content;
    document.getElementById('editPostStatus').value = post.status;
    
    console.log('Form filled with data:', {
        id: post.id,
        title: post.title,
        category: post.category
    }); // Debug log
    
    // Show modal
    modal.classList.add('show');
    document.body.style.overflow = 'hidden';
}

// Show edit project modal with pre-filled data
function showEditProjectModal(project) {
    const modal = document.getElementById('editProjectModal');
    const form = document.getElementById('editProjectForm');
    
    // Fill form with project data
    document.getElementById('editProjectId').value = project.id;
    document.getElementById('editProjectName').value = project.name;
    document.getElementById('editProjectDescription').value = project.description;
    document.getElementById('editProjectTechnologies').value = project.technologies;
    document.getElementById('editProjectLink').value = project.link;
    document.getElementById('editProjectStatus').value = project.status;
    
    // Show modal
    modal.classList.add('show');
    document.body.style.overflow = 'hidden';
}

// Update post
function updatePost() {
    const form = document.getElementById('editPostForm');
    const formData = new FormData(form);
    const data = Object.fromEntries(formData);
    const postId = parseInt(data.id);
    
    console.log('Updating post:', data); // Debug log
    
    // Validate form
    if (!data.title || !data.category || !data.content) {
        showAlert('Vui lòng điền đầy đủ thông tin bắt buộc!', 'error');
        return;
    }
    
    // Find and update post
    const postIndex = postsData.findIndex(p => p.id === postId);
    console.log('Post index:', postIndex); // Debug log
    
    if (postIndex !== -1) {
        // Update the post data
        postsData[postIndex].title = data.title;
        postsData[postIndex].category = data.category;
        postsData[postIndex].excerpt = data.excerpt;
        postsData[postIndex].content = data.content;
        postsData[postIndex].status = data.status;
        
        console.log('Updated post:', postsData[postIndex]); // Debug log
        
        // Update tables
        loadPostsData();
        loadDashboardData();
        
        // Close modal
        closeModal('editPostModal');
        
        // Show success message
        showAlert('Bài viết đã được cập nhật thành công!', 'success');
    } else {
        showAlert('Không tìm thấy bài viết để cập nhật!', 'error');
    }
}

// Update project
function updateProject() {
    const form = document.getElementById('editProjectForm');
    const formData = new FormData(form);
    const data = Object.fromEntries(formData);
    const projectId = parseInt(data.id);
    
    console.log('Updating project:', data); // Debug log
    
    // Validate form
    if (!data.name || !data.description) {
        showAlert('Vui lòng điền đầy đủ thông tin bắt buộc!', 'error');
        return;
    }
    
    // Find and update project
    const projectIndex = projectsData.findIndex(p => p.id === projectId);
    console.log('Project index:', projectIndex); // Debug log
    
    if (projectIndex !== -1) {
        // Update the project data
        projectsData[projectIndex].name = data.name;
        projectsData[projectIndex].description = data.description;
        projectsData[projectIndex].technologies = data.technologies;
        projectsData[projectIndex].link = data.link;
        projectsData[projectIndex].status = data.status;
        
        console.log('Updated project:', projectsData[projectIndex]); // Debug log
        
        // Update tables
        loadProjectsData();
        loadDashboardData();
        
        // Close modal
        closeModal('editProjectModal');
        
        // Show success message
        showAlert('Dự án đã được cập nhật thành công!', 'success');
    } else {
        showAlert('Không tìm thấy dự án để cập nhật!', 'error');
    }
}

// Enhanced delete functions with better confirmation
function deletePost(id) {
    const post = postsData.find(p => p.id === id);
    if (!post) return;
    
    // Create custom confirmation dialog
    const confirmed = confirm(`Bạn có chắc chắn muốn xóa bài viết "${post.title}"?\n\nHành động này không thể hoàn tác!`);
    
    if (confirmed) {
        // Remove from data
        postsData = postsData.filter(p => p.id !== id);
        
        // Update tables
        loadPostsData();
        loadDashboardData();
        
        // Show success message
        showAlert(`Bài viết "${post.title}" đã được xóa!`, 'success');
    }
}

function deleteProject(id) {
    const project = projectsData.find(p => p.id === id);
    if (!project) return;
    
    // Create custom confirmation dialog
    const confirmed = confirm(`Bạn có chắc chắn muốn xóa dự án "${project.name}"?\n\nHành động này không thể hoàn tác!`);
    
    if (confirmed) {
        // Remove from data
        projectsData = projectsData.filter(p => p.id !== id);
        
        // Update tables
        loadProjectsData();
        loadDashboardData();
        
        // Show success message
        showAlert(`Dự án "${project.name}" đã được xóa!`, 'success');
    }
}

// Enhanced save functions with validation
function savePost() {
    const form = document.getElementById('addPostForm');
    const formData = new FormData(form);
    const data = Object.fromEntries(formData);
    
    // Enhanced validation
    if (!data.title || !data.category || !data.content) {
        showAlert('Vui lòng điền đầy đủ thông tin bắt buộc!', 'error');
        return;
    }
    
    if (data.title.length < 5) {
        showAlert('Tiêu đề bài viết phải có ít nhất 5 ký tự!', 'error');
        return;
    }
    
    if (data.content.length < 50) {
        showAlert('Nội dung bài viết phải có ít nhất 50 ký tự!', 'error');
        return;
    }
    
    // Create new post
    const newPost = {
        id: Math.max(...postsData.map(p => p.id), 0) + 1,
        title: data.title,
        category: data.category,
        status: data.status,
        views: 0,
        date: new Date().toLocaleDateString('vi-VN'),
        excerpt: data.excerpt,
        content: data.content
    };
    
    // Add to data
    postsData.unshift(newPost);
    
    // Update tables
    loadPostsData();
    loadDashboardData();
    
    // Close modal
    closeModal('addPostModal');
    
    // Reset form
    form.reset();
    
    // Show success message
    showAlert('Bài viết đã được thêm thành công!', 'success');
}

function saveProject() {
    const form = document.getElementById('addProjectForm');
    const formData = new FormData(form);
    const data = Object.fromEntries(formData);
    
    // Enhanced validation
    if (!data.name || !data.description) {
        showAlert('Vui lòng điền đầy đủ thông tin bắt buộc!', 'error');
        return;
    }
    
    if (data.name.length < 3) {
        showAlert('Tên dự án phải có ít nhất 3 ký tự!', 'error');
        return;
    }
    
    if (data.description.length < 20) {
        showAlert('Mô tả dự án phải có ít nhất 20 ký tự!', 'error');
        return;
    }
    
    // Create new project
    const newProject = {
        id: Math.max(...projectsData.map(p => p.id), 0) + 1,
        name: data.name,
        description: data.description,
        technologies: data.technologies,
        status: data.status,
        link: data.link
    };
    
    // Add to data
    projectsData.unshift(newProject);
    
    // Update tables
    loadProjectsData();
    loadDashboardData();
    
    // Close modal
    closeModal('addProjectModal');
    
    // Reset form
    form.reset();
    
    // Show success message
    showAlert('Dự án đã được thêm thành công!', 'success');
}

// Add search functionality to tables
function addSearchToTables() {
    // Add search input to posts table
    const postsSection = document.getElementById('posts');
    if (postsSection) {
        const tableHeader = postsSection.querySelector('.table-header');
        if (tableHeader) {
            const searchInput = document.createElement('input');
            searchInput.type = 'text';
            searchInput.placeholder = 'Tìm kiếm bài viết...';
            searchInput.className = 'form-control';
            searchInput.style.width = '300px';
            searchInput.style.marginLeft = 'auto';
            searchInput.addEventListener('input', function() {
                searchPosts(this.value);
            });
            tableHeader.appendChild(searchInput);
        }
    }
    
    // Add search input to projects table
    const projectsSection = document.getElementById('projects');
    if (projectsSection) {
        const tableHeader = projectsSection.querySelector('.table-header');
        if (tableHeader) {
            const searchInput = document.createElement('input');
            searchInput.type = 'text';
            searchInput.placeholder = 'Tìm kiếm dự án...';
            searchInput.className = 'form-control';
            searchInput.style.width = '300px';
            searchInput.style.marginLeft = 'auto';
            searchInput.addEventListener('input', function() {
                searchProjects(this.value);
            });
            tableHeader.appendChild(searchInput);
        }
    }
}

// Initialize search functionality
addSearchToTables();

// Website settings functions
function saveWebsiteSettings() {
    const name = document.getElementById('websiteName').value;
    const description = document.getElementById('websiteDescription').value;
    const keywords = document.getElementById('websiteKeywords').value;
    
    if (!name || !description) {
        showAlert('Vui lòng điền đầy đủ thông tin bắt buộc!', 'error');
        return;
    }
    
    // Update website settings
    websiteSettings = {
        name: name,
        description: description,
        keywords: keywords
    };
    
    // Save to localStorage
    saveDataToStorage();
    
    // Show success message
    showAlert('Cài đặt trang web đã được lưu!', 'success');
    
    // Trigger sync with homepage
    setTimeout(() => {
        syncWithHomepage();
    }, 1000);
}

function updateWebsiteSettingsForm() {
    const nameField = document.getElementById('websiteName');
    const descriptionField = document.getElementById('websiteDescription');
    const keywordsField = document.getElementById('websiteKeywords');
    
    if (nameField) nameField.value = websiteSettings.name;
    if (descriptionField) descriptionField.value = websiteSettings.description;
    if (keywordsField) keywordsField.value = websiteSettings.keywords;
}

function syncWebsiteSettings() {
    console.log('Syncing website settings...');
    console.log('Current website settings:', websiteSettings);
    
    // Save current data to localStorage
    saveDataToStorage();
    
    // Trigger storage event to notify homepage
    const storageEvent = new StorageEvent('storage', {
        key: 'blogData',
        newValue: localStorage.getItem('blogData'),
        oldValue: null,
        url: window.location.href,
        storageArea: localStorage
    });
    
    window.dispatchEvent(storageEvent);
    
    // Also trigger custom event
    window.dispatchEvent(new CustomEvent('blogDataUpdated', {
        detail: {
            posts: postsData,
            projects: projectsData,
            websiteSettings: websiteSettings,
            timestamp: new Date().toISOString()
        }
    }));
    
    showAlert(`Đã đồng bộ cài đặt trang web với trang chủ!`, 'success');
    
    // Open homepage in new tab
    setTimeout(() => {
        const newWindow = window.open('index.html', '_blank');
        if (newWindow) {
            newWindow.addEventListener('load', function() {
                setTimeout(() => {
                    if (newWindow.forceReloadData) {
                        newWindow.forceReloadData();
                    }
                }, 1000);
            });
        }
    }, 1000);
}

// Refresh data function
function refreshData() {
    console.log('Refreshing data...');
    console.log('Current posts data:', postsData);
    console.log('Current projects data:', projectsData);
    
    // Reload all data
    loadPostsData();
    loadProjectsData();
    loadDashboardData();
    
    showAlert('Dữ liệu đã được làm mới!', 'success');
}

// Debug function to check data
function debugData() {
    console.log('=== DEBUG DATA ===');
    console.log('Posts data:', postsData);
    console.log('Projects data:', projectsData);
    console.log('Posts count:', postsData.length);
    console.log('Projects count:', projectsData.length);
    console.log('==================');
}

// Add debug button to console
window.debugData = debugData;
window.refreshData = refreshData;

// Sync with homepage function
function syncWithHomepage() {
    console.log('Syncing with homepage...');
    console.log('Current posts data:', postsData);
    console.log('Current projects data:', projectsData);
    
    // Save current data to localStorage
    saveDataToStorage();
    
    // Verify data was saved
    const savedData = localStorage.getItem('blogData');
    console.log('Data saved to localStorage:', savedData);
    
    // Trigger storage event to notify homepage
    const storageEvent = new StorageEvent('storage', {
        key: 'blogData',
        newValue: savedData,
        oldValue: null,
        url: window.location.href,
        storageArea: localStorage
    });
    
    window.dispatchEvent(storageEvent);
    
    // Also try to trigger a custom event
    window.dispatchEvent(new CustomEvent('blogDataUpdated', {
        detail: {
            posts: postsData,
            projects: projectsData,
            timestamp: new Date().toISOString()
        }
    }));
    
    showAlert(`Đã đồng bộ dữ liệu với trang chủ! (${postsData.length} bài viết, ${projectsData.length} dự án)`, 'success');
    
    // Open homepage in new tab
    setTimeout(() => {
        const newWindow = window.open('index.html', '_blank');
        if (newWindow) {
            newWindow.addEventListener('load', function() {
                // Force reload data in the new window
                setTimeout(() => {
                    if (newWindow.forceReloadData) {
                        newWindow.forceReloadData();
                    }
                }, 1000);
            });
        }
    }, 1000);
}

// Website settings data
let websiteSettings = {
    name: "Blog Cá Nhân - Sinh viên CNTT HUTECH",
    description: "Blog cá nhân chia sẻ kiến thức lập trình, dự án và kinh nghiệm học tập của sinh viên CNTT HUTECH.",
    keywords: "blog, lập trình, C#, ASP.NET, HUTECH, sinh viên"
};

// Personal information data
let personalInfo = {
    name: "Trần Văn Vương",
    birthday: "23/04/2004",
    hometown: "Quảng Ngãi",
    email: "tranvuongab23@gmail.com",
    phone: "0346010353",
    university: "Đại học Công nghệ TP.HCM (HUTECH)",
    major: "Công nghệ Thông tin",
    specialization: "Công nghệ phần mềm",
    gpa: "3.5/4.0",
    studyPeriod: "2022 - 2026"
};

// Data persistence functions
function saveDataToStorage() {
    try {
        const data = {
            posts: postsData,
            projects: projectsData,
            websiteSettings: websiteSettings,
            personalInfo: personalInfo,
            lastUpdated: new Date().toISOString()
        };
        localStorage.setItem('blogData', JSON.stringify(data));
        console.log('Data saved to localStorage');
    } catch (error) {
        console.error('Error saving data:', error);
    }
}

function loadDataFromStorage() {
    try {
        const savedData = localStorage.getItem('blogData');
        if (savedData) {
            const data = JSON.parse(savedData);
            if (data.posts) {
                postsData = data.posts;
                console.log('Posts data loaded from localStorage:', postsData);
            }
            if (data.projects) {
                projectsData = data.projects;
                console.log('Projects data loaded from localStorage:', projectsData);
            }
            if (data.websiteSettings) {
                websiteSettings = data.websiteSettings;
                console.log('Website settings loaded from localStorage:', websiteSettings);
                updateWebsiteSettingsForm();
            }
            if (data.personalInfo) {
                personalInfo = data.personalInfo;
                console.log('Personal info loaded from localStorage:', personalInfo);
                updatePersonalInfoForm();
            }
        }
        
        // Load visitor stats
        loadVisitorStats();
    } catch (error) {
        console.error('Error loading data:', error);
    }
}

// Load visitor statistics
function loadVisitorStats() {
    try {
        const savedStats = localStorage.getItem('visitorStats');
        if (savedStats) {
            const visitorStats = JSON.parse(savedStats);
            
            // Update admin dashboard with visitor stats
            const totalVisitsEl = document.getElementById('admin-total-visits');
            const uniqueVisitorsEl = document.getElementById('admin-unique-visitors');
            const visitChangeEl = document.getElementById('admin-visit-change');
            const uniqueChangeEl = document.getElementById('admin-unique-change');
            
            if (totalVisitsEl) {
                totalVisitsEl.textContent = visitorStats.totalVisits.toLocaleString();
            }
            
            if (uniqueVisitorsEl) {
                uniqueVisitorsEl.textContent = visitorStats.uniqueVisitors.toLocaleString();
            }
            
            if (visitChangeEl) {
                visitChangeEl.textContent = `+${visitorStats.todayVisits} hôm nay`;
            }
            
            if (uniqueChangeEl) {
                const todayVisits = visitorStats.visitHistory.filter(visit => {
                    const visitDate = new Date(visit.timestamp).toDateString();
                    const today = new Date().toDateString();
                    return visitDate === today;
                }).length;
                uniqueChangeEl.textContent = `+${todayVisits} mới`;
            }
            
            console.log('Visitor stats loaded:', visitorStats);
        }
    } catch (error) {
        console.error('Error loading visitor stats:', error);
    }
}

// Update all save functions to persist data
function savePost() {
    const form = document.getElementById('addPostForm');
    const formData = new FormData(form);
    const data = Object.fromEntries(formData);
    
    // Enhanced validation
    if (!data.title || !data.category || !data.content) {
        showAlert('Vui lòng điền đầy đủ thông tin bắt buộc!', 'error');
        return;
    }
    
    if (data.title.length < 5) {
        showAlert('Tiêu đề bài viết phải có ít nhất 5 ký tự!', 'error');
        return;
    }
    
    if (data.content.length < 50) {
        showAlert('Nội dung bài viết phải có ít nhất 50 ký tự!', 'error');
        return;
    }
    
    // Create new post
    const newPost = {
        id: Math.max(...postsData.map(p => p.id), 0) + 1,
        title: data.title,
        category: data.category,
        status: data.status,
        views: 0,
        date: new Date().toLocaleDateString('vi-VN'),
        excerpt: data.excerpt,
        content: data.content
    };
    
    // Add to data
    postsData.unshift(newPost);
    
    // Save to localStorage
    saveDataToStorage();
    
    // Update tables
    loadPostsData();
    loadDashboardData();
    
    // Close modal
    closeModal('addPostModal');
    
    // Reset form
    form.reset();
    
    // Show success message
    showAlert('Bài viết đã được thêm thành công!', 'success');
}

function saveProject() {
    const form = document.getElementById('addProjectForm');
    const formData = new FormData(form);
    const data = Object.fromEntries(formData);
    
    // Enhanced validation
    if (!data.name || !data.description) {
        showAlert('Vui lòng điền đầy đủ thông tin bắt buộc!', 'error');
        return;
    }
    
    if (data.name.length < 3) {
        showAlert('Tên dự án phải có ít nhất 3 ký tự!', 'error');
        return;
    }
    
    if (data.description.length < 20) {
        showAlert('Mô tả dự án phải có ít nhất 20 ký tự!', 'error');
        return;
    }
    
    // Create new project
    const newProject = {
        id: Math.max(...projectsData.map(p => p.id), 0) + 1,
        name: data.name,
        description: data.description,
        technologies: data.technologies,
        status: data.status,
        link: data.link
    };
    
    // Add to data
    projectsData.unshift(newProject);
    
    // Save to localStorage
    saveDataToStorage();
    
    // Update tables
    loadProjectsData();
    loadDashboardData();
    
    // Close modal
    closeModal('addProjectModal');
    
    // Reset form
    form.reset();
    
    // Show success message
    showAlert('Dự án đã được thêm thành công!', 'success');
}

// Update the update functions to save data
function updatePost() {
    const form = document.getElementById('editPostForm');
    const formData = new FormData(form);
    const data = Object.fromEntries(formData);
    const postId = parseInt(data.id);
    
    console.log('Updating post:', data); // Debug log
    
    // Validate form
    if (!data.title || !data.category || !data.content) {
        showAlert('Vui lòng điền đầy đủ thông tin bắt buộc!', 'error');
        return;
    }
    
    // Find and update post
    const postIndex = postsData.findIndex(p => p.id === postId);
    console.log('Post index:', postIndex); // Debug log
    
    if (postIndex !== -1) {
        // Update the post data
        postsData[postIndex].title = data.title;
        postsData[postIndex].category = data.category;
        postsData[postIndex].excerpt = data.excerpt;
        postsData[postIndex].content = data.content;
        postsData[postIndex].status = data.status;
        
        console.log('Updated post:', postsData[postIndex]); // Debug log
        
        // Save to localStorage
        saveDataToStorage();
        
        // Update tables
        loadPostsData();
        loadDashboardData();
        
        // Close modal
        closeModal('editPostModal');
        
        // Show success message
        showAlert('Bài viết đã được cập nhật thành công!', 'success');
    } else {
        showAlert('Không tìm thấy bài viết để cập nhật!', 'error');
    }
}

function updateProject() {
    const form = document.getElementById('editProjectForm');
    const formData = new FormData(form);
    const data = Object.fromEntries(formData);
    const projectId = parseInt(data.id);
    
    console.log('Updating project:', data); // Debug log
    
    // Validate form
    if (!data.name || !data.description) {
        showAlert('Vui lòng điền đầy đủ thông tin bắt buộc!', 'error');
        return;
    }
    
    // Find and update project
    const projectIndex = projectsData.findIndex(p => p.id === projectId);
    console.log('Project index:', projectIndex); // Debug log
    
    if (projectIndex !== -1) {
        // Update the project data
        projectsData[projectIndex].name = data.name;
        projectsData[projectIndex].description = data.description;
        projectsData[projectIndex].technologies = data.technologies;
        projectsData[projectIndex].link = data.link;
        projectsData[projectIndex].status = data.status;
        
        console.log('Updated project:', projectsData[projectIndex]); // Debug log
        
        // Save to localStorage
        saveDataToStorage();
        
        // Update tables
        loadProjectsData();
        loadDashboardData();
        
        // Close modal
        closeModal('editProjectModal');
        
        // Show success message
        showAlert('Dự án đã được cập nhật thành công!', 'success');
    } else {
        showAlert('Không tìm thấy dự án để cập nhật!', 'error');
    }
}

// Update delete functions to save data
function deletePost(id) {
    const post = postsData.find(p => p.id === id);
    if (!post) return;
    
    // Create custom confirmation dialog
    const confirmed = confirm(`Bạn có chắc chắn muốn xóa bài viết "${post.title}"?\n\nHành động này không thể hoàn tác!`);
    
    if (confirmed) {
        // Remove from data
        postsData = postsData.filter(p => p.id !== id);
        
        // Save to localStorage
        saveDataToStorage();
        
        // Update tables
        loadPostsData();
        loadDashboardData();
        
        // Show success message
        showAlert(`Bài viết "${post.title}" đã được xóa!`, 'success');
    }
}

function deleteProject(id) {
    const project = projectsData.find(p => p.id === id);
    if (!project) return;
    
    // Create custom confirmation dialog
    const confirmed = confirm(`Bạn có chắc chắn muốn xóa dự án "${project.name}"?\n\nHành động này không thể hoàn tác!`);
    
    if (confirmed) {
        // Remove from data
        projectsData = projectsData.filter(p => p.id !== id);
        
        // Save to localStorage
        saveDataToStorage();
        
        // Update tables
        loadProjectsData();
        loadDashboardData();
        
        // Show success message
        showAlert(`Dự án "${project.name}" đã được xóa!`, 'success');
    }
}
