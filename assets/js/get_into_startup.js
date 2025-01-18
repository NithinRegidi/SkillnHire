
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

function showStartupCategory(categoryId) {
  const categories = document.querySelectorAll(".startup-content");
  const buttons = document.querySelectorAll(".category-button");

  categories.forEach((category) => {
    category.classList.remove("active");
  });

  buttons.forEach((button) => {
    button.classList.remove("active");
  });

  document.getElementById(categoryId).classList.add("active");
  const activeButton = document.querySelector(
    `.category-button[onclick="showStartupCategory('${categoryId}')"]`
  );
  if (activeButton) {
    activeButton.classList.add("active");
  }
}

/*===================================================================*/

const filterFormJob = document.getElementById("filter-form-job");

filterFormJob.addEventListener("submit", function(event) {
    event.preventDefault();

    const location = filterFormJob.elements["location"].value.toLowerCase().trim();
    const industry = filterFormJob.elements["industry"].value.toLowerCase().trim();
    const jobType = filterFormJob.elements["job-type"].value.toLowerCase().trim();

    const jobCards = document.querySelectorAll(".job-card");

    let foundMatchingJob = false; // Flag to track if any matching job is found

    jobCards.forEach(card => {
        const cardLocation = card.querySelector("p:nth-child(2)").textContent.toLowerCase();
        const cardCompany = card.querySelector("p:nth-child(3)").textContent.toLowerCase();
        const cardJobType = card.querySelector("p:nth-child(4)").textContent.toLowerCase();

        if (
            (location === '' || cardLocation.includes(location)) &&
            (industry === '' || cardCompany.includes(industry)) &&
            (jobType === '' || cardJobType.includes(jobType))
        ) {
            card.style.display = 'block'; // Show the card
            foundMatchingJob = true; // Set flag indicating matching job found
        } else {
            card.style.display = 'none'; // Hide the card
        }
    });

    // Show no results message if no matching jobs are found
    if (!foundMatchingJob) {
        showNoResultsMessageJob();
    } else {
        hideNoResultsMessageJob();
    }
});

// Function to show no results message
function showNoResultsMessageJob() {
    const noResultsMessage = document.getElementById("no-results-message-job");
    if (noResultsMessage) {
        noResultsMessage.style.display = 'block'; // Show the message
    }
}

// Function to hide no results message
function hideNoResultsMessageJob() {
    const noResultsMessage = document.getElementById("no-results-message-job");
    if (noResultsMessage) {
        noResultsMessage.style.display = 'none'; // Hide the message
    }
}

/*===================================================================*/
//This filtering is for internships

const filterFormInternship = document.getElementById("filter-form-internship");

filterFormInternship.addEventListener("submit", function(event) {
    event.preventDefault();

    const location = filterFormInternship.elements["location"].value.toLowerCase().trim();
    const industry = filterFormInternship.elements["industry"].value.toLowerCase().trim();
    const jobType = filterFormInternship.elements["job-type"].value.toLowerCase().trim();

    const internshipCards = document.querySelectorAll(".internship-card");

    let foundMatchingInternship = false; // Flag to track if any matching internship is found

    internshipCards.forEach(card => {
        const cardLocation = card.querySelector("p:nth-child(2)").textContent.toLowerCase();
        const cardCompany = card.querySelector("p:nth-child(3)").textContent.toLowerCase();
        const cardJobType = card.querySelector("p:nth-child(4)").textContent.toLowerCase();

        if (
            (location === '' || cardLocation.includes(location)) &&
            (industry === '' || cardCompany.includes(industry)) &&
            (jobType === '' || cardJobType.includes(jobType))
        ) {
            card.style.display = 'block'; // Show the card
            foundMatchingInternship = true; // Set flag indicating matching internship found
        } else {
            card.style.display = 'none'; // Hide the card
        }
    });

    // Show no results message if no matching internships are found
    if (!foundMatchingInternship) {
        showNoResultsMessageInternship();
    } else {
        hideNoResultsMessageInternship();
    }
});

// Function to show no results message
function showNoResultsMessageInternship() {
    const noResultsMessage = document.getElementById("no-results-message-internship");
    if (noResultsMessage) {
        noResultsMessage.style.display = 'block'; // Show the message
    }
}

