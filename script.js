// Handle form submission
document.getElementById('login-form').addEventListener('submit', function(event) {
  event.preventDefault(); // Prevent the form from submitting

  const username = document.getElementById('username').value;
  const password = document.getElementById('password').value;

  // Simple validation check (You can replace this with actual validation logic)
  if (username === "user" && password === "password123") {
    alert('Login Successful!');
    // Redirect to dashboard or home page
    window.location.href = "dashboard.html";
  } else {
    alert('Invalid username or password.');
  }
});