// JavaScript cho Blog Cá Nhân HUTECH

// Visitor counter system
let visitorStats = {
    totalVisits: 0,
    uniqueVisitors: 0,
    todayVisits: 0,
    lastVisit: null,
    visitHistory: []
};

// Initialize visitor counter
function initializeVisitorCounter() {
    // Load existing stats from localStorage
    const savedStats = localStorage.getItem('visitorStats');
    if (savedStats) {
        visitorStats = JSON.parse(savedStats);
    }
    
    // Check if this is a new visitor (based on session)
    const sessionId = sessionStorage.getItem('visitorSessionId');
    const isNewSession = !sessionId;
    
    if (isNewSession) {
        // Generate new session ID
        const newSessionId = 'session_' + Date.now() + '_' + Math.random().toString(36).substr(2, 9);
        sessionStorage.setItem('visitorSessionId', newSessionId);
        
        // Increment counters
        visitorStats.totalVisits++;
        visitorStats.uniqueVisitors++;
        
        // Check if today's visit
        const today = new Date().toDateString();
        const lastVisitDate = visitorStats.lastVisit ? new Date(visitorStats.lastVisit).toDateString() : null;
        
        if (lastVisitDate !== today) {
            visitorStats.todayVisits++;
        }
        
        // Update last visit
        visitorStats.lastVisit = new Date().toISOString();
        
        // Add to visit history
        visitorStats.visitHistory.push({
            timestamp: new Date().toISOString(),
            sessionId: newSessionId,
            userAgent: navigator.userAgent,
            referrer: document.referrer || 'Direct'
        });
        
        // Keep only last 100 visits
        if (visitorStats.visitHistory.length > 100) {
            visitorStats.visitHistory = visitorStats.visitHistory.slice(-100);
        }
        
        // Save to localStorage
        localStorage.setItem('visitorStats', JSON.stringify(visitorStats));
        
        // Update display
        updateVisitorDisplay();
        
        console.log('New visitor detected! Total visits:', visitorStats.totalVisits);
    } else {
        // Existing session, just update display
        updateVisitorDisplay();
    }
}

// Update visitor display
function updateVisitorDisplay() {
    const totalVisits = visitorStats.totalVisits;
    let displayValue;
    
    if (totalVisits >= 1000) {
        displayValue = (totalVisits / 1000).toFixed(1) + 'k';
    } else {
        displayValue = totalVisits.toString();
    }
    
    // Update profile views with total visits
    const profileViews = document.getElementById('profile-views');
    if (profileViews) {
        profileViews.textContent = displayValue;
    }
    
    // Update sidebar views
    const sidebarViews = document.getElementById('sidebar-views');
    if (sidebarViews) {
        sidebarViews.textContent = displayValue;
    }
}

// Update all view displays
function updateAllViewDisplays() {
    const totalVisits = visitorStats.totalVisits;
    let displayValue;
    
    if (totalVisits >= 1000) {
        displayValue = (totalVisits / 1000).toFixed(1) + 'k';
    } else {
        displayValue = totalVisits.toString();
    }
    
    // Update profile views
    const profileViews = document.getElementById('profile-views');
    if (profileViews) {
        profileViews.textContent = displayValue;
    }
    
    // Update sidebar views
    const sidebarViews = document.getElementById('sidebar-views');
    if (sidebarViews) {
        sidebarViews.textContent = displayValue;
    }
    
    console.log('All view displays updated with:', displayValue);
}

