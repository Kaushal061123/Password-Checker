document
  .getElementById("show-password")
  .addEventListener("change", function () {
    const passwordInput = document.getElementById("password");
    if (this.checked) {
      passwordInput.type = "text";
    } else {
      passwordInput.type = "password";
    }
  });

document
  .getElementById("check-password")
  .addEventListener("click", function () {
    const password = document.getElementById("password").value;
    const passwordStrength = document.getElementById("password-strength");
    const suggestions = document.getElementById("suggestions");
    let suggestionsList = [];

    if (password.length < 8) {
      suggestionsList.push("at least 8 characters");
    }
    if (!/[A-Z]/.test(password)) {
      suggestionsList.push("an uppercase letter");
    }
    if (!/[a-z]/.test(password)) {
      suggestionsList.push("a lowercase letter");
    }
    if (!/\d/.test(password)) {
      suggestionsList.push("a digit");
    }
    if (!/[@#$%^&*(),.?":{}|<>]/.test(password)) {
      suggestionsList.push("a special character");
    }

    if (suggestionsList.length > 0) {
      passwordStrength.textContent = "Weak";
      passwordStrength.style.color = "red";
      suggestions.textContent =
        "Password should include: " + suggestionsList.join(", ");
      suggestions.style.color = "red";
    } else {
      passwordStrength.textContent = "Strong";
      passwordStrength.style.color = "green";
      suggestions.textContent = "Your password is strong.";
      suggestions.style.color = "green";
    }
  });