// Function to hide no results message
function hideNoResultsMessageInternship() {
    const noResultsMessage = document.getElementById("no-results-message-internship");
    if (noResultsMessage) {
        noResultsMessage.style.display = 'none'; // Hide the message
    }
}

/*===================================================================*/

// Function to handle form submission and filter startup listings
const filterFormEstablished = document.getElementById("filter-form-established");

filterFormEstablished.addEventListener("submit", function(event) {
    event.preventDefault();

    const location = filterFormEstablished.elements["location"].value.toLowerCase().trim();
    const industry = filterFormEstablished.elements["industry"].value.toLowerCase().trim();
    const stage = filterFormEstablished.elements["stage"].value.toLowerCase().trim();

    const startupCards = document.querySelectorAll(".startup-card");

    let foundMatchingStartup = false; // Flag to track if any matching startup is found

    startupCards.forEach(card => {
        const cardName = card.querySelector("h4").textContent.toLowerCase();
        const cardIndustry = card.querySelector("p:nth-child(2)").textContent.toLowerCase();
        const cardLocation = card.querySelector("p:nth-child(3)").textContent.toLowerCase();
        const cardStage = card.querySelector("p:nth-child(5)").textContent.toLowerCase();

        if (
            (location === '' || cardLocation.includes(location)) &&
            (industry === '' || cardIndustry.includes(industry)) &&
            (stage === '' || cardStage.includes(stage))
        ) {
            card.style.display = 'block'; // Show the card
            foundMatchingStartup = true; // Set flag indicating matching startup found
        } else {
            card.style.display = 'none'; // Hide the card
        }
    });

    // Show no results message if no matching startups are found
    if (!foundMatchingStartup) {
        showNoResultsMessageEstablished();
    } else {
        hideNoResultsMessageEstablished();
    }
});

// Function to show no results message
function showNoResultsMessageEstablished() {
    const noResultsMessage = document.getElementById("no-results-message-established");
    if (noResultsMessage) {
        noResultsMessage.style.display = 'block'; // Show the message
    }
}

// Function to hide no results message
function hideNoResultsMessageEstablished() {
    const noResultsMessage = document.getElementById("no-results-message-established");
    if (noResultsMessage) {
        noResultsMessage.style.display = 'none'; // Hide the message
    }
}

/*===================================================================*/

// Function to handle form submission and filter new startup listings
const filterFormNew = document.getElementById("filter-form-new");

filterFormNew.addEventListener("submit", function(event) {
    event.preventDefault();

    const location = filterFormNew.elements["location"].value.toLowerCase().trim();
    const industry = filterFormNew.elements["industry"].value.toLowerCase().trim();
    const stage = filterFormNew.elements["stage"].value.toLowerCase().trim();

    const startupCards = document.querySelectorAll(".startup-card");

    let foundMatchingStartup = false; // Flag to track if any matching startup is found

    startupCards.forEach(card => {
        const cardName = card.querySelector("h4").textContent.toLowerCase();
        const cardIndustry = card.querySelector("p:nth-child(2)").textContent.toLowerCase();
        const cardLocation = card.querySelector("p:nth-child(3)").textContent.toLowerCase();
        const cardStage = card.querySelector("p:nth-child(5)").textContent.toLowerCase();

        if (
            (location === '' || cardLocation.includes(location)) &&
            (industry === '' || cardIndustry.includes(industry)) &&
            (stage === '' || cardStage.includes(stage))
        ) {
            card.style.display = 'block'; // Show the card
            foundMatchingStartup = true; // Set flag indicating matching startup found
        } else {
            card.style.display = 'none'; // Hide the card
        }
    });

    // Show no results message if no matching startups are found
    if (!foundMatchingStartup) {
        showNoResultsMessageNew();
    } else {
        hideNoResultsMessageNew();
    }
});

// Function to show no results message for new startups
function showNoResultsMessageNew() {
    const noResultsMessage = document.getElementById("no-results-message-new");
    if (noResultsMessage) {
        noResultsMessage.style.display = 'block'; // Show the message
    }
}

