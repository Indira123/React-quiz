(function () {
    const myQuestions = [
        {
            question: "What is ReactJS?",
            answers: {
                a: "Server-side Framework",
                b: "User-interface framework",
                c: "Both",
                d: "None"
            },
            correctAnswer: "c"
        },
        {
            question: "Props are?",
            answers: {
                a: "Injected",
                b: "Methods",
                c: "Both A and B",
                d: "All of these"
            },
            correctAnswer: "b"
        },
        {
            question: "At the highest level, React components have lifecycle events that fall into?",
            answers: {
                a: "Initialization",
                b: "State/Property Updates",
                c: "Destruction",
                d: "All of these"
            },
            correctAnswer: "d"
        },
        {
            question: "What does the “webpack” command do??",
            answers: {
                a: "Transpiles all the Javascript down into one file",
                b: "Runs react local development server",
                c: "Both A and B",
                d: "None"
            },
            correctAnswer: "a"
        },
        {
            question: "React merges the object you provide into the current state using",
            answers: {
                a: "setState()",
                b: "State()"
            },
            correctAnswer: "a"
        },
        {
            question: "Arbitrary inputs of components are called",
            answers: {
                a: "Keys",
                b: "Props",
                c: "Elements",
                d: "Ref"

            },
            correctAnswer: "b"
        },
        {
            question: "Which of the following needs to be updated to achieve dynamic UI updates?",
            answers: {
                a: "State",
                b: "Props"
            },
            correctAnswer: "a"
        },
        {
            question: "In JSX most of the errors can be caught during",
            answers: {
                a: "Interpretation",
                b: "Execution",
                c: "Compilation",
                d: "Build"
            },
            correctAnswer: "c"
        },
        {
            question: "Function that does not change its results for the same set of inputs are called",
            answers: {
                a: "Pure functions",
                b: "Impure Functions"
            },
            correctAnswer: "a"
        },
        {
            question: "What is the smallest building block of ReactJS?",
            answers: {
                a: "none of the options",
                b: "props",
                c: "elements",
                d: "components"
            },
            correctAnswer: "c"
        },
        {
            question: "In React state can be accessed using",
            answers: {
                a: "current",
                b: "state",
                c: "current()",
                d: "state()"
            },
            correctAnswer: "b"
        },
        {
            question: "Invoked once, only on the client, after rendering occurs",
            answers: {
                a: "componentWillUnmount",
                b: "shouldComponentUpdate",
                c: "componentWillMount",
                d: "componentDidMount"
            },
            correctAnswer: "d"
        }
    ];

    function buildQuiz() {
        const output = [];
        myQuestions.forEach((currentQuestion, questionNumber) => {
            const answers = [];

            for (letter in currentQuestion.answers) {
                answers.push(
                    `<label>
             <input type="radio" name="question${questionNumber}" value="${letter}">
              ${letter} :
              ${currentQuestion.answers[letter]}
           </label>`
                );
            }
            output.push(
                `<div class="slide">
           <div class="question"> ${currentQuestion.question} </div>
           <div class="answers"> ${answers.join("")} </div>
         </div>`
            );
        });
        quizContainer.innerHTML = output.join("");
    }

    function showResults() {
        const answerContainers = quizContainer.querySelectorAll(".answers");
        let numCorrect = 0;

        myQuestions.forEach((currentQuestion, questionNumber) => {
            const answerContainer = answerContainers[questionNumber];
            const selector = `input[name=question${questionNumber}]:checked`;
            const userAnswer = (answerContainer.querySelector(selector) || {}).value;

            if (userAnswer === currentQuestion.correctAnswer) {
                numCorrect++;
            }
        });

        const subject = `${numCorrect} out of ${myQuestions.length}`;
        if (confirm("Are you sure you want to submit the test? Click on OK will close the test window.")) {
            window.open('mailto:vijaya.tiple@yash.com?subject=' + subject + '');
            window.close();
        }
    }

    function showSlide(n) {
        slides[currentSlide].classList.remove("active-slide");
        slides[n].classList.add("active-slide");
        currentSlide = n;

        if (currentSlide === 0) {
            previousButton.style.display = "none";
        } else {
            previousButton.style.display = "inline-block";
        }

        if (currentSlide === slides.length - 1) {
            nextButton.style.display = "none";
            submitButton.style.display = "inline-block";
        } else {
            nextButton.style.display = "inline-block";
            submitButton.style.display = "none";
        }
    }

    function showNextSlide() {
        showSlide(currentSlide + 1);
    }

    function showPreviousSlide() {
        showSlide(currentSlide - 1);
    }

    const quizContainer = document.getElementById("quiz");
    const resultsContainer = document.getElementById("results");
    const submitButton = document.getElementById("submit");

    buildQuiz();

    const previousButton = document.getElementById("previous");
    const nextButton = document.getElementById("next");
    const slides = document.querySelectorAll(".slide");
    let currentSlide = 0;

    showSlide(0);

    submitButton.addEventListener("click", showResults);
    previousButton.addEventListener("click", showPreviousSlide);
    nextButton.addEventListener("click", showNextSlide);
})();