// Smooth scrolling cho navigation
document.addEventListener('DOMContentLoaded', function() {
    // Initialize visitor counter
    initializeVisitorCounter();
    
    // Update all view displays
    updateAllViewDisplays();
    
    // Navigation
    const navLinks = document.querySelectorAll('.nav-link');
    const sections = document.querySelectorAll('.section');
    
    // Active navigation
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            
            // Remove active class from all links and sections
            navLinks.forEach(l => l.classList.remove('active'));
            sections.forEach(s => s.classList.remove('active'));
            
            // Add active class to clicked link and target section
            this.classList.add('active');
            const targetSection = document.getElementById(targetId);
            if (targetSection) {
                targetSection.classList.add('active');
            }
            
            // Smooth scroll to top
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    });
    
    // Scroll to top button
    const scrollToTopBtn = document.querySelector('.scroll-to-top');
    
    window.addEventListener('scroll', function() {
        if (window.pageYOffset > 300) {
            scrollToTopBtn.classList.add('show');
        } else {
            scrollToTopBtn.classList.remove('show');
        }
    });
    
    // Search functionality
    const searchInput = document.querySelector('.search-input');
    const searchBtn = document.querySelector('.search-btn');
    
    // Load blog posts from localStorage or use default data
    let blogPosts = [
        {
            title: "Học C# từ cơ bản đến nâng cao - Phần 1",
            description: "C# là một ngôn ngữ lập trình mạnh mẽ và phổ biến. Trong bài viết này, tôi sẽ chia sẻ kinh nghiệm học C# từ những kiến thức cơ bản nhất.",
            category: "C# Programming",
            link: "blog-1.html",
            tags: ["C#", "Programming", "Cơ bản", "Nâng cao"]
        },
        {
            title: "Thuật toán sắp xếp nhanh (Quick Sort)",
            description: "Quick Sort là một trong những thuật toán sắp xếp hiệu quả nhất. Bài viết này sẽ giải thích chi tiết cách hoạt động và cách implement trong C#.",
            category: "Thuật toán",
            link: "blog-2.html",
            tags: ["Algorithm", "Quick Sort", "Sắp xếp", "C#"]
        },
        {
            title: "Xây dựng ứng dụng Web API với ASP.NET Core",
            description: "Hướng dẫn chi tiết cách tạo Web API với ASP.NET Core, từ cơ bản đến các tính năng nâng cao như authentication, validation và documentation.",
            category: "Web Development",
            link: "blog-3.html",
            tags: ["ASP.NET Core", "Web API", "Backend", "API"]
        },
        {
            title: "Kinh nghiệm thực tập tại công ty công nghệ",
            description: "Chia sẻ kinh nghiệm thực tập tại một công ty công nghệ lớn, những bài học quý giá và kỹ năng cần thiết cho sinh viên CNTT.",
            category: "Kinh nghiệm",
            link: "blog-4.html",
            tags: ["Thực tập", "Kinh nghiệm", "Công ty", "CNTT"]
        },
        {
            title: "Làm việc với SQL Server Database",
            description: "Hướng dẫn chi tiết về SQL Server, từ cài đặt đến viết các câu truy vấn phức tạp và tối ưu hóa hiệu suất database.",
            category: "Database",
            link: "blog-5.html",
            tags: ["SQL Server", "Database", "Query", "Tối ưu"]
        },
        {
            title: "Cuộc sống sinh viên CNTT tại HUTECH",
            description: "Chia sẻ về cuộc sống sinh viên ngành CNTT tại HUTECH, những trải nghiệm thú vị và lời khuyên cho các bạn sinh viên mới.",
            category: "Cuộc sống sinh viên",
            link: "blog-6.html",
            tags: ["Sinh viên", "HUTECH", "CNTT", "Cuộc sống"]
        }
    ];

    // Website settings
    let websiteSettings = {
        name: "Blog Cá Nhân - Sinh viên CNTT HUTECH",
        description: "Blog cá nhân chia sẻ kiến thức lập trình, dự án và kinh nghiệm học tập của sinh viên CNTT HUTECH.",
        keywords: "blog, lập trình, C#, ASP.NET, HUTECH, sinh viên"
    };

    // Personal information
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

    // Load data from localStorage
    function loadBlogDataFromStorage() {
        try {
            const savedData = localStorage.getItem('blogData');
            if (savedData) {
                const data = JSON.parse(savedData);
                
                // Load personal info
                if (data.personalInfo) {
                    personalInfo = data.personalInfo;
                    console.log('Personal info loaded:', personalInfo);
                    updatePersonalInfoContent();
                }
                
                // Load website settings
                if (data.websiteSettings) {
                    websiteSettings = data.websiteSettings;
                    console.log('Website settings loaded:', websiteSettings);
                    updateWebsiteContent();
                }
                
                // Load posts from admin
                if (data.posts && data.posts.length > 0) {
                    // Convert admin posts to blog posts format
                    blogPosts = data.posts.map(post => ({
                        title: post.title,
                        description: post.excerpt || (post.content ? post.content.substring(0, 100) + "..." : "Mô tả bài viết"),
                        category: post.category,
                        link: `blog-${post.id}.html`,
                        tags: [post.category, "Admin Updated"]
                    }));
                    console.log('Blog posts loaded from admin data:', blogPosts);
                    updateFeaturedPosts();
                }
            }
        } catch (error) {
            console.error('Error loading blog data:', error);
        }
    }

    // Load data on page load
    loadBlogDataFromStorage();

    // Update personal info content
    function updatePersonalInfoContent() {
        // Update author name in hero section
        const heroName = document.querySelector('.hero-title .name');
        if (heroName && personalInfo.name) {
            heroName.textContent = personalInfo.name;
        }

        // Update university info
        const universityInfo = document.querySelector('.hero-subtitle');
        if (universityInfo && personalInfo.university) {
            universityInfo.textContent = `Sinh viên ngành ${personalInfo.major} tại ${personalInfo.university}`;
        }

        // Không hiển thị gì trong hero description
        const heroDescription = document.querySelector('.hero-description');
        if (heroDescription) {
            heroDescription.innerHTML = ``;
        }

        console.log('Personal info content updated:', personalInfo);
    }

    // Update website content
    function updateWebsiteContent() {
        if (websiteSettings.name) {
            document.title = websiteSettings.name;
            
            // Update logo text
            const logoText = document.querySelector('.logo-text');
            if (logoText) {
                logoText.textContent = websiteSettings.name;
            }
        }
        
        // Update meta description
        let metaDescription = document.querySelector('meta[name="description"]');
        if (!metaDescription) {
            metaDescription = document.createElement('meta');
            metaDescription.name = 'description';
            document.head.appendChild(metaDescription);
        }
        if (websiteSettings.description) {
            metaDescription.content = websiteSettings.description;
        }
        
        // Update meta keywords
        let metaKeywords = document.querySelector('meta[name="keywords"]');
        if (!metaKeywords) {
            metaKeywords = document.createElement('meta');
            metaKeywords.name = 'keywords';
            document.head.appendChild(metaKeywords);
        }
        if (websiteSettings.keywords) {
            metaKeywords.content = websiteSettings.keywords;
        }
        
        console.log('Website content updated:', websiteSettings);
    }

    // Update featured posts
    function updateFeaturedPosts() {
        const featuredPosts = blogPosts.slice(0, 3); // Get first 3 posts
        const postsGrid = document.querySelector('.posts-grid');
        
        if (postsGrid && featuredPosts.length > 0) {
            postsGrid.innerHTML = featuredPosts.map((post, index) => `
                <article class="post-card featured">
                    <div class="post-image">
                        <div style="width: 100%; height: 250px; background: linear-gradient(45deg, #0078d4, #106ebe); display: flex; align-items: center; justify-content: center; color: white; font-size: 28px; font-weight: bold; text-align: center; position: relative;">
                            <div style="position: absolute; top: 20px; left: 20px; font-size: 18px; color: #87ceeb;">${post.category}</div>
                            <div style="font-size: 36px; font-weight: 900;">${post.category.toUpperCase()}</div>
                            <div style="position: absolute; bottom: 20px; right: 20px; font-size: 14px; color: #87ceeb;">Updated</div>
                        </div>
                        <div class="post-category">
                            <span>🏷️</span>
                            <span>${post.category}</span>
                        </div>
                    </div>
                    <div class="post-content">
                        <h3 class="post-title">
                            <a href="${post.link}">${post.title}</a>
                        </h3>
                        <p class="post-excerpt">${post.description}</p>
                        <div class="post-meta">
                            <div class="post-author">👤 ${personalInfo.name || 'Trần Văn Vương'}</div>
                            <div class="post-date">📅 ${new Date().toLocaleDateString('vi-VN')}</div>
                            <div class="post-read-time">⏱️ 5 phút</div>
                            <div class="post-views">👁️ ${Math.floor(Math.random() * 1000) + 500}</div>
                        </div>
                        <a href="${post.link}" class="read-more">Đọc tiếp →</a>
                    </div>
                </article>
            `).join('');
        }
        console.log('Featured posts updated:', featuredPosts);
    }

    // Listen for storage changes
    window.addEventListener('storage', function(e) {
        if (e.key === 'blogData') {
            console.log('Blog data updated from admin, reloading...');
            loadBlogDataFromStorage();
        }
    });

    // Listen for custom events
    window.addEventListener('blogDataUpdated', function(e) {
        console.log('Custom blog data update event received:', e.detail);
        loadBlogDataFromStorage();
    });

    // Listen for focus events
    window.addEventListener('focus', function() {
        console.log('Window focused, checking for data updates...');
        loadBlogDataFromStorage();
    });
    
    if (searchInput && searchBtn) {
        searchBtn.addEventListener('click', function(e) {
            e.preventDefault();
            performSearch();
        });
        
        searchInput.addEventListener('keypress', function(e) {
            if (e.key === 'Enter') {
                e.preventDefault();
                performSearch();
            }
        });
        
        // Tìm kiếm real-time khi gõ
        searchInput.addEventListener('input', function() {
            const query = this.value.trim();
            if (query.length > 2) {
                performSearch();
            } else if (query.length === 0) {
                clearSearchResults();
            }
        });
    }
    
    function performSearch() {
        const query = searchInput.value.trim().toLowerCase();
        if (!query) {
            clearSearchResults();
            return;
        }
        
        const results = blogPosts.filter(post => 
            post.title.toLowerCase().includes(query) ||
            post.description.toLowerCase().includes(query) ||
            post.category.toLowerCase().includes(query) ||
            post.tags.some(tag => tag.toLowerCase().includes(query))
        );
        
        displaySearchResults(results, query);
    }
    
    function displaySearchResults(results, query) {
        // Xóa kết quả tìm kiếm cũ
        const existingResults = document.querySelector('.search-results');
        if (existingResults) {
            existingResults.remove();
        }
        
        if (results.length === 0) {
            showNoResults(query);
            return;
        }
        
        // Tạo container cho kết quả tìm kiếm
        const resultsContainer = document.createElement('div');
        resultsContainer.className = 'search-results';
        resultsContainer.innerHTML = `
            <div class="search-results-header">
                <h3>Tìm thấy ${results.length} kết quả cho "${query}"</h3>
                <button class="close-search" onclick="clearSearchResults()">✕</button>
            </div>
            <div class="search-results-list">
                ${results.map(post => `
                    <div class="search-result-item">
                        <div class="result-content">
                            <h4 class="result-title">${highlightText(post.title, query)}</h4>
                            <p class="result-description">${highlightText(post.description, query)}</p>
                            <div class="result-meta">
                                <span class="result-category">${post.category}</span>
                                <div class="result-tags">
                                    ${post.tags.map(tag => `<span class="tag">${tag}</span>`).join('')}
                                </div>
                            </div>
                        </div>
                        <a href="${post.link}" class="result-link">Đọc bài viết →</a>
                    </div>
                `).join('')}
            </div>
        `;
        
        // Thêm event listener cho kết quả tìm kiếm
        resultsContainer.addEventListener('click', function(e) {
            if (e.target.classList.contains('result-link') || e.target.closest('.result-link')) {
                // Don't close search results when clicking on links
                e.stopPropagation();
            }
        });
        
        // Thêm CSS cho kết quả tìm kiếm
        const style = document.createElement('style');
        style.textContent = `
            .search-results {
                position: absolute;
                top: 100%;
                left: 0;
                right: 0;
                background: linear-gradient(135deg, #1a1a1a 0%, #2d2d2d 100%);
                border: 1px solid rgba(188, 140, 255, 0.3);
                border-radius: 12px;
                box-shadow: 0 8px 32px rgba(0,0,0,0.4), 0 0 20px rgba(188, 140, 255, 0.1);
                z-index: 1000;
                max-height: 400px;
                overflow-y: auto;
                backdrop-filter: blur(10px);
                animation: searchResultsSlideIn 0.3s ease-out;
                margin-top: 8px;
            }
            
            @keyframes searchResultsSlideIn {
                from {
                    opacity: 0;
                    transform: translateY(-10px) scale(0.95);
                }
                to {
                    opacity: 1;
                    transform: translateY(0) scale(1);
                }
            }
            
            .search-results-header {
                display: flex;
                justify-content: space-between;
                align-items: center;
                padding: 20px 24px;
                border-bottom: 1px solid rgba(188, 140, 255, 0.2);
                background: linear-gradient(135deg, #2a2a2a 0%, #3a3a3a 100%);
                border-radius: 12px 12px 0 0;
            }
            
            .search-results-header h3 {
                color: #fff;
                margin: 0;
                font-size: 16px;
                font-weight: 600;
                text-shadow: 0 2px 4px rgba(0,0,0,0.3);
            }
            
            .close-search {
                background: linear-gradient(135deg, #ff6b9d, #bc8cff);
                border: none;
                color: #fff;
                font-size: 16px;
                cursor: pointer;
                padding: 8px 12px;
                border-radius: 20px;
                transition: all 0.3s ease;
                font-weight: 600;
                box-shadow: 0 4px 15px rgba(255, 107, 157, 0.3);
            }
            
            .close-search:hover {
                transform: translateY(-2px);
                box-shadow: 0 6px 20px rgba(255, 107, 157, 0.4);
            }
            
            .search-results-list {
                padding: 16px;
            }
            
            .search-result-item {
                display: flex;
                justify-content: space-between;
                align-items: center;
                padding: 20px;
                border-bottom: 1px solid rgba(188, 140, 255, 0.1);
                transition: all 0.3s ease;
                border-radius: 8px;
                margin-bottom: 8px;
                background: rgba(255, 255, 255, 0.02);
                backdrop-filter: blur(5px);
            }
            
            .search-result-item:hover {
                background: linear-gradient(135deg, rgba(188, 140, 255, 0.1) 0%, rgba(255, 107, 157, 0.1) 100%);
                transform: translateX(8px);
                box-shadow: 0 8px 25px rgba(188, 140, 255, 0.2);
                border: 1px solid rgba(188, 140, 255, 0.3);
            }
            
            .search-result-item:last-child {
                border-bottom: none;
                margin-bottom: 0;
            }
            
            .result-content {
                flex: 1;
            }
            
            .result-title {
                color: #fff;
                margin: 0 0 12px 0;
                font-size: 18px;
                font-weight: 700;
                text-shadow: 0 2px 4px rgba(0,0,0,0.3);
                line-height: 1.3;
            }
            
            .result-description {
                color: #ccc;
                margin: 0 0 16px 0;
                font-size: 14px;
                line-height: 1.6;
                opacity: 0.9;
            }
            
            .result-meta {
                display: flex;
                align-items: center;
                gap: 12px;
                flex-wrap: wrap;
            }
            
            .result-category {
                background: linear-gradient(135deg, #007bff, #0056b3);
                color: #fff;
                padding: 6px 12px;
                border-radius: 20px;
                font-size: 12px;
                font-weight: 600;
                text-transform: uppercase;
                letter-spacing: 0.5px;
                box-shadow: 0 4px 15px rgba(0, 123, 255, 0.3);
            }
            
            .result-tags {
                display: flex;
                gap: 8px;
                flex-wrap: wrap;
            }
            
            .tag {
                background: linear-gradient(135deg, #333, #555);
                color: #fff;
                padding: 4px 10px;
                border-radius: 15px;
                font-size: 11px;
                font-weight: 500;
                border: 1px solid rgba(188, 140, 255, 0.2);
                transition: all 0.3s ease;
            }
            
            .tag:hover {
                background: linear-gradient(135deg, #bc8cff, #ff6b9d);
                transform: translateY(-2px);
                box-shadow: 0 4px 15px rgba(188, 140, 255, 0.3);
            }
            
            .result-link {
                background: linear-gradient(135deg, #bc8cff, #ff6b9d);
                color: #fff;
                text-decoration: none;
                font-weight: 600;
                margin-left: 20px;
                white-space: nowrap;
                padding: 12px 20px;
                border-radius: 25px;
                transition: all 0.3s ease;
                box-shadow: 0 4px 15px rgba(188, 140, 255, 0.3);
                text-transform: uppercase;
                letter-spacing: 0.5px;
                font-size: 12px;
            }
            
            .result-link:hover {
                transform: translateY(-3px);
                box-shadow: 0 8px 25px rgba(188, 140, 255, 0.4);
                background: linear-gradient(135deg, #ff6b9d, #bc8cff);
            }
            
            .highlight {
                background: linear-gradient(135deg, #ffd700, #ffed4e);
                color: #000;
                padding: 3px 6px;
                border-radius: 6px;
                font-weight: 700;
                text-shadow: none;
                box-shadow: 0 2px 8px rgba(255, 215, 0, 0.3);
                animation: highlightPulse 2s ease-in-out infinite;
            }
            
            @keyframes highlightPulse {
                0%, 100% { transform: scale(1); }
                50% { transform: scale(1.05); }
            }
            
            .no-results {
                padding: 60px 40px;
                text-align: center;
                color: #999;
                background: linear-gradient(135deg, rgba(255, 255, 255, 0.05) 0%, rgba(188, 140, 255, 0.05) 100%);
                border-radius: 12px;
                margin: 16px;
                border: 1px solid rgba(188, 140, 255, 0.2);
            }
            
            .no-results h3 {
                color: #fff;
                margin-bottom: 16px;
                font-size: 20px;
                font-weight: 600;
                text-shadow: 0 2px 4px rgba(0,0,0,0.3);
            }
            
            .no-results p {
                margin: 0;
                font-size: 16px;
                opacity: 0.8;
                line-height: 1.5;
            }
        `;
        
        document.head.appendChild(style);
        
        // Thêm vào header
        const headerSearch = document.querySelector('.header-search');
        headerSearch.style.position = 'relative';
        headerSearch.appendChild(resultsContainer);
    }
    
    function showNoResults(query) {
        const existingResults = document.querySelector('.search-results');
        if (existingResults) {
            existingResults.remove();
        }
        
        const resultsContainer = document.createElement('div');
        resultsContainer.className = 'search-results';
        resultsContainer.innerHTML = `
            <div class="no-results">
                <h3>Không tìm thấy kết quả</h3>
                <p>Không có bài viết nào chứa từ khóa "${query}"</p>
                <button class="close-search" onclick="clearSearchResults()" style="margin-top: 15px; background: #007bff; color: #fff; border: none; padding: 8px 16px; border-radius: 4px; cursor: pointer;">Đóng</button>
            </div>
        `;
        
        const headerSearch = document.querySelector('.header-search');
        headerSearch.style.position = 'relative';
        headerSearch.appendChild(resultsContainer);
    }
    
    function highlightText(text, query) {
        if (!query) return text;
        const regex = new RegExp(`(${query})`, 'gi');
        return text.replace(regex, '<span class="highlight">$1</span>');
    }
    
    function clearSearchResults() {
        const existingResults = document.querySelector('.search-results');
        if (existingResults) {
            existingResults.remove();
        }
        searchInput.value = '';
    }
    
    // Đóng kết quả tìm kiếm khi click bên ngoài
    document.addEventListener('click', function(e) {
        const searchResults = document.querySelector('.search-results');
        const headerSearch = document.querySelector('.header-search');
        
        // Don't close if clicking on search results or links
        if (searchResults && !headerSearch.contains(e.target) && 
            !e.target.closest('.search-results') && 
            !e.target.closest('.result-link')) {
            clearSearchResults();
        }
    });
    
    // Form submission
    const contactForm = document.querySelector('.contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', handleSubmit);
    }
    
    // Like functionality for blog posts
    const likeButtons = document.querySelectorAll('.like-btn');
    likeButtons.forEach(btn => {
        btn.addEventListener('click', function() {
            this.classList.toggle('liked');
            const count = this.querySelector('span');
            if (count) {
                let currentCount = parseInt(count.textContent) || 0;
                if (this.classList.contains('liked')) {
                    count.textContent = currentCount + 1;
                } else {
                    count.textContent = Math.max(0, currentCount - 1);
                }
            }
        });
    });
    
    // Share functionality
    const shareButtons = document.querySelectorAll('.share-btn');
    shareButtons.forEach(btn => {
        btn.addEventListener('click', function() {
            if (navigator.share) {
                navigator.share({
                    title: 'Blog Cá Nhân - Sinh viên CNTT HUTECH',
                    text: 'Khám phá blog cá nhân chia sẻ kiến thức lập trình',
                    url: window.location.href
                });
            } else {
                // Fallback: copy to clipboard
                navigator.clipboard.writeText(window.location.href).then(() => {
                    showNotification('Đã sao chép link vào clipboard!');
                });
            }
        });
    });
    
    // Animate progress bars on scroll
    const progressBars = document.querySelectorAll('.progress-fill');
    const observerOptions = {
        threshold: 0.5,
        rootMargin: '0px 0px -100px 0px'
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const progressBar = entry.target;
                const width = progressBar.style.width;
                progressBar.style.width = '0%';
                setTimeout(() => {
                    progressBar.style.width = width;
                }, 100);
            }
        });
    }, observerOptions);
    
    progressBars.forEach(bar => {
        observer.observe(bar);
    });
    
    // Add hover effects to cards
    const cards = document.querySelectorAll('.post-card, .info-card, .skill-card, .project-card');
    cards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-5px)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
        });
    });
    
    // Mobile menu toggle (if needed)
    const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
    const nav = document.querySelector('.nav');
    
    if (mobileMenuBtn && nav) {
        mobileMenuBtn.addEventListener('click', function() {
            nav.classList.toggle('nav-open');
        });
    }
    
    // Initialize tooltips for social links
    const socialLinks = document.querySelectorAll('.social-link');
    socialLinks.forEach(link => {
        link.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-2px) scale(1.1)';
        });
        
        link.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
        });
    });
    
    // Image loading animation
    const images = document.querySelectorAll('img');
    images.forEach(img => {
        img.addEventListener('load', function() {
            this.style.opacity = '1';
        });
        img.style.opacity = '0';
        img.style.transition = 'opacity 0.3s ease';
    });
    
    // Đảm bảo hero title hiển thị đúng
    const heroTitle = document.querySelector('.hero-title');
    if (heroTitle) {
        // Đảm bảo highlight element hoạt động đúng
        const highlightElement = heroTitle.querySelector('.highlight');
        if (highlightElement) {
            highlightElement.style.color = '#ffd700';
            highlightElement.style.fontWeight = 'bold';
            highlightElement.style.textShadow = '2px 2px 4px rgba(0, 0, 0, 0.3)';
        }
    }
    
    // Counter animation cho stats
    const statNumbers = document.querySelectorAll('.stat-number');
    const animateCounters = () => {
        statNumbers.forEach(stat => {
            const target = parseInt(stat.textContent.replace(/[^\d]/g, ''));
            const suffix = stat.textContent.replace(/[\d]/g, '');
            let current = 0;
            const increment = target / 50;
            
            const timer = setInterval(() => {
                current += increment;
                if (current >= target) {
                    stat.textContent = target + suffix;
                    clearInterval(timer);
                } else {
                    stat.textContent = Math.floor(current) + suffix;
                }
            }, 30);
        });
    };
    
    const statsSection = document.querySelector('.profile-stats');
    if (statsSection) {
        const statsObserver = new IntersectionObserver(function(entries) {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    animateCounters();
                    statsObserver.unobserve(entry.target);
                }
            });
        }, { threshold: 0.5 });
        statsObserver.observe(statsSection);
    }
});

