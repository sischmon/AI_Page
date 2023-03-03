const searchForm = document.querySelector(".search-form");
  const searchInput = searchForm.querySelector("input");
  const searchButton = searchForm.querySelector("button");

  searchForm.addEventListener("submit", function (event) {
    event.preventDefault();
    const searchTerm = searchInput.value.trim();
    if (searchTerm !== "") {
      alert(`You searched for: ${searchTerm}`);
      // Replace alert with your search logic
    }
  });