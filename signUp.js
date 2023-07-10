// JavaScript for form validation
function validateForm(event) {
    event.preventDefault(); // Prevent form submission

    // Get form inputs
    var nameInput = document.getElementById("name");
    var emailInput = document.getElementById("email");
    var passwordInput = document.getElementById("password");
    var confirmPasswordInput = document.getElementById("confirm-password");
    var errorMessage = document.getElementById("error-message");

    // Validate password match
    if (passwordInput.value !== confirmPasswordInput.value) {
      errorMessage.textContent = "Passwords do not match";
      return;
    }

    // Perform additional validation here (e.g., email format, password strength)

    // If all validations pass, submit the form
    document.getElementById("signup-form").submit();
  }

  // JavaScript to toggle between sign-in and sign-up forms
  function toggleForm(formId) {
    var signinForm = document.getElementById("signin-form");
    var signupForm = document.getElementById("signup-form");

    if (formId === "signin-form") {
      signinForm.style.display = "block";
      signupForm.style.display = "none";
    } else if (formId === "signup-form") {
      signinForm.style.display = "none";
      signupForm.style.display = "block";
    }
  }