// // Elements
// const usernameInput = document.getElementById('username');
// const emailInput = document.getElementById('email');
// const usernameStatus = document.getElementById('username-status');
// const emailStatus = document.getElementById('email-status');

// // Fetch existing users once (simulate DB)
// let users = [];
// fetch('users.json')
//   .then(res => res.json())
//   .then(data => users = data)
//   .catch(err => console.error('Error fetching users:', err));

// // Check username in real-time
// usernameInput.addEventListener('input', () => {
//   const username = usernameInput.value.trim().toLowerCase();
//   const taken = users.some(user => user.username.toLowerCase() === username);
  
//   if (username.length === 0) {
//     usernameStatus.textContent = '';
//   } else if (taken) {
//     usernameStatus.textContent = '❌ Username taken';
//     usernameStatus.className = 'invalid';
//   } else {
//     usernameStatus.textContent = '✅ Username available';
//     usernameStatus.className = 'valid';
//   }
// });

// // Check email in real-time
// emailInput.addEventListener('input', () => {
//   const email = emailInput.value.trim().toLowerCase();
//   const taken = users.some(user => user.email.toLowerCase() === email);

//   if (email.length === 0) {
//     emailStatus.textContent = '';
//   } else if (taken) {
//     emailStatus.textContent = '❌ Email already registered';
//     emailStatus.className = 'invalid';
//   } else {
//     emailStatus.textContent = '✅ Email available';
//     emailStatus.className = 'valid';
//   }
// });

const usernameInput = document.getElementById("username");
const emailInput = document.getElementById("email");
const usernameStatus = document.getElementById("username-status");
const emailStatus = document.getElementById("email-status");

let users = [];

// Load user data
fetch("users.json")
  .then((res) => res.json())
  .then((data) => (users = data));

// Username check
usernameInput.addEventListener("input", () => {
  const name = usernameInput.value.toLowerCase();
  const taken = users.some((u) => u.username.toLowerCase() === name);
  usernameStatus.textContent = taken ? "❌ Taken" : "✅ Available";
  usernameStatus.className = taken ? "invalid" : "valid";
});

// Email check
emailInput.addEventListener("input", () => {
  const email = emailInput.value.toLowerCase();
  const taken = users.some((u) => u.email.toLowerCase() === email);
  emailStatus.textContent = taken ? "❌ Taken" : "✅ Available";
  emailStatus.className = taken ? "invalid" : "valid";
});