// Function to hide no results message for new startups
function hideNoResultsMessageNew() {
    const noResultsMessage = document.getElementById("no-results-message-new");
    if (noResultsMessage) {
        noResultsMessage.style.display = 'none'; // Hide the message
    }
}

/*===================================================================*/

//Below function is used for Jobs & Internships in StartUps only
function viewDetails(title) {
  const details = getDetailsForTitle(title);

  if (details) {
    const detailsContent = document.getElementById("details-content");
    detailsContent.innerHTML = `
            <h3>${details.title}</h3>
            <p><b>Location:</b> ${details.location}</p>
            <p><b>Company:</b> ${details.company}</p>
            <p><b>Job Type:</b> ${details.jobType}</p>
            <p><b>Salary/Stipend:</b> ${details.salary || details.stipend}</p>
            <p><b>Description of this Job:</b> ${details.description}</p>
            <button style="background-color: rgb(0, 86, 179, 0.8); color: #fff; border: none; padding: 10px 20px; font-size: 1rem; cursor: pointer; margin-bottom: 1.5rem; margin-top: 1.5rem; margin-left: 1.5rem" 
            onclick="applyJob('${details.title}')">Apply Now</button>
        `;

    showTab("details");
  } else {
    console.error("Details not found for title:", title);
  }
}

// This function is added for apply now button to get notified
function applyJob(title) {
  alert(`You are applied successfully to ${title} Role`);
}

