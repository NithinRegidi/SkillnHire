
let previousTabId = "jobs"; // Default to 'jobs' initially

document.addEventListener("DOMContentLoaded", () => {
  showTab("jobs");
});

function showTab(tabId) {
  const tabs = document.querySelectorAll(".tab-content");
  const buttons = document.querySelectorAll(".tab-button");

  tabs.forEach((tab) => {
    tab.classList.remove("active");
  });

  buttons.forEach((button) => {
    button.classList.remove("active");
  });

  document.getElementById(tabId).classList.add("active");
  const activeButton = document.querySelector(
    `.tab-button[onclick="showTab('${tabId}')"]`
  );
  if (activeButton) {
    activeButton.classList.add("active");
  }

  if (tabId !== "details") {
    previousTabId = tabId;
  }
}

function viewDetails(title) {
  const detailsContent = document.getElementById("details-content");

  detailsContent.innerHTML = `
        <h3>${title}</h3>
        <p>Details about ${title} will be displayed here.</p>
    `;

  showTab("details");
}

function viewDetails(title) {
  // Fetch the details for the selected job or internship
  const details = getDetailsForTitle(title);

  if (details) {
    // Populate the details content
    const detailsContent = document.getElementById("details-content");
    detailsContent.innerHTML = `
            <h3>${details.title}</h3>
            <p><b>Location:</b> ${details.location}</p>
            <p><b>Company:</b> ${details.company}</p>
            <p><b>Job Type:</b> ${details.jobType}</p>
            <p><b>Salary/Stipend:</b> ${details.salary}</p>
            <p><b>Description of this Job:</b> ${details.description}</p>
            <button style="background-color: rgb(0, 86, 179, 0.8); color: #fff; border: none; padding: 10px 20px; font-size: 1rem; cursor: pointer; margin-bottom: 1.5rem; margin-top: 1.5rem; margin-left: 1.5rem" 
            onclick="applyJob('${details.title}')">Apply Now</button>
        `;

    // Show the details section
    showTab("details");
  } else {
    console.error("Details not found for title:", title);
  }
}

/*=================================================================*/

function getDetailsForTitle(title) {
  // Replace with actual data retrieval logic based on title
  return data[title];
}

// Get reference to the filter form
const filterForm = document.getElementById("filter-form");

// Add submit event listener to the filter form
filterForm.addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent default form submission

    // Get user input values from the form
    const location = filterForm.elements["location"].value.toLowerCase();
    const company = filterForm.elements["industry"].value.toLowerCase();
    const jobType = filterForm.elements["job-type"].value.toLowerCase();

    // Select all job cards
    const jobCards = document.querySelectorAll(".job-card");

    let foundMatchingJob = false; // Flag to track if any matching job is found

    // Iterate over each job card to apply filtering
    jobCards.forEach(card => {
        // Extract text content from the card elements using correct nth-child selectors
        const cardLocation = card.querySelector("p:nth-child(2)").textContent.toLowerCase();
        const cardCompany = card.querySelector("p:nth-child(3)").textContent.toLowerCase();
        const cardJobType = card.querySelector("p:nth-child(4)").textContent.toLowerCase();

        // Check if the card matches the filter criteria
        if (
            (location === '' || cardLocation.includes(location)) &&
            (company === '' || cardCompany.includes(company)) &&
            (jobType === '' || cardJobType.includes(jobType))
        ) {
            card.style.display = 'block'; // Show the card
            foundMatchingJob = true; // Set flag indicating matching job found
        } else {
            card.style.display = 'none'; // Hide the card
        }
    });

    // Show message if no jobs match the filter criteria
    if (!foundMatchingJob) {
        showNoResultsMessage();
    } else {
        hideNoResultsMessage();
    }
});

// Function to show no results message
function showNoResultsMessage() {
    const noResultsMessage = document.getElementById("no-results-message");
    if (noResultsMessage) {
        noResultsMessage.style.display = 'block'; // Show the message
    }
}

// Function to hide no results message
function hideNoResultsMessage() {
    const noResultsMessage = document.getElementById("no-results-message");
    if (noResultsMessage) {
        noResultsMessage.style.display = 'none'; // Hide the message
    }
}

/*====================================================================*/

/*For Internship filter */

// for internships every variable/const ends with 1, that is reference to internships
// Get reference to the filter form
const filterForm1 = document.getElementById("filter-form1");

