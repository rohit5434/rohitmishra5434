
const toggleButton = document.getElementById("darkModeToggle");

// Load saved mode
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

//navbar

let navH1 = document.querySelector(".nav-h1");
let body = document.querySelector("body");
let navOptions = document.querySelector(".nav-options");
let navBtn = document.querySelector(".nav-btn"); 

navH1.addEventListener("click",function(){
   body.style.backgroundColor="black";
   navH1.style.display="none";
   navOptions.style.display="none";
   navBtn.style.display="none";
   body.innerHTML='<h1>PORTFOLIO</h1>';
   body.style.color="palegreen";
   body.style.display="flex";
   body.style.alignItems="center";
   body.style.justifyContent="center";
   body.style.fontSize="80px";
})
 
//

let herosectionRightMyImage= document.querySelector(".herosection-right-myimage");




herosectionRightMyImage.addEventListener("click",function(){
   if(herosectionRightMyImage.src.includes("rohit.png")){
      herosectionRightMyImage.src="image/rohit3.png";
   }else{
      herosectionRightMyImage.src="image/rohit.png";
   }
})



//services part

let servicesBox1 = document.querySelector(".services-box-1");
let servicesBox2 = document.querySelector(".services-box-2");
let servicesBox3 = document.querySelector(".services-box-3");
let learn = document.querySelectorAll(".learn");

servicesBox1.addEventListener("mouseover",function(){
  servicesBox1.style.backgroundColor="palegreen"
  servicesBox1.style.color="black"
});
servicesBox1.addEventListener("mouseout",function(){
  servicesBox1.style.backgroundColor="black"
  servicesBox1.style.color="palegreen"
});
servicesBox2.addEventListener("mouseover",function(){
  servicesBox2.style.backgroundColor="palegreen"
  servicesBox2.style.color="black"
});
servicesBox2.addEventListener("mouseout",function(){
  servicesBox2.style.backgroundColor="black"
  servicesBox2.style.color="palegreen"
});
servicesBox3.addEventListener("mouseover",function(){
  servicesBox3.style.backgroundColor="palegreen"
  servicesBox3.style.color="black"
});
servicesBox3.addEventListener("mouseout",function(){
  servicesBox3.style.backgroundColor="black"
  servicesBox3.style.color="palegreen"
});


learn.forEach(function(learn){
learn.addEventListener("click",function(){
  alert("all details coming soon")
})
})

//projects

let projectsH1 = document.querySelector(".projects-h1");
let projectsBoxes = document.querySelector(".projects-boxes")
projectsH1.addEventListener("click",function(){
  projectsBoxes.style.display= "flex";

})


/* contact email */

/* function sendEmail() {
  let name = document.getElementById("name").value;
  let email = document.getElementById("email").value;
  let message = document.getElementById("message").value;

  let subject = encodeURIComponent("New Contact Form Submission from " + name);
  let body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\nMessage: ${message}`);

  let mailtoLink = `mailto:mishrashyam8055@gmail.com?subject=${subject}&body=${body}`;

  window.location.href = mailtoLink;

  alert("Thank you for contacting us! Your email client will open now.");
}
 */


function sendEmail() {
  let name = document.getElementById("name").value.trim();
  let email = document.getElementById("email").value.trim();
  let message = document.getElementById("message").value.trim();

  // Validate empty fields
  if (name === "" || email === "" || message === "") {
      alert("Please fill out all fields before submitting.");
      return;
  }

  // Validate email format
  let emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailPattern.test(email)) {
      alert("Please enter a valid email address.");
      return;
  }

  // Prepare email content
  let subject = encodeURIComponent("New Contact Form Submission from " + name);
  let body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\nMessage: ${message}`);

  // Create mailto link
  let mailtoLink = `mailto:mishrashyam8055@gmail.com?subject=${subject}&body=${body}`;

  // Open user's email client
  window.location.href = mailtoLink;

  // Show confirmation popup
  alert("Thank you for contacting us! Your email client will open now.");

  // Optional: Clear form after submission
  document.getElementById("contactForm").reset();
}

//////////







