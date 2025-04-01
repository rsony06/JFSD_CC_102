const quizQuestions = [
    // Java Programming Questions
    {
        subject: "Java Programming",
        question: "Which keyword is used to define a class in Java?",
        options: ["class", "struct", "define", "module"],
        answer: "class"
    },
    {
        subject: "Java Programming",
        question: "Which method is called when an object is created?",
        options: ["main()", "constructor", "init()", "start()"],
        answer: "constructor"
    },
    {
        subject: "Java Programming",
        question: "Which of these is not a Java primitive type?",
        options: ["int", "float", "string", "boolean"],
        answer: "string"
    },
    {
        subject: "Java Programming",
        question: "Which collection type does not allow duplicate elements?",
        options: ["List", "Set", "Map", "Array"],
        answer: "Set"
    },
    {
        subject: "Java Programming",
        question: "Which keyword is used to inherit a class in Java?",
        options: ["extends", "implements", "inherits", "super"],
        answer: "extends"
    },

    // Cloud Computing Questions
    {
        subject: "Cloud Computing",
        question: "Which of the following is NOT a cloud deployment model?",
        options: ["Public Cloud", "Private Cloud", "Hybrid Cloud", "Virtual Cloud"],
        answer: "Virtual Cloud"
    },
    {
        subject: "Cloud Computing",
        question: "What does SaaS stand for?",
        options: ["Software as a Service", "System as a Service", "Server as a Service", "Storage as a Service"],
        answer: "Software as a Service"
    },
    {
        subject: "Cloud Computing",
        question: "Which cloud model provides virtual machines and storage?",
        options: ["SaaS", "PaaS", "IaaS", "DaaS"],
        answer: "IaaS"
    },
    {
        subject: "Cloud Computing",
        question: "Which company offers AWS cloud services?",
        options: ["Google", "Microsoft", "Amazon", "IBM"],
        answer: "Amazon"
    },
    {
        subject: "Cloud Computing",
        question: "Which cloud computing feature allows resources to be scaled automatically?",
        options: ["Load Balancing", "Elasticity", "Backup", "Security"],
        answer: "Elasticity"
    },

    // Operating Systems Questions
    {
        subject: "Operating Systems",
        question: "Which of the following is an example of a real-time OS?",
        options: ["Windows", "Linux", "RTOS", "MacOS"],
        answer: "RTOS"
    },
    {
        subject: "Operating Systems",
        question: "Which part of the OS handles process scheduling?",
        options: ["Kernel", "Shell", "BIOS", "Driver"],
        answer: "Kernel"
    },
    {
        subject: "Operating Systems",
        question: "Which file system is used in Windows OS?",
        options: ["EXT4", "HFS+", "NTFS", "FAT32"],
        answer: "NTFS"
    },
    {
        subject: "Operating Systems",
        question: "Which memory management technique is used in modern OS?",
        options: ["Paging", "Segmentation", "Swapping", "All of the above"],
        answer: "All of the above"
    },
    {
        subject: "Operating Systems",
        question: "Which process state represents a waiting state?",
        options: ["Running", "Ready", "Blocked", "Terminated"],
        answer: "Blocked"
    }
];

let currentQuestionIndex = 0;
let score = 0;
let progress = 0;

function startQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    progress = 0;
    updateProgress();
    loadQuestion();
}

function loadQuestion() {
    if (currentQuestionIndex < quizQuestions.length) {
        const quizContainer = document.getElementById("quizContainer");
        const q = quizQuestions[currentQuestionIndex];
        let optionsHtml = q.options.map((opt, index) => 
            `<button class="option-btn" onclick="checkAnswer('${opt}')">${index + 1}. ${opt}</button>`).join("");

        quizContainer.innerHTML = `
            <h3>${q.subject}</h3>
            <p>${q.question}</p>
            ${optionsHtml}
            <p id="quizResult"></p>
        `;
    } else {
        document.getElementById("quizContainer").innerHTML = `<h3>Quiz Completed!</h3><p>Your Score: ${score}/${quizQuestions.length}</p>`;
    }
}

function checkAnswer(selectedOption) {
    const correctAnswer = quizQuestions[currentQuestionIndex].answer;
    let resultText = document.getElementById("quizResult");

    if (selectedOption === correctAnswer) {
        resultText.innerHTML = "Correct!";
        resultText.style.color = "green";
        score++;
        updateProgress();
    } else {
        resultText.innerHTML = `Incorrect! Correct answer: ${correctAnswer}`;
        resultText.style.color = "red";
    }

    currentQuestionIndex++;
    setTimeout(loadQuestion, 1000);  // Load next question after 1 second
}

function updateProgress() {
    progress = (score / quizQuestions.length) * 100;
    document.getElementById("progressContainer").innerText = `Progress: ${progress.toFixed(0)}%`;
}
