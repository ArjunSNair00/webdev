    function validateLogin() {
      const username = document.getElementById("username").value.trim();
      const password = document.getElementById("password").value;
      const userErr = document.getElementById("username-error");
      const passErr = document.getElementById("password-error");

      userErr.textContent = "";
      passErr.textContent = "";

      let isValid = true;

      if (username === "") {
        userErr.textContent = "Username cannot be empty.";
        isValid = false;
      }

      if (password === "" || password.length < 6) {
        passErr.textContent = "Password must be at least 6 characters.";
        isValid = false;
      }

      if (isValid) {
        alert("Login successful!");
        setTimeout(() => {
          window.location.href = "index.html";
        }, 1000);
        return false; 
      }

      return false;
    }

    function resetErrors() {
      document.getElementById("username-error").textContent = "";
      document.getElementById("password-error").textContent = "";
    }