function getDetailsForTitle(title) {
  const data = {
    "Software Engineer": {
      title: "Software Engineer",
      location: "Bangalore, India",
      company: "Flipkart",
      jobType: "Full-time",
      salary: "₹15,00,000 - ₹20,00,000 per annum",
      description:
        "About the Job Role: As a Software Engineer at Flipkart, you will design, develop, and deploy scalable software solutions. Skills Required: Proficiency in Java, Python, and cloud technologies. Benefits: Health insurance, employee discounts, and stock options. Experience: 2-4 years. Number of Openings: 5. About Company: Flipkart is India's leading e-commerce platform, offering a wide range of products and services.",
    },
    "Product Manager": {
      title: "Product Manager",
      location: "Gurgaon, India",
      company: "Zomato",
      jobType: "Full-time",
      salary: "₹18,00,000 - ₹25,00,000 per annum",
      description:
        "About the Job Role: As a Product Manager at Zomato, you will oversee the development and launch of new products. Skills Required: Strong analytical skills, experience with product lifecycle management, and excellent communication skills. Benefits: Health insurance, meal vouchers, and performance bonuses. Experience: 3-5 years. Number of Openings: 2. About Company: Zomato is a global restaurant discovery and food delivery service, operating in over 24 countries.",
    },
    "Data Scientist": {
      title: "Data Scientist",
      location: "Hyderabad, India",
      company: "Swiggy",
      jobType: "Full-time",
      salary: "₹20,00,000 - ₹28,00,000 per annum",
      description:
        "About the Job Role: As a Data Scientist at Swiggy, you will analyze large datasets to drive business decisions. Skills Required: Proficiency in Python, R, SQL, and experience with machine learning algorithms. Benefits: Health insurance, stock options, and flexible work hours. Experience: 2-4 years. Number of Openings: 4. About Company: Swiggy is India's leading food delivery platform, operating in over 500 cities.",
    },
    "Mobile Developer": {
      title: "Mobile Developer",
      location: "Pune, India",
      company: "Paytm",
      jobType: "Full-time",
      salary: "₹12,00,000 - ₹18,00,000 per annum",
      description:
        "About the Job Role: As a Mobile Developer at Paytm, you will develop and maintain mobile applications for Android and iOS. Skills Required: Proficiency in Java, Kotlin, Swift, and experience with mobile app frameworks. Benefits: Health insurance, employee discounts, and professional development opportunities. Experience: 1-3 years. Number of Openings: 3. About Company: Paytm is a leading digital payment and financial services company in India.",
    },
    "DevOps Engineer": {
      title: "DevOps Engineer",
      location: "Bangalore, India",
      company: "Ola",
      jobType: "Full-time",
      salary: "₹14,00,000 - ₹20,00,000 per annum",
      description:
        "About the Job Role: As a DevOps Engineer at Ola, you will automate and streamline operations and processes. Skills Required: Proficiency in AWS, Docker, Kubernetes, and CI/CD pipelines. Benefits: Health insurance, performance bonuses, and flexible work hours. Experience: 2-5 years. Number of Openings: 4. About Company: Ola is a leading ride-hailing company in India, offering a range of mobility solutions.",
    },
    "Frontend Developer": {
      title: "Frontend Developer",
      location: "Mumbai, India",
      company: "Byju's",
      jobType: "Full-time",
      salary: "₹10,00,000 - ₹15,00,000 per annum",
      description:
        "About the Job Role: As a Frontend Developer at Byju's, you will create and maintain web user interfaces. Skills Required: Proficiency in HTML, CSS, JavaScript, and React.js. Benefits: Health insurance, performance bonuses, and learning opportunities. Experience: 1-3 years. Number of Openings: 3. About Company: Byju's is a leading ed-tech company in India, offering online learning programs for students.",
    },
    "Backend Developer": {
      title: "Backend Developer",
      location: "Noida, India",
      company: "Unacademy",
      jobType: "Full-time",
      salary: "₹12,00,000 - ₹18,00,000 per annum",
      description:
        "About the Job Role: As a Backend Developer at Unacademy, you will build and maintain server-side logic and databases. Skills Required: Proficiency in Python, Django, and database management. Benefits: Health insurance, stock options, and flexible work hours. Experience: 2-4 years. Number of Openings: 2. About Company: Unacademy is a leading online education platform in India, offering courses in various subjects.",
    },
    "AI Engineer": {
      title: "AI Engineer",
      location: "Bangalore, India",
      company: "Razorpay",
      jobType: "Full-time",
      salary: "₹22,00,000 - ₹30,00,000 per annum",
      description:
        "About the Job Role: As an AI Engineer at Razorpay, you will develop and implement AI models and algorithms. Skills Required: Proficiency in Python, TensorFlow, PyTorch, and experience with AI/ML techniques. Benefits: Health insurance, performance bonuses, and professional development opportunities. Experience: 3-5 years. Number of Openings: 3. About Company: Razorpay is a leading fintech company in India, providing payment solutions to businesses.",
    },
    "Cybersecurity Analyst": {
      title: "Cybersecurity Analyst",
      location: "Chennai, India",
      company: "Freshworks",
      jobType: "Full-time",
      salary: "₹14,00,000 - ₹22,00,000 per annum",
      description:
        "About the Job Role: As a Cybersecurity Analyst at Freshworks, you will protect IT infrastructure from cyber threats. Skills Required: Knowledge of cybersecurity principles, experience with security tools and techniques. Benefits: Health insurance, employee stock options, and flexible work hours. Experience: 2-4 years. Number of Openings: 3. About Company: Freshworks is a global leader in customer engagement software, providing innovative solutions to businesses.",
    },
    "Blockchain Developer": {
      title: "Blockchain Developer",
      location: "Mumbai, India",
      company: "CoinDCX",
      jobType: "Full-time",
      salary: "₹16,00,000 - ₹24,00,000 per annum",
      description:
        "About the Job Role: As a Blockchain Developer at CoinDCX, you will develop blockchain-based solutions. Skills Required: Proficiency in Solidity, Ethereum, smart contracts, and blockchain frameworks. Benefits: Health insurance, performance bonuses, and professional development opportunities. Experience: 2-5 years. Number of Openings: 2. About Company: CoinDCX is a leading cryptocurrency exchange platform in India, offering a wide range of crypto assets.",
    },

    //Internships are starting from here....
    "Marketing Intern": {
      title: "Marketing Intern",
      location: "Bangalore, India",
      company: "Zerodha",
      jobType: "Full-time",
      stipend: "₹20,000 - ₹25,000 per month",
      description:
        "About the Job Role: As a Marketing Intern at Zerodha, you will assist in developing marketing strategies and campaigns. Skills Required: Marketing, communication, and analytical skills. Stipend: ₹20,000 - ₹25,000 per month. Benefits: Exposure to financial markets, learning opportunities, and flexible working hours. Experience: Fresher. Number of Openings: 3. About Company: Zerodha is a financial services company that offers brokerage-free equity investments.",
    },
    "Data Analyst Intern": {
      title: "Data Analyst Intern",
      location: "Hyderabad, India",
      company: "Swiggy",
      jobType: "Part-time",
      stipend: "₹15,000 - ₹20,000 per month",
      description:
        "About the Job Role: As a Data Analyst Intern at Swiggy, you will analyze data to drive business decisions. Skills Required: Data analysis, SQL, and Excel. Stipend: ₹15,000 - ₹20,000 per month. Benefits: Free meals, learning opportunities, and flexible working hours. Experience: Fresher. Number of Openings: 2. About Company: Swiggy is a leading food delivery platform in India.",
    },
    "Content Writer Intern": {
      title: "Content Writer Intern",
      location: "Mumbai, India",
      company: "Unacademy",
      jobType: "Full-time",
      stipend: "₹10,000 - ₹15,000 per month",
      description:
        "About the Job Role: As a Content Writer Intern at Unacademy, you will create educational content for various courses. Skills Required: Writing, research, and editing skills. Stipend: ₹10,000 - ₹15,000 per month. Benefits: Free courses, learning opportunities, and flexible working hours. Experience: Fresher. Number of Openings: 4. About Company: Unacademy is an online learning platform that provides educational content.",
    },
    "Graphic Design Intern": {
      title: "Graphic Design Intern",
      location: "Chennai, India",
      company: "Freshworks",
      jobType: "Part-time",
      stipend: "₹12,000 - ₹18,000 per month",
      description:
        "About the Job Role: As a Graphic Design Intern at Freshworks, you will create visual content for marketing campaigns. Skills Required: Graphic design, Adobe Photoshop, and Illustrator. Stipend: ₹12,000 - ₹18,000 per month. Benefits: Learning opportunities, flexible working hours, and a creative work environment. Experience: Fresher. Number of Openings: 2. About Company: Freshworks provides cloud-based customer engagement software.",
    },
    "Software Development Intern": {
      title: "Software Development Intern",
      location: "Pune, India",
      company: "Razorpay",
      jobType: "Full-time",
      stipend: "₹25,000 - ₹30,000 per month",
      description:
        "About the Job Role: As a Software Development Intern at Razorpay, you will work on developing and maintaining software applications. Skills Required: Programming, problem-solving, and teamwork. Stipend: ₹25,000 - ₹30,000 per month. Benefits: Learning opportunities, flexible working hours, and a vibrant work environment. Experience: Fresher. Number of Openings: 3. About Company: Razorpay is a leading payment solutions company in India.",
    },
    "Business Development Intern": {
      title: "Business Development Intern",
      location: "Gurgaon, India",
      company: "UrbanClap",
      jobType: "Part-time",
      stipend: "₹18,000 - ₹22,000 per month",
      description:
        "About the Job Role: As a Business Development Intern at UrbanClap, you will assist in identifying new business opportunities. Skills Required: Communication, market research, and sales skills. Stipend: ₹18,000 - ₹22,000 per month. Benefits: Learning opportunities, flexible working hours, and exposure to business development strategies. Experience: Fresher. Number of Openings: 2. About Company: UrbanClap is a home services platform that connects users with professionals.",
    },
    "HR Intern": {
      title: "HR Intern",
      location: "Noida, India",
      company: "Paytm",
      jobType: "Full-time",
      stipend: "₹15,000 - ₹20,000 per month",
      description:
        "About the Job Role: As an HR Intern at Paytm, you will assist in various HR functions such as recruitment and employee engagement. Skills Required: HR management, communication, and organizational skills. Stipend: ₹15,000 - ₹20,000 per month. Benefits: Learning opportunities, flexible working hours, and exposure to HR processes. Experience: Fresher. Number of Openings: 2. About Company: Paytm is a leading digital payments and financial services company in India.",
    },
    "Operations Intern": {
      title: "Operations Intern",
      location: "Kolkata, India",
      company: "Lenskart",
      jobType: "Part-time",
      stipend: "₹10,000 - ₹15,000 per month",
      description:
        "About the Job Role: As an Operations Intern at Lenskart, you will assist in the day-to-day operations of the company. Skills Required: Operations management, communication, and problem-solving skills. Stipend: ₹10,000 - ₹15,000 per month. Benefits: Learning opportunities, flexible working hours, and exposure to operations management. Experience: Fresher. Number of Openings: 3. About Company: Lenskart is an online retailer of eyewear and contact lenses.",
    },
    "UI/UX Design Intern": {
      title: "UI/UX Design Intern",
      location: "Jaipur, India",
      company: "Zomato",
      jobType: "Full-time",
      stipend: "₹20,000 - ₹25,000 per month",
      description:
        "About the Job Role: As a UI/UX Design Intern at Zomato, you will assist in designing user interfaces and user experiences for the company's products. Skills Required: UI/UX design, Adobe XD, and Figma. Stipend: ₹20,000 - ₹25,000 per month. Benefits: Learning opportunities, flexible working hours, and a creative work environment. Experience: Fresher. Number of Openings: 2. About Company: Zomato is a global restaurant discovery and food delivery platform.",
    },
    "Finance Intern": {
      title: "Finance Intern",
      location: "Ahmedabad, India",
      company: "Cred",
      jobType: "Part-time",
      stipend: "₹15,000 - ₹20,000 per month",
      description:
        "About the Job Role: As a Finance Intern at Cred, you will assist in financial analysis and reporting. Skills Required: Financial analysis, Excel, and attention to detail. Stipend: ₹15,000 - ₹20,000 per month. Benefits: Learning opportunities, flexible working hours, and exposure to financial management. Experience: Fresher. Number of Openings: 2. About Company: Cred is a fintech company that offers rewards for paying credit card bills.",
    },
    // Add more cases for other job, internship, and startup titles
  };

  return data[title] || null;
}

