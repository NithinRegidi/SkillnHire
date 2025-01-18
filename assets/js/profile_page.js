
function enableEditing() {
    const profileSections = document.querySelectorAll('.profile-section p span');
    profileSections.forEach(section => {
        section.setAttribute('contenteditable', 'true');
        section.classList.add('editable');
    });

    document.getElementById('edit-btn').style.display = 'none';
    document.getElementById('save-btn').style.display = 'inline-block';
}

function saveProfile() {
    const profileSections = document.querySelectorAll('.profile-section p span');
    profileSections.forEach(section => {
        section.setAttribute('contenteditable', 'false');
        section.classList.remove('editable');
    });

    // Example of saving data to local storage (can be replaced with server save functionality)
    const profileData = {};
    profileSections.forEach(section => {
        profileData[section.id] = section.innerText;
    });
    localStorage.setItem('profileData', JSON.stringify(profileData));

    document.getElementById('edit-btn').style.display = 'inline-block';
    document.getElementById('save-btn').style.display = 'none';
}

// Load profile data from local storage (if available)
document.addEventListener('DOMContentLoaded', () => {
    const savedProfileData = JSON.parse(localStorage.getItem('profileData'));
    if (savedProfileData) {
        for (const key in savedProfileData) {
            document.getElementById(key).innerText = savedProfileData[key];
        }
    }
});


/*
//========================another js ===============================================//
function addEducation() {
    const educationList = document.getElementById('education-list');
    const newEducationItem = document.createElement('div');
    newEducationItem.innerHTML = `
        <p><b>Highest Degree Obtained:</b> <span contenteditable="true" class="editable"></span></p>
        <p><b>School/University Name:</b> <span contenteditable="true" class="editable"></span></p>
        <p><b>Graduation Year:</b> <span contenteditable="true" class="editable"></span></p>
        <p><b>Major/Specialization:</b> <span contenteditable="true" class="editable"></span></p>
        <p><b>GPA/Percentage:</b> <span contenteditable="true" class="editable"></span></p>
    `;
    educationList.appendChild(newEducationItem);
}

function addWorkExperience() {
    const workExperienceList = document.getElementById('work-experience-list');
    const newWorkExperienceItem = document.createElement('div');
    newWorkExperienceItem.innerHTML = `
        <p><b>Job Title:</b> <span contenteditable="true" class="editable"></span></p>
        <p><b>Company Name:</b> <span contenteditable="true" class="editable"></span></p>
        <p><b>Start and End Dates:</b> <span contenteditable="true" class="editable"></span></p>
        <p><b>Job Description:</b> <span contenteditable="true" class="editable"></span></p>
        <p><b>Achievements and Contributions:</b> <span contenteditable="true" class="editable"></span></p>
    `;
    workExperienceList.appendChild(newWorkExperienceItem);
}

function addSkill() {
    const skillsList = document.getElementById('skills-list');
    const newSkillItem = document.createElement('div');
    newSkillItem.innerHTML = `
        <p><b>Technical Skills:</b> <span contenteditable="true" class="editable"></span></p>
        <p><b>Soft Skills:</b> <span contenteditable="true" class="editable"></span></p>
    `;
    skillsList.appendChild(newSkillItem);
}

function addCertification() {
    const certificationsList = document.getElementById('certifications-list');
    const newCertificationItem = document.createElement('div');
    newCertificationItem.innerHTML = `
        <p><b>Certification Name:</b> <span contenteditable="true" class="editable"></span></p>
        <p><b>Issuing Organization:</b> <span contenteditable="true" class="editable"></span></p>
        <p><b>Year Received:</b> <span contenteditable="true" class="editable"></span></p>
    `;
    certificationsList.appendChild(newCertificationItem);
}

function addProject() {
    const projectsList = document.getElementById('projects-list');
    const newProjectItem = document.createElement('div');
    newProjectItem.innerHTML = `
        <p><b>Project Title:</b> <span contenteditable="true" class="editable"></span></p>
        <p><b>Project Description:</b> <span contenteditable="true" class="editable"></span></p>
        <p><b>Technologies Used:</b> <span contenteditable="true" class="editable"></span></p>
        <p><b>Role and Responsibilities:</b> <span contenteditable="true" class="editable"></span></p>
        <p><b>Project Duration:</b> <span contenteditable="true" class="editable"></span></p>
    `;
    projectsList.appendChild(newProjectItem);
}

function addAchievement() {
    const achievementsList = document.getElementById('achievements-list');
    const newAchievementItem = document.createElement('div');
    newAchievementItem.innerHTML = `
        <p><b>Award Name:</b> <span contenteditable="true" class="editable"></span></p>
        <p><b>Issuing Organization:</b> <span contenteditable="true" class="editable"></span></p>
        <p><b>Year Received:</b> <span contenteditable="true" class="editable"></span></p>
        <p><b>Description:</b> <span contenteditable="true" class="editable"></span></p>
    `;
    achievementsList.appendChild(newAchievementItem);
}

function addPortfolioItem() {
    const portfolioList = document.getElementById('portfolio-list');
    const newPortfolioItem = document.createElement('div');
    newPortfolioItem.innerHTML = `
        <p><b>Link Label:</b> <a href="#" target="_blank"><span contenteditable="true" class="editable"></span></a></p>
    `;
    portfolioList.appendChild(newPortfolioItem);
}

function addPreference() {
    const preferencesList = document.getElementById('preferences-list');
    const newPreferenceItem = document.createElement('div');
    newPreferenceItem.innerHTML = `
        <p><b>Preference:</b> <span contenteditable="true" class="editable"></span></p>
    `;
    preferencesList.appendChild(newPreferenceItem);
}

function addAdditionalInfo() {
    const additionalInfoList = document.getElementById('additional-info-list');
    const newAdditionalInfoItem = document.createElement('div');
    newAdditionalInfoItem.innerHTML = `
        <p><b>Info Title:</b> <span contenteditable="true" class="editable"></span></p>
    `;
    additionalInfoList.appendChild(newAdditionalInfoItem);
}

// Function to enable editing (similar to previous implementation)

// Function to save profile (similar to previous implementation)

// Function to load profile data from local storage (similar to previous implementation)

//========================another js ===============================================//

*/
