const loginFormHandler = async (event) => {
  event.preventDefault();

  // Collect values from the login form
  const username = document.querySelector("#username-login").value.trim();
  const password = document.querySelector("#password-login").value.trim();
  if (username && password) {
    // Send a POST request to the API endpoint
    const response = await fetch("/api/users/login", {
      method: "POST",
      body: JSON.stringify({ username, password }),
      headers: { "Content-Type": "application/json" },
    });
    console.log(username);
    console.log(password);

    if (response.ok) {
      // fires get /dashboard route in homeRoutes
      document.location.replace("/dashboard");
    } else {
      let res = await response.json();
      // TODO: Configure error message
      // errorMessage(res.message);
      alert(res.message);
    }
  }

  if (!username) {
    // TODO: Configure error message
    // errorMessage("Please enter a username to login");
    alert("Please enter a username to login");
  } else if (!password) {
    // TODO: Configure error message
    // errorMessage("Please enter a password to login");
    alert("Please enter a password to login");
  }
};

document
  .querySelector(".login-form")
  .addEventListener("submit", loginFormHandler);