/*===================================================================*/

//Below function is used for Established StartUps only this function is created for this only.
function viewStartupDetails(title) {
  const details = startupData[title];

  if (details) {
    const detailsContent = document.getElementById("details-content");
    detailsContent.innerHTML = `
            <h3>${details.title}</h3>
            <p><b>Industry:</b> ${details.industry}</p>
            <p><b>Location:</b> ${details.location}</p>
            <p><b>Growth:</b> ${details.growth}</p>
            <p><b>Angel Investors:</b> ${details.angelInvestors}</p>
            <p><b>Stage:</b> ${details.stage}</p>
            <p>${details.description}</p>
            <div class="apply-buttons" style="display: flex; justify-content: center; align-items: center; flex-direction: row;">

            <button style="background-color: rgb(0, 86, 179, 0.8); color: #fff; border: none; padding: 10px 20px; font-size: 1rem; cursor: pointer; margin-bottom: 1.5rem; margin-top: 1.5rem; margin-left: 1.5rem" 
            onclick="applyEmployee('${details.title}')">Apply as a Employee</button>

            <button style="background-color: rgb(0, 86, 179, 0.8); color: #fff; border: none; padding: 10px 20px; font-size: 1rem; cursor: pointer; margin-bottom: 1.5rem; margin-top: 1.5rem; margin-left: 1.5rem" 
            onclick="applyInvestor('${details.title}')">Apply as a Investor</button>

            <button style="background-color: rgb(0, 86, 179, 0.8); color: #fff; border: none; padding: 10px 20px; font-size: 1rem; cursor: pointer; margin-bottom: 1.5rem; margin-top: 1.5rem; margin-left: 1.5rem" 
            onclick="applyFounder('${details.title}')">Apply as a Co-Founder</button>
            </div>
        `;
    showTab("details");
  } else {
    console.error("Details not found for title:", title);
  }
}

