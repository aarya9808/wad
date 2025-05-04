fetch("/employees")
  .then((res) => res.json())
  .then((data) => {
    const container = document.getElementById("employees");
    data.forEach((emp) => {
      const card = document.createElement("div");
      card.innerHTML = `
        <img src="${emp.image}" width="100" />
        <h3>${emp.name}</h3>
        <p>${emp.designation} - ${emp.department}</p>
        <p>Salary: $${emp.salary}</p>
        <hr/>
      `;
      container.appendChild(card);
    });
  })
  .catch((err) => console.error("Error:", err));