// Form submission handler
function handleSubmit(event) {
    event.preventDefault();
    
    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData);
    
    // Show loading state with enhanced animation
    const submitBtn = event.target.querySelector('.submit-btn');
    submitBtn.classList.add('loading');
    submitBtn.disabled = true;
    
    // Add ripple effect
    createRippleEffect(submitBtn);
    
    // Simulate form submission
    setTimeout(() => {
        // Show success message
        showNotification('🎉 Cảm ơn bạn! Tin nhắn đã được gửi thành công.', 'success');
        
        // Reset form
        event.target.reset();
        
        // Reset button
        submitBtn.classList.remove('loading');
        submitBtn.disabled = false;
    }, 2000);
}

// Create ripple effect for button
function createRippleEffect(button) {
    const ripple = document.createElement('div');
    ripple.classList.add('btn-ripple');
    
    const rect = button.getBoundingClientRect();
    const size = Math.max(rect.width, rect.height);
    ripple.style.width = ripple.style.height = size + 'px';
    ripple.style.left = (rect.width / 2 - size / 2) + 'px';
    ripple.style.top = (rect.height / 2 - size / 2) + 'px';
    
    button.appendChild(ripple);
    
    setTimeout(() => {
        ripple.remove();
    }, 600);
}

// Scroll to top function
function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}