function applyEmployee(title) {
  alert(`You have successfully applied to ${title} as a Employee.`);
}
function applyInvestor(title) {
  alert(`You have successfully applied to ${title} as a Investor.`);
}
function applyFounder(title) {
  alert(`You have successfully applied to ${title} as a Co-Founder.`);
}

const startupData = {
  HealthMate: {
    title: "HealthMate",
    industry: "Health",
    location: "Bangalore, India",
    growth: "30%",
    angelInvestors: "Sequoia Capital",
    stage: "Established",
    description:
      "HealthMate is a prominent health industry startup based in Bangalore, India. It has shown a growth rate of 30% and is backed by Sequoia Capital. The startup is in the Established stage, focusing on innovative health solutions.",
  },
  TechNexus: {
    title: "TechNexus",
    industry: "Technology",
    location: "San Francisco, USA",
    growth: "50%",
    angelInvestors: "Y Combinator",
    stage: "Established",
    description:
      "TechNexus operates in the technology sector and is located in San Francisco, USA. With a growth rate of 50%, it has received backing from Y Combinator. The startup is well-established, fostering tech innovation and growth.",
  },
  EcoSolutions: {
    title: "EcoSolutions",
    industry: "Environmental",
    location: "Mumbai, India",
    growth: "40%",
    angelInvestors: "Accel Partners",
    stage: "Established",
    description:
      "EcoSolutions focuses on environmental solutions and is headquartered in Mumbai, India. It has shown a growth rate of 40% and is supported by Accel Partners. The startup operates in the Established stage, addressing environmental challenges.",
  },
};
// Example usage:
// Call viewStartupDetails function with the title of the startup you want to display
//viewStartupDetails("HealthMate"); just default calling


