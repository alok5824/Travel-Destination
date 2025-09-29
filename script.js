function filterDestinations(continent) {
    const cards = document.querySelectorAll(".card");
    cards.forEach(card => {
      if (continent === "all") {
        card.style.display = "block";
      } else {
        card.style.display = card.classList.contains(continent) ? "block" : "none";
      }
    });
  }
  