// Add submit event listener to the filter form
filterForm1.addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent default form submission

    // Get user input values from the form
    const location1 = filterForm1.elements["location1"].value.toLowerCase();
    const industry1 = filterForm1.elements["industry1"].value.toLowerCase();
    const jobType1 = filterForm1.elements["job-type1"].value.toLowerCase();

    // Select all internship cards
    const internshipCards = document.querySelectorAll(".internship-card");

    let foundMatchingIntern = false; // Flag to track if any matching job is found

    // Iterate over each internship card to apply filtering
    internshipCards.forEach(card => {
        // Extract text content from the card elements using correct nth-of-type selectors
        const cardLocation = card.querySelector("p:nth-child(2)").textContent.toLowerCase();
        const cardCompany = card.querySelector("p:nth-child(3)").textContent.toLowerCase();
        const cardJobType = card.querySelector("p:nth-child(4)").textContent.toLowerCase();

        // Check if the card matches the filter criteria
        if (
            (location1 === '' || cardLocation.includes(location1)) &&
            (industry1 === '' || cardCompany.includes(industry1)) &&
            (jobType1 === '' || cardJobType.includes(jobType1))
        ) {
            card.style.display = 'block'; // Show the card
            foundMatchingIntern = true; // Set flag indicating matching job found
        } else {
            card.style.display = 'none'; // Hide the card
        }
    });

    // Show message if no jobs match the filter criteria
    if (!foundMatchingIntern) {
        showNoResultsMessage1();
    } else {
        hideNoResultsMessage1();
    }
});

// Function to show no results message
function showNoResultsMessage1() {
    const noResultsMessage = document.getElementById("no-results-message1");
    if (noResultsMessage) {
        noResultsMessage.style.display = 'block'; // Show the message
    }
}

// Function to hide no results message
function hideNoResultsMessage1() {
    const noResultsMessage = document.getElementById("no-results-message1");
    if (noResultsMessage) {
        noResultsMessage.style.display = 'none'; // Hide the message
    }
}


/*=================================================================*/

// This function is added for apply now button to get notified
function applyJob(title) {
  alert(`You are applied successfully to ${title} Role`);
}


