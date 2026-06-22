const roles = [
    "Full Stack Java Developer",
    "Web Developer",
    "Frontend Developer",
    "Core Java Enthusiast"
];

let index = 0;

const typingText = document.getElementById("typing-text");

setInterval(() => {
    typingText.textContent = roles[index];
    index++;

    if (index >= roles.length) {
        index = 0;
    }
}, 2000);