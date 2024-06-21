const password = "vegaisabakabutcute"; // Set your desired password here

function checkPassword() {
  const passwordInput = document.getElementById("password").value;
  const message = document.getElementById("message");

  if (passwordInput === password) {
    message.style.color = "green";
    message.innerHTML = "noice, you remember the password, while you're waiting for the page to load, lets talk, okkie? soo yesterday i entered your room when you were eating and stole all your pink, yellow and white socks, hai! thank you.";
    
    // Redirect to another HTML file after 2 seconds (2000 milliseconds)
    setTimeout(() => {
      window.location.href = "firstbuttons.html"; // Change "another-page.html" to the file you want to redirect to
    }, 10000); // 2 seconds delay before redirecting
  } else {
    message.style.color = "red";
    message.innerHTML = "baaaka!";
  }
}
