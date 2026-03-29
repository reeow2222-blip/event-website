function validateRegister() {
   let name = document.getElementById("name").value;
   let email = document.getElementById("email").value;
   if (name === "" || email === "") {
       alert("Please fill all fields!");
       return false;
   }
   alert("Registration Successful!");
   return true;
}
function validateLogin() {
   let email = document.getElementById("loginEmail").value;
   let password = document.getElementById("password").value;
   if (email === "" || password === "") {
       alert("Enter email and password!");
       return false;
   }
   alert("Login Successful!");
   return true;
}
function showForm() {
   document.getElementById("eventForm").style.display = "block";
}
function addEvent() {
   let name = document.getElementById("eventName").value;
   let date = document.getElementById("eventDate").value;
   if (name === "" || date === "") {
       alert("Please fill all fields!");
       return;
   }
   let newEvent = `
<div class="card">
<h3>${name}</h3>
<p>Date: ${date}</p>
</div>
   `;
   document.getElementById("eventsList").innerHTML += newEvent;
   alert("Event Added Successfully!");
   document.getElementById("eventName").value = "";
   document.getElementById("eventDate").value = "";
}
function updateCountdowns() {
  const countdownElements = document.querySelectorAll(".countdown");

  countdownElements.forEach(function(el) {
    const eventDate = new Date(el.getAttribute("data-date"));
    const today = new Date();

    const difference = eventDate - today;
    const days = Math.ceil(difference / (1000 * 60 * 60 * 24));

    if (days > 0) {
      el.textContent = days + " days left";
    } else if (days === 0) {
      el.textContent = "Event is today!";
    } else {
      el.textContent = "Event passed";
    }
  });
}

// Run when page loads
window.onload = updateCountdowns;