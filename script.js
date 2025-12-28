function addComment(postNumber) {
    const name = document.getElementById(`name${postNumber}`).value;
    const comment = document.getElementById(`comment${postNumber}`).value;

    if (name.trim() === "" || comment.trim() === "") {
        alert("Please fill in both fields.");
        return;
    }

    const commentSection = document.getElementById(`comments${postNumber}`);
    const newComment = document.createElement("div");
    newComment.classList.add("single-comment");
    newComment.innerHTML = `<strong>${name}</strong><p>${comment}</p><hr>`;

    commentSection.appendChild(newComment);

    // Clear inputs
    document.getElementById(`name${postNumber}`).value = "";
    document.getElementById(`comment${postNumber}`).value = "";
}

// Smooth scrolling for navigation links
document.querySelectorAll("nav a").forEach(link => {
    link.addEventListener("click", function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute("href"));
        target.scrollIntoView({ behavior: "smooth" });
    });
});
// Scroll-to-top button logic
const topBtn = document.getElementById("topBtn");

window.addEventListener("scroll", () => {
    if (window.scrollY > 300) {
        topBtn.classList.add("show");
    } else {
        topBtn.classList.remove("show");
    }
});

topBtn.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
});

// Highlight active navigation link based on scroll position
const sections = document.querySelectorAll("section.post");
const navLinks = document.querySelectorAll("nav a");

window.addEventListener("scroll", () => {
    let current = "";

    sections.forEach(section => {
        const sectionTop = section.offsetTop - 80;
        if (pageYOffset >= sectionTop) {
            current = section.getAttribute("id");
        }
    });

    navLinks.forEach(link => {
        link.classList.remove("active");
        if (link.getAttribute("href").includes(current)) {
            link.classList.add("active");
        }
    });
});