// Show notification
function showNotification(message, type = 'info') {
    // Remove existing notifications
    const existingNotifications = document.querySelectorAll('.notification');
    existingNotifications.forEach(notification => notification.remove());
    
    // Create notification element
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.innerHTML = `
        <div class="notification-content">
            <span class="notification-icon">${type === 'success' ? '✅' : 'ℹ️'}</span>
            <span class="notification-message">${message}</span>
        </div>
    `;
    
    // Add styles
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background: ${type === 'success' ? 'var(--success-color)' : 'var(--info-color)'};
        color: white;
        padding: 1rem 1.5rem;
        border-radius: 0.5rem;
        box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
        z-index: 10000;
        transform: translateX(100%);
        transition: transform 0.3s ease;
        max-width: 300px;
    `;
    
    // Add to page
    document.body.appendChild(notification);
    
    // Animate in
    setTimeout(() => {
        notification.style.transform = 'translateX(0)';
    }, 100);
    
    // Auto remove after 3 seconds
    setTimeout(() => {
        notification.style.transform = 'translateX(100%)';
        setTimeout(() => {
            notification.remove();
        }, 300);
    }, 3000);
}

// Add CSS for notifications
const notificationStyles = document.createElement('style');
notificationStyles.textContent = `
    .notification-content {
        display: flex;
        align-items: center;
        gap: 0.5rem;
    }
    
    .notification-icon {
        font-size: 1.2rem;
    }
    
    .notification-message {
        font-weight: 500;
    }
`;
document.head.appendChild(notificationStyles);

// Add smooth scrolling for all anchor links
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

// Keyboard navigation
document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') {
        const nav = document.querySelector('.nav');
        if (nav && nav.classList.contains('nav-open')) {
            nav.classList.remove('nav-open');
        }
    }
});

// Fade-in animations
const fadeInObserver = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });

document.querySelectorAll('.post-card, .info-card, .skill-card, .project-card, .faq-item').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(20px)';
    el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    fadeInObserver.observe(el);
});

// Button click effects
document.querySelectorAll('.btn').forEach(btn => {
    btn.addEventListener('click', function(e) {
        this.style.transform = 'scale(0.95)';
        setTimeout(() => {
            this.style.transform = 'scale(1)';
        }, 150);
    });
});

// Blog Cá Nhân HUTECH - Sẵn sàng hoạt động

// Navigation functions
function scrollToAbout() {
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
        aboutSection.scrollIntoView({ 
            behavior: 'smooth',
            block: 'start',
            inline: 'nearest'
        });
    }
}

function scrollToContact() {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
        contactSection.scrollIntoView({ 
            behavior: 'smooth',
            block: 'start',
            inline: 'nearest'
        });
    }
}

function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}