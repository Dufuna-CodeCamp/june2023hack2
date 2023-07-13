
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


  // Billing section

var payButton = document.querySelector(".payment");

var selectAddToCart = document.querySelectorAll(".cart");
var checkout = document.getElementById('checkout');

selectAddToCart.forEach(function (element, index) {
  element.addEventListener('click', function () {
    var elementExists = selectAddToCart[index].querySelector('p') !== null;

    if (elementExists) {
      alert("Item already added to cart proceeding to checkout")
    } else {
      newParagraph = document.createElement('p');
    
      var linkElement = document.createElement('a');
      linkElement.href = 'billing.html';
    
      var addToCartText = document.createTextNode('Click here to checkout');
    
      linkElement.appendChild(addToCartText);
      newParagraph.appendChild(linkElement);
    
      selectAddToCart[index].appendChild(newParagraph);

      var checkoutBtn = document.getElementById('checkout');
      // Add a click event listener to the button
      checkoutBtn.addEventListener('click', function() {
      // Redirect to billing page
      if (!elementExists){
        window.location.href = 'billing.html';
      } else {
        alert("add items to cart first")
      }}); 

    }
  });
});

payButton.addEventListener('click',() => {
 
  alert("Thank you for making a purchase!");
});