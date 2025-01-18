document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('startup-form');
    const submissionsList = document.getElementById('submissions-list');

    // Array to store submissions (use localStorage for persistence)
    let submissions = JSON.parse(localStorage.getItem('submissions')) || [];

    // Function to render submissions
    function renderSubmissions() {
        submissionsList.innerHTML = '';
        submissions.forEach((submission, index) => {
            const submissionElement = document.createElement('div');
            submissionElement.className = 'submission';
            submissionElement.innerHTML = `
                <h3>${submission.name}</h3>
                <p>Description: ${submission.description}</p>
                <p>Stage: ${submission.stage}</p>
                <p>Capital Required: $${submission.capital}</p>
                <p>Skills Needed: ${submission.skills}</p>
                <p>Industry: ${submission.industry}</p>
                <p>Timeline: ${submission.timeline}</p>
                <p>Team Size: ${submission.teamSize}</p>
                <p>Market Strategy: ${submission.marketStrategy}</p>
                <p>Additional Resources: ${submission.additionalResources}</p>
                <p>Status: <span class="status-${submission.status.toLowerCase()}">${submission.status}</span></p>
            `;
            submissionsList.appendChild(submissionElement);
        });
    }

    // Render submissions on page load
    renderSubmissions();

    // Event listener for form submission
    form.addEventListener('submit', function(event) {
        event.preventDefault();

        const newSubmission = {
            name: form['business-name'].value,
            description: form['business-description'].value,
            stage: form['development-stage'].value,
            capital: form['capital-required'].value,
            skills: form['skills-needed'].value,
            industry: form['industry'].value,
            timeline: form['timeline'].value,
            teamSize: form['team-size'].value,
            marketStrategy: form['market-strategy'].value,
            additionalResources: form['additional-resources'].value,
            status: 'Pending' // Default status
        };

        submissions.push(newSubmission);
        localStorage.setItem('submissions', JSON.stringify(submissions));

        form.reset();
        renderSubmissions();
    });

    window.viewSubmissions = function() {
        submissionsList.classList.remove('hidden');
        document.querySelector('#submissions-section button:last-child').classList.remove('hidden');
    }

    window.hideSubmissions = function() {
        submissionsList.classList.add('hidden');
        document.querySelector('#submissions-section button:last-child').classList.add('hidden');
    }
});