/*===================================================================*/

//Below function is used for New StartUps only this function is created for this only.
function viewNewStartupDetails(title) {
  const details = newStartupData[title];

  if (details) {
    const detailsContent = document.getElementById("details-content");
    detailsContent.innerHTML = `
            <h3>${details.title}</h3>
            <p><b>Industry:</b> ${details.industry}</p>
            <p><b>Location:</b> ${details.location}</p>
            <p><b>Growth Rate:</b> ${details.growth}</p>
            <p><b>Angel Investors:</b> ${details.angelInvestors}</p>
            <p><b>Stage:</b> ${details.stage}</p>
            <p>${details.description}</p>
            <div class="apply-buttons" style="display: flex; justify-content: center; align-items: center; flex-direction: row;">

            <button style="background-color: rgb(0, 86, 179, 0.8); color: #fff; border: none; padding: 10px 20px; font-size: 1rem; cursor: pointer; margin-bottom: 1.5rem; margin-top: 1.5rem; margin-left: 1.5rem" 
            onclick="applyEmployee('${details.title}')">Apply as a Employee</button>

            <button style="background-color: rgb(0, 86, 179, 0.8); color: #fff; border: none; padding: 10px 20px; font-size: 1rem; cursor: pointer; margin-bottom: 1.5rem; margin-top: 1.5rem; margin-left: 1.5rem" 
            onclick="applyInvestor('${details.title}')">Apply as a Investor</button>

            <button style="background-color: rgb(0, 86, 179, 0.8); color: #fff; border: none; padding: 10px 20px; font-size: 1rem; cursor: pointer; margin-bottom: 1.5rem; margin-top: 1.5rem; margin-left: 1.5rem" 
            onclick="applyFounder('${details.title}')">Apply as a Co-Founder</button>
            </div>
        `;
    showTab("details");
  } else {
    console.error("Details not found for title:", title);
  }
}

function applyEmployee(title) {
  alert(`You have successfully applied to ${title} as a Employee.`);
}
function applyInvestor(title) {
  alert(`You have successfully applied to ${title} as a Investor.`);
}
function applyFounder(title) {
  alert(`You have successfully applied to ${title} as a Co-Founder.`);
}
const newStartupData = {
  FoodTech: {
    title: "FoodTech",
    industry: "Food Technology",
    location: "New York City, USA",
    growth: "35%",
    angelInvestors: "Andreessen Horowitz",
    stage: "New",
    description:
      "FoodTech is a leading food technology startup based in New York City, USA. It has achieved a growth rate of 35% and is backed by Andreessen Horowitz. The startup is in the Established stage, developing innovative solutions in the food technology sector.",
  },

  "FinTech Solutions": {
    title: "FinTech Solutions",
    industry: "Financial Technology",
    location: "London, UK",
    growth: "45%",
    angelInvestors: "Kleiner Perkins",
    stage: "New",
    description:
      "FinTech Solutions is a prominent financial technology startup based in London, UK. It has shown a growth rate of 45% and is backed by Kleiner Perkins. The startup is in the Established stage, providing cutting-edge financial technology solutions.",
  },
};

/*===================================================================*/
function goBack() {
  showTab(previousTabId);
}
