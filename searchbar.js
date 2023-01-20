
// ეს ცვლადი გამოიყენება იმ მონაცემების შესანახად, რომლებიც ამოღებულია API-დან, როდესაც გვერდი პირველად იტვირთება. მოგვიანებით ეს ცვლადი გამოყენებული იქნება საძიებო მოთხოვნის საფუძველზე მონაცემების გასაფილტრად
let allData = [];
const results2 = document.getElementById("results");

window.onload = async () => {
  const response = await fetch("https://reqres.in/api/users?page=2");
  const data = await response.json();
  allData = data.data;
  let resultsHTML = "";
// 
  allData.forEach((user) => {
    resultsHTML += `<div>
      <img src="${user.avatar}" alt="${user.email}">
      <p>${user.email}</p>
    </div>`;
  });
  results2.innerHTML = resultsHTML;
}


const searchButton = document.getElementById("search-button");
const searchInput = document.getElementById("search-input");

// საძიებო შეკითხვის გაფილტვრა ძიების დროს.
searchButton.addEventListener("click", (event) => {
  event.preventDefault();
  const searchQuery = searchInput.value;
  const filteredData = allData.filter((user) => user.email.includes(searchQuery));
  let resultsHTML = "";

  filteredData.forEach((user) => {
    resultsHTML += `<div>
      <img src="${user.avatar}" alt="${user.email}">
      <p>${user.email}</p>
    </div>`;
  });

  results.innerHTML = resultsHTML;

  
  /// keyup search logicc //
  searchButton.addEventListener("click", search);
  searchInput.addEventListener("keyup", search);

  function search(event) {
      event.preventDefault();
      const searchQuery = searchInput.value;
      const filteredData = allData.filter((user) => user.email.includes(searchQuery));
      let resultsHTML = "";
      filteredData.forEach((user) => { resultsHTML += `<div>
      <img src="${user.avatar}" alt="${user.email}">
      <p>${user.email}</p>
    </div>`;
    });
    results.innerHTML = resultsHTML;
  }
});

