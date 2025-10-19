// Personal info functions for admin.js
function updatePersonalInfoForm() {
    // Update the display form with current data
    const nameField = document.querySelector('input[value="Trần Văn Vương"]');
    const birthdayField = document.querySelector('input[value="23/04/2004"]');
    const hometownField = document.querySelector('input[value="Quảng Ngãi"]');
    const emailField = document.querySelector('input[value="tranvuongab23@gmail.com"]');
    const phoneField = document.querySelector('input[value="0346010353"]');
    const universityField = document.querySelector('input[value="Đại học Công nghệ TP.HCM (HUTECH)"]');
    const majorField = document.querySelector('input[value="Công nghệ Thông tin"]');
    const specializationField = document.querySelector('input[value="Công nghệ phần mềm"]');
    const gpaField = document.querySelector('input[value="3.5/4.0"]');
    const studyPeriodField = document.querySelector('input[value="2022 - 2026"]');
    
    if (nameField) nameField.value = personalInfo.name;
    if (birthdayField) birthdayField.value = personalInfo.birthday;
    if (hometownField) hometownField.value = personalInfo.hometown;
    if (emailField) emailField.value = personalInfo.email;
    if (phoneField) phoneField.value = personalInfo.phone;
    if (universityField) universityField.value = personalInfo.university;
    if (majorField) majorField.value = personalInfo.major;
    if (specializationField) specializationField.value = personalInfo.specialization;
    if (gpaField) gpaField.value = personalInfo.gpa;
    if (studyPeriodField) studyPeriodField.value = personalInfo.studyPeriod;
}

function syncPersonalInfo() {
    console.log('Syncing personal info...');
    console.log('Current personal info:', personalInfo);
    
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
            personalInfo: personalInfo,
            timestamp: new Date().toISOString()
        }
    }));
    
    showAlert(`Đã đồng bộ thông tin cá nhân với trang chủ!`, 'success');
    
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
