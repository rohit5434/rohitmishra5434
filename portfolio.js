// Dark Mode Toggle
const toggleButton = document.getElementById("darkModeToggle");

if (localStorage.getItem("darkMode") === "enabled") {
    document.body.classList.add("dark-mode");
    toggleButton.textContent = "🌞"; // Light mode icon
}

toggleButton.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");

    if (document.body.classList.contains("dark-mode")) {
        localStorage.setItem("darkMode", "enabled");
        toggleButton.textContent = "🌞"; // Light mode
    } else {
        localStorage.setItem("darkMode", "disabled");
        toggleButton.textContent = "🌙"; // Dark mode
    }
});

// Navbar Click Effect
let navH1 = document.querySelector(".nav-h1");
let navOptions = document.querySelector(".nav-options");
let navBtn = document.querySelector(".nav-btn");

navH1.addEventListener("click", function () {
    document.body.style.backgroundColor = "black";
    document.body.style.color = "palegreen";
    document.body.style.display = "flex";
    document.body.style.alignItems = "center";
    document.body.style.justifyContent = "center";
    document.body.style.fontSize = "80px";

    // Hide elements instead of overwriting body
    navH1.style.display = "none";
    navOptions.style.display = "none";
    navBtn.style.display = "none";

    let title = document.createElement("h1");
    title.textContent = "PORTFOLIO";
    document.body.appendChild(title);
});

// Image Toggle
let imageElement = document.querySelector(".herosection-right-myimage");

if (imageElement) {
    imageElement.addEventListener("click", function () {
        imageElement.src = imageElement.src.includes("rohit.png")
            ? "image/rohit3.png"
            : "image/rohit.png";
    });
}

// Services Hover Effect (Optimized)
document.querySelectorAll(".services-box-1, .services-box-2, .services-box-3").forEach(box => {
    box.addEventListener("mouseover", function () {
        box.style.backgroundColor = "palegreen";
        box.style.color = "black";
    });

    box.addEventListener("mouseout", function () {
        box.style.backgroundColor = "black";
        box.style.color = "palegreen";
    });
});

// Learn More Click Alert
document.querySelectorAll(".learn").forEach(btn => {
    btn.addEventListener("click", function () {
        alert("All details coming soon");
    });
});

// Projects Section
let projectsH1 = document.querySelector(".projects-h1");
let projectsBoxes = document.querySelector(".projects-boxes");

projectsH1.addEventListener("click", function () {
    projectsBoxes.style.display = "flex";
});

// Contact Email Form Validation
function sendEmail() {
    let name = document.getElementById("name").value.trim();
    let email = document.getElementById("email").value.trim();
    let message = document.getElementById("message").value.trim();

    if (!name || !email || !message) {
        alert("Please fill out all fields before submitting.");
        return;
    }

    let emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
        alert("Please enter a valid email address.");
        return;
    }

    let subject = encodeURIComponent(`New Contact Form Submission from ${name}`);
    let body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\nMessage: ${message}`);

    window.location.href = `mailto:mishrashyam8055@gmail.com?subject=${subject}&body=${body}`;
    alert("Thank you for contacting us! Your email client will open now.");
    document.getElementById("contactForm").reset();
}

// Sidebar Menu Toggle
document.querySelector(".menu-btn").addEventListener("click", function () {
    document.querySelector(".sidebar").classList.add("active");
});

document.querySelector(".close-btn").addEventListener("click", function () {
    document.querySelector(".sidebar").classList.remove("active");
});
