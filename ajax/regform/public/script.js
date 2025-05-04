document.addEventListener("DOMContentLoaded", () => {
  const registerForm = document.getElementById("registerForm");
  const loginForm = document.getElementById("loginForm");

  if (registerForm) {
    registerForm.addEventListener("submit", async (e) => {
      e.preventDefault();
      const formData = new FormData(registerForm);
      const data = {};
      formData.forEach((value, key) => (data[key] = value));

      const res = await fetch("/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (res.ok) {
        alert("Registered!");
        registerForm.reset();
      } else {
        alert("User already exists or invalid input");
      }
    });
  }

  if (loginForm) {
    loginForm.addEventListener("submit", async (e) => {
      e.preventDefault();
      const formData = new FormData(loginForm);
      const data = {};
      formData.forEach((value, key) => (data[key] = value));

      const res = await fetch("/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      const result = await res.json();
      alert(result.message);
    });
  }
});