function getDetailsForTitle(title) {
  // Replace this with your actual data retrieval logic
  const data = {

    // Add more cases for other job titles

    "FullStack Web Developer": {
      title: "FullStack Web Developer",
      location: "Chennai, India",
      company: "Google",
      jobType: "Full-time",
      salary: "₹8,00,000 - ₹12,00,000 per annum",
      description:
        "About the Job Role: As a FullStack Web Developer at Google, you will be responsible for designing and developing scalable web applications. Skills Required: Proficiency in JavaScript, React, Node.js, and experience with cloud services. Salary: $3000 - $5000 per month. Benefits: Health insurance, flexible working hours, and learning opportunities. Experience: 2-4 years. Number of Openings: 5. About Company: Google is a leading global technology company specializing in Internet-related services and products.",
    },
    "Software Engineer": {
      title: "Software Engineer",
      location: "Bangalore, India",
      company: "Microsoft",
      jobType: "Full-time",
      salary: "₹12,00,000 - ₹18,00,000 per annum",
      description:
        "About the Job Role: As a Software Engineer at Microsoft, you will work on developing high-quality software solutions. Skills Required: Strong knowledge of C#, .NET, and Azure. Salary: ₹12,00,000 - ₹18,00,000 per annum. Benefits: Competitive salary, comprehensive health coverage, and career development programs. Experience: 3-5 years. Number of Openings: 3. About Company: Microsoft is a multinational technology corporation with a mission to empower every person and organization on the planet to achieve more.",
    },
    "Data Scientist": {
      title: "Data Scientist",
      location: "Hyderabad, India",
      company: "Amazon",
      jobType: "Full-time",
      salary: "₹15,00,000 - ₹20,00,000 per annum",
      description:
        "About the Job Role: As a Data Scientist at Amazon, you will analyze large data sets to derive actionable insights. Skills Required: Expertise in Python, R, machine learning, and data visualization tools. Salary: ₹15,00,000 - ₹20,00,000 per annum. Benefits: Stock options, health insurance, and employee discounts. Experience: 4-6 years. Number of Openings: 4. About Company: Amazon is a global leader in e-commerce, cloud computing, and AI with a customer-centric approach.",
    },
    "Front-end Developer": {
      title: "Front-end Developer",
      location: "Pune, India",
      company: "Facebook",
      jobType: "Part-time",
      salary: "₹8,00,000 - ₹12,00,000 per annum",
      description:
        "About the Job Role: As a Front-end Developer at Facebook, you will create user-friendly web pages using HTML, CSS, and JavaScript. Skills Required: Proficiency in React, Vue.js, and responsive design. Salary: ₹8,00,000 - ₹12,00,000 per annum. Benefits: Flexible working hours, gym membership, and professional development opportunities. Experience: 2-3 years. Number of Openings: 2. About Company: Facebook is a leading social media platform focused on connecting people worldwide.",
    },
    "DevOps Engineer": {
      title: "DevOps Engineer",
      location: "Gurgaon, India",
      company: "IBM",
      jobType: "Full-time",
      salary: "₹10,00,000 - ₹14,00,000 per annum",
      description:
        "About the Job Role: As a DevOps Engineer at IBM, you will automate and optimize processes to enhance deployment efficiency. Skills Required: Proficiency in CI/CD, Docker, Kubernetes, and scripting languages. Salary: ₹10,00,000 - ₹14,00,000 per annum. Benefits: Retirement plans, health benefits, and tuition reimbursement. Experience: 3-5 years. Number of Openings: 3. About Company: IBM is a global technology company providing hardware, software, and consulting services.",
    },
    "Cloud Architect": {
      title: "Cloud Architect",
      location: "Mumbai, India",
      company: "Google",
      jobType: "Full-time",
      salary: "₹18,00,000 - ₹25,00,000 per annum",
      description:
        "About the Job Role: As a Cloud Architect at Google, you will design and implement cloud solutions. Skills Required: Expertise in Google Cloud Platform, architecture design, and cloud security. Salary: ₹18,00,000 - ₹25,00,000 per annum. Benefits: Stock options, health insurance, and learning opportunities. Experience: 5-7 years. Number of Openings: 4. About Company: Google is a leading global technology company specializing in Internet-related services and products.",
    },
    "Machine Learning Engineer": {
      title: "Machine Learning Engineer",
      location: "Chennai, India",
      company: "Netflix",
      jobType: "Full-time",
      salary: "₹20,00,000 - ₹30,00,000 per annum",
      description:
        "About the Job Role: As a Machine Learning Engineer at Netflix, you will develop algorithms for data-driven decision-making. Skills Required: Proficiency in Python, TensorFlow, and deep learning. Salary: ₹20,00,000 - ₹30,00,000 per annum. Benefits: Health insurance, stock options, and flexible working hours. Experience: 4-6 years. Number of Openings: 3. About Company: Netflix is a leading streaming entertainment service with a global subscriber base.",
    },
    "Backend Developer": {
      title: "Backend Developer",
      location: "Noida, India",
      company: "LinkedIn",
      jobType: "Full-time",
      salary: "₹11,00,000 - ₹16,00,000 per annum",
      description:
        "About the Job Role: As a Backend Developer at LinkedIn, you will build and maintain server-side logic and databases. Skills Required: Expertise in Java, Node.js, and database management. Salary: ₹11,00,000 - ₹16,00,000 per annum. Benefits: Health insurance, performance bonuses, and career growth opportunities. Experience: 3-5 years. Number of Openings: 3. About Company: LinkedIn is a professional networking platform connecting job seekers and employers.",
    },
    "Mobile App Developer": {
      title: "Mobile App Developer",
      location: "Kolkata, India",
      company: "Spotify",
      jobType: "Full-time",
      salary: "₹9,00,000 - ₹13,00,000 per annum",
      description:
        "About the Job Role: As a Mobile App Developer at Spotify, you will create and maintain mobile applications. Skills Required: Proficiency in Swift, Kotlin, and mobile app frameworks. Salary: ₹9,00,000 - ₹13,00,000 per annum. Benefits: Health insurance, free Spotify subscription, and flexible working hours. Experience: 2-4 years. Number of Openings: 2. About Company: Spotify is a digital music service providing access to millions of songs worldwide.",
    },
    "IT Support Specialist": {
      title: "IT Support Specialist",
      location: "Jaipur, India",
      company: "Oracle",
      jobType: "Full-time",
      salary: "₹7,00,000 - ₹10,00,000 per annum",
      description:
        "About the Job Role: As an IT Support Specialist at Oracle, you will provide technical support and troubleshooting. Skills Required: Knowledge of operating systems, networking, and hardware/software troubleshooting. Salary: ₹7,00,000 - ₹10,00,000 per annum. Benefits: Health insurance, retirement plans, and career development programs. Experience: 2-4 years. Number of Openings: 4. About Company: Oracle is a multinational computer technology corporation known for its database software and cloud services.",
    },
    "Cybersecurity Analyst": {
      title: "Cybersecurity Analyst",
      location: "Ahmedabad, India",
      company: "Intel",
      jobType: "Full-time",
      salary: "₹12,00,000 - ₹18,00,000 per annum",
      description:
        "About the Job Role: As a Cybersecurity Analyst at Intel, you will protect systems and networks from cyber threats. Skills Required: Expertise in cybersecurity protocols, threat analysis, and risk management. Salary: ₹12,00,000 - ₹18,00,000 per annum. Benefits: Health insurance, employee stock purchase plan, and wellness programs. Experience: 3-5 years. Number of Openings: 3. About Company: Intel is a leading manufacturer of semiconductor chips and technology solutions.",
    },
    "Systems Analyst": {
      title: "Systems Analyst",
      location: "Pune, India",
      company: "SAP",
      jobType: "Full-time",
      salary: "₹8,00,000 - ₹12,00,000 per annum",
      description:
        "About the Job Role: As a Systems Analyst at SAP, you will analyze and improve IT systems. Skills Required: Knowledge of SAP software, systems analysis, and database management. Salary: ₹8,00,000 - ₹12,00,000 per annum. Benefits: Health insurance, employee stock options, and professional development programs. Experience: 3-5 years. Number of Openings: 2. About Company: SAP is a market leader in enterprise application software, helping companies of all sizes and industries run better.",
    },
    "AI Research Scientist": {
      title: "AI Research Scientist",
      location: "Bangalore, India",
      company: "OpenAI",
      jobType: "Full-time",
      salary: "₹20,00,000 - ₹28,00,000 per annum",
      description:
        "About the Job Role: As an AI Research Scientist at OpenAI, you will conduct research to advance AI technology. Skills Required: Expertise in machine learning, deep learning, and Python. Salary: ₹20,00,000 - ₹28,00,000 per annum. Benefits: Stock options, health insurance, and research funding. Experience: 5-7 years. Number of Openings: 3. About Company: OpenAI is an AI research lab with a mission to ensure that artificial general intelligence benefits all of humanity.",
    },
    "Blockchain Developer": {
      title: "Blockchain Developer",
      location: "Mumbai, India",
      company: "ConsenSys",
      jobType: "Full-time",
      salary: "₹15,00,000 - ₹22,00,000 per annum",
      description:
        "About the Job Role: As a Blockchain Developer at ConsenSys, you will develop decentralized applications. Skills Required: Proficiency in Solidity, Ethereum, and smart contracts. Salary: ₹15,00,000 - ₹22,00,000 per annum. Benefits: Health insurance, remote work options, and professional growth opportunities. Experience: 4-6 years. Number of Openings: 2. About Company: ConsenSys is a blockchain technology company building decentralized applications and tools for Ethereum.",
    },
    "UI/UX Designer": {
      title: "UI/UX Designer",
      location: "Hyderabad, India",
      company: "Adobe",
      jobType: "Full-time",
      salary: "₹10,00,000 - ₹14,00,000 per annum",
      description:
        "About the Job Role: As a UI/UX Designer at Adobe, you will design user interfaces and experiences for software applications. Skills Required: Proficiency in Adobe XD, Sketch, and Figma. Salary: ₹10,00,000 - ₹14,00,000 per annum. Benefits: Health insurance, creative work environment, and learning opportunities. Experience: 3-5 years. Number of Openings: 3. About Company: Adobe is a multinational software company known for its creative software products, including Photoshop and Illustrator.",
    },
    "Product Manager": {
      title: "Product Manager",
      location: "Gurgaon, India",
      company: "Twitter",
      jobType: "Full-time",
      salary: "₹14,00,000 - ₹20,00,000 per annum",
      description:
        "About the Job Role: As a Product Manager at Twitter, you will manage product development and strategy. Skills Required: Strong understanding of product lifecycle, agile methodologies, and data analysis. Salary: ₹14,00,000 - ₹20,00,000 per annum. Benefits: Health insurance, stock options, and professional development programs. Experience: 4-6 years. Number of Openings: 2. About Company: Twitter is a social media platform known for real-time information sharing and social networking.",
    },
    "QA Engineer": {
      title: "QA Engineer",
      location: "Noida, India",
      company: "Salesforce",
      jobType: "Full-time",
      salary: "₹9,00,000 - ₹13,00,000 per annum",
      description:
        "About the Job Role: As a QA Engineer at Salesforce, you will ensure the quality of software products through testing and validation. Skills Required: Proficiency in automated testing, Selenium, and Agile methodologies. Salary: ₹9,00,000 - ₹13,00,000 per annum. Benefits: Health insurance, performance bonuses, and career growth opportunities. Experience: 3-5 years. Number of Openings: 3. About Company: Salesforce is a leading customer relationship management (CRM) platform that helps businesses grow and succeed.",
    },
    "Business Analyst": {
      title: "Business Analyst",
      location: "Chennai, India",
      company: "Accenture",
      jobType: "Full-time",
      salary: "₹8,00,000 - ₹12,00,000 per annum",
      description:
        "About the Job Role: As a Business Analyst at Accenture, you will analyze business processes and provide data-driven insights. Skills Required: Strong analytical skills, proficiency in Excel and SQL. Salary: ₹8,00,000 - ₹12,00,000 per annum. Benefits: Health insurance, retirement plans, and professional development programs. Experience: 2-4 years. Number of Openings: 4. About Company: Accenture is a global professional services company providing a range of services and solutions in strategy, consulting, digital, technology, and operations.",
    },
    
    // Add more cases for other internship titles
    "Software Development Intern": {
      title: "Software Development Intern",
      location: "Bangalore, India",
      company: "Infosys Ltd",
      jobType: "Full-time, 12 weeks",
      stipend: "₹25,000 - ₹35,000",
      description:
        "Infosys Ltd is offering a Full-time Software Development Internship in Bangalore. This internship provides hands-on experience in software development methodologies and technologies. Candidates will work on real projects under the guidance of experienced mentors. Required skills include proficiency in programming languages like Java or Python, familiarity with web development frameworks, and strong problem-solving abilities. The stipend ranges from ₹25,000 to ₹35,000 based on performance. There are multiple openings available for this position.",
    },
    "Marketing Internship": {
      title: "Marketing Internship",
      location: "Mumbai, India",
      company: "Hindustan Unilever Limited",
      jobType: "Part-time, 8 weeks",
      stipend: "₹15,000 - ₹20,000",
      description:
        "Hindustan Unilever Limited (HUL) is offering a Part-time Marketing Internship in Mumbai. This role involves supporting marketing campaigns, conducting market research, and analyzing consumer behavior. Candidates should possess strong analytical skills, creativity in marketing strategies, and familiarity with digital marketing tools. The internship offers a stipend of ₹15,000 to ₹20,000. It is an excellent opportunity for students looking to gain practical experience in brand management and marketing.",
    },
    "Finance Intern": {
      title: "Finance Intern",
      location: "New Delhi, India",
      company: "HDFC Bank",
      jobType: "Full-time, 10 weeks",
      stipend: "₹30,000 - ₹40,000",
      description:
        "HDFC Bank is offering a Full-time Finance Internship in New Delhi. This internship provides exposure to various aspects of banking and financial services. Responsibilities include financial analysis, preparing reports, and assisting in financial planning activities. Candidates should have a strong understanding of financial principles, proficiency in MS Excel, and excellent analytical skills. The stipend for this internship ranges from ₹30,000 to ₹40,000. HDFC Bank offers a supportive work environment and potential for future employment opportunities based on performance.",
    },
    "Graphic Design Intern": {
      title: "Graphic Design Intern",
      location: "Pune, India",
      company: "Persistent Systems",
      jobType: "Part-time, 6 weeks",
      stipend: "₹12,000 - ₹18,000",
      description:
        "Persistent Systems is offering a Part-time Graphic Design Internship in Pune. This role involves creating visual concepts, designing marketing materials, and collaborating with the creative team. Candidates should have proficiency in graphic design software such as Adobe Photoshop, Illustrator, or InDesign. Strong creative thinking, attention to detail, and time management skills are essential. The internship offers a stipend of ₹12,000 to ₹18,000. It is suitable for students aiming to enhance their design skills in a professional environment.",
    },
    "Human Resources Internship": {
      title: "Human Resources Internship",
      location: "Hyderabad, India",
      company: "Amazon India",
      jobType: "Full-time, 8 weeks",
      stipend: "₹20,000 - ₹25,000",
      description:
        "Amazon India is offering a Full-time Human Resources Internship in Hyderabad. This internship provides exposure to HR operations, employee engagement initiatives, and talent management strategies. Candidates should have strong interpersonal skills, the ability to multitask, and a keen interest in HR practices. The stipend for this internship ranges from ₹20,000 to ₹25,000. It offers an opportunity to gain practical HR experience in a dynamic workplace environment.",
    },
    "Data Science Intern": {
      title: "Data Science Intern",
      location: "Chennai, India",
      company: "TCS (Tata Consultancy Services)",
      jobType: "Part-time, 12 weeks",
      stipend: "₹28,000 - ₹35,000",
      description:
        "Tata Consultancy Services (TCS) is offering a Part-time Data Science Internship in Chennai. This internship involves working on data analysis projects, machine learning models, and data visualization techniques. Candidates should have programming skills in Python or R, knowledge of statistical methods, and familiarity with databases. The stipend ranges from ₹28,000 to ₹35,000 based on performance. It provides valuable experience in the field of data science.",
    },
    "Content Writing Internship": {
      title: "Content Writing Internship",
      location: "Bengaluru, India",
      company: "Flipkart",
      jobType: "Full-time, 10 weeks",
      stipend: "₹18,000 - ₹25,000",
      description:
        "Flipkart is offering a Full-time Content Writing Internship in Bengaluru. This internship focuses on creating engaging content for digital platforms, including blogs, social media, and product descriptions. Candidates should have strong writing skills, creativity, and a passion for digital content creation. The stipend for this internship ranges from ₹18,000 to ₹25,000. It provides an opportunity to work with one of India's leading e-commerce companies.",
    },
    "IT Support Intern": {
      title: "IT Support Intern",
      location: "Gurugram, India",
      company: "HCL Technologies",
      jobType: "Part-time, 8 weeks",
      stipend: "₹15,000 - ₹20,000",
      description:
        "HCL Technologies is offering a Part-time IT Support Internship in Gurugram. This role involves providing technical support, troubleshooting IT issues, and maintaining computer systems. Candidates should have basic knowledge of IT infrastructure, troubleshooting skills, and the ability to communicate effectively. The internship offers a stipend of ₹15,000 to ₹20,000. It provides hands-on experience in IT support services.",
    },
    "Public Relations Intern": {
      title: "Public Relations Intern",
      location: "Mumbai, India",
      company: "Reliance Industries",
      jobType: "Full-time, 12 weeks",
      stipend: "₹30,000 - ₹40,000",
      description:
        "Reliance Industries is offering a Full-time Public Relations Internship in Mumbai. This internship involves assisting in PR campaigns, media relations, and corporate communications. Candidates should have excellent communication skills, creativity in PR strategies, and the ability to work in a fast-paced environment. The stipend for this internship ranges from ₹30,000 to ₹40,000. It provides exposure to PR practices in one of India's largest conglomerates.",
    },
    "Software Testing Intern": {
      title: "Software Testing Intern",
      location: "Ahmedabad, India",
      company: "Tech Mahindra",
      jobType: "Part-time, 6 weeks",
      stipend: "₹12,000 - ₹18,000",
      description:
        "Tech Mahindra is offering a Part-time Software Testing Internship in Ahmedabad. This role involves testing software applications, identifying bugs, and ensuring quality assurance. Candidates should have knowledge of testing methodologies, attention to detail, and problem-solving skills. The internship offers a stipend of ₹12,000 to ₹18,000. It provides practical experience in software testing within a professional environment.",
    },
    "Business Development Internship": {
      title: "Business Development Internship",
      location: "Singapore",
      company: "Google",
      jobType: "Full-time, 12 weeks",
      stipend: "₹50,000 - ₹70,000",
      description:
        "Google is offering a Full-time Business Development Internship in Singapore. This internship involves market research, identifying new business opportunities, and developing strategic partnerships. Candidates should have strong analytical skills, business acumen, and the ability to work in a multicultural environment. The stipend ranges from ₹50,000 to ₹70,000 based on performance. It provides an opportunity to work with one of the world's leading technology companies.",
    },
    "Product Management Intern": {
      title: "Product Management Intern",
      location: "London, UK",
      company: "Apple Inc.",
      jobType: "Part-time, 10 weeks",
      stipend: "₹40,000 - ₹50,000",
      description:
        "Apple Inc. is offering a Part-time Product Management Internship in London. This internship focuses on product planning, market analysis, and product lifecycle management. Candidates should have strong analytical skills, strategic thinking, and a passion for technology products. The stipend for this internship ranges from ₹40,000 to ₹50,000. It offers an opportunity to gain insights into product management at one of the world's most innovative companies.",
    },
    "Research Analyst Intern": {
      title: "Research Analyst Intern",
      location: "New York, USA",
      company: "Microsoft Corporation",
      jobType: "Full-time, 8 weeks",
      stipend: "₹60,000 - ₹80,000",
      description:
        "Microsoft Corporation is offering a Full-time Research Analyst Internship in New York. This internship involves conducting research, analyzing data, and preparing reports to support strategic decision-making. Interns will work closely with senior analysts and researchers, gaining hands-on experience in data collection, statistical analysis, and market research methodologies. Ideal candidates should have strong analytical skills, proficiency in data analysis tools, and the ability to interpret complex data sets. The internship duration is 8 weeks with a stipend ranging from ₹60,000 to ₹80,000. It offers valuable insights into the technology industry and the opportunity to contribute to Microsoft's research initiatives.",
    },
    "Event Management Internship": {
      title: "Event Management Internship",
      location: "Sydney, Australia",
      company: "Facebook",
      jobType: "Part-time, 12 weeks",
      stipend: "₹35,000 - ₹45,000",
      description:
        "Facebook offers a Part-time Event Management Internship in Sydney, Australia. This role involves assisting in planning and executing events, managing logistics, coordinating with vendors, and ensuring smooth event operations. Ideal candidates should have strong organizational skills, attention to detail, and the ability to work well under pressure. The internship lasts for 12 weeks with a stipend ranging from ₹35,000 to ₹45,000. It provides valuable hands-on experience in event coordination within a dynamic and fast-paced environment at Facebook.",
    },
    "Legal Intern": {
      title: "Legal Intern",
      location: "Paris, France",
      company: "L'Oréal",
      jobType: "Full-time, 10 weeks",
      stipend: "₹55,000 - ₹70,000",
      description:
        "L'Oréal is offering a Full-time Legal Internship in Paris, France. This internship involves supporting the legal department in various legal research, drafting contracts, and reviewing legal documents. Candidates should be law students or recent law graduates with a strong academic background and a keen interest in corporate law. The internship duration is 10 weeks with a stipend ranging from ₹55,000 to ₹70,000. It offers an opportunity to gain practical legal experience in a global beauty company known for its innovation and sustainability efforts.",
    },
    "Environmental Sustainability Intern": {
      title: "Environmental Sustainability Intern",
      location: "Cape Town, South Africa",
      company: "Unilever",
      jobType: "Part-time, 8 weeks",
      stipend: "₹25,000 - ₹35,000",
      description:
        "Unilever is offering a Part-time Environmental Sustainability Internship in Cape Town, South Africa. This role involves assisting in environmental sustainability projects, analyzing sustainability data, and contributing to sustainability reports. Ideal candidates should have a background in environmental science, sustainability, or related fields, with a passion for sustainable development. The internship duration is 8 weeks with a stipend ranging from ₹25,000 to ₹35,000. It provides an opportunity to work on impactful projects addressing environmental challenges within a leading global consumer goods company.",
    },
    "Healthcare Administration Internship": {
      title: "Healthcare Administration Internship",
      location: "Toronto, Canada",
      company: "Pfizer",
      jobType: "Full-time, 12 weeks",
      salary: "₹45,000 - ₹60,000",
      description:
        "Pfizer offers a Full-time Healthcare Administration Internship in Toronto, Canada. This internship involves supporting various administrative tasks within Pfizer's healthcare division, including data analysis, project management, and operational support. Candidates should have strong organizational skills, attention to detail, and an interest in healthcare administration. The internship duration is 12 weeks with a stipend ranging from ₹45,000 to ₹60,000. It provides hands-on experience in healthcare operations and exposure to Pfizer's innovative healthcare solutions.",
    },
  };

  return data[title] || null;
}

function goBack() {
  showTab(previousTabId);
}
