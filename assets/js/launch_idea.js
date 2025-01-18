document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('idea-form');
    const submissionsList = document.getElementById('submissions-list');

    // Array to store submissions (use localStorage for persistence)
    let submissions = JSON.parse(localStorage.getItem('submissions')) || [];

    // Function to render submissions
    function renderSubmissions() {
        submissionsList.innerHTML = '';
        if (submissions.length > 0) {
            submissions.forEach((submission, index) => {
                const submissionElement = document.createElement('div');
                submissionElement.className = 'submission';
                submissionElement.innerHTML = `
                    <h3>${submission.title}</h3>
                    <p>Description: ${submission.description}</p>
                    <p>Target Market: ${submission.targetMarket}</p>
                    <p>USP: ${submission.usp}</p>
                    <p>Industry: ${submission.industry}</p>
                    <p>Stage: ${submission.stage}</p>
                    <p>Status: <span class="status-${submission.status.toLowerCase()}">${submission.status}</span></p>
                `;
                submissionsList.appendChild(submissionElement);
            });
        } else {
            submissionsList.innerHTML = '<p>No submissions yet.</p>';
        }
    }

    // Render submissions on page load
    renderSubmissions();

    // Event listener for form submission
    form.addEventListener('submit', function(event) {
        event.preventDefault();

        const ideaTitle = document.getElementById('idea-title').value;
        const ideaDescription = document.getElementById('idea-description').value;
        const targetMarket = document.getElementById('target-market').value;
        const usp = document.getElementById('usp').value;
        const industry = document.getElementById('industry').value;
        const stage = document.getElementById('stage').value;

        if (!ideaTitle || !ideaDescription || !targetMarket || !usp || !industry || !stage) {
            alert('Please fill in all required fields.');
            return;
        }

        const submission = {
            title: ideaTitle,
            description: ideaDescription,
            targetMarket: targetMarket,
            usp: usp,
            industry: industry,
            stage: stage,
            status: 'Pending' // Placeholder status
        };

        submissions.push(submission);

        // Save submissions to localStorage
        localStorage.setItem('submissions', JSON.stringify(submissions));

        // Render submissions
        renderSubmissions();

        // Reset form
        form.reset();
    });


    // Function to toggle visibility of submissions
    
   /* window.viewSubmissions = function() {
        submissionsList.classList.toggle('hidden');
        renderSubmissions();
    };*/

    window.viewSubmissions = function() {
        submissionsList.classList.remove('hidden');
        document.querySelector('#submissions-section button:last-child').classList.remove('hidden');
    }

    window.hideSubmissions = function() {
        submissionsList.classList.add('hidden');
        document.querySelector('#submissions-section button:last-child').classList.add('hidden');
    